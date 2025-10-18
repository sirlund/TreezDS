# AI Agent Instructions for TreezDS

## Quick Reference for AI Assistants

### 🎯 Project Type
React Design System Library with TypeScript + Vite + Storybook

### 🔧 Key Technologies
- React 19, TypeScript 5.9, Vite 7, Storybook 9
- CSS Modules for styling
- Figma MCP for design extraction
- Vitest + Playwright for testing

### ⚡ Most Common Commands
```bash
npm run storybook        # Start development (preferred)
npm run dev              # Start Vite dev server
npm run build            # Build library
npm run watch:icons      # Watch for new SVG icons (auto-detect changes)
npm run update:icons     # Manually regenerate icon data from SVGs
```

### 🚨 CRITICAL: Figma Integration

**✅ DO USE**: Figma MCP Tools
- `mcp_figma_get_design_context` for extracting components
- `mcp_figma_get_metadata` for structure info
- `mcp_figma_get_screenshot` for visuals

**❌ DO NOT USE**: Legacy Figma Scripts
The following scripts are **DEPRECATED** and should not be suggested:
- `extract-figma-data.js`
- `extract-color-styles.js`
- `extract-colors-from-node.js`
- `find-button-component.js`
- `extract-button-component.js`
- `generate-button-from-figma.js`
- `generate-tokens.js`

**Never suggest** using `FIGMA_ACCESS_TOKEN` or running `npm run tokens:extract/generate/update`

### 📁 Project Structure
- `src/components/` - React components (Button, Typography, Icon)
- `src/figma-tokens/` - Primitive tokens (auto-generated from Figma)
- `src/design-tokens/` - Semantic tokens (manually refined)
- `src/stories/` - Storybook stories
- `docs/guides/` - Development guides (fonts, tokens, icons)
- `docs/CHANGELOG.md` - Project history
- `scripts/` - Build scripts (mostly deprecated, see above)
- `imported-from-figma/` - Custom SVG icons from Figma exports

### 🎨 Icon System
**Dual System**: Material Symbols (primary) + Custom SVG (brand-specific)

**Material Symbols Rounded** (Google Fonts CDN):
- 16 icons currently mapped: `settings`, `dashboard`, `account_circle`, etc.
- Technology: Font ligatures via Google Fonts CDN (NOT @mui/icons-material package)
- Specs: Rounded variant, weight 400, grade 0, optical size 20px, no fill
- Add new: Search https://fonts.google.com/icons (filter: Rounded) → Add to `materialSymbolNames` array

**Custom Icons** (Treez Brand):
- 6 icons: `beverage`, `cbd`, `edible`, `extracts`, `flower`, `preroll`
- Source: Figma SVG exports (inline SVG data)
- Add new: Export SVG → `imported-from-figma/` → Run `watch:icons`

**Sizes**: `xs` (12px), `s` (18px), `m` (20px), `l` (24px), `xl` (48px)

**Docs**:
- `src/components/Icon/README.md` - Complete icon documentation
- `docs/guides/icons.md` - Quick reference overview

### 🎨 Design Token Usage
```typescript
// In TypeScript
import { colors, buttonColors } from '@/design-tokens';

// In CSS
@import '@/design-tokens/semantic-colors.css';
.element { color: var(--color-brand-primary); }
```

### 📝 Code Conventions
- Functional components only
- TypeScript strict mode enabled
- CSS Modules for styling (`.module.css`)
- Named exports preferred
- Props interfaces explicitly typed

### 🏗️ Component Structure
```
ComponentName/
├── ComponentName.tsx           # Component logic
├── ComponentName.module.css    # Scoped styles
├── ComponentName.stories.ts    # Storybook stories
├── index.ts                    # Exports
└── README.md                   # Documentation
```

### 🔍 Before Making Changes
1. Check if component exists in `src/components/`
2. Look at Storybook stories for usage examples
3. Check design tokens in `src/design-tokens/` and `src/tokens/`
4. Review similar components for patterns

### 📚 Documentation Files to Reference
- `.cursorrules` - Detailed AI instructions (this file's companion)
- `README.md` - Project overview and setup
- `docs/CHANGELOG.md` - Project history and major changes
- `docs/guides/` - Development guides (fonts, tokens, colors, icons)
- `src/figma-tokens/README.md` - Primitive tokens guide
- `src/design-tokens/README.md` - Semantic tokens guide

### 📝 Documentation Policy

**IMPORTANT**: This project follows a strict documentation structure to avoid clutter.

**✅ DO:**
- Update `docs/CHANGELOG.md` for major changes
- Add technical guides to `docs/guides/` (one topic per file)
- Keep this file (`.ai/instructions.md`) updated with new patterns
- Write all documentation in English

**❌ DO NOT:**
- Create temporary files like `SUMMARY.md`, `AUDIT.md`, `ANALYSIS.md`
- Create dated files like `PHASE-1-COMPLETE.md`, `UPDATE-2025-10-18.md`
- Duplicate information across multiple files
- Create separate folders for documentation (keep in `docs/guides/`)

**Structure:**
```
docs/
├── CHANGELOG.md ............ Project history (major changes only)
└── guides/
    ├── fonts.md ............ Font setup and configuration
    ├── tokens.md ........... Token system architecture
    └── icons.md ............ Icon system usage
```

**When to update CHANGELOG:**
- Major feature additions
- System refactors
- Breaking changes
- Important migrations
- Keep entries concise (1-2 lines each)

### 🎯 When User Asks to...

**"Extract from Figma"** → Use MCP tools, not legacy scripts
**"Add a component"** → Create folder in `src/components/` with above structure
**"Update tokens"** → Use MCP to extract, then transform with `transform-figma-tokens.js`
**"Add a Material Symbols icon"** → Add name to `materialSymbolNames` in `src/components/Icon/materialIconMap.ts`  
**"Add a custom icon"** → Drop SVG in `imported-from-figma/`, run `npm run watch:icons` or `npm run update:icons`
**"Update existing icons"** → Modify SVG in `imported-from-figma/`, run `npm run update:icons`
**"Deploy Storybook"** → Use `npm run deploy-storybook`
**"Update colors"** → Extract with MCP, update `semantic-colors.ts`

### ⚠️ Known Issues
- Commercial font "Circular Std" uses Inter as fallback (see `FONTS.md`)
- Legacy scripts still in repo but scheduled for removal
- Some old npm scripts reference deprecated tools

### 🔗 Related Configs
- `.claude/settings.local.json` - Claude-specific permissions
- `package.json` - Scripts and dependencies
- `vite.config.ts` - Build configuration
- `tsconfig.json` - TypeScript configuration

---

**Purpose**: This file helps AI agents understand the project quickly and avoid deprecated patterns.
**Format**: Compatible with Cursor, Windsurf, Claude, and other AI coding assistants.
