# TreezDS - Análisis de Estructura Actual

**Fecha:** 2025-10-18  
**Estado:** Después de limpieza de demos de Storybook

## 📊 Estado Actual de la Estructura

### ✅ COMPONENTES (`src/components/`)
**Estado: BIEN ORGANIZADO**

```
components/
├── index.ts ...................... ✅ Exports centralizados
├── Button/
│   ├── Button.tsx ................ ✅ Componente principal
│   ├── Button.module.css ......... ✅ Estilos con CSS modules
│   ├── Button.stories.tsx ........ ✅ Stories de Storybook
│   └── index.ts .................. ✅ Exports del componente
├── Typography/
│   ├── Typography.tsx ............ ✅ Componente principal
│   ├── Typography.module.css ..... ✅ Estilos con CSS modules
│   ├── Typography.stories.tsx .... ✅ Stories de Storybook
│   └── index.ts .................. ✅ Exports del componente
└── Icon/
    ├── Icon.tsx .................. ✅ Componente principal
    ├── Icon.module.css ........... ✅ Estilos con CSS modules
    ├── Icon.stories.tsx .......... ✅ Stories de Storybook
    ├── iconData.ts ............... ✅ Datos de iconos
    └── index.ts .................. ✅ Exports del componente
```

**✅ Patrón consistente:**
- Cada componente en su carpeta
- CSS Modules para estilos encapsulados
- Stories para documentación
- index.ts para exports limpios

---

### ⚠️ TOKENS - DUPLICACIÓN DETECTADA

Tienes **DOS carpetas de tokens** con propósitos diferentes:

#### 1️⃣ `src/tokens/` (Tokens primitivos de Figma)
```
tokens/
├── README.md
├── index.ts
├── colors/
│   ├── colors.ts ................. 🔵 Primitivos de Figma
│   ├── colors.css ................ 🔵 Variables CSS primitivas
│   └── colors.json ............... 🔵 Data cruda de Figma
├── spacing/
│   ├── spacing.ts ................ 🔵 Primitivos de Figma
│   ├── spacing.css ............... 🔵 Variables CSS primitivas
│   └── spacing.json .............. 🔵 Data cruda de Figma
└── radius/
    ├── radius.ts ................. 🔵 Primitivos de Figma
    ├── radius.css ................ 🔵 Variables CSS primitivas
    └── radius.json ............... 🔵 Data cruda de Figma
```

**Contenido:** Tokens auto-generados desde Figma
- Green colors (green01-10)
- Primary colors (primaryMain, primaryLight, primaryDark)
- B&W colors
- Spacing values
- Radius values

#### 2️⃣ `src/design-tokens/` (Tokens semánticos refinados)
```
design-tokens/
├── README.md
├── index.ts
├── semantic-colors.ts ............ 🟢 Colores semánticos
├── semantic-colors.css ........... 🟢 Variables CSS semánticas
└── typography/
    ├── index.ts
    ├── README.md
    ├── primitives.ts ............. 🟢 Valores base tipografía
    ├── primitives.css ............ 🟢 Variables CSS base
    ├── semantic.ts ............... 🟢 Tokens semánticos (h1-h7, body, labels)
    └── semantic.css .............. 🟢 Variables CSS semánticas
```

**Contenido:** Tokens refinados manualmente
- Semantic colors (success, error, warning, info, etc.)
- Typography system (primitive + semantic)

---

## 🎯 Propuesta de Reorganización

### Opción A: Mantener Separación (RECOMENDADO)
**Razón:** Clara distinción entre auto-generado vs manual

```
src/
├── tokens/ ........................ 🔵 PRIMITIVOS (Figma)
│   ├── colors/
│   ├── spacing/
│   └── radius/
│
└── design-tokens/ ................. 🟢 SEMÁNTICOS (Manual)
    ├── semantic-colors/
    └── typography/
```

**✅ Ventajas:**
- Clara separación de responsabilidades
- Scripts de Figma no afectan tokens semánticos
- Fácil identificar qué es auto-generado vs manual

**Mejoras necesarias:**
1. Renombrar `tokens/` → `tokens/primitives/` o `figma-tokens/`
2. Documentar claramente la diferencia
3. Agregar README en cada carpeta explicando el propósito

---

### Opción B: Unificar Todo en `design-tokens/`
```
design-tokens/
├── primitives/ .................... 🔵 Auto-generados de Figma
│   ├── colors/
│   ├── spacing/
│   └── radius/
│
└── semantic/ ...................... 🟢 Refinados manualmente
    ├── colors/
    └── typography/
```

