import type { Meta, StoryObj } from '@storybook/react';
import {
  greenColors,
  primaryColors,
  bwColors,
  greyscaleColors,
  secondaryColors,
  systemColors,
  textColors,
  brandColors
} from '../tokens/colors/colors';
import { spacing, size } from '../tokens/spacing/spacing';
import { radius } from '../tokens/radius/radius';

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
    padding: '16px',
    border: '1px solid #e0e0e0',
    borderRadius: '8px',
    backgroundColor: '#fff',
    display: variant === 'row' ? 'flex' : 'block',
    alignItems: variant === 'row' ? 'center' : 'stretch',
    gap: variant === 'row' ? '16px' : '0',
    ...style
  }}>
    {children}
  </div>
);

const ColorSwatch = ({ name, value, cssVar }: { name: string; value: string; cssVar: string }) => (
  <TokenCard>
    <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
      <div style={{
        width: '64px',
        height: '64px',
        backgroundColor: value,
        borderRadius: '8px',
        border: '1px solid #ddd',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        flexShrink: 0
      }} />
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{
          fontWeight: '600',
          fontSize: '13px',
          marginBottom: '4px',
          fontFamily: 'Inter, sans-serif'
        }}>
          {name}
        </div>
        <div style={{
          fontFamily: 'monospace',
          fontSize: '12px',
          color: '#666',
          marginBottom: '4px'
        }}>
          {value}
        </div>
        <div style={{
          fontFamily: 'monospace',
          fontSize: '10px',
          color: '#999',
          backgroundColor: '#f5f5f5',
          padding: '2px 6px',
          borderRadius: '3px',
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
        fontWeight: '600',
        fontSize: '13px',
        marginBottom: '4px',
        fontFamily: 'Inter, sans-serif'
      }}>
        {name}
      </div>
      <div style={{
        fontFamily: 'monospace',
        fontSize: '12px',
        color: '#666',
        marginBottom: '4px'
      }}>
        {value}
      </div>
      <div style={{
        fontFamily: 'monospace',
        fontSize: '10px',
        color: '#999',
        backgroundColor: '#f5f5f5',
        padding: '2px 6px',
        borderRadius: '3px',
        display: 'inline-block'
      }}>
        var({cssVar})
      </div>
    </div>
    <div style={{
      height: '40px',
      backgroundColor: '#a9e079',
      width: value,
      borderRadius: '4px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '12px',
      color: '#0f1709',
      fontWeight: '500',
      flexShrink: 0
    }}>
      {value}
    </div>
  </TokenCard>
);

const RadiusToken = ({ name, value, cssVar }: { name: string; value: string; cssVar: string }) => (
  <TokenCard variant="row">
    <div style={{ flex: 1, minWidth: 0 }}>
      <div style={{
        fontWeight: '600',
        fontSize: '13px',
        marginBottom: '4px',
        fontFamily: 'Inter, sans-serif'
      }}>
        {name}
      </div>
      <div style={{
        fontFamily: 'monospace',
        fontSize: '12px',
        color: '#666',
        marginBottom: '4px'
      }}>
        {value}
      </div>
      <div style={{
        fontFamily: 'monospace',
        fontSize: '10px',
        color: '#999',
        backgroundColor: '#f5f5f5',
        padding: '2px 6px',
        borderRadius: '3px',
        display: 'inline-block'
      }}>
        var({cssVar})
      </div>
    </div>
    <div style={{
      width: '100px',
      height: '100px',
      backgroundColor: '#a9e079',
      borderRadius: value,
      border: '2px solid #6baa32',
      flexShrink: 0
    }} />
  </TokenCard>
);

const Section = ({ 
  title, 
  children,
  layout = 'grid' 
}: { 
  title: string; 
  children: React.ReactNode;
  layout?: 'grid' | 'list';
}) => (
  <div style={{ marginBottom: '48px' }}>
    <h2 style={{
      fontFamily: 'Inter, sans-serif',
      fontSize: '22px',
      fontWeight: '600',
      marginBottom: '20px',
      color: '#0f1709'
    }}>
      {title}
    </h2>
    <div style={layout === 'grid' ? {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
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
    padding: '48px',
    maxWidth: '1400px',
    margin: '0 auto',
    backgroundColor: '#fafafa',
    minHeight: '100vh'
  }}>
    {children}
  </div>
);

