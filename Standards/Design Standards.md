# Design Standards

## Design goals

Open Door Design interfaces should feel calm, direct, trustworthy, and efficient.

The design system should support users rather than decorate the interface at their expense.

## Color system

Color must be accessible before it is expressive.

Rules:

- Use high contrast text and controls.
- Use color consistently across projects.
- Never rely on color alone.
- Avoid low contrast placeholder text.
- Avoid text on patterned or busy backgrounds.
- Test color choices in normal mode, forced colors, and high zoom where practical.

## Typography

Text must be readable, scalable, and predictable.

Rules:

- Use system fonts unless there is a strong reason not to.
- Avoid tiny text.
- Avoid all caps for long labels or instructions.
- Keep line length comfortable.
- Allow text to wrap naturally.
- Do not lock text into fixed-height boxes.

## Spacing

Spacing should reduce cognitive load.

Rules:

- Group related controls together.
- Separate unrelated regions clearly.
- Preserve enough space around controls for touch and zoom.
- Avoid dense layouts that become unusable at 400 percent zoom.

## Focus indicator

The focus indicator is a first-class design element.

Rules:

- It must be highly visible.
- It must not rely on color alone where practical.
- It must not be hidden by overflow, clipping, sticky headers, or custom outlines.
- It must be consistent across projects.

## Touch targets

Targets should be comfortable on mobile and touch devices.

Targets:

- Minimum: 44 by 44 CSS pixels where practical.
- Preferred: 48 by 48 CSS pixels.

## Layout

Layouts must support reflow.

Rules:

- Start mobile first.
- Use flexible containers.
- Stack controls when horizontal space is limited.
- Avoid side-by-side controls that become cramped.
- Do not require horizontal scrolling for normal workflows.
