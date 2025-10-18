# Typography Component

The Typography component provides consistent text styling across your application using the TreezDS type system.

## Overview

TreezDS uses two font families for optimal hierarchy and readability:
- **Roboto**: Headings and display text (H1-H7)
- **Circular Std**: Body text, labels, and UI elements

Each variant comes with predefined size, weight, line height, and letter spacing.

## Quick Start

```tsx
import { Typography } from '@treezds/components';

function MyComponent() {
  return (
    <Typography variant="headings-h2" as="h2">
      Welcome to TreezDS
    </Typography>
  );
}
```

## Font Families

### Roboto (Headings)
Used for: H1-H7, display text, emphasized content

```tsx
<Typography variant="headings-h1" as="h1">Main Heading</Typography>
```

### Circular Std (Body & UI)
Used for: Body text, labels, links, buttons, UI elements

```tsx
<Typography variant="body-large">This is body text</Typography>
```

## Variants

### Headings (H1-H7)

```tsx
{/* H1 - 45px - Main page heading */}
<Typography variant="headings-h1" as="h1">
  Main Page Heading
</Typography>

{/* H2 - 36px - Section heading */}
<Typography variant="headings-h2" as="h2">
  Section Heading
</Typography>

{/* H3 - 32px - Subsection heading */}
<Typography variant="headings-h3" as="h3">
  Subsection Heading
</Typography>

{/* H4 - 28px - Content heading */}
<Typography variant="headings-h4" as="h4">
  Content Heading
</Typography>

{/* H5 - 23px - Minor heading */}
<Typography variant="headings-h5" as="h5">
  Minor Heading
</Typography>

{/* H6 - 17px - Small heading */}
<Typography variant="headings-h6" as="h6">
  Small Heading
</Typography>

{/* H7 - 14px - Tiny heading/subtitle */}
<Typography variant="headings-h7" as="h6">
  Subtitle or Caption
</Typography>
```

### Body Text

```tsx
{/* Large body - 17px - Emphasized content */}
<Typography variant="body-large">
  Large body text for emphasized content
</Typography>

{/* Medium body - 14px - Standard content (most common) */}
<Typography variant="body-medium">
  Standard body text for most content
</Typography>

{/* Small body - 12px - Fine print */}
<Typography variant="body-small">
  Small body text for fine print
</Typography>
```

### Labels

```tsx
{/* Large label - 15px */}
<Typography variant="label-large" as="label">
  Form Label Large
</Typography>

{/* Medium label - 12px (standard) */}
<Typography variant="label-medium" as="label">
  Form Label
</Typography>

{/* Small label - 11px */}
<Typography variant="label-small" as="label">
  Compact Label
</Typography>

{/* Medium strong label - Bold variant */}
<Typography variant="label-medium strong" as="label">
  Bold Form Label
</Typography>
```

### Links

```tsx
{/* Large link - 15px */}
<Typography variant="link-large" as="a" href="/path">
  Large Link
</Typography>

{/* Medium link - 14px */}
<Typography variant="link-medium" as="a" href="/path">
  Standard Link
</Typography>

{/* Small link - 12px */}
<Typography variant="link-small" as="a" href="/path">
  Small Link
</Typography>
```

## Props API

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `TypographyTokenName` | **required** | Typography style from design system |
| `as` | `keyof JSX.IntrinsicElements` | `'p'` | HTML element to render |
| `children` | `React.ReactNode` | **required** | Text content |
| `className` | `string` | `''` | Additional CSS classes |
| `color` | `string` | `'inherit'` | Text color (CSS value) |

## Common Patterns

### Page Structure

```tsx
<div>
  <Typography variant="headings-h1" as="h1">
    Page Title
  </Typography>

  <Typography variant="body-large">
    Introduction paragraph with emphasized text.
  </Typography>

  <Typography variant="headings-h3" as="h2">
    Section Title
  </Typography>

  <Typography variant="body-medium">
    Standard body text for the section content.
  </Typography>
</div>
```

### Form Labels

```tsx
<div>
  <Typography variant="label-medium strong" as="label" htmlFor="email">
    Email Address
  </Typography>
  <input id="email" type="email" />

  <Typography variant="body-small" color="#666">
    We'll never share your email
  </Typography>
</div>
```

### Card Content

```tsx
<div>
  <Typography variant="headings-h5" as="h3">
    Card Title
  </Typography>
  <Typography variant="body-medium">
    Card description text
  </Typography>
  <Typography variant="link-medium" as="a" href="/learn-more">
    Learn More
  </Typography>
</div>
```

### Color Variants

```tsx
{/* Using semantic color tokens */}
<Typography variant="body-medium" color="var(--color-brand-primary)">
  Brand colored text
</Typography>

<Typography variant="body-medium" color="var(--color-state-error)">
  Error message
</Typography>

<Typography variant="body-medium" color="var(--color-state-success)">
  Success message
</Typography>
```

## Typography Variants Reference