// ============================================================================
// OVERVIEW STORY
// ============================================================================
export const Overview: Story = {
  render: () => (
    <PageContainer>
      <div style={{ marginBottom: '48px' }}>
        <h1 style={{
          fontFamily: 'Inter, sans-serif',
          fontSize: '42px',
          fontWeight: '700',
          marginBottom: '12px',
          color: '#0f1709'
        }}>
          Design Tokens
        </h1>
        <p style={{
          fontSize: '16px',
          color: '#666',
          lineHeight: '1.6',
          maxWidth: '800px',
          marginBottom: '24px'
        }}>
          Complete design token system for the Treez Design System. All tokens are auto-generated
          from Figma and available as TypeScript constants and CSS custom properties.
        </p>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '24px',
          marginBottom: '48px'
        }}>
          <TokenCard style={{ backgroundColor: '#f0f8ff' }}>
            <h3 style={{ margin: '0 0 12px 0', fontSize: '20px', fontWeight: '600' }}>
              🎨 63 Color Tokens
            </h3>
            <p style={{ margin: 0, color: '#666', fontSize: '14px', lineHeight: '1.6' }}>
              Complete color palette including brand, system, text, and secondary colors
            </p>
          </TokenCard>

          <TokenCard style={{ backgroundColor: '#fdf8e5' }}>
            <h3 style={{ margin: '0 0 12px 0', fontSize: '20px', fontWeight: '600' }}>
              📐 17 Spacing Tokens
            </h3>
            <p style={{ margin: 0, color: '#666', fontSize: '14px', lineHeight: '1.6' }}>
              Consistent spacing scale from 0px to 64px for layouts and components
            </p>
          </TokenCard>

          <TokenCard style={{ backgroundColor: '#f1eae6' }}>
            <h3 style={{ margin: '0 0 12px 0', fontSize: '20px', fontWeight: '600' }}>
              🔷 9 Radius Tokens
            </h3>
            <p style={{ margin: 0, color: '#666', fontSize: '14px', lineHeight: '1.6' }}>
              Border radius values from 0px to full circular shapes
            </p>
          </TokenCard>
        </div>
      </div>

      <div style={{
        backgroundColor: '#fff',
        padding: '32px',
        borderRadius: '12px',
        border: '1px solid #e0e0e0'
      }}>
        <h2 style={{ marginTop: 0, fontSize: '24px', fontWeight: '600' }}>Usage Examples</h2>

        <h3 style={{ fontSize: '18px', fontWeight: '600', marginTop: '24px' }}>TypeScript/React</h3>
        <pre style={{
          backgroundColor: '#f5f5f5',
          padding: '16px',
          borderRadius: '8px',
          overflow: 'auto',
          fontSize: '13px',
          fontFamily: 'monospace'
        }}>
{`import { primaryColors, spacing, radius } from '@/tokens';

function MyComponent() {
  return (
    <div style={{
      backgroundColor: primaryColors['Primary-primaryMain'],
      padding: spacing['space-medium'],
      borderRadius: radius['radius-medium']
    }}>
      Content
    </div>
  );
}`}
        </pre>

        <h3 style={{ fontSize: '18px', fontWeight: '600', marginTop: '32px' }}>CSS</h3>
        <pre style={{
          backgroundColor: '#f5f5f5',
          padding: '16px',
          borderRadius: '8px',
          overflow: 'auto',
          fontSize: '13px',
          fontFamily: 'monospace'
        }}>
{`@import '@/tokens/colors/colors.css';

.my-component {
  background-color: var(--color-primary-primarymain);
  padding: var(--spacing-space-medium);
  border-radius: var(--radius-radius-medium);
}`}
        </pre>

        <h3 style={{ fontSize: '18px', fontWeight: '600', marginTop: '32px' }}>Regenerating Tokens</h3>
        <pre style={{
          backgroundColor: '#f5f5f5',
          padding: '16px',
          borderRadius: '8px',
          overflow: 'auto',
          fontSize: '13px',
          fontFamily: 'monospace'
        }}>
{`# After exporting variables from Figma to imported_tokens/
npm run tokens:transform`}
        </pre>
      </div>
    </PageContainer>
  ),
};

// Continue in next message due to size...

