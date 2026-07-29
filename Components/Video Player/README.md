# Accessible Video Player - New Component (added July 29, 2026)

## Status

This component did not exist in this repository before this sync. It's added from the live Open Door Design website (`Accessible Video Player.htm`), copied in full rather than hand-transcribed, to avoid introducing transcription errors into an accessibility-relevant control.

## Files

- `video-player-reference.htm` - the complete, real, tested reference implementation, exactly as it exists on the website.

## Styling

Uses `.ecb-*` classes (`ecb-player`, `ecb-video-wrap`, `ecb-video`, `ecb-controls`, `ecb-transcript-bar`, `ecb-tooltip`, `ecb-transcript-drawer`, `ecb-transcript-scroll`, `ecb-btn`, `ecb-btn-text`, `ecb-icon-play`, `ecb-icon-pause`, `ecb-live`, `ecb-transcript-label`, `ecb-transcript-close`) defined in `Components/CSS/odd-components.css`. No separate CSS file - same pattern as the carousel component.

## Not yet done

This file hasn't been reviewed/annotated the way the Carousel component has (no equivalent "what this does and how it works" breakdown yet, despite a `What This Carousel Does and How It Works.docx` existing for the carousel on the website - there's no video-player equivalent to draw from). Treat this as the raw reference material brought in per the sync plan, not as a fully authored component guide yet. Worth a follow-up pass once someone has reviewed the actual player behavior in a browser with a screen reader.
