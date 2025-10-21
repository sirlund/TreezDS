# Claude Code Project Instructions

## Project Identity
**Name**: TreezDS (Treez Design System)  
**Type**: React Component Library with Design Tokens  
**Primary Tool**: Storybook for component development

## Critical Information for Claude

### 🎨 Figma Integration - IMPORTANT
This project has **Figma MCP (Model Context Protocol) enabled**. This is a game-changer for the workflow.

#### What This Means
- **DON'T** suggest using old Figma API scripts in `/scripts`
- **DON'T** ask for `FIGMA_ACCESS_TOKEN` environment variable
- **DON'T** recommend running `npm run tokens:extract` or similar legacy commands
- **DO** use MCP tools: `mcp_figma_get_design_context`, `mcp_figma_get_metadata`, `mcp_figma_get_screenshot`
- **DO** suggest extracting designs directly with MCP when users ask about Figma

#### Legacy Scripts to Ignore
These files exist but are **deprecated**:
```
scripts/extract-figma-data.js
scripts/extract-color-styles.js
scripts/extract-colors-from-node.js
scripts/find-button-component.js
scripts/extract-button-component.js
scripts/generate-button-from-figma.js
scripts/generate-tokens.js
```

#### Scripts Still Useful
```
scripts/transform-figma-tokens.js  ✅ Transforms JSON exports
scripts/watch-icons.js             ✅ Auto-registers SVG icons
```

### 🚀 Common Development Tasks

#### Starting Development
```bash
npm run storybook    # This is the primary dev mode - opens port 6006
npm run dev          # Alternative: Vite dev server - port 5173
```

#### Building
```bash
npm run build                # Build the component library
npm run build-storybook      # Build Storybook for deployment
npm run deploy-storybook     # Deploy to GitHub Pages
```

#### Working with Icons
```bash
npm run watch:icons          # Watch for new SVG files
# Or just drop SVG in imported-from-figma/ and the watcher auto-updates
```

### 📁 Project Structure Quick Reference

```
src/
├── components/           # React components (Button, Typography, Icon)
│   ├── Button/
│   ├── Typography/
│   └── Icon/
├── design-tokens/        # Design tokens from Figma
│   ├── tokens.css       # CSS variables
│   ├── tokens.ts        # TypeScript constants
│   └── semantic-colors.ts  # Organized color system
├── tokens/              # Organized token exports by category
│   ├── colors/
│   ├── spacing/
│   └── radius/
├── stories/             # Storybook stories
└── styles/              # Global styles (fonts, etc.)

scripts/
├── transform-figma-tokens.js  ✅ Keep - transforms JSON to tokens
├── watch-icons.js             ✅ Keep - icon watcher
└── [7 other files]            ❌ Deprecated - use MCP instead
```

### � Icon System Architecture

TreezDS uses a **dual icon system**: Material Symbols (primary) + Custom SVG icons (brand-specific).

#### Material Symbols Rounded (Google Fonts)
**Primary icon system** for standard UI icons.

**Specifications**:
- Variant: Rounded
- Weight: 400
- Grade: 0 (Normal)
- Optical Size: 20px base (dynamic: 20-48px)
- Fill: 0 (No fill / Outlined style)

**How it works**:
- Loaded via Google Fonts CDN (in `index.html` and `.storybook/preview-head.html`)
- Renders using font ligatures (text → icon)
- Icon names in snake_case (e.g., `settings`, `account_circle`)
- No imports needed, minimal bundle impact

**Available icons** (16 total):
```typescript
'account_circle', 'admin_panel_settings', 'apps', 'auto_graph',
'dashboard', 'group', 'integration_instructions', 'loyalty',
'payments', 'inventory', 'redeem', 'rocket_launch', 'settings',
'smart_toy', 'storefront', 'verified'
```

**Adding new Material Symbols**:
1. Search at https://fonts.google.com/icons (filter: Rounded)
2. Copy snake_case name (e.g., `shopping_cart`)
3. Add to `materialSymbolNames` array in `src/components/Icon/materialIconMap.ts`
4. Use: `<Icon name="shopping_cart" size="m" />`

