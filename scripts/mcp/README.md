# Figma MCP Workflows

Scripts para extraer diseños y tokens de Figma usando **Model Context Protocol (MCP)** en lugar de la REST API legacy.

## 🎯 Ventajas sobre REST API

| Aspecto | MCP | REST API Legacy |
|---------|-----|-----------------|
| **Autenticación** | Automática via VS Code | Token manual |
| **File Key** | Configurable en extensión | Hardcoded en scripts |
| **Node IDs** | Selección interactiva | Manual lookup |
| **Real-time** | ✅ Cambios en vivo | ❌ Snapshot estático |
| **Mantenimiento** | Menos código custom | Mucho código boilerplate |

## 📋 Prerequisites

1. **Figma Desktop App** instalada
2. **VS Code con Figma MCP** configurado:
   - MCP server running
   - File key configurado en settings
3. **Node.js 18+** para ejecutar scripts

## 🚀 Quick Start

### 1. Configurar Figma MCP

```bash
# Verificar que MCP está configurado
# En VS Code, deberías ver comandos de Figma MCP disponibles
```

### 2. Extraer Design Context

```bash
# Iniciar el proceso de extracción
npm run mcp:extract
```

Esto te guiará en el proceso interactivo:
1. Abrir Figma Desktop
2. Seleccionar nodo de diseño
3. Usar comandos MCP en VS Code
4. Guardar contexto extraído

### 3. Generar Tokens

Una vez que tienes el design context:

```bash
# Extraer solo colores
npm run mcp:colors

# Generar todos los tokens
npm run mcp:tokens
```

## 📁 Estructura de Archivos

```
scripts/mcp/
├── extract-design.js      # Entry point, guía interactiva
├── extract-colors.js      # Procesa colores
└── generate-tokens.js     # Genera todos los tokens

imported-from-figma/       # Output de extracción
├── design-context.json    # Raw context de MCP
├── Colors.json           # Colores procesados
├── Size&Spacing.json     # Spacing tokens
└── Shapes.json           # Border radius, etc

src/design-tokens/         # Tokens generados
├── tokens.ts             # TypeScript exports
├── tokens.css            # CSS variables
├── tokens.json           # Combined JSON
└── colors.css            # Color-specific CSS
```

## 🔧 Available Scripts

### `npm run mcp:extract`
Workflow interactivo para extraer design context de Figma.

**Output**: `imported-from-figma/design-context.json`

### `npm run mcp:colors`
Procesa colores del design context.

**Input**: `imported-from-figma/design-context.json`  
**Output**: 
- `imported-from-figma/Colors.json`
- `src/design-tokens/colors.css`

### `npm run mcp:tokens`
Genera todos los tokens (colores, spacing, shapes, etc).

**Input**: `imported-from-figma/*.json`  
**Output**: 
- `src/design-tokens/tokens.ts`
- `src/design-tokens/tokens.css`
- `src/design-tokens/tokens.json`

## 🎨 Workflow Completo

### Extracción Manual con MCP

1. **Abrir Figma Desktop**
   ```
   Abre tu archivo de diseño en Figma Desktop App
   ```

2. **Seleccionar Nodo**
   ```
   Click en el frame/component que quieres extraer
   ```

3. **Usar MCP en VS Code**
   ```
   En Copilot Chat:
   @figma get design context for selected node
   
   O usar directamente:
   mcp_figma_get_design_context
   ```

4. **Guardar Contexto**
   ```bash
   # Copiar el JSON retornado a:
   imported-from-figma/design-context.json
   ```

5. **Procesar Tokens**
   ```bash
   npm run mcp:colors  # O npm run mcp:tokens
   ```

### Extracción Asistida

```bash
# Usar el script interactivo
npm run mcp:extract

# Seguir las instrucciones en terminal
# Los scripts te guiarán paso a paso
```

## 🔍 MCP Commands Reference

Comandos disponibles de Figma MCP:

### `mcp_figma_get_design_context`
Extrae código y contexto de diseño del nodo seleccionado.

