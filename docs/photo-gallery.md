# Photo Gallery (Home Page)

Scroll-driven parallax gallery rendered by `components/gallery/PhotoGallery.tsx`.

## Layouts

| Breakpoint | Component | Effect |
|------------|-----------|--------|
| `< lg` (phones, tablets) | `ParallaxRowsGallery` → `ParallaxRow` | 3 horizontal filmstrips. Rows alternate direction (left / right / left) at different speeds, each with its own resting stagger so tiles never line up into a static grid. |
| `≥ lg` (desktop) | `ParallaxColumnsGallery` → `ParallaxColumn` | 4 vertical columns moving down at different speeds (original Skiper effect). |

Both layouts are rendered and toggled with CSS (`lg:hidden` / `hidden lg:flex`), so there is no JS breakpoint state and no hydration flash.

## How the mobile rows stay correct on every screen

- `useTrackOverflow` measures each track with a `ResizeObserver` (`overflowWidth = trackWidth - visibleWidth`) and keeps it in React state.
- A row rests at the centre of its overflow plus its stagger, then moves `±travel / 2` across the scroll range.
- Travel is capped at `overflowWidth - 2 × |stagger|`, so a row edge never comes into view on any viewport.
- Speed is relative to the visible width (`travelShareOfVisibleWidth`), so it feels the same on a 360px phone and an 1000px tablet.
- Scroll progress is smoothed with `useSpring` for the rows.
- `prefers-reduced-motion` freezes rows at their resting offset and columns at their midpoint.

## Configuration

All tuning lives in `lib/gallery-data.ts`:

- `galleryRows`: `images`, `direction`, `travelShareOfVisibleWidth`, `staggerShareOfVisibleWidth`
- `galleryColumns`: `images`, `startOffsetPercent`, `travelInViewportHeights`

Tokens live in `design-system/tokens/gallery.css`:

- `--spacing-gallery` → `gap-gallery`, `py-gallery` (row and tile spacing, always equal)
- `--spacing-gallery-wide` → `gap-gallery-wide`, `p-gallery-wide` (desktop columns)
- `--gallery-row-tile-height` (row tiles are `aspect-4/5`, so width follows height)
- `--gallery-vignette-rows`, `--gallery-vignette-columns` (inset edge shading, OKLCH)

## Gotchas

- Do not feed `ResizeObserver` measurements into Motion values read by `useTransform(() => ...)` or a multi-input `useTransform`. In framer-motion 12.23 the transform did not recompute when those values changed, so rows sat at `x: 0` until scroll progress changed. Keep measurements in React state.
- Use `overflow-clip`, not `overflow-hidden`, on the gallery wrappers.
