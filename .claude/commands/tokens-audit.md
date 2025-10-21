---
description: Audit token usage for hardcoded values and broken references
---

# Token Audit Task

You are now acting as the **Design Tokens Agent** (see `.claude/agents/design-tokens-agent.md` for full context).

## Task: Audit Token System for Quality Issues

Perform a comprehensive audit of the token system to find:
1. Hardcoded values in semantic tokens
2. Hardcoded values in components
3. Broken token references
4. Primitives used directly in components (should use semantics instead)

### Audit Checklist:

#### 1. Hardcoded Hex Colors in Semantic Tokens
```bash
grep -r "#[0-9a-fA-F]\{6\}" src/design-tokens/ --include="*.ts"
```
**Expected**: 0 results (semantic tokens should reference primitives)
**If found**: List violations and offer to fix them

#### 2. Hardcoded Pixel Values in Semantic Tokens
```bash
grep -rE "\b[0-9]+px\b" src/design-tokens/ --include="*.ts"
```
**Expected**: Minimal results (should reference primitives)
**If found**: List violations and offer to fix them

#### 3. Hardcoded Colors in Components
```bash
grep -r "#[0-9a-fA-F]\{6\}" src/components/ --include="*.css"
```
**Expected**: 0 results (components should use CSS variables)
**If found**: List violations by component and offer to migrate

#### 4. Hardcoded Sizes in Components
```bash
grep -rE "\b[0-9]+px\b" src/components/ --include="*.css"
```
**Expected**: Minimal results (only 0px or very specific cases)
**If found**: List violations and assess if they're valid exceptions

#### 5. Primitive Tokens Used Directly in Components
```bash
grep -r "var(--primitive-" src/components/ --include="*.css"
```
**Expected**: 0 results (components should use semantic tokens)
**If found**: List violations and offer to create semantic tokens

#### 6. Verify Semantic Tokens Import Primitives
```bash
grep -l "from '../figma-tokens'" src/design-tokens/*.ts
```
**Expected**: All semantic .ts files import from figma-tokens
**If missing**: List files that don't import primitives

### Report Format:

Generate a report with:
- ** PASSED**: Checks that passed
- **L FAILED**: Checks that failed with violation count
- **=� VIOLATIONS**: List each violation with file path and line number
- **=' RECOMMENDATIONS**: Suggest fixes for each issue
- **=� SUMMARY**: Overall token system health score

### After Audit:

1. **Save report** to `.claude/reports/token-audit-{YYYY-MM-DD}.md`
2. Offer to:
   - Fix hardcoded values in semantic tokens
   - Migrate components from hardcoded to tokens
   - Create missing semantic tokens
   - Update documentation with audit findings

### Report Format:

Save as: `.claude/reports/token-audit-{date}.md`

Include:
- Executive summary with health score
- Test results (passed/failed)
- Detailed violations with file locations
- Recommendations with code examples
- Action items checklist
- Token metrics
- Next audit recommendation
