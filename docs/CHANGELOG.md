# Changelog

Project history and major changes for TreezDS Design System.

---

## [Current] 2025-10-18

### Component Documentation Complete
- **Button README**: Created comprehensive 350-line documentation covering variants, sizes, icons, accessibility, props API, patterns, and troubleshooting
- **Typography README**: Created comprehensive 400-line documentation with all 16+ variants, font families, usage examples, and semantic HTML guidelines
- **Icon README**: Previously completed - 400+ line comprehensive guide (part of doc consolidation below)

### Token System Optimization
- **Primitive token cleanup**: Eliminated redundant naming (e.g., `Green-green05` → `green05`, `System-Success-successMain` → `success-main`)
- **Flat structure**: Split large objects into focused collections (6 color collections: browns, oranges, peaches, blues, purples, yellows)
- **CSS prefix**: Added `primitive-` prefix to all CSS variables for clarity (`--primitive-green05` instead of `--color-green-green05`)
- **Connected tokens**: Semantic tokens now reference primitive tokens (both TypeScript and CSS), creating single source of truth
- **TypeScript vs CSS guide**: Added comprehensive documentation explaining when to use each (CSS for styling/theming, TS for logic/calculations)
- **Storybook updated**: Fixed token displays to match new structure

### Documentation Consolidation & Cleanup
- **Icon docs consolidated**: 4 files (944 lines) → 1 comprehensive README + 1 overview (67% reduction)
- **Design tokens README**: Cleaned up mixed Spanish/English content, simplified to ~290 lines, removed redundancies
- **Typography tokens README**: Already clean and concise (176 lines)
- **Removed redundant files**: Deleted 3 Spanish/outdated icon documentation files
- **Single source of truth**: Component READMEs for detailed docs, `docs/guides/` for overviews
- **All English**: Translated remaining Spanish documentation
- **Fixed inconsistencies**: Updated all documentation to reflect Google Fonts Material Symbols (not MUI), correct icon counts (16 Material + 6 Custom), and accurate size specifications
- **Removed dead links**: Cleaned up references to deleted `ai-context/` and `migrations/` folders
- **Policy established**: No new summary/audit/analysis files - use this CHANGELOG

### Token System Reorganization
- **Renamed**: `src/tokens/` → `src/figma-tokens/`
- **Clear separation**: Primitive tokens (auto-generated from Figma) vs Semantic tokens (manually refined)
- **Updated imports**: All references updated in Storybook and components
- **Documentation**: Created comprehensive READMEs for both token systems

### Component Updates
- **Button**: Now uses centralized CSS variables for fonts (`var(--font-family-circular)`)
- **Typography**: Simplified to use CSS variables directly, removed redundant fallback logic
- **Removed Storybook demos**: Cleaned up 11 example files (Button, Header, Page stories)

---

## [Previous] 2025-10-15

### Typography System Refactor
- **Architecture**: Implemented professional primitive/semantic token architecture
- **Primitives**: Base values (font sizes, weights, line heights, letter spacing)
- **Semantics**: Component tokens (h1-h7, body, labels, links, caps)
- **CSS Variables**: Centralized font fallbacks in `src/styles/fonts.css`
- **Backwards compatibility**: `typographyLegacy` export for old space-separated names

### Font Integration
- **Circular Std**: Added OTF font support (@font-face declarations)
- **Centralized fallbacks**: Single source of truth in `fonts.css` using CSS variables
- **Font stack**: `Circular Std → Inter → system fonts`
- **Documentation**: Created `docs/guides/FONT-FALLBACKS.md` and `public/fonts/README.md`

### Design Tokens Cleanup
- **Removed**: 9 legacy files from `src/design-tokens/` (examples.ts, 6 JSON artifacts, colors.ts/css)
- **Result**: 53% file reduction (15 files → 7 files)
- **Fixed**: Invalid CSS variable names (spaces → dashes)

---

## [Earlier] 2025-10-10

### Icon System Implementation
- **Dual system**: Material Symbols (2,500+ icons) + Custom SVG (brand-specific)
- **Material Icons**: Import by name, no SVG files needed
- **Custom Icons**: Auto-watch script for SVG imports from `imported-from-figma/`
- **Type-safe**: Full TypeScript support with auto-generated types

### Figma MCP Integration
- **Migration**: Moved from Figma REST API to Model Context Protocol (MCP)
- **Token-free**: No API tokens needed, uses Figma desktop app
- **Deprecated scripts**: 7 legacy scripts marked as deprecated
- **Tools available**: `mcp_figma_get_design_context`, `mcp_figma_get_metadata`, `mcp_figma_get_screenshot`

---

## [Foundation] 2025-09-01

### Initial Setup
- **Project created**: React 19 + TypeScript 5.9 + Vite 7 + Storybook 9
- **Component library**: Button, Typography, Icon components with CSS Modules
- **Design tokens**: Initial color, spacing, and radius tokens from Figma
- **Build system**: Vite for library bundling, Storybook for documentation

---

## Documentation Policy

### What Goes in CHANGELOG
- Major feature additions
- System refactors or reorganizations
- Breaking changes
- Important migrations
- Technology upgrades

### What Doesn't Go in CHANGELOG
- Minor bug fixes (use git commits)
- Documentation updates (unless structural)
- Dependency updates (unless major version)
- Work-in-progress changes

### Format
- **Date** at the top of each entry
- **Category headers** (###) for related changes
- **Bullet points** with brief descriptions
- **Keep it concise**: 1-2 lines per change max

---

**Last Updated**: 2025-10-18
