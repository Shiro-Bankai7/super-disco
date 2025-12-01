# Image Assets

This directory contains all image assets for the BioEnergy landing page.

## Required Images

### Hero Section
- **hero-background.jpg**: Full-width hero background image
  - Recommended size: 1920x1080px or larger
  - Format: JPG (will be optimized to WebP/AVIF by Next.js)
  - Subject: Sustainable energy infrastructure (solar panels, wind turbines, etc.)
  - Alt text: "Sustainable energy infrastructure with solar panels and wind turbines"

### Logo
- **logo.svg**: Company logo for navigation
  - Format: SVG (vector)
  - Alt text: "BioEnergy - Sustainable Energy Solutions"

## Image Optimization

All images are automatically optimized by Next.js Image component:
- Automatic format conversion (WebP, AVIF)
- Responsive sizing with srcset
- Lazy loading for below-fold images
- Priority loading for LCP images (hero background)

## Placeholder Images

For development, you can use placeholder images from:
- https://unsplash.com (free high-quality photos)
- https://placeholder.com (simple placeholders)

Search terms: "solar panels", "wind turbines", "renewable energy", "sustainable energy"
