# 📚 TreezDS Documentation

Complete documentation for the Treez Design System.

---

## 📖 Quick Start

- **[README.md](../README.md)** - Project overview and getting started
- **[Component Docs](../src/components/)** - Individual component documentation
- **[Storybook](http://localhost:6006)** - Interactive component playground

---

## 📂 Documentation Structure

### 🔧 Development Guides
**Location**: [`docs/development/`](./development/)

Essential guides for developers working on the design system.

| Document | Description |
|----------|-------------|
| [TOKEN-SYSTEM-SUMMARY.md](./development/TOKEN-SYSTEM-SUMMARY.md) | Design token architecture and usage |
| [SEMANTIC-COLORS-IMPLEMENTATION.md](./development/SEMANTIC-COLORS-IMPLEMENTATION.md) | Color system and semantic tokens |
| [FONTS.md](./development/FONTS.md) | Font configuration and setup |
| [COMMIT-GUIDE.md](./development/COMMIT-GUIDE.md) | Git commit conventions |

### 🔄 Migration History
**Location**: [`docs/migrations/`](./migrations/)

Historical migration documents and implementation details.

| Document | Date | Description |
|----------|------|-------------|
| [LEGACY-TO-MCP-MIGRATION.md](./migrations/LEGACY-TO-MCP-MIGRATION.md) | Oct 17, 2025 | Migration from Figma REST API to MCP |
| [MATERIAL-SYMBOLS-MIGRATION.md](./migrations/MATERIAL-SYMBOLS-MIGRATION.md) | Oct 17, 2025 | Migration from @mui/icons-material to Material Symbols |
| [MATERIAL-SYMBOLS-SIZES-FIX.md](./migrations/MATERIAL-SYMBOLS-SIZES-FIX.md) | Oct 17, 2025 | Fix for Material Symbols sizing |
| [MATERIAL-SYMBOLS-DONE.md](./migrations/MATERIAL-SYMBOLS-DONE.md) | Oct 17, 2025 | Material Symbols implementation summary |
| [ICON-ROUNDED-CHANGES.md](./migrations/ICON-ROUNDED-CHANGES.md) | Oct 17, 2025 | Rounded variant implementation |

### 🤖 AI Context
**Location**: [`docs/ai-context/`](./ai-context/)

Documentation for AI coding assistants and project status tracking.

| Document | Description |
|----------|-------------|
| [OPTIMIZATION-PLAN-STATUS.md](./ai-context/OPTIMIZATION-PLAN-STATUS.md) | 5-phase optimization plan tracking (80% complete) |
| [OPTIMIZATION-SUMMARY.md](./ai-context/OPTIMIZATION-SUMMARY.md) | Executive summary of optimization |
| [PHASE-2-COMPLETE.md](./ai-context/PHASE-2-COMPLETE.md) | ✅ Phase 2 completion report (MCP Workflows) |
| [PHASE-3-COMPLETE.md](./ai-context/PHASE-3-COMPLETE.md) | ✅ Phase 3 completion report (Legacy Cleanup) |
| [AI-INSTRUCTIONS-UPDATE.md](./ai-context/AI-INSTRUCTIONS-UPDATE.md) | AI instruction updates log |
| [AI-UPDATE-COMPLETE.md](./ai-context/AI-UPDATE-COMPLETE.md) | AI update completion status |

**Note**: Primary AI instructions are in root:
- `.cursorrules` - Cursor IDE / Windsurf
- `.claude/` - Claude Code
- `.ai/` - General AI agents

---

## 🎯 Common Tasks

### Adding a New Component
1. Extract design with Figma MCP: `mcp_figma_get_design_context`
2. Create component folder in `src/components/`
3. Follow [component structure pattern](../src/components/README.md)
4. Create Storybook story
5. Export from `src/components/index.ts`

### Adding Material Symbols Icon
1. Search at https://fonts.google.com/icons (Rounded style)
2. Add to `src/components/Icon/materialIconMap.ts`
3. See [HOW-TO-ADD-MATERIAL-ICONS.md](../src/components/Icon/HOW-TO-ADD-MATERIAL-ICONS.md)

### Adding Custom Icon
1. Export SVG from Figma to `imported-from-figma/`
2. Run `npm run watch:icons`
3. Use `<Icon name="icon-name" size="m" />`

### Updating Design Tokens
1. Run `npm run mcp:extract` and follow interactive guide
2. Or manually: Extract with Figma MCP `mcp_figma_get_design_context`
3. Process tokens: `npm run mcp:tokens`
4. See [scripts/mcp/README.md](../scripts/mcp/README.md) for details
2. Transform if needed: `npm run transform-tokens`
3. Update files in `src/design-tokens/` and `src/tokens/`
4. Verify in Storybook

---

## 🏗️ Project Architecture

### Design Tokens
```
src/
├── design-tokens/      # Raw tokens from Figma
│   ├── tokens.css     # CSS variables
│   ├── tokens.ts      # TypeScript constants
│   └── semantic-colors.ts
└── tokens/            # Organized by category
    ├── colors/
    ├── spacing/
    └── radius/
```

### Components
```
src/components/
├── Button/
├── Typography/
└── Icon/
    ├── Icon.tsx
    ├── materialIconMap.ts    # Material Symbols registry
    ├── customIconData.ts     # Custom SVG icons
    └── HOW-TO-ADD-MATERIAL-ICONS.md
```

### Icon System
- **Material Symbols Rounded** (16 icons) - UI standard icons
- **Custom SVG** (6 icons) - Treez brand-specific

**Specs**: Rounded variant, weight 400, grade 0, optical size 20px, no fill

---

## 🔗 External Resources

### Design
- **Figma File**: Access via Figma MCP (embedded in config)
- **Google Fonts Icons**: https://fonts.google.com/icons

### Development
- **Storybook**: `npm run storybook` → http://localhost:6006
- **GitHub Repository**: https://github.com/sirlund/TreezDS

### References
- [Material Symbols Guide](https://m3.material.io/styles/icons/overview)
- [Figma MCP Documentation](https://github.com/modelcontextprotocol)
- [React TypeScript Best Practices](https://react-typescript-cheatsheet.netlify.app/)

---

## 📝 Documentation Maintenance

### When to Update
- ✅ New major features added
- ✅ Architecture changes
- ✅ Migration completed
- ✅ New conventions adopted
- ❌ Minor bug fixes
- ❌ Individual component tweaks

### What to Update
1. **Development Guides**: When workflow or architecture changes
2. **Migration History**: Document completed migrations (include date)
3. **AI Context**: Update optimization plan status
4. **This Index**: Add links to new documents

### Keep It DRY
- Avoid duplicating information
- Link to authoritative source
- Use this index as single entry point

---

## 🎯 For New Team Members

Start here:
1. **[README.md](../README.md)** - Setup and installation
2. **[TOKEN-SYSTEM-SUMMARY.md](./development/TOKEN-SYSTEM-SUMMARY.md)** - Understand tokens
3. **Run Storybook**: `npm run storybook` - See components
4. **[Component Docs](../src/components/)** - Learn component patterns

For AI-assisted development:
1. AI agents auto-read `.cursorrules` and `.ai/`
2. Refer to [AI Context](./ai-context/) for project status
3. Check [Migration History](./migrations/) to understand recent changes

---

## 📊 Project Status

**Last Updated**: October 17, 2025

| Aspect | Status |
|--------|--------|
| Figma MCP Integration | ✅ Active |
| Icon System | ✅ Material Symbols Rounded |
| Design Tokens | ✅ Automated extraction |
| Component Library | 🔄 Growing |
| Documentation | ✅ Organized |
| Legacy Scripts | ⚠️ Deprecated (scheduled for removal) |

**Optimization Progress**: 40% (2 of 5 phases complete)  
See [OPTIMIZATION-PLAN-STATUS.md](./ai-context/OPTIMIZATION-PLAN-STATUS.md) for details.

---

**Maintained by**: Treez Development Team  
**Questions?**: Check component READMEs or Storybook docs first
