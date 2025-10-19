import type { Meta, StoryObj } from '@storybook/react';
import { primitiveColors } from '../figma-tokens/colors/colors';
import { primitiveSpacing, primitiveSize } from '../figma-tokens/spacing/spacing';
import { primitiveRadius } from '../figma-tokens/radius/radius';
import { brandColors, neutralColors, stateColors, textColors, buttonColors } from '../design-tokens/semantic-colors';

const meta: Meta = {
  title: 'Design System/Tokens',
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj;

// Helper to group primitive colors by category
const groupPrimitiveColors = () => {
  const groups: Record<string, Record<string, string>> = {
    Green: {},
    Greyscale: {},
    'B&W': {},
    Primary: {},
    Text: {},
    Brand: {},
    'System-Info': {},
    'System-Success': {},
    'System-Warning': {},
    'System-Error': {},
    'Secondary-Brown': {},
    'Secondary-Orange': {},
    'Secondary-Peach': {},
    'Secondary-Blue': {},
    'Secondary-Purple': {},
    'Secondary-Yellow': {},
  };

  Object.entries(primitiveColors).forEach(([key, value]) => {
    const parts = key.split('-');

    if (key.startsWith('Green-')) {
      groups.Green[key] = value;
    } else if (key.startsWith('Greyscale-')) {
      groups.Greyscale[key] = value;
    } else if (key.startsWith('B&W-')) {
      groups['B&W'][key] = value;
    } else if (key.startsWith('Primary-')) {
      groups.Primary[key] = value;
    } else if (key.startsWith('Text-')) {
      groups.Text[key] = value;
    } else if (key.startsWith('Brand-')) {
      groups.Brand[key] = value;
    } else if (key.startsWith('System-Info-')) {
      groups['System-Info'][key] = value;
    } else if (key.startsWith('System-Success-')) {
      groups['System-Success'][key] = value;
    } else if (key.startsWith('System-Warning-')) {
      groups['System-Warning'][key] = value;
    } else if (key.startsWith('System-Error-')) {
      groups['System-Error'][key] = value;
    } else if (key.startsWith('Secondary-Brown-')) {
      groups['Secondary-Brown'][key] = value;
    } else if (key.startsWith('Secondary-Orange-')) {
      groups['Secondary-Orange'][key] = value;
    } else if (key.startsWith('Secondary-Peach-')) {
      groups['Secondary-Peach'][key] = value;
    } else if (key.startsWith('Secondary-Blue-')) {
      groups['Secondary-Blue'][key] = value;
    } else if (key.startsWith('Secondary-Purple-')) {
      groups['Secondary-Purple'][key] = value;
    } else if (key.startsWith('Secondary-Yellow-')) {
      groups['Secondary-Yellow'][key] = value;
    }
  });

  return groups;
};

const colorGroups = groupPrimitiveColors();

// Shared Components
const TokenCard = ({
  children,
  style = {},
  variant = 'column'
}: {
  children: React.ReactNode;
  style?: React.CSSProperties;
  variant?: 'column' | 'row';
}) => (
  <div style={{
    padding: '20px',
    border: '1px solid #e5e7eb',
    borderRadius: '12px',
    backgroundColor: '#fff',
    display: variant === 'row' ? 'flex' : 'block',
    alignItems: variant === 'row' ? 'center' : 'stretch',
    gap: variant === 'row' ? '20px' : '0',
    transition: 'border-color 0.2s',
    ...style
  }}>
    {children}
  </div>
);

const CodeBlock = ({ children }: { children: string }) => (
  <pre style={{
    fontFamily: 'monospace',
    fontSize: '13px',
    backgroundColor: '#f9fafb',
    border: '1px solid #e5e7eb',
    borderRadius: '12px',
    padding: '16px 20px',
    margin: '8px 0',
    overflowX: 'auto',
    color: '#1f2937'
  }}>
    {children}
  </pre>
);

const ColorSwatch = ({ name, value, cssVar }: { name: string; value: string; cssVar: string }) => (
  <TokenCard>
    <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
      <div style={{
        width: '56px',
        height: '56px',
        backgroundColor: value,
        borderRadius: '12px',
        border: '1px solid #e5e7eb',
        flexShrink: 0
      }} />
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{
          fontWeight: '500',
          fontSize: '14px',
          marginBottom: '6px',
          fontFamily: 'Roboto, system-ui, sans-serif',
          color: '#111827'
        }}>
          {name}
        </div>
        <div style={{
          fontFamily: 'monospace',
          fontSize: '12px',
          color: '#6b7280',
          marginBottom: '6px'
        }}>
          {value}
        </div>
        <div style={{
          fontFamily: 'monospace',
          fontSize: '11px',
          color: '#9ca3af',
          backgroundColor: '#f3f4f6',
          padding: '4px 8px',
          borderRadius: '6px',
          display: 'inline-block'
        }}>
          var({cssVar})
        </div>
      </div>
    </div>
  </TokenCard>
);

