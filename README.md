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

The design system uses **Roboto** (via Google Fonts) and **Circular Std**. Since Circular Std is a commercial font, the project currently uses **Inter** as a fallback. See [docs/development/FONTS.md](./docs/development/FONTS.md) for instructions on adding the actual Circular Std font files.

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

Design tokens are automatically extracted from the Figma design system and converted to:

- **CSS Variables** (`src/design-tokens/tokens.css`)
- **TypeScript Tokens** (`src/design-tokens/tokens.ts`)
- **JSON** (`src/design-tokens/tokens.json`)

### Updating Design Tokens

**With Figma MCP** (Recommended):
```bash
# Interactive extraction workflow
npm run mcp:extract

# Extract only colors
npm run mcp:colors

# Generate all tokens
npm run mcp:tokens
```

See [scripts/mcp/README.md](./scripts/mcp/README.md) for complete workflow documentation.

**Legacy Scripts** (⚠️ Deprecated):
```bash
# These scripts will be removed - use MCP instead
npm run tokens:extract   # ⚠️ Deprecated
npm run tokens:generate  # ⚠️ Deprecated
npm run tokens:update    # ⚠️ Deprecated
```

See [CHANGELOG.md](./docs/CHANGELOG.md) for migration history.

### Available Token Categories

- **Typography**: 25 text styles (Headings, Body, Labels, Links)
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

This project uses the Figma REST API to extract design system data. To update from Figma:

1. Set your Figma access token:
   ```bash
   export FIGMA_ACCESS_TOKEN="your-token-here"
   ```

2. Run the update command:
   ```bash
   npm run tokens:update
   ```

The scripts will:
- Fetch all text and effect styles from Figma
- Convert them to CSS variables and TypeScript constants
- Generate type definitions for type-safe component development

## Scripts Reference

| Command | Description |
|---------|-------------|
| `npm run dev` | Start Vite development server |
| `npm run build` | Build the component library |
| `npm run storybook` | Start Storybook development server |
| `npm run build-storybook` | Build static Storybook |
| `npm run tokens:extract` | Extract design data from Figma |
| `npm run tokens:generate` | Generate tokens from extracted data |
| `npm run tokens:update` | Extract and generate tokens (both) |

## Tech Stack

- **React 19** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Storybook 9** - Component development and documentation
- **CSS Modules** - Scoped styling
- **Figma MCP** - Design token extraction

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
