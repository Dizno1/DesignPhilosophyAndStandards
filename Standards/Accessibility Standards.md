# Accessibility Standards

## Conformance target

Open Door Design targets WCAG 2.2 AA as the baseline and exceeds WCAG minimums whenever practical.

## Contrast

Open Door Design uses stronger contrast targets than the minimum WCAG AA thresholds.

Targets:

- Normal text: 7:1 or better whenever practical.
- Preferred normal text: 10:1 or better when practical.
- Primary navigation: 12:1 or better where practical.
- Large text: 4.5:1 or better whenever practical.
- Buttons, form controls, icons, borders, and focus indicators: 4.5:1 or better whenever practical.
- Button and link text should exceed AAA whenever practical.
- Text over images is avoided unless a solid or reliably contrasting overlay is used.
- Color is never the only method used to communicate state, status, meaning, or required action.
- A passing mathematical contrast ratio is required, but it does not automatically make a color choice acceptable.
- Color combinations that are difficult for common color vision differences, especially blue/green pairings, must be avoided in interface components.

## Reflow and zoom

Responsive design is a primary requirement, not a finishing pass.

Requirements:

- Content must work at 320 CSS pixels without horizontal scrolling during normal workflows.
- Designs should remain usable at 280 CSS pixels where practical.
- Browser zoom through 400 percent must be treated as a primary test condition.
- Controls should stack before they become cramped.
- Fixed widths should be avoided unless there is a clear, tested reason.
- Fixed-height containers should not clip text when users zoom, enlarge text, translate content, or use custom spacing.

## Keyboard access

Keyboard accessibility is mandatory.

Requirements:

- Every interactive feature must be reachable and operable by keyboard.
- Focus order must follow the meaningful sequence of the page.
- No keyboard traps are allowed.
- Focus indicators must be visible and consistent.
- Keyboard shortcuts must not interfere with browser, operating system, or assistive technology commands.
- Shortcut help must be available when custom shortcuts are provided.

## Screen reader access

Screen reader friendliness is mandatory.

Requirements:

- Every page has exactly one H1.
- Headings must describe the structure of the page.
- Duplicate heading labels are avoided unless the repetition has a clear purpose.
- Landmarks are used consistently.
- Controls have clear accessible names.
- Status messages are announced only when useful.
- Focus changes only when the user action makes the change expected and helpful.
- Live regions must be meaningful, restrained, and tested with real screen readers.

## Voice control

Voice control users must be able to identify and activate controls by visible labels.

Requirements:

- Visible labels and accessible names should match whenever practical.
- Icon-only controls require visible or programmatically available names.
- Repeated controls must be distinguishable by context.

## Error handling

Error messages must explain:

- What happened.
- Why it happened if known.
- How to fix it.

Error messages must not assume technical knowledge.

## Testing requirement

Every release should be tested with:

- Automated accessibility checks.
- Keyboard only.
- JAWS.
- NVDA.
- VoiceOver on iOS when mobile use is expected.
- Browser zoom through 400 percent.
- Narrow viewport reflow.
- High contrast or forced colors where practical.
- Reduced motion where motion exists.
