import type { Meta, StoryObj } from '@storybook/react';
import { Typography } from './Typography';
import { typography } from '../../design-tokens/tokens';

const meta: Meta<typeof Typography> = {
  title: 'Design System/Typography',
  component: Typography,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
# Typography System

A comprehensive typography system using two carefully selected fonts to create clear visual hierarchy and excellent readability.

## Font Families

- **Roboto** - Used for headings and display text for strong visual impact
- **Circular Std** - Used for labels, body text, and UI elements for optimal readability

## Type Scale

- **Headings (H1-H7)** - Roboto font for clear hierarchy and emphasis
- **Body Text** - Circular Std in large, medium, and small sizes
- **Labels** - Circular Std for form labels and UI text
- **Links** - Circular Std with appropriate styling for interactive elements

## ✅ Do's

- Use headings (H1-H7) to establish clear content hierarchy
- Choose body text sizes based on content importance and reading distance
- Use label styles for form elements and UI components
- Maintain consistent line spacing for readability
- Combine font weights appropriately (regular/strong)

## ❌ Don'ts

- Don't skip heading levels (e.g., H1 to H3 without H2)
- Don't use too many different text sizes in one interface
- Don't use small text for important information
- Don't mix fonts outside the established system
- Don't use text that's too light against light backgrounds

## Accessibility

- All text meets WCAG contrast requirements
- Semantic HTML elements support screen readers
- Consistent spacing improves readability for all users
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: Object.keys(typography),
      description: 'Typography variant from Figma design system',
    },
    as: {
      control: 'select',
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'span', 'div', 'label'],
      description: 'HTML element to render',
    },
    color: {
      control: 'color',
      description: 'Text color',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Typography>;

export const Headings: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <div style={{ marginBottom: '8px' }}>
        <h3 style={{ fontFamily: 'system-ui', fontSize: '18px', marginBottom: '8px' }}>Roboto Font Family</h3>
        <p style={{ fontSize: '14px', color: '#666', margin: 0 }}>Used for headings and display text</p>
      </div>
      <Typography variant="headings-h1" as="h1">
        H1 - The quick brown fox jumps over the lazy dog
      </Typography>
      <Typography variant="headings-h2" as="h2">
        H2 - The quick brown fox jumps over the lazy dog
      </Typography>
      <Typography variant="headings-h3" as="h3">
        H3 - The quick brown fox jumps over the lazy dog
      </Typography>
      <Typography variant="headings-h4" as="h4">
        H4 - The quick brown fox jumps over the lazy dog
      </Typography>
      <Typography variant="headings-h5" as="h5">
        H5 - The quick brown fox jumps over the lazy dog
      </Typography>
      <Typography variant="headings-h6" as="h6">
        H6 - The quick brown fox jumps over the lazy dog
      </Typography>
      <Typography variant="headings-h7" as="h6">
        H7 - The quick brown fox jumps over the lazy dog
      </Typography>
    </div>
  ),
};

export const BodyText: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div>
        <h3 style={{ fontFamily: 'system-ui', fontSize: '18px', marginBottom: '8px' }}>Circular Std Font Family</h3>
        <p style={{ fontSize: '14px', color: '#666', margin: 0, marginBottom: '16px' }}>Used for body text and UI elements</p>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <div>
          <Typography variant="body-large">
            Body Large - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
          </Typography>
          <small style={{ color: '#666' }}>Perfect for important content and introductory paragraphs</small>
        </div>
        <div>
          <Typography variant="body-medium">
            Body Medium - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
          </Typography>
          <small style={{ color: '#666' }}>Default body text for most content</small>
        </div>
        <div>
          <Typography variant="body-small">
            Body Small - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </Typography>
          <small style={{ color: '#666' }}>For secondary information and captions</small>
        </div>
      </div>
    </div>
  ),
};

export const Labels: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <div>
        <h3 style={{ fontFamily: 'system-ui', fontSize: '18px', marginBottom: '8px' }}>Label Styles</h3>
        <p style={{ fontSize: '14px', color: '#666', margin: 0, marginBottom: '16px' }}>For form labels, UI components, and interactive elements</p>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
        <div>
          <h4 style={{ fontSize: '14px', marginBottom: '12px', color: '#333' }}>Regular Weight</h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <Typography variant="label-large">Label Large</Typography>
            <Typography variant="label-medium">Label Medium</Typography>
            <Typography variant="label-small">Label Small</Typography>
            <Typography variant="label-x small">Label X Small</Typography>
          </div>
        </div>
        <div>
          <h4 style={{ fontSize: '14px', marginBottom: '12px', color: '#333' }}>Strong Weight</h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <Typography variant="label-large strong">Label Large Strong</Typography>
            <Typography variant="label-medium strong">Label Medium Strong</Typography>
            <Typography variant="label-small strong">Label Small Strong</Typography>
            <Typography variant="label-x small strong">Label X Small Strong</Typography>
          </div>
        </div>
      </div>
    </div>
  ),
};

// Interactive playground for testing
export const Playground: Story = {
  args: {
    variant: 'headings-h1',
    as: 'h1',
    children: 'The quick brown fox jumps over the lazy dog',
  },
};

