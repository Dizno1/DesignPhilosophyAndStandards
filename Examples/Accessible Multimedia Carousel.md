# Accessible Multimedia Carousel Example

## Example source

This example documents the accessible multimedia carousel demo used to develop the Open Door Design carousel pattern.

The demo includes:

- Three separate carousel regions.
- Images.
- Video content.
- Buttons.
- Links.
- A form.
- Individual carousel names.
- Polite live regions.
- Queued announcements.
- Persistent motion preference.
- Focusable slide summaries.
- Pause behavior during keyboard, pointer, touch, focus, and media interaction.

## What the example proved

The example proved that a carousel can be made significantly more usable when it is designed around user control instead of visual motion.

The most important finding came from iPhone testing. Automatic motion made the carousel difficult to explore comfortably. After motion was paused, the carousel became much easier to use with VoiceOver.

This finding supports the Open Door Design principle that users should control the pace of information.

## Important implementation details

The demo uses:

- A named region with carousel role description.
- A visible status line.
- A polite live region inside each carousel.
- A global live region for site-wide motion preference changes.
- A debounced announcement queue to reduce repeated announcements.
- A stored motion preference.
- A reduced motion check.
- Inactive slide hiding using hidden, aria-hidden, inert, and tabindex management.
- Focus movement to the active slide summary after user-triggered navigation.
- Automatic pause when focus enters the carousel.
- Automatic pause when pointer or keyboard activity occurs inside the carousel.
- Pause while video is playing.

## What should become reusable

The following pieces should become reusable Open Door Design component code:

- Motion preference handling.
- Announcement queue.
- Slide visibility management.
- Focus movement after Previous and Next.
- Pause on interaction.
- Pause while media plays.
- Reduced motion default behavior.

## What should remain project-specific

The following should remain project-specific:

- Slide content.
- Images and videos.
- Slide headings.
- Slide descriptions.
- Form fields.
- Visual theme adjustments beyond Open Door Design tokens.

## Accessibility review notes

The example should be reviewed with:

- JAWS and Chrome.
- NVDA and Firefox.
- VoiceOver on iPhone.
- Keyboard only.
- Touch exploration.
- Browser zoom at 400 percent.
- Reduced motion enabled.
- Multiple carousels on the same page.

## Future improvements

Future versions should:

- Move inline CSS into the shared CSS files.
- Move inline JavaScript into a reusable component module.
- Apply the approved Open Door Design color palette.
- Add a no-JavaScript fallback.
- Add a short plain-language usage guide for content authors.
- Add a test page in the component gallery.
