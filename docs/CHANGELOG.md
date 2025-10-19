# Changelog

Project history and major changes for TreezDS Design System.

---

## [Current] 2025-10-19

### Design Token System Enhancement
- **Base color tokens added**: Added `base-black` (#1a1a1a) and `base-white` (#ffffff) as primitive foundation colors
- **Semantic naming updated**: Renamed `neutralColors.black/white` to `primaryBlack/primaryWhite` for clarity
- **Text color primitives**: Updated all text colors to reference primitive tokens (base-black, grey-06, grey-07, grey-01)
- **Token transformation**: Updated transform script to include "Base" group alongside Green, Greyscale, and Secondary color groups
- **Complete primitive chain**: All color tokens now follow: Figma JSON → Primitive tokens → Semantic tokens → CSS variables → Components

### Component CSS Refactoring - Button
- **Full tokenization**: Replaced ALL hardcoded values with design token variables
- **Typography tokens**: Font-family, font-weight, font-size, line-height all use `--typography-*` variables
- **Color tokens**: All colors reference `--color-*` variables (text, button, neutral, state)
- **Spacing tokens**: Gap, padding use `--spacing-button-*` variables
- **Radius tokens**: Border-radius uses `--radius-button-*` variables
- **Focus state**: Replaced hardcoded `#1a4007` with `var(--primitive-green-10)`
- **Modern CSS organization**: Added section headers, property grouping, and CSS nesting for better maintainability
- **CSS structure**: Organized into 4 clear sections (Base, Variants, Sizes, Layout Modifiers)

### Component CSS Refactoring - Icon
- **Size tokens created**: New semantic size token system for icons (xs: 12px, s: 18px, m: 20px, l: 24px, xl: 48px)
- **Full tokenization**: Replaced all hardcoded pixel sizes with `--size-icon-*` variables
- **Modern CSS organization**: Added section headers and CSS nesting for Material Symbol variants
- **CSS structure**: Organized into 3 clear sections (Base, Material Symbols, Size Variants)
- **Improved comments**: Added pixel value comments and clearer descriptions

### Component CSS Refactoring - Typography
- **CSS organization**: Added section header and explanatory comments
- **Already token-based**: Component correctly uses inline styles from design tokens

### Typography Token Integration
- **Missing imports added**: Added `typography/primitives.css` and `typography/semantic.css` to main app and Storybook
- **Font variable fix**: Updated primitives to reference `--font-family-roboto` and `--font-family-circular` from fonts.css
- **Complete font chain**: fonts.css (with fallbacks) → primitives.css → semantic.css → Button component
- **Fixed rendering**: Button now correctly renders with Circular Std font instead of Roboto

### Design Token System - Sizes
- **New token file**: Created `semantic-sizes.ts` and `semantic-sizes.css` for component size tokens
- **Icon sizes**: Added semantic tokens for all icon sizes (xs, s, m, l, xl)
- **Avatar sizes**: Prepared size tokens for future avatar component (xs, sm, md, lg)
- **General scale**: Added general purpose size scale (xs through 3xl)
- **Global availability**: Imported in both main app and Storybook

### CSS Architecture Improvements
- **Consistent structure**: All component CSS files now follow same organization pattern
- **Section headers**: Clear visual separators with descriptive titles
- **Property grouping**: Logical organization (Layout, Typography, Appearance, States)
- **Modern nesting**: CSS nesting used for pseudo-classes and compound selectors
- **Documentation**: Comments showing pixel values and explaining purpose
- **Maintainability**: Reduced repetition, easier to scan and understand

### Token Chain Complete
All components now follow the complete token hierarchy:
1. **Figma** → exported JSON files
2. **Primitive tokens** → auto-generated from JSON (colors, spacing, radius, sizes)
3. **Semantic tokens** → component-specific meanings (button, icon, text, etc.)
4. **CSS variables** → global availability
5. **Components** → consume via CSS variables

## [Previous] 2025-10-18

### Storybook CSS Integration Fix
- **Fixed missing CSS imports**: Added `semantic-spacing.css` and `semantic-radius.css` to Storybook preview configuration
- **Button styling fixed**: All CSS variables now properly loaded - padding, border-radius, and gap display correctly
- **Complete import chain**: Storybook now loads primitives → semantic tokens → components correctly

### Icon System Correction
- **Fixed invalid icon**: Replaced non-existent "product" Material icon with "category"
- **Updated documentation**: Icon component JSDoc now lists all valid Material Symbol icons
- **Button stories updated**: Changed icon usage from `iconBefore="product"` to `iconBefore="category"`

### Token System Rebuild
- **Transform script created**: `npm run tokens:transform` regenerates all primitive tokens from imported Figma JSONs
- **All primitive tokens rebuilt**: 63 colors + 9 radius + 10 spacing + 7 size tokens auto-generated
- **Semantic tokens updated**: ALL semantic tokens (TS & CSS) now reference primitives - NO hardcoded values
- **Single source of truth**: Figma → imported JSON → primitive tokens → semantic tokens → components
- **Documentation added**: Clear comments in all files enforcing "MUST reference primitives" rule

### Token System Expansion
- **Semantic radius tokens**: Created component-specific radius tokens (`button`, `input`, `card`, `modal`, `badge`, `avatar`) + general scale
- **Semantic spacing tokens**: Created component-specific spacing tokens (`button`, `input`, `card`) + general scale
- **Button component updated**: Replaced all hardcoded `border-radius`, `gap`, and `padding` with CSS variables
- **CSS variables added**: `--radius-*` and `--spacing-*` variables now available globally
- **TypeScript + CSS exports**: Both formats available for all tokens (radius and spacing)

### Scripts Cleanup
- **MCP scripts removed**: Deleted 3 incomplete template scripts (`extract-design.js`, `extract-colors.js`, `generate-tokens.js`)
- **npm commands cleaned**: Removed `mcp:extract`, `mcp:colors`, `mcp:tokens` (were non-functional)
- **MCP README updated**: Documented real workflow (Plugin export + direct MCP tool usage)
- **Workflow clarified**: Plugin export is primary method, MCP tools for advanced use cases only

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

**Last Updated**: 2025-10-19 (evening)
