# Fonts Guide# Font Setup Guide



Font setup and configuration for TreezDS.## Current Status



---The design system uses two main fonts:

- **Roboto** - For headings and body text (loaded via Google Fonts ✅)

## Font Stack- **Circular Std** - For labels and UI elements (✅ OTF files supported)



TreezDS uses two primary fonts:## Adding Circular Std Font



1. **Roboto** (Google Fonts) - Headings and display textCircular Std is a commercial font from [Lineto](https://lineto.com/typefaces/circular). The system now supports OTF (OpenType Font) files:

2. **Circular Std** (Commercial) - Body text and UI elements

### Step 1: Obtain Font Files

### Fallback Chain

Purchase a license for Circular Std and obtain these font files:

```- CircularStd-Book.otf (Regular - weight: 400)

Primary:   Circular Std → Inter → System fonts- CircularStd-Medium.otf (Medium - weight: 450/500)

Secondary: Roboto → System fonts- CircularStd-Bold.otf (Bold - weight: 600)

```

**Supported formats**: OTF (OpenType Font), WOFF2, WOFF

---

### Step 2: Add Fonts to Project

## Setup

Copy your Circular Std font files to `public/fonts/`:

### 1. Google Fonts (Auto-loaded)

**For OTF files** (current setup):

Roboto and Inter are loaded via Google Fonts in `src/styles/fonts.css`:```

public/fonts/

```css├── CircularStd-Book.otf

@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;600;700&display=swap');├── CircularStd-Medium.otf

@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;450;500;600&display=swap');└── CircularStd-Bold.otf

``````



### 2. Circular Std (Manual Setup Required)**For WOFF/WOFF2 files** (alternative):

```

Circular Std is a **commercial font** that must be added manually.public/fonts/

├── CircularStd-Book.woff2

#### Steps:├── CircularStd-Book.woff

├── CircularStd-Medium.woff2

1. **Obtain OTF files**:├── CircularStd-Medium.woff

   - `CircularStd-Book.otf` (Regular - weight 400)├── CircularStd-Bold.woff2

   - `CircularStd-Medium.otf` (Medium - weight 450/500)└── CircularStd-Bold.woff

   - `CircularStd-Bold.otf` (Bold - weight 600)```



2. **Place files** in `public/fonts/` folderSee `public/fonts/README.md` for detailed naming requirements.



3. **Verify setup** in Storybook:### Step 3: Verify Font Loading

   - Navigate to Typography → Labels

   - Labels should render in Circular Std (not Inter)The `@font-face` declarations are already configured in `src/styles/fonts.css` for OTF files:



---**Current configuration (OTF)**:



## Centralized Font Configuration```css

@font-face {

### CSS Variables (Single Source of Truth)  font-family: 'Circular Std';

  src: url('/fonts/CircularStd-Book.otf') format('opentype');

All font stacks are defined once in `src/styles/fonts.css`:  font-weight: 400;

  font-style: normal;

```css  font-display: swap;

:root {}

  --font-family-circular: 'Circular Std', 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;

  --font-family-roboto: 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;@font-face {

}  font-family: 'Circular Std';

```  src: url('/fonts/CircularStd-Medium.otf') format('opentype');

  font-weight: 450;

### Benefits  font-style: normal;

- ✅ Change fallback chain in ONE place  font-display: swap;

- ✅ Automatically updates entire app}

- ✅ No font stack duplication

@font-face {

---  font-family: 'Circular Std';

  src: url('/fonts/CircularStd-Bold.otf') format('opentype');

## Usage  font-weight: 600;

  font-style: normal;

### In CSS Modules  font-display: swap;

}

```css```

.button {

  font-family: var(--font-family-circular);**If you have WOFF/WOFF2 files instead**, update the `src:` lines:

}```css

src: url('/fonts/CircularStd-Book.woff2') format('woff2'),

.heading {     url('/fonts/CircularStd-Book.woff') format('woff');

  font-family: var(--font-family-roboto);```

}

```### Step 4: Test Font Loading



### In Components1. **Add your OTF files** to `public/fonts/`

2. **Restart dev server**: `npm run dev` or `npm run storybook`

```tsx3. **Open Storybook** and navigate to Typography → Labels

import { typography } from '@/design-tokens';4. **Verify**: Labels should now render in Circular Std (not Inter)



<Typography variant="h1">The Typography component is already configured with proper fallback:

  {/* Uses Roboto via CSS variable */}```tsx

</Typography>// Circular Std with Inter fallback

```'Circular Std', 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif

```

---

If Circular Std files are present, they'll load automatically. If missing, Inter will be used as fallback.

## Troubleshooting

### Step 5: Verify

### Fonts Not Loading

- Check OTF files exist in `public/fonts/`Restart Storybook and verify the fonts are loading correctly:

- Verify exact file names (case-sensitive)

- Clear browser cache and restart dev server```bash

npm run storybook

### Wrong Font Displaying```

- If Circular Std not installed, Inter is the fallback (intentional)

- Add OTF files to `public/fonts/`Check the Typography stories to see Circular Std in action.



---## Alternative: Keep Using Inter



**Key Takeaway**: Always use CSS variables for fonts (`--font-family-circular`, `--font-family-roboto`).If you prefer not to purchase Circular Std, [Inter](https://fonts.google.com/specimen/Inter) is an excellent open-source alternative that's already configured as a fallback. It has similar characteristics to Circular Std:


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
