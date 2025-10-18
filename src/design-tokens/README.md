# Design Tokens (Semantic)

✏️ **MANUALLY REFINED TOKENS**
✅ **USE THESE IN COMPONENTS**

---

## 📋 Overview

This folder contains **semantic design tokens** that have been manually refined. These tokens have contextual meaning and should be used in components.

While **primitive tokens** (`src/figma-tokens/`) have technical names like `green05`, these tokens have semantic names like `success`, `primary`, `textPrimary`.

## 📁 Structure

```
design-tokens/
├── index.ts .................... Central export
├── README.md ................... This file
├── semantic-colors.ts .......... Semantic color palette
├── semantic-colors.css ......... CSS color variables
└── typography/ ................. Typography system
    ├── index.ts ................ Typography exports
    ├── README.md ............... Typography documentation
    ├── primitives.ts ........... Base values (font sizes, weights, etc.)
    ├── primitives.css .......... CSS primitives
    ├── semantic.ts ............. Component tokens (headings, body, etc.)
    └── semantic.css ............ CSS semantic tokens
```

## 🎨 Contents

### `semantic-colors.ts/css`

Color palette organized by purpose:

- **Brand Colors**: Primary brand colors (Treez green palette)
- **Neutral Colors**: Greys and blacks for text/backgrounds
- **Background Colors**: Tinted backgrounds for cards and sections
- **State Colors**: Info, success, warning, error states
- **Button Colors**: Pre-defined button state colors

### `typography/`

Professional typography system with two layers:

