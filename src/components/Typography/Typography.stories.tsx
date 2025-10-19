import type { Meta, StoryObj } from '@storybook/react';
import { Typography } from './Typography';

// Clean variant list for the 26 supported typography variants
const typographyVariants = [
  // Headings (7)
  'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'h7',
  // Body (3)
  'body-large', 'body-medium', 'body-small',
  // Labels (8)
  'label-large', 'label-large-strong', 'label-medium', 'label-medium-strong',
  'label-small', 'label-small-strong', 'label-x-small', 'label-x-small-strong',
  // Links (4)
  'link-large', 'link-medium', 'link-small', 'link-x-small',
  // Caps (3)
  'caps-large', 'caps-large-strong', 'caps-small-strong',
];

const meta: Meta<typeof Typography> = {
  title: 'Design System/Typography',
  component: Typography,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
The Typography component provides a consistent, token-based text styling system across the design system. It supports 26 clean variants organized into headings, body text, labels, links, and caps.

The system uses two font families with distinct purposes:
- **Roboto (primary)**: Base content - body text, links, lists, paragraphs
- **Circular Std (secondary)**: Featured/UI elements - headings, buttons, labels, chips, navigation

Each variant is defined with optimized font size, weight, line height, and letter spacing for clear visual hierarchy and readability.

**Performance:** Uses CSS variables (--typo-*) for optimal rendering and theming support.
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: typographyVariants,
      description: 'Typography variant from design system (26 clean variants)',
    },
    as: {
      control: 'select',
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'span', 'div', 'label'],
      description: 'HTML element to render',
    },
    color: {
      control: 'color',
      description: 'Text color (CSS value or design token)',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Typography>;

// Main example - shown first
export const Example: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <Typography variant="h2" as="h2">
        Typography System
      </Typography>
      <Typography variant="body-large">
        A comprehensive typography system using Circular for featured content and UI elements (headings, buttons, labels) and Roboto for base content (body text, links, lists), creating clear visual hierarchy and excellent readability.
      </Typography>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <Typography variant="h4" as="h3">Section Heading</Typography>
        <Typography variant="body-medium">
          This is body text at the medium size, perfect for most content and reading experiences.
        </Typography>
        <Typography variant="label-medium-strong" as="label">Form Label</Typography>
      </div>
    </div>
  ),
};

export const Headings: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <div style={{ marginBottom: '8px', padding: '20px', backgroundColor: '#f9fafb', border: '1px solid #e5e7eb', borderRadius: '12px' }}>
        <h3 style={{ fontFamily: 'Circular Std', fontWeight: '500', fontSize: '20px', marginBottom: '8px', color: '#1f2937' }}>Circular Std Font Family</h3>
        <p style={{ fontSize: '14px', fontFamily: 'Roboto', color: '#6b7280', margin: 0 }}>Used for headings, featured content, and UI elements</p>
      </div>
      <Typography variant="h1" as="h1">
        H1 - The quick brown fox jumps over the lazy dog
      </Typography>
      <Typography variant="h2" as="h2">
        H2 - The quick brown fox jumps over the lazy dog
      </Typography>
      <Typography variant="h3" as="h3">
        H3 - The quick brown fox jumps over the lazy dog
      </Typography>
      <Typography variant="h4" as="h4">
        H4 - The quick brown fox jumps over the lazy dog
      </Typography>
      <Typography variant="h5" as="h5">
        H5 - The quick brown fox jumps over the lazy dog
      </Typography>
      <Typography variant="h6" as="h6">
        H6 - The quick brown fox jumps over the lazy dog
      </Typography>
      <Typography variant="h7" as="h6">
        H7 - The quick brown fox jumps over the lazy dog
      </Typography>
    </div>
  ),
};

