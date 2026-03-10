# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev        # Start dev server
pnpm build      # Production build
pnpm preview    # Preview production build
pnpm format     # Format with Prettier (no-semi, svelte-sort-order: options-scripts-markup-styles)
pnpm deploy     # Build and deploy to GitHub Pages via gh-pages
```

No test suite is configured.

## Architecture

This is a **Svelte 5** single-page calculator app built with Vite.

- `src/main.js` — mounts `App.svelte` to `#app`
- `src/App.svelte` — shell with `.container` layout; renders `<Display />`
- `src/components/Display.svelte` — **all calculator logic lives here**: input state (`$state`), live evaluation via `mathjs evaluate()` (`$derived.by`), and the full button grid
- `src/components/Button.svelte` — generic button using Svelte 5 snippets API (`{@render children()}`) and `$props()`
- `src/store.js` — unused `theme` writable store (legacy)

**Svelte 5 patterns in use:** `$state`, `$derived.by`, `$props()`, `{#snippet children()}`, `{@render children()}`. Do not use Svelte 4 syntax (`export let`, `$:`, `new Component()`).

**Styling:** Global CSS variables in `src/app.css` define the retro CASIO color palette and responsive button sizing (`--width`, `--height`, `--gap`). Button variants (`.btn-number`, `.btn-operator`, `.btn-function`, `.btn-equals`) are styled via `:global()` selectors in `Display.svelte`. SCSS is available via the `sass` dev dependency; `Button.svelte` uses `<style lang="scss">`.

**Expression evaluation:** User input is stored as a raw string and evaluated live with `mathjs`'s `evaluate()`. The display shows the input expression on top and the live result below. Operators are appended as strings (e.g., `' - '` with spaces for subtraction).
