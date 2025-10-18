# Button Component

The Button component is a fundamental UI element that triggers actions and events in your application.

## Overview

TreezDS Button component supports three visual variants, three sizes, and optional icons. It's designed to be accessible, responsive, and easy to use.

**Figma Design**: [Button Component](https://www.figma.com/design/zPEk7VNZnVzhGaNCnalP6o/Design-System?node-id=16340-114580)

## Quick Start

```tsx
import { Button } from '@treezds/components';

function MyComponent() {
  return (
    <Button variant="primary" onClick={() => console.log('Clicked!')}>
      Click me
    </Button>
  );
}
```

## Variants

### Primary (Default)
Filled button with brand color background. Use for primary actions.

```tsx
<Button variant="primary">Save Changes</Button>
```

### Secondary
Outlined button with border. Use for secondary actions.

```tsx
<Button variant="secondary">Cancel</Button>
```

### Tertiary
Text-only button without background or border. Use for tertiary/low-emphasis actions.

```tsx
<Button variant="tertiary">Learn More</Button>
```

## Sizes

### Small
**Height**: 32px | **Use for**: Compact interfaces, tables, toolbars

```tsx
<Button size="small">Small Button</Button>
```

### Medium (Default)
**Height**: 40px | **Use for**: Standard interfaces, forms

```tsx
<Button size="medium">Medium Button</Button>
```

### Large
**Height**: 52px | **Use for**: Hero sections, emphasis, mobile-first

```tsx
<Button size="large">Large Button</Button>
```

## Icons

Add icons before or after button text using Material Symbols.

### Icon Before

```tsx
<Button iconBefore="add">Create New</Button>
<Button iconBefore="download">Download</Button>
```

### Icon After

```tsx
<Button iconAfter="arrow_forward">Continue</Button>
<Button iconAfter="open_in_new">Open Link</Button>
```

### Both Icons

```tsx
<Button iconBefore="settings" iconAfter="verified">
  Verified Settings
</Button>
```

## Props API

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'primary' \| 'secondary' \| 'tertiary'` | `'primary'` | Visual style variant |
| `size` | `'small' \| 'medium' \| 'large'` | `'medium'` | Button size |
| `iconBefore` | `IconName` | `undefined` | Icon displayed before text |
| `iconAfter` | `IconName` | `undefined` | Icon displayed after text |
| `children` | `React.ReactNode` | **required** | Button content/label |
| `onClick` | `(event: MouseEvent) => void` | `undefined` | Click event handler |
| `disabled` | `boolean` | `false` | Disabled state |
| `className` | `string` | `''` | Additional CSS classes |
| `type` | `'button' \| 'submit' \| 'reset'` | `'button'` | HTML button type |
| `fullWidth` | `boolean` | `false` | Make button 100% width |

## Common Patterns

### Form Submit Button

```tsx
<Button type="submit" variant="primary" size="large">
  Submit Form
</Button>
```

### Loading State

```tsx
<Button disabled={isLoading}>
  {isLoading ? 'Loading...' : 'Submit'}
</Button>
```

### Full Width Button

```tsx
<Button fullWidth variant="primary">
  Create Account
</Button>
```

### Button Group

```tsx
<div style={{ display: 'flex', gap: '12px' }}>
  <Button variant="secondary">Cancel</Button>
  <Button variant="primary">Confirm</Button>
</div>
```

### Icon-Only Pattern

```tsx
{/* Use iconBefore with accessible label */}
<Button variant="tertiary" iconBefore="close" aria-label="Close">
  {/* Visually hidden text for screen readers */}
  <span style={{ position: 'absolute', left: '-10000px' }}>Close</span>
</Button>
```

## States

### Default
Normal interactive state

### Hover
Visual feedback on mouse hover (automatically styled)

### Focus
Keyboard focus indicator for accessibility (automatically styled)

### Disabled
Non-interactive state

```tsx
<Button disabled>Disabled Button</Button>
```

## Accessibility

- **Keyboard Navigation**: Buttons are focusable and activatable with Enter/Space keys
- **Screen Readers**: Always provide meaningful button text
- **Focus Indicators**: Visible focus ring for keyboard navigation
- **ARIA**: Use `aria-label` for icon-only buttons
- **Disabled State**: Properly communicated to assistive technologies

### Accessibility Examples

```tsx
{/* Good: Clear label */}
<Button iconBefore="delete">Delete Item</Button>

{/* Good: Icon-only with aria-label */}
<Button iconBefore="settings" aria-label="Open settings" />

{/* Avoid: Icon-only without label */}
<Button iconBefore="settings" /> {/* ❌ Not accessible */}
```

## Design Tokens Used

This component uses semantic tokens from `design-tokens/semantic-colors.css`:

- `--color-brand-primary` - Primary button background
- `--color-brand-primary-dark` - Primary button hover
- `--color-neutral-grey-900` - Secondary button border
- `--color-neutral-white` - Text colors
- Icon sizes: `xs`, `s`, `m` from Icon component

## Examples

### Action Buttons

```tsx
<Button variant="primary" iconBefore="save">
  Save
</Button>

<Button variant="secondary" iconBefore="cancel">
  Cancel
</Button>

<Button variant="tertiary">
  Skip
</Button>
```

### Navigation Buttons

```tsx
<Button iconAfter="arrow_forward">
  Next Step
</Button>

<Button iconBefore="arrow_back">
  Go Back
</Button>
```

### Destructive Actions

```tsx
<Button variant="secondary" iconBefore="delete">
  Delete
</Button>
```

## Troubleshooting

### Icons Not Showing

**Problem**: Icons don't appear in the button

**Solution**: Ensure Material Symbols font is loaded and icon name is valid

```tsx
// Check icon name is correct
import { allIconNames } from '../Icon/Icon';
console.log(allIconNames); // See all available icons
```

### Button Not Full Width

**Problem**: Button doesn't fill container width

**Solution**: Use `fullWidth` prop

```tsx
<Button fullWidth>Full Width Button</Button>
```

### Custom Styling Not Applying

**Problem**: Custom className styles are overridden

**Solution**: Use more specific CSS selectors or CSS modules

```css
/* Use more specific selector */
.myCustomButton.myCustomButton {
  background: red;
}
```

## Related Components

- **[Icon](../Icon/README.md)** - Icon component used within buttons
- **[Typography](../Typography/README.md)** - Text styling for button labels

## Migration Notes

If upgrading from Button v1:

- `type` prop renamed to `variant`
- Icon props use Material Symbols instead of custom SVGs
- Size values remain the same: `small`, `medium`, `large`
- CSS class names changed (use CSS modules)

---

**Version**: v2 (beta)
**Status**: Stable
**Last Updated**: 2025-10-18
