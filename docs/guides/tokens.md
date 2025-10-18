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

## TypeScript vs CSS Tokens: When to Use Each

TreezDS provides tokens in **both formats** for different use cases.

### Use CSS Variables When:

✅ **Styling components** (CSS Modules, global styles)
- Best for: Button styles, layout, backgrounds
- Why: Native browser support, excellent performance
- Example: `.button { background: var(--color-button-primary-bg); }`

✅ **Dark mode / theming**
- Best for: Any theme-dependent styles
- Why: Runtime changes without re-render
- Example: `[data-theme="dark"] { --color-bg: var(--color-neutral-grey-900); }`

✅ **Static values**
- Best for: Fixed styles that don't change
- Why: Simpler, more maintainable

✅ **Performance critical**
- Best for: Large component trees
- Why: CSS variables don't trigger React re-renders

### Use TypeScript Tokens When:

✅ **Conditional logic** (status colors, variants)
```typescript
import { stateColors } from '@/design-tokens';

function StatusBadge({ status }: { status: 'success' | 'error' | 'warning' }) {
  const color = stateColors[status]; // Dynamic based on prop
  return <span style={{ color }}>{status}</span>;
}
```

✅ **Dynamic calculations**
```typescript
import { spacing } from '@/primitive-tokens';

function Card({ compact }: { compact?: boolean }) {
  const padding = compact
    ? `${spacing.xs} ${spacing.s}`
    : `${spacing.m} ${spacing.l}`;

  return <div style={{ padding }}>...</div>;
}
```

✅ **Storybook controls**
```typescript
import { greenColors } from '@/primitive-tokens/colors';

export const meta = {
  argTypes: {
    color: {
      control: 'select',
      options: Object.keys(greenColors), // Auto-generated!
    },
  },
};
```

✅ **Type safety needed**
```typescript
type AllowedColor = keyof typeof brandColors; // TypeScript validates!

function SafeCard({ color }: { color: AllowedColor }) {
  return <div style={{ backgroundColor: brandColors[color] }}>...</div>;
}
```

✅ **Complex inline styles** (like Typography component)
```typescript
import { typography } from '@/design-tokens/typography';

const style = {
  fontFamily: typography[variant].fontFamily,
  fontSize: typography[variant].fontSize,
  // ... dynamic based on variant prop
};
```

### Comparison Table

| Feature | CSS Variables | TypeScript Tokens |
|---------|---------------|-------------------|
| **Dark Mode** | ✅ Perfect (runtime change) | ❌ Requires re-render |
| **Performance** | ✅ Excellent | ⚠️ Good (can be slower) |
| **Type Safety** | ❌ No | ✅ Yes |
| **Conditional Logic** | ❌ Limited | ✅ Perfect |
| **Storybook Controls** | ⚠️ Manual setup | ✅ Automatic |
| **Bundle Size** | ✅ Minimal | ⚠️ Grows with tokens |
| **Browser Support** | ✅ Universal | ✅ Universal |

### Real-World Example: Button Component

**❌ BAD (hardcoded values):**
```css
.button {
  background-color: #a9e079;  /* What is this? Where did it come from? */
}
```

**✅ GOOD (CSS variables for styling):**
```css
@import '@/design-tokens/semantic-colors.css';

.button {
  background-color: var(--color-button-primary-bg);
}

.button:hover {
  background-color: var(--color-button-primary-hover);
}
```

**✅ ALSO GOOD (TypeScript for conditional logic):**
```typescript
import { buttonColors } from '@/design-tokens';

function DynamicButton({ variant }: { variant: 'primary' | 'secondary' }) {
  const bg = variant === 'primary'
    ? buttonColors.primaryBg
    : buttonColors.secondaryBg;

  return <button style={{ backgroundColor: bg }}>...</button>;
}
```

### Recommendation

**Use this strategy:**
- **90% CSS variables** → For component styles (Button.module.css, Card.module.css, etc.)
- **10% TypeScript tokens** → For conditional logic, calculations, and type safety

**Example structure:**
```typescript
// Button.tsx - TypeScript for conditional logic
import { buttonColors } from '@/design-tokens';

function Button({ variant, loading }) {
  // Use TS for conditional/dynamic values
  const loadingColor = loading ? buttonColors.disabled : buttonColors.primaryText;

  return <button className={styles.button}>...</button>;
}
```

```css
/* Button.module.css - CSS variables for styling */
@import '@/design-tokens/semantic-colors.css';

.button {
  background: var(--color-button-primary-bg);
  color: var(--color-button-primary-text);
}

.button:hover {
  background: var(--color-button-primary-hover);
}
```

---

**Key Takeaway**: Always use semantic tokens (`design-tokens/`) in your components, never primitive tokens directly. Choose CSS variables for styling, TypeScript for logic.