// ============================================================================
// COLORS STORY
// ============================================================================
export const Colors: Story = {
  render: () => (
    <PageContainer>
      <div style={{ marginBottom: '48px' }}>
        <h1 style={{
          fontFamily: 'Inter, sans-serif',
          fontSize: '36px',
          fontWeight: '700',
          marginBottom: '12px',
          color: '#0f1709'
        }}>
          Color Tokens
        </h1>
        <p style={{
          fontSize: '16px',
          color: '#666',
          lineHeight: '1.6',
          maxWidth: '800px'
        }}>
          Complete color palette from Figma organized by category and purpose. 63 total color tokens.
        </p>
      </div>

      <Section title="Brand Colors">
        {Object.entries(brandColors).map(([key, value]) => (
          <ColorSwatch
            key={key}
            name={key}
            value={value}
            cssVar={`--color-${key.toLowerCase()}`}
          />
        ))}
      </Section>

      <Section title="Primary Colors">
        {Object.entries(primaryColors).map(([key, value]) => (
          <ColorSwatch
            key={key}
            name={key}
            value={value}
            cssVar={`--color-${key.toLowerCase()}`}
          />
        ))}
      </Section>

      <Section title="System Colors">
        {Object.entries(systemColors).map(([key, value]) => (
          <ColorSwatch
            key={key}
            name={key}
            value={value}
            cssVar={`--color-${key.toLowerCase()}`}
          />
        ))}
      </Section>

      <Section title="Text Colors">
        {Object.entries(textColors).map(([key, value]) => (
          <ColorSwatch
            key={key}
            name={key}
            value={value}
            cssVar={`--color-${key.toLowerCase()}`}
          />
        ))}
      </Section>

      <Section title="Greyscale">
        {Object.entries(greyscaleColors).map(([key, value]) => (
          <ColorSwatch
            key={key}
            name={key}
            value={value}
            cssVar={`--color-${key.toLowerCase()}`}
          />
        ))}
      </Section>

      <Section title="Black & White">
        {Object.entries(bwColors).map(([key, value]) => (
          <ColorSwatch
            key={key}
            name={key}
            value={value}
            cssVar={`--color-${key.toLowerCase()}`}
          />
        ))}
      </Section>

      <Section title="Green Scale">
        {Object.entries(greenColors).map(([key, value]) => (
          <ColorSwatch
            key={key}
            name={key}
            value={value}
            cssVar={`--color-${key.toLowerCase()}`}
          />
        ))}
      </Section>

      <Section title="Secondary Colors">
        {Object.entries(secondaryColors).map(([key, value]) => (
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
      <div style={{ marginBottom: '48px' }}>
        <h1 style={{
          fontFamily: 'Inter, sans-serif',
          fontSize: '36px',
          fontWeight: '700',
          marginBottom: '12px',
          color: '#0f1709'
        }}>
          Spacing & Size Tokens
        </h1>
        <p style={{
          fontSize: '16px',
          color: '#666',
          lineHeight: '1.6',
          maxWidth: '800px'
        }}>
          Consistent spacing scale for margins, padding, and gaps. Size tokens for component dimensions.
        </p>
      </div>

      <Section title="Spacing Scale" layout="list">
        {Object.entries(spacing).map(([key, value]) => (
          <SpacingToken
            key={key}
            name={key}
            value={value}
            cssVar={`--spacing-${key}`}
          />
        ))}
      </Section>

      <Section title="Size Scale (Beta)" layout="list">
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
      <div style={{ marginBottom: '48px' }}>
        <h1 style={{
          fontFamily: 'Inter, sans-serif',
          fontSize: '36px',
          fontWeight: '700',
          marginBottom: '12px',
          color: '#0f1709'
        }}>
          Radius Tokens
        </h1>
        <p style={{
          fontSize: '16px',
          color: '#666',
          lineHeight: '1.6',
          maxWidth: '800px'
        }}>
          Border radius values for rounded corners and circular elements.
        </p>
      </div>

      <Section title="Border Radius Scale" layout="list">
        {Object.entries(radius).map(([key, value]) => (
          <RadiusToken
            key={key}
            name={key}
            value={value}
            cssVar={`--radius-${key}`}
          />
        ))}
      </Section>
    </PageContainer>
  ),
};
