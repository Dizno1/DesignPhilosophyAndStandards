# Components/CSS

## Status: Synchronized from the tested Open Door Design website, July 29, 2026

The four files in this folder (`odd-theme.css`, `odd-layout.css`, `odd-components.css`, `odd-utilities.css`) were replaced with the current CSS from the live OpenDoorDesign website repository. That CSS is the tested implementation - it runs in production - while the previous versions here had drifted significantly out of date and were never the ones actually proven in use.

This was a real comparison, not a blind overwrite: the old versions were read in full, the new versions were read in full, and the differences below were confirmed before replacing anything.

## What the website version adds that the old design-repo version didn't have

- Corrected skip-link behavior: the link no longer collapses into a narrow column when focused (`transform`-based positioning instead of the old absolute-position approach).
- Stronger focus styling: a visible outline plus a white separation ring (`box-shadow: 0 0 0 6px #FFFFFF`) so focus is visible against any background.
- AAA-oriented color tokens: normal text targets 7:1 contrast, large text and UI components target at least 4.5:1 (documented in the CSS file's own header comment).
- Full screen-reader-first carousel classes (`.srf-carousel-*`, `.srf-slide*`, `.srf-button-row`) - see `Components/Carousel/README.md` for the full carousel sync.
- Accessible video player baseline (`.ecb-*` classes) - previously absent from this repository entirely. See `Components/Video Player/README.md` (new).
- `forced-colors: active` support (Windows High Contrast Mode) in `odd-utilities.css` - previously missing.
- `@media print` rules - hides navigation/controls, forces a printable color scheme, and appends link URLs after link text - previously missing.
- Touch target sizing via a shared `--odd-touch-target: 3rem` token, applied consistently to buttons, links, and form controls.
- Reflow behavior (`.grid`, `.cols-2`, `.cols-3`, narrow-viewport rules down to 20rem) - more developed than the old version.

## A real convention change, not just new features - important

The old design-repo CSS used **prefixed component classes**: `.odd-button`, `.odd-button-primary`, `.odd-card`, `.odd-nav-list`, `.odd-alert`, etc. You had to apply a specific class to opt an element into the design system.

The website CSS takes a **different approach**: it styles bare elements and simpler class names directly - `button`, `.button`, `.card`, `.nav-list`, `.callout`, `.status` - so plain HTML gets the accessible styling without needing a `.odd-*` class on every element. This is a real architectural difference, not a superset of the old naming, and it was a deliberate choice already proven on the live site - not something invented during this sync.

**This is a breaking change for anything still written against the old `.odd-*` class names.** A search of this repository found the old convention still in use in:

- `Examples/Component Gallery Starter.html`
- `Patterns/Cards.md`
- `Patterns/Navigation.md`
- `Patterns/Dialogs.md`

These were **not** rewritten as part of this sync - that's real authoring work involving content decisions, not a mechanical file copy, and doing it without review risked getting it wrong silently. They are flagged here as an explicit, known follow-up: either update them to the new bare-element convention, or make a deliberate decision to keep `.odd-*` as a documented secondary convention for cases where scoping matters. Don't treat this repository as fully synchronized until that's resolved.

## Superseded files

Both previous CSS variants (the `.odd-*.css` hyphenated set and the duplicate space-named set that created two sources of truth) were moved to `Archive/CSS-Pre-Website-Sync-2026-07-29/`, not deleted, in case any specific old rule needs to be recovered or diffed against later.
