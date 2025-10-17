# 📘 Guía: Cómo Agregar Material Symbols

## 🎯 Resumen

Para agregar un icono de Material Symbols a TreezDS, solo necesitas editar un archivo:
- `src/components/Icon/materialIconMap.ts`

Los iconos usan **Google Fonts Material Symbols Rounded** (variable font), NO `@mui/icons-material`.

**Especificaciones**:
- **Variant**: Rounded
- **Weight**: 400
- **Grade**: 0 (Normal)
- **Optical Size**: 20px
- **Fill**: 0 (No fill / Outlined)

Los iconos se renderizan usando **ligaduras de fuente**, mucho más eficiente que SVGs individuales.

---

## 📋 Pasos para Agregar un Icono

### 1. Buscar el icono en Google Fonts Icons

Ve a: https://fonts.google.com/icons

**Filtros recomendados**:
- **Style**: Rounded (asegúrate de seleccionar este)
- Busca el icono que necesitas, por ejemplo: "shopping_cart"

### 2. Copiar el nombre del icono

En Google Fonts, el nombre del icono aparece en **snake_case**:
- Ejemplo: `shopping_cart`
- Ejemplo: `local_shipping`
- Ejemplo: `add_circle`

**Importante**: 
- Usa el nombre **exactamente como aparece** (snake_case)
- NO necesitas convertir a PascalCase
- Material Symbols usa ligaduras de fuente, el nombre se convierte automáticamente al icono
  - `add_circle` → `AddCircle`

### 3. Editar `materialIconMap.ts`

Abre el archivo: `src/components/Icon/materialIconMap.ts`

Agrega el nombre del icono en el array `materialSymbolNames` (en orden alfabético):

```typescript
export const materialSymbolNames = [
  'account_circle',
  'admin_panel_settings',
  // ... otros iconos existentes ...
  'shopping_cart',  // ← Tu nuevo icono
  'settings',
  // ... más iconos ...
] as const;
```

**Importante**: 
- Mantén el orden alfabético
- Solo agrega el nombre (snake_case), no valores de mapeo
- Material Symbols renderiza el icono automáticamente por el nombre

### 4. ¡Listo! Usa tu icono

```tsx
import { Icon } from './components/Icon';

<Icon name="shopping_cart" size="m" />
```

---

## 📝 Ejemplos Completos

### Ejemplo 1: Agregar "shopping_cart"

```typescript
// src/components/Icon/materialIconMap.ts
export const materialIconMap = {
  account_circle: 'AccountCircle',
  admin_panel_settings: 'AdminPanelSettings',
  apps: 'Apps',
  auto_graph: 'AutoGraph',
  dashboard: 'Dashboard',
  group: 'Group',
  integration_instructions: 'IntegrationInstructions',
  loyalty: 'Loyalty',
  payments: 'Payments',
  product: 'Inventory',
  redeem: 'Redeem',
  rocket_launch: 'RocketLaunch',
  settings: 'Settings',
  shopping_cart: 'ShoppingCart',  // ← NUEVO
  storefront: 'Storefront',
  verified: 'Verified',
} as const;
```

### Ejemplo 2: Agregar varios iconos a la vez

```typescript
export const materialIconMap = {
  account_circle: 'AccountCircle',
  add_circle: 'AddCircle',           // ← NUEVO
  admin_panel_settings: 'AdminPanelSettings',
  apps: 'Apps',
  auto_graph: 'AutoGraph',
  calendar_today: 'CalendarToday',   // ← NUEVO
  dashboard: 'Dashboard',
  delete: 'Delete',                   // ← NUEVO
  edit: 'Edit',                       // ← NUEVO
  group: 'Group',
  // ... resto de iconos
} as const;
```

---

## 🔍 Verificación

### En Storybook

1. Ejecuta Storybook:
   ```bash
   npm run storybook
   ```

2. Navega a: **Components > Icon > Material Design Icons**

