# Forms Pattern

## Purpose

Forms collect information from the user. Open Door Design forms must be clear, predictable, keyboard efficient, screen reader friendly, and forgiving.

## Core rule

A form should ask only for information that is necessary for the task. Technical choices should stay hidden unless the user asks for advanced options.

## Required behavior

- Every input has a visible label.
- Every visible label is programmatically associated with its control.
- Required fields are identified in text, not by color alone.
- Help text appears before or near the control it explains.
- Error messages explain what happened and how to fix it.
- Errors are connected to the related control with `aria-describedby` when appropriate.
- The first invalid field receives focus after submission fails.
- Previously entered values are preserved after an error.
- Form controls remain usable at 400 percent zoom.
- Form controls remain usable at 320 CSS pixels and should remain usable at 280 CSS pixels where practical.

## Labels

Use short, plain labels.

Good examples:

- Email address
- Project name
- Choose file
- Practice speed

Avoid labels that require technical knowledge unless the feature is specifically advanced.

Avoid examples:

- Encode target
- Output container
- Bitrate mode
- Runtime parameter

## Required fields

Use text such as `(required)` in the label.

Example:

```html
<label for="project-name">Project name (required)</label>
<input id="project-name" name="project-name" required autocomplete="organization">
```

## Help text

Help text should reduce uncertainty. It should not become a second manual.

Example:

```html
<label for="email">Email address</label>
<p id="email-help">Used only to send project updates.</p>
<input id="email" name="email" type="email" aria-describedby="email-help">
```

## Errors

Error messages must include recovery guidance.

Good:

- Enter an email address in the format name@example.com.
- Choose at least one lesson before starting practice.
- The file could not be uploaded because it is larger than 50 MB. Choose a smaller file or compress it first.

Poor:

- Invalid input.
- Error.
- Upload failed.

## Grouped controls

Use `fieldset` and `legend` for radio button groups and checkbox groups.

```html
<fieldset>
  <legend>Practice mode</legend>
  <label><input type="radio" name="mode" value="random"> Random left and right callers</label>
  <label><input type="radio" name="mode" value="left"> Left caller only</label>
  <label><input type="radio" name="mode" value="right"> Right caller only</label>
</fieldset>
```

## Keyboard behavior

- Tab moves through controls in logical order.
- Shift+Tab moves backward.
- Space toggles checkboxes.
- Arrow keys move through radio groups when supported by the browser.
- Enter submits when focus is inside a single-action form.
- Escape closes dialogs but should not clear a form without warning.

## Screen reader behavior

Screen reader users should hear the label, role, state, value, and helpful instructions without repetition.

Do not place lengthy instructions inside labels. Use help text instead.

## Mobile behavior

- Use appropriate input types such as `email`, `tel`, `url`, `number`, and `search`.
- Keep form controls full width on narrow screens.
- Avoid multi-column forms on small screens.
- Do not require horizontal scrolling.

## When not to use a form

Do not use a form when a single button would satisfy the workflow. The user should not be asked to configure a task that can be safely automated.
