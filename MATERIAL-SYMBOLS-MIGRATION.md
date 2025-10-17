# 🔄 Migración a Material Symbols (Variable Font)

## 📋 Cambios Implementados

### ❌ ANTES: Material Icons (Viejo - SVGs estáticos)
- Usaba `@mui/icons-material` con SVGs pre-compilados
- Variantes fijas (Filled, Outlined, Rounded, Sharp, TwoTone)
- Sin customización dinámica
- Bundle size mayor

### ✅ DESPUÉS: Material Symbols (Nuevo - Variable Font)
- Usa Google Fonts Material Symbols Rounded
- **Variable font** con configuración dinámica
- Especificaciones Treez DS:
  - **Variant**: Rounded
  - **Weight**: 400
  - **Grade**: 0 (Normal)
  - **Optical Size**: 20px
  - **Fill**: 0 (No fill / Outlined)
- Bundle size menor
- Mejor rendimiento

---

## 🔧 Archivos Modificados

### 1. `index.html`
**Agregado**: Link a Material Symbols font de Google

```html
<!-- Material Symbols Rounded (Variable Font) -->
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
```

### 2. `.storybook/preview-head.html` (NUEVO)
**Creado** para que Storybook también cargue Material Symbols

### 3. `src/components/Icon/Icon.tsx`
**Cambios**:
- ❌ Removido: `import * as MuiIcons from '@mui/icons-material'`
- ❌ Removido: `import { SvgIcon } from '@mui/material'`
- ❌ Removido: `materialIconMap` (ya no se necesita mapeo a PascalCase)
- ✅ Agregado: Renderizado con clase `.materialSymbol`
- ✅ Simplificado: Los iconos se muestran usando ligaduras de fuente

**Antes**:
```tsx
const MuiIconComponent = (MuiIcons as any)[`${muiIconName}Rounded`];
return (
  <SvgIcon component={MuiIconComponent} />
);
```

**Después**:
```tsx
return (
  <span className={`${iconClasses} ${styles.materialSymbol}`}>
    {name}
  </span>
);
```

### 4. `src/components/Icon/Icon.module.css`
**Agregado**: Clase `.materialSymbol` con configuración de variable font

```css
.materialSymbol {
  font-family: 'Material Symbols Rounded';
  font-variation-settings: 
    'FILL' 0,    /* No fill (outlined) */
    'wght' 400,  /* Weight 400 */
    'GRAD' 0,    /* Grade 0 (Normal) */
    'opsz' 20;   /* Optical size 20px */
}
```

### 5. `src/components/Icon/materialIconMap.ts`
**Simplificado**: Ya no necesita mapeo a PascalCase

**Antes**:
```typescript
export const materialIconMap = {
  settings: 'Settings',
  account_circle: 'AccountCircle',
  // ...
} as const;
```

**Después**:
```typescript
export const materialSymbolNames = [
  'settings',
  'account_circle',
  // ...
] as const;
```

Los nombres ahora se usan directamente (snake_case) porque Material Symbols los renderiza mediante ligaduras de fuente.

---

## 📦 Dependencias

### Puede Removerse (Opcional)
- `@mui/icons-material`: Ya no se utiliza para Material icons
- `@mui/material`: Solo si no se usa SvgIcon en otro lugar

**Nota**: Puedes mantener estas dependencias si las necesitas para otros componentes.

---

## 🎨 Cómo Funciona Material Symbols

### Variable Font
Material Symbols usa **OpenType variable fonts** con 4 ejes:

| Eje | Configuración | Valor Treez DS |
|-----|---------------|----------------|
| `FILL` | 0 = outlined, 1 = filled | **0** (outlined) |
| `wght` | 100-700 | **400** |
| `GRAD` | -50 a 200 | **0** (normal) |
| `opsz` | 20-48 | **20** |

### Ligaduras de Fuente
Los iconos se renderizan usando **font ligatures**:
- Escribes: `settings`
- La fuente convierte automáticamente a: ⚙️

Esto es más eficiente que cargar SVGs individuales.

---

## 🔍 Búsqueda de Iconos

### Google Fonts Icons
URL: https://fonts.google.com/icons

**Filtros recomendados**:
- **Style**: Rounded
- **Categories**: Las que necesites

