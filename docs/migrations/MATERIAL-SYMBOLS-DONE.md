# ✅ Material Symbols Implementado

## 🎉 Cambio Completado

TreezDS ahora usa **Material Symbols Rounded** (Google Fonts Variable Font) en lugar de `@mui/icons-material`.

---

## ✨ Especificaciones Implementadas

Según los requerimientos de Treez Design System:

| Propiedad | Valor |
|-----------|-------|
| **Font** | Material Symbols (nueva versión de Google) |
| **Variant** | Rounded |
| **Weight** | 400 |
| **Grade** | 0 (Normal) |
| **Optical Size** | 20px |
| **Fill** | 0 (No fill / Outlined) |

---

## 📝 Cómo Usar

### Iconos Material Symbols

```tsx
import { Icon } from '@/components/Icon';

<Icon name="settings" size="m" />
<Icon name="account_circle" size="l" />
<Icon name="shopping_cart" size="s" color="#1A1A1A" />
```

### Custom Icons (Treez)

```tsx
<Icon name="flower" size="m" />
<Icon name="preroll" size="l" />
<Icon name="cbd" size="s" />
```

---

## 🆕 Agregar Nuevo Icono Material Symbol

### Paso 1: Buscar en Google Fonts
https://fonts.google.com/icons (Filtro: Style = Rounded)

### Paso 2: Copiar nombre (snake_case)
Ejemplo: `shopping_cart`

### Paso 3: Agregar a materialIconMap.ts

```typescript
export const materialSymbolNames = [
  'account_circle',
  // ... otros
  'shopping_cart', // ← Agregar aquí
  'settings',
] as const;
```

### Paso 4: Usar

```tsx
<Icon name="shopping_cart" />
```

**¡Eso es todo!** No hay imports, no hay configuración adicional.

---

## 🎯 Ventajas del Nuevo Sistema

### ✅ Correcto según Figma
- Rounded variant ✅
- Weight 400 ✅
- Grade 0 ✅
- Optical size 20px ✅
- No fill (outlined) ✅

### ✅ Mejor Rendimiento
- **Antes**: Cada icono = SVG individual (~4KB cada uno)
- **Después**: Una fuente variable (~60KB para TODOS los iconos)
- La fuente se cachea y carga una sola vez

### ✅ Más Simple
- **Antes**: Importar componentes de MUI, mapear a PascalCase
- **Después**: Solo escribir el nombre del icono (snake_case)

### ✅ Más Flexible
- Variable font permite cambiar weight, fill, grade dinámicamente en CSS
- No necesitas variantes separadas (Rounded, Outlined, etc.)

### ✅ Más Iconos
- Google tiene 2500+ Material Symbols
- Constantemente actualizados
- Todos disponibles sin instalar nada extra

---

## 📂 Archivos Modificados

### Nuevos
- ✅ `.storybook/preview-head.html` - Carga Material Symbols en Storybook
- ✅ `MATERIAL-SYMBOLS-MIGRATION.md` - Documentación completa de la migración

### Modificados
- ✅ `index.html` - Link a Google Fonts Material Symbols
- ✅ `src/components/Icon/Icon.tsx` - Removido MUI, agregado renderizado con ligaduras
- ✅ `src/components/Icon/Icon.module.css` - Clase `.materialSymbol` con variable font config
- ✅ `src/components/Icon/materialIconMap.ts` - Simplificado a array de nombres
- ✅ `src/components/Icon/HOW-TO-ADD-MATERIAL-ICONS.md` - Actualizado con nuevo proceso

---

## 🧪 Verificación

### Storybook
Está corriendo en: **http://localhost:6008/**

Ve a: **Components > Icon > Material Design Icons**

### Qué Verificar
- [ ] Los iconos se ven con **bordes redondeados** (Rounded)
- [ ] El grosor de línea es **consistente** (weight 400)
- [ ] Los iconos están **outlined** (sin relleno sólido)
- [ ] El tamaño **óptico** es correcto (20px base)
- [ ] Todos los iconos funcionan correctamente

