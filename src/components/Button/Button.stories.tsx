import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Design System/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
# Button Component

A flexible button component from Treez Design System with three variants and sizes to fit different use cases.

## Variants

- **Primary** - For the most important actions (e.g., Submit, Save)
- **Secondary** - For complementary actions (e.g., Cancel, Back)  
- **Tertiary** - For low-priority actions in lists or toolbars (e.g., Edit, Delete)

## Sizes

- **Small** - Compact buttons for dense layouts
- **Medium** - Default size for most interfaces
- **Large** - Prominent buttons for key actions

## ✅ Do's

- Use Primary buttons for the main action on a page
- Limit to one Primary button per section
- Use consistent button sizing within the same context
- Provide clear, action-oriented labels (e.g., "Save Changes" not "Save")
- Add icons to improve clarity when helpful

## ❌ Don'ts

- Don't use multiple Primary buttons in the same area
- Don't use vague labels like "Click Here" or "Submit"
- Don't make buttons too small for touch interfaces
- Don't use Tertiary buttons for critical actions
- Don't mix button sizes inconsistently in button groups

## Technical Notes

- Tertiary buttons have reduced padding for visual balance
- Icon buttons automatically adjust padding for proper spacing
- All buttons support keyboard navigation and screen readers
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'tertiary'],
      description: 'Button variant - Primary (filled), Secondary (outlined), or Tertiary (text)',
      table: {
        type: { summary: 'primary | secondary | tertiary' },
        defaultValue: { summary: 'primary' },
      },
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'Button size',
      table: {
        type: { summary: 'small | medium | large' },
        defaultValue: { summary: 'medium' },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    fullWidth: {
      control: 'boolean',
      description: 'Make button full width',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Primary Button',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Secondary Button',
  },
};

export const Tertiary: Story = {
  args: {
    variant: 'tertiary',
    children: 'Tertiary Button',
  },
};

// Interactive playground for testing all props
export const Playground: Story = {
  args: {
    variant: 'primary',
    size: 'medium',
    children: 'Button Text',
  },
};

// Comprehensive overview of all variants and sizes
export const Overview: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', padding: '24px' }}>
      <div>
        <h3 style={{ marginBottom: '16px', fontFamily: 'system-ui', fontSize: '18px' }}>Variants</h3>
        <div style={{ display: 'flex', gap: '12px', alignItems: 'center', flexWrap: 'wrap' }}>
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="tertiary">Tertiary</Button>
        </div>
      </div>

      <div>
        <h3 style={{ marginBottom: '16px', fontFamily: 'system-ui', fontSize: '18px' }}>Sizes</h3>
        <div style={{ display: 'flex', gap: '12px', alignItems: 'center', flexWrap: 'wrap' }}>
          <Button size="small">Small</Button>
          <Button size="medium">Medium</Button>
          <Button size="large">Large</Button>
        </div>
      </div>

      <div>
        <h3 style={{ marginBottom: '16px', fontFamily: 'system-ui', fontSize: '18px' }}>With Icons</h3>
        <div style={{ display: 'flex', gap: '12px', alignItems: 'center', flexWrap: 'wrap' }}>
          <Button iconBefore={<span>←</span>}>Back</Button>
          <Button variant="secondary" iconAfter={<span>→</span>}>Next</Button>
          <Button variant="tertiary" iconBefore={<span>+</span>}>Add</Button>
        </div>
      </div>

      <div>
        <h3 style={{ marginBottom: '16px', fontFamily: 'system-ui', fontSize: '18px' }}>States</h3>
        <div style={{ display: 'flex', gap: '12px', alignItems: 'center', flexWrap: 'wrap' }}>
          <Button>Default</Button>
          <Button disabled>Disabled</Button>
        </div>
      </div>
    </div>
  ),
};

