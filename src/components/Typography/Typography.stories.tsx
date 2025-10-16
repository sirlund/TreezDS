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
      <div style={{ marginBottom: '8px', padding: '20px', backgroundColor: '#f9fafb', border: '1px solid #e5e7eb', borderRadius: '12px' }}>
        <h3 style={{ fontFamily: 'Roboto', fontWeight: '500', fontSize: '20px', marginBottom: '8px', color: '#1f2937' }}>Roboto Font Family</h3>
        <p style={{ fontSize: '14px', fontFamily: 'Circular Std', color: '#6b7280', margin: 0 }}>Used for headings and display text</p>
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
      <div style={{ padding: '20px', backgroundColor: '#f9fafb', border: '1px solid #e5e7eb', borderRadius: '12px' }}>
        <h3 style={{ fontFamily: 'Roboto', fontWeight: '500', fontSize: '20px', marginBottom: '8px', color: '#1f2937' }}>Circular Std Font Family</h3>
        <p style={{ fontSize: '14px', fontFamily: 'Circular Std', color: '#6b7280', margin: 0 }}>Used for body text and UI elements</p>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <div style={{ padding: '20px', backgroundColor: '#f9fafb', border: '1px solid #e5e7eb', borderRadius: '12px' }}>
          <Typography variant="body-large">
            Body Large - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
          </Typography>
          <p style={{ fontSize: '12px', fontFamily: 'Circular Std', color: '#6b7280', marginTop: '8px', margin: 0 }}>Perfect for important content and introductory paragraphs</p>
        </div>
        <div style={{ padding: '20px', backgroundColor: '#f9fafb', border: '1px solid #e5e7eb', borderRadius: '12px' }}>
          <Typography variant="body-medium">
            Body Medium - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
          </Typography>
          <p style={{ fontSize: '12px', fontFamily: 'Circular Std', color: '#6b7280', marginTop: '8px', margin: 0 }}>Default body text for most content</p>
        </div>
        <div style={{ padding: '20px', backgroundColor: '#f9fafb', border: '1px solid #e5e7eb', borderRadius: '12px' }}>
          <Typography variant="body-small">
            Body Small - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </Typography>
          <p style={{ fontSize: '12px', fontFamily: 'Circular Std', color: '#6b7280', marginTop: '8px', margin: 0 }}>For secondary information and captions</p>
        </div>
      </div>
    </div>
  ),
};

