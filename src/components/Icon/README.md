# Icon Component

Complete documentation for the TreezDS Icon system.

---

## Table of Contents

- [Overview](#overview)
- [Quick Start](#quick-start)
- [Material Symbols](#material-symbols)
- [Custom Icons](#custom-icons)
- [Component API](#component-api)
- [Technical Specifications](#technical-specifications)
- [Examples](#examples)
- [Troubleshooting](#troubleshooting)

---

## Overview

TreezDS uses a **dual icon system**:

1. **Material Symbols** (Primary) - Google Fonts CDN, 16 icons currently mapped
2. **Custom SVG** (Brand-specific) - 6 Treez-specific icons from Figma exports

### Why Two Systems?

- **Material Symbols**: 2,500+ standard UI icons via Google Fonts CDN
  - Lightweight (font ligatures, not individual SVGs)
  - Perfect for common UI patterns (settings, navigation, etc.)

- **Custom Icons**: Treez-specific brand graphics
  - Product categories (flower, edible, cbd, etc.)
  - Exact match to Figma designs
  - Inline SVG data for precise control

### Technology

- **Material Symbols**: Uses Google Fonts Material Symbols Rounded variable font
- **NOT** using `@mui/icons-material` package
- Icons render via font ligatures (text becomes icon)
- Minimal bundle impact

---

## Quick Start

### Install

```bash
npm install
```

### Basic Usage

```tsx
import { Icon } from '@/components/Icon';

// Material Symbol icon
<Icon name="settings" />
<Icon name="settings" size="l" />

// Custom Treez icon
<Icon name="flower" size="m" color="#1A1A1A" />
```

### Available Icons

**Material Symbols** (16 currently mapped):
- `account_circle`, `admin_panel_settings`, `apps`, `auto_graph`
- `dashboard`, `group`, `integration_instructions`, `inventory`
- `loyalty`, `payments`, `redeem`, `rocket_launch`
- `settings`, `smart_toy`, `storefront`, `verified`

**Custom Icons** (6 Treez-specific):
- `beverage`, `cbd`, `edible`, `extracts`, `flower`, `preroll`

---

## Material Symbols

### Adding New Material Symbols

**Time**: ~30 seconds per icon
**Difficulty**: Very easy
**Restart required**: No (hot reload works)

#### Step 1: Find the Icon

Go to [Google Fonts Icons](https://fonts.google.com/icons)

**Filters**:
- **Style**: Rounded (important!)
- Search for icon name (e.g., "shopping_cart")

#### Step 2: Copy the Name

Icon names are in **snake_case**:
- `shopping_cart`
- `local_shipping`
- `add_circle`

#### Step 3: Edit materialIconMap.ts

Open `src/components/Icon/materialIconMap.ts`

Add the icon name to the array (alphabetically):

```typescript
export const materialSymbolNames = [
  'account_circle',
  'admin_panel_settings',
  // ... existing icons ...
  'shopping_cart',  // ← Your new icon
  'settings',
  // ... more icons ...
] as const;
```

**Important**:
- Keep alphabetical order
- Use exact snake_case name from Google Fonts
- No mapping values needed (unlike old system)

#### Step 4: Use It

```tsx
<Icon name="shopping_cart" size="m" />
```

**That's it!** TypeScript automatically updates types.

### Example: Adding Multiple Icons

```typescript
export const materialSymbolNames = [
  'account_circle',
  'add_circle',           // ← NEW
  'admin_panel_settings',
  'apps',
  'auto_graph',
  'calendar_today',       // ← NEW
  'dashboard',
  'delete',               // ← NEW
  'edit',                 // ← NEW
  'group',
  // ... rest of icons
] as const;
```

### Verification

#### In Storybook

```bash
npm run storybook
```

Navigate to: **Components → Icon**

Your new icons appear in the gallery automatically.

#### TypeScript

Types update automatically:

```tsx
// ✅ Valid - TypeScript knows this exists
<Icon name="shopping_cart" />

// ❌ Error - TypeScript catches typo
<Icon name="shooping_cart" />  // Type error!

// ✅ Autocomplete works
<Icon name="set|"  // Suggests: settings, etc.
```

---

## Custom Icons

For Treez-specific icons not available in Material Symbols.

### Adding Custom Icons

**Time**: ~5 minutes
**Difficulty**: Easy
**Process**: Automated via watch script

#### Step 1: Export from Figma

Export icon as SVG from Figma design file.

**Requirements**:
- ✅ Outlined paths (no strokes)
- ✅ 20x20 or 24x24 viewBox
- ✅ Single color (will use `currentColor`)
- ✅ Kebab-case filename: `icon-name.svg`

#### Step 2: Drop in Folder

Place SVG file in `imported-from-figma/` directory.

#### Step 3: Run Watch Script

```bash
npm run watch:icons
```

Or if already running, it auto-detects the new file.

The script automatically:
- Optimizes the SVG
- Generates TypeScript types
- Updates `customIconData.ts`

#### Step 4: Use It

```tsx
<Icon name="your-custom-icon" size="m" />
```

### Current Custom Icons

```tsx
<Icon name="beverage" />   // Beverage category
<Icon name="cbd" />        // CBD products
<Icon name="edible" />     // Edibles
<Icon name="extracts" />   // Extracts
<Icon name="flower" />     // Flower products
<Icon name="preroll" />    // Pre-rolls
```

---

## Component API

### Props

```tsx
interface IconProps {
  /** Icon name (type-safe) */
  name: IconName;

  /** Icon size: 'xs' | 's' | 'm' | 'l' | 'xl' */
  size?: IconSize;

  /** Icon color (CSS color value) */
  color?: string;

  /** Additional CSS class names */
  className?: string;

  /** Accessible label for screen readers */
  'aria-label'?: string;
}
```

### Sizes

All icons support 5 sizes:

| Size | Pixels | Usage |
|------|--------|-------|
| `xs` | 12px   | Inline text, compact UI |
| `s`  | 18px   | Small buttons, labels |
| `m`  | 20px   | Default, most common |
| `l`  | 24px   | Large buttons, headers |
| `xl` | 48px   | Feature highlights |

### Examples

```tsx
// Basic usage (default size: m)
<Icon name="settings" />

// With size
<Icon name="settings" size="l" />

// With color
<Icon name="settings" color="#1A1A1A" />

// With className
<Icon name="settings" className="nav-icon" />

// Accessible label
<Icon name="settings" aria-label="Open settings" />

// All together
<Icon
  name="settings"
  size="l"
  color="#1A1A1A"
  className="nav-icon"
  aria-label="Open settings"
/>
```

### Usage Patterns

```tsx
// In a button
<button>
  <Icon name="add_circle" size="s" />
  Add Item
</button>

// In a header
<h2>
  <Icon name="dashboard" size="l" />
  Dashboard
</h2>

// Standalone
<Icon name="flower" size="xl" color="#4CAF50" />
```

---

## Technical Specifications

### Material Symbols Configuration

TreezDS uses **Material Symbols Rounded** with these specifications:

| Property | Value | Description |
|----------|-------|-------------|
| **Variant** | Rounded | Soft, rounded edges |
| **Weight** | 400 | Normal/regular weight |
| **Grade** | 0 (Normal) | Standard line thickness |
| **Optical Size** | 20px | Base size (scales dynamically) |
| **Fill** | 0 (No fill) | Outlined style |

### How It Works

#### Material Symbols

1. Google Fonts CDN loads the Material Symbols Rounded variable font
2. Icon component renders the snake_case name as text
3. Font ligatures convert text to icon automatically
4. CSS controls size via `font-size` and `opsz` (optical size)

```tsx
// Renders as <span>settings</span> with special font
<Icon name="settings" />
```

#### Custom Icons

1. SVG paths stored in `customIconData.ts`
2. Icon component renders inline SVG
3. Size controlled via `viewBox` scaling
4. Color controlled via `fill="currentColor"`

```tsx
// Renders as <svg><path d="..." /></svg>
<Icon name="flower" />
```

### File Structure

```
src/components/Icon/
├── Icon.tsx                    # Main component
├── Icon.module.css             # Styles (font-variation-settings)
├── Icon.stories.tsx            # Storybook documentation
├── materialIconMap.ts          # Material Symbols registry
├── customIconData.ts           # Custom SVG data (auto-generated)
├── iconData.ts                 # Combined exports
├── index.ts                    # Public exports
└── README.md                   # This file

imported-from-figma/            # Drop custom SVGs here
scripts/watch-icons.js          # Auto-watch script
```

### Browser Support

- **Material Symbols**: All modern browsers (font ligatures are well-supported)
- **Custom Icons**: Universal (inline SVG)

---

## Examples

### Real-World Scenario: Inventory Module

You need these icons:
- `shopping_cart` - Shopping cart
- `local_shipping` - Shipping
- `inventory_2` - Inventory
- `add_circle` - Add items

#### 1. Add to materialIconMap.ts

```typescript
export const materialSymbolNames = [
  // ... existing icons ...
  'add_circle',           // ← NEW
  'inventory_2',          // ← NEW
  'local_shipping',       // ← NEW
  'shopping_cart',        // ← NEW
  // ... more icons ...
] as const;
```

#### 2. Use in Component

```tsx
import { Icon } from '@/components/Icon';

function InventoryToolbar() {
  return (
    <div className="toolbar">
      <button>
        <Icon name="add_circle" size="m" />
        Add Product
      </button>

      <button>
        <Icon name="shopping_cart" size="m" />
        View Cart
      </button>

      <button>
        <Icon name="local_shipping" size="m" />
        Shipping
      </button>

      <button>
        <Icon name="inventory_2" size="m" />
        Inventory
      </button>
    </div>
  );
}
```

### Common Icons for Commerce

Copy-paste these into `materialSymbolNames` array:

```typescript
'add_circle',
'attach_money',
'badge',
'category',
'credit_card',
'delete',
'delivery_dining',
'edit',
'filter_list',
'inventory',
'inventory_2',
'local_shipping',
'person',
'person_add',
'point_of_sale',
'receipt',
'search',
'shopping_cart',
```

---

## Troubleshooting

### Icon Not Appearing

**Material Symbol**:
1. Check icon name is in `materialSymbolNames` array in `materialIconMap.ts`
2. Verify spelling matches Google Fonts exactly (snake_case)
3. Ensure Rounded variant exists at https://fonts.google.com/icons
4. Restart TypeScript server in editor

**Custom Icon**:
1. Check SVG file exists in `imported-from-figma/`
2. Ensure `watch-icons` script ran successfully
3. Verify `customIconData.ts` was updated
4. Check filename is kebab-case

### Icon Wrong Size

```tsx
// ✅ Use size prop
<Icon name="settings" size="l" />

// ❌ Don't rely on CSS alone
<Icon name="settings" style={{ fontSize: '24px' }} />  // May not work correctly
```

Available sizes: `xs`, `s`, `m` (default), `l`, `xl`

### Icon Wrong Color

Icons use `currentColor` by default, inheriting from parent:

```tsx
// Option 1: color prop
<Icon name="settings" color="#1A1A1A" />

// Option 2: parent CSS
<div style={{ color: '#1A1A1A' }}>
  <Icon name="settings" />
</div>

// Option 3: CSS class
.nav-icon { color: #1A1A1A; }
<Icon name="settings" className="nav-icon" />
```

### TypeScript Not Recognizing New Icon

1. Save the file
2. In VS Code: `Cmd+Shift+P` → "TypeScript: Restart TS Server"
3. Close and reopen the file
4. Check `materialIconMap.ts` syntax is valid

### Storybook Not Showing New Icon

1. Save the file
2. Wait for hot reload (~2 seconds)
3. If not appearing, reload Storybook (`Cmd+R` / `Ctrl+R`)
4. Clear browser cache if still not showing

---

## When to Use Which System

### Use Material Symbols When:

✅ Icon exists in Material library
✅ Standard UI icons (settings, dashboard, navigation, etc.)
✅ Need common metaphors (calendar, email, shopping, etc.)
✅ Want lightweight implementation

### Use Custom SVG When:

✅ Brand-specific Treez icons
✅ Product categories (flower, edible, cbd, etc.)
✅ Icon doesn't exist in Material Symbols
✅ Need exact match to Figma design
✅ Require special shapes or brand styling

---

## Quick Reference

### Material Symbols: Quick Steps

1. Find icon: https://fonts.google.com/icons (filter: Rounded)
2. Copy name: `example_icon` (snake_case)
3. Edit: `src/components/Icon/materialIconMap.ts`
4. Add to array: `'example_icon',` (alphabetically)
5. Save: Types update automatically
6. Use: `<Icon name="example_icon" />`

**You DON'T need to**:
- ❌ Run scripts
- ❌ Install packages
- ❌ Restart Storybook
- ❌ Update other files

**Automatically updated**:
- ✅ TypeScript types
- ✅ Storybook controls
- ✅ Icon exports

### Custom Icons: Quick Steps

1. Export SVG from Figma
2. Drop in `imported-from-figma/`
3. Run `npm run watch:icons`
4. Use: `<Icon name="your-icon" />`

---

## Resources

- **Material Symbols Browser**: https://fonts.google.com/icons
- **Icon Component Source**: `src/components/Icon/Icon.tsx`
- **Material Map**: `src/components/Icon/materialIconMap.ts`
- **Custom Data**: `src/components/Icon/customIconData.ts`
- **Storybook**: http://localhost:6006 → Components → Icon

---

## Comparison: Material vs Custom

| Aspect | Material Symbols | Custom Icons |
|--------|------------------|--------------|
| **Source** | Google Fonts CDN | Figma exports |
| **File** | materialIconMap.ts | customIconData.ts |
| **Add Process** | 30 seconds (edit array) | 5 minutes (export + script) |
| **Available** | 2,500+ from Google | 6 Treez-specific |
| **Bundle Impact** | Minimal (font ligatures) | Small (inline SVG) |
| **Customization** | Size, color only | Full control |
| **Restart Needed** | No | No |

---

**Last Updated**: October 2025
**Material Symbols Available**: 16 mapped (2,500+ available)
**Custom Icons Available**: 6
**Total Icons in TreezDS**: 22 (16 Material + 6 Custom)
