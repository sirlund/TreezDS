# Figma Integration Workflows

Two recommended approaches for extracting design tokens from Figma.

---

## Recommended: Plugin Export (Current Workflow)

The simplest and most reliable method - uses Figma's native export functionality.

### How it Works

1. **Export from Figma**
   - Use a Figma plugin (e.g., "Design Tokens", "Tokens Studio")
   - Export tokens by category (Colors, Size&Spacing, Shapes)
   - Download as JSON files

2. **Place in Project**
   ```bash
   imported-from-figma/
   ├── Colors.json
   ├── Size&Spacing.json
   └── Shapes.json
   ```

3. **Process Manually**
   - Review exported JSON structure
   - Map to semantic tokens in `src/design-tokens/`
   - Update both `.ts` and `.css` files

### Advantages
- ✅ No API tokens needed
- ✅ Works with any Figma plan
- ✅ Full control over structure
- ✅ No MCP server required
- ✅ Reliable exports

### Current Status
This is the **active workflow** used in TreezDS. See [CHANGELOG.md](../../docs/CHANGELOG.md) for iteration history.

---

## Alternative: MCP Tools (For Advanced Use)

Use Model Context Protocol tools for real-time extraction during development.

### Available MCP Tools

#### figma-desktop (Component Extraction)
Extract code and metadata from selected Figma nodes.

**Tools:**
- `mcp__figma-desktop__get_code` - Generate React/TS code from design
- `mcp__figma-desktop__get_screenshot` - Capture visual reference
- `mcp__figma-desktop__get_metadata` - Get structure overview
- `mcp__figma-desktop__get_variable_defs` - Extract variable definitions

**Usage:**
```typescript
// In claude-code, select a Figma node and call:
mcp__figma-desktop__get_code({
  clientLanguages: "typescript,css",
  clientFrameworks: "react"
})
```

**Best for:**
- Quick component prototyping
- Visual reference screenshots
- Understanding Figma structure

#### figma-console-mcp (Variables & Styles)
Extract design tokens and variables from Figma files.

**Tools:**
- `mcp__figma-console-mcp__figma_get_variables` - Extract all variables
- `mcp__figma-console-mcp__figma_get_styles` - Extract color/text styles
- `mcp__figma-console-mcp__figma_get_file_data` - Get full file structure

**Note:** Requires `FIGMA_ACCESS_TOKEN` environment variable.

**Best for:**
- Automated token extraction
- Large-scale design system syncs
- CI/CD integration

### MCP Setup

1. **Verify MCP Status**
   ```typescript
   mcp__figma-console-mcp__figma_get_status()
   ```

2. **Set API Token** (if using figma-console-mcp)
   ```bash
   export FIGMA_ACCESS_TOKEN="your_token_here"
   ```
   Get token at: https://www.figma.com/developers/api#access-tokens

3. **Extract Variables**
   ```typescript
   mcp__figma-console-mcp__figma_get_variables({
     fileUrl: "https://www.figma.com/design/YOUR_FILE_KEY",
     enrich: true,
     export_formats: ["css", "typescript"]
   })
   ```

### When to Use MCP Tools

✅ **Use MCP when:**
- Prototyping new components quickly
- Need visual screenshots for docs
- Exploring Figma file structure
- Automating token extraction in CI

❌ **Stick with Plugin Export when:**
- Doing routine token updates
- You don't have API token access
- You want full control over token structure
- Plugin export already works well (current case)

---

## Comparison

| Aspect | Plugin Export | MCP Tools |
|--------|--------------|-----------|
| **Setup** | Download plugin | Configure MCP servers + API token |
| **Reliability** | ✅ Always works | ⚠️ Requires token & server running |
| **Speed** | Manual (5 min) | Fast (30 sec) |
| **Control** | ✅ Full | ⚠️ Depends on tool |
| **CI/CD** | ❌ Manual | ✅ Automatable |
| **Learning Curve** | None | Medium |

---

## Token Processing Workflow

Regardless of extraction method, tokens follow this flow:

```
Figma Design
    ↓ (Plugin export OR MCP tools)
imported-from-figma/*.json
    ↓ (Manual review & mapping)
src/figma-tokens/ (primitives)
    ↓ (Semantic layer creation)
src/design-tokens/ (semantics)
    ↓ (Import in components)
src/components/*
```

---

## Related Documentation

- [Token System Guide](../../docs/guides/tokens.md) - Full token architecture
- [CHANGELOG](../../docs/CHANGELOG.md) - Token system evolution
- [Design Tokens README](../../src/design-tokens/README.md) - Semantic tokens
- [Figma Tokens README](../../src/figma-tokens/README.md) - Primitive tokens

---

## Legacy Scripts (Removed)

Previous versions of this project included `npm run mcp:*` scripts that were incomplete templates. These have been removed in favor of:

1. **Direct MCP tool usage** (when needed)
2. **Plugin export workflow** (current standard)

See [CHANGELOG](../../docs/CHANGELOG.md) for migration details.

---

**Last Updated**: 2025-10-18
