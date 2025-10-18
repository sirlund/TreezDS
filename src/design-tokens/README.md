# Design Tokens (Semantic)# Design Tokens (Semánticos)



✏️ **MANUALLY REFINED TOKENS**  ✏️ **TOKENS REFINADOS MANUALMENTE**  

✅ **USE THESE IN COMPONENTS**✅ **USAR ESTOS EN COMPONENTES**



---## 📋 Descripción



## 📋 OverviewEsta carpeta contiene **tokens semánticos** refinados manualmente. Estos tokens tienen significado contextual y son los que debes usar en componentes.



This folder contains **semantic design tokens** that have been manually refined. These tokens have contextual meaning and should be used in components.Mientras que los **tokens primitivos** (`src/figma-tokens/`) tienen nombres técnicos como `Green-green06`, estos tokens tienen nombres semánticos como `success`, `primary`, `textPrimary`.



While **primitive tokens** (`src/figma-tokens/`) have technical names like `Green-green06`, these tokens have semantic names like `success`, `primary`, `textPrimary`.## 📁 Estructura



---```

design-tokens/

## 📁 Structure├── index.ts .................... Export central

├── README.md ................... Este archivo

```├── semantic-colors.ts .......... Paleta semántica de colores

design-tokens/├── semantic-colors.css ......... Variables CSS de colores

├── index.ts .................... Central export└── typography/ ................. Sistema de tipografía

├── README.md ................... This file    ├── index.ts ................ Typography exports

├── semantic-colors.ts .......... Semantic color palette    ├── README.md ............... Documentación typography

├── semantic-colors.css ......... CSS color variables    ├── primitives.ts ........... Valores base (font sizes, weights, etc.)

└── typography/ ................. Typography system    ├── primitives.css .......... CSS primitives

    ├── index.ts ................ Typography exports    ├── semantic.ts ............. Tokens componentes (headings, body, etc.)

    ├── README.md ............... Typography documentation    └── semantic.css ............ CSS semantic tokens

    ├── primitives.ts ........... Base values (font sizes, weights, etc.)```

    ├── primitives.css .......... CSS primitive variables

    ├── semantic.ts ............. Component tokens (headings, body, etc.)## 🎨 Contenido

    └── semantic.css ............ CSS semantic tokens

```### `semantic-colors.ts/css`

Paleta de colores organizada por propósito:

---- **Brand Colors**: Colores primarios de marca

- **Neutral Colors**: Grises y negros

## 🎨 Contents- **Background Colors**: Fondos y tints

- **State Colors**: Info, success, warning, error

### `semantic-colors.ts/css`- **Button Colors**: Colores específicos para botones



Color palette organized by purpose:### `typography/`

- **Brand Colors**: Primary brand colorsSistema profesional de tipografía con dos capas:

- **Neutral Colors**: Greys and blacks- **Primitives**: Valores base (no usar directamente)

- **Background Colors**: Backgrounds and tints- **Semantics**: Tokens de componentes (h1-h7, body, labels, links) - **usar estos!**

- **State Colors**: Info, success, warning, error

- **Button Colors**: Button-specific colorsVer [`typography/README.md`](./typography/README.md) para documentación detallada.



### `typography/`## 🔗 Relación con Figma Tokens



Professional typography system with two layers:Estos tokens **refinan** los primitivos de Figma con significado semántico:

