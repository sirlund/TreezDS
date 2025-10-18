# Figma Tokens (Primitivos)# Figma Tokens (Primitivos)



⚠️ **ESTOS ARCHIVOS SON AUTO-GENERADOS DESDE FIGMA**  ⚠️ **ESTOS ARCHIVOS SON AUTO-GENERADOS DESDE FIGMA**  

❌ **NO EDITAR MANUALMENTE**❌ **NO EDITAR MANUALMENTE**



## 📋 Descripción## 📋 Descripción



Esta carpeta contiene **tokens primitivos** extraídos directamente de Figma mediante scripts automáticos. Estos son los valores base crudos del diseño.Esta carpeta contiene **tokens primitivos** extraídos directamente de Figma mediante scripts automáticos. Estos son los valores base crudos del diseño.



## 🔄 Actualización desde Figma## 🔄 Actualización



Para actualizar estos tokens desde Figma:Para actualizar estos tokens desde Figma:



```bash```bash

npm run tokens:transformnpm run tokens:transform

``````



Este comando:Este comando:

1. Extrae estilos de Figma1. Extrae estilos de Figma

2. Transforma los datos2. Transforma los datos

3. Genera archivos TS, CSS y JSON3. Genera archivos TS, CSS y JSON



## 📁 Estructura## 📁 Estructura



``````

figma-tokens/figma-tokens/

├── colors/├── colors/

│   ├── colors.ts .......... Exports TypeScript│   ├── colors.ts      # TypeScript color constants

│   ├── colors.css ......... Variables CSS│   ├── colors.css     # CSS custom properties

│   └── colors.json ........ Data cruda de Figma│   └── colors.json    # Raw token data from Figma

├── spacing/├── spacing/

│   ├── spacing.ts│   ├── spacing.ts     # TypeScript spacing constants

│   ├── spacing.css│   ├── spacing.css    # CSS custom properties

│   └── spacing.json│   └── spacing.json   # Raw token data from Figma

├── radius/├── radius/

│   ├── radius.ts│   ├── radius.ts      # TypeScript radius constants

│   ├── radius.css│   ├── radius.css     # CSS custom properties

│   └── radius.json│   └── radius.json    # Raw token data from Figma

└── index.ts ............... Central export└── index.ts           # Central export file

``````



## 🎨 Contenido## 🎨 Token Categories



### Colors (63 tokens)### Colors (63 tokens)

- **Green Palette**: `Green-green01` → `Green-green10`- **Green Palette**: `Green-green01` → `Green-green10`

- **Primary Colors**: `Primary-primaryMain`, `Primary-primaryLight`, `Primary-primaryDark`- **Primary Colors**: `Primary-primaryMain`, `Primary-primaryLight`, `Primary-primaryDark`

- **System Colors**: Success, Error, Warning, Info (con variantes Main, Light, Dark)- **System Colors**: Success, Error, Warning, Info (with Main, Light, Dark variants)

- **Text Colors**: Primary, secondary, tertiary, disabled- **Text Colors**: Primary, secondary, tertiary, disabled

- **Greyscale**: Escala de 10 grises- **Greyscale**: 10-step grey scale

- **B&W**: `BW-primaryBlack`, `BW-primaryWhite`- **B&W**: `BW-primaryBlack`, `BW-primaryWhite`

- **Secondary Colors**: Brown, Orange, Peach, Blue, Purple, Yellow- **Secondary Colors**: Brown, Orange, Peach, Blue, Purple, Yellow (with 00, 01, 02 variants)



### Spacing (17 tokens)### Spacing (17 tokens)

- **Spacing Scale**: none, 3x-small → 3x-large (0px a 48px)- **Spacing Scale**: none, 3x-small → 3x-large (0px to 48px)

- **Size Scale (Beta)**: x-small → 3x-large (12px a 64px)- **Size Scale (Beta)**: x-small → 3x-large (12px to 64px)



### Radius (9 tokens)### Radius (9 tokens)

- **Border Radius**: none, 2x-small → 2x-large, full (0px a 9999px)- **Border Radius**: none, 2x-small → 2x-large, full (0px to 9999px)



## 🔗 Relación con Design Tokens## � Relación con Design Tokens



Estos tokens primitivos son la **base** para los tokens semánticos:Estos tokens primitivos son la **base** para los tokens semánticos en `src/design-tokens/`:



``````

figma-tokens/              design-tokens/figma-tokens/              design-tokens/

(Primitivos)          →   (Semánticos)(Primitivos de Figma) →   (Semánticos refinados)

──────────────            ───────────────────────────────         ────────────────────

Green-green06        →    colors.successGreen-green06         →    colors.success

Primary-primaryMain  →    colors.primaryPrimary-primaryMain   →    colors.primary

BW-primaryBlack      →    colors.textPrimaryBW-primaryBlack      →    colors.textPrimary

``````



Los **tokens semánticos** (`src/design-tokens/`) referencian estos primitivos y les dan significado contextual para uso en componentes.Los **tokens semánticos** referencian estos primitivos y les dan significado contextual para componentes.



## ⚠️ Importante## ⚠️ Importante



- ✅ **SÍ** usar estos valores en `src/design-tokens/` para crear tokens semánticos- ✅ **SÍ** usar estos valores en `src/design-tokens/` para crear tokens semánticos

- ❌ **NO** editar estos archivos manualmente (se sobrescribirán)- ❌ **NO** editar estos archivos manualmente (se sobrescribirán en próxima extracción)

