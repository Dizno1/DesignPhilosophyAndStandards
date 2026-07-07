# Carousel Component

## Component status

Status: Draft standard.

Source implementation: Accessible Multimedia Carousel demo.

## Component purpose

The carousel component implements the Open Door Design carousel pattern as a reusable interaction model.

The component is designed screen-reader-first. Visual presentation is important, but the component is primarily judged by whether a keyboard or screen reader user can understand and control the experience efficiently.

## Required HTML structure

A carousel must include:

- A named carousel region.
- A visible heading.
- Clear instructions.
- A visible status line.
- A polite live region.
- A collection of slides.
- Previous and Next buttons.
- A Pause motion or Resume motion button.
- A visible slide position indicator.

Recommended region attributes:

```html
<div class="carousel-region" role="region" aria-roledescription="carousel" aria-labelledby="carousel-title" data-carousel>
```

## Slides

Each slide should be an article or equivalent semantic container.

Inactive slides must be removed from the active focus path. The reference implementation uses hidden, aria-hidden, inert, and tabindex management so only the active slide is available.

Each active slide should expose a focusable summary element that receives focus after Previous or Next is activated.

## JavaScript responsibilities

The JavaScript must:

- Track the current slide.
- Show only the active slide.
- Hide inactive slides from both visual users and assistive technology.
- Update the slide position text.
- Pause automatic motion when focus enters the carousel.
- Pause automatic motion when the user uses pointer, touch, or keyboard input inside the carousel.
- Pause automatic motion while media is playing.
- Respect reduced motion preferences.
- Store manual motion preference when practical.
- Queue announcements to avoid duplicate or overlapping speech.
- Move focus to the new slide summary after user-triggered Previous, Next, or Go To actions.

## Live region behavior

Use polite live regions for carousel updates.

Announcements should be short and named when helpful.

Good examples:

- Multimedia carousel motion paused.
- Automatic motion disabled.
- Demo form submitted. No information was sent.

Avoid repeating the same announcement when nothing meaningful has changed.

## Pause behavior

Pause has two meanings:

- Temporary pause because the user is interacting with the carousel.
- Manual pause because the user selected Pause motion.

The component must distinguish between those states.

Temporary pause may end when focus leaves the carousel and no media is playing.

Manual pause persists until the user explicitly resumes motion.

## Reduced motion

If the user has reduced motion enabled, automatic rotation should not begin by default.

The user may still be allowed to resume motion, but the default experience should honor the system preference.

## Media inside slides

If a slide contains video or audio:

- The carousel must pause while media is playing.
- Play and Pause controls must be real buttons.
- The media control must keep or restore focus appropriately.
- Carousel motion must not restart while media remains active.

## Form content inside slides

Forms inside slides must follow the Open Door Design form pattern.

Required behavior:

- Labels are visible.
- Errors are associated with fields.
- Error summary appears when validation fails.
- Focus moves to the first invalid field.
- The carousel does not advance while the user is entering data.

## Component quality bar

The component is not complete unless it works well with:

- Keyboard only.
- Screen reader virtual cursor navigation.
- Touch screen exploration.
- VoiceOver on iPhone.
- Browser zoom through 400 percent.
- Reduced motion enabled.

## Known implementation note

The current demo proves the interaction model. Before production reuse, the component should be split into separate HTML, CSS, and JavaScript files and aligned with the shared Open Door Design CSS tokens.


## Reference Implementation Files

The working reference implementation now lives in the repository so future projects can reproduce the same carousel without relying on memory or prose alone.

Component files:

- Components/Carousel/README.md
- Components/Carousel/carousel.css
- Components/Carousel/carousel.js
- Components/Carousel/carousel template.html

Example implementation:

- Examples/Accessible Multimedia Carousel Reference Implementation/index.html

The Markdown standard explains the expected behavior. The component files provide the reusable implementation.
