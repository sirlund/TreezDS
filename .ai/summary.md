# AI Agent Documentation Summary

This directory contains instructions and context for AI coding assistants working on the TreezDS project.

## Files Created

### For All AI Agents
- **`.cursorrules`** (root) - Comprehensive project instructions
  - Detailed overview of tech stack, structure, and conventions
  - Compatible with Cursor, Windsurf, and other AI editors
  - ~250 lines of detailed guidance

### For Claude Code Specifically  
- **`.claude/project-instructions.md`** - Claude-optimized instructions
  - Conversational, direct style for Claude
  - Quick reference format
  - Common Q&A section
  - ~200 lines

### For General AI Context
- **`.ai/instructions.md`** - Quick reference guide
  - Condensed format for fast loading
  - Key commands and workflows
  - Decision tree for common tasks
  - ~150 lines

- **`.ai/figma-mcp-migration.md`** - Figma integration status
  - Details on MCP vs legacy API
  - Migration timeline and status
  - Clear deprecation warnings
  - ~100 lines

## What These Files Do

### 1. Prevent Deprecated Suggestions
All files explicitly mark these as **deprecated**:
- Old Figma API scripts (`extract-figma-data.js`, etc.)
- NPM scripts using old API (`tokens:extract`, etc.)
- Environment variable `FIGMA_ACCESS_TOKEN`

### 2. Promote Modern Workflow
All files encourage:
- Using Figma MCP tools for design extraction
- Component development in Storybook
- TypeScript-first approach
- CSS Modules with design tokens

### 3. Provide Context
- Project structure and organization
- Code conventions and patterns
- Common tasks and their solutions
- Where to find more information

## How AI Agents Use These

### Cursor IDE
Automatically reads `.cursorrules` at the root level.

### Claude Code (VS Code Extension)
Reads `.claude/project-instructions.md` and can reference other files.

### GitHub Copilot / Other Agents
Can be configured to read `.ai/instructions.md` or `.cursorrules`.

### Windsurf
Reads `.windsurfrules` or `.cursorrules` as fallback.

## File Locations

```
TreezDS/
├── .cursorrules                           # Primary: All AI agents
├── .claude/
│   └── project-instructions.md            # Claude Code specific
├── .ai/
│   ├── instructions.md                    # General quick reference
│   ├── figma-mcp-migration.md            # Figma MCP details
│   └── summary.md                         # This file
└── README.md                              # Updated with AI references
```

## Maintenance

### When to Update
- ✅ When adding new major features
- ✅ When deprecating old scripts/methods
- ✅ When changing project structure
- ✅ When adding new conventions
- ❌ For minor bug fixes
- ❌ For individual component changes

### What to Update
1. Update `.cursorrules` for major changes
2. Sync changes to `.claude/project-instructions.md`
3. Update `.ai/instructions.md` quick reference
4. Keep `.ai/figma-mcp-migration.md` current on Figma workflow

### Consistency Check
All files should agree on:
- Which scripts are deprecated
- Which tools to use (MCP vs API)
- Component structure patterns
- Code conventions

## Benefits

### For Developers
- AI assistants give better, more contextual suggestions
- Less time explaining project structure
- Faster onboarding for new contributors
- Consistent code patterns

### For AI Agents
- Clear project context
- Known deprecated patterns to avoid
- Specific guidance for common tasks
- Links to relevant documentation

## Quick Reference

### Most Important Points for AI
1. 🚨 **Use Figma MCP**, not old API scripts
2. 🎨 **Develop in Storybook** (`npm run storybook`)
3. 📁 **Follow component structure** pattern
4. 🎯 **Use design tokens** from `/design-tokens` and `/tokens`
5. ✅ **TypeScript strict mode** - explicit types required

---

**Created**: October 17, 2025  
**Purpose**: Guide AI assistants working on TreezDS  
**Maintenance**: Update when major project changes occur
