'use client';

import React from 'react';
import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import { Button } from '@/components/ui/Button';

/**
 * Hero Section Component
 * 
 * The above-the-fold hero section featuring a full-width background image,
 * headline, subheadline, badge, and dual CTAs with animations.
 * 
 * Requirements:
 * - 1.1: Pixel-perfect fidelity to Figma design
 * - 2.4: LCP within 2.5 seconds (priority loading)
 * - 2.6: Optimized image formats with lazy loading
 * - 3.3: Descriptive alt text for images
 * - 7.1: Framer Motion animations
 * - 7.2: Reduced motion support
 * - 10.1: Above-the-fold rendering with primary CTA
 */

export interface HeroProps {
  /** Main headline text */
  headline: string;
  /** Supporting subheadline text */
  subheadline: string;
  /** Primary call-to-action button */
  primaryCTA: {
    label: string;
    href: string;
    analyticsId?: string;
  };
  /** Optional secondary call-to-action button */
  secondaryCTA?: {
    label: string;
    href: string;
    analyticsId?: string;
  };
  /** Background image path */
  backgroundImage: string;
  /** Alt text for background image (accessibility) */
  backgroundImageAlt?: string;
}

export const Hero: React.FC<HeroProps> = ({
  headline,
  subheadline,
  primaryCTA,
  secondaryCTA,
  backgroundImage,
  backgroundImageAlt = 'Hero background',
}) => {
  // Check if user prefers reduced motion (Requirement 7.2)
  const prefersReducedMotion = useReducedMotion();

  /**
   * Animation variants for content
   * Respects reduced motion preferences
   */
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: prefersReducedMotion ? 0 : 0.2,
        delayChildren: prefersReducedMotion ? 0 : 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: prefersReducedMotion ? 0.01 : 0.6,
        ease: [0.4, 0, 0.2, 1] as const, // Custom easing
      },
    },
  };

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-label="Hero section"
    >
      {/* Background Image with Next.js Image optimization (Requirements 2.4, 2.6, 3.3) */}
      <div className="absolute inset-0 z-0">
        <Image
          src={backgroundImage}
          alt={backgroundImageAlt}
          fill
          priority // Priority loading for LCP optimization (Requirement 2.4)
          quality={90}
          className="object-cover"
          sizes="100vw"
        />
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-white/20" />
      </div>

      {/* Content Container */}
      <div className="relative z-20 container mx-auto px-6 sm:px-8 lg:px-12 py-32 md:py-40 lg:py-48 max-w-7xl">
        <motion.div
          className="max-w-4xl text-left"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Headline */}
          <motion.h1
            variants={itemVariants}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-normal text-white mb-6 leading-tight"
          >
            {headline}
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg md:text-xl text-white mb-10 max-w-3xl leading-relaxed"
          >
            {subheadline}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-start gap-4"
          >
            <Button
              variant="primary"
              size="md"
              href={primaryCTA.href}
              analyticsId={primaryCTA.analyticsId || 'hero-primary-cta'}
              analyticsLocation="hero"
              showArrow={true}
              className="w-full sm:w-auto"
            >
              {primaryCTA.label}
            </Button>

            {secondaryCTA && (
              <Button
                variant="ghost"
                size="md"
                href={secondaryCTA.href}
                analyticsId={secondaryCTA.analyticsId || 'hero-secondary-cta'}
                analyticsLocation="hero"
                className="w-full sm:w-auto text-white hover:bg-white/10"
              >
                {secondaryCTA.label}
              </Button>
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