const SpacingToken = ({ name, value, cssVar }: { name: string; value: string; cssVar: string }) => (
  <TokenCard variant="row">
    <div style={{ flex: 1, minWidth: 0 }}>
      <div style={{
        fontWeight: '500',
        fontSize: '14px',
        marginBottom: '6px',
        fontFamily: 'Roboto, system-ui, sans-serif',
        color: '#111827'
      }}>
        {name}
      </div>
      <div style={{
        fontFamily: 'monospace',
        fontSize: '12px',
        color: '#6b7280',
        marginBottom: '6px'
      }}>
        {value}
      </div>
      <div style={{
        fontFamily: 'monospace',
        fontSize: '11px',
        color: '#9ca3af',
        backgroundColor: '#f3f4f6',
        padding: '4px 8px',
        borderRadius: '6px',
        display: 'inline-block'
      }}>
        var({cssVar})
      </div>
    </div>
    <div style={{
      height: '40px',
      backgroundColor: '#a9e079',
      width: value,
      borderRadius: '8px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '11px',
      color: '#1f2937',
      fontWeight: '500',
      flexShrink: 0,
      minWidth: '40px'
    }}>
      {value}
    </div>
  </TokenCard>
);

const RadiusToken = ({ name, value, cssVar }: { name: string; value: string; cssVar: string }) => (
  <TokenCard variant="row">
    <div style={{ flex: 1, minWidth: 0 }}>
      <div style={{
        fontWeight: '500',
        fontSize: '14px',
        marginBottom: '6px',
        fontFamily: 'Roboto, system-ui, sans-serif',
        color: '#111827'
      }}>
        {name}
      </div>
      <div style={{
        fontFamily: 'monospace',
        fontSize: '12px',
        color: '#6b7280',
        marginBottom: '6px'
      }}>
        {value}
      </div>
      <div style={{
        fontFamily: 'monospace',
        fontSize: '11px',
        color: '#9ca3af',
        backgroundColor: '#f3f4f6',
        padding: '4px 8px',
        borderRadius: '6px',
        display: 'inline-block'
      }}>
        var({cssVar})
      </div>
    </div>
    <div style={{
      width: '80px',
      height: '80px',
      backgroundColor: '#f3f4f6',
      borderRadius: value,
      border: '3px solid #a9e079',
      flexShrink: 0
    }} />
  </TokenCard>
);

const Section = ({
  title,
  children,
  layout = 'grid',
  description
}: {
  title: string;
  children: React.ReactNode;
  layout?: 'grid' | 'list';
  description?: string;
}) => (
  <div style={{ marginBottom: '64px' }}>
    <div style={{ marginBottom: '24px' }}>
      <h2 style={{
        fontFamily: 'Roboto, system-ui, sans-serif',
        fontSize: '24px',
        fontWeight: '500',
        marginBottom: '8px',
        color: '#111827',
        letterSpacing: '-0.01em'
      }}>
        {title}
      </h2>
      {description && (
        <p style={{
          fontSize: '14px',
          color: '#6b7280',
          lineHeight: '1.6',
          margin: 0,
          fontFamily: 'Roboto, system-ui, sans-serif'
        }}>
          {description}
        </p>
      )}
    </div>
    <div style={layout === 'grid' ? {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
      gap: '16px'
    } : {
      display: 'flex',
      flexDirection: 'column',
      gap: '12px'
    }}>
      {children}
    </div>
  </div>
);

const PageContainer = ({ children }: { children: React.ReactNode }) => (
  <div style={{
    padding: '64px 48px',
    maxWidth: '1400px',
    margin: '0 auto',
    backgroundColor: '#ffffff',
    minHeight: '100vh'
  }}>
    {children}
  </div>
);

const PageHeader = ({ title, description }: { title: string; description: string }) => (
  <div style={{
    marginBottom: '64px',
    paddingBottom: '32px',
    borderBottom: '1px solid #e5e7eb'
  }}>
    <h1 style={{
      fontFamily: 'Roboto, system-ui, sans-serif',
      fontSize: '48px',
      fontWeight: '500',
      marginBottom: '16px',
      color: '#111827',
      letterSpacing: '-0.02em'
    }}>
      {title}
    </h1>
    <p style={{
      fontSize: '18px',
      color: '#6b7280',
      lineHeight: '1.7',
      maxWidth: '800px',
      margin: 0,
      fontFamily: 'Roboto, system-ui, sans-serif'
    }}>
      {description}
    </p>
  </div>
);