**Parámetros**:
- `nodeId`: ID del nodo (ej: "123:456")
- `fileKey`: Key del archivo Figma
- `clientLanguages`: "typescript,css,html"
- `clientFrameworks`: "react"

**Retorna**: Objeto con código y metadata del diseño

### `mcp_figma_get_metadata`
Obtiene estructura XML del nodo (posición, tamaño, jerarquía).

**Útil para**: Ver overview de estructura sin todo el código

### `mcp_figma_create_design_system_rules`
Genera reglas de design system basadas en el nodo.

**Útil para**: Documentar patterns y guidelines

### `mcp_figma_get_screenshot`
Genera screenshot del nodo seleccionado.

**Útil para**: Documentación visual

## 🆚 Comparación con Scripts Legacy

| Task | MCP Workflow | Legacy Scripts |
|------|-------------|----------------|
| Autenticación | ✅ Automática | ⚠️ `FIGMA_ACCESS_TOKEN` manual |
| File Key | ✅ Config en VS Code | ⚠️ Hardcoded |
| Node Selection | ✅ Visual en Figma | ⚠️ Manual ID lookup |
| Real-time | ✅ Live updates | ❌ Snapshot |
| Error Handling | ✅ MCP server | ⚠️ Custom error handling |
| Mantenimiento | ✅ Minimal | ⚠️ Mucho código custom |

## 📊 Estado de Migración

### ✅ Scripts MCP (Nuevos)
- `scripts/mcp/extract-design.js` - ✅ Creado
- `scripts/mcp/extract-colors.js` - ✅ Creado
- `scripts/mcp/generate-tokens.js` - ✅ Creado

### ⚠️ Scripts Legacy (Deprecated)
- `scripts/extract-button-component.js` - ⚠️ USAR MCP
- `scripts/extract-color-styles.js` - ⚠️ USAR MCP
- `scripts/extract-colors-from-node.js` - ⚠️ USAR MCP
- `scripts/extract-figma-data.js` - ⚠️ USAR MCP
- `scripts/find-button-component.js` - ⚠️ USAR MCP
- `scripts/generate-button-from-figma.js` - ⚠️ USAR MCP
- `scripts/transform-figma-tokens.js` - ⚠️ USAR MCP

**Ver**: [AI Instructions Update](../../docs/ai-context/AI-INSTRUCTIONS-UPDATE.md) para detalles de deprecación

## 🐛 Troubleshooting

### MCP Commands no aparecen
```bash
# Verificar que Figma MCP está instalado
# En VS Code: Preferences > MCP Servers
# Debería estar listado "figma"
```

### "No design context found"
```bash
# 1. Verificar que guardaste el JSON en el path correcto:
#    imported-from-figma/design-context.json
# 
# 2. Verificar formato JSON válido
cat imported-from-figma/design-context.json | jq .
```

### Tokens vacíos o incompletos
```bash
# El design context puede tener estructura diferente
# Ajustar parsers en:
# - extract-colors.js (función processColors)
# - generate-tokens.js (función processTokens)
```

## 📚 Additional Resources

- [Figma MCP Server Docs](https://github.com/modelcontextprotocol/servers/tree/main/src/figma)
- [MCP Protocol Spec](https://modelcontextprotocol.io/)
- [TreezDS Token System](../../docs/development/TOKEN-SYSTEM-SUMMARY.md)
- [Optimization Plan](../../docs/ai-context/OPTIMIZATION-PLAN-STATUS.md)

## 🤝 Contributing

Al agregar nuevos extractores:

1. Crear script en `scripts/mcp/`
2. Agregar npm script en `package.json`
3. Documentar en este README
4. Actualizar AI instructions si es relevante

## 📝 Notes

- **Los scripts MCP son templates**: Necesitan ajustes según la estructura real del design context de tu archivo Figma
- **El parsing es custom**: Cada design system tiene estructura diferente, ajusta las funciones `process*()` según necesites
- **MCP está en evolución**: La API puede cambiar, revisa docs oficiales periódicamente