- ❌ **NO** importar directamente en componentes (usar tokens semánticos)- ❌ **NO** importar directamente en componentes (usar tokens semánticos en su lugar)



## 📖 Usage (Solo referencia)## �📖 Usage (Solo para referencia)



⚠️ **Preferiblemente usa tokens de `src/design-tokens/` en lugar de estos primitivos.**### TypeScript/React



### TypeScript/React```typescript

import { primaryColors, spacing, radius } from '@/tokens';

```typescript

import { primaryColors, spacing, radius } from '@/figma-tokens';function MyComponent() {

  return (

function MyComponent() {    <div style={{

  return (      backgroundColor: primaryColors['Primary-primaryMain'],

    <div style={{      padding: spacing['space-medium'],

      backgroundColor: primaryColors['Primary-primaryMain'],      borderRadius: radius['radius-medium']

      padding: spacing['space-medium'],    }}>

      borderRadius: radius['radius-medium']      Content

    }}>    </div>

      Content  );

    </div>}

  );```

}

```### CSS



### CSS```css

/* Import token CSS files */

```css@import '@/tokens/colors/colors.css';

@import '@/figma-tokens/colors/colors.css';@import '@/tokens/spacing/spacing.css';

@import '@/figma-tokens/spacing/spacing.css';@import '@/tokens/radius/radius.css';

@import '@/figma-tokens/radius/radius.css';

.my-component {

.my-component {  background-color: var(--color-primary-primarymain);

  background-color: var(--color-primary-primarymain);  padding: var(--spacing-space-medium);

  padding: var(--spacing-space-medium);  border-radius: var(--radius-radius-medium);

  border-radius: var(--radius-radius-medium);}

}```

```

### CSS Modules

## 🔄 Proceso de Actualización

```css

### Paso 1: Exportar desde Figma@import '@/tokens/colors/colors.css';

1. En Figma: **Plugins → Export Variables**

2. Exportar a formato JSON.button {

3. Guardar en `/imported-from-figma/`:  background-color: var(--color-primary-primarymain);

   - `Colors.json`  color: var(--color-text-primaryblacktext);

   - `Shapes.json`}

   - `Size&Spacing.json`

.button:hover {

### Paso 2: Transformar Tokens  background-color: var(--color-primary-primarydark);

```bash}

npm run tokens:transform```

```

## 🔄 Updating Tokens

### Paso 3: Revisar Cambios

Verificar archivos generados y revisar en Storybook:### Step 1: Export from Figma

- **Design System → Tokens**1. In Figma, select **Plugins → Export Variables**

2. Export to JSON format

## 📚 Ver También3. Save files to `/imported-from-figma/` folder:

   - `Colors.json`

- [`src/design-tokens/`](../design-tokens/README.md) - **Tokens semánticos (usar estos)**   - `Shapes.json`

- [`docs/ai-context/STRUCTURE-ANALYSIS.md`](../../docs/ai-context/STRUCTURE-ANALYSIS.md) - Análisis completo   - `Size&Spacing.json`

- Storybook: Design System → Tokens

### Step 2: Transform Tokens
```bash
npm run tokens:transform
```

This will regenerate all token files in `src/tokens/`.

### Step 3: Review Changes
Check the generated files and verify in Storybook:
- **Design System → Tokens → Overview**
- **Design System → Tokens → Colors**
- **Design System → Tokens → Spacing**
- **Design System → Tokens → Radius**

## 📋 Token Naming Conventions

### TypeScript
- CamelCase keys: `primaryColors['Primary-primaryMain']`
- Descriptive categories: `brandColors`, `systemColors`, `textColors`

### CSS Variables
- Kebab-case: `--color-primary-primarymain`
- Prefixed by category: `--color-*`, `--spacing-*`, `--radius-*`
- RGB variants available: `--color-primary-primarymain-rgb`

## 🎯 Best Practices

1. **Always use tokens** instead of hardcoded values
2. **Import from central location**: `import { colors } from '@/tokens'`
3. **Use CSS variables in stylesheets** for consistency
4. **Check Storybook** documentation before choosing tokens
5. **Keep tokens synced with Figma** by running transform script regularly

## 📊 Token Statistics

- **Total Tokens**: 89
  - Colors: 63
  - Spacing: 17
  - Radius: 9
- **Auto-generated**: ✅ All files generated from Figma
- **Type-safe**: ✅ TypeScript types for all tokens
- **CSS Ready**: ✅ Custom properties for all tokens

## 🔗 Related Documentation

- **Storybook**: Design System → Tokens
- **Figma**: [Treez Design System](https://figma.com/file/zPEk7VNZnVzhGaNCnalP6o)
- **Transform Script**: `/scripts/transform-figma-tokens.js`

## ❓ FAQ

**Q: Why do color CSS variable names not match TypeScript names exactly?**
A: CSS variables are automatically lowercased for consistency. TypeScript preserves the original Figma naming.

**Q: Can I manually edit the generated files?**
A: No. All files in `src/tokens/` are auto-generated. Edit the transform script or Figma source instead.

**Q: How do I add new tokens?**
A: Add them in Figma, export variables, and run `npm run tokens:transform`.

**Q: What's the difference between spacing and size tokens?**
A: Spacing is for gaps/padding/margins. Size is for component dimensions (width/height). Size tokens are currently in beta.

---

**Last Generated**: Run `npm run tokens:transform` to regenerate
**Source**: Figma Variables Export