export const BodyText: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div style={{ padding: '20px', backgroundColor: '#f9fafb', border: '1px solid #e5e7eb', borderRadius: '12px' }}>
        <h3 style={{ fontFamily: 'Circular Std', fontWeight: '500', fontSize: '20px', marginBottom: '8px', color: '#1f2937' }}>Roboto Font Family</h3>
        <p style={{ fontSize: '14px', fontFamily: 'Roboto', color: '#6b7280', margin: 0 }}>Used for body text, links, lists, and base content</p>
        <p style={{ fontSize: '12px', fontFamily: 'Circular Std', color: '#f59e0b', marginTop: '8px', fontWeight: '500', margin: 0 }}>⚠️ Using Inter as fallback for Circular Std (commercial font)</p>
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
        <h3 style={{ fontFamily: 'Circular Std', fontWeight: '500', fontSize: '20px', marginBottom: '8px', color: '#1f2937' }}>Circular Std Font Family</h3>
        <p style={{ fontSize: '14px', fontFamily: 'Roboto', color: '#6b7280', margin: 0 }}>For form labels, button text, UI components, and interactive elements</p>
        <p style={{ fontSize: '12px', fontFamily: 'Circular Std', color: '#f59e0b', marginTop: '8px', fontWeight: '500', margin: 0 }}>⚠️ Using Inter as fallback for Circular Std (commercial font)</p>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
        <div style={{ padding: '20px', backgroundColor: '#f9fafb', border: '1px solid #e5e7eb', borderRadius: '12px' }}>
          <h4 style={{ fontSize: '16px', fontFamily: 'Roboto', fontWeight: '500', marginBottom: '12px', color: '#4b5563' }}>Regular Weight</h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <Typography variant="label-large">Label Large</Typography>
            <Typography variant="label-medium">Label Medium</Typography>
            <Typography variant="label-small">Label Small</Typography>
            <Typography variant="label-x-small">Label X-Small</Typography>
          </div>
        </div>
        <div style={{ padding: '20px', backgroundColor: '#f9fafb', border: '1px solid #e5e7eb', borderRadius: '12px' }}>
          <h4 style={{ fontSize: '16px', fontFamily: 'Roboto', fontWeight: '500', marginBottom: '12px', color: '#4b5563' }}>Strong Weight</h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <Typography variant="label-large-strong">Label Large Strong</Typography>
            <Typography variant="label-medium-strong">Label Medium Strong</Typography>
            <Typography variant="label-small-strong">Label Small Strong</Typography>
            <Typography variant="label-x-small-strong">Label X-Small Strong</Typography>
          </div>
        </div>
      </div>
    </div>
  ),
};

export const Links: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <div style={{ padding: '20px', backgroundColor: '#f9fafb', border: '1px solid #e5e7eb', borderRadius: '12px' }}>
        <h3 style={{ fontFamily: 'Roboto', fontWeight: '500', fontSize: '20px', marginBottom: '8px', color: '#1f2937' }}>Link Typography</h3>
        <p style={{ fontSize: '14px', fontFamily: 'Circular Std', color: '#6b7280', margin: 0 }}>For hyperlinks and interactive text elements</p>
      </div>
      <div style={{ padding: '20px', backgroundColor: '#f9fafb', border: '1px solid #e5e7eb', borderRadius: '12px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <Typography variant="link-large" as="span" color="#6baa32">
            Link Large - Click here to learn more
          </Typography>
          <Typography variant="link-medium" as="span" color="#6baa32">
            Link Medium - Read the documentation
          </Typography>
          <Typography variant="link-small" as="span" color="#6baa32">
            Link Small - View details
          </Typography>
          <Typography variant="link-x-small" as="span" color="#6baa32">
            Link X-Small - More info
          </Typography>
        </div>
      </div>
    </div>
  ),
};

export const Caps: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <div style={{ padding: '20px', backgroundColor: '#f9fafb', border: '1px solid #e5e7eb', borderRadius: '12px' }}>
        <h3 style={{ fontFamily: 'Roboto', fontWeight: '500', fontSize: '20px', marginBottom: '8px', color: '#1f2937' }}>Caps Typography</h3>
        <p style={{ fontSize: '14px', fontFamily: 'Circular Std', color: '#6b7280', margin: 0 }}>All caps text for categories, tags, and labels</p>
      </div>
      <div style={{ padding: '20px', backgroundColor: '#f9fafb', border: '1px solid #e5e7eb', borderRadius: '12px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <Typography variant="caps-large">Category Label</Typography>
          <Typography variant="caps-large-strong">Featured Tag</Typography>
          <Typography variant="caps-small-strong">Tiny Badge</Typography>
        </div>
      </div>
    </div>
  ),
};

// Interactive playground for testing
export const Playground: Story = {
  args: {
    variant: 'h2',
    as: 'h2',
    children: 'The quick brown fox jumps over the lazy dog',
  },
};

