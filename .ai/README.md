# 🤖 Documentación para AI Agents - Instalación Completa

## ✅ Archivos Creados

Se han creado **5 archivos** de documentación para optimizar el trabajo de AI agents en este proyecto:

```
TreezDS/
├── 📄 .cursorrules (5.6KB)                    ⭐ PRINCIPAL
│   └── Compatible con: Cursor, Windsurf, y otros AI IDEs
│
├── 📁 .claude/
│   ├── 📄 project-instructions.md (6.5KB)     ⭐ CLAUDE CODE
│   └── 📄 settings.local.json                 (ya existía)
│
├── 📁 .ai/
│   ├── 📄 instructions.md (3.8KB)             ⭐ REFERENCIA RÁPIDA
│   ├── 📄 figma-mcp-migration.md (3.1KB)     ⭐ FIGMA MCP
│   └── 📄 summary.md (3.9KB)                  ⭐ ESTE RESUMEN
│
└── 📄 README.md                               (actualizado)
    └── Ahora referencia la documentación AI
```

---

## 📋 Contenido de Cada Archivo

### 1. `.cursorrules` (Raíz del proyecto)
**Para**: Cursor IDE, Windsurf, y AI editors compatibles  
**Tamaño**: ~5.6KB / 250 líneas  
**Contenido**:
- ✅ Overview completo del proyecto
- ✅ Stack tecnológico detallado
- ✅ Uso de Figma MCP (con ejemplos)
- ✅ Lista de scripts deprecados
- ✅ Estructura de componentes
- ✅ Convenciones de código
- ✅ Workflows comunes
- ✅ Referencias a documentación

**Lectura automática**: Sí, Cursor lo lee automáticamente

---

### 2. `.claude/project-instructions.md`
**Para**: Claude Code (VS Code Extension)  
**Tamaño**: ~6.5KB / 200 líneas  
**Estilo**: Conversacional, optimizado para Claude  
**Contenido**:
- ✅ Información crítica sobre Figma MCP
- ✅ Scripts deprecados claramente marcados
- ✅ Comandos comunes con ejemplos
- ✅ Estructura del proyecto visual
- ✅ Patrones de desarrollo paso a paso
- ✅ Sección de Q&A
- ✅ Tips de interacción
- ✅ Estado actual del proyecto

**Lectura automática**: Sí, Claude Code lo detecta

---

### 3. `.ai/instructions.md`
**Para**: Referencia rápida / Cualquier AI agent  
**Tamaño**: ~3.8KB / 150 líneas  
**Estilo**: Conciso, formato de referencia  
**Contenido**:
- ✅ Quick start guide
- ✅ Comandos más usados
- ✅ Advertencias sobre scripts deprecados
- ✅ Estructura de directorios clave
- ✅ Uso de design tokens
- ✅ Convenciones de código
- ✅ Tareas comunes con decisiones

**Lectura automática**: Depende del AI agent

---

### 4. `.ai/figma-mcp-migration.md`
**Para**: Contexto específico de Figma MCP  
**Tamaño**: ~3.1KB / 100 líneas  
**Estilo**: Tabla comparativa y estado de migración  
**Contenido**:
- ✅ Estado de Figma MCP (ACTIVO)
- ✅ Tabla de scripts deprecados con reemplazos
- ✅ Comandos NPM a evitar
- ✅ Scripts todavía válidos
- ✅ Ejemplos de uso de MCP
- ✅ Plan de migración por fases
- ✅ Timeline de limpieza

**Propósito**: Evitar que AI agents sugieran métodos obsoletos

---

### 5. `.ai/summary.md`
**Para**: Índice y guía de mantenimiento  
**Tamaño**: ~3.9KB  
**Contenido**:
- ✅ Qué archivos existen y para qué
- ✅ Cómo los usan diferentes AI agents
- ✅ Cuándo y cómo actualizar
- ✅ Puntos clave para AI agents
- ✅ Checklist de consistencia

---

## 🎯 Objetivos Cumplidos

### ✅ Prevenir Malas Sugerencias
Todos los archivos advierten explícitamente contra:
- ❌ Usar scripts de API REST de Figma (`extract-figma-data.js`, etc.)
- ❌ Pedir `FIGMA_ACCESS_TOKEN`
- ❌ Sugerir `npm run tokens:extract/generate/update`

### ✅ Promover Mejores Prácticas
- ✅ Usar Figma MCP para extracción de diseños
- ✅ Desarrollar en Storybook (`npm run storybook`)
- ✅ Seguir estructura de componentes establecida
- ✅ Usar design tokens y CSS Modules

