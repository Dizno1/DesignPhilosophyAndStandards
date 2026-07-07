# Dialogs Pattern

## Purpose

Dialogs interrupt the page to ask for a decision, confirm an action, or show focused information. Because dialogs interrupt the user, they should be used sparingly.

## Core rule

A dialog must be easier than staying on the page. If the user can complete the task inline without losing context, avoid a dialog.

## When to use a dialog

Use a dialog for:

- Confirming destructive actions
- Short focused tasks
- Important decisions that must be answered before continuing
- Settings that are temporary or contextual

## When not to use a dialog

Do not use a dialog for:

- Long forms
- Multi-step workflows
- Routine status messages
- Content that users may need to compare with the page behind it

## Required behavior

- Focus moves into the dialog when it opens.
- The dialog has a clear accessible name.
- Focus stays inside the dialog while it is open.
- Escape closes the dialog when closing is safe.
- Focus returns to the button or link that opened the dialog.
- The close button has a clear name.
- The dialog remains usable at 400 percent zoom.
- The dialog does not cause horizontal scrolling at 320 CSS pixels.

## HTML pattern

```html
<div role="dialog" aria-modal="true" aria-labelledby="dialog-title" class="odd-dialog">
  <h2 id="dialog-title">Delete project?</h2>
  <p>This action moves the project to the archive. You can restore it later.</p>
  <button type="button">Cancel</button>
  <button type="button" class="odd-button odd-button-danger">Delete project</button>
</div>
```

## Keyboard behavior

- Tab moves to the next focusable element inside the dialog.
- Shift+Tab moves to the previous focusable element inside the dialog.
- Escape closes the dialog when appropriate.
- Enter activates the focused button.
- Space activates the focused button.

## Screen reader behavior

The user should hear the dialog title and the purpose of the dialog when it opens. Avoid placing the entire dialog body in an announcement. Let users navigate it normally.

## Destructive dialogs

Destructive dialogs must explain the consequence and recovery path.

Good:

- Delete project? This moves the project to the archive. You can restore it later.

Poor:

- Are you sure?

## Common mistakes

- Moving focus to the page behind the dialog.
- Hiding the close button from keyboard users.
- Using a dialog for routine messages.
- Creating a visual dialog without dialog semantics.
- Announcing the same dialog text multiple times.
