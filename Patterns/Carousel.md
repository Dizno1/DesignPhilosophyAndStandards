# Carousel Pattern

## Purpose

The Open Door Design carousel pattern presents a small set of related items one at a time without requiring users to process the full collection at once.

A carousel is appropriate only when sequential presentation helps the user. It should not be used only for visual decoration, marketing motion, or hiding important content.

## Core rule

Users control the pace of information.

Automatic motion may exist, but it must never make the user chase changing content. When a user pauses motion, interacts with the carousel, focuses inside the carousel, or plays media inside the carousel, the carousel must stop moving.

## Mobile and iPhone finding

During iPhone testing, the carousel was not comfortable to explore while automatic motion continued. Once motion was paused, the same carousel became much easier to understand and navigate.

This finding is part of the Open Door Design standard:

Motion is optional. User control is required.

On mobile, a paused carousel often becomes the preferred experience because it gives VoiceOver users time to explore headings, slide text, controls, and media without the interface changing underneath them.

## Required behavior

- Provide a visible Pause motion control.
- Provide a visible Resume motion control or allow the Pause motion control to change to Resume motion.
- Respect reduced motion preferences.
- Pause when keyboard focus enters the carousel.
- Pause when pointer or touch interaction begins inside the carousel.
- Pause when any video or audio inside the carousel plays.
- Resume only when the user explicitly resumes motion or when focus leaves and the user has not manually paused motion.
- Never resume unexpectedly after the user has chosen to pause motion.
- Previous and Next controls must be real buttons.
- Previous and Next must update the visible slide and move focus to the newly displayed slide summary or heading.
- Each carousel instance must operate independently, while shared motion preferences may apply across carousels on the same site.

## Keyboard behavior

Required keyboard behavior:

- Tab moves through the carousel controls and active slide content in logical order.
- Shift plus Tab moves backward in logical order.
- Enter and Space activate buttons.
- Previous moves to the previous slide.
- Next moves to the next slide.
- Pause motion stops automatic slide changes.
- Resume motion restarts automatic slide changes only when appropriate.
- Focus must never be trapped in the carousel.

Optional keyboard shortcuts may be added only if they are documented and do not interfere with assistive technology commands.

## Focus behavior

Focus management is one of the defining features of the Open Door Design carousel.

When the user activates Previous or Next, focus should move to the newly displayed slide summary or slide heading. The user should not have to search for the content that changed.

Inactive slides must not remain in the normal focus order.

Inactive slides should be hidden from assistive technology until they become active.

## Screen reader behavior

The carousel must provide concise, meaningful information.

Good announcements:

- Multimedia carousel motion paused.
- Slide 3 of 5.
- Automatic motion disabled.

Avoid announcements that are long, repetitive, or celebratory.

The carousel should use polite live regions for non-urgent updates. Assertive live regions should be avoided unless the user's immediate attention is required.

## Slide structure

Each slide should include:

- A visible slide position, such as Slide 2 of 5.
- A meaningful heading.
- A concise description.
- Descriptive alternative text for images.
- Captions, transcripts, or alternatives for media when applicable.
- Real buttons and links when controls are needed.

The carousel region itself must have a meaningful accessible name.

## Motion preference

The user's motion preference should persist when practical.

If the user selects Pause motion, the site may store that preference and apply it to other carousels on the site.

If the user's system setting requests reduced motion, the carousel should begin paused unless the user explicitly starts motion.

## Multiple carousels

A page may contain more than one carousel, but each carousel must have its own:

- Accessible name.
- Status message.
- Slide position indicator.
- Pause or Resume control.
- Previous and Next controls.

Shared site-wide motion preference is allowed, but focus behavior and status messages must remain specific to the carousel being used.

## Reflow

The carousel must remain usable at 320 CSS pixels and browser zoom through 400 percent.

Open Door Design targets graceful behavior at 280 CSS pixels where practical.

The carousel must not require horizontal scrolling during normal use.

## When not to use a carousel

Do not use a carousel when:

- All content is equally important and should be visible at once.
- The content is required for completing a task and may be missed if hidden on another slide.
- Automatic motion would distract from reading, form entry, or media playback.
- A simple list, card group, or static section would communicate the same information more clearly.

## Open Door Design additions

The Open Door Design carousel goes beyond common carousel guidance by requiring:

- User control over pace.
- Persistent pause behavior.
- Focus movement to newly displayed content after Previous or Next.
- Concise live region announcements.
- Motion pause on focus, touch, pointer, keyboard activity, and media playback.
- Mobile usability testing with VoiceOver.
- Documentation of real user observations.

## Testing checklist

Test the carousel with:

- Keyboard only.
- JAWS with Chrome.
- NVDA with Firefox.
- VoiceOver on iPhone.
- Browser zoom at 400 percent.
- Narrow viewport at 320 CSS pixels.
- Reduced motion enabled.
- Multiple carousels on one page.
- Video or audio inside a slide.

The carousel passes only when the user can understand where they are, what changed, and what to do next without racing the automatic motion.


## Reference Implementation Requirement

The carousel standard must be supported by actual reusable HTML, CSS, and JavaScript. Documentation alone is not enough for consistent reproduction.

The current reference implementation is stored in:

- Components/Carousel
- Examples/Accessible Multimedia Carousel Reference Implementation

When a new project needs a carousel, start from the reference implementation and adapt content only. Do not recreate the carousel behavior from scratch.
