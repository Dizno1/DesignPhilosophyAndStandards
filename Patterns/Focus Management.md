# Focus Management Pattern

## Why this pattern exists

Focus tells keyboard and screen reader users where they are.

Losing focus, moving focus unexpectedly, or hiding the focus indicator forces the user to rebuild the page in their head.

## Rules

- Focus order follows the visual and logical reading order.
- Focus is visible at all times.
- Focus does not move unless the user action makes the move expected.
- After a dialog closes, focus returns to the control that opened it.
- After an error appears, the user is told about the error and can reach it efficiently.
- After content updates, focus remains stable unless moving it reduces confusion.

## Avoid

- Sending focus to the top of the page after every action.
- Moving focus into hidden content.
- Hiding focus outlines.
- Creating keyboard traps.
- Using tabindex values greater than zero.

## Preferred approach

Use natural document order and native controls first.

Use JavaScript focus management only when it clearly helps the user complete the task.
