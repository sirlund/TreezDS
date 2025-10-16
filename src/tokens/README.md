# Treez Design System - Design Tokens

Complete design token system extracted from Figma and transformed into TypeScript and CSS.

## 📁 Structure

```
src/tokens/
├── colors/
│   ├── colors.ts      # TypeScript color constants
│   ├── colors.css     # CSS custom properties
│   └── colors.json    # Raw token data
├── spacing/
│   ├── spacing.ts     # TypeScript spacing constants
│   ├── spacing.css    # CSS custom properties
│   └── spacing.json   # Raw token data
├── radius/
│   ├── radius.ts      # TypeScript radius constants
│   ├── radius.css     # CSS custom properties
│   └── radius.json    # Raw token data
└── index.ts           # Central export file
```

## 🎨 Token Categories

### Colors (63 tokens)
- **Brand Colors**: Main Treez brand greens
- **Primary Colors**: primaryMain, primaryLight, primaryDark
- **System Colors**: Success, Error, Warning, Info (with Main, Light, Dark variants)
- **Text Colors**: Primary, secondary, tertiary, disabled
- **Greyscale**: 10-step grey scale
- **B&W**: Primary black and white
- **Green Scale**: 10-step green palette
- **Secondary Colors**: Brown, Orange, Peach, Blue, Purple, Yellow (with 00, 01, 02 variants)

### Spacing (17 tokens)
- **Spacing Scale**: none, 3x-small → 3x-large (0px to 48px)
- **Size Scale (Beta)**: x-small → 3x-large (12px to 64px)

### Radius (9 tokens)
- **Border Radius**: none, 2x-small → 2x-large, full (0px to 9999px)

## 📖 Usage

### TypeScript/React

```typescript
import { primaryColors, spacing, radius } from '@/tokens';

function MyComponent() {
  return (
    <div style={{
      backgroundColor: primaryColors['Primary-primaryMain'],
      padding: spacing['space-medium'],
      borderRadius: radius['radius-medium']
    }}>
      Content
    </div>
  );
}
```

### CSS

```css
/* Import token CSS files */
@import '@/tokens/colors/colors.css';
@import '@/tokens/spacing/spacing.css';
@import '@/tokens/radius/radius.css';

.my-component {
  background-color: var(--color-primary-primarymain);
  padding: var(--spacing-space-medium);
  border-radius: var(--radius-radius-medium);
}
```

### CSS Modules

```css
@import '@/tokens/colors/colors.css';

.button {
  background-color: var(--color-primary-primarymain);
  color: var(--color-text-primaryblacktext);
}

.button:hover {
  background-color: var(--color-primary-primarydark);
}
```

## 🔄 Updating Tokens

### Step 1: Export from Figma
1. In Figma, select **Plugins → Export Variables**
2. Export to JSON format
3. Save files to `/imported-from-figma/` folder:
   - `Colors.json`
   - `Shapes.json`
   - `Size&Spacing.json`

### Step 2: Transform Tokens
```bash
npm run tokens:transform
```

This will regenerate all token files in `src/tokens/`.

### Step 3: Review Changes
Check the generated files and verify in Storybook:
- **Design System → Tokens → Overview**
- **Design System → Tokens → Colors**
- **Design System → Tokens → Spacing**
- **Design System → Tokens → Radius**

## 📋 Token Naming Conventions

### TypeScript
- CamelCase keys: `primaryColors['Primary-primaryMain']`
- Descriptive categories: `brandColors`, `systemColors`, `textColors`

### CSS Variables
- Kebab-case: `--color-primary-primarymain`
- Prefixed by category: `--color-*`, `--spacing-*`, `--radius-*`
- RGB variants available: `--color-primary-primarymain-rgb`

## 🎯 Best Practices

1. **Always use tokens** instead of hardcoded values
2. **Import from central location**: `import { colors } from '@/tokens'`
3. **Use CSS variables in stylesheets** for consistency
4. **Check Storybook** documentation before choosing tokens
5. **Keep tokens synced with Figma** by running transform script regularly

## 📊 Token Statistics

- **Total Tokens**: 89
  - Colors: 63
  - Spacing: 17
  - Radius: 9
- **Auto-generated**: ✅ All files generated from Figma
- **Type-safe**: ✅ TypeScript types for all tokens
- **CSS Ready**: ✅ Custom properties for all tokens

## 🔗 Related Documentation

- **Storybook**: Design System → Tokens
- **Figma**: [Treez Design System](https://figma.com/file/zPEk7VNZnVzhGaNCnalP6o)
- **Transform Script**: `/scripts/transform-figma-tokens.js`

## ❓ FAQ

**Q: Why do color CSS variable names not match TypeScript names exactly?**
A: CSS variables are automatically lowercased for consistency. TypeScript preserves the original Figma naming.

**Q: Can I manually edit the generated files?**
A: No. All files in `src/tokens/` are auto-generated. Edit the transform script or Figma source instead.

**Q: How do I add new tokens?**
A: Add them in Figma, export variables, and run `npm run tokens:transform`.

**Q: What's the difference between spacing and size tokens?**
A: Spacing is for gaps/padding/margins. Size is for component dimensions (width/height). Size tokens are currently in beta.

---

**Last Generated**: Run `npm run tokens:transform` to regenerate
**Source**: Figma Variables Export
