import type { Meta, StoryObj } from '@storybook/react';
import { Icon, allIconNames } from './Icon';
import { materialIconNames } from './materialIconMap';
import { customIconNames } from './customIconData';

const meta: Meta<typeof Icon> = {
  title: 'Design System/Particles/Icon',
  component: Icon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    name: {
      control: 'select',
      options: allIconNames,
      description: 'Icon name from the design system (Material Design + Custom Treez icons)',
    },
    size: {
      control: 'select',
      options: ['xs', 's', 'm', 'l', 'xl'],
      description: 'Icon size',
    },
    color: {
      control: 'color',
      description: 'Icon color (CSS color value)',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Icon>;

export const Default: Story = {
  args: {
    name: 'settings',
    size: 'm',
  },
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
      <Icon name="settings" size="xs" />
      <Icon name="settings" size="s" />
      <Icon name="settings" size="m" />
      <Icon name="settings" size="l" />
      <Icon name="settings" size="xl" />
    </div>
  ),
};

export const WithColor: Story = {
  args: {
    name: 'verified',
    size: 'l',
    color: '#1A1A1A',
  },
};

export const MaterialDesignIcons: Story = {
  render: () => (
    <div>
      <h3 style={{ marginBottom: '16px', fontWeight: 600 }}>
        Material Design Icons (Material Symbols Rounded via Google Fonts)
      </h3>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(6, 1fr)',
          gap: '24px',
          padding: '24px',
          border: '1px solid #e0e0e0',
          borderRadius: '8px',
        }}
      >
        {materialIconNames.map((iconName) => (
          <div
            key={iconName}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '8px',
            }}
          >
            <Icon name={iconName} size="l" />
            <span
              style={{
                fontSize: '12px',
                textAlign: 'center',
                color: '#666',
                wordBreak: 'break-word',
              }}
            >
              {iconName.replace(/_/g, ' ')}
            </span>
          </div>
        ))}
      </div>
    </div>
  ),
};

export const CustomTreezIcons: Story = {
  render: () => (
    <div>
      <h3 style={{ marginBottom: '16px', fontWeight: 600 }}>
        Custom Treez Icons
      </h3>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(6, 1fr)',
          gap: '24px',
          padding: '24px',
          border: '1px solid #e0e0e0',
          borderRadius: '8px',
          backgroundColor: '#f5f5f5',
        }}
      >
        {customIconNames.map((iconName) => (
          <div
            key={iconName}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '8px',
            }}
          >
            <Icon name={iconName} size="l" />
            <span
              style={{
                fontSize: '12px',
                textAlign: 'center',
                color: '#666',
                wordBreak: 'break-word',
              }}
            >
              {iconName.replace(/_/g, ' ')}
            </span>
          </div>
        ))}
      </div>
    </div>
  ),
};

export const AllIcons: Story = {
  render: () => (
    <div>
      <div style={{ marginBottom: '32px' }}>
        <h3 style={{ marginBottom: '16px', fontWeight: 600 }}>
          Material Design Icons ({materialIconNames.length})
        </h3>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(6, 1fr)',
            gap: '24px',
            padding: '24px',
            border: '1px solid #e0e0e0',
            borderRadius: '8px',
          }}
        >
          {materialIconNames.map((iconName) => (
            <div
              key={iconName}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '8px',
              }}
            >
              <Icon name={iconName} size="l" />
              <span
                style={{
                  fontSize: '12px',
                  textAlign: 'center',
                  color: '#666',
                  wordBreak: 'break-word',
                }}
              >
                {iconName.replace(/_/g, ' ')}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 style={{ marginBottom: '16px', fontWeight: 600 }}>
          Custom Treez Icons ({customIconNames.length})
        </h3>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(6, 1fr)',
            gap: '24px',
            padding: '24px',
            border: '1px solid #e0e0e0',
            borderRadius: '8px',
            backgroundColor: '#f5f5f5',
          }}
        >
          {customIconNames.map((iconName) => (
            <div
              key={iconName}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '8px',
              }}
            >
              <Icon name={iconName} size="l" />
              <span
                style={{
                  fontSize: '12px',
                  textAlign: 'center',
                  color: '#666',
                  wordBreak: 'break-word',
                }}
              >
                {iconName.replace(/_/g, ' ')}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  ),
};

// Individual Material Design icon examples
export const Settings: Story = {
  args: {
    name: 'settings',
    size: 'l',
  },
};

export const Dashboard: Story = {
  args: {
    name: 'dashboard',
    size: 'l',
  },
};

// Individual Custom Treez icon examples
export const Flower: Story = {
  args: {
    name: 'flower',
    size: 'l',
  },
};

export const CBD: Story = {
  args: {
    name: 'cbd',
    size: 'l',
  },
};

export const Edible: Story = {
  args: {
    name: 'edible',
    size: 'l',
  },
};