---

## 🔄 Diferencia Visual

### Antes (Material Icons - Filled o Outlined)
- Bordes más angulosos
- Variantes inconsistentes (algunos filled, otros outlined)
- Optical size no configurable

### Después (Material Symbols - Rounded)
- ✅ Bordes suaves y redondeados
- ✅ Todos outlined (sin relleno)
- ✅ Weight 400 consistente
- ✅ Optical size 20px optimizado

---

## 📚 Recursos

### Documentación
- **Google Fonts Icons**: https://fonts.google.com/icons
- **Material Symbols Guide**: https://m3.material.io/styles/icons/overview
- **Variable Fonts**: https://fonts.google.com/knowledge/glossary/variable_fonts

### Documentación Local
- `MATERIAL-SYMBOLS-MIGRATION.md` - Detalles técnicos de la migración
- `src/components/Icon/HOW-TO-ADD-MATERIAL-ICONS.md` - Guía para agregar iconos
- `src/components/Icon/EXAMPLE-ADDING-ICONS.md` - Ejemplos prácticos
- `src/components/Icon/MATERIAL-SYMBOLS-CONFIG.md` - Configuración completa

---

## 💡 Tips

### 1. Mantén orden alfabético
Facilita encontrar iconos en `materialIconMap.ts`

### 2. Usa nombres descriptivos
Los nombres en Google Fonts son intuitivos: `shopping_cart`, `account_circle`, etc.

### 3. Verifica disponibilidad primero
Busca en https://fonts.google.com/icons antes de agregar

### 4. Custom icons para lo específico
Si un icono no existe en Material Symbols, usa custom icons de Figma

---

## 🎨 Comparación con Custom Icons

| Aspecto | Material Symbols | Custom Icons |
|---------|-----------------|--------------|
| Fuente | Google Fonts | Figma Export |
| Formato | Variable Font | SVG Path |
| Proceso | Agregar nombre al array | Exportar SVG + script |
| Tiempo | 30 segundos | 5 minutos |
| Flexibilidad | Variable font axes | Fixed SVG |
| Cantidad | 2500+ iconos | 6 iconos actuales |

**Usa Material Symbols cuando**: El icono existe en Google Fonts  
**Usa Custom Icons cuando**: Necesitas iconos específicos de Treez (flower, cbd, etc.)

---

## ⚙️ Configuración Técnica

### HTML (index.html + .storybook/preview-head.html)
```html
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
```

### CSS (Icon.module.css)
```css
.materialSymbol {
  font-family: 'Material Symbols Rounded';
  font-variation-settings: 
    'FILL' 0,    /* No fill */
    'wght' 400,  /* Weight 400 */
    'GRAD' 0,    /* Grade 0 */
    'opsz' 20;   /* Optical size 20px */
}
```

### TypeScript (Icon.tsx)
```tsx
// Material Symbol rendering (ligatures)
<span className={`${iconClasses} ${styles.materialSymbol}`}>
  {name}
</span>
```

---

## ✅ Estado Actual

- ✅ **Material Symbols Rounded** implementado
- ✅ **Weight 400** configurado
- ✅ **Grade 0** (Normal) configurado
- ✅ **Optical Size 20px** configurado
- ✅ **No fill** (Outlined) configurado
- ✅ Documentación completa
- ✅ Sin errores de compilación
- ✅ Storybook funcionando
- ⏳ **Pendiente**: Verificar visualmente en Storybook

---

## 🚀 Siguiente Paso

Abre Storybook en http://localhost:6008/ y verifica que los iconos se vean correctos con el estilo Rounded, weight 400, grade 0, optical size 20px, y sin relleno.

---

**Fecha**: Octubre 17, 2025  
**Estado**: ✅ Implementado  
**Verificado**: ⏳ Pendiente de verificación visual por usuario