// Usage examples with proper context
export const UsageExamples: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', padding: '24px' }}>
      <div>
        <h3 style={{ marginBottom: '16px', fontFamily: 'system-ui', fontSize: '18px' }}>✅ Good Examples</h3>
        
        <div style={{ marginBottom: '24px' }}>
          <h4 style={{ marginBottom: '8px', fontFamily: 'system-ui', fontSize: '14px', color: '#666' }}>Form Actions</h4>
          <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
            <Button variant="primary">Save Changes</Button>
            <Button variant="secondary">Cancel</Button>
          </div>
        </div>

        <div style={{ marginBottom: '24px' }}>
          <h4 style={{ marginBottom: '8px', fontFamily: 'system-ui', fontSize: '14px', color: '#666' }}>Navigation</h4>
          <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
            <Button variant="secondary" iconBefore={<span>←</span>}>Back</Button>
            <Button variant="primary" iconAfter={<span>→</span>}>Continue</Button>
          </div>
        </div>

        <div style={{ marginBottom: '24px' }}>
          <h4 style={{ marginBottom: '8px', fontFamily: 'system-ui', fontSize: '14px', color: '#666' }}>List Actions</h4>
          <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
            <Button variant="tertiary" size="small" iconBefore={<span>✏️</span>}>Edit</Button>
            <Button variant="tertiary" size="small" iconBefore={<span>🗑️</span>}>Delete</Button>
            <Button variant="tertiary" size="small" iconBefore={<span>📋</span>}>Copy</Button>
          </div>
        </div>
      </div>

      <div>
        <h3 style={{ marginBottom: '16px', fontFamily: 'system-ui', fontSize: '18px' }}>❌ Avoid These</h3>
        
        <div style={{ marginBottom: '24px' }}>
          <h4 style={{ marginBottom: '8px', fontFamily: 'system-ui', fontSize: '14px', color: '#666' }}>Multiple Primary Buttons</h4>
          <div style={{ display: 'flex', gap: '8px', alignItems: 'center', opacity: 0.6 }}>
            <Button variant="primary">Save</Button>
            <Button variant="primary">Send</Button>
            <Button variant="primary">Submit</Button>
          </div>
          <p style={{ fontSize: '12px', color: '#999', marginTop: '4px' }}>❌ Too many competing primary actions</p>
        </div>

        <div style={{ marginBottom: '24px' }}>
          <h4 style={{ marginBottom: '8px', fontFamily: 'system-ui', fontSize: '14px', color: '#666' }}>Vague Labels</h4>
          <div style={{ display: 'flex', gap: '8px', alignItems: 'center', opacity: 0.6 }}>
            <Button variant="primary">Click Here</Button>
            <Button variant="secondary">Submit</Button>
            <Button variant="tertiary">Go</Button>
          </div>
          <p style={{ fontSize: '12px', color: '#999', marginTop: '4px' }}>❌ Labels don't describe the action clearly</p>
        </div>
      </div>
    </div>
  ),
};

// Full width button example
export const FullWidth: Story = {
  parameters: {
    layout: 'padded',
  },
  args: {
    variant: 'primary',
    fullWidth: true,
    children: 'Full Width Button',
  },
};

// Technical specifications and edge cases
export const TechnicalSpecs: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', padding: '24px' }}>
      <div>
        <h3 style={{ marginBottom: '16px', fontFamily: 'system-ui', fontSize: '18px' }}>Size Comparison</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {['primary', 'secondary', 'tertiary'].map((variant) => (
            <div key={variant} style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
              <span style={{ width: '80px', fontSize: '14px', textTransform: 'capitalize' }}>{variant}:</span>
              <Button variant={variant as any} size="small">Small</Button>
              <Button variant={variant as any} size="medium">Medium</Button>
              <Button variant={variant as any} size="large">Large</Button>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 style={{ marginBottom: '16px', fontFamily: 'system-ui', fontSize: '18px' }}>Padding Differences</h3>
        <p style={{ fontSize: '14px', color: '#666', marginBottom: '16px' }}>
          Tertiary buttons have reduced horizontal padding for visual balance
        </p>
        <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
          <Button variant="primary">Primary (20px)</Button>
          <Button variant="secondary">Secondary (20px)</Button>
          <Button variant="tertiary">Tertiary (10px)</Button>
        </div>
      </div>

      <div>
        <h3 style={{ marginBottom: '16px', fontFamily: 'system-ui', fontSize: '18px' }}>Icon Spacing</h3>
        <p style={{ fontSize: '14px', color: '#666', marginBottom: '16px' }}>
          Icon buttons automatically adjust padding for proper visual alignment
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
            <Button iconBefore={<span>+</span>}>With Icon</Button>
            <Button>Without Icon</Button>
          </div>
          <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
            <Button variant="secondary" iconAfter={<span>→</span>}>Icon After</Button>
            <Button variant="tertiary" iconBefore={<span>⚙️</span>} iconAfter={<span>↗</span>}>Both Icons</Button>
          </div>
        </div>
      </div>

      <div>
        <h3 style={{ marginBottom: '16px', fontFamily: 'system-ui', fontSize: '18px' }}>Accessibility</h3>
        <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
          <Button>Keyboard Focusable</Button>
          <Button disabled>Screen Reader Compatible</Button>
        </div>
        <p style={{ fontSize: '12px', color: '#666', marginTop: '8px' }}>
          All buttons support keyboard navigation and include proper ARIA attributes
        </p>
      </div>
    </div>
  ),
};