export const SpecializedText: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div>
        <h3 style={{ fontFamily: 'system-ui', fontSize: '18px', marginBottom: '16px' }}>Capitalized Text</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <Typography variant="capitalized text-large">Capitalized Text Large</Typography>
          <Typography variant="capitalized text-large strong">Capitalized Text Large Strong</Typography>
          <Typography variant="capitalized text-small strong">Capitalized Text Small Strong</Typography>
        </div>
      </div>

      <div>
        <h3 style={{ fontFamily: 'system-ui', fontSize: '18px', marginBottom: '16px' }}>Link Styles</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <Typography variant="label link-large link" as="a" color="#1976d2">
            Large Link
          </Typography>
          <Typography variant="label link-medium link" as="a" color="#1976d2">
            Medium Link
          </Typography>
          <Typography variant="label link-small link" as="a" color="#1976d2">
            Small Link
          </Typography>
          <Typography variant="label link-x small link" as="a" color="#1976d2">
            X Small Link
          </Typography>
        </div>
      </div>
    </div>
  ),
};

export const FontShowcase: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      <div>
        <h3 style={{ fontFamily: 'system-ui', fontSize: '18px', marginBottom: '16px' }}>Font Family Usage</h3>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
          <div style={{ padding: '20px', backgroundColor: '#f8f9fa', borderRadius: '8px' }}>
            <h4 style={{ fontFamily: 'Roboto', fontSize: '16px', marginBottom: '12px', color: '#333' }}>Roboto</h4>
            <p style={{ fontSize: '14px', color: '#666', marginBottom: '16px' }}>Used for headings and display text</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <Typography variant="headings-h3">Page Title</Typography>
              <Typography variant="headings-h5">Section Header</Typography>
              <Typography variant="headings-h7">Subsection</Typography>
            </div>
          </div>
          
          <div style={{ padding: '20px', backgroundColor: '#f0f8ff', borderRadius: '8px' }}>
            <h4 style={{ fontFamily: 'Circular Std', fontSize: '16px', marginBottom: '12px', color: '#333' }}>Circular Std</h4>
            <p style={{ fontSize: '14px', color: '#666', marginBottom: '16px' }}>Used for body text and UI elements</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <Typography variant="body-medium">This is body text for reading</Typography>
              <Typography variant="label-medium strong">Form Label</Typography>
              <Typography variant="label-small">Helper text</Typography>
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
};

export const UsageExamples: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      <div>
        <h3 style={{ fontFamily: 'system-ui', fontSize: '18px', marginBottom: '16px' }}>✅ Good Examples</h3>
        
        <div style={{ marginBottom: '24px', padding: '16px', backgroundColor: '#f8fff8', borderRadius: '8px', border: '1px solid #d4edda' }}>
          <h4 style={{ fontSize: '14px', marginBottom: '12px', color: '#155724' }}>Proper Heading Hierarchy</h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <Typography variant="headings-h2" as="h2">Main Article Title</Typography>
            <Typography variant="headings-h4" as="h3">Section Heading</Typography>
            <Typography variant="headings-h6" as="h4">Subsection</Typography>
            <Typography variant="body-medium">Body text follows with appropriate contrast and spacing.</Typography>
          </div>
        </div>

        <div style={{ marginBottom: '24px', padding: '16px', backgroundColor: '#f8fff8', borderRadius: '8px', border: '1px solid #d4edda' }}>
          <h4 style={{ fontSize: '14px', marginBottom: '12px', color: '#155724' }}>Form Layout</h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <div>
              <Typography variant="label-medium strong" as="label">Email Address</Typography>
              <div style={{ padding: '8px 12px', border: '1px solid #ccc', borderRadius: '4px', marginTop: '4px' }}>
                <Typography variant="body-medium">user@example.com</Typography>
              </div>
              <Typography variant="label-small" color="#666">We'll never share your email</Typography>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h3 style={{ fontFamily: 'system-ui', fontSize: '18px', marginBottom: '16px' }}>❌ Avoid These</h3>
        
        <div style={{ marginBottom: '24px', padding: '16px', backgroundColor: '#fff8f8', borderRadius: '8px', border: '1px solid #f5c6cb', opacity: 0.7 }}>
          <h4 style={{ fontSize: '14px', marginBottom: '12px', color: '#721c24' }}>Skipping Heading Levels</h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <Typography variant="headings-h1">Main Title</Typography>
            <Typography variant="headings-h5">❌ Skipped H2, H3, H4</Typography>
            <p style={{ fontSize: '12px', color: '#721c24', margin: 0 }}>This breaks accessibility and visual hierarchy</p>
          </div>
        </div>

        <div style={{ padding: '16px', backgroundColor: '#fff8f8', borderRadius: '8px', border: '1px solid #f5c6cb', opacity: 0.7 }}>
          <h4 style={{ fontSize: '14px', marginBottom: '12px', color: '#721c24' }}>Inconsistent Text Sizes</h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <Typography variant="body-large">Some content here</Typography>
            <Typography variant="label-small">❌ Then jumping to very small text</Typography>
            <Typography variant="headings-h3">❌ Then very large text</Typography>
            <p style={{ fontSize: '12px', color: '#721c24', margin: 0 }}>Creates visual chaos and poor user experience</p>
          </div>
        </div>
      </div>
    </div>
  ),
};