**Cómo agregar un icono**:
1. Busca el icono en Google Fonts
2. Copia el nombre (snake_case)
3. Agrega a `materialSymbolNames` en `materialIconMap.ts`
4. Usa directamente: `<Icon name="nuevo_icono" />`

---

## 📝 Ejemplo: Agregar Nuevo Icono

### 1. Buscar en Google Fonts
https://fonts.google.com/icons?icon.style=Rounded

Ejemplo: Quieres agregar "shopping_cart"

### 2. Actualizar materialIconMap.ts

```typescript
export const materialSymbolNames = [
  'account_circle',
  // ... otros iconos
  'shopping_cart', // ← Agregar aquí (en orden alfabético)
  'settings',
  // ...
] as const;
```

### 3. Usar el icono

```tsx
<Icon name="shopping_cart" size="m" />
```

¡Eso es todo! No necesitas importar nada ni configurar componentes.

---

## 🎯 Ventajas de Material Symbols

### 1. Bundle Size Menor
- **Antes**: Cada SVG ~2-5KB
- **Después**: Una fuente variable ~60KB para TODOS los iconos

### 2. Carga Más Rápida
- La fuente se cachea una vez
- No hay requests individuales por icono

### 3. Customización Dinámica
- Puedes cambiar `FILL`, `wght`, `GRAD`, `opsz` en CSS
- No necesitas variantes separadas

### 4. Consistencia Visual
- Todos los iconos tienen el mismo grosor de línea
- Mejor alineación óptica

### 5. Más Iconos Disponibles
- Google tiene 2500+ Material Symbols
- Constantemente actualizados

---

## 🛠️ Troubleshooting

### Problema: Los iconos no se ven

**Causa**: La fuente no cargó correctamente

**Solución**:
1. Verifica que `index.html` tenga el `<link>` a Material Symbols
2. Verifica que `.storybook/preview-head.html` exista
3. Revisa la consola del navegador por errores de carga

### Problema: Los iconos se ven como texto

**Causa**: Falta la clase `.materialSymbol` o configuración CSS

**Solución**:
1. Verifica que `Icon.module.css` tenga la clase `.materialSymbol`
2. Asegúrate que el componente Icon aplica `styles.materialSymbol`
3. Revisa que `font-variation-settings` esté configurado

### Problema: Un icono específico no existe

**Causa**: El nombre no existe en Material Symbols

**Solución**:
1. Busca en https://fonts.google.com/icons
2. Verifica el nombre exacto (snake_case)
3. Si no existe, considera usar un custom icon SVG

---

## 📊 Comparación Antes/Después

| Aspecto | Material Icons | Material Symbols |
|---------|---------------|------------------|
| Tecnología | SVG estático | Variable Font |
| Tamaño | ~4KB por icono | ~60KB total |
| Variantes | 5 fijas | Customizable |
| Carga | Por demanda | Una vez |
| Configuración | Importar componente | Escribir nombre |
| TypeScript | Importar tipos | Auto-inferido |
| Bundle | Más pesado | Más ligero |
| Flexibilidad | Baja | Alta |

---

## ✅ Checklist Post-Migración

- [x] `index.html` tiene link a Material Symbols
- [x] `.storybook/preview-head.html` creado
- [x] `Icon.tsx` actualizado (sin MUI imports)
- [x] `Icon.module.css` tiene clase `.materialSymbol`
- [x] `materialIconMap.ts` simplificado
- [ ] Storybook funciona correctamente
- [ ] Todos los iconos se ven con estilo Rounded
- [ ] Los iconos tienen optical size 20px
- [ ] El weight es 400
- [ ] No hay fill (outlined)

---

## 🎨 Configuración Figma → CSS

| Propiedad Figma | CSS Variable Font | Valor |
|-----------------|-------------------|-------|
| Material Symbols Rounded | `font-family` | `'Material Symbols Rounded'` |
| Weight: 400 | `'wght'` | `400` |
| Grade: 0 | `'GRAD'` | `0` |
| Optical Size: 20 | `'opsz'` | `20` |
| Fill: No | `'FILL'` | `0` |

Ahora el CSS refleja **exactamente** las especificaciones de Figma.

---

**Fecha**: Octubre 17, 2025  
**Migrado de**: `@mui/icons-material` (Material Icons)  
**Migrado a**: Google Fonts Material Symbols Rounded  
**Estado**: ✅ Completado
