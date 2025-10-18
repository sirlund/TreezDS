import type { Meta, StoryObj } from '@storybook/react';
import {
  greenColors,
  primaryColors,
  bwColors,
  greyscaleColors,
  brownColors,
  orangeColors,
  peachColors,
  blueColors,
  purpleColors,
  yellowColors,
  infoColors,
  successColors,
  warningColors,
  errorColors,
  textColors,
  brandColors
} from '../figma-tokens/colors/colors';
import { spacing, size } from '../figma-tokens/spacing/spacing';
import { radius } from '../figma-tokens/radius/radius';

const meta: Meta = {
  title: 'Design System/Tokens',
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj;

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
          <div style={{ fontSize: '36px', fontWeight: '500', color: '#6baa32', marginBottom: '8px', fontFamily: 'Roboto' }}>11</div>
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
  background-color: var(--color-primary-500);
  padding: var(--spacing-medium);
  border-radius: var(--radius-small);
}`}</CodeBlock>
        </ExampleCard>

        <ExampleCard title="TypeScript/React">
          <CodeBlock>{`import { primaryColors } from '@/tokens/colors/colors';
import { spacing } from '@/tokens/spacing/spacing';

const Button = () => (
  <button style={{
    backgroundColor: primaryColors['Primary-primary-500'],
    padding: spacing['Spacing-space-medium']
  }}>
    Click me
  </button>
);`}</CodeBlock>
        </ExampleCard>

        <ExampleCard title="Import Styles">
          <CodeBlock>{`// In your main CSS file
@import '@/tokens/colors/colors.css';
@import '@/tokens/spacing/spacing.css';
@import '@/tokens/radius/radius.css';`}</CodeBlock>
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
        title="Brand Colors"
        description="Primary brand colors for your application identity"
      >
        {Object.entries(brandColors).map(([key, value]) => (
          <ColorSwatch
            key={key}
            name={key}
            value={value}
            cssVar={`--color-${key.toLowerCase()}`}
          />
        ))}
      </Section>

      <Section 
        title="Primary Colors"
        description="Main color palette with various shades and tints"
      >
        {Object.entries(primaryColors).map(([key, value]) => (
          <ColorSwatch
            key={key}
            name={key}
            value={value}
            cssVar={`--color-${key.toLowerCase()}`}
          />
        ))}
      </Section>

      <Section
        title="System Colors"
        description="Functional colors for success, error, warning, and info states"
      >
        {[
          ...Object.entries(infoColors),
          ...Object.entries(successColors),
          ...Object.entries(warningColors),
          ...Object.entries(errorColors)
        ].map(([key, value]) => (
          <ColorSwatch
            key={key}
            name={key}
            value={value}
            cssVar={`--color-${key.toLowerCase()}`}
          />
        ))}
      </Section>

      <Section 
        title="Text Colors"
        description="Text color variants for different contexts and emphasis levels"
      >
        {Object.entries(textColors).map(([key, value]) => (
          <ColorSwatch
            key={key}
            name={key}
            value={value}
            cssVar={`--color-${key.toLowerCase()}`}
          />
        ))}
      </Section>

      <Section 
        title="Greyscale"
        description="Neutral gray tones for backgrounds, borders, and UI elements"
      >
        {Object.entries(greyscaleColors).map(([key, value]) => (
          <ColorSwatch
            key={key}
            name={key}
            value={value}
            cssVar={`--color-${key.toLowerCase()}`}
          />
        ))}
      </Section>

      <Section 
        title="Black & White"
        description="Pure black and white colors for high contrast elements"
      >
        {Object.entries(bwColors).map(([key, value]) => (
          <ColorSwatch
            key={key}
            name={key}
            value={value}
            cssVar={`--color-${key.toLowerCase()}`}
          />
        ))}
      </Section>

      <Section 
        title="Green Scale"
        description="Green color variations for nature and growth themes"
      >
        {Object.entries(greenColors).map(([key, value]) => (
          <ColorSwatch
            key={key}
            name={key}
            value={value}
            cssVar={`--color-${key.toLowerCase()}`}
          />
        ))}
      </Section>

      <Section
        title="Secondary Colors"
        description="Additional color palette for accents and variety"
      >
        {[
          ...Object.entries(brownColors),
          ...Object.entries(orangeColors),
          ...Object.entries(peachColors),
          ...Object.entries(blueColors),
          ...Object.entries(purpleColors),
          ...Object.entries(yellowColors)
        ].map(([key, value]) => (
          <ColorSwatch
            key={key}
            name={key}
            value={value}
            cssVar={`--color-${key.toLowerCase()}`}
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
        {Object.entries(spacing).map(([key, value]) => (
          <SpacingToken
            key={key}
            name={key}
            value={value}
            cssVar={`--spacing-${key}`}
          />
        ))}
      </Section>

      <ExampleCard title="Usage Example">
        <CodeBlock>{`.card {
  padding: var(--spacing-space-medium);  /* 16px */
  margin-bottom: var(--spacing-space-large);  /* 20px */
  gap: var(--spacing-space-small);  /* 12px */
}`}</CodeBlock>
      </ExampleCard>

      <Section 
        title="Size Scale (Beta)" 
        layout="list"
        description="Component size tokens for buttons, inputs, and other UI elements"
      >
        {Object.entries(size).map(([key, value]) => (
          <SpacingToken
            key={key}
            name={key}
            value={value}
            cssVar={`--size-${key}`}
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
        description="Radius values from 0px (sharp) to 9999px (fully rounded)"
      >
        {Object.entries(radius).map(([key, value]) => (
          <RadiusToken
            key={key}
            name={key}
            value={value}
            cssVar={`--radius-${key}`}
          />
        ))}
      </Section>

      <ExampleCard title="Usage Example">
        <CodeBlock>{`.button {
  border-radius: var(--radius-radius-small);  /* 12px */
}

.card {
  border-radius: var(--radius-radius-medium);  /* 16px */
}

.avatar {
  border-radius: var(--radius-radius-full);  /* fully circular */
}`}</CodeBlock>
      </ExampleCard>
    </PageContainer>
  ),
};
