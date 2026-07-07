# Typography

## Purpose

Typography should make Open Door Design content easy to read, scan, zoom, and navigate.

## Core rule

Text exists to help users accomplish goals. Decorative typography must never reduce readability.

## Font stack

Use system fonts first.

```css
font-family: Arial, "Segoe UI", Helvetica, sans-serif;
```

## Base size

Use a base font size of at least `1rem`.

Avoid setting body text below 16 CSS pixels.

## Line height

Use comfortable line height.

Recommended:

```css
line-height: 1.5;
```

For dense controls, do not go below `1.35` unless there is a specific reason.

## Heading scale

Use headings to define structure, not visual emphasis alone.

Recommended starting scale:

- H1: 2rem
- H2: 1.5rem
- H3: 1.25rem
- H4: 1.125rem
- Body: 1rem

At narrow widths, headings may reduce slightly, but they must remain visually distinct.

## Line length

For long reading content, keep line length comfortable.

Recommended maximum:

- 65 to 75 characters for instructional text
- Wider layouts only when content structure requires it

## Text spacing

Text must remain readable when users increase text spacing.

Avoid fixed-height containers that clip text.

## All caps

Avoid all caps for long text. Use it only for short labels where necessary.

## Links

Links should be underlined by default. Do not remove underlines from body content links.

## Common mistakes

- Small muted text that fails contrast.
- Fixed-height buttons that clip text.
- Headings chosen for size instead of structure.
- Long lines that become hard to track.
- Text embedded in images.
