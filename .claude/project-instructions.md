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

### 🎯 Component Development Pattern

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

### 🎨 Design Token Usage

```typescript
// In TypeScript/TSX
import { colors, buttonColors } from '@/design-tokens';

const myColor = colors.brand.primary;      // '#a9e079'
const btnBg = buttonColors.primaryBg;      // '#a9e079'
```

```css
/* In CSS/CSS Modules */
@import '@/design-tokens/semantic-colors.css';

.button {
  background: var(--color-button-primary-bg);
  color: var(--color-button-primary-text);
}

.button:hover {
  background: var(--color-button-primary-hover);
}
```

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

**Q: How do I add an icon?**  
A: Drop SVG in `imported-from-figma/`, run `npm run watch:icons`, use `<Icon name="icon-name" />`.

**Q: How do I test components?**  
A: Run `npm run storybook` and view/interact with components there.

**Q: Where's the production build?**  
A: `npm run build` creates lib build, `npm run build-storybook` creates docs in `storybook-static/`.

**Q: Can I use the old Figma extraction scripts?**  
A: No, they're deprecated. Use Figma MCP instead.

### 📚 Key Documentation Files

- `.cursorrules` - Detailed AI instructions (comprehensive version)
- `.ai/instructions.md` - Quick reference guide
- `.ai/figma-mcp-migration.md` - Figma MCP migration details
- `README.md` - Project overview
- `src/design-tokens/README.md` - Token usage guide
- `TOKEN-SYSTEM-SUMMARY.md` - Token architecture
- `FONTS.md` - Font setup instructions

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
