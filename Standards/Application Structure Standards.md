# Application Structure Standards

## Purpose

Open Door Design applications should share recognizable structure, terminology, navigation behavior, and accessibility expectations. Each application may solve a different problem, but users should not need to relearn the interface from the beginning.

## Core requirements

Every application should include:

- A clear page title using the page name first and the site or application name second.
- Exactly one H1 on each page.
- Consistent landmark regions.
- A skip link or equivalent direct path to the main content.
- Predictable navigation.
- Clear status messages.
- Keyboard access to every function.
- Screen reader efficient headings, labels, and announcements.
- Reflow that remains usable at 320 CSS pixels and strives to remain usable at 280 CSS pixels where practical.
- Color contrast that exceeds minimum requirements whenever practical.

## Source of truth

Reusable structure belongs in this repository before it is copied into an application.

Application-specific content remains in the application repository. Shared patterns, templates, CSS, JavaScript utilities, naming rules, accessibility behaviors, and interaction models belong here.

## Relationship to application repositories

Each application repository should contain its own content and business logic.

This repository should contain:

- Shared design standards.
- Shared accessibility standards.
- Shared engineering standards.
- Shared interaction patterns.
- Reusable component code.
- Project templates.
- Testing procedures.
- Documentation standards.

## Preservation standard

When an application develops a successful structure, preserve that structure here as a reusable pattern.

This applies especially to:

- The CPACC Accessibility Academy.
- The CPACC Accessibility Lab.
- The WCAG Accessibility Lab.
- The Beepball Practice Caller App.
- Future Open Door Design tools.

Preserving structure prevents accidental regressions and allows future projects to inherit proven decisions.
