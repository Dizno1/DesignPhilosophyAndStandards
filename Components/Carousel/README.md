# Carousel Component

This folder contains the Open Door Design reference implementation for the Screen Reader First Carousel.

## Files

- `carousel.css`: Component styles extracted from the working accessible multimedia carousel demo.
- `carousel.js`: Component behavior, including motion pause, focus management, live-region announcement queueing, video pause handling, and multi-carousel support.
- `carousel template.html`: Minimal HTML template for creating a new carousel using the reference implementation.

## Required behavior

- Focus entering a carousel pauses that carousel.
- Previous and Next move focus to the newly displayed slide summary.
- Pause motion is persistent and respected across visits.
- Reduced motion users start with motion paused unless they explicitly resume it.
- Live announcements are short, named, queued, and debounced.
- Multiple carousels on one page operate independently while sharing the same motion preference.
- Video playback pauses carousel motion.
- Hidden slides are hidden from both visual display and the accessibility tree.

## Mobile observation

During iPhone testing with VoiceOver, automatic motion was not user friendly until the carousel was paused. After motion was paused, the carousel became much easier to explore. This component treats pause as an exploration mode, not just a temporary animation control.

## Usage

Include the stylesheet and script, then use the HTML template as the starting point.

```html
<link rel="stylesheet" href="Components/Carousel/carousel.css">
<script src="Components/Carousel/carousel.js"></script>
```

Every carousel must include a unique heading, slide headings, Previous, Pause, Next controls, a visible position indicator, and a polite live region.
