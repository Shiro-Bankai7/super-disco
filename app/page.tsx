import {
  Navigation,
  Hero,
  Features,
  ProductDetails,
  Contact,
  Footer,
} from '@/components/sections';
import type {
  NavigationLink,
  CTAButton,
  HeroProps,
  FeaturesProps,
  ProductDetailsProps,
  ContactProps,
  FooterProps,
} from '@/components/sections';
import {
  LeafIcon,
  BoltIcon,
  ShieldIcon,
  GlobeIcon,
  SparklesIcon,
  ChartBarIcon,
} from '@/components/ui/icons';

/**
 * Home Page - Landing Page Composition
 * 
 * Composes all sections of the landing page with a structured content model.
 * Implements proper semantic HTML structure and heading hierarchy.
 * 
 * Requirements:
 * - 1.1: Next.js with TypeScript - pixel-perfect fidelity to Figma design
 * - 3.5: Semantic HTML structure with proper heading hierarchy
 * - 10.2: Logical content hierarchy guiding visitors toward conversion goals
 */

/**
 * Content Model
 * 
 * Centralized content model for the landing page.
 * This structure separates content from presentation, making it easy to
 * update copy, links, and other content without modifying component code.
 */
interface LandingPageContent {
  navigation: {
    logo: string;
    logoAlt: string;
    links: NavigationLink[];
    ctaButton: CTAButton;
  };
  hero: HeroProps;
  features: FeaturesProps;
  productDetails: ProductDetailsProps;
  contact: ContactProps;
  footer: FooterProps;
}

/**
 * Landing page content configuration
 */
const landingPageContent: LandingPageContent = {
  // Navigation content
  navigation: {
    logo: '/images/logo.svg',
    logoAlt: 'BioEnergy - Sustainable Energy Solutions',
    links: [
      { 
        label: 'Services', 
        href: '#features',
        ariaLabel: 'View our services'
      },
      { 
        label: 'Products', 
        href: '#products',
        ariaLabel: 'View our products'
      },
      { 
        label: 'How It Works', 
        href: '#how-it-works',
        ariaLabel: 'Learn how it works'
      },
      { 
        label: 'Contact', 
        href: '#contact',
        ariaLabel: 'Contact us'
      },
    ],
    ctaButton: {
      label: 'Get Started',
      href: '#contact',
      variant: 'primary',
    },
  },

  // Hero section content
  hero: {
    headline: 'Sustainable Energy Solutions Through Biomass Briquettes',
    subheadline: 'Transform your energy consumption with our eco-friendly briquettes. Reliable, cost-effective, and sustainable fuel delivered as a service.',
    primaryCTA: {
      label: 'Get Started',
      href: '#contact',
      analyticsId: 'hero-get-started',
    },
    secondaryCTA: {
      label: 'Learn More',
      href: '#features',
      analyticsId: 'hero-learn-more',
    },
    backgroundImage: '/images/hero-background.jpg',
    backgroundImageAlt: 'Sustainable energy infrastructure with wind turbines and green landscape',
  },

  // Features section content
  features: {
    title: 'Why Choose Our Briquettes?',
    subtitle: 'Comprehensive energy solutions that combine sustainability with reliability',
    features: [
      {
        icon: <BoltIcon />,
        title: 'High Energy Density',
        description:
          'Our biomass briquettes deliver exceptional energy output with high calorific value for maximum efficiency.',
      },
      {
        icon: <LeafIcon />,
        title: '100% Eco-Friendly',
        description:
          'Made from agricultural waste, our briquettes are completely renewable and carbon-neutral.',
      },
      {
        icon: <ChartBarIcon />,
        title: 'Cost Effective',
        description:
          'Reduce your energy costs by up to 40% compared to traditional fossil fuels while maintaining efficiency.',
      },
      {
        icon: <ShieldIcon />,
        title: 'Reliable Supply',
        description:
          'Energy as a Service model ensures consistent delivery and supply chain management for your operations.',
      },
      {
        icon: <GlobeIcon />,
        title: 'Flexible Delivery',
        description:
          'Scheduled deliveries tailored to your consumption patterns with real-time inventory tracking.',
      },
      {
        icon: <SparklesIcon />,
        title: 'Quality Guaranteed',
        description:
          'Every batch is tested for moisture content, density, and calorific value to ensure optimal performance.',
      },
    ],
  },

  // Product details section content
  productDetails: {
    badge: 'Premium Quality',
    title: 'Engineered for Performance',
    description:
      'Our biomass briquettes are manufactured using state-of-the-art compression technology, transforming agricultural waste into high-density fuel blocks.',
    details: [
      { text: 'Moisture content < 10%' },
      { text: 'High calorific value (4000-4500 kcal/kg)' },
      { text: 'Uniform size and shape' },
      { text: 'Low ash content' },
      { text: 'Easy storage and handling' },
      { text: 'Clean burning with minimal emissions' },
    ],
  },

  // Contact section content
  contact: {
    title: 'Get Started with Sustainable Energy',
    subtitle:
      'Ready to transform your energy consumption? Contact us today for a free consultation and customized energy assessment.',
    contactInfo: {
      phone: '+1 (555) 123-4567',
      email: 'contact@energybriquettes.com',
      address: '123 Green Energy Blvd, Eco City, EC 12345',
    },
  },

  // Footer content
  footer: {
    logo: '/images/logo.svg',
    tagline: 'Sustainable energy solutions through premium biomass briquettes.',
    sections: [
      {
        title: 'Company',
        links: [
          { label: 'About Us', href: '/about' },
          { label: 'Our Team', href: '/team' },
          { label: 'Careers', href: '/careers' },
          { label: 'News', href: '/news' },
        ],
      },
      {
        title: 'Services',
        links: [
          { label: 'Briquette Supply', href: '/services/briquettes' },
          { label: 'Energy Consulting', href: '/services/consulting' },
          { label: 'Custom Solutions', href: '/services/custom' },
          { label: 'Support', href: '/support' },
        ],
      },
    ],
    socialLinks: {
      facebook: 'https://facebook.com/bioenergy',
      twitter: 'https://twitter.com/bioenergy',
      linkedin: 'https://linkedin.com/company/bioenergy',
      instagram: 'https://instagram.com/bioenergy',
    },
    copyrightText: 'BioEnergy. All rights reserved.',
    legalLinks: [
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms of Service', href: '/terms' },
      { label: 'Cookie Policy', href: '/cookies' },
    ],
  },
};