**Key files**:
- `src/components/Icon/materialIconMap.ts` - Icon registry
- `src/components/Icon/Icon.module.css` - Font config with `font-variation-settings`
- `src/components/Icon/README.md` - Complete documentation

#### Custom Icons (Treez Brand)
**Secondary system** for Treez-specific product category icons.

**Available icons** (6 total):
```typescript
'beverage', 'cbd', 'edible', 'extracts', 'flower', 'preroll'
```

**How it works**:
- SVG paths stored in `customIconData.ts`
- Extracted from Figma designs
- Rendered as inline SVG with proper `fillRule` and `clipRule`
- Updated via `watch:icons` script

**Adding new custom icons**:
1. Export SVG from Figma to `imported-from-figma/` folder
2. Run `npm run watch:icons` (or auto-detects if watcher running)
3. Icon added to `src/components/Icon/customIconData.ts`
4. Use: `<Icon name="new-icon" size="m" />`

**Icon sizes** (both systems):
- `xs`: 12px
- `s`: 18px
- `m`: 20px (default)
- `l`: 24px
- `xl`: 48px

**Important sizing note**:
- Material Symbols: Uses `font-size` + dynamic `opsz` (optical size)
- Custom icons: Uses SVG `viewBox` scaling
- Both support all 5 sizes seamlessly

**When to use which**:
- **Material Symbols**: Standard UI (buttons, navigation, system icons)
- **Custom Icons**: Treez brand/product-specific designs

**Documentation**:
- `src/components/Icon/README.md` - Complete icon documentation (technical reference, examples, troubleshooting)
- `docs/guides/icons.md` - Quick reference overview

### �🎯 Component Development Pattern

When creating/updating components:

1. **Extract Design** (if from Figma)
   - Use `mcp_figma_get_design_context` with node ID
   - Parse the returned design tokens and styles

2. **Component Structure**
   ```
   ComponentName/
   ├── ComponentName.tsx           # Main component
   ├── ComponentName.module.css    # Scoped styles
   ├── ComponentName.stories.ts    # Storybook story
   ├── index.ts                    # Exports
   └── README.md                   # Documentation
   ```

3. **Styling Approach**
   - Use CSS Modules (`.module.css`)
   - Reference design tokens via CSS variables: `var(--token-name)`
   - Import semantic colors: `@import '@/design-tokens/semantic-colors.css';`

4. **TypeScript**
   - Strict mode enabled
   - Explicit prop interfaces
   - Functional components only
   - Prefer named exports

5. **Create Storybook Story**
   - Show all variants
   - Include controls for props
   - Add documentation

6. **Export Component**
   - Add to `src/components/index.ts`
   - Verify in Storybook

### 🎨 Design Token Architecture

TreezDS uses a **3-layer token system** (inspired by GitLab, Carbon, Atlassian):

