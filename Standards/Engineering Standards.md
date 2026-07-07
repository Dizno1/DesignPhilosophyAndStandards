# Engineering Standards

## Semantic HTML first

Use native HTML elements before creating custom components.

Examples:

- Use a button for an action.
- Use a link for navigation.
- Use a label for form controls.
- Use fieldset and legend for related radio buttons or checkboxes.
- Use table elements only for data tables.

## ARIA

ARIA may improve accessibility when used correctly, but it can also create confusion when used unnecessarily.

Rules:

- Native semantics come first.
- ARIA supplements semantics. It does not replace them.
- Do not use ARIA to disguise an inaccessible custom widget.
- Test ARIA patterns with real assistive technology.

## JavaScript

JavaScript should improve the experience without making the page fragile.

Rules:

- Keep interactions predictable.
- Do not move focus unexpectedly.
- Do not update live regions repeatedly without purpose.
- Preserve user input when possible.
- Provide recovery from failed actions.

## CSS

CSS should be shared and reusable.

Rules:

- Use design tokens for color, spacing, and sizing.
- Avoid one-off visual styles unless there is a documented reason.
- Do not remove focus outlines without replacing them with a stronger visible focus indicator.
- Respect reduced motion preferences.
- Support forced colors where practical.
