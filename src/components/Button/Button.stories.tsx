import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';
import { allIconNames } from '../Icon/Icon';

const meta: Meta<typeof Button> = {
  title: 'Design System/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
The Button component allows users to create visually appealing experiences with flexible customization options. It supports three different types of buttons: Primary (filled), Secondary (outlined), and Tertiary (text).

Additionally, buttons can be created in three different sizes: Medium (default), Large, and Small.
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
    iconBefore: {
      control: 'select',
      options: [undefined, ...allIconNames],
      description: 'Icon name to display before the button text',
    },
    iconAfter: {
      control: 'select',
      options: [undefined, ...allIconNames],
      description: 'Icon name to display after the button text',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

// Main example - shown first
export const Example: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px', alignItems: 'center', flexWrap: 'wrap' }}>
      <Button variant="primary">Primary Button</Button>
      <Button variant="secondary">Secondary Button</Button>
      <Button variant="tertiary">Tertiary Button</Button>
    </div>
  ),
};

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

// All variants in one view
export const Variants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div>
        <h3 style={{ marginBottom: '16px', fontFamily: 'Roboto', fontWeight: '500', fontSize: '20px', color: '#1f2937' }}>Button Variants</h3>
        <div style={{ display: 'flex', gap: '12px', alignItems: 'center', flexWrap: 'wrap' }}>
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="tertiary">Tertiary</Button>
        </div>
      </div>
    </div>
  ),
};

// All sizes in one view
export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div>
        <h3 style={{ marginBottom: '16px', fontFamily: 'Roboto', fontWeight: '500', fontSize: '20px', color: '#1f2937' }}>Button Sizes</h3>
        <div style={{ display: 'flex', gap: '12px', alignItems: 'center', flexWrap: 'wrap' }}>
          <Button size="small">Small</Button>
          <Button size="medium">Medium</Button>
          <Button size="large">Large</Button>
        </div>
      </div>
    </div>
  ),
};

// Buttons with icons
export const WithIcons: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div>
        <h3 style={{ marginBottom: '16px', fontFamily: 'Roboto', fontWeight: '500', fontSize: '20px', color: '#1f2937' }}>Buttons with Icons</h3>
        <div style={{ display: 'flex', gap: '12px', alignItems: 'center', flexWrap: 'wrap' }}>
          <Button iconBefore="dashboard">Dashboard</Button>
          <Button variant="secondary" iconAfter="rocket_launch">Launch</Button>
          <Button variant="tertiary" iconBefore="settings">Settings</Button>
        </div>
      </div>
    </div>
  ),
};

// All button states
export const States: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div>
        <h3 style={{ marginBottom: '16px', fontFamily: 'Roboto', fontWeight: '500', fontSize: '20px', color: '#1f2937' }}>Button States</h3>
        <p style={{ marginBottom: '16px', fontFamily: 'Circular Std', fontSize: '14px', color: '#6b7280' }}>
          Buttons support multiple interaction states: enabled (default), hovered, pressed, focused, and disabled.
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div style={{ padding: '20px', backgroundColor: '#f9fafb', border: '1px solid #e5e7eb', borderRadius: '12px' }}>
            <h4 style={{ marginBottom: '12px', fontFamily: 'Roboto', fontWeight: '500', fontSize: '16px', color: '#4b5563' }}>Primary States</h4>
            <div style={{ display: 'flex', gap: '12px', alignItems: 'center', flexWrap: 'wrap' }}>
              <Button variant="primary">Enabled</Button>
              <Button variant="primary" disabled>Disabled</Button>
            </div>
          </div>
          <div style={{ padding: '20px', backgroundColor: '#f9fafb', border: '1px solid #e5e7eb', borderRadius: '12px' }}>
            <h4 style={{ marginBottom: '12px', fontFamily: 'Roboto', fontWeight: '500', fontSize: '16px', color: '#4b5563' }}>Secondary States</h4>
            <div style={{ display: 'flex', gap: '12px', alignItems: 'center', flexWrap: 'wrap' }}>
              <Button variant="secondary">Enabled</Button>
              <Button variant="secondary" disabled>Disabled</Button>
            </div>
          </div>
          <div style={{ padding: '20px', backgroundColor: '#f9fafb', border: '1px solid #e5e7eb', borderRadius: '12px' }}>
            <h4 style={{ marginBottom: '12px', fontFamily: 'Roboto', fontWeight: '500', fontSize: '16px', color: '#4b5563' }}>Tertiary States</h4>
            <div style={{ display: 'flex', gap: '12px', alignItems: 'center', flexWrap: 'wrap' }}>
              <Button variant="tertiary">Enabled</Button>
              <Button variant="tertiary" disabled>Disabled</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
};

