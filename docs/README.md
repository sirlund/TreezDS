# TreezDS Documentation

Documentation for the Treez Design System.

---

## Quick Start

- **[README.md](../README.md)** - Project overview and setup
- **[Storybook](http://localhost:6006)** - Interactive component playground
- **[CHANGELOG.md](./CHANGELOG.md)** - Project history and major changes

---

## Development Guides

Location: `docs/guides/`

| Guide | Description |
|-------|-------------|
| [fonts.md](./guides/fonts.md) | Font setup, configuration, and fallbacks |
| [tokens.md](./guides/tokens.md) | Design token architecture and usage |
| [icons.md](./guides/icons.md) | Icon system (Material Symbols + Custom SVG) |

---

## Component Documentation

Each component includes:
- **Component file** (`ComponentName.tsx`) - Implementation
- **README** (when needed) - Component-specific guides
- **Stories** (`ComponentName.stories.tsx`) - Storybook examples

**View in Storybook**: `npm run storybook`

---

## Token System

### Primitive Tokens
**Location**: `src/figma-tokens/`  
**Auto-generated** from Figma - DO NOT edit manually

### Semantic Tokens
**Location**: `src/design-tokens/`  
**Manually refined** - USE THESE in components

**See**: [tokens.md](./guides/tokens.md) for complete guide

---

## For AI Agents

**Instructions**: `.ai/instructions.md`  
**History**: `docs/CHANGELOG.md`

AI agents should:
- Read `.ai/instructions.md` for project patterns
- Update `CHANGELOG.md` for major changes
- Follow documentation policy (no temp files)

---

## External Links

- **Storybook**: http://localhost:6006 (dev)
- **Material Symbols**: https://fonts.google.com/icons
- **Figma**: Design system source file

---

**Documentation Policy**: Keep it simple. Use `CHANGELOG.md` for history, `guides/` for technical docs. No temporary analysis/summary files.