- **Primitives**: Base values (don't use directly)

- **Semantics**: Component tokens (h1-h7, body, labels, links) - **use these!**```

figma-tokens/              design-tokens/

See [`typography/README.md`](./typography/README.md) for detailed documentation.(Valores crudos)      →   (Significado contextual)

────────────────          ─────────────────────────

---Green-green06        →    colors.success

Primary-primaryMain  →    colors.brand.primary

## 🔗 Relationship with Figma TokensBW-primaryBlack      →    colors.neutral.textPrimary

```

These tokens **refine** Figma primitives with semantic meaning:

## ✅ Uso Recomendado

```

figma-tokens/              design-tokens/### En TypeScript/JavaScript

(Raw Values)          →   (Contextual Meaning)

────────────────          ────────────────────```typescript

Green-green06        →    colors.successimport { colors, buttonColors, typography } from '@/design-tokens';

Primary-primaryMain  →    colors.brand.primary

BW-primaryBlack      →    colors.neutral.textPrimary// Usar brand colors

```const primaryColor = colors.brand.primary; // '#a9e079'



---// Usar button colors

const bgColor = buttonColors.primaryBg; // '#a9e079'

## ✅ Recommended Usage

// Usar typography tokens (estructura moderna nested)

### In TypeScript/JavaScriptconst h1Styles = typography.headings.h1;

const bodyStyles = typography.body.large;

```typescriptconst labelStyles = typography.labels.small;

import { colors, buttonColors, typography } from '@/design-tokens';

// O usar estructura legacy flat (para compatibilidad)

// Use brand colorsimport { typographyLegacy } from '@/design-tokens';

const primaryColor = colors.brand.primary; // '#a9e079'const h1Styles = typographyLegacy['headings-h1'];

```

// Use button colors

const bgColor = buttonColors.primaryBg; // '#a9e079'### En CSS/CSS Modules



// Use typography tokens (modern nested structure)```css

const h1Styles = typography.headings.h1;/* Importar semantic colors CSS */

const bodyStyles = typography.body.large;@import '@/design-tokens/semantic-colors.css';

const labelStyles = typography.labels.small;@import '@/design-tokens/typography/semantic.css';



// Or use legacy flat structure (for compatibility).myButton {

import { typographyLegacy } from '@/design-tokens';  background-color: var(--color-button-primary-bg);

const h1Styles = typographyLegacy['headings-h1'];  color: var(--color-button-primary-text);

```  font-family: var(--typography-label-large-font-family);

}

### In CSS/CSS Modules

.myButton:hover {

```css  background-color: var(--color-button-primary-hover);

/* Import semantic colors CSS */}

@import '@/design-tokens/semantic-colors.css';

@import '@/design-tokens/typography/semantic.css';.heading {

  font-family: var(--typography-h1-font-family);

.myButton {  font-size: var(--typography-h1-font-size);

  background-color: var(--color-button-primary-bg);  font-weight: var(--typography-h1-font-weight);

  color: var(--color-button-primary-text);  line-height: var(--typography-h1-line-height);

  font-family: var(--typography-label-large-font-family);}

}```



.myButton:hover {### En React Components

  background-color: var(--color-button-primary-hover);

}```tsx

import { buttonColors, typography } from '@/design-tokens';

