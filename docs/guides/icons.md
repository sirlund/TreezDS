# Icons Guide

Icon system overview for TreezDS.

> **📚 Complete Documentation**: See [`src/components/Icon/README.md`](../../src/components/Icon/README.md) for full technical reference.

---

## Overview

TreezDS uses a **dual icon system**:

1. **Material Symbols** - Google Fonts CDN, 16 icons currently mapped
2. **Custom SVG** - 6 Treez-specific icons from Figma exports

---

## Quick Start

```tsx
import { Icon } from '@/components/Icon';

// Material Symbol (standard UI icons)
<Icon name="settings" size="m" />

// Custom Treez icon (brand-specific)
<Icon name="flower" size="l" color="#4CAF50" />
```

---

## Adding Icons

### Material Symbols (~30 seconds)

1. Find icon at [Google Fonts Icons](https://fonts.google.com/icons) (filter: Rounded)
2. Add name to `src/components/Icon/materialIconMap.ts`:
   ```typescript
   export const materialSymbolNames = [
     // ... existing ...
     'your_icon_name',  // Add in snake_case, alphabetically
   ] as const;
   ```
3. Use: `<Icon name="your_icon_name" />`

### Custom Icons (~5 minutes)

1. Export SVG from Figma
2. Drop in `imported-from-figma/` folder
3. Run `npm run watch:icons`
4. Use: `<Icon name="your-custom-icon" />`

---

## Icon Sizes

| Size | Pixels | Usage |
|------|--------|-------|
| `xs` | 12px   | Inline text, compact UI |
| `s`  | 18px   | Small buttons, labels |
| `m`  | 20px   | **Default**, most common |
| `l`  | 24px   | Large buttons, headers |
| `xl` | 48px   | Feature highlights |

---

## Available Icons

**Material Symbols** (16):
`account_circle`, `admin_panel_settings`, `apps`, `auto_graph`, `dashboard`, `group`, `integration_instructions`, `inventory`, `loyalty`, `payments`, `redeem`, `rocket_launch`, `settings`, `smart_toy`, `storefront`, `verified`

**Custom Icons** (6):
`beverage`, `cbd`, `edible`, `extracts`, `flower`, `preroll`

---

## When to Use Which

| Use Material Symbols For | Use Custom Icons For |
|--------------------------|---------------------|
| ✅ Standard UI (settings, nav, etc.) | ✅ Treez brand graphics |
| ✅ Common patterns | ✅ Product categories |
| ✅ 2,500+ available from Google | ✅ Exact Figma designs |

---

## Resources

- **Full Documentation**: [`src/components/Icon/README.md`](../../src/components/Icon/README.md)
- **Storybook**: http://localhost:6006 → Components → Icon
- **Material Symbols Browser**: https://fonts.google.com/icons
- **Icon Component Source**: [`src/components/Icon/Icon.tsx`](../../src/components/Icon/Icon.tsx)

---

**For detailed examples, API reference, troubleshooting, and technical specs, see the [complete README](../../src/components/Icon/README.md).**
