# Project Context for AI Agents

## Figma MCP Integration Status

### ✅ ENABLED: Figma MCP
This project uses **Figma Model Context Protocol (MCP)** for design extraction.

**Available MCP Tools:**
- `mcp_figma_get_design_context(nodeId, fileKey)`
- `mcp_figma_get_metadata(nodeId, fileKey)`  
- `mcp_figma_get_screenshot(nodeId, fileKey)`

**Configuration**: Active in `.claude/settings.local.json`

### ❌ DEPRECATED: Legacy Figma API Scripts
The following scripts in `/scripts` are **obsolete** and should NOT be used:

| Script | Status | Replacement |
|--------|--------|-------------|
| `extract-figma-data.js` | ❌ Deprecated | Use `mcp_figma_get_design_context` |
| `extract-color-styles.js` | ❌ Deprecated | Use `mcp_figma_get_design_context` |
| `extract-colors-from-node.js` | ❌ Deprecated | Use `mcp_figma_get_design_context` |
| `find-button-component.js` | ❌ Deprecated | Use `mcp_figma_get_metadata` |
| `extract-button-component.js` | ❌ Deprecated | Use `mcp_figma_get_design_context` |
| `generate-button-from-figma.js` | ❌ Deprecated | Extract with MCP + transform manually |
| `generate-tokens.js` | ❌ Deprecated | Extract with MCP + use `transform-figma-tokens.js` |

**NPM Scripts to Avoid:**
- ❌ `npm run tokens:extract` (uses deprecated script)
- ❌ `npm run tokens:generate` (uses deprecated script)
- ❌ `npm run tokens:update` (uses deprecated scripts)

### ✅ Scripts Still Valid
- `scripts/transform-figma-tokens.js` - Transforms JSON to TypeScript/CSS
- `scripts/watch-icons.js` - Auto-registers SVG icons
- `npm run watch:icons` - Start icon watcher

## Migration Status

**Current Phase**: Legacy scripts present but deprecated  
**Next Steps**: Remove deprecated scripts after full MCP migration  
**Timeline**: Q4 2025 cleanup planned

## For AI Agents

When a user asks to:
- ❌ "Run the Figma extraction script" → Suggest MCP tools instead
- ❌ "Update tokens with npm run tokens:extract" → Show MCP alternative
- ❌ "I need FIGMA_ACCESS_TOKEN" → Explain MCP doesn't need it
- ✅ "Extract this Figma component" → Use MCP tools
- ✅ "Get design tokens" → Use MCP + transform script

## Quick MCP Usage Example

```typescript
// Extract component design
const design = await mcp_figma_get_design_context({
  nodeId: "123:456",
  fileKey: "yourFileKey",
  clientLanguages: "typescript,css",
  clientFrameworks: "react"
});

// Get component metadata
const metadata = await mcp_figma_get_metadata({
  nodeId: "123:456",
  fileKey: "yourFileKey"
});

// Generate screenshot
const screenshot = await mcp_figma_get_screenshot({
  nodeId: "123:456",
  fileKey: "yourFileKey"
});
```

## Removal Plan

### Phase 1 (Current)
- ✅ Document deprecation
- ✅ Provide MCP alternatives
- ✅ Update AI instructions

### Phase 2 (Pending)
- Create new MCP-based workflow scripts
- Update package.json scripts
- Remove FIGMA_ACCESS_TOKEN references

### Phase 3 (Future)
- Delete deprecated scripts
- Clean up dependencies
- Update all documentation

---

**Last Updated**: October 17, 2025  
**MCP Status**: Active and preferred method  
**Legacy Status**: Deprecated, do not use
