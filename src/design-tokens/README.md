# Treez Design System - Color Tokens

This directory contains color tokens for the Treez Design System, extracted from Figma and organized into semantic categories.

## Files

### `semantic-colors.ts`
The main semantic color palette organized by purpose:
- **Brand Colors**: Primary brand greens
- **Neutral Colors**: Greys and blacks
- **Background Colors**: Various background tints
- **State Colors**: Info, success, warning, error states
- **Button Colors**: Button-specific color tokens

### `semantic-colors.css`
CSS custom properties (CSS variables) for all semantic colors. Import this file to use colors in your CSS.

### `colors.ts` (Auto-generated)
Raw color tokens extracted from Figma. These have non-semantic names based on Figma layer structure.

### `colors.css` (Auto-generated)
CSS variables for raw Figma colors.

## Usage

### In TypeScript/JavaScript

```typescript
import { colors, buttonColors } from '@/design-tokens';

// Use brand colors
const primaryColor = colors.brand.primary; // '#a9e079'

// Use button colors
const bgColor = buttonColors.primaryBg; // '#a9e079'
```

### In CSS/CSS Modules

```css
/* Import the semantic colors CSS */
@import '@/design-tokens/semantic-colors.css';

.myButton {
  background-color: var(--color-button-primary-bg);
  color: var(--color-button-primary-text);
}

.myButton:hover {
  background-color: var(--color-button-primary-hover);
}
```

### In React Components

```tsx
import { buttonColors } from '@/design-tokens';

function MyComponent() {
  return (
    <div style={{ backgroundColor: buttonColors.primaryBg }}>
      Content
    </div>
  );
}
```

## Color Categories

### Brand Colors
- `primary`: Main Treez brand green (#a9e079)
- `primaryDark`: Darker brand variant (#6baa32)
- `primaryText`: Dark green for text (#0f1709)
- `secondary`: Deep green for secondary elements (#1a4007)

### Neutral Colors
- `black`, `white`
- `grey900` through `grey500`: Grey scale

### Button Colors
Pre-defined colors for button states:
- Primary (filled) buttons: `primaryBg`, `primaryText`, `primaryHover`, `primaryActive`
- Secondary (outlined) buttons: `secondaryBorder`, `secondaryText`, `secondaryHoverBg`, `secondaryActiveBg`
- Tertiary (text) buttons: `tertiaryText`, `tertiaryHoverBg`, `tertiaryActiveBg`

### State Colors
- `info`: Blue for informational states
- `success`: Green for success states
- `warning`: Orange for warning states
- `error`: Red for error states
- `accent`: Yellow accent color

## Updating Colors

Colors are extracted from Figma using the extraction scripts in `/scripts`:
- `extract-colors-from-node.js` - Extracts colors from a specific Figma node
- `extract-color-styles.js` - Extracts color styles from Figma

After running extraction:
1. Update `semantic-colors.ts` with any new semantic mappings
2. Update `semantic-colors.css` with corresponding CSS variables
3. Document any new color categories

## Best Practices

1. **Use semantic colors**, not raw Figma colors
2. **Use CSS variables** in CSS files for consistency
3. **Import from `@/design-tokens`** for TypeScript usage
4. **Update both `.ts` and `.css`** files when adding new semantic colors
5. **Document new color categories** in this README
