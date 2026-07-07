# Documentation Standards

Documentation must be accessible too.

## Screen reader friendly documentation

Rules:

- Use headings and lists instead of visual diagrams when possible.
- Avoid ASCII directory trees and line-drawing characters.
- Avoid long blocks of symbols that screen readers announce as repeated punctuation.
- Use simple folder lists instead of tree diagrams.
- Use clear file names and short explanations.
- Avoid tables unless the table structure is necessary and accessible.
- Use plain language.

## Repository structure examples

Good example:

Root files:

- README.md
- .gitattributes

Root folders:

- Archive
- Assets
- Components
- Examples
- Patterns
- Philosophy
- Resources
- Standards
- Templates

Avoid this style in documentation:

- Visual tree diagrams that depend on line-drawing symbols.
- Diagrams where the structure is conveyed only by indentation and punctuation.

## Code examples

Code examples should be short, relevant, and labeled.

Each example should explain:

- What the code does.
- When to use it.
- Any accessibility risk.
- Any required testing.
