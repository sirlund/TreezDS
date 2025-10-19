import React from 'react';
import styles from './Icon.module.css';
import { customIconData, customIconNames, type CustomIconName } from './customIconData';
import { materialIconNames, type MaterialIconName } from './materialIconMap';

export type IconSize = 'xs' | 's' | 'm' | 'l' | 'xl';
export type IconName = MaterialIconName | CustomIconName;

export interface IconProps {
  /**
   * Icon name from the design system
   *
   * Material Design icons: admin_panel_settings, settings, group, verified, account_circle,
   * storefront, integration_instructions, rocket_launch, category, dashboard, loyalty,
   * redeem, payments, apps, auto_graph, inventory, smart_toy
   *
   * Custom Treez icons: beverage, cbd, edible, extracts, flower, preroll
   */
  name: IconName;

  /**
   * Icon size
   * - `xs`: 12px
   * - `s`: 18px
   * - `m`: 20px (default)
   * - `l`: 24px
   * - `xl`: 48px
   */
  size?: IconSize;

  /** Icon color (CSS color value) */
  color?: string;

  /** Additional CSS class names */
  className?: string;

  /** Accessible label for screen readers */
  'aria-label'?: string;
}

/**
 * Icon component - Treez Design System
 *
 * Supports both Material Symbols icons and custom Treez icons.
 * Material Symbols are rendered using Google's variable font (Rounded variant, weight 400, grade 0, optical size 20px).
 * Custom icons are loaded from the design system SVG data.
 *
 * @see https://www.figma.com/design/zPEk7VNZnVzhGaNCnalP6o/Design-System?node-id=16340-111853
 *
 * @example
 * ```tsx
 * // Material Symbol icon
 * <Icon name="settings" size="m" />
 *
 * // Custom Treez icon
 * <Icon name="flower" size="l" color="#1A1A1A" />
 * ```
 */
export const Icon: React.FC<IconProps> = ({
  name,
  size = 'm',
  color,
  className = '',
  'aria-label': ariaLabel,
}) => {
  const iconClasses = [
    styles.icon,
    styles[size],
    className,
  ]
    .filter(Boolean)
    .join(' ');

  // Check if this is a custom icon
  if (customIconNames.includes(name as CustomIconName)) {
    const icon = customIconData[name as CustomIconName];

    if (!icon) {
      console.warn(`Custom icon "${name}" not found in icon data`);
      return null;
    }

    return (
      <span
        className={iconClasses}
        style={color ? { color } : undefined}
        role="img"
        aria-label={ariaLabel || name.replace(/_/g, ' ')}
      >
        <svg
          className={styles.svg}
          fill="currentColor"
          viewBox={icon.viewBox}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d={icon.path} fillRule="evenodd" clipRule="evenodd" />
        </svg>
      </span>
    );
  }

  // Check if this is a Material Symbol icon
  if (materialIconNames.includes(name as MaterialIconName)) {
    // Material Symbols uses snake_case names directly as the icon ligature
    // e.g., "settings" displays the settings icon
    return (
      <span
        className={`${iconClasses} ${styles.materialSymbol}`}
        style={color ? { color } : undefined}
        role="img"
        aria-label={ariaLabel || name.replace(/_/g, ' ')}
      >
        {name}
      </span>
    );
  }

  console.warn(`Icon "${name}" not found in either custom or Material icon sets`);
  return null;
};

Icon.displayName = 'Icon';

// Export all icon names for use in stories/docs
export const allIconNames: IconName[] = [
  ...materialIconNames,
  ...customIconNames,
];
