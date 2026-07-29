# Carousel - Authoritative Reference (Synchronized from the live website, July 29, 2026)

## Status

Replaced the previous carousel component here (naming convention: `.carousel-region`, `.carousel-shell`, `.slide`, etc. - its own third naming scheme, distinct from both the old `.odd-*` convention and the website's `.srf-*` convention) with the actual markup, CSS classes, and JavaScript running on the live Open Door Design homepage today. The previous version is preserved at `Archive/CSS-Pre-Website-Sync-2026-07-29/carousel-component-pre-sync/`, not deleted.

This is the real, tested implementation - not a rewritten or "cleaned up" version. `carousel-template.html` is one complete, working carousel section extracted directly from the live homepage (the "Find Your Doorway" site-orientation carousel), including its real content, not a generic placeholder.

## Files

- `carousel-template.html` - one complete carousel section, exactly as it appears on the live site.
- `carousel.js` - the full carousel behavior script, extracted from the website's inline `<script>` block. Handles: pause/resume on focus enter/leave, a persistent "Pause motion" toggle (saved to `localStorage` under `openDoorDesignCarouselMotionPreference`), automatic respect for `prefers-reduced-motion`, debounced live-region announcements, and focus movement to the newly displayed slide's summary.
- Styling comes from `Components/CSS/odd-components.css` (`.srf-carousel-*`, `.srf-slide*` rules) and `odd-layout.css`/`odd-theme.css` for surrounding page context - there is no separate carousel-specific CSS file anymore, since the website doesn't have one either.

## Dependency the template doesn't include by itself

`carousel.js` looks for an element with `id="global-carousel-status"` as a shared live region across multiple carousels on one page:

```html
<div aria-atomic="true" aria-live="polite" class="visually-hidden" id="global-carousel-status"></div>
```

This lives once, elsewhere on the page (near the top, in the website's case), not inside each individual carousel section. Include it once per page using this component.

## A discrepancy worth knowing about, not silently resolved

`odd-components.css` contains this comment and a supporting rule:

```css
/* Carousel controls are links so JAWS Browse Mode can activate them without Forms Mode. */
.srf-carousel-control {
  display: inline-block;
  text-decoration: none;
  cursor: pointer;
}
```

But the actual live markup in `carousel-template.html` uses `<button>` elements for Previous/Pause/Next (`<button class="secondary" data-prev type="button">`), not `<a class="srf-carousel-control">`. The CSS class and its stated rationale exist, but nothing in the current live markup actually uses it. This wasn't resolved as part of this sync - it's flagged here rather than guessed at, since it's a real question about which approach is the intended current standard (buttons, per what's actually live and tested; or links, per what the CSS comment says is the reason for a class that isn't in use). Worth settling explicitly rather than carrying the contradiction forward silently.
