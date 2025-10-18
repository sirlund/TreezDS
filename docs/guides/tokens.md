# Token System Guide

Guide to the design token architecture in TreezDS.

---

## Overview

TreezDS uses a **two-layer token system**:

1. **Primitive Tokens** (`src/figma-tokens/`) - Auto-generated from Figma
2. **Semantic Tokens** (`src/design-tokens/`) - Manually refined for components

---

## Architecture

### Layer 1: Primitive Tokens (Figma)

Located in `src/figma-tokens/`, these are raw values extracted from Figma:

```
figma-tokens/
├── colors/      # Green-green01, Primary-primaryMain, etc.
├── spacing/     # Spacing and size scales
└── radius/      # Border radius values
```

**⚠️ DO NOT edit manually** - These are auto-generated.

**✅ DO reference** when creating semantic tokens.

### Layer 2: Semantic Tokens (Design System)

Located in `src/design-tokens/`, these have contextual meaning:

```
design-tokens/
├── semantic-colors.ts/css    # success, error, primary, etc.
└── typography/               # h1-h7, body, labels, etc.
    ├── primitives.ts/css     # Base values
    └── semantic.ts/css       # Component tokens
```

**✅ USE THESE** in components.

---

## Token Categories

### Colors (63 tokens)

#### Brand Colors
```typescript
colors.brand.primary        // #a9e079 (Treez green)
colors.brand.primaryDark    // #6baa32 (Darker variant)
```

#### State Colors
```typescript
colors.state.success        // #8ccc52 (Green)
colors.state.error          // #dc2626 (Red)
colors.state.warning        // #f59e0b (Orange)
colors.state.info           // #3b82f6 (Blue)
```

#### Button Colors
```typescript
buttonColors.primaryBg      // Primary button background
buttonColors.primaryHover   // Primary button hover state
buttonColors.primaryActive  // Primary button active state
```

### Typography Tokens

#### Primitives
```typescript
typography.primitives.fontSize.md    // 16px
typography.primitives.fontWeight.semibold  // 600
```

#### Semantics (Use These!)
```typescript
typography.headings.h1      // Complete h1 styles
typography.body.medium      // Body text styles
typography.labels.small     // Label/UI text styles
```

### Spacing (17 tokens)
```
none      → 0px
3x-small  → 2px
small     → 12px
medium    → 16px
large     → 24px
3x-large  → 48px
```

### Radius (9 tokens)
```
none      → 0px
small     → 8px
medium    → 12px
large     → 16px
full      → 9999px
```

---

## Usage

### In TypeScript/React

```typescript
import { colors, buttonColors, typography } from '@/design-tokens';

function MyButton() {
  return (
    <button style={{
      backgroundColor: buttonColors.primaryBg,
      color: buttonColors.primaryText,
      ...typography.labels.medium
    }}>
      Click me
    </button>
  );
}
```

### In CSS/CSS Modules

```css
@import '@/design-tokens/semantic-colors.css';
@import '@/design-tokens/typography/semantic.css';

.myButton {
  background-color: var(--color-button-primary-bg);
  color: var(--color-button-primary-text);
  font-family: var(--typography-label-medium-font-family);
}

.myButton:hover {
  background-color: var(--color-button-primary-hover);
}
```

---

## Updating Tokens

### When Figma Changes

1. **Extract using Figma MCP**
   ```bash
   # Use mcp_figma_get_design_context tool
   ```

2. **Review changes**
   ```bash
   git diff src/figma-tokens/
   ```

3. **Update semantic tokens** if needed
   - Edit `src/design-tokens/semantic-colors.ts`
   - Add new mappings for new primitives

4. **Test in Storybook**
   ```bash
   npm run storybook
   ```

### Adding New Semantic Tokens

1. Edit `src/design-tokens/semantic-colors.ts`:
   ```typescript
   export const colors = {
     // ... existing
     myNewColor: primitives.greenColors['Green-green06']
   };
   ```

2. Update `src/design-tokens/semantic-colors.css`:
   ```css
   :root {
     /* ... existing */
     --color-my-new-color: #8ccc52;
   }
   ```

3. Document and test

---

## Best Practices

### ✅ DO

- Use semantic tokens in components
- Use CSS variables in stylesheets
- Import from `@/design-tokens`
- Check Storybook for available tokens
- Update both .ts and .css when adding new tokens

### ❌ DON'T

- Use primitive tokens directly in components
- Hardcode color values
- Edit files in `src/figma-tokens/` manually
- Create duplicate token definitions

---

## Related Documentation

- `src/figma-tokens/README.md` - Primitive tokens guide
- `src/design-tokens/README.md` - Semantic tokens detailed guide
- `src/design-tokens/typography/README.md` - Typography system
- Storybook: Design System → Tokens

---

## Token Flow

```
Figma Design
    ↓ (MCP extraction)
Primitive Tokens (src/figma-tokens/)
    ↓ (Manual mapping)
Semantic Tokens (src/design-tokens/)
    ↓ (Import)
Components (src/components/)
```

---

**Key Takeaway**: Always use semantic tokens (`design-tokens/`) in your components, never primitive tokens directly.
