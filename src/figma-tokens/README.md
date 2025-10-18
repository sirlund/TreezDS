# Figma Tokens (Primitives)# Figma Tokens (Primitivos)# Figma Tokens (Primitivos)



⚠️ **THESE FILES ARE AUTO-GENERATED FROM FIGMA**  

❌ **DO NOT EDIT MANUALLY**

⚠️ **ESTOS ARCHIVOS SON AUTO-GENERADOS DESDE FIGMA**  ⚠️ **ESTOS ARCHIVOS SON AUTO-GENERADOS DESDE FIGMA**  

---

❌ **NO EDITAR MANUALMENTE**❌ **NO EDITAR MANUALMENTE**

## 📋 Overview



This folder contains **primitive tokens** extracted directly from Figma through automated scripts. These are the raw base design values.

## 📋 Descripción## 📋 Descripción

---



## 🔄 Updating from Figma

Esta carpeta contiene **tokens primitivos** extraídos directamente de Figma mediante scripts automáticos. Estos son los valores base crudos del diseño.Esta carpeta contiene **tokens primitivos** extraídos directamente de Figma mediante scripts automáticos. Estos son los valores base crudos del diseño.

### Using Figma MCP (Recommended)



Use Figma Model Context Protocol tools to extract design tokens:

## 🔄 Actualización desde Figma## 🔄 Actualización

```bash

# Use mcp_figma_get_design_context tool

# This extracts current design values without API tokens

```Para actualizar estos tokens desde Figma:Para actualizar estos tokens desde Figma:



### Legacy Method (Deprecated)



The following npm scripts are **deprecated** and should not be used:```bash```bash



```bashnpm run tokens:transformnpm run tokens:transform

# ❌ DON'T USE:

npm run tokens:extract``````

npm run tokens:generate

npm run tokens:transform

```

Este comando:Este comando:

**Why deprecated:** Figma MCP provides better, token-free extraction.

1. Extrae estilos de Figma1. Extrae estilos de Figma

---

2. Transforma los datos2. Transforma los datos

## 📁 Structure

3. Genera archivos TS, CSS y JSON3. Genera archivos TS, CSS y JSON

```

figma-tokens/

├── colors/

│   ├── colors.ts      # TypeScript color constants## 📁 Estructura## 📁 Estructura

│   ├── colors.css     # CSS custom properties

│   └── colors.json    # Raw token data from Figma

├── spacing/

│   ├── spacing.ts     # TypeScript spacing constants``````

│   ├── spacing.css    # CSS custom properties

│   └── spacing.json   # Raw token data from Figmafigma-tokens/figma-tokens/

├── radius/

│   ├── radius.ts      # TypeScript radius constants├── colors/├── colors/

│   ├── radius.css     # CSS custom properties

│   └── radius.json    # Raw token data from Figma│   ├── colors.ts .......... Exports TypeScript│   ├── colors.ts      # TypeScript color constants

├── index.ts           # Central export file

└── README.md          # This file│   ├── colors.css ......... Variables CSS│   ├── colors.css     # CSS custom properties

```

│   └── colors.json ........ Data cruda de Figma│   └── colors.json    # Raw token data from Figma

---

├── spacing/├── spacing/

## 🎨 Token Categories

│   ├── spacing.ts│   ├── spacing.ts     # TypeScript spacing constants

### Colors (63 tokens)

│   ├── spacing.css│   ├── spacing.css    # CSS custom properties

#### Green Palette (10 shades)

```│   └── spacing.json│   └── spacing.json   # Raw token data from Figma

Green-green01 → Green-green10

```├── radius/├── radius/



#### Primary Colors (3 tokens)│   ├── radius.ts│   ├── radius.ts      # TypeScript radius constants

- `Primary-primaryMain`

- `Primary-primaryLight`│   ├── radius.css│   ├── radius.css     # CSS custom properties

- `Primary-primaryDark`

│   └── radius.json│   └── radius.json    # Raw token data from Figma

#### System Colors (12 tokens)

Each with Main, Light, Dark variants:└── index.ts ............... Central export└── index.ts           # Central export file

- Success (green)

- Error (red)``````

- Warning (yellow)

- Info (blue)



#### Text Colors (5 tokens)## 🎨 Contenido## 🎨 Token Categories

- `Text-textPrimary`

- `Text-textSecondary`

- `Text-textTertiary`

- `Text-textDisabled`### Colors (63 tokens)### Colors (63 tokens)

- `Text-textInverse`

- **Green Palette**: `Green-green01` → `Green-green10`- **Green Palette**: `Green-green01` → `Green-green10`

#### Greyscale (10 tokens)