- **Primitives**: Base values (don't use directly)
- **Semantics**: Component tokens (h1-h7, body, labels, links) - **use these!**

See [`typography/README.md`](./typography/README.md) for detailed documentation.

## 🔗 Relationship with Figma Tokens

These tokens **refine** Figma primitives with semantic meaning:

```
figma-tokens/              design-tokens/
(Raw Values)          →   (Contextual Meaning)
────────────────          ────────────────────
green06               →    colors.success
primary-main          →    colors.brand.primary
bw-primary-black      →    colors.neutral.grey900
```

## ✅ Recommended Usage

### In TypeScript/JavaScript

```typescript
import { brandColors, neutralColors, stateColors } from '@/design-tokens';

// Use brand colors
const primaryColor = brandColors.primary; // '#a9e079'

// Use state colors
const successColor = stateColors.success; // '#309f56'

// Use neutral colors
const textColor = neutralColors.grey900; // '#1a1a1a'
```

### In CSS/CSS Modules

```css
/* Import semantic colors CSS */
@import '@/design-tokens/semantic-colors.css';
@import '@/design-tokens/typography/semantic.css';

.myButton {
  background-color: var(--color-brand-primary);
  color: var(--color-brand-primary-text);
}

.myButton:hover {
  background-color: var(--color-brand-primary-dark);
}

.heading {
  font-family: var(--typography-h1-font-family);
  font-size: var(--typography-h1-font-size);
  font-weight: var(--typography-h1-font-weight);
  line-height: var(--typography-h1-line-height);
}
```

### In React Components

```tsx
import { brandColors, neutralColors, stateColors } from '@/design-tokens';

function MyComponent() {
  return (
    <div style={{
      backgroundColor: brandColors.primary,
      color: neutralColors.grey900
    }}>
      My Component
    </div>
  );
}
```

## 🎯 Best Practices

1. ✅ **Always** use these semantic tokens in components
2. ❌ **DON'T** use primitive tokens from `figma-tokens/` directly
3. ✅ **Prefer** CSS variables in CSS files for theming support
4. ✅ **Use** TypeScript imports when you need dynamic values
5. ✅ **Check** Storybook to see all available tokens

## 🔄 Updating Tokens

### When to Update

- Brand color changes
- New states or variants needed
- Typography adjustments
- New semantic tokens required

### How to Update

1. Edit corresponding files in `src/design-tokens/`
2. If you need new primitives, update from Figma first
3. Test in Storybook
4. Commit changes

## 📚 Color Categories

### Brand Colors

- `primary`: Main Treez brand green (#a9e079)
- `primaryDark`: Darker brand variant (#6baa32)
- `primaryText`: Dark green for text (#0f1709)
- `secondary`: Deep green for secondary elements (#1a4007)

### Neutral Colors

- `black`: Pure black (#000000)
- `grey900` through `grey500`: Grey scale for text and backgrounds
- `white`: Pure white (#ffffff)

### Background Colors

Tinted backgrounds organized by color:

- `beige`, `peach`, `red`, `blue`, `purple`, `yellow`

### State Colors

- `info`: Blue for informational states (#437dcf)
- `success`: Green for success states (#309f56)
- `warning`: Orange for warning states (#e26815)
- `error`: Red for error states (#da5050)
- `accent`: Yellow accent color (#fde28b)

## 📖 Typography System

See [`typography/README.md`](./typography/README.md) for complete typography documentation.

**Quick Reference:**
- **Headings** (H1-H7): Roboto font, 45px - 14px
- **Body Text**: Circular Std, large/medium/small variants
- **Labels**: For forms and UI, with bold variants
- **Links**: Styled text links

## 🎨 CSS Variables

All semantic tokens are available as CSS custom properties:

### Color Variables

```css
/* Brand */
--color-brand-primary: #a9e079;
--color-brand-primary-dark: #6baa32;
--color-brand-primary-text: #0f1709;

/* State Colors */
--color-state-success: #309f56;
--color-state-error: #da5050;
--color-state-warning: #e26815;
--color-state-info: #437dcf;

/* Neutral */
--color-neutral-grey-900: #1a1a1a;
--color-neutral-white: #ffffff;
```

### Typography Variables

```css
/* Heading 1 */
--typography-h1-font-family: 'Roboto';
--typography-h1-font-size: 45px;
--typography-h1-font-weight: 400;
--typography-h1-line-height: 52px;

/* Body Medium */
--typography-body-medium-font-family: 'Circular Std';
--typography-body-medium-font-size: 14px;
--typography-body-medium-font-weight: 400;
```

## 🔍 Finding Tokens

### In Storybook

1. Navigate to **Design System → Tokens**
2. Browse color categories
3. View typography examples
4. Copy token names for use

### In Code

```typescript
// Import everything
import * as tokens from '@/design-tokens';

// Or import specific categories
import { brandColors, stateColors, neutralColors } from '@/design-tokens';
```

## 🛠️ Maintenance

### Adding New Semantic Colors

1. **Edit `semantic-colors.ts`:**
   ```typescript
   export const myNewColors = {
     primary: greenColors.green06,
     secondary: bwColors['primary-black'],
   } as const;
   ```

2. **Update `semantic-colors.css`:**
   ```css
   :root {
     --color-my-new-primary: #8ccc52;
     --color-my-new-secondary: #1a1a1a;
   }
   ```

3. **Export from `index.ts`** if needed

4. **Document** in this README

5. **Test** in Storybook

### Updating Typography

See [`typography/README.md`](./typography/README.md) for typography-specific maintenance.

## 📚 Related Documentation

- [`src/figma-tokens/`](../figma-tokens/README.md) - Primitive tokens from Figma
- [`typography/README.md`](./typography/README.md) - Complete typography system
- [`src/components/Button/README.md`](../components/Button/README.md) - Button component
- [`src/components/Typography/README.md`](../components/Typography/README.md) - Typography component
- Storybook: Design System → Typography / Tokens

## 🎯 Key Takeaways

1. **Semantic tokens** = Contextual meaning for components
2. **Use these** = Not primitive tokens
3. **CSS variables** = Available for all tokens
4. **Two-layer system** = Primitives → Semantics
5. **Storybook** = Visual reference for all tokens

---

**Remember:** Always use semantic tokens in components. Primitive tokens from `figma-tokens/` are building blocks only.
