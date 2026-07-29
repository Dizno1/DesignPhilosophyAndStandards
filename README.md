# Design Philosophy and Standards

This repository is the single source of truth for Open Door Design's design philosophy, accessibility standards, engineering practices, user experience principles, documentation rules, and reusable design patterns.

Open Door Design software should be naturally accessible, productive, predictable, and simple enough that users can focus on accomplishing their goals instead of learning complicated technology.

## Repository purpose

This repository exists to:

- Preserve the Open Door Design philosophy.
- Define shared accessibility and design standards.
- Document patterns that every project can reuse.
- Store reusable CSS and component guidance.
- Keep project decisions out of scattered conversations.
- Help every Open Door Design application feel like part of one family.

## Current top-level folders

- Archive: older or superseded material.
- Assets: colors, logos, icons, images, and other reusable assets.
- Components: reusable CSS, HTML, JavaScript, and component notes.
- Examples: good examples, bad examples, and before-and-after examples.
- Patterns: interaction patterns and component behavior guidance.
- Philosophy: mission, principles, accessibility promise, and design philosophy.
- Resources: references and supporting material.
- Standards: accessibility, design, engineering, user experience, testing, and documentation standards.
- Templates: starter files and reusable project templates.

## Working rule

Anything reusable belongs here first.

When an Open Door Design project solves a problem well, the standard or pattern should be documented here before being copied across projects.

## Core principle

The software works for the user.

The user never works for the software.

## Phase 3B additions

This update expands the pattern library and component foundation.

New pattern documents include:

- Forms
- Navigation
- Dialogs
- Tables
- Cards
- Progress Indicators
- Keyboard Shortcuts
- Reflow

New asset documents include:

- Color Palette
- Typography

New component resources include:

- CSS theme starter
- CSS layout starter
- CSS components starter
- CSS utilities starter
- Component Gallery Starter example

## Current pattern work

The repository now includes the Open Door Design carousel standard. This pattern captures the screen-reader-first carousel work, including persistent pause behavior, focus movement to newly displayed content, concise announcements, and the iPhone finding that paused motion greatly improves VoiceOver usability.



## Reusable Reference Implementations

The repository now includes reusable source files for selected components. The carousel is the first full reference implementation.

Carousel files:

- Components/Carousel
- Examples/Accessible Multimedia Carousel Reference Implementation

## Preserved Application Structures

This repository now includes formal structure patterns for learning and practice applications.

Current preserved structures:

- Academy Structure Pattern.
- Lab Structure Pattern.
- Application Structure Standards.

These patterns help future Open Door Design projects inherit proven navigation, heading, progress, feedback, reflow, keyboard, and screen reader behavior.


## Recent update

Added Application Patterns as the home for full product architectures. The first preserved architecture is the Academy pattern, including lesson pages, review lessons, navigation, progress reporting, library topics, domain cards, accessibility requirements, and design rationale.

## Website Synchronization (July 29, 2026)

The design system was significantly out of date compared to the actual, tested Open Door Design website - the website had material improvements (corrected skip-link behavior, stronger focus styling, AAA-oriented color tokens, full carousel implementation, an accessible video player component, forced-colors and print support) that had never been brought back into this repository. There was also a real duplicate-file problem: `Components/CSS` contained two parallel, independently-diverged sets of the same four files (a hyphenated-name set and a space-name set), creating two sources of truth.

This update treats the live, tested website as the source of truth and synchronizes this repository from it:

- `Components/CSS/*.css` replaced with the current website CSS. See `Components/CSS/README.md` for exactly what changed, and for an important, real breaking change: the website uses a different class-naming convention (bare elements like `button`/`.card` instead of prefixed `.odd-button`/`.odd-card` classes) than several existing pattern documents still reference. That's flagged as an explicit follow-up, not silently resolved.
- `Components/Carousel/` replaced with the actual live carousel markup, CSS classes, and JavaScript (previously used yet a third, different naming convention). See `Components/Carousel/README.md`, including a real discrepancy found between a CSS comment and the actual live markup that wasn't guessed at, just documented.
- `Components/Video Player/` added - a component that didn't exist here before.
- `Standards/Phase-1-Design-System-Reference.md` added - the specific numeric contrast/palette reference from the website that `Standards/Design Standards.md`'s existing prose principles are built on.
- Both previous CSS variants and the previous carousel component are preserved at `Archive/CSS-Pre-Website-Sync-2026-07-29/`, not deleted.

This repository is not fully synchronized until the flagged follow-up items above (pattern docs still using the old `.odd-*` classes; the carousel button-vs-link discrepancy) are resolved.
