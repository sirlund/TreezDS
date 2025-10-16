# Treez Design System

A React component library built from Figma design system tokens, featuring Storybook for component development and documentation.

## Features

- **Design Tokens**: Automatically extracted from Figma design system
- **React Components**: Built with TypeScript and CSS Modules
- **Storybook**: Interactive component documentation and playground
- **Type-Safe**: Full TypeScript support with auto-generated types from Figma

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn
- Figma access token (for updating design tokens)

### Font Note

The design system uses **Roboto** (via Google Fonts) and **Circular Std**. Since Circular Std is a commercial font, the project currently uses **Inter** as a fallback. See [FONTS.md](./FONTS.md) for instructions on adding the actual Circular Std font files.

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

To update design tokens from Figma:

```bash
npm run tokens:extract   # Extract raw data from Figma
npm run tokens:generate  # Generate tokens from extracted data
```

Or run both commands together:

```bash
npm run tokens:update
```

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
│   │   │   ├── Button.tsx
│   │   │   ├── Button.module.css
│   │   │   ├── Button.stories.tsx
│   │   │   └── index.ts
│   │   ├── Typography/
│   │   │   └── ...
│   │   └── index.ts
│   ├── design-tokens/       # Generated design tokens
│   │   ├── tokens.ts        # TypeScript tokens
│   │   ├── tokens.css       # CSS variables
│   │   ├── tokens.json      # JSON tokens
│   │   └── figma-*.json     # Raw Figma data
│   └── stories/             # Additional Storybook stories
│       └── DesignTokens.stories.tsx
├── scripts/                 # Build and generation scripts
│   ├── extract-figma-data.js
│   └── generate-tokens.js
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
- **Figma API** - Design token extraction

## Contributing

1. Create components in `src/components/`
2. Add Storybook stories alongside components
3. Use design tokens from `src/design-tokens/tokens.ts`
4. Run `npm run storybook` to preview changes

## License

MIT