const ExampleCard = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div style={{
    marginTop: '24px',
    padding: '24px',
    backgroundColor: '#f9fafb',
    border: '1px solid #e5e7eb',
    borderRadius: '12px'
  }}>
    <h4 style={{
      fontSize: '14px',
      fontWeight: '600',
      marginBottom: '16px',
      color: '#374151',
      fontFamily: 'Roboto, system-ui, sans-serif'
    }}>
      {title}
    </h4>
    {children}
  </div>
);

// ============================================================================
// OVERVIEW STORY
// ============================================================================
export const Overview: Story = {
  render: () => (
    <PageContainer>
      <PageHeader
        title="Design Tokens"
        description="Complete design token system for the Treez Design System. All tokens are auto-generated from Figma and available as TypeScript constants and CSS custom properties for consistent styling across your application."
      />

      {/* Quick Stats */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '16px',
        marginBottom: '64px'
      }}>
        <div style={{ padding: '24px', backgroundColor: '#f9fafb', border: '1px solid #e5e7eb', borderRadius: '12px' }}>
          <div style={{ fontSize: '36px', fontWeight: '500', color: '#6baa32', marginBottom: '8px', fontFamily: 'Roboto' }}>63</div>
          <div style={{ fontSize: '14px', color: '#6b7280', fontFamily: 'Roboto' }}>Color Tokens</div>
        </div>
        <div style={{ padding: '24px', backgroundColor: '#f9fafb', border: '1px solid #e5e7eb', borderRadius: '12px' }}>
          <div style={{ fontSize: '36px', fontWeight: '500', color: '#6baa32', marginBottom: '8px', fontFamily: 'Roboto' }}>10</div>
          <div style={{ fontSize: '14px', color: '#6b7280', fontFamily: 'Roboto' }}>Spacing Values</div>
        </div>
        <div style={{ padding: '24px', backgroundColor: '#f9fafb', border: '1px solid #e5e7eb', borderRadius: '12px' }}>
          <div style={{ fontSize: '36px', fontWeight: '500', color: '#6baa32', marginBottom: '8px', fontFamily: 'Roboto' }}>9</div>
          <div style={{ fontSize: '14px', color: '#6b7280', fontFamily: 'Roboto' }}>Radius Options</div>
        </div>
        <div style={{ padding: '24px', backgroundColor: '#f9fafb', border: '1px solid #e5e7eb', borderRadius: '12px' }}>
          <div style={{ fontSize: '36px', fontWeight: '500', color: '#6baa32', marginBottom: '8px', fontFamily: 'Roboto' }}>7</div>
          <div style={{ fontSize: '14px', color: '#6b7280', fontFamily: 'Roboto' }}>Size Tokens</div>
        </div>
      </div>

      {/* Usage Guide */}
      <Section
        title="How to Use Tokens"
        description="Import and use design tokens in your components for consistent styling"
      >
        <ExampleCard title="CSS Custom Properties">
          <CodeBlock>{`.button {
  background-color: var(--primitive-green-05);
  padding: var(--primitive-space-medium);
  border-radius: var(--primitive-radius-small);
}`}</CodeBlock>
        </ExampleCard>

        <ExampleCard title="TypeScript/React">
          <CodeBlock>{`import { primitiveColors } from '@/figma-tokens';
import { primitiveSpacing } from '@/figma-tokens';

const Button = () => (
  <button style={{
    backgroundColor: primitiveColors['green-05'],
    padding: primitiveSpacing['space-medium']
  }}>
    Click me
  </button>
);`}</CodeBlock>
        </ExampleCard>

        <ExampleCard title="Import Styles">
          <CodeBlock>{`// In your main CSS file
@import '@/figma-tokens/colors/colors.css';
@import '@/figma-tokens/spacing/spacing.css';
@import '@/figma-tokens/radius/radius.css';`}</CodeBlock>
        </ExampleCard>
      </Section>
    </PageContainer>
  ),
};