/**
 * Home Page Component
 * 
 * Renders the complete landing page by composing all sections.
 * Follows semantic HTML structure with proper heading hierarchy (h1 in Hero, h2 in Features).
 * 
 * @returns Landing page with Navigation, Hero, and Features sections
 */
export default function HomePage() {
  return (
    <>
      {/* 
        Navigation Component
        Sticky header with logo, links, and CTA button
        Requirement 10.1: Above-the-fold rendering
      */}
      <Navigation
        logo={landingPageContent.navigation.logo}
        logoAlt={landingPageContent.navigation.logoAlt}
        links={landingPageContent.navigation.links}
        ctaButton={landingPageContent.navigation.ctaButton}
      />

      {/* 
        Main Content Area
        Semantic <main> element for primary page content
        Requirement 3.5: Semantic HTML structure
      */}
      <main id="main-content">
        {/* 
          Hero Section
          Above-the-fold content with primary CTA
          Requirement 10.1: Hero section and primary CTA within initial viewport
          Requirement 10.2: Content hierarchy guiding toward conversion goals
        */}
        <Hero
          headline={landingPageContent.hero.headline}
          subheadline={landingPageContent.hero.subheadline}
          primaryCTA={landingPageContent.hero.primaryCTA}
          secondaryCTA={landingPageContent.hero.secondaryCTA}
          backgroundImage={landingPageContent.hero.backgroundImage}
          backgroundImageAlt={landingPageContent.hero.backgroundImageAlt}
        />

        {/* 
          Features Section
          Grid of product benefits with icons
          Requirement 10.2: Logical information hierarchy
        */}
        <div className="py-20 md:py-24 lg:py-32">
          <Features
            title={landingPageContent.features.title}
            subtitle={landingPageContent.features.subtitle}
            features={landingPageContent.features.features}
          />
        </div>

        {/* 
          Product Details Section
          Specifications and features with checkmark list
        */}
        <div className="py-20 md:py-24 lg:py-32 bg-neutral-50">
          <ProductDetails
            badge={landingPageContent.productDetails.badge}
            title={landingPageContent.productDetails.title}
            description={landingPageContent.productDetails.description}
            details={landingPageContent.productDetails.details}
          />
        </div>

        {/* 
          Contact Section
          Contact information and form
          Requirement 5.2: Form submission tracking
        */}
        <div className="py-20 md:py-24 lg:py-32">
          <Contact
            title={landingPageContent.contact.title}
            subtitle={landingPageContent.contact.subtitle}
            contactInfo={landingPageContent.contact.contactInfo}
          />
        </div>
      </main>

      {/* 
        Footer
        Site footer with links and social media
        Requirement 3.5: Semantic HTML structure
      */}
      <Footer
        logo={landingPageContent.footer.logo}
        tagline={landingPageContent.footer.tagline}
        sections={landingPageContent.footer.sections}
        socialLinks={landingPageContent.footer.socialLinks}
        copyrightText={landingPageContent.footer.copyrightText}
        legalLinks={landingPageContent.footer.legalLinks}
      />
    </>
  );
}