// Do's and Don'ts in 2-column card layout
export const DosAndDonts: Story = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', maxWidth: '1200px' }}>
      {/* DO's Column */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <h3 style={{ marginBottom: '8px', fontFamily: 'Roboto', fontWeight: '500', fontSize: '20px', color: '#15803d' }}>✅ Do's</h3>
        
        {/* Form Actions - Good */}
        <div style={{ padding: '20px', backgroundColor: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: '12px' }}>
          <h4 style={{ marginBottom: '12px', fontFamily: 'Roboto', fontWeight: '500', fontSize: '16px', color: '#15803d' }}>Use one primary action</h4>
          <div style={{ display: 'flex', gap: '8px', alignItems: 'center', marginBottom: '8px' }}>
            <Button variant="primary">Save Changes</Button>
            <Button variant="secondary">Cancel</Button>
          </div>
          <p style={{ fontSize: '14px', fontFamily: 'Circular Std', color: '#166534', margin: 0 }}>One clear primary action with secondary alternatives</p>
        </div>

        {/* Clear Labels - Good */}
        <div style={{ padding: '20px', backgroundColor: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: '12px' }}>
          <h4 style={{ marginBottom: '12px', fontFamily: 'Roboto', fontWeight: '500', fontSize: '16px', color: '#15803d' }}>Use descriptive labels</h4>
          <div style={{ display: 'flex', gap: '8px', alignItems: 'center', marginBottom: '8px' }}>
            <Button variant="primary">Save Changes</Button>
            <Button variant="secondary" iconAfter="payments">Continue to Payment</Button>
          </div>
          <p style={{ fontSize: '14px', fontFamily: 'Circular Std', color: '#166534', margin: 0 }}>Labels clearly describe what will happen</p>
        </div>

        {/* Tertiary for lists - Good */}
        <div style={{ padding: '20px', backgroundColor: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: '12px' }}>
          <h4 style={{ marginBottom: '12px', fontFamily: 'Roboto', fontWeight: '500', fontSize: '16px', color: '#15803d' }}>Use tertiary in lists</h4>
          <div style={{ display: 'flex', gap: '8px', alignItems: 'center', marginBottom: '8px' }}>
            <Button variant="tertiary" size="small">Edit</Button>
            <Button variant="tertiary" size="small">Delete</Button>
          </div>
          <p style={{ fontSize: '14px', fontFamily: 'Circular Std', color: '#166534', margin: 0 }}>Tertiary buttons work well for repeated actions</p>
        </div>
      </div>

      {/* DON'T Column */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <h3 style={{ marginBottom: '8px', fontFamily: 'Roboto', fontWeight: '500', fontSize: '20px', color: '#991b1b' }}>❌ Don'ts</h3>
        
        {/* Multiple Primary - Bad */}
        <div style={{ padding: '20px', backgroundColor: '#fef2f2', border: '1px solid #fecaca', borderRadius: '12px' }}>
          <h4 style={{ marginBottom: '12px', fontFamily: 'Roboto', fontWeight: '500', fontSize: '16px', color: '#991b1b' }}>Multiple primary buttons</h4>
          <div style={{ display: 'flex', gap: '8px', alignItems: 'center', marginBottom: '8px', opacity: 0.7 }}>
            <Button variant="primary">Save</Button>
            <Button variant="primary">Send</Button>
            <Button variant="primary">Submit</Button>
          </div>
          <p style={{ fontSize: '14px', fontFamily: 'Circular Std', color: '#991b1b', margin: 0 }}>Too many competing primary actions confuse users</p>
        </div>

        {/* Vague Labels - Bad */}
        <div style={{ padding: '20px', backgroundColor: '#fef2f2', border: '1px solid #fecaca', borderRadius: '12px' }}>
          <h4 style={{ marginBottom: '12px', fontFamily: 'Roboto', fontWeight: '500', fontSize: '16px', color: '#991b1b' }}>Vague button labels</h4>
          <div style={{ display: 'flex', gap: '8px', alignItems: 'center', marginBottom: '8px', opacity: 0.7 }}>
            <Button variant="primary">Click Here</Button>
            <Button variant="secondary">Submit</Button>
            <Button variant="tertiary">Go</Button>
          </div>
          <p style={{ fontSize: '14px', fontFamily: 'Circular Std', color: '#991b1b', margin: 0 }}>Labels don't describe the action clearly</p>
        </div>

        {/* Inconsistent sizing - Bad */}
        <div style={{ padding: '20px', backgroundColor: '#fef2f2', border: '1px solid #fecaca', borderRadius: '12px' }}>
          <h4 style={{ marginBottom: '12px', fontFamily: 'Roboto', fontWeight: '500', fontSize: '16px', color: '#991b1b' }}>Mix button sizes randomly</h4>
          <div style={{ display: 'flex', gap: '8px', alignItems: 'center', marginBottom: '8px', opacity: 0.7 }}>
            <Button size="small">Save</Button>
            <Button size="large">Cancel</Button>
            <Button size="medium">Delete</Button>
          </div>
          <p style={{ fontSize: '14px', fontFamily: 'Circular Std', color: '#991b1b', margin: 0 }}>Keep button sizes consistent in the same context</p>
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
        <h3 style={{ marginBottom: '16px', fontFamily: 'Roboto', fontWeight: '500', fontSize: '20px', color: '#1f2937' }}>Size Comparison</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {['primary', 'secondary', 'tertiary'].map((variant) => (
            <div key={variant} style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
              <span style={{ width: '80px', fontSize: '14px', fontFamily: 'Circular Std', fontWeight: '500', textTransform: 'capitalize', color: '#4b5563' }}>{variant}:</span>
              <Button variant={variant as any} size="small">Small</Button>
              <Button variant={variant as any} size="medium">Medium</Button>
              <Button variant={variant as any} size="large">Large</Button>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 style={{ marginBottom: '16px', fontFamily: 'Roboto', fontWeight: '500', fontSize: '20px', color: '#1f2937' }}>Padding Differences</h3>
        <p style={{ fontSize: '14px', fontFamily: 'Circular Std', color: '#6b7280', marginBottom: '16px' }}>
          Tertiary buttons have reduced horizontal padding for visual balance
        </p>
        <div style={{ padding: '20px', backgroundColor: '#f9fafb', border: '1px solid #e5e7eb', borderRadius: '12px' }}>
          <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
            <Button variant="primary">Primary (20px)</Button>
            <Button variant="secondary">Secondary (20px)</Button>
            <Button variant="tertiary">Tertiary (10px)</Button>
          </div>
        </div>
      </div>

      <div>
        <h3 style={{ marginBottom: '16px', fontFamily: 'Roboto', fontWeight: '500', fontSize: '20px', color: '#1f2937' }}>Icon Spacing</h3>
        <p style={{ fontSize: '14px', fontFamily: 'Circular Std', color: '#6b7280', marginBottom: '16px' }}>
          Icon buttons automatically adjust padding for proper visual alignment
        </p>
        <div style={{ padding: '20px', backgroundColor: '#f9fafb', border: '1px solid #e5e7eb', borderRadius: '12px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
              <Button iconBefore="product">With Icon</Button>
              <Button>Without Icon</Button>
            </div>
            <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
              <Button variant="secondary" iconAfter="rocket_launch">Icon After</Button>
              <Button variant="tertiary" iconBefore="settings" iconAfter="verified">Both Icons</Button>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h3 style={{ marginBottom: '16px', fontFamily: 'Roboto', fontWeight: '500', fontSize: '20px', color: '#1f2937' }}>Accessibility</h3>
        <div style={{ padding: '20px', backgroundColor: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: '12px' }}>
          <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
            <Button>Keyboard Focusable</Button>
            <Button disabled>Screen Reader Compatible</Button>
          </div>
          <p style={{ fontSize: '14px', fontFamily: 'Circular Std', color: '#15803d', marginTop: '12px', margin: 0 }}>
            All buttons support keyboard navigation and include proper ARIA attributes
          </p>
        </div>
      </div>
    </div>
  ),
};
