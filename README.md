# Treez Design System

A React component library built from Figma design system tokens, featuring Storybook for component development and documentation.

> 🤖 **For AI Agents**: See [`.cursorrules`](./.cursorrules) and [`.ai/instructions.md`](./.ai/instructions.md) for development guidelines and project context.

## Features

- **Design Tokens**: Automatically extracted from Figma design system via MCP
- **React Components**: Built with TypeScript and CSS Modules
- **Storybook**: Interactive component documentation and playground
- **Type-Safe**: Full TypeScript support with auto-generated types from Figma
- **Figma MCP Integration**: Direct design extraction without API tokens

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn
- Figma MCP configured (for updating design tokens)

### Font Note

The design system uses **Roboto** (via Google Fonts) and **Circular Std**. Since Circular Std is a commercial font, the project currently uses **Inter** as a fallback. See [`docs/guides/fonts.md`](./docs/guides/fonts.md) for instructions on adding the actual Circular Std font files.

### Installation

```bash
npm install
```

### Development

Start Storybook to view and develop components:

```bash
npm run storybook
```

This will open Storybook at `http://localhost:6006`

### Building

Build the component library:

```bash
npm run build
```

Build Storybook for deployment:

```bash
npm run build-storybook
```

## Design Tokens

The token system follows a **two-layer architecture** with clear separation:

- **Primitive Tokens** (`src/figma-tokens/`) - Raw, auto-generated values from Figma (colors, spacing, radius, typography scales)
- **Semantic Tokens** (`src/design-tokens/`) - Manually curated, context-aware tokens that reference primitives

This architecture ensures:
- ✅ **Scalability**: Easy theming (light/dark mode, brand variants)
- ✅ **Maintainability**: Single source of truth for raw values
- ✅ **Type Safety**: Full TypeScript support with auto-generated types

### AI-Powered Token Transformation

An intelligent AI agent ([`.claude/agents/design-tokens-agent.md`](./.claude/agents/design-tokens-agent.md)) automatically transforms Figma exports:

**How it works:**
1. **Classifies** tokens as primitive or semantic using heuristic rules
2. **Transforms** names to follow naming conventions (namespaced primitives, concise semantics)
3. **Generates** files with proper references (semantics → primitives, no hardcoded values)
4. **Audits** for violations (hardcoded values, broken references, naming issues)

**Configuration:** Behavior is driven by [`tokens.config.js`](./tokens.config.js), making it adaptable to any design system.

**Learn more:** See [`docs/guides/tokens.md`](./docs/guides/tokens.md) for architecture details and [`.claude/agents/design-tokens-agent.md`](./.claude/agents/design-tokens-agent.md) for the complete agent workflow.

### Updating Design Tokens

```bash
# Generate tokens from Figma JSON exports
npm run tokens:generate

# Watch for icon changes and auto-update
npm run watch:icons

# Update existing icon components
npm run update:icons
```

### Available Token Categories

- **Colors**: Primitive scales (green, blue, neutral) + semantic roles (brand, success, error)
- **Spacing**: 4px to 96px scale for consistent layout
- **Radius**: Border radius tokens from 0px to full rounded
- **Typography**: 25 text styles (Headings, Body, Labels, Links) with primitive font properties
- **Shadows**: 5 shadow variants (Extra Small to Extra Large)

## Components

### Typography

Typography component that applies Figma design system text styles.

```tsx
import { Typography } from './components';

<Typography variant="headings-h1" as="h1">
  Hello World
</Typography>
```

### Button

Button component with variants, sizes, and design system shadows.

```tsx
import { Button } from './components';

<Button
  variant="primary"
  size="medium"
  shadow="shadows-medium"
>
  Click Me
</Button>
```

## Project Structure

```
TreezDS/
├── src/
│   ├── components/          # React components
│   │   ├── Button/
│   │   ├── Typography/
│   │   ├── Icon/
│   │   └── index.ts
│   ├── figma-tokens/        # Auto-generated primitive tokens
│   │   ├── colors/          # Color tokens by category
│   │   ├── spacing/         # Spacing tokens
│   │   ├── radius/          # Border radius tokens
│   │   └── index.ts
│   ├── design-tokens/       # Semantic/component tokens
│   │   ├── tokens.ts        # TypeScript tokens
│   │   ├── tokens.css       # CSS variables
│   │   ├── semantic-colors.ts
│   │   └── figma-*.json     # Raw Figma data
│   └── stories/             # Storybook stories
├── scripts/                 # Build and generation scripts
│   ├── extract-figma-data.js
│   ├── generate-tokens.js
│   └── watch-icons.js
├── docs/
│   ├── guides/             # Development guides
│   │   ├── tokens.md
│   │   ├── fonts.md
│   │   └── icons.md
│   └── CHANGELOG.md        # Project history
├── .ai/
│   └── instructions.md     # AI documentation policy
├── .storybook/             # Storybook configuration
└── package.json
```

## Figma Integration

This project uses Figma JSON exports to generate design tokens through an AI-powered transformation pipeline:

1. **Export from Figma**: Use a Figma plugin to export tokens as JSON files to `imported-from-figma/`
2. **Run Agent**: Execute `npm run tokens:generate` to process JSON files
3. **Intelligent Processing**: 
   - Agent classifies tokens (primitive vs semantic) using heuristic rules
   - Cleans and standardizes names per naming conventions
   - Creates proper references (semantics always reference primitives)
   - Generates TypeScript, CSS, and JSON outputs

**Result**: Clean, hierarchical token system ready for theming and scaling.

See [`.claude/agents/design-tokens-agent.md`](./.claude/agents/design-tokens-agent.md) for the complete transformation workflow.

## Scripts Reference

| Command | Description |
|---------|-------------|
| `npm run dev` | Start Vite development server |
| `npm run build` | Build the component library |
| `npm run storybook` | Start Storybook development server |
| `npm run build-storybook` | Build static Storybook |
| `npm run tokens:generate` | Transform Figma JSON exports into token files |
| `npm run watch:icons` | Watch for icon changes and auto-update |
| `npm run update:icons` | Update existing icon components from SVG files |

## Tech Stack

- **React 19** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Storybook 9** - Component development and documentation
- **CSS Modules** - Scoped styling
- **AI Agent** - Intelligent token transformation and classification

## Documentation

📚 **[Complete Documentation](./docs/README.md)** - Organized guides and references

Quick links:
- [Development Guides](./docs/guides/) - Tokens, colors, fonts, icons
- [Project Changelog](./docs/CHANGELOG.md) - Project history and migrations
- [AI Instructions](./.ai/instructions.md) - Documentation policy and AI guidance

## Contributing

1. Create components in `src/components/`
2. Add Storybook stories alongside components
3. Use design tokens from `src/design-tokens/tokens.ts`
4. Run `npm run storybook` to preview changes

## License

MIT