// Do's and Don'ts in 2-column card layout
export const DosAndDonts: Story = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', maxWidth: '1200px' }}>
      {/* DO's Column */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <h3 style={{ marginBottom: '8px', fontFamily: 'Roboto', fontWeight: '500', fontSize: '20px', color: '#15803d' }}>Do's</h3>

        {/* Proper Hierarchy - Good */}
        <div style={{ padding: '20px', backgroundColor: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: '12px' }}>
          <h4 style={{ marginBottom: '12px', fontFamily: 'Roboto', fontWeight: '500', fontSize: '16px', color: '#15803d' }}>Follow heading hierarchy</h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '8px' }}>
            <Typography variant="h2" as="h2">Page Title (H2)</Typography>
            <Typography variant="h4" as="h3">Section (H4)</Typography>
            <Typography variant="h6" as="h4">Subsection (H6)</Typography>
          </div>
          <p style={{ fontSize: '14px', fontFamily: 'Circular Std', color: '#166534', margin: 0 }}>Maintain logical heading order for accessibility</p>
        </div>

        {/* Appropriate sizes - Good */}
        <div style={{ padding: '20px', backgroundColor: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: '12px' }}>
          <h4 style={{ marginBottom: '12px', fontFamily: 'Roboto', fontWeight: '500', fontSize: '16px', color: '#15803d' }}>Use appropriate text sizes</h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '8px' }}>
            <Typography variant="body-large">Important content in large size</Typography>
            <Typography variant="body-medium">Regular content in medium</Typography>
            <Typography variant="body-small">Secondary info in small</Typography>
          </div>
          <p style={{ fontSize: '14px', fontFamily: 'Circular Std', color: '#166534', margin: 0 }}>Match text size to content importance</p>
        </div>

        {/* Good contrast - Good */}
        <div style={{ padding: '20px', backgroundColor: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: '12px' }}>
          <h4 style={{ marginBottom: '12px', fontFamily: 'Roboto', fontWeight: '500', fontSize: '16px', color: '#15803d' }}>Ensure good contrast</h4>
          <div style={{ marginBottom: '8px' }}>
            <Typography variant="body-medium" color="#1f2937">Dark text on light background</Typography>
          </div>
          <p style={{ fontSize: '14px', fontFamily: 'Circular Std', color: '#166534', margin: 0 }}>Meet WCAG contrast requirements for readability</p>
        </div>
      </div>

      {/* DON'T Column */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <h3 style={{ marginBottom: '8px', fontFamily: 'Roboto', fontWeight: '500', fontSize: '20px', color: '#991b1b' }}>Don'ts</h3>

        {/* Skipping levels - Bad */}
        <div style={{ padding: '20px', backgroundColor: '#fef2f2', border: '1px solid #fecaca', borderRadius: '12px' }}>
          <h4 style={{ marginBottom: '12px', fontFamily: 'Roboto', fontWeight: '500', fontSize: '16px', color: '#991b1b' }}>Skip heading levels</h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '8px', opacity: 0.7 }}>
            <Typography variant="h1">Title (H1)</Typography>
            <Typography variant="h5">Skipped to H5</Typography>
          </div>
          <p style={{ fontSize: '14px', fontFamily: 'Circular Std', color: '#991b1b', margin: 0 }}>This breaks screen reader navigation and hierarchy</p>
        </div>

        {/* Too many sizes - Bad */}
        <div style={{ padding: '20px', backgroundColor: '#fef2f2', border: '1px solid #fecaca', borderRadius: '12px' }}>
          <h4 style={{ marginBottom: '12px', fontFamily: 'Roboto', fontWeight: '500', fontSize: '16px', color: '#991b1b' }}>Mix too many text sizes</h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', marginBottom: '8px', opacity: 0.7 }}>
            <Typography variant="body-large">Large text</Typography>
            <Typography variant="label-x-small">Then tiny text</Typography>
            <Typography variant="h3">Then huge text</Typography>
          </div>
          <p style={{ fontSize: '14px', fontFamily: 'Circular Std', color: '#991b1b', margin: 0 }}>Creates visual chaos and poor readability</p>
        </div>

        {/* Poor contrast - Bad */}
        <div style={{ padding: '20px', backgroundColor: '#fef2f2', border: '1px solid #fecaca', borderRadius: '12px' }}>
          <h4 style={{ marginBottom: '12px', fontFamily: 'Roboto', fontWeight: '500', fontSize: '16px', color: '#991b1b' }}>Use low contrast text</h4>
          <div style={{ marginBottom: '8px', opacity: 0.7 }}>
            <Typography variant="body-medium" color="#d1d5db">Light gray on white background</Typography>
          </div>
          <p style={{ fontSize: '14px', fontFamily: 'Circular Std', color: '#991b1b', margin: 0 }}>Fails accessibility standards and hard to read</p>
        </div>
      </div>
    </div>
  ),
};

export const FontShowcase: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      <div>
        <h3 style={{ fontFamily: 'Circular Std', fontWeight: '500', fontSize: '20px', marginBottom: '16px', color: '#1f2937' }}>Font Family Usage</h3>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
          <div style={{ padding: '20px', backgroundColor: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: '12px' }}>
            <h4 style={{ fontFamily: 'Circular Std', fontSize: '18px', fontWeight: '500', marginBottom: '12px', color: '#15803d' }}>Circular Std</h4>
            <p style={{ fontSize: '14px', fontFamily: 'Roboto', color: '#166534', marginBottom: '16px' }}>Featured content and UI elements</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <Typography variant="h3">Page Title</Typography>
              <Typography variant="h5">Section Header</Typography>
              <Typography variant="label-medium-strong">Form Label</Typography>
            </div>
          </div>

          <div style={{ padding: '20px', backgroundColor: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: '12px' }}>
            <h4 style={{ fontFamily: 'Circular Std', fontSize: '18px', fontWeight: '500', marginBottom: '12px', color: '#15803d' }}>Roboto</h4>
            <p style={{ fontSize: '14px', fontFamily: 'Roboto', color: '#166534', marginBottom: '16px' }}>Base content - body text, links, lists</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <Typography variant="body-medium">This is body text for reading</Typography>
              <Typography variant="link-medium">This is a link</Typography>
              <Typography variant="body-small">Helper text</Typography>
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
};
