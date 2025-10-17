# 🎨 Material Symbols Configuration

## Treez Design System Icon Standards

Treez Design System utiliza **Material Symbols** en su variante **Rounded** con las siguientes especificaciones:

| Propiedad | Valor | Descripción |
|-----------|-------|-------------|
| **Variant** | Rounded | Bordes redondeados y suaves |
| **Weight** | 400 | Peso normal/regular |
| **Grade** | 0 (Normal) | Grosor de línea estándar |
| **Fill** | 0 (No fill) | Estilo outlined (sin relleno) |

---

## 🔧 Implementación Técnica

### 1. Componente Icon.tsx

El componente automáticamente busca la variante Rounded:

```typescript
// Intenta cargar la variante Rounded primero
const MuiIconComponent = (MuiIcons as any)[`${muiIconName}Rounded`] || (MuiIcons as any)[muiIconName];
```

**Ejemplo**:
- Si mapeas `settings: 'Settings'`
- El componente buscará `SettingsRounded` en `@mui/icons-material`
- Si no existe Rounded, fallback a `Settings`

### 2. CSS (Icon.module.css)

Los estilos CSS configuran las propiedades de variación de fuentes:

```css
.svg {
  font-variation-settings: 
    'FILL' 0,    /* No fill (outlined) */
    'wght' 400,  /* Weight 400 */
    'GRAD' 0,    /* Grade Normal */
    'opsz' 20;   /* Optical size 20px */
}
```

**Nota**: Estos valores se aplican a los iconos SVG renderizados.

---

## 📦 Paquete: @mui/icons-material

Treez DS usa el paquete oficial de MUI:

```json
{
  "dependencies": {
    "@mui/icons-material": "^7.3.4"
  }
}
```

Este paquete incluye múltiples variantes de cada icono:
- `Settings` - Filled (default)
- `SettingsOutlined` - Outlined
- `SettingsRounded` - **Rounded** ← Treez DS usa esta
- `SettingsSharp` - Sharp
- `SettingsTwoTone` - Two Tone

---

## 🎯 Material Symbols vs Material Icons

### Material Symbols (Nuevo - Variable Fonts)

✅ **Ventajas**:
- Font variable con ajustes dinámicos (weight, fill, grade)
- Más flexible y personalizable
- Mejor consistencia visual

❌ **Limitaciones**:
- Requiere configuración de `font-variation-settings`
- No todos los navegadores soportan variable fonts (aunque el soporte es muy bueno)

### Material Icons (Anterior - Static SVGs)

✅ **Ventajas**:
- Compatibilidad universal
- Más simple de implementar

❌ **Limitaciones**:
- Menos flexible (variantes fijas)
- Más archivos de íconos

---

## 🔍 Comparación Visual

### Filled (Default)
```
⚙️ (relleno sólido)
```

### Outlined
```
⚙ (contorno delgado)
```

### Rounded (Treez DS)
```
⚙️ (contorno con bordes redondeados)
```

### Sharp
```
⚙ (contorno con esquinas afiladas)
```

---

## 📚 Recursos

### Documentación Oficial
- [Material Symbols Guide](https://m3.material.io/styles/icons/overview)
- [MUI Icons API](https://mui.com/material-ui/material-icons/)
- [Font Variation Settings](https://developer.mozilla.org/en-US/docs/Web/CSS/font-variation-settings)

### Herramientas
- [Material Symbols Explorer](https://fonts.google.com/icons)
- [Iconify (visualizar todas las variantes)](https://icon-sets.iconify.design/material-symbols/)

---

## 🛠️ Troubleshooting

### Problema: Icono no se ve "rounded"

**Causa**: El icono no tiene variante Rounded en `@mui/icons-material`.

**Solución**: 
1. Verifica en https://mui.com/material-ui/material-icons/ si existe la variante Rounded
2. Si no existe, el componente usará la variante default (Filled)
3. Considera usar un custom icon SVG si es crítico tener rounded

### Problema: Iconos se ven muy delgados o gruesos

**Causa**: Configuración incorrecta de `font-variation-settings`.

**Solución**: 
1. Verifica `Icon.module.css` tenga `'wght' 400`
2. Asegúrate de no sobrescribir con CSS externo
3. Revisa que no haya estilos conflictivos de MUI Theme

### Problema: Fill settings no funcionan

**Causa**: Los iconos SVG estáticos de MUI no responden a `font-variation-settings`.

**Explicación**: 
- `@mui/icons-material` usa **SVGs estáticos**, no variable fonts
- La configuración `font-variation-settings` está para documentación y futura compatibilidad
- Las variantes (Rounded, Outlined, etc.) son SVGs separados
- El "fill" se controla con la variante del icono, no con CSS

**Solución Actual**:
- Usa la variante Rounded correcta (`SettingsRounded`)
- El estilo "outlined" (sin relleno) viene de la variante Rounded del SVG

---

## 🎨 Diseño en Figma

Los iconos en Figma deben seguir estas especificaciones:

1. **Fuente**: Material Symbols Rounded
2. **Weight**: 400
3. **Grade**: 0 (Normal)
4. **Fill**: No (outlined)
5. **Tamaños**: 12px, 18px, 20px, 24px, 48px

Al exportar desde Figma con Figma MCP, los iconos mantendrán estas propiedades automáticamente.

---

## 📝 Checklist de Configuración

Cuando agregues un nuevo icono de Material Design:

- [ ] Buscar icono en MUI Icons (https://mui.com/material-ui/material-icons/)
- [ ] Verificar que existe variante **Rounded**
- [ ] Agregar mapeo en `materialIconMap.ts` (solo nombre base, sin "Rounded")
- [ ] Probar en Storybook que se vea con bordes redondeados
- [ ] Verificar que respeta los tamaños (xs, s, m, l, xl)
- [ ] Confirmar que el color se hereda correctamente

---

**Última actualización**: Octubre 2025  
**Versión de @mui/icons-material**: 7.3.4
