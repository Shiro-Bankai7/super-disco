'use client';

import React, { useRef } from 'react';
import { motion, useReducedMotion, useInView } from 'framer-motion';
import { Icon } from '@/components/ui/Icon';

/**
 * Features Section Component
 * 
 * Displays a grid of product features with icons, titles, and descriptions.
 * Features scroll-triggered animations using Framer Motion with intersection observer.
 * 
 * Requirements:
 * - 1.1: Pixel-perfect fidelity to Figma design
 * - 1.2: Responsive layouts for tablet viewport (768px-1023px)
 * - 1.3: Responsive layouts for mobile viewport (below 768px)
 * - 7.1: Framer Motion animations with appropriate easing and duration
 * - 7.2: Respect user preferences for reduced motion
 * 
 * @example
 * <Features
 *   title="Why Choose BioEnergy"
 *   subtitle="Sustainable solutions for a better tomorrow"
 *   features={[
 *     {
 *       icon: <LeafIcon />,
 *       title: "100% Renewable",
 *       description: "All our energy comes from sustainable sources"
 *     }
 *   ]}
 * />
 */

export interface Feature {
  /** Icon component to display */
  icon: React.ReactNode;
  /** Feature title */
  title: string;
  /** Feature description */
  description: string;
}

export interface FeaturesProps {
  /** Section title */
  title: string;
  /** Section subtitle */
  subtitle: string;
  /** Array of features to display */
  features: Feature[];
}

/**
 * Individual Feature Card Component
 */
interface FeatureCardProps {
  feature: Feature;
  index: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ feature, index }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, {
    once: true, // Animate only once when it comes into view
    margin: '-100px', // Trigger animation 100px before element enters viewport
  });
  const prefersReducedMotion = useReducedMotion();

  /**
   * Animation variants for feature cards
   * Respects reduced motion preferences (Requirement 7.2)
   */
  const cardVariants = {
    hidden: {
      opacity: 0,
      y: prefersReducedMotion ? 0 : 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: prefersReducedMotion ? 0.01 : 0.5,
        delay: prefersReducedMotion ? 0 : index * 0.1, // Stagger animation
        ease: [0.4, 0, 0.2, 1] as const, // Custom easing (Requirement 7.1)
      },
    },
  };

  return (
    <motion.div
      ref={cardRef}
      variants={cardVariants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      className="
        group
        bg-white
        rounded-2xl
        p-8 md:p-10
        shadow-sm hover:shadow-lg
        transition-all duration-300
        border border-neutral-100
        h-full
        flex flex-col
      "
    >
      {/* Icon Circle */}
      <div
        className="
          flex items-center justify-center
          w-16 h-16 md:w-20 md:h-20
          bg-primary-50
          rounded-full
          mb-6 md:mb-8
          flex-shrink-0
          group-hover:bg-primary-100
          transition-colors duration-200
        "
      >
        <Icon
          size="lg"
          className="text-primary-600"
          decorative
        >
          {feature.icon}
        </Icon>
      </div>

      {/* Title */}
      <h3 className="
        text-xl md:text-2xl
        font-semibold
        text-neutral-900
        mb-4
        leading-tight
      ">
        {feature.title}
      </h3>

      {/* Description */}
      <p className="
        text-base md:text-lg
        text-neutral-600
        leading-relaxed
        flex-grow
      ">
        {feature.description}
      </p>
    </motion.div>
  );
};

/**
 * Features Section Component
 */
export const Features: React.FC<FeaturesProps> = ({
  title,
  subtitle,
  features,
}) => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, {
    once: true,
    margin: '-50px',
  });
  const prefersReducedMotion = useReducedMotion();

  /**
   * Animation variants for section header
   */
  const headerVariants = {
    hidden: {
      opacity: 0,
      y: prefersReducedMotion ? 0 : 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: prefersReducedMotion ? 0.01 : 0.6,
        ease: [0.4, 0, 0.2, 1] as const,
      },
    },
  };

  return (
    <section
      ref={sectionRef}
      id="features"
      className="
        py-20 md:py-24 lg:py-32
        bg-background-secondary
      "
      aria-labelledby="features-title"
    >
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 max-w-7xl">
        {/* Section Header */}
        <motion.div
          variants={headerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="text-center max-w-3xl mx-auto mb-16 md:mb-20"
        >
          {/* Title */}
          <h2
            id="features-title"
            className="
              text-3xl sm:text-4xl md:text-5xl
              font-bold
              text-neutral-900
              mb-4
              leading-tight
            "
          >
            {title}
          </h2>

          {/* Subtitle */}
          <p className="
            text-lg md:text-xl
            text-neutral-600
            leading-relaxed
          ">
            {subtitle}
          </p>
        </motion.div>

        {/* Features Grid */}
        {/* Requirements 1.2, 1.3: Responsive grid layout */}
        {/* Mobile: 1 column, Tablet: 2 columns, Desktop: 3 columns */}
        <div className="
          grid
          grid-cols-1
          md:grid-cols-2
          lg:grid-cols-3
          gap-8 md:gap-10 lg:gap-12
        ">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              feature={feature}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
