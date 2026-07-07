# Progress Indicators Pattern

## Purpose

Progress indicators tell users that work is happening, how far along it is, and what to expect next.

## Core rule

Progress feedback must reduce uncertainty, not add noise.

## Types of progress

Use determinate progress when the system can calculate completion.

Use indeterminate progress only when the system knows work is happening but cannot estimate completion.

## Required behavior

- Progress is visible.
- Progress is communicated to assistive technology when meaningful.
- Progress messages use plain language.
- Long-running tasks explain what is happening.
- Completion is announced when the task finishes.
- Errors explain what happened and how to recover.

## Determinate progress

```html
<label for="upload-progress">Upload progress</label>
<progress id="upload-progress" value="60" max="100">60 percent</progress>
```

## Status message with progress

```html
<p role="status" aria-live="polite">Uploading file. 60 percent complete.</p>
```

## Announcement frequency

Do not announce every percentage point. Announce meaningful milestones, such as:

- Started
- 25 percent complete
- 50 percent complete
- 75 percent complete
- Complete
- Error or stopped

## Screen reader behavior

Screen reader users should know that the action started, whether it is still running, and when it completes. Avoid repeated announcements that interrupt work.

## Common mistakes

- Showing a spinner with no text.
- Announcing progress too often.
- Leaving users unsure whether a button worked.
- Moving focus repeatedly during progress.
- Saying only "loading" without context.
