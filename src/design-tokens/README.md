# Design Tokens (Semánticos)

✏️ **TOKENS REFINADOS MANUALMENTE**  
✅ **USAR ESTOS EN COMPONENTES**

## 📋 Descripción

Esta carpeta contiene **tokens semánticos** refinados manualmente. Estos tokens tienen significado contextual y son los que debes usar en componentes.

Mientras que los **tokens primitivos** (`src/figma-tokens/`) tienen nombres técnicos como `Green-green06`, estos tokens tienen nombres semánticos como `success`, `primary`, `textPrimary`.

## 📁 Estructura

```
design-tokens/
├── index.ts .................... Export central
├── README.md ................... Este archivo
├── semantic-colors.ts .......... Paleta semántica de colores
├── semantic-colors.css ......... Variables CSS de colores
└── typography/ ................. Sistema de tipografía
    ├── index.ts ................ Typography exports
    ├── README.md ............... Documentación typography
    ├── primitives.ts ........... Valores base (font sizes, weights, etc.)
    ├── primitives.css .......... CSS primitives
    ├── semantic.ts ............. Tokens componentes (headings, body, etc.)
    └── semantic.css ............ CSS semantic tokens
```

## 🎨 Contenido

### `semantic-colors.ts/css`
Paleta de colores organizada por propósito:
- **Brand Colors**: Colores primarios de marca
- **Neutral Colors**: Grises y negros
- **Background Colors**: Fondos y tints
- **State Colors**: Info, success, warning, error
- **Button Colors**: Colores específicos para botones

### `typography/`
Sistema profesional de tipografía con dos capas:
- **Primitives**: Valores base (no usar directamente)
- **Semantics**: Tokens de componentes (h1-h7, body, labels, links) - **usar estos!**

Ver [`typography/README.md`](./typography/README.md) para documentación detallada.

## 🔗 Relación con Figma Tokens

Estos tokens **refinan** los primitivos de Figma con significado semántico:

```
figma-tokens/              design-tokens/
(Valores crudos)      →   (Significado contextual)
────────────────          ─────────────────────────
Green-green06        →    colors.success
Primary-primaryMain  →    colors.brand.primary
BW-primaryBlack      →    colors.neutral.textPrimary
```

## ✅ Uso Recomendado

### En TypeScript/JavaScript

```typescript
import { colors, buttonColors, typography } from '@/design-tokens';

// Usar brand colors
const primaryColor = colors.brand.primary; // '#a9e079'

// Usar button colors
const bgColor = buttonColors.primaryBg; // '#a9e079'

// Usar typography tokens (estructura moderna nested)
const h1Styles = typography.headings.h1;
const bodyStyles = typography.body.large;
const labelStyles = typography.labels.small;

// O usar estructura legacy flat (para compatibilidad)
import { typographyLegacy } from '@/design-tokens';
const h1Styles = typographyLegacy['headings-h1'];
```

### En CSS/CSS Modules

```css
/* Importar semantic colors CSS */
@import '@/design-tokens/semantic-colors.css';
@import '@/design-tokens/typography/semantic.css';

.myButton {
  background-color: var(--color-button-primary-bg);
  color: var(--color-button-primary-text);
  font-family: var(--typography-label-large-font-family);
}

.myButton:hover {
  background-color: var(--color-button-primary-hover);
}

.heading {
  font-family: var(--typography-h1-font-family);
  font-size: var(--typography-h1-font-size);
  font-weight: var(--typography-h1-font-weight);
  line-height: var(--typography-h1-line-height);
}
```

### En React Components

```tsx
import { buttonColors, typography } from '@/design-tokens';

function MyComponent() {
  return (
    <div style={{ 
      backgroundColor: buttonColors.primaryBg,
      ...typography.headings.h1 
    }}>
      Mi Componente
    </div>
  );
}
```

## 🎯 Best Practices

1. ✅ **Siempre** usa estos tokens semánticos en componentes
2. ❌ **NO** uses tokens primitivos de `figma-tokens/` directamente
3. ✅ **Prefiere** CSS variables en archivos CSS
4. ✅ **Usa** imports TypeScript cuando necesites valores dinámicos
5. ✅ **Consulta** Storybook para ver todos los tokens disponibles

## 🔄 Actualización de Tokens

### Cuándo Actualizar
- Cambios en colores de marca
- Nuevos estados o variantes
- Ajustes en tipografía
- Nuevos tokens semánticos necesarios

### Cómo Actualizar
1. Editar archivos correspondientes en `src/design-tokens/`
2. Si necesitas nuevos primitivos, actualizar desde Figma primero
3. Probar en Storybook
4. Commit cambios

## 📚 Ver También

- [`src/figma-tokens/`](../figma-tokens/README.md) - Tokens primitivos de Figma
- [`typography/README.md`](./typography/README.md) - Sistema de tipografía completo
- [`docs/ai-context/STRUCTURE-ANALYSIS.md`](../../docs/ai-context/STRUCTURE-ANALYSIS.md) - Análisis de estructura
- Storybook: Design System → Typography / Tokens
      Content
    </div>
  );
}
```

## Color Categories

### Brand Colors
- `primary`: Main Treez brand green (#a9e079)
- `primaryDark`: Darker brand variant (#6baa32)
- `primaryText`: Dark green for text (#0f1709)
- `secondary`: Deep green for secondary elements (#1a4007)

### Neutral Colors
- `black`, `white`
- `grey900` through `grey500`: Grey scale

### Button Colors
Pre-defined colors for button states:
- Primary (filled) buttons: `primaryBg`, `primaryText`, `primaryHover`, `primaryActive`
- Secondary (outlined) buttons: `secondaryBorder`, `secondaryText`, `secondaryHoverBg`, `secondaryActiveBg`
- Tertiary (text) buttons: `tertiaryText`, `tertiaryHoverBg`, `tertiaryActiveBg`

### State Colors
- `info`: Blue for informational states
- `success`: Green for success states
- `warning`: Orange for warning states
- `error`: Red for error states
- `accent`: Yellow accent color

## Updating Tokens

Design tokens are extracted from Figma using the MCP workflow scripts in `/scripts/mcp`:
- `npm run mcp:extract` - Interactive design extraction
- `npm run mcp:colors` - Extract color tokens
- `npm run mcp:tokens` - Generate all tokens

See `/scripts/mcp/README.md` for detailed workflow instructions.

After running extraction:
1. Update `semantic-colors.ts` with any new semantic mappings
2. Update `semantic-colors.css` with corresponding CSS variables
3. Typography tokens are auto-generated in `typography/tokens.ts` and `typography/tokens.css`
4. Document any new color categories or typography styles

## Best Practices

1. **Use semantic colors**, not raw Figma colors
2. **Use CSS variables** in CSS files for consistency
3. **Import from `@/design-tokens`** for TypeScript usage
4. **Update both `.ts` and `.css`** files when adding new semantic colors
5. **Document new color categories** in this README
