# Icons Guide

Icon system usage for TreezDS.

---

## Overview

TreezDS uses a **dual icon system**:

1. **Material Symbols** (Primary) - 2,500+ Google icons
2. **Custom SVG** (Brand-specific) - From Figma exports

---

## Material Symbols

### Usage

```tsx
import { Icon } from '@/components/Icon';

<Icon name="home" />
<Icon name="settings" size="24" />
<Icon name="close" size="32" />
```

### Available Sizes
- `16` - Extra small
- `20` - Small (default)
- `24` - Medium
- `32` - Large
- `40` - Extra large
- `48` - 2X large

### Adding New Material Icons

1. Find icon name at [Google Material Symbols](https://fonts.google.com/icons)
2. Edit `src/components/Icon/materialIconMap.ts`:

```typescript
export const materialIconMap = {
  // ... existing icons
  'your-name': 'material_symbol_name',
};
```

3. TypeScript auto-updates, use immediately:

```tsx
<Icon name="your-name" />
```

**That's it!** No SVG files needed.

---

## Custom SVG Icons

For brand-specific icons not in Material Symbols.

### Adding Custom Icons

1. **Export SVG from Figma**
2. **Drop file** in `imported-from-figma/` folder
3. **Run watch script** (if not already running):
   ```bash
   npm run watch:icons
   ```
4. **Use immediately**:
   ```tsx
   <Icon name="your-custom-icon" />
   ```

### Auto-watch

The `watch-icons` script automatically:
- Detects new SVG files
- Optimizes them
- Generates TypeScript types
- Updates icon data

### File Format

SVGs should be:
- ✅ Outlined (no strokes)
- ✅ 24x24 viewBox (standard)
- ✅ Single color (currentColor)
- ✅ Kebab-case filename: `icon-name.svg`

---

## Icon Component API

```tsx
interface IconProps {
  name: IconName;           // Icon name (type-safe)
  size?: IconSize;          // 16 | 20 | 24 | 32 | 40 | 48
  className?: string;       // Custom CSS class
  style?: CSSProperties;    // Inline styles
}
```

### Examples

```tsx
// Basic usage
<Icon name="home" />

// With size
<Icon name="settings" size="24" />

// With custom color
<Icon name="close" style={{ color: 'red' }} />

// With CSS class
<Icon name="menu" className="nav-icon" />
```

---

## When to Use Each System

### Use Material Symbols When:
- ✅ Icon exists in Material library
- ✅ Standard UI icons (home, settings, close, etc.)
- ✅ Need common metaphors (calendar, email, etc.)

### Use Custom SVG When:
- ✅ Brand-specific icons
- ✅ Product-specific graphics
- ✅ Icons not in Material library
- ✅ Need exact design from Figma

---

## Development Workflow

### Starting Development

```bash
# Terminal 1: Storybook
npm run storybook

# Terminal 2: Icon watcher (if adding custom icons)
npm run watch:icons
```

### Icon Story

View all available icons in Storybook:
- Navigate to **Components → Icon**
- Browse Material Symbols catalog
- See custom icons section

---

## File Structure

```
src/components/Icon/
├── Icon.tsx              # Icon component
├── Icon.module.css       # Styles
├── Icon.stories.tsx      # Storybook documentation
├── materialIconMap.ts    # Material Symbols mapping
├── customIconData.ts     # Custom SVG data (auto-generated)
├── iconData.ts           # Combined icon data
└── index.ts              # Exports

imported-from-figma/      # Drop custom SVGs here
scripts/watch-icons.js    # Auto-watch script
```

---

## TypeScript Support

All icon names are type-safe:

```tsx
// ✅ Valid - TypeScript knows this icon exists
<Icon name="home" />

// ❌ Error - TypeScript catches typo
<Icon name="homee" />  // Type error!

// ✅ Autocomplete works
<Icon name="set|"  // Suggests: settings, setup, etc.
```

---

## Troubleshooting

### Icon Not Appearing

**Material Symbol:**
- Check icon name is in `materialIconMap.ts`
- Verify spelling matches Material Symbols site
- Restart TypeScript server

**Custom SVG:**
- Check SVG file in `imported-from-figma/`
- Ensure `watch-icons` script ran
- Check `customIconData.ts` was generated
- Verify filename is kebab-case

### Icon Wrong Size
- Use `size` prop: `<Icon name="home" size="24" />`
- Check CSS isn't overriding size

### Icon Wrong Color
- Icons use `currentColor` by default
- Set color via parent element or `style` prop:
  ```tsx
  <Icon name="home" style={{ color: 'blue' }} />
  ```

---

## Related Documentation

- `src/components/Icon/Icon.tsx` - Icon component source
- Storybook: Components → Icon
- [Material Symbols](https://fonts.google.com/icons) - Icon browser

---

**Key Takeaway**: Use Material Symbols for standard UI icons, Custom SVG for brand-specific graphics.
