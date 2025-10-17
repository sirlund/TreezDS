# Guía de Migración: REST API Legacy → Figma MCP

**Fecha**: Oct 17, 2025  
**Estado**: 🔄 En progreso  
**Fase**: 2 - Implementación MCP Workflows

---

## 📋 Overview

Esta guía documenta cómo migrar de los scripts legacy basados en REST API de Figma a los nuevos workflows basados en **Model Context Protocol (MCP)**.

## 🎯 Objetivos de la Migración

1. **Eliminar dependencia de tokens manuales** (FIGMA_ACCESS_TOKEN)
2. **Workflow más interactivo** (selección visual vs IDs hardcoded)
3. **Código más maintainable** (menos boilerplate custom)
4. **Real-time updates** (vs snapshots estáticos)

## 📊 Mapeo de Scripts

### Scripts Legacy → MCP Equivalentes

| Legacy Script | MCP Workflow | Status |
|---------------|--------------|--------|
| `extract-figma-data.js` | `mcp/extract-design.js` | ✅ Creado |
| `extract-color-styles.js` | `mcp/extract-colors.js` | ✅ Creado |
| `extract-colors-from-node.js` | `mcp/extract-colors.js` | ✅ Creado |
| `generate-tokens.js` | `mcp/generate-tokens.js` | ✅ Creado |
| `extract-button-component.js` | MCP + manual processing | 📝 Planificado |
| `find-button-component.js` | MCP metadata | 📝 Planificado |
| `generate-button-from-figma.js` | MCP + template | 📝 Planificado |
| `transform-figma-tokens.js` | Incluido en `mcp/generate-tokens.js` | ✅ Integrado |

### NPM Scripts

| Legacy Command | MCP Command | Notas |
|----------------|-------------|-------|
| `npm run tokens:extract` | `npm run mcp:extract` | Workflow interactivo |
| `npm run tokens:generate` | `npm run mcp:tokens` | Genera todos los tokens |
| N/A | `npm run mcp:colors` | Extrae solo colores |

## 🔄 Proceso de Migración

### Fase 1: Setup ✅
- [x] Crear directorio `scripts/mcp/`
- [x] Crear scripts base (extract-design, extract-colors, generate-tokens)
- [x] Agregar npm scripts en package.json
- [x] Documentar en README

### Fase 2: Testing ⏳
- [ ] Probar workflow completo de extracción
- [ ] Validar formato de tokens generados
- [ ] Comparar output vs scripts legacy
- [ ] Ajustar parsers según estructura real

### Fase 3: Deprecación 🔒
- [ ] Marcar scripts legacy como deprecated
- [ ] Agregar warnings en legacy scripts
- [ ] Actualizar documentación
- [ ] Comunicar cambios al equipo

### Fase 4: Cleanup 🔒
- [ ] Remover scripts legacy
- [ ] Limpiar dependencies relacionadas
- [ ] Remover referencias a FIGMA_ACCESS_TOKEN
- [ ] Actualizar CI/CD si aplica

## 📖 Guías de Uso

### Cómo extraer tokens (Antes)

```bash
# Legacy workflow
export FIGMA_ACCESS_TOKEN="figd_xxx"
export FIGMA_FILE_ID="abcd1234"
export FIGMA_NODE_ID="123:456"

npm run tokens:extract
npm run tokens:generate
```

**Problemas**:
- ❌ Token manual y sensible
- ❌ IDs hardcoded o por env vars
- ❌ No visual, propenso a errores
- ❌ Snapshot estático

### Cómo extraer tokens (Ahora)

```bash
# MCP workflow
npm run mcp:extract
# Sigue guía interactiva:
# 1. Abre Figma Desktop
# 2. Selecciona nodo visualmente
# 3. Usa MCP command en VS Code
# 4. Guarda design context

npm run mcp:tokens
# Procesa tokens automáticamente
```

**Ventajas**:
- ✅ Sin tokens manuales
- ✅ Selección visual e intuitiva
- ✅ Guía paso a paso
- ✅ Más maintainable

## 🔧 Configuración

### Legacy Setup
```bash
# .env o variables de entorno
FIGMA_ACCESS_TOKEN=figd_xxx
FIGMA_FILE_ID=abcd1234
FIGMA_NODE_ID=123:456
```

### MCP Setup
```json
// VS Code settings.json
{
  "mcp.servers": {
    "figma": {
      "fileKey": "your-figma-file-key"
    }
  }
}
```

## 📝 Diferencias Técnicas

### Autenticación