**❌ Desventaja:**
- Mezcla archivos auto-generados con manuales
- Mayor riesgo de editar por error archivos generados

---

## 📁 Otras Carpetas

### `src/stories/`
**Estado: ✅ LIMPIO** (después de eliminar demos)
```
stories/
└── Tokens.stories.tsx ............ ✅ Tu story real
```

### `src/styles/`
**Estado: ✅ BIEN ORGANIZADO**
```
styles/
└── fonts.css ..................... ✅ @font-face + variables centralizadas
```

### `src/assets/`
```
assets/
└── icons/ ........................ ✅ SVG icons
```

---

## 📋 Plan de Acción Sugerido

### Fase 1: Clarificar Estructura de Tokens
**Decisión necesaria:** ¿Opción A o B?

Si eliges **Opción A** (recomendada):

1. **Renombrar carpetas:**
   ```bash
   mv src/tokens src/figma-tokens
   # o
   mv src/tokens src/tokens-primitives
   ```

2. **Actualizar imports:**
   - Buscar todos los imports de `'@/tokens'`
   - Cambiar a `'@/figma-tokens'` o el nuevo nombre

3. **Documentar:**
   - README en `figma-tokens/` explicando: "Auto-generados de Figma, NO EDITAR"
   - README en `design-tokens/` explicando: "Tokens semánticos refinados manualmente"

### Fase 2: Consolidar Colores (Opcional)
Si `semantic-colors.ts` usa valores de `figma-tokens/colors/`, podría tener sentido:

```typescript
// design-tokens/semantic/colors.ts
import { greenColors, primaryColors } from '@/figma-tokens/colors';

export const semanticColors = {
  success: greenColors['Green-green06'],
  error: /* ... */,
  // etc
};
```

### Fase 3: Storybook - Tokens Story
Crear una story que documente la jerarquía:

```typescript
// Tokens.stories.tsx
export const PrimitiveVsSemantic = {
  render: () => (
    <div>
      <h2>Primitivos (Figma)</h2>
      <p>Valores crudos: Green-green06, Primary-primaryMain</p>
      
      <h2>Semánticos (Design System)</h2>
      <p>Significado: success, error, textPrimary</p>
    </div>
  )
};
```

---

## 🎨 Estructura Ideal Sugerida

```
src/
├── components/           ✅ Ya está perfecto
│   ├── Button/
│   ├── Typography/
│   └── Icon/
│
├── figma-tokens/         🔵 NUEVO NOMBRE (auto-generado)
│   ├── README.md         "⚠️ Auto-generado - NO EDITAR"
│   ├── colors/
│   ├── spacing/
│   └── radius/
│
├── design-tokens/        🟢 Tokens semánticos (manual)
│   ├── README.md         "✏️ Tokens refinados manualmente"
│   ├── semantic-colors/
│   │   ├── semantic-colors.ts
│   │   └── semantic-colors.css
│   └── typography/
│       ├── primitives.ts
│       ├── primitives.css
│       ├── semantic.ts
│       └── semantic.css
│
├── styles/               ✅ Ya está perfecto
│   └── fonts.css
│
├── stories/              ✅ Ya está perfecto
│   └── Tokens.stories.tsx
│
└── assets/               ✅ Ya está perfecto
    └── icons/
```

---

## 🚀 Próximos Pasos

1. **Decisión:** ¿Quieres mantener separación (Opción A) o unificar (Opción B)?
2. **Renombrar:** Ajustar nombres de carpetas según decisión
3. **Actualizar imports:** Reflejar nuevos nombres en el código
4. **Documentar:** READMEs claros en cada carpeta
5. **Commit:** Hacer commit con mensaje descriptivo

---

## ✅ Lo que YA está bien

- ✅ Componentes con patrón consistente
- ✅ CSS Modules para encapsulación
- ✅ Stories de Storybook documentadas
- ✅ Typography con arquitectura primitiva/semántica
- ✅ Fonts centralizados en CSS variables
- ✅ Demos de Storybook eliminados
- ✅ Exports centralizados con index.ts

## ⚠️ Lo que necesita atención

- ⚠️ Dos carpetas de tokens sin naming claro
- ⚠️ Falta documentación sobre la diferencia primitivo/semántico
- ⚠️ Posible confusión entre `tokens/` y `design-tokens/`

---

**Recomendación final:** Opción A con renaming a `figma-tokens/` + documentación clara