3. Busca tu nuevo icono en la galería

### En TypeScript

Los tipos se actualizan automáticamente gracias a `as const`:

```tsx
// TypeScript te sugerirá el nuevo icono
<Icon name="shopping_cart" /> // ✅ Autocompletado disponible
<Icon name="invalid_icon" />  // ❌ Error de TypeScript
```

---

## 🎨 Casos Especiales

### Icono con nombre diferente en MUI

Si el nombre que quieres usar es diferente al de MUI:

```typescript
export const materialIconMap = {
  // Usas "product" pero en MUI se llama "Inventory"
  product: 'Inventory',
  
  // Usas "cart" pero en MUI se llama "ShoppingCart"
  cart: 'ShoppingCart',
  
} as const;
```

### Iconos con variantes

MUI tiene variantes (Outlined, Filled, etc.). Por defecto usa Outlined:

```typescript
export const materialIconMap = {
  // Por defecto es Outlined
  favorite: 'Favorite',
  
  // Si quieres Filled, usa el componente específico
  favorite_filled: 'Favorite', // Nota: MUI solo exporta Outlined por defecto
  
} as const;
```

---

## 🆚 Material Icons vs Custom Icons

| Aspecto | Material Icons | Custom Icons |
|---------|---------------|--------------|
| **Fuente** | @mui/icons-material | imported-from-figma/ |
| **Archivo** | materialIconMap.ts | customIconData.ts |
| **Proceso** | Solo mapear nombre | Extraer SVG con script |
| **Cantidad** | 2000+ disponibles | ~6 actualmente |
| **Actualización** | Automática con MUI | Manual desde Figma |
| **Bundle size** | Tree-shakeable | Siempre incluidos |

---

## 🚀 Quick Reference

### Paso a paso rápido:

1. **Buscar icono**: https://mui.com/material-ui/material-icons/
2. **Copiar nombre**: `example_icon` → `ExampleIcon`
3. **Editar archivo**: `src/components/Icon/materialIconMap.ts`
4. **Agregar línea**: `example_icon: 'ExampleIcon',`
5. **Guardar**: Los tipos se actualizan automáticamente
6. **Usar**: `<Icon name="example_icon" />`

### No necesitas:

- ❌ Ejecutar scripts
- ❌ Instalar paquetes adicionales
- ❌ Reiniciar Storybook (hot reload funciona)
- ❌ Actualizar otros archivos

### Automáticamente actualizado:

- ✅ TypeScript types (IconName)
- ✅ Storybook controls (dropdown)
- ✅ Export en Icon.tsx (allIconNames)

---

## 🐛 Troubleshooting

### Error: "Icon not found in @mui/icons-material"

**Causa**: El nombre del componente no existe o está mal escrito

**Solución**:
1. Verifica en: https://mui.com/material-ui/material-icons/
2. Busca el nombre exacto del componente (PascalCase)
3. Actualiza el mapping

### El icono no aparece en Storybook

**Causa**: Puede que Storybook no haya detectado el cambio

**Solución**:
1. Guarda el archivo
2. Si no aparece, recarga Storybook (Cmd+R o Ctrl+R)

### TypeScript no reconoce el nuevo icono

**Causa**: El editor no ha recargado los tipos

**Solución**:
1. En VS Code: Cmd+Shift+P → "TypeScript: Restart TS Server"
2. O cierra y abre el archivo

---

## 📚 Recursos

- **Material Icons Gallery**: https://mui.com/material-ui/material-icons/
- **MUI Icons Package**: https://www.npmjs.com/package/@mui/icons-material
- **Icon Component**: `src/components/Icon/Icon.tsx`
- **Material Map**: `src/components/Icon/materialIconMap.ts`

---

**Última actualización**: Octubre 2025  
**Iconos Material disponibles**: 15  
**Total iconos en TreezDS**: 21 (15 Material + 6 Custom)
