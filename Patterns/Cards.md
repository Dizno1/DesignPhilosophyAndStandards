# Cards Pattern

## Purpose

Cards group related content and actions. They help users scan choices without hiding important information.

## Core rule

A card is a content group, not a button disguised as a box.

## Required behavior

- Each card has a clear heading.
- The heading level fits the page structure.
- Actions inside the card are real buttons or links.
- Do not nest interactive controls inside links.
- Cards reflow into a single column on narrow screens.
- The reading order matches the visual order.

## Good uses

- Lesson summaries
- Project summaries
- Resource listings
- Tool cards
- Status cards
- Feature cards

## HTML pattern

```html
<article class="odd-card">
  <h2>Accessibility Standards</h2>
  <p>Rules for contrast, keyboard access, screen reader support, reflow, and testing.</p>
  <a class="odd-button odd-button-secondary" href="standards/accessibility.html">Review standards</a>
</article>
```

## Keyboard behavior

- Users tab only to real actions, not the card container.
- Focus indicators appear on links and buttons inside the card.
- The card itself should not receive focus unless it performs a specific interaction.

## Screen reader behavior

The card should read as a logical content group. Avoid repeating the same text in the heading, link, and accessible name.

## Common mistakes

- Making the whole card clickable and also placing buttons inside it.
- Using the same link text for every card.
- Giving every card the same heading.
- Hiding the main action behind hover.
- Using cards when a simple list would be clearer.
