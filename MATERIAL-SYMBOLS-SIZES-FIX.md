# ✅ Material Symbols: Tamaños Corregidos

## 🐛 Problema Identificado

Los tamaños de los iconos de Material Symbols no funcionaban correctamente porque:

1. **Material Symbols usa fuentes** → Necesita `font-size`
2. **Custom icons usan SVG** → Solo necesitan `width` y `height`

Las clases de tamaño (`.xs`, `.s`, `.m`, `.l`, `.xl`) solo definían `width` y `height`, lo cual funciona para SVGs pero NO para fuentes.

---

## ✅ Solución Implementada

### CSS Actualizado: Icon.module.css

Se agregó `font-size` a cada clase de tamaño:

```css
/* Icon sizes matching Figma design system */
.xs {
  width: 12px;
  height: 12px;
  font-size: 12px; /* ← AGREGADO */
}

.s {
  width: 18px;
  height: 18px;
  font-size: 18px; /* ← AGREGADO */
}

.m {
  width: 20px;
  height: 20px;
  font-size: 20px; /* ← AGREGADO */
}

.l {
  width: 24px;
  height: 24px;
  font-size: 24px; /* ← AGREGADO */
}

.xl {
  width: 48px;
  height: 48px;
  font-size: 48px; /* ← AGREGADO */
}
```

### Optical Size Dinámico

También se agregó configuración específica de `opsz` (optical size) para cada tamaño de Material Symbols:

```css
/* Optical size optimizado por tamaño */
.xs.materialSymbol {
  font-variation-settings: 
    'FILL' 0,
    'wght' 400,
    'GRAD' 0,
    'opsz' 20; /* Tamaño óptico 20px (mínimo) */
}

.s.materialSymbol {
  font-variation-settings: 
    'FILL' 0,
    'wght' 400,
    'GRAD' 0,
    'opsz' 20;
}

.m.materialSymbol {
  font-variation-settings: 
    'FILL' 0,
    'wght' 400,
    'GRAD' 0,
    'opsz' 20; /* Tamaño óptico base */
}

.l.materialSymbol {
  font-variation-settings: 
    'FILL' 0,
    'wght' 400,
    'GRAD' 0,
    'opsz' 24;
}

.xl.materialSymbol {
  font-variation-settings: 
    'FILL' 0,
    'wght' 400,
    'GRAD' 0,
    'opsz' 48; /* Tamaño óptico grande */
}
```

---

## 📊 Tabla de Especificaciones

| Tamaño | Width/Height | Font Size | Optical Size | Uso |
|--------|--------------|-----------|--------------|-----|
| `xs` | 12px | 12px | 20px | Iconos muy pequeños |
| `s` | 18px | 18px | 20px | Iconos compactos |
| `m` | 20px | 20px | **20px** | **Tamaño base (Figma)** |
| `l` | 24px | 24px | 24px | Iconos grandes |
| `xl` | 48px | 48px | 48px | Iconos muy grandes |

---

## 🎯 Por Qué Optical Size Importa

**Optical Size (`opsz`)** en Material Symbols ajusta el grosor y espaciado de los iconos según su tamaño de renderizado:

- **opsz 20**: Optimizado para iconos pequeños (más espacio, líneas más gruesas)
- **opsz 24**: Equilibrado para tamaños medianos
- **opsz 48**: Optimizado para iconos grandes (menos espacio, líneas más finas)

Esto asegura que los iconos se vean nítidos y legibles a cualquier tamaño.

---

## 🔄 Comparación: Custom vs Material Symbols

### Custom Icons (SVG)
```css
.m {
  width: 20px;   /* ✅ Suficiente */
  height: 20px;  /* ✅ Suficiente */
  /* NO necesita font-size */
}
```

### Material Symbols (Font)
```css
.m {
  width: 20px;      /* Define el contenedor */
  height: 20px;     /* Define el contenedor */
  font-size: 20px;  /* ✅ NECESARIO para la fuente */
}

.m.materialSymbol {
  font-variation-settings: 
    'opsz' 20;      /* ✅ Optimiza la renderización */
}
```

---

## ✅ Resultado

Ahora los iconos de Material Symbols funcionan correctamente en todos los tamaños:

```tsx
// Todos estos tamaños ahora funcionan correctamente
<Icon name="settings" size="xs" />  // 12px
<Icon name="settings" size="s" />   // 18px
<Icon name="settings" size="m" />   // 20px (base)
<Icon name="settings" size="l" />   // 24px
<Icon name="settings" size="xl" />  // 48px
```

Los custom icons (flower, preroll, etc.) siguen funcionando perfectamente porque usan SVG.

---

## 🧪 Verificar en Storybook

1. Abre Storybook: http://localhost:6008/
2. Ve a **Components > Icon**
3. Prueba diferentes tamaños con el control "size"
4. Verifica que:
   - ✅ Los iconos Material Symbols cambian de tamaño
   - ✅ Los iconos Custom también funcionan
   - ✅ El grosor de línea es consistente (weight 400)
   - ✅ Los bordes son redondeados (Rounded variant)

---

## 📝 Archivos Modificados

- ✅ `src/components/Icon/Icon.module.css`
  - Agregado `font-size` a todas las clases de tamaño
  - Agregado `font-variation-settings` específico por tamaño con `opsz` optimizado

---

**Fecha**: Octubre 17, 2025  
**Problema**: Material Symbols no respondían a cambios de tamaño  
**Causa**: Faltaba `font-size` en las clases de tamaño  
**Solución**: Agregado `font-size` y `opsz` optimizado por tamaño  
**Estado**: ✅ Corregido
