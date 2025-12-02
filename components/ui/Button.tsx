'use client';

import React from 'react';
import { motion } from 'framer-motion';

export interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  href?: string;
  ariaLabel?: string;
  icon?: React.ReactNode;
  showArrow?: boolean;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  analyticsId?: string;
  analyticsLocation?: string;
}

const getVariantStyles = (variant: ButtonProps['variant']) => {
  switch (variant) {
    case 'primary':
      return 'bg-neutral-900 !text-white hover:bg-neutral-800';
    case 'secondary':
      return 'bg-white text-neutral-900 hover:bg-neutral-50';
    case 'ghost':
      return 'bg-transparent hover:bg-white/10 border border-white/80 !text-white';
    default:
      return 'bg-neutral-900 !text-white hover:bg-neutral-800';
  }
};

const getSizeStyles = (size: ButtonProps['size']) => {
  switch (size) {
    case 'sm':
      return 'h-10 px-5 text-sm min-h-[44px]';
    case 'md':
      return 'h-11 px-6 text-base min-h-[44px]';
    case 'lg':
      return 'h-13 px-8 text-lg min-h-[44px]';
    default:
      return 'h-11 px-6 text-base min-h-[44px]';
  }
};

const getDisabledStyles = (disabled?: boolean) => {
  return disabled ? 'opacity-50 cursor-not-allowed pointer-events-none' : 'cursor-pointer';
};

export const Button = React.forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      children,
      onClick,
      href,
      ariaLabel,
      icon,
      showArrow = false,
      disabled = false,
      type = 'button',
      className = '',
      analyticsId,
      analyticsLocation,
    },
    ref
  ) => {
    const handleClick = (event: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
      if (disabled) return;

      if (analyticsId && typeof window !== 'undefined' && window.dataLayer) {
        window.dataLayer.push({
          event: 'cta_click',
          category: 'engagement',
          action: 'click',
          label: analyticsId,
          location: analyticsLocation || 'unknown',
          buttonText: typeof children === 'string' ? children : analyticsId,
        });
      }

      if (onClick && !href) {
        onClick(event as React.MouseEvent<HTMLButtonElement>);
      }
    };

    const baseStyles = `
      inline-flex items-center justify-center gap-2
      font-medium rounded-lg
      transition-all duration-200 ease-in-out
      focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2
      active:scale-95
      ${getSizeStyles(size)}
      ${getDisabledStyles(disabled)}
      ${getVariantStyles(variant)}
      ${className}
    `
      .trim()
      .replace(/\s+/g, ' ');

    if (href) {
      return (
        <motion.a
          ref={ref as React.Ref<HTMLAnchorElement>}
          href={href}
          className={baseStyles}
          onClick={handleClick}
          aria-label={ariaLabel}
          aria-disabled={disabled}
          tabIndex={disabled ? -1 : 0}
          whileHover={{ scale: disabled ? 1 : 1.02 }}
          whileTap={{ scale: disabled ? 1 : 0.98 }}
        >
          {icon && <span className="flex-shrink-0">{icon}</span>}
          {children}
          {showArrow && (
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="flex-shrink-0"
            >
              <path
                d="M7.5 15L12.5 10L7.5 5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </motion.a>
      );
    }

    return (
      <motion.button
        ref={ref as React.Ref<HTMLButtonElement>}
        type={type}
        className={baseStyles}
        onClick={handleClick}
        disabled={disabled}
        aria-label={ariaLabel}
        aria-disabled={disabled}
        whileHover={{ scale: disabled ? 1 : 1.02 }}
        whileTap={{ scale: disabled ? 1 : 0.98 }}
      >
        {icon && <span className="flex-shrink-0">{icon}</span>}
        {children}
        {showArrow && (
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="flex-shrink-0"
          >
            <path
              d="M7.5 15L12.5 10L7.5 5"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </motion.button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
 