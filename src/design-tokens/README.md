# Treez Design System - Design Tokens

This directory contains design tokens for the Treez Design System, extracted from Figma and organized for easy consumption.

## Structure

```
src/design-tokens/
├── index.ts                    # Main export file
├── README.md                   # This file
├── semantic-colors.ts          # Semantic color palette
├── semantic-colors.css         # CSS variables for colors
└── typography/                 # Typography token system
    ├── index.ts               # Typography exports
    ├── README.md              # Typography documentation
    ├── primitives.ts          # Base values (font sizes, weights, etc.)
    ├── primitives.css         # CSS primitives
    ├── semantic.ts            # Component tokens (headings, body, etc.)
    └── semantic.css           # CSS semantic tokens
```

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

### `typography/`
Professional typography token system with two layers:
- **Primitives**: Base values (font sizes, weights, line heights, etc.) - don't use directly
- **Semantics**: Component-level tokens (headings, body, labels, links, caps) - use these!

See [`typography/README.md`](./typography/README.md) for detailed documentation.

## Usage

### In TypeScript/JavaScript

```typescript
import { colors, buttonColors, typography } from '@/design-tokens';

// Use brand colors
const primaryColor = colors.brand.primary; // '#a9e079'

// Use button colors
const bgColor = buttonColors.primaryBg; // '#a9e079'

// Use typography tokens (modern nested structure)
const h1Styles = typography.headings.h1;
const bodyStyles = typography.body.large;
const labelStyles = typography.labels.small;

// Or use legacy flat structure
import { typographyLegacy } from '@/design-tokens';
const h1Styles = typographyLegacy['headings-h1'];
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

## Updating Tokens

Design tokens are extracted from Figma using the MCP workflow scripts in `/scripts/mcp`:
- `npm run mcp:extract` - Interactive design extraction
- `npm run mcp:colors` - Extract color tokens
- `npm run mcp:tokens` - Generate all tokens

See `/scripts/mcp/README.md` for detailed workflow instructions.

After running extraction:
1. Update `semantic-colors.ts` with any new semantic mappings
2. Update `semantic-colors.css` with corresponding CSS variables
3. Typography tokens are auto-generated in `typography/tokens.ts` and `typography/tokens.css`
4. Document any new color categories or typography styles

## Best Practices

1. **Use semantic colors**, not raw Figma colors
2. **Use CSS variables** in CSS files for consistency
3. **Import from `@/design-tokens`** for TypeScript usage
4. **Update both `.ts` and `.css`** files when adding new semantic colors
5. **Document new color categories** in this README