```- **Primary Colors**: `Primary-primaryMain`, `Primary-primaryLight`, `Primary-primaryDark`- **Primary Colors**: `Primary-primaryMain`, `Primary-primaryLight`, `Primary-primaryDark`

Greyscale-greyscale00 → Greyscale-greyscale09

```- **System Colors**: Success, Error, Warning, Info (con variantes Main, Light, Dark)- **System Colors**: Success, Error, Warning, Info (with Main, Light, Dark variants)



#### Black & White (2 tokens)- **Text Colors**: Primary, secondary, tertiary, disabled- **Text Colors**: Primary, secondary, tertiary, disabled

- `BW-primaryBlack`

- `BW-primaryWhite`- **Greyscale**: Escala de 10 grises- **Greyscale**: 10-step grey scale



#### Secondary Colors (18 tokens)- **B&W**: `BW-primaryBlack`, `BW-primaryWhite`- **B&W**: `BW-primaryBlack`, `BW-primaryWhite`

Each with 00, 01, 02 variants:

- Brown- **Secondary Colors**: Brown, Orange, Peach, Blue, Purple, Yellow- **Secondary Colors**: Brown, Orange, Peach, Blue, Purple, Yellow (with 00, 01, 02 variants)

- Orange

- Peach

- Blue

- Purple### Spacing (17 tokens)### Spacing (17 tokens)

- Yellow

- **Spacing Scale**: none, 3x-small → 3x-large (0px a 48px)- **Spacing Scale**: none, 3x-small → 3x-large (0px to 48px)

#### Brand Colors (3 tokens)

- `Brand-treezGreen`- **Size Scale (Beta)**: x-small → 3x-large (12px a 64px)- **Size Scale (Beta)**: x-small → 3x-large (12px to 64px)

- `Brand-treezPurple`

- `Brand-treezOrange`



---### Radius (9 tokens)### Radius (9 tokens)



### Spacing (17 tokens)- **Border Radius**: none, 2x-small → 2x-large, full (0px a 9999px)- **Border Radius**: none, 2x-small → 2x-large, full (0px to 9999px)



#### Spacing Scale

```

none      → 0px## 🔗 Relación con Design Tokens## � Relación con Design Tokens

3x-small  → 2px

2x-small  → 4px

x-small   → 8px

small     → 12pxEstos tokens primitivos son la **base** para los tokens semánticos:Estos tokens primitivos son la **base** para los tokens semánticos en `src/design-tokens/`:

medium    → 16px

large     → 24px

x-large   → 32px

2x-large  → 40px``````

3x-large  → 48px

```figma-tokens/              design-tokens/figma-tokens/              design-tokens/



#### Size Scale (Beta)(Primitivos)          →   (Semánticos)(Primitivos de Figma) →   (Semánticos refinados)

```

x-small   → 12px──────────────            ───────────────────────────────         ────────────────────

small     → 16px

medium    → 24pxGreen-green06        →    colors.successGreen-green06         →    colors.success

large     → 32px

x-large   → 40pxPrimary-primaryMain  →    colors.primaryPrimary-primaryMain   →    colors.primary

2x-large  → 48px

3x-large  → 64pxBW-primaryBlack      →    colors.textPrimaryBW-primaryBlack      →    colors.textPrimary

```

``````

---



### Radius (9 tokens)

Los **tokens semánticos** (`src/design-tokens/`) referencian estos primitivos y les dan significado contextual para uso en componentes.Los **tokens semánticos** referencian estos primitivos y les dan significado contextual para componentes.

```

none      → 0px

2x-small  → 2px

x-small   → 4px## ⚠️ Importante## ⚠️ Importante

small     → 8px

medium    → 12px

large     → 16px

x-large   → 20px- ✅ **SÍ** usar estos valores en `src/design-tokens/` para crear tokens semánticos- ✅ **SÍ** usar estos valores en `src/design-tokens/` para crear tokens semánticos

2x-large  → 24px

full      → 9999px- ❌ **NO** editar estos archivos manualmente (se sobrescribirán)- ❌ **NO** editar estos archivos manualmente (se sobrescribirán en próxima extracción)

```

- ❌ **NO** importar directamente en componentes (usar tokens semánticos)- ❌ **NO** importar directamente en componentes (usar tokens semánticos en su lugar)

---



## 🔗 Relationship with Design Tokens

## 📖 Usage (Solo referencia)## �📖 Usage (Solo para referencia)

These primitive tokens are the **foundation** for semantic tokens in `src/design-tokens/`:



```

figma-tokens/              design-tokens/⚠️ **Preferiblemente usa tokens de `src/design-tokens/` en lugar de estos primitivos.**### TypeScript/React

(Figma Primitives)    →   (Refined Semantics)

──────────────────        ──────────────────

Green-green06         →   colors.success

Primary-primaryMain   →   colors.primary### TypeScript/React```typescript