.heading {

  font-family: var(--typography-h1-font-family);function MyComponent() {

  font-size: var(--typography-h1-font-size);  return (

  font-weight: var(--typography-h1-font-weight);    <div style={{ 

  line-height: var(--typography-h1-line-height);      backgroundColor: buttonColors.primaryBg,

}      ...typography.headings.h1 

```    }}>

      Mi Componente

### In React Components    </div>

  );

```tsx}

import { buttonColors, typography } from '@/design-tokens';```



function MyComponent() {## 🎯 Best Practices

  return (

    <div style={{ 1. ✅ **Siempre** usa estos tokens semánticos en componentes

      backgroundColor: buttonColors.primaryBg,2. ❌ **NO** uses tokens primitivos de `figma-tokens/` directamente

      ...typography.headings.h1 3. ✅ **Prefiere** CSS variables en archivos CSS

    }}>4. ✅ **Usa** imports TypeScript cuando necesites valores dinámicos

      My Component5. ✅ **Consulta** Storybook para ver todos los tokens disponibles

    </div>

  );## 🔄 Actualización de Tokens

}

```### Cuándo Actualizar

- Cambios en colores de marca

---- Nuevos estados o variantes

- Ajustes en tipografía

## 🎯 Best Practices- Nuevos tokens semánticos necesarios



1. ✅ **Always** use these semantic tokens in components### Cómo Actualizar

2. ❌ **DON'T** use primitive tokens from `figma-tokens/` directly1. Editar archivos correspondientes en `src/design-tokens/`

3. ✅ **Prefer** CSS variables in CSS files2. Si necesitas nuevos primitivos, actualizar desde Figma primero

4. ✅ **Use** TypeScript imports when you need dynamic values3. Probar en Storybook

5. ✅ **Check** Storybook to see all available tokens4. Commit cambios



---## 📚 Ver También



## 🔄 Updating Tokens- [`src/figma-tokens/`](../figma-tokens/README.md) - Tokens primitivos de Figma

- [`typography/README.md`](./typography/README.md) - Sistema de tipografía completo

### When to Update- [`docs/ai-context/STRUCTURE-ANALYSIS.md`](../../docs/ai-context/STRUCTURE-ANALYSIS.md) - Análisis de estructura

- Brand color changes- Storybook: Design System → Typography / Tokens

- New states or variants needed      Content

- Typography adjustments    </div>

- New semantic tokens required  );

}

### How to Update```

1. Edit corresponding files in `src/design-tokens/`

2. If you need new primitives, update from Figma first## Color Categories

3. Test in Storybook

4. Commit changes### Brand Colors

- `primary`: Main Treez brand green (#a9e079)

---- `primaryDark`: Darker brand variant (#6baa32)

- `primaryText`: Dark green for text (#0f1709)

## 📚 Token Categories- `secondary`: Deep green for secondary elements (#1a4007)



### Brand Colors### Neutral Colors

- `black`, `white`

```typescript- `grey900` through `grey500`: Grey scale

colors.brand = {

  primary: '#a9e079',        // Main Treez brand green### Button Colors

  primaryDark: '#6baa32',    // Darker brand variantPre-defined colors for button states:

  primaryText: '#0f1709',    // Dark green for text- Primary (filled) buttons: `primaryBg`, `primaryText`, `primaryHover`, `primaryActive`

  secondary: '#1a4007',      // Deep green for secondary elements- Secondary (outlined) buttons: `secondaryBorder`, `secondaryText`, `secondaryHoverBg`, `secondaryActiveBg`

}- Tertiary (text) buttons: `tertiaryText`, `tertiaryHoverBg`, `tertiaryActiveBg`

```

### State Colors

### Neutral Colors- `info`: Blue for informational states

- `success`: Green for success states

```typescript- `warning`: Orange for warning states

colors.neutral = {- `error`: Red for error states

  black: '#1a1a1a',- `accent`: Yellow accent color

  white: '#ffffff',

  grey900: '#1f2937',## Updating Tokens

  grey800: '#374151',

  grey700: '#4b5563',Design tokens are extracted from Figma using the MCP workflow scripts in `/scripts/mcp`:

  grey600: '#6b7280',- `npm run mcp:extract` - Interactive design extraction

  grey500: '#9ca3af',- `npm run mcp:colors` - Extract color tokens

}- `npm run mcp:tokens` - Generate all tokens

```

See `/scripts/mcp/README.md` for detailed workflow instructions.

### Button Colors

After running extraction:

Pre-defined colors for button states:1. Update `semantic-colors.ts` with any new semantic mappings

2. Update `semantic-colors.css` with corresponding CSS variables

```typescript3. Typography tokens are auto-generated in `typography/tokens.ts` and `typography/tokens.css`

buttonColors = {4. Document any new color categories or typography styles

  // Primary (filled) buttons

  primaryBg: '#a9e079',## Best Practices

  primaryText: '#0f1709',

  primaryHover: '#8ccc52',1. **Use semantic colors**, not raw Figma colors

  primaryActive: '#6baa32',2. **Use CSS variables** in CSS files for consistency

  3. **Import from `@/design-tokens`** for TypeScript usage

  // Secondary (outlined) buttons4. **Update both `.ts` and `.css`** files when adding new semantic colors

  secondaryBorder: '#a9e079',5. **Document new color categories** in this README

  secondaryText: '#0f1709',
  secondaryHoverBg: '#f3fae6',
  secondaryActiveBg: '#e8f7cd',
  
  // Tertiary (text) buttons
  tertiaryText: '#0f1709',
  tertiaryHoverBg: '#f3fae6',
  tertiaryActiveBg: '#e8f7cd',
}
```

### State Colors

```typescript
colors.state = {
  info: '#3b82f6',      // Blue for informational states
  success: '#8ccc52',   // Green for success states
  warning: '#f59e0b',   // Orange for warning states
  error: '#dc2626',     // Red for error states
  accent: '#eab308',    // Yellow accent color
}
```

---

## 📖 Typography System

### Architecture

The typography system follows a **two-layer architecture**:

#### Layer 1: Primitives (Foundation)
Base typography values that define the design system's foundation:

```typescript
typography.primitives = {
  fontFamily: {
    primary: 'var(--font-family-roboto)',      // Roboto (headings)
    secondary: 'var(--font-family-circular)',  // Circular Std (body/UI)
  },
  fontSize: {
    xs: '12px',
    sm: '14px',
    md: '16px',
    // ... more sizes
  },
  // ... weights, lineHeights, etc.
}
```

#### Layer 2: Semantics (Component Tokens)
Context-specific tokens for actual component use:

```typescript
typography.headings = {
  h1: {
    fontFamily: 'var(--font-family-roboto)',
    fontSize: '48px',
    fontWeight: '600',
    lineHeight: '1.2',
    // ...
  },
  // ... h2-h7
}

typography.body = {
  large: { /* ... */ },
  medium: { /* ... */ },
  small: { /* ... */ },
}

typography.labels = {
  large: { /* ... */ },
  medium: { /* ... */ },
  small: { /* ... */ },
  xsmall: { /* ... */ },
}
```

### Usage Examples

```typescript
// ✅ DO: Use semantic tokens
import { typography } from '@/design-tokens';

// For headings
const h1Style = typography.headings.h1;

// For body text
const bodyStyle = typography.body.medium;

// For labels/UI
const labelStyle = typography.labels.small;

// ❌ DON'T: Use primitives directly
const badStyle = typography.primitives.fontSize.md; // Too generic
```

---

## 🎨 CSS Variables

All semantic tokens are available as CSS custom properties:

### Color Variables

```css
/* Brand */
--color-brand-primary: #a9e079;
--color-brand-primary-dark: #6baa32;

/* Button States */
--color-button-primary-bg: #a9e079;
--color-button-primary-hover: #8ccc52;
--color-button-primary-active: #6baa32;

/* Text */
--color-text-primary: #1f2937;
--color-text-secondary: #6b7280;
```

### Typography Variables

```css
/* Heading 1 */
--typography-h1-font-family: var(--font-family-roboto);
--typography-h1-font-size: 48px;
--typography-h1-font-weight: 600;
--typography-h1-line-height: 1.2;

/* Body Medium */
--typography-body-medium-font-family: var(--font-family-circular);
--typography-body-medium-font-size: 16px;
--typography-body-medium-font-weight: 400;
```

---

## 🔍 Finding Tokens

### In Storybook

1. Navigate to **Design System → Tokens**
2. Browse color categories
3. View typography examples
4. Copy token names for use

### In Code

```typescript
// Import everything
import * as tokens from '@/design-tokens';

// Or import specific categories
import { colors, buttonColors, typography } from '@/design-tokens';
import { typographyLegacy } from '@/design-tokens';
```

---

## 🛠️ Maintenance

### Adding New Semantic Colors

1. **Edit `semantic-colors.ts`:**
   ```typescript
   export const colors = {
     // ... existing
     myNewCategory: {
       primary: primitives.greenColors['Green-green06'],
       secondary: primitives.bwColors['BW-primaryBlack'],
     }
   };
   ```

2. **Update `semantic-colors.css`:**
   ```css
   :root {
     /* ... existing */
     --color-my-new-category-primary: #8ccc52;
     --color-my-new-category-secondary: #1a1a1a;
   }
   ```

3. **Export from `index.ts`** if needed

4. **Document** in this README

5. **Test** in Storybook

### Updating Typography

See [`typography/README.md`](./typography/README.md) for typography-specific maintenance.

---

## 📚 Related Documentation

- [`src/figma-tokens/`](../figma-tokens/README.md) - Primitive tokens from Figma
- [`typography/README.md`](./typography/README.md) - Complete typography system
- [`docs/ai-context/STRUCTURE-ANALYSIS.md`](../../docs/ai-context/STRUCTURE-ANALYSIS.md) - Structure analysis
- Storybook: Design System → Typography / Tokens

---

## 🎯 Key Takeaways

1. **Semantic tokens** = Contextual meaning for components
2. **Use these** = Not primitive tokens
3. **CSS variables** = Available for all tokens
4. **Two-layer system** = Primitives → Semantics
5. **Storybook** = Visual reference for all tokens

---

**Remember:** Always use semantic tokens in components. Primitive tokens from `figma-tokens/` are building blocks only.
