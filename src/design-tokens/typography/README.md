# Typography Tokens

Professional typography token system with primitive and semantic layers.

## Architecture

### 🎯 Primitives (`primitives.ts` / `primitives.css`)
Base-level tokens that define raw values. **Do not use these directly** in components.

- **Font Families**: Primary (Roboto), Secondary (Circular Std)
- **Font Sizes**: 10px - 45px scale
- **Font Weights**: Regular (400), Medium (450), Semibold (500), Bold (600)
- **Line Heights**: 12px - 52px scale
- **Letter Spacing**: Normal, tight (0.15px), wide (0.18px)
- **Shadows**: xs, sm, md, lg, xl

### 🎨 Semantics (`semantic.ts` / `semantic.css`)
Component-level tokens that reference primitives. **Use these in your components**.

- **Headings**: h1 - h7
- **Body**: large, medium, small
- **Labels**: large, medium, small, xSmall (with bold variants)
- **Links**: large, medium, small, xSmall
- **Caps**: large, small (for uppercase text, with bold variants)

## Usage

### TypeScript/React (Recommended)

```tsx
import { typography } from '@/design-tokens';

// Modern nested structure
function MyComponent() {
  return (
    <div>
      <h1 style={typography.headings.h1}>Heading</h1>
      <p style={typography.body.large}>Body text</p>
      <span style={typography.labels.small}>Label</span>
    </div>
  );
}

// Or with Typography component
import { Typography } from '@/components';

function MyComponent() {
  return (
    <div>
      <Typography variant="headings-h1">Heading</Typography>
      <Typography variant="body-large">Body text</Typography>
      <Typography variant="label-small">Label</Typography>
    </div>
  );
}
```

### CSS Variables

```css
/* Import semantic tokens */
@import '@/design-tokens/typography/semantic.css';

.my-heading {
  font-family: var(--typography-h1-font-family);
  font-weight: var(--typography-h1-font-weight);
  font-size: var(--typography-h1-font-size);
  line-height: var(--typography-h1-line-height);
}

.my-label {
  font-family: var(--typography-label-small-font-family);
  font-weight: var(--typography-label-small-font-weight);
  font-size: var(--typography-label-small-font-size);
  line-height: var(--typography-label-small-line-height);
}
```

### Advanced: Using Primitives

Only use primitives when building custom semantic tokens:

```tsx
import { fontFamilies, fontSizes, fontWeights } from '@/design-tokens';

const customToken = {
  fontFamily: fontFamilies.primary,
  fontWeight: fontWeights.semibold,
  fontSize: fontSizes['14'],
  // ...
};
```

## Token Categories

### Headings
```
h1: 45px / 52px  - Page titles
h2: 36px / 44px  - Section titles
h3: 32px / 40px  - Subsection titles
h4: 28px / 36px  - Card headers
h5: 23px / 32px  - Smaller headers
h6: 17px / 24px  - Tertiary headers
h7: 14px / 20px  - Smallest headers (semibold)
```

### Body Text
```
large:  15px / 24px - Main content
medium: 14px / 20px - Default body text
small:  12px / 16px - Secondary content
```

### Labels (Circular Std)
```
large:  15px / 24px - Large UI labels
medium: 14px / 20px - Standard UI labels
small:  12px / 16px - Small UI labels
xSmall: 11px / 16px - Tiny UI labels

Each has a "Bold" variant with semibold weight
```

### Links (Roboto Semibold)
```
large:  15px / 24px
medium: 14px / 20px
small:  12px / 16px
xSmall: 11px / 16px
```

### Caps (Uppercase)
```
large: 12px / 16px (0.18px spacing) - Badges, tags
small: 10px / 12px (0.15px spacing) - Tiny badges

Each has a "Bold" variant
```

## Migration from Legacy

Old flat structure still works via `typographyLegacy`:

```tsx
import { typographyLegacy } from '@/design-tokens';

// Old way (still supported)
const style = typographyLegacy['headings-h1'];
const style2 = typographyLegacy['label-large-strong'];

// New way (recommended)
import { typography } from '@/design-tokens';
const style = typography.headings.h1;
const style2 = typography.labels.largeBold;
```

## Best Practices

✅ **DO**
- Use semantic tokens in components
- Reference primitives when building new semantic tokens
- Use the nested structure for better IDE autocomplete
- Import from `@/design-tokens` for convenience

❌ **DON'T**
- Don't use primitive tokens directly in components
- Don't hardcode font values
- Don't mix primitive and semantic tokens randomly
- Don't use invalid CSS variable names (no spaces!)

## Files

- `primitives.ts` / `primitives.css` - Base values
- `semantic.ts` / `semantic.css` - Component tokens
- `index.ts` - Central export