BW-primaryBlack       →   colors.textPrimary

System-errorMain      →   colors.errorimport { primaryColors, spacing, radius } from '@/tokens';

```

```typescript

**Semantic tokens** reference these primitives and provide contextual meaning for component usage.

import { primaryColors, spacing, radius } from '@/figma-tokens';function MyComponent() {

---

  return (

## ⚠️ Important Guidelines

function MyComponent() {    <div style={{

### ❌ DO NOT:

- Edit these files manually (they will be overwritten)  return (      backgroundColor: primaryColors['Primary-primaryMain'],

- Import primitive tokens directly in components

- Commit changes without regenerating from Figma    <div style={{      padding: spacing['space-medium'],

- Use as single source of truth (use semantic tokens instead)

      backgroundColor: primaryColors['Primary-primaryMain'],      borderRadius: radius['radius-medium']

### ✅ DO:

- Regenerate when design changes in Figma      padding: spacing['space-medium'],    }}>

- Reference in semantic token definitions

- Keep .json files for data inspection      borderRadius: radius['radius-medium']      Content

- Review changes in PR before committing

    }}>    </div>

---

      Content  );

## 🔀 Usage Pattern

    </div>}

### ❌ Wrong: Direct Import

  );```

```typescript

// DON'T: Use primitive tokens directly}

import { greenColors } from '@/figma-tokens/colors';

```### CSS

const MyComponent = () => {

  return <div style={{ color: greenColors['Green-green06'] }}>

    Text

  </div>;### CSS```css

};

```/* Import token CSS files */



### ✅ Correct: Via Semantic Tokens```css@import '@/tokens/colors/colors.css';



```typescript@import '@/figma-tokens/colors/colors.css';@import '@/tokens/spacing/spacing.css';

// DO: Use semantic tokens

import { semanticColors } from '@/design-tokens/semantic-colors';@import '@/figma-tokens/spacing/spacing.css';@import '@/tokens/radius/radius.css';



const MyComponent = () => {@import '@/figma-tokens/radius/radius.css';

  return <div style={{ color: semanticColors.success }}>

    Text.my-component {

  </div>;

};.my-component {  background-color: var(--color-primary-primarymain);

```

  background-color: var(--color-primary-primarymain);  padding: var(--spacing-space-medium);

---

  padding: var(--spacing-space-medium);  border-radius: var(--radius-radius-medium);

## 📦 Export Format

  border-radius: var(--radius-radius-medium);}

### TypeScript (.ts)

}```

```typescript

