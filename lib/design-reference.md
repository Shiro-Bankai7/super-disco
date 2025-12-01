# Design Reference - BioEnergy Landing Page

This document provides a visual reference for implementing the BioEnergy landing page based on the provided design images.

## Color Palette

### Primary Colors
- **Brand Green**: `#10b981` (emerald-500)
- **Light Green Background**: `#ecfdf5` (primary-50) - Used for icon circles and section backgrounds
- **Dark Navy**: `#1a202c` - Used for footer and primary buttons

### Text Colors
- **Primary Text**: `#171717` (neutral-900)
- **Secondary Text**: `#525252` (neutral-600)
- **Tertiary Text**: `#a3a3a3` (neutral-400)
- **Inverse Text**: `#ffffff` (white) - On dark backgrounds

### Background Colors
- **White**: `#ffffff` - Main background
- **Light Gray**: `#f5f5f5` - Input fields
- **Light Green**: `#ecfdf5` - Section backgrounds
- **Dark Navy**: `#1a202c` - Footer

## Typography

### Font Families
- **Primary**: Inter (sans-serif)
- **Display**: Inter (sans-serif)

### Font Sizes
- **Hero Headline**: 48-60px (3xl-5xl)
- **Hero Subheadline**: 18-20px (lg-xl)
- **Section Title**: 30-36px (3xl-4xl)
- **Section Subtitle**: 18-20px (lg-xl)
- **Feature Title**: 18-20px (lg-xl)
- **Body Text**: 16px (base)
- **Small Text**: 14px (sm)

### Font Weights
- **Regular**: 400
- **Medium**: 500
- **Semibold**: 600
- **Bold**: 700

## Components

### Navigation
- **Height**: ~72px
- **Background**: White with subtle shadow
- **Logo**: Green circular icon + "BioEnergy" text
- **Links**: Neutral-600 color, hover to neutral-900
- **CTA Button**: Dark navy background, white text, rounded corners

### Buttons

#### Primary Button
- **Background**: Dark navy (#1a202c)
- **Text**: White
- **Padding**: 12px 24px
- **Border Radius**: 8px
- **Font Size**: 16px
- **Font Weight**: Medium (500)
- **Hover**: Slightly lighter navy

#### Secondary Button (Ghost)
- **Background**: Transparent
- **Border**: 1px solid white/neutral
- **Text**: White/neutral
- **Padding**: 12px 24px
- **Border Radius**: 8px
- **Font Size**: 16px
- **Font Weight**: Medium (500)

### Badge
- **Background**: Dark navy (#1a202c)
- **Text**: White
- **Padding**: 6px 12px
- **Border Radius**: 6px
- **Font Size**: 14px
- **Font Weight**: Medium (500)
- **Example**: "Premium Quality"

### Feature Cards
- **Background**: White
- **Border**: None
- **Shadow**: Subtle (0 1px 3px rgba(0,0,0,0.1))
- **Border Radius**: 16px
- **Padding**: 32px
- **Icon Circle**:
  - Size: 56px
  - Background: Light green (#ecfdf5)
  - Icon Color: Brand green (#10b981)

### Icon Circles
- **Size**: 56px diameter
- **Background**: Light green (#ecfdf5)
- **Icon Color**: Brand green (#10b981)
- **Border Radius**: 50% (full circle)
- **Used for**: Feature icons, contact icons

### Form Inputs
- **Background**: Light gray (#f5f5f5)
- **Border**: None
- **Border Radius**: 8px
- **Padding**: 12px 16px
- **Height**: 48px
- **Font Size**: 16px
- **Placeholder Color**: Neutral-400

### Footer
- **Background**: Dark navy (#1a202c)
- **Text Color**: Light gray (#a0aec0)
- **Link Hover**: White
- **Padding**: 64px vertical
- **Layout**: Multi-column (Company, Services, Connect)
- **Social Icons**: Circular, subtle hover effect

## Layout

### Container
- **Max Width**: 1280px (xl)
- **Padding**: 24px horizontal on mobile, 48px on desktop

### Spacing
- **Section Padding**: 80-96px vertical
- **Card Gap**: 24px
- **Element Spacing**: 16-24px between related elements

### Grid
- **Features Grid**: 2 columns on desktop, 1 column on mobile
- **Gap**: 24px

## Hero Section
- **Background**: Full-width image with dark overlay
- **Text Color**: White
- **Badge**: "Premium Quality" or similar
- **Headline**: Large, bold, white text
- **Subheadline**: Medium size, white text with slight transparency
- **CTAs**: Primary + Secondary buttons, horizontally aligned
- **Padding**: 120-160px vertical

## Features Section
- **Background**: White or light green
- **Title**: Centered, large
- **Subtitle**: Centered, medium gray
- **Grid**: 2 columns, 3 rows (6 features total)
- **Card Style**: White background, subtle shadow, rounded corners

## Contact Section
- **Background**: White
- **Layout**: Contact info on left, form on right (or stacked on mobile)
- **Icon Style**: Light green circles with green icons
- **Form**: Full-width inputs, dark submit button

## Responsive Breakpoints
- **Mobile**: < 768px
- **Tablet**: 768px - 1023px
- **Desktop**: ≥ 1024px

## Accessibility
- **Focus States**: Visible outline on all interactive elements
- **Color Contrast**: Meets WCAG 2.1 AA standards
- **Touch Targets**: Minimum 44x44px
- **Alt Text**: All images have descriptive alt text

## Animation
- **Scroll Animations**: Fade in + slide up for feature cards
- **Button Hover**: Subtle scale or color transition
- **Duration**: 200-300ms
- **Easing**: ease-in-out
- **Reduced Motion**: Respect prefers-reduced-motion preference
