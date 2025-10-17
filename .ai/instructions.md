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
npm run watch:icons      # Watch for new SVG icons
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

### 📁 Key Directories
- `src/components/` - React components (Button, Typography, Icon)
- `src/design-tokens/` - Design tokens (CSS + TS)
- `src/tokens/` - Organized token exports
- `src/stories/` - Storybook stories
- `scripts/` - Build scripts (mostly deprecated, see above)

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
- `TOKEN-SYSTEM-SUMMARY.md` - Token architecture
- `SEMANTIC-COLORS-IMPLEMENTATION.md` - Color system details
- `src/design-tokens/README.md` - Token usage guide
- `src/tokens/README.md` - Token organization

### 🎯 When User Asks to...

**"Extract from Figma"** → Use MCP tools, not legacy scripts
**"Add a component"** → Create folder in `src/components/` with above structure
**"Update tokens"** → Use MCP to extract, then transform with `transform-figma-tokens.js`
**"Add an icon"** → Drop SVG in `imported-from-figma/`, run `npm run watch:icons`
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