export const greenColors = {```

  'Green-green01': '#fcfff5',

  'Green-green02': '#f3fae6',### CSS Modules

  // ...

} as const;## 🔄 Proceso de Actualización



export type GreenColor = keyof typeof greenColors;```css

```

### Paso 1: Exportar desde Figma@import '@/tokens/colors/colors.css';

### CSS (.css)

1. En Figma: **Plugins → Export Variables**

```css

:root {2. Exportar a formato JSON.button {

  --green-green01: #fcfff5;

  --green-green02: #f3fae6;3. Guardar en `/imported-from-figma/`:  background-color: var(--color-primary-primarymain);

  /* ... */

}   - `Colors.json`  color: var(--color-text-primaryblacktext);

```

   - `Shapes.json`}

### JSON (.json)

   - `Size&Spacing.json`

```json

{.button:hover {

  "Green": {

    "green01": {### Paso 2: Transformar Tokens  background-color: var(--color-primary-primarydark);

      "value": "#fcfff5",

      "type": "color"```bash}

    }

  }npm run tokens:transform```

}

``````



---## 🔄 Updating Tokens



## 🔄 Update Workflow### Paso 3: Revisar Cambios



### When Design Changes in FigmaVerificar archivos generados y revisar en Storybook:### Step 1: Export from Figma



1. **Extract using Figma MCP**- **Design System → Tokens**1. In Figma, select **Plugins → Export Variables**

   ```bash

   # Use mcp_figma_get_design_context tool in your AI IDE2. Export to JSON format

   ```

## 📚 Ver También3. Save files to `/imported-from-figma/` folder:

2. **Review Changes**

   ```bash   - `Colors.json`

   git diff src/figma-tokens/

   ```- [`src/design-tokens/`](../design-tokens/README.md) - **Tokens semánticos (usar estos)**   - `Shapes.json`



3. **Update Semantic Tokens**- [`docs/ai-context/STRUCTURE-ANALYSIS.md`](../../docs/ai-context/STRUCTURE-ANALYSIS.md) - Análisis completo   - `Size&Spacing.json`

   ```bash

   # If new primitives added, map to semantic tokens- Storybook: Design System → Tokens

   # Edit src/design-tokens/semantic-colors.ts

   ```### Step 2: Transform Tokens

```bash

4. **Test in Storybook**npm run tokens:transform

   ```bash```

   npm run storybook

   # Check Tokens story pageThis will regenerate all token files in `src/tokens/`.

   ```

### Step 3: Review Changes

5. **Commit Changes**Check the generated files and verify in Storybook:

   ```bash- **Design System → Tokens → Overview**

   git add src/figma-tokens/- **Design System → Tokens → Colors**

   git commit -m "chore: update primitive tokens from Figma"- **Design System → Tokens → Spacing**

   ```- **Design System → Tokens → Radius**



---## 📋 Token Naming Conventions



## 📊 Token Statistics### TypeScript

- CamelCase keys: `primaryColors['Primary-primaryMain']`

- **Total Tokens**: 89- Descriptive categories: `brandColors`, `systemColors`, `textColors`

  - Colors: 63

  - Spacing: 17### CSS Variables

  - Radius: 9- Kebab-case: `--color-primary-primarymain`

- Prefixed by category: `--color-*`, `--spacing-*`, `--radius-*`

- **File Sizes**:- RGB variants available: `--color-primary-primarymain-rgb`

  - colors.ts: ~3.5KB

  - spacing.ts: ~1KB## 🎯 Best Practices

  - radius.ts: ~500B

1. **Always use tokens** instead of hardcoded values

---2. **Import from central location**: `import { colors } from '@/tokens'`

3. **Use CSS variables in stylesheets** for consistency

## 🔍 Finding Tokens4. **Check Storybook** documentation before choosing tokens

5. **Keep tokens synced with Figma** by running transform script regularly

### By Category

## 📊 Token Statistics

```typescript

// Colors- **Total Tokens**: 89

import { greenColors, primaryColors, systemColors } from '@/figma-tokens/colors';  - Colors: 63

  - Spacing: 17

// Spacing  - Radius: 9

import { spacing, size } from '@/figma-tokens/spacing';- **Auto-generated**: ✅ All files generated from Figma

- **Type-safe**: ✅ TypeScript types for all tokens

// Radius- **CSS Ready**: ✅ Custom properties for all tokens

import { radius } from '@/figma-tokens/radius';

```## 🔗 Related Documentation



### By Name (CSS)- **Storybook**: Design System → Tokens

- **Figma**: [Treez Design System](https://figma.com/file/zPEk7VNZnVzhGaNCnalP6o)

```css- **Transform Script**: `/scripts/transform-figma-tokens.js`

/* In CSS files */

@import '@/figma-tokens/colors/colors.css';## ❓ FAQ

@import '@/figma-tokens/spacing/spacing.css';

@import '@/figma-tokens/radius/radius.css';**Q: Why do color CSS variable names not match TypeScript names exactly?**

A: CSS variables are automatically lowercased for consistency. TypeScript preserves the original Figma naming.

.my-element {

  color: var(--green-green06);**Q: Can I manually edit the generated files?**

  padding: var(--spacing-medium);A: No. All files in `src/tokens/` are auto-generated. Edit the transform script or Figma source instead.

  border-radius: var(--radius-small);

}**Q: How do I add new tokens?**

```A: Add them in Figma, export variables, and run `npm run tokens:transform`.



---**Q: What's the difference between spacing and size tokens?**

A: Spacing is for gaps/padding/margins. Size is for component dimensions (width/height). Size tokens are currently in beta.

## 🛠️ Troubleshooting

---

### Tokens Out of Sync

**Last Generated**: Run `npm run tokens:transform` to regenerate

**Problem:** Design in Figma doesn't match tokens  **Source**: Figma Variables Export

**Solution:** Re-extract using Figma MCP tools

### Missing Tokens

**Problem:** New Figma styles not appearing  
**Solution:** Ensure styles are published in Figma, then re-extract

### Import Errors

**Problem:** TypeScript can't find token exports  
**Solution:** Check `index.ts` includes all exports, restart TS server

---

## 📚 Related Documentation

- [Design Tokens README](../design-tokens/README.md) - Semantic token system
- [Semantic Colors](../design-tokens/semantic-colors.ts) - How primitives map to semantics
- [Typography System](../design-tokens/typography/README.md) - Typography token architecture

---

## 🎯 Key Takeaways

1. **Primitive tokens** = Raw values from Figma
2. **Auto-generated** = Don't edit manually
3. **Foundation only** = Use semantic tokens in components
4. **Figma MCP** = Preferred extraction method
5. **Regular updates** = Keep in sync with design

---

**Remember:** These are building blocks, not final tokens. Always use semantic tokens (`src/design-tokens/`) in your components.
