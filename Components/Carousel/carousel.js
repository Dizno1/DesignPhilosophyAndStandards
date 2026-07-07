(() => {
  const STORAGE_KEY = 'accessibleMultiMediaCarouselMotionPreference';
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const allCarousels = [];
  let siteMotionPaused = localStorage.getItem(STORAGE_KEY) === 'paused' || prefersReducedMotion;
  const interval = 6500;
  const globalLive = document.getElementById('global-status');
  const announcementHistory = new Map();
  const announcementDebounceMs = 900;
  const announcementQueue = [];
  let announcementProcessing = false;

  function queueAnnouncement(liveRegion, message, key = message) {
    if (!message) return;
    const now = Date.now();
    const lastTime = announcementHistory.get(key) || 0;
    if (now - lastTime < announcementDebounceMs) return;
    announcementHistory.set(key, now);
    announcementQueue.push({ liveRegion, message });
    processAnnouncementQueue();
  }

  function processAnnouncementQueue() {
    if (announcementProcessing || !announcementQueue.length) return;
    announcementProcessing = true;
    const { liveRegion, message } = announcementQueue.shift();
    const target = liveRegion || globalLive;
    if (target) {
      target.textContent = '';
      window.setTimeout(() => { target.textContent = message; }, 40);
    }
    window.setTimeout(() => {
      announcementProcessing = false;
      processAnnouncementQueue();
    }, 900);
  }

  function updateSitePreference(paused) {
    siteMotionPaused = paused;
    localStorage.setItem(STORAGE_KEY, paused ? 'paused' : 'active');
    allCarousels.forEach(instance => {
      instance.updatePauseButton();
      instance.stopTimer();
      if (paused) {
        instance.updateStatus('Motion is paused by your site-wide preference.');
      } else {
        instance.startTimer();
      }
    });
    queueAnnouncement(globalLive, paused ? 'Automatic motion disabled.' : 'Automatic motion enabled.', paused ? 'site-motion-paused' : 'site-motion-resumed');
  }

  class AccessibleCarousel {
    constructor(root) {
      this.root = root;
      this.slides = Array.from(root.querySelectorAll('.slide'));
      this.prevButton = root.querySelector('[data-prev]');
      this.nextButton = root.querySelector('[data-next]');
      this.pauseButton = root.querySelector('[data-pause]');
      this.status = root.querySelector('[data-status]');
      this.live = root.querySelector('[data-live]');
      this.position = root.querySelector('[data-position]');
      this.videos = Array.from(root.querySelectorAll('video'));
      this.videoButtons = Array.from(root.querySelectorAll('[data-video-toggle]'));
      this.currentIndex = 0;
      this.timerId = null;
      this.insideRegion = false;
      this.videoPlaying = false;
      this.lastAnnouncement = '';
      this.carouselName = this.root.getAttribute('data-carousel-name') || 'Carousel';
      this.bind();
      this.updatePauseButton();
      this.setSlideAccessibility();
      this.startTimer();
    }

    shouldRotate() {
      return !siteMotionPaused && !this.insideRegion && !this.videoPlaying;
    }

    announce(message) {
      if (!message) return;
      if (this.lastAnnouncement === message) {
        const key = `${this.carouselName}:${message}`;
        const lastTime = announcementHistory.get(key) || 0;
        if (Date.now() - lastTime < announcementDebounceMs) return;
      }
      this.lastAnnouncement = message;
      queueAnnouncement(this.live, message, `${this.carouselName}:${message}`);
    }

    updateStatus(message) {
      if (this.status.textContent !== message) this.status.textContent = message;
    }

    pausedMessage() {
      return `${this.carouselName} motion paused.`;
    }

    resumedMessage() {
      return `${this.carouselName} motion resumed.`;
    }

    videoPausedMessage() {
      return `${this.carouselName} motion paused while video is playing.`;
    }

    startTimer() {
      this.stopTimer();
      if (!this.shouldRotate()) return;
      this.timerId = window.setInterval(() => this.showSlide((this.currentIndex + 1) % this.slides.length, false), interval);
      this.updateStatus('Automatic slide rotation is active.');
    }

    stopTimer() {
      if (this.timerId) {
        window.clearInterval(this.timerId);
        this.timerId = null;
      }
    }

    updatePauseButton() {
      if (siteMotionPaused) {
        this.pauseButton.textContent = 'Resume motion';
        this.pauseButton.setAttribute('aria-pressed', 'true');
      } else {
        this.pauseButton.textContent = 'Pause motion';
        this.pauseButton.setAttribute('aria-pressed', 'false');
      }
    }

    setSlideAccessibility() {
      this.slides.forEach((slide, index) => {
        const isActive = index === this.currentIndex;
        slide.hidden = !isActive;
        slide.classList.toggle('active', isActive);
        slide.setAttribute('tabindex', '-1');
        const summary = slide.querySelector('[data-slide-summary]');
        if (summary) summary.setAttribute('tabindex', isActive ? '0' : '-1');
        if (isActive) {
          slide.removeAttribute('aria-hidden');
          slide.removeAttribute('inert');
        } else {
          slide.setAttribute('aria-hidden', 'true');
          slide.setAttribute('inert', '');
        }
      });
    }

    enterRegion(message = this.pausedMessage()) {
      const wasInside = this.insideRegion;
      this.insideRegion = true;
      this.stopTimer();
      this.updateStatus(message);
      if (!wasInside) this.announce(message);
    }

    leaveRegion() {
      const wasInside = this.insideRegion;
      this.insideRegion = false;
      if (this.shouldRotate()) {
        if (wasInside) this.announce(this.resumedMessage());
        this.startTimer();
      } else if (siteMotionPaused) {
        this.updateStatus('Motion is paused by your site-wide preference.');
      } else if (this.videoPlaying) {
        this.updateStatus(this.videoPausedMessage());
      }
    }

    showSlide(newIndex, moveFocusToHeading) {
      this.videos.forEach(video => video.pause());
      this.videoPlaying = false;
      this.currentIndex = newIndex;
      this.setSlideAccessibility();
      this.position.textContent = `Slide ${this.currentIndex + 1} of ${this.slides.length}`;
      this.updateVideoButtons();
      if (moveFocusToHeading) {
        this.enterRegion(this.pausedMessage());
        const summary = this.slides[this.currentIndex].querySelector('[data-slide-summary]');
        const heading = this.slides[this.currentIndex].querySelector('h2');
        if (summary) summary.focus({ preventScroll: false });
        else if (heading) heading.focus({ preventScroll: false });
      }
    }

    updateVideoButtons() {
      this.videoButtons.forEach(button => {
        const video = button.closest('.media-frame')?.querySelector('video');
        if (!video) return;
        button.textContent = video.paused ? 'Play video' : 'Pause video';
        button.setAttribute('aria-pressed', video.paused ? 'false' : 'true');
      });
    }

    bind() {
      this.prevButton.addEventListener('click', () => this.showSlide((this.currentIndex - 1 + this.slides.length) % this.slides.length, true));
      this.nextButton.addEventListener('click', () => this.showSlide((this.currentIndex + 1) % this.slides.length, true));
      this.root.querySelectorAll('[data-go-to]').forEach(button => {
        button.addEventListener('click', () => this.showSlide(Number(button.getAttribute('data-go-to')) - 1, true));
      });
      this.pauseButton.addEventListener('click', () => updateSitePreference(!siteMotionPaused));

      this.root.addEventListener('focusin', () => this.enterRegion(this.pausedMessage()));
      this.root.addEventListener('focusout', () => {
        window.setTimeout(() => {
          if (!this.root.contains(document.activeElement)) this.leaveRegion();
        }, 0);
      });
      this.root.addEventListener('pointerdown', () => this.enterRegion(this.pausedMessage()));
      this.root.addEventListener('keydown', () => this.enterRegion(this.pausedMessage()));

      this.videoButtons.forEach(button => {
        button.addEventListener('click', event => {
          event.preventDefault();
          const video = button.closest('.media-frame')?.querySelector('video');
          if (!video) return;
          this.enterRegion(this.videoPausedMessage());
          if (video.paused) {
            const playResult = video.play();
            if (playResult && typeof playResult.then === 'function') {
              playResult.finally(() => button.focus({ preventScroll: true }));
            } else {
              button.focus({ preventScroll: true });
            }
          } else {
            video.pause();
            button.focus({ preventScroll: true });
          }
          this.updateVideoButtons();
        });
      });

      this.videos.forEach(video => {
        video.addEventListener('play', () => {
          this.videoPlaying = true;
          this.enterRegion(this.videoPausedMessage());
          this.updateVideoButtons();
        });
        video.addEventListener('pause', () => {
          this.videoPlaying = this.videos.some(item => !item.paused && !item.ended);
          this.updateVideoButtons();
          if (!this.videoPlaying && this.shouldRotate()) this.startTimer();
        });
        video.addEventListener('ended', () => {
          this.videoPlaying = this.videos.some(item => !item.paused && !item.ended);
          this.updateVideoButtons();
          if (!this.videoPlaying && this.shouldRotate()) this.startTimer();
        });
      });
      this.root.querySelectorAll('[data-demo-form]').forEach(form => this.bindForm(form));
    }

    bindForm(form) {
      form.addEventListener('submit', event => {
        event.preventDefault();
        const formErrors = form.querySelector('[data-form-errors]');
        const fields = [
          { input: form.elements.name, error: form.querySelector('[data-error-for="name"]'), message: 'Enter your name.' },
          { input: form.elements.email, error: form.querySelector('[data-error-for="email"]'), message: 'Enter a valid email address.' },
          { input: form.elements.interest, error: form.querySelector('[data-error-for="interest"]'), message: 'Enter at least one accessibility topic.' }
        ];
        const errors = [];
        fields.forEach(item => {
          item.error.hidden = true;
          item.error.textContent = '';
          item.input.removeAttribute('aria-invalid');
          const value = item.input.value.trim();
          const invalidEmail = item.input.type === 'email' && value && !item.input.validity.valid;
          if (!value || invalidEmail) {
            item.input.setAttribute('aria-invalid', 'true');
            item.error.textContent = item.message;
            item.error.hidden = false;
            errors.push(item);
          }
        });
        if (errors.length) {
          const summaryText = errors.length === 1 ? '1 error found.' : `${errors.length} errors found.`;
          formErrors.innerHTML = `<p><strong>${summaryText}</strong></p><p>Please review the fields marked below.</p>`;
          formErrors.hidden = false;
          this.announce(`${summaryText} Please review the fields marked below.`);
          errors[0].input.focus();
          return;
        }
        formErrors.hidden = true;
        this.announce('Demo form submitted. No information was sent.');
        form.reset();
      });
    }
  }

  document.querySelectorAll('[data-carousel]').forEach(root => allCarousels.push(new AccessibleCarousel(root)));

  if (prefersReducedMotion && localStorage.getItem(STORAGE_KEY) !== 'active') {
    localStorage.setItem(STORAGE_KEY, 'paused');
    siteMotionPaused = true;
  }
  allCarousels.forEach(instance => {
    instance.updatePauseButton();
    if (siteMotionPaused) instance.updateStatus(prefersReducedMotion ? 'Motion is paused because reduced motion is enabled or because Pause motion was previously selected.' : 'Motion is paused by your site-wide preference.');
    else instance.startTimer();
  });
})();
