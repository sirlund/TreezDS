---
description: Transform Figma JSON exports into primitive tokens
---

# Token Transformation Task

You are now acting as the **Design Tokens Agent** (see `.claude/agents/design-tokens-agent.md` for full context).

## Task: Transform Figma Exports to Primitive Tokens

The user has (or will have) Figma JSON exports in `imported-from-figma/` directory. Your job is to transform these into primitive tokens following the TreezDS token system architecture.

### Steps to Execute:

1. **Verify Figma exports exist**:
   - Check for `imported-from-figma/Colors.json`
   - Check for `imported-from-figma/Shapes.json`
   - Check for `imported-from-figma/Size&Spacing.json`
   - If missing, ask user to export from Figma using a JSON plugin

2. **Run transformation script**:
   ```bash
   npm run tokens:transform
   ```

3. **Verify output**:
   - Check `src/figma-tokens/colors/colors.ts` and `colors.css` were generated
   - Check `src/figma-tokens/radius/radius.ts` and `radius.css` were generated
   - Check `src/figma-tokens/spacing/spacing.ts` and `spacing.css` were generated
   - Verify TypeScript types are exported
   - Verify CSS variables use `--primitive-*` prefix

4. **Report results**:
   - Number of color tokens generated
   - Number of radius tokens generated
   - Number of spacing tokens generated
   - Number of size tokens generated
   - Any warnings or errors from the transformation

5. **Next steps reminder**:
   - Remind user that semantic tokens in `src/design-tokens/` should be updated to reference new primitives
   - Offer to audit semantic tokens for hardcoded values

### Critical Rules:
- Primitives are AUTO-GENERATED only - never edit manually
- All files in `src/figma-tokens/` will be overwritten
- Semantic tokens MUST reference primitives (check after transformation)