**Legacy (REST API)**:
```javascript
const headers = {
  'X-Figma-Token': process.env.FIGMA_ACCESS_TOKEN
};

const response = await fetch(
  `https://api.figma.com/v1/files/${fileId}`,
  { headers }
);
```

**MCP**:
```javascript
// Autenticación manejada por MCP server
// No se necesita token en código
const context = await mcp_figma_get_design_context({
  nodeId: '123:456',
  fileKey: 'configured-in-vscode'
});
```

### Extracción de Datos

**Legacy**:
```javascript
// Custom parsing de respuesta REST API
function extractColors(figmaData) {
  const colors = {};
  
  // Navegar estructura compleja
  figmaData.document.children.forEach(page => {
    page.children.forEach(frame => {
      if (frame.fills) {
        // Parse fills...
      }
    });
  });
  
  return colors;
}
```

**MCP**:
```javascript
// Contexto ya procesado
function processColors(designContext) {
  // El context ya tiene estructura simplificada
  const colors = designContext.colors || {};
  return colors;
}
```

## ⚠️ Breaking Changes

### Para Usuarios

1. **Variables de entorno**: Ya no se necesita `FIGMA_ACCESS_TOKEN`
2. **Command names**: `tokens:extract` → `mcp:extract`
3. **Workflow**: Ahora requiere Figma Desktop App abierta

### Para Developers

1. **Import paths**: Scripts en `scripts/mcp/` en lugar de `scripts/`
2. **Data structure**: Output de MCP puede diferir de REST API
3. **Error handling**: Diferentes error types de MCP vs fetch

## 🧪 Testing Plan

### Tests de Integración

```bash
# 1. Extraer con MCP
npm run mcp:extract
# → Debe generar imported-from-figma/design-context.json

# 2. Procesar colores
npm run mcp:colors
# → Debe generar Colors.json y colors.css

# 3. Generar todos los tokens
npm run mcp:tokens
# → Debe generar tokens.ts, tokens.css, tokens.json

# 4. Comparar con legacy
npm run tokens:extract
npm run tokens:generate
# → Comparar outputs
```

### Checklist de Validación

- [ ] Design context se extrae correctamente
- [ ] Colores tienen formato correcto
- [ ] Spacing tokens son válidos
- [ ] CSS variables generan correctamente
- [ ] TypeScript types son correctos
- [ ] No hay errores en build
- [ ] Storybook muestra tokens correctamente

## 📚 Resources

### Documentación
- [MCP Scripts README](../mcp/README.md)
- [Figma MCP Server](https://github.com/modelcontextprotocol/servers/tree/main/src/figma)
- [Token System Summary](../../docs/development/TOKEN-SYSTEM-SUMMARY.md)

### Support
- Ver [Troubleshooting en MCP README](../mcp/README.md#-troubleshooting)
- Reportar issues en repo principal
- Consultar #design-system channel

## 🎓 Training Materials

### Para Designers
1. **"Cómo usar MCP para extraer tokens"**
   - Video tutorial (pendiente)
   - Guía paso a paso en Notion (pendiente)

### Para Developers
1. **"Migración de scripts legacy"**
   - Este documento
   - Code examples en MCP README
   - Office hours (schedule TBD)

## 📅 Timeline

| Fase | Fecha Inicio | Fecha Fin | Status |
|------|--------------|-----------|--------|
| Setup | Oct 17, 2025 | Oct 17, 2025 | ✅ Completo |
| Testing | Oct 18, 2025 | Oct 22, 2025 | ⏳ Pendiente |
| Deprecación | Oct 23, 2025 | Oct 25, 2025 | 🔒 Bloqueado |
| Cleanup | Oct 26, 2025 | Oct 30, 2025 | 🔒 Bloqueado |

## ✅ Success Criteria

La migración se considera exitosa cuando:

1. ✅ Scripts MCP creados y documentados
2. ⏳ Workflow MCP validado end-to-end
3. ⏳ Output equivalente a scripts legacy
4. ⏳ Team trained en nuevo workflow
5. ⏳ Scripts legacy marcados deprecated
6. ⏳ No warnings/errors en build
7. ⏳ Documentation completa

**Progreso**: 1/7 (14%)

## 🤝 Feedback

¿Encontraste problemas con la migración? ¿Sugerencias de mejora?

- Abrir issue en repo
- Comentar en este doc
- Contactar al DS team

---

**Última actualización**: Oct 17, 2025  
**Próxima revisión**: Oct 18, 2025  
**Owner**: Design System Team
