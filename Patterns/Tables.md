# Tables Pattern

## Purpose

Tables present data with meaningful relationships between headers and cells. Tables should not be used for page layout.

## Core rule

Use a table only when row and column relationships matter.

## Required behavior

- Tables have a clear title or caption when needed.
- Column headers use `th`.
- Row headers use `th` when applicable.
- Header scope is defined when the structure is more than simple columns.
- Tables reflow responsibly on small screens.
- Users can understand the table without color alone.

## Simple data table

```html
<table class="odd-table">
  <caption>Practice results</caption>
  <thead>
    <tr>
      <th scope="col">Mode</th>
      <th scope="col">Questions</th>
      <th scope="col">Correct</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Reinforce</th>
      <td>10</td>
      <td>8</td>
    </tr>
  </tbody>
</table>
```

## Responsive behavior

For narrow screens, prefer one of these patterns:

- Let the table remain simple and readable if it fits.
- Convert each row into a card only when relationships remain clear.
- Provide a focused summary before a complex table.

Avoid horizontal scrolling when the same information can be presented in a stacked format.

## Screen reader behavior

Screen reader users should be able to identify the row and column meaning of each cell. Do not remove table semantics from real data tables.

## When not to use a table

Do not use a table for:

- Page layout
- Button groups
- Cards
- Forms
- Navigation

## Common mistakes

- Missing table headers.
- Empty header cells.
- Visual table layout without semantic table elements.
- Data that only makes sense through color.
- Overly wide tables that fail at 400 percent zoom.
