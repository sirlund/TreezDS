import React from 'react';
import styles from './Icon.module.css';
import { iconData, iconNames } from './iconData';

export type IconSize = 'xs' | 's' | 'm' | 'l' | 'xl';
export type IconName = typeof iconNames[number];

export interface IconProps {
  /**
   * Icon name from the design system
   * Available icons: admin_panel_settings, settings, group, verified, account_circle,
   * storefront, integration_instructions, rocket_launch, product, dashboard, loyalty,
   * redeem, payments, apps, auto_graph
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
 * Displays Material Design icons in various sizes.
 * All icons are sourced from the design system and maintain consistent sizing.
 *
 * @see https://www.figma.com/design/zPEk7VNZnVzhGaNCnalP6o/Design-System?node-id=16340-111853
 *
 * @example
 * ```tsx
 * <Icon name="home" size="m" />
 * <Icon name="settings" size="l" color="#1A1A1A" />
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

  const icon = iconData[name];

  if (!icon) {
    console.warn(`Icon "${name}" not found in icon data`);
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
        <path d={icon.path} />
      </svg>
    </span>
  );
};

Icon.displayName = 'Icon';