export const Labels: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <div style={{ padding: '20px', backgroundColor: '#f9fafb', border: '1px solid #e5e7eb', borderRadius: '12px' }}>
        <h3 style={{ fontFamily: 'Roboto', fontWeight: '500', fontSize: '20px', marginBottom: '8px', color: '#1f2937' }}>Label Styles</h3>
        <p style={{ fontSize: '14px', fontFamily: 'Circular Std', color: '#6b7280', margin: 0 }}>For form labels, UI components, and interactive elements</p>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
        <div style={{ padding: '20px', backgroundColor: '#f9fafb', border: '1px solid #e5e7eb', borderRadius: '12px' }}>
          <h4 style={{ fontSize: '16px', fontFamily: 'Roboto', fontWeight: '500', marginBottom: '12px', color: '#4b5563' }}>Regular Weight</h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <Typography variant="label-large">Label Large</Typography>
            <Typography variant="label-medium">Label Medium</Typography>
            <Typography variant="label-small">Label Small</Typography>
            <Typography variant="label-x small">Label X Small</Typography>
          </div>
        </div>
        <div style={{ padding: '20px', backgroundColor: '#f9fafb', border: '1px solid #e5e7eb', borderRadius: '12px' }}>
          <h4 style={{ fontSize: '16px', fontFamily: 'Roboto', fontWeight: '500', marginBottom: '12px', color: '#4b5563' }}>Strong Weight</h4>
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
      <div style={{ padding: '20px', backgroundColor: '#f9fafb', border: '1px solid #e5e7eb', borderRadius: '12px' }}>
        <h3 style={{ fontFamily: 'Roboto', fontWeight: '500', fontSize: '20px', marginBottom: '16px', color: '#1f2937' }}>Capitalized Text</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <Typography variant="capitalized text-large">Capitalized Text Large</Typography>
          <Typography variant="capitalized text-large strong">Capitalized Text Large Strong</Typography>
          <Typography variant="capitalized text-small strong">Capitalized Text Small Strong</Typography>
        </div>
      </div>

      <div style={{ padding: '20px', backgroundColor: '#f9fafb', border: '1px solid #e5e7eb', borderRadius: '12px' }}>
        <h3 style={{ fontFamily: 'Roboto', fontWeight: '500', fontSize: '20px', marginBottom: '16px', color: '#1f2937' }}>Link Styles</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <Typography variant="label link-large link" as="a" color="#6baa32">
            Large Link
          </Typography>
          <Typography variant="label link-medium link" as="a" color="#6baa32">
            Medium Link
          </Typography>
          <Typography variant="label link-small link" as="a" color="#6baa32">
            Small Link
          </Typography>
          <Typography variant="label link-x small link" as="a" color="#6baa32">
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
        <h3 style={{ fontFamily: 'Roboto', fontWeight: '500', fontSize: '20px', marginBottom: '16px', color: '#1f2937' }}>Font Family Usage</h3>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
          <div style={{ padding: '20px', backgroundColor: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: '12px' }}>
            <h4 style={{ fontFamily: 'Roboto', fontSize: '18px', fontWeight: '500', marginBottom: '12px', color: '#15803d' }}>Roboto</h4>
            <p style={{ fontSize: '14px', fontFamily: 'Circular Std', color: '#166534', marginBottom: '16px' }}>Used for headings and display text</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <Typography variant="headings-h3">Page Title</Typography>
              <Typography variant="headings-h5">Section Header</Typography>
              <Typography variant="headings-h7">Subsection</Typography>
            </div>
          </div>
          
          <div style={{ padding: '20px', backgroundColor: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: '12px' }}>
            <h4 style={{ fontFamily: 'Circular Std', fontSize: '18px', fontWeight: '500', marginBottom: '12px', color: '#15803d' }}>Circular Std</h4>
            <p style={{ fontSize: '14px', fontFamily: 'Circular Std', color: '#166534', marginBottom: '16px' }}>Used for body text and UI elements</p>
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
        <h3 style={{ fontFamily: 'Roboto', fontWeight: '500', fontSize: '20px', marginBottom: '16px', color: '#1f2937' }}>✅ Good Examples</h3>
        
        <div style={{ marginBottom: '24px', padding: '20px', backgroundColor: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: '12px' }}>
          <h4 style={{ fontSize: '16px', fontFamily: 'Roboto', fontWeight: '500', marginBottom: '12px', color: '#15803d' }}>Proper Heading Hierarchy</h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <Typography variant="headings-h2" as="h2">Main Article Title</Typography>
            <Typography variant="headings-h4" as="h3">Section Heading</Typography>
            <Typography variant="headings-h6" as="h4">Subsection</Typography>
            <Typography variant="body-medium">Body text follows with appropriate contrast and spacing.</Typography>
          </div>
        </div>

        <div style={{ marginBottom: '24px', padding: '20px', backgroundColor: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: '12px' }}>
          <h4 style={{ fontSize: '16px', fontFamily: 'Roboto', fontWeight: '500', marginBottom: '12px', color: '#15803d' }}>Form Layout</h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <div>
              <Typography variant="label-medium strong" as="label">Email Address</Typography>
              <div style={{ padding: '8px 12px', border: '1px solid #e5e7eb', borderRadius: '8px', marginTop: '4px', backgroundColor: '#fff' }}>
                <Typography variant="body-medium">user@example.com</Typography>
              </div>
              <Typography variant="label-small" color="#6b7280">We'll never share your email</Typography>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h3 style={{ fontFamily: 'Roboto', fontWeight: '500', fontSize: '20px', marginBottom: '16px', color: '#1f2937' }}>❌ Avoid These</h3>
        
        <div style={{ marginBottom: '24px', padding: '20px', backgroundColor: '#fef2f2', border: '1px solid #fecaca', borderRadius: '12px' }}>
          <h4 style={{ fontSize: '16px', fontFamily: 'Roboto', fontWeight: '500', marginBottom: '12px', color: '#991b1b' }}>Skipping Heading Levels</h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', opacity: 0.7 }}>
            <Typography variant="headings-h1">Main Title</Typography>
            <Typography variant="headings-h5">❌ Skipped H2, H3, H4</Typography>
            <p style={{ fontSize: '14px', fontFamily: 'Circular Std', color: '#991b1b', margin: 0 }}>This breaks accessibility and visual hierarchy</p>
          </div>
        </div>

        <div style={{ padding: '20px', backgroundColor: '#fef2f2', border: '1px solid #fecaca', borderRadius: '12px' }}>
          <h4 style={{ fontSize: '16px', fontFamily: 'Roboto', fontWeight: '500', marginBottom: '12px', color: '#991b1b' }}>Inconsistent Text Sizes</h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', opacity: 0.7 }}>
            <Typography variant="body-large">Some content here</Typography>
            <Typography variant="label-small">❌ Then jumping to very small text</Typography>
            <Typography variant="headings-h3">❌ Then very large text</Typography>
            <p style={{ fontSize: '14px', fontFamily: 'Circular Std', color: '#991b1b', margin: 0 }}>Creates visual chaos and poor user experience</p>
          </div>
        </div>
      </div>
    </div>
  ),
};
