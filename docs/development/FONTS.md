# Font Setup Guide

## Current Status

The design system uses two main fonts:
- **Roboto** - For headings and body text (loaded via Google Fonts ✅)
- **Circular Std** - For labels and UI elements (✅ OTF files supported)

## Adding Circular Std Font

Circular Std is a commercial font from [Lineto](https://lineto.com/typefaces/circular). The system now supports OTF (OpenType Font) files:

### Step 1: Obtain Font Files

Purchase a license for Circular Std and obtain these font files:
- CircularStd-Book.otf (Regular - weight: 400)
- CircularStd-Medium.otf (Medium - weight: 450/500)
- CircularStd-Bold.otf (Bold - weight: 600)

**Supported formats**: OTF (OpenType Font), WOFF2, WOFF

### Step 2: Add Fonts to Project

Copy your Circular Std font files to `public/fonts/`:

**For OTF files** (current setup):
```
public/fonts/
├── CircularStd-Book.otf
├── CircularStd-Medium.otf
└── CircularStd-Bold.otf
```

**For WOFF/WOFF2 files** (alternative):
```
public/fonts/
├── CircularStd-Book.woff2
├── CircularStd-Book.woff
├── CircularStd-Medium.woff2
├── CircularStd-Medium.woff
├── CircularStd-Bold.woff2
└── CircularStd-Bold.woff
```

See `public/fonts/README.md` for detailed naming requirements.

### Step 3: Verify Font Loading

The `@font-face` declarations are already configured in `src/styles/fonts.css` for OTF files:

**Current configuration (OTF)**:

```css
@font-face {
  font-family: 'Circular Std';
  src: url('/fonts/CircularStd-Book.otf') format('opentype');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'Circular Std';
  src: url('/fonts/CircularStd-Medium.otf') format('opentype');
  font-weight: 450;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'Circular Std';
  src: url('/fonts/CircularStd-Bold.otf') format('opentype');
  font-weight: 600;
  font-style: normal;
  font-display: swap;
}
```

**If you have WOFF/WOFF2 files instead**, update the `src:` lines:
```css
src: url('/fonts/CircularStd-Book.woff2') format('woff2'),
     url('/fonts/CircularStd-Book.woff') format('woff');
```

### Step 4: Test Font Loading

1. **Add your OTF files** to `public/fonts/`
2. **Restart dev server**: `npm run dev` or `npm run storybook`
3. **Open Storybook** and navigate to Typography → Labels
4. **Verify**: Labels should now render in Circular Std (not Inter)

The Typography component is already configured with proper fallback:
```tsx
// Circular Std with Inter fallback
'Circular Std', 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif
```

If Circular Std files are present, they'll load automatically. If missing, Inter will be used as fallback.

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
