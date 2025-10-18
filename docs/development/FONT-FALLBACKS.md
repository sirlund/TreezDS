# Centralized Font Stack Configuration

## 📍 Single Source of Truth

All font fallback chains are defined in **ONE place**:

```
src/styles/fonts.css
```

## 🎯 How It Works

### CSS Variables (fonts.css)
```css
:root {
  /* Edit fallbacks here - used everywhere */
  --font-family-circular: 'Circular Std', 'Inter', -apple-system, ...;
  --font-family-roboto: 'Roboto', -apple-system, ...;
}
```

### Typography Component (Typography.tsx)
```tsx
// Reads from CSS variables - no hardcoded fallbacks
const getFontFamily = (fontFamily: string) => {
  if (fontFamily === 'Circular Std') {
    return "var(--font-family-circular, 'Circular Std', 'Inter', sans-serif)";
  }
  // ...
};
```

## ✅ Benefits

**Before (duplicated):**
- ❌ Fallbacks in `fonts.css` 
- ❌ Fallbacks in `Typography.tsx`
- ❌ Easy to get out of sync
- ❌ Have to update 2 places

**After (centralized):**
- ✅ Fallbacks ONLY in `fonts.css`
- ✅ Typography reads from CSS variables
- ✅ Always in sync
- ✅ Update once, applies everywhere

## 🔧 How to Change Fallbacks

**You only need to edit ONE file:**

`src/styles/fonts.css` - lines 47-53

```css
:root {
  /* Change this line to update Circular Std fallback everywhere */
  --font-family-circular: 'Circular Std', 'YOUR-FALLBACK-HERE', sans-serif;
  
  /* Change this line to update Roboto fallback everywhere */
  --font-family-roboto: 'Roboto', 'YOUR-FALLBACK-HERE', sans-serif;
}
```

## 📋 Examples

### Remove Inter fallback (use only system fonts)
```css
--font-family-circular: 'Circular Std', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
```

### Use Helvetica as fallback
```css
--font-family-circular: 'Circular Std', 'Helvetica Neue', 'Helvetica', -apple-system, sans-serif;
```

### Use Arial as fallback
```css
--font-family-circular: 'Circular Std', 'Arial', sans-serif;
```

## 🎨 Current Configuration

```css
/* Circular Std with Inter fallback */
--font-family-circular: 'Circular Std', 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;

/* Roboto with system font fallback */
--font-family-roboto: 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
```

## 🔍 How Components Use It

**Typography Component:**
- Automatically uses `var(--font-family-circular)` for Circular Std
- Automatically uses `var(--font-family-roboto)` for Roboto
- No need to touch component code when changing fallbacks

**CSS Files:**
- Can use the CSS variables directly:
  ```css
  .my-label {
    font-family: var(--font-family-circular);
  }
  ```

**TypeScript/Primitives:**
- The primitives.ts still defines base font names:
  ```ts
  fontFamilies = {
    primary: 'Roboto',
    secondary: 'Circular Std',
  }
  ```
- These get mapped to CSS variables with fallbacks by Typography component

## ✨ Result

**One line change** in `fonts.css` → **Updates entire app** 🎯

No more hunting through files to update fallbacks!
