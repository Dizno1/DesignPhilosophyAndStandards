# Navigation Pattern

## Purpose

Navigation helps users understand where they are, where they can go, and how to return to important areas.

## Core rule

Navigation must be consistent across Open Door Design projects. Users should not need to relearn basic page movement when switching applications.

## Required page structure

Every full page should include these landmarks where applicable:

- Skip link
- Header or banner
- Primary navigation
- Main content
- Footer

## Skip link

Every page with repeated navigation must include a skip link as the first focusable control.

```html
<a class="odd-skip-link" href="#main">Skip to main content</a>
```

## Primary navigation

Use native links for navigation.

Use buttons only for actions that change the current page state, such as opening a menu.

## Current page

Indicate the current page visually and programmatically.

```html
<a href="/standards/" aria-current="page">Standards</a>
```

## Link text

Links must describe their destination.

Good:

- Accessibility Standards
- Download Project Template
- Review Button Pattern

Avoid:

- Click here
- Learn more
- More
- Read this

## Keyboard behavior

- Tab moves through links and controls in DOM order.
- Focus order must match visual and reading order.
- Menus must not create keyboard traps.
- Escape closes expanded menus when JavaScript menus are used.
- Focus returns to the menu button after a menu closes.

## Screen reader behavior

Navigation regions should have useful names when more than one navigation area exists.

Examples:

```html
<nav aria-label="Primary">
<nav aria-label="Footer">
<nav aria-label="Lesson">
```

## Mobile behavior

- Navigation must work without hover.
- Collapsed navigation must use a real button.
- The menu button must expose expanded and collapsed state.
- Menu items must remain reachable at 320 CSS pixels.

## Reflow behavior

Navigation should wrap or collapse before it causes horizontal scrolling. Do not use fixed-width navigation bars.