// ============================================================================
// COLORS STORY
// ============================================================================
export const Colors: Story = {
  render: () => (
    <PageContainer>
      <PageHeader
        title="Color Tokens"
        description="Complete color palette for the Treez Design System including brand colors, system states, text colors, and more. All colors are accessible and meet WCAG contrast requirements."
      />

      <Section
        title="Semantic Colors - Brand"
        description="High-level brand colors for common use"
      >
        {Object.entries(brandColors).map(([key, value]) => (
          <ColorSwatch
            key={key}
            name={key}
            value={value}
            cssVar={`--color-brand-${key.replace(/([A-Z])/g, '-$1').toLowerCase()}`}
          />
        ))}
      </Section>

      <Section
        title="Semantic Colors - State"
        description="Functional colors for success, error, warning, and info states"
      >
        {Object.entries(stateColors).map(([key, value]) => (
          <ColorSwatch
            key={key}
            name={key}
            value={value}
            cssVar={`--color-state-${key.replace(/([A-Z])/g, '-$1').toLowerCase()}`}
          />
        ))}
      </Section>

      <Section
        title="Semantic Colors - Text"
        description="Text color variants for different contexts"
      >
        {Object.entries(textColors).map(([key, value]) => (
          <ColorSwatch
            key={key}
            name={key}
            value={value}
            cssVar={`--color-text-${key}`}
          />
        ))}
      </Section>

      <Section
        title="Primitive Colors - Green Scale"
        description="Green color variations from Figma"
      >
        {Object.entries(colorGroups.Green).map(([key, value]) => (
          <ColorSwatch
            key={key}
            name={key}
            value={value}
            cssVar={`--primitive-${key}`}
          />
        ))}
      </Section>

      <Section
        title="Primitive Colors - Greyscale"
        description="Neutral gray tones from Figma"
      >
        {Object.entries(colorGroups.Greyscale).map(([key, value]) => (
          <ColorSwatch
            key={key}
            name={key}
            value={value}
            cssVar={`--primitive-${key}`}
          />
        ))}
      </Section>

      <Section
        title="Primitive Colors - System States"
        description="Info, Success, Warning, and Error primitives from Figma"
      >
        {[
          ...Object.entries(colorGroups['System-Info']),
          ...Object.entries(colorGroups['System-Success']),
          ...Object.entries(colorGroups['System-Warning']),
          ...Object.entries(colorGroups['System-Error'])
        ].map(([key, value]) => (
          <ColorSwatch
            key={key}
            name={key}
            value={value}
            cssVar={`--primitive-${key}`}
          />
        ))}
      </Section>

      <Section
        title="Primitive Colors - Secondary Palette"
        description="Additional color palette for accents and variety"
      >
        {[
          ...Object.entries(colorGroups['Secondary-Brown']),
          ...Object.entries(colorGroups['Secondary-Orange']),
          ...Object.entries(colorGroups['Secondary-Peach']),
          ...Object.entries(colorGroups['Secondary-Blue']),
          ...Object.entries(colorGroups['Secondary-Purple']),
          ...Object.entries(colorGroups['Secondary-Yellow'])
        ].map(([key, value]) => (
          <ColorSwatch
            key={key}
            name={key}
            value={value}
            cssVar={`--primitive-${key}`}
          />
        ))}
      </Section>
    </PageContainer>
  ),
};

// ============================================================================
// SPACING STORY
// ============================================================================
export const Spacing: Story = {
  render: () => (
    <PageContainer>
      <PageHeader
        title="Spacing & Size"
        description="Consistent spacing scale for margins, padding, and gaps throughout your application. Size tokens define component dimensions for a cohesive layout system."
      />

      <Section
        title="Spacing Scale"
        layout="list"
        description="Spacing values from 0px to 48px for consistent margins, padding, and gaps"
      >
        {Object.entries(primitiveSpacing).map(([key, value]) => (
          <SpacingToken
            key={key}
            name={key}
            value={value}
            cssVar={`--primitive-${key}`}
          />
        ))}
      </Section>

      <ExampleCard title="Usage Example">
        <CodeBlock>{`.card {
  padding: var(--primitive-Spacing-space-medium);  /* 16px */
  margin-bottom: var(--primitive-Spacing-space-large);  /* 20px */
  gap: var(--primitive-Spacing-space-small);  /* 12px */
}`}</CodeBlock>
      </ExampleCard>

      <Section
        title="Size Scale"
        layout="list"
        description="Component size tokens for buttons, inputs, and other UI elements"
      >
        {Object.entries(primitiveSize).map(([key, value]) => (
          <SpacingToken
            key={key}
            name={key}
            value={value}
            cssVar={`--primitive-${key}`}
          />
        ))}
      </Section>
    </PageContainer>
  ),
};

// ============================================================================
// RADIUS STORY
// ============================================================================
export const Radius: Story = {
  render: () => (
    <PageContainer>
      <PageHeader
        title="Border Radius"
        description="Border radius values for creating rounded corners and fully circular elements. From sharp edges to perfect circles, these tokens ensure consistent corner styling."
      />

      <Section
        title="Border Radius Scale"
        layout="list"
        description="Radius values from 0px (sharp) to 999px (fully rounded)"
      >
        {Object.entries(primitiveRadius).map(([key, value]) => (
          <RadiusToken
            key={key}
            name={key}
            value={value}
            cssVar={`--primitive-${key}`}
          />
        ))}
      </Section>

      <ExampleCard title="Usage Example">
        <CodeBlock>{`.button {
  border-radius: var(--primitive-Radius-radius-small);  /* 12px */
}

.card {
  border-radius: var(--primitive-Radius-radius-medium);  /* 16px */
}

.avatar {
  border-radius: var(--primitive-Radius-radius-full);  /* fully circular */
}`}</CodeBlock>
      </ExampleCard>
    </PageContainer>
  ),
};
