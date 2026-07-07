# Reflow Pattern

## Purpose

Reflow ensures content remains readable and usable when users zoom, magnify, use small screens, or increase text size.

## Core rule

Open Door Design treats reflow as a primary design requirement, not a mobile afterthought.

## Required standard

- Must work at 320 CSS pixels without horizontal scrolling for normal page content.
- Should remain usable at 280 CSS pixels where practical.
- Must support browser zoom through 400 percent.
- Must not require two-dimensional scrolling for normal workflows.
- Must not depend on fixed-width containers.

## Layout rules

- Use flexible widths.
- Use `max-width` instead of fixed widths.
- Use single-column layouts on narrow screens.
- Let controls wrap naturally.
- Keep buttons and form controls full width on narrow screens.
- Avoid side-by-side controls unless they wrap cleanly.

## Content rules

- Avoid long unbroken strings.
- Avoid wide tables unless a responsive alternative exists.
- Do not place critical content in fixed-height containers.
- Keep line length comfortable on large screens.

## Testing method

Test every important workflow at:

- 320 CSS pixels
- 400 percent browser zoom
- Mobile portrait
- Mobile landscape
- Large text settings where practical

## Common mistakes

- Fixed-width cards.
- Navigation that overflows horizontally.
- Tables that require sideways scrolling when a stacked version would be clearer.
- Buttons clipped at high zoom.
- Focus indicators hidden outside the viewport.
