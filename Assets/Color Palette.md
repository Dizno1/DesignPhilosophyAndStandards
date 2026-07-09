# Color Palette

## Purpose

The Open Door Design color palette supports a calm, trustworthy, accessible interface. Color choices must exceed minimum accessibility requirements wherever practical.

Open Door Design does not treat contrast as a checklist item. The visual experience should be comfortable, readable, and clear for long periods of use.

## Contrast standard

Open Door Design uses WCAG 2.2 AA as the baseline and targets AAA or stronger contrast wherever practical.

Targets:

- Normal text target: 7:1 or higher.
- Preferred normal text target: 10:1 or higher when the design can support it.
- Primary navigation target: 12:1 or higher where practical.
- Large text target: 4.5:1 or higher.
- Interactive controls target: 7:1 or higher for text inside the control when practical.
- Icons and meaningful graphical elements target: 4.5:1 or higher.
- Focus indicators target: 4.5:1 or higher against adjacent colors.

## Core colors

### Deep Navy

Hex: `#17324D`

Plain English: very dark navy.

Use for:

- Headings
- Header backgrounds
- Footer backgrounds
- High-emphasis interface areas
- Neutral navigation text when a darker structural color is preferred

### Open Door Green

Hex: `#0B5D3B`

Plain English: rich forest green.

Use for:

- Primary buttons
- Positive actions
- Success states
- Active states
- Current page indicators
- Brand accents
- Links when links are not visually competing with navigation

### Open Door Green Dark

Hex: `#08452C`

Plain English: very dark forest green.

Use for:

- Hover states
- Strong green text on pale backgrounds
- High-contrast green accents

### Warm White

Hex: `#FAFAF8`

Plain English: warm off-white.

Use for:

- Page backgrounds
- Large reading areas

### Surface White

Hex: `#FFFFFF`

Plain English: pure white.

Use for:

- Cards
- Panels
- Dialogs
- Form groups

### Soft Green Surface

Hex: `#EAF3ED`

Plain English: very pale green.

Use for:

- Subtle current-page backgrounds
- Quiet section emphasis
- Card accents that do not carry meaning by color alone

### Soft Border Gray

Hex: `#D7D7D7`

Plain English: soft gray.

Use for:

- Borders
- Dividers
- Card outlines

### Accessible Gold

Hex: `#7A4F00`

Plain English: dark gold/brown.

Use for:

- Focus indicators
- Current state accents
- Progress highlights

Do not use gold for small text unless the exact foreground and background combination has been checked.

## Text colors

### Primary Text

Hex: `#111111`

Plain English: near black.

Use for body text and most content.

### Secondary Text

Hex: `#3B3B3B`

Plain English: dark charcoal.

Use for supporting text.

### Muted Text

Hex: `#5D5D5D`

Plain English: dark gray.

Use sparingly. Muted text must still meet the contrast standard.

## State colors

### Information

Hex: `#17324D`

Plain English: very dark navy.

### Warning

Hex: `#7A4F00`

Plain English: dark gold/brown.

### Error

Hex: `#8F1D18`

Plain English: dark red.

### Success

Hex: `#0B5D3B`

Plain English: rich forest green.

## Blue and green rule

Open Door Design must not use blue and green together as the primary visual distinction between neighboring interface elements, navigation states, buttons, cards, banners, or important content areas.

This rule exists because a color pair can pass a contrast calculator and still create visual difficulty for users with common color vision differences. Passing contrast is required, but it is not enough.

## Link and navigation rule

Blue is not part of the primary Open Door Design interface system.

Rules:

- Primary navigation must not use blue links.
- Navigation should use dark neutral text, green current-page treatment, or another approved high-contrast pattern.
- Body links should use Open Door Green with an underline.
- Visited links may use a high-contrast purple when needed for browser convention, but that purple must not become a primary brand color.
- Current page indicators must not rely on color alone. Use text treatment, background, border, weight, underline, or `aria-current` as appropriate.

## Color use rules

- Never rely on color alone.
- Pair color with text, icons, borders, labels, spacing, font weight, underline, or structure.
- Use one dominant color family within a single component or region.
- Do not place blue links or blue state indicators directly within a green navigation or green branding system.
- Avoid low-contrast placeholder text.
- Avoid colored text over images.
- Do not use pale colored buttons with low-contrast text.
- Test colors in normal mode, forced colors, high contrast modes, high zoom, and color vision review where practical.