#### 1. Primitive Tokens (`src/figma-tokens/`)
- **AUTO-GENERATED** from Figma JSON exports via `npm run tokens:transform`
- Pure values with NO semantic meaning
- Examples: `green-05` (#a9e079), `grey-08` (#595959), `space-medium` (16px)
- **NEVER edit manually** - always regenerate from Figma
- CSS prefix: `--primitive-*`

#### 2. Semantic Tokens (`src/design-tokens/`)
- **MANUALLY CURATED** design decisions
- MUST reference primitive tokens (NO hardcoded values allowed)
- Give meaning to primitives
- Examples: `color-button-primary`, `spacing-button-gap`, `typo-h1-size`
- CSS prefix: `--color-*`, `--spacing-*`, `--typo-*`, etc.

#### 3. Component Tokens (in component CSS)
- Component-specific applications
- Reference semantic tokens via CSS variables
- Example: `.button { background: var(--color-button-primary); }`

#### Token Workflow
```
Figma Design
    ↓
Export to JSON (plugin) → imported-from-figma/*.json
    ↓
npm run tokens:transform → Auto-generate primitives
    ↓
src/figma-tokens/*.ts + *.css (PRIMITIVES)
    ↓
Manually curate → src/design-tokens/*.ts + *.css (SEMANTICS)
    ↓
Components consume via CSS variables
```

#### Usage Examples

```typescript
// In TypeScript/TSX
import { primitiveColors } from '@/figma-tokens';
import { brandColors, componentColors } from '@/design-tokens';

const primitive = primitiveColors['green-05'];        // '#a9e079' (direct)
const semantic = brandColors.primary;                  // '#a9e079' (via primitive ref)
const component = componentColors.buttonPrimary;       // '#a9e079' (via semantic ref)
```

```css
/* In CSS/CSS Modules */
.button {
  /* ✅ Correct: Use semantic tokens */
  background: var(--color-button-primary);
  padding: var(--spacing-button-padding);
  border-radius: var(--radius-button);
  font-size: var(--typo-label-large-size);

  /* ❌ Wrong: Don't use primitives directly */
  /* background: var(--primitive-green-05); */

  /* ❌ Wrong: Don't hardcode values */
  /* background: #a9e079; */
}

.button:hover {
  background: var(--color-button-primary-hover);
}
```

#### Critical Token Rules

1. **Primitives**: Auto-generated only, never edit manually, never use directly in components
2. **Semantics**: Must reference primitives (TS imports or CSS var()), no hardcoded hex/px
3. **Components**: Use CSS variables from semantic tokens only

### 📝 Code Quality Standards

- **TypeScript**: Strict mode, explicit types, no `any`
- **React**: Functional components, hooks only, no class components
- **CSS**: CSS Modules, design tokens, mobile-first
- **Testing**: Co-locate tests with components
- **Documentation**: Every component needs README and Storybook story

### 🔍 Before Suggesting Changes

1. Check existing component patterns in `src/components/`
2. Review design tokens in `src/design-tokens/` and `src/tokens/`
3. Look at similar components for consistency
4. Verify approach in Storybook if running

### ⚡ Quick Answers to Common Questions

**Q: How do I get designs from Figma?**  
A: Use Figma MCP tools, not the old scripts. Don't ask for FIGMA_ACCESS_TOKEN.

**Q: How do I update colors/tokens?**  
A: Extract with MCP, then use `scripts/transform-figma-tokens.js` if needed.

**Q: How do I add a Material Symbols icon?**  
A: Search at https://fonts.google.com/icons (Rounded style), add name to `materialSymbolNames` array in `src/components/Icon/materialIconMap.ts`, use `<Icon name="icon_name" size="m" />`.

**Q: How do I add a custom Treez icon?**  
A: Drop SVG in `imported-from-figma/`, run `npm run watch:icons`, use `<Icon name="icon-name" size="m" />`.

**Q: How do I test components?**  
A: Run `npm run storybook` and view/interact with components there.

**Q: Where's the production build?**  
A: `npm run build` creates lib build, `npm run build-storybook` creates docs in `storybook-static/`.

**Q: Can I use the old Figma extraction scripts?**  
A: No, they're deprecated. Use Figma MCP instead.

### 📚 Key Documentation Files

**AI Instructions**:
- `.cursorrules` - Detailed AI instructions (comprehensive version)
- `.ai/instructions.md` - Quick reference guide
- `.claude/project-instructions.md` - Claude Code specific instructions

**Development**:
- `README.md` - Project overview
- `docs/README.md` - Complete documentation index
- `docs/guides/` - Token system, colors, fonts, icons guides
- `docs/CHANGELOG.md` - Project history and major changes
- `src/design-tokens/README.md` - Token usage guide

### 🤝 Interaction Tips

- **Be specific**: I have full context of the project structure
- **Show examples**: I can reference existing components
- **Ask about patterns**: I know the conventions used here
- **Figma questions**: I know to use MCP, not old scripts
- **Storybook first**: It's the primary development environment

### 🔄 Current State

- ✅ Figma MCP: Active and working
- ⚠️ Legacy Scripts: Present but deprecated
- 📅 Cleanup: Planned for Q4 2025
- 🚀 Status: Actively developing new components

---

**Last Updated**: October 17, 2025  
**For**: Claude Code / AI Assistants  
**Version**: 1.0
