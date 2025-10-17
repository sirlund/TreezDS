# Font Setup Guide

## Current Status

The design system uses two main fonts:
- **Roboto** - For headings and body text (loaded via Google Fonts ✅)
- **Circular Std** - For labels and UI elements (using Inter as fallback ⚠️)

## Adding Circular Std Font

Circular Std is a commercial font from [Lineto](https://lineto.com/typefaces/circular). To use the actual font instead of the Inter fallback:

### Step 1: Obtain Font Files

Purchase a license for Circular Std and download these font files:
- CircularStd-Book.woff2 / .woff (weight: 400)
- CircularStd-Medium.woff2 / .woff (weight: 450)
- CircularStd-Bold.woff2 / .woff (weight: 500)

### Step 2: Add Fonts to Project

1. Create the fonts directory:
   ```bash
   mkdir -p public/fonts
   ```

2. Copy your Circular Std font files to `public/fonts/`:
   ```
   public/fonts/
   ├── CircularStd-Book.woff2
   ├── CircularStd-Book.woff
   ├── CircularStd-Medium.woff2
   ├── CircularStd-Medium.woff
   ├── CircularStd-Bold.woff2
   └── CircularStd-Bold.woff
   ```

### Step 3: Enable Font Loading

Uncomment the `@font-face` declarations in `src/styles/fonts.css`:

```css
@font-face {
  font-family: 'Circular Std';
  src: url('/fonts/CircularStd-Book.woff2') format('woff2'),
       url('/fonts/CircularStd-Book.woff') format('woff');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'Circular Std';
  src: url('/fonts/CircularStd-Medium.woff2') format('woff2'),
       url('/fonts/CircularStd-Medium.woff') format('woff');
  font-weight: 450;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'Circular Std';
  src: url('/fonts/CircularStd-Bold.woff2') format('woff2'),
       url('/fonts/CircularStd-Bold.woff') format('woff');
  font-weight: 500;
  font-style: normal;
  font-display: swap;
}
```

### Step 4: Update Typography Component

Update `src/components/Typography/Typography.tsx` to remove the Inter fallback:

```tsx
const getFontFamily = (fontFamily: string) => {
  // Now that Circular Std is loaded, use it directly
  return `'${fontFamily}', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif`;
};
```

### Step 5: Verify

Restart Storybook and verify the fonts are loading correctly:

```bash
npm run storybook
```

Check the Typography stories to see Circular Std in action.

## Alternative: Keep Using Inter

If you prefer not to purchase Circular Std, [Inter](https://fonts.google.com/specimen/Inter) is an excellent open-source alternative that's already configured as a fallback. It has similar characteristics to Circular Std:

- Clean, modern geometric sans-serif
- Excellent legibility at small sizes
- Similar proportions and spacing

To permanently use Inter instead:

1. Update your Figma design system to use Inter
2. Re-run the token generation:
   ```bash
   npm run tokens:update
   ```

## Troubleshooting

**Fonts not loading?**
- Check the browser console for 404 errors
- Verify font files are in `public/fonts/`
- Clear browser cache and hard reload (Cmd+Shift+R / Ctrl+Shift+F5)

**Wrong font weights?**
- Check that font-weight in `@font-face` matches the actual font file
- Verify the font files are not corrupted

**CORS errors?**
- Ensure fonts are served from the same domain
- Check that `font-display: swap` is set in `@font-face`