### ✅ Proporcionar Contexto
- ✅ Tech stack completo
- ✅ Estructura del proyecto
- ✅ Convenciones de código
- ✅ Workflows comunes
- ✅ Estado de migración actual

---

## 🚀 Cómo los AI Agents Leerán Esto

### Claude Code (VS Code)
1. Lee automáticamente `.claude/project-instructions.md`
2. Puede referenciar otros archivos cuando sea necesario
3. Entiende el contexto del proyecto desde el inicio

### Cursor IDE
1. Lee automáticamente `.cursorrules` al abrir el proyecto
2. Mantiene el contexto durante toda la sesión
3. Aplica las reglas a todas las sugerencias

### Windsurf
1. Busca `.windsurfrules` primero
2. Si no existe, usa `.cursorrules` como fallback
3. Similar comportamiento a Cursor

### GitHub Copilot / Otros
1. Pueden configurarse para leer archivos específicos
2. `.ai/instructions.md` es un buen punto de partida
3. Algunos requieren configuración manual

---

## 📊 Impacto Esperado

| Aspecto | Antes | Después |
|---------|-------|---------|
| **Sugerencias incorrectas** | Frecuentes | Mínimas |
| **Scripts obsoletos sugeridos** | Sí | No |
| **Contexto del proyecto** | AI debe preguntar | AI ya lo sabe |
| **Onboarding de AI** | Cada vez | Una vez |
| **Consistencia de código** | Variable | Alta |
| **Productividad** | Media | Alta |

---

## 🔄 Mantenimiento

### Cuándo Actualizar
✅ **SÍ actualizar cuando**:
- Se deprecan más scripts
- Se añaden nuevas features importantes
- Cambia la estructura del proyecto
- Se adoptan nuevas convenciones
- Completas la migración de Figma MCP

❌ **NO actualizar para**:
- Cambios menores en componentes
- Bug fixes pequeños
- Cambios en dependencias
- Updates de documentación regular

### Cómo Actualizar
1. Edita `.cursorrules` (archivo principal)
2. Sincroniza cambios a `.claude/project-instructions.md`
3. Actualiza `.ai/instructions.md` si aplica
4. Mantén `.ai/figma-mcp-migration.md` al día con el estado real

### Checklist de Consistencia
- [ ] Todos los archivos concuerdan en scripts deprecados
- [ ] Todos promueven el mismo workflow (MCP > API)
- [ ] Estructura de componentes es consistente
- [ ] Comandos NPM son los mismos
- [ ] Links a documentación son válidos

---

## 💡 Próximos Pasos Recomendados

### Fase 1: Validación (Ahora)
- [x] Documentación creada
- [ ] Probar con Claude Code en una tarea
- [ ] Verificar que no sugiera scripts obsoletos
- [ ] Ajustar si es necesario

### Fase 2: Integración (Próximos días)
- [ ] Compartir con el equipo
- [ ] Documentar en Wiki/Confluence si aplica
- [ ] Crear `.windsurfrules` si usas Windsurf

### Fase 3: Limpieza Real (Próximas semanas)
- [ ] Implementar nuevos scripts con MCP
- [ ] Probar workflow completo
- [ ] Eliminar scripts deprecados
- [ ] Actualizar package.json
- [ ] Actualizar documentación AI

---

## 📚 Referencias Cruzadas

Todos los archivos de AI referencian:
- `README.md` - Overview del proyecto
- `TOKEN-SYSTEM-SUMMARY.md` - Arquitectura de tokens
- `SEMANTIC-COLORS-IMPLEMENTATION.md` - Sistema de colores
- `FONTS.md` - Configuración de fuentes
- `src/design-tokens/README.md` - Guía de uso de tokens

---

## ✨ Resultado Final

Ahora cualquier AI agent que trabaje en este proyecto:

1. 🎯 **Sabrá inmediatamente** que usar Figma MCP en lugar de scripts viejos
2. 🚫 **No sugerirá** código deprecado o patrones obsoletos
3. ✅ **Seguirá** las convenciones y estructura establecidas
4. 📖 **Tendrá contexto** completo del proyecto sin preguntar
5. ⚡ **Será más productivo** desde el primer prompt

---

**Creado**: Octubre 17, 2025  
**Total archivos**: 5 documentos + README actualizado  
**Tamaño total**: ~23KB de contexto para AI  
**Compatibilidad**: Cursor, Claude Code, Windsurf, y otros

**🎉 ¡Listo para usar con cualquier AI assistant!**
