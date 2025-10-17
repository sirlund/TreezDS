import type { Meta, StoryObj } from '@storybook/react';
import { Icon } from './Icon';
import { iconNames } from './iconData';

const meta: Meta<typeof Icon> = {
  title: 'Components/Icon',
  component: Icon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    name: {
      control: 'select',
      options: iconNames,
      description: 'Icon name from the design system',
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

export const AllIcons: Story = {
  render: () => (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(6, 1fr)',
        gap: '24px',
        padding: '24px',
      }}
    >
      {iconNames.map((iconName) => (
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
  ),
};

export const AdminPanelSettings: Story = {
  args: {
    name: 'admin_panel_settings',
    size: 'l',
  },
};

export const Settings: Story = {
  args: {
    name: 'settings',
    size: 'l',
  },
};

export const Group: Story = {
  args: {
    name: 'group',
    size: 'l',
  },
};

export const Verified: Story = {
  args: {
    name: 'verified',
    size: 'l',
  },
};

export const AccountCircle: Story = {
  args: {
    name: 'account_circle',
    size: 'l',
  },
};

export const Storefront: Story = {
  args: {
    name: 'storefront',
    size: 'l',
  },
};

export const IntegrationInstructions: Story = {
  args: {
    name: 'integration_instructions',
    size: 'l',
  },
};

export const RocketLaunch: Story = {
  args: {
    name: 'rocket_launch',
    size: 'l',
  },
};

export const Product: Story = {
  args: {
    name: 'product',
    size: 'l',
  },
};

export const Dashboard: Story = {
  args: {
    name: 'dashboard',
    size: 'l',
  },
};

export const Loyalty: Story = {
  args: {
    name: 'loyalty',
    size: 'l',
  },
};

export const Redeem: Story = {
  args: {
    name: 'redeem',
    size: 'l',
  },
};

export const Payments: Story = {
  args: {
    name: 'payments',
    size: 'l',
  },
};

export const Apps: Story = {
  args: {
    name: 'apps',
    size: 'l',
  },
};

export const AutoGraph: Story = {
  args: {
    name: 'auto_graph',
    size: 'l',
  },
};
