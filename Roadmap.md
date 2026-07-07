# Roadmap

## Phase 1 - Design system foundation

Status: Started

Goals:

- Establish shared CSS files.
- Define design tokens.
- Create reusable layout, component, and utility styles.
- Apply the system first to the Open Door Design website.

## Phase 2 - Standards handbook

Status: Started

Goals:

- Preserve the design philosophy.
- Define accessibility standards.
- Define design standards.
- Define engineering standards.
- Define user experience standards.
- Define documentation standards.

## Phase 3 - Component and pattern library

Status: Started

Goals:

- Define reusable patterns for buttons, forms, navigation, dialogs, cards, tables, live regions, and focus management.
- Create examples that are keyboard friendly, screen reader friendly, and reflow friendly.
- Build patterns before copying them into individual applications.

## Phase 4 - Website migration

Status: Planned

Goals:

- Keep the Open Door Design website aligned with these standards.
- Use the website as the first public reference implementation.

## Phase 5 - Application migration

Status: Planned

Projects:

- CPACC Accessibility Academy.
- WCAG Accessibility Lab.
- Beepball Practice Caller App.
- SR Document Remediation Tool.
- Audio Description Author.
- Accessible Video Suite.

## Future ideas

- Component gallery.
- Accessibility testing checklist.
- Project starter template.
- Color contrast reference sheet.
- Screen reader announcement examples.
- Keyboard shortcut guidance.

## Phase 3B - Component Library Expansion

Status: Started

Included in this phase:

- Forms pattern
- Navigation pattern
- Dialog pattern
- Tables pattern
- Cards pattern
- Progress indicators pattern
- Keyboard shortcuts pattern
- Reflow pattern
- Color palette documentation
- Typography documentation
- Component gallery starter page
- Shared CSS starter files

Next recommended phase:

Phase 3C should add working JavaScript behavior for dialogs, disclosure controls, status messages, and keyboard shortcut help. It should also expand the component gallery into a navigable reference site.

## Phase 3D - Carousel Standard

Status: Added.

This pass adds the Open Door Design carousel pattern, carousel component specification, and accessible multimedia carousel example notes.

Key decisions captured:

- Users control the pace of information.
- Pause persists until the user explicitly resumes motion.
- iPhone VoiceOver testing showed that the carousel became much more usable after motion was paused.
- Previous and Next move focus to the newly displayed slide summary or heading.
- Live region announcements must be concise and non-repetitive.
- Documentation must avoid ASCII tree diagrams because they are inefficient for screen reader users.



## Phase 3E - Carousel Reference Implementation

Status: Complete

Added the reusable carousel implementation so the pattern can be reproduced from source files, not just from documentation.

Added:

- Components/Carousel/carousel.css
- Components/Carousel/carousel.js
- Components/Carousel/carousel template.html
- Examples/Accessible Multimedia Carousel Reference Implementation

## Preservation Milestone

The Academy and Lab application structures should be preserved as official Open Door Design patterns.

Completed in this update:

- Application Structure Standards.
- Academy Structure Pattern.
- Lab Structure Pattern.
- Academy Project README Template.
- Lab Project README Template.

Future work:

- Add reference implementation notes from the live Academy.
- Add reference implementation notes from the CPACC Accessibility Lab.
- Add reusable data model examples for lesson content and question banks.
- Add testing checklists for Academy and Lab releases.


## Phase 3G - Academy Application Pattern

Status: Complete

Added the Academy as the first full application pattern. This phase preserves the course architecture, lesson structure, review lesson structure, lesson navigation, progress reporting, library topic behavior, domain card behavior, accessibility requirements, design rationale, and starter templates for future Academy-style courses.