| Variant | Font | Size | Weight | Line Height | Use Case |
|---------|------|------|--------|-------------|----------|
| `headings-h1` | Roboto | 45px | 400 | 52px | Main page heading |
| `headings-h2` | Roboto | 36px | 400 | 44px | Section heading |
| `headings-h3` | Roboto | 32px | 400 | 40px | Subsection |
| `headings-h4` | Roboto | 28px | 400 | 36px | Content heading |
| `headings-h5` | Roboto | 23px | 400 | 32px | Minor heading |
| `headings-h6` | Roboto | 17px | 400 | 24px | Small heading |
| `headings-h7` | Roboto | 14px | 600 | 20px | Subtitle |
| `body-large` | Circular Std | 17px | 400 | 28px | Emphasized content |
| `body-medium` | Circular Std | 14px | 400 | 20px | Standard text |
| `body-small` | Circular Std | 12px | 400 | 16px | Fine print |
| `label-large` | Circular Std | 15px | 500 | 20px | Large labels |
| `label-medium` | Circular Std | 12px | 500 | 16px | Standard labels |
| `label-small` | Circular Std | 11px | 400 | 16px | Compact labels |
| `link-large` | Circular Std | 15px | 500 | 20px | Large links |
| `link-medium` | Circular Std | 14px | 400 | 20px | Standard links |
| `link-small` | Circular Std | 12px | 400 | 16px | Small links |

## Semantic HTML

Always use appropriate HTML elements for accessibility:

```tsx
{/* Good: Semantic HTML */}
<Typography variant="headings-h1" as="h1">Page Title</Typography>
<Typography variant="headings-h2" as="h2">Section</Typography>
<Typography variant="body-medium" as="p">Paragraph</Typography>
<Typography variant="label-medium" as="label">Label</Typography>
<Typography variant="link-medium" as="a" href="/path">Link</Typography>

{/* Avoid: Wrong elements */}
<Typography variant="headings-h1" as="div">...</Typography> {/* ❌ */}
<Typography variant="label-medium" as="p">...</Typography> {/* ❌ */}
```

## Accessibility

- **Semantic HTML**: Use `as` prop to render correct HTML elements
- **Heading Hierarchy**: Follow proper heading order (H1 → H2 → H3)
- **Color Contrast**: Ensure sufficient contrast for readability
- **Font Sizing**: All sizes are accessible and scalable
- **Line Height**: Optimized for readability (1.4-1.6 ratio)

### Accessibility Examples

```tsx
{/* Good: Proper heading hierarchy */}
<Typography variant="headings-h1" as="h1">Page Title</Typography>
<Typography variant="headings-h2" as="h2">Section</Typography>
<Typography variant="headings-h3" as="h3">Subsection</Typography>

{/* Avoid: Skipping levels */}
<Typography variant="headings-h1" as="h1">Page Title</Typography>
<Typography variant="headings-h4" as="h4">Section</Typography> {/* ❌ Skipped H2, H3 */}

{/* Good: Labels with form controls */}
<Typography variant="label-medium" as="label" htmlFor="username">
  Username
</Typography>
<input id="username" type="text" />
```

## Design Tokens Used

This component uses typography tokens from `design-tokens/typography/`:

**Primitives:**
- Font families: Roboto, Circular Std
- Font sizes: 11px - 45px
- Font weights: 400, 500, 600
- Line heights: 16px - 52px

**Semantic Tokens:**
- Headings (h1-h7)
- Body variants (large, medium, small)
- Labels (large, medium, small)
- Links (large, medium, small)

## Examples

### Article Layout

```tsx
<article>
  <Typography variant="headings-h1" as="h1">
    Article Title
  </Typography>

  <Typography variant="body-small" color="#666">
    Published on January 15, 2025
  </Typography>

  <Typography variant="body-large">
    This is the introduction paragraph with larger text for emphasis.
  </Typography>

  <Typography variant="headings-h3" as="h2">
    First Section
  </Typography>

  <Typography variant="body-medium">
    Standard body text for the article content.
  </Typography>
</article>
```

### Navigation Links

```tsx
<nav>
  <Typography variant="link-medium" as="a" href="/">
    Home
  </Typography>
  <Typography variant="link-medium" as="a" href="/products">
    Products
  </Typography>
  <Typography variant="link-medium" as="a" href="/about">
    About
  </Typography>
</nav>
```

## Troubleshooting

### Fonts Not Loading

**Problem**: Custom fonts (Circular Std) not appearing

**Solution**: Ensure fonts are loaded in your app's global CSS or HTML:

```html
<!-- Add to index.html or global CSS -->
<link rel="stylesheet" href="/path/to/fonts.css" />
```

### Wrong Element Rendering

**Problem**: Typography renders as `<p>` but need different element

**Solution**: Use the `as` prop to specify the HTML element:

```tsx
<Typography variant="headings-h2" as="h2">Section</Typography>
```

### Custom Color Not Applying

**Problem**: Color prop doesn't work

**Solution**: Use valid CSS color value or CSS variable:

```tsx
<Typography color="#ff0000">Red text</Typography>
<Typography color="var(--color-state-error)">Error text</Typography>
```

## Related Components

- **[Button](../Button/README.md)** - Uses Typography tokens internally
- **Design Tokens** - See `src/design-tokens/typography/README.md`

## Migration Notes

If upgrading from previous Typography versions:

- `typographyLegacy` is deprecated, use `typography` semantic tokens
- Variant names follow `category-size` pattern (e.g., `body-medium`)
- Use `as` prop instead of custom wrapper components
- Font families are now managed via design tokens

---

**Status**: Stable
**Last Updated**: 2025-10-18
