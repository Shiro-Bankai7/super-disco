import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

/**
 * Root Layout Component
 * 
 * This is the root layout for the entire application.
 * It includes:
 * - Font loading (Inter for body text)
 * - Global styles
 * - Metadata for SEO
 * - Semantic HTML structure
 * 
 * Requirements:
 * - 1.1: Next.js with TypeScript and proper structure
 * - 3.5: Semantic HTML elements with proper heading hierarchy
 */

// Load Inter font with Latin subset
// Using variable font for optimal performance
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap', // Use font-display: swap for better performance
  preload: true,
  fallback: ['system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
});

/**
 * Metadata Configuration
 * 
 * Base metadata for the application
 * This will be extended/overridden by page-specific metadata
 */
export const metadata: Metadata = {
  title: {
    default: 'BioEnergy - Sustainable Energy Solutions',
    template: '%s | BioEnergy',
  },
  description: 'Leading provider of sustainable energy solutions. Discover how BioEnergy is transforming the future of clean energy.',
  keywords: ['bioenergy', 'sustainable energy', 'clean energy', 'renewable energy', 'green energy'],
  authors: [{ name: 'BioEnergy' }],
  creator: 'BioEnergy',
  publisher: 'BioEnergy',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://bioenergy.com'),
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    siteName: 'BioEnergy',
    title: 'BioEnergy - Sustainable Energy Solutions',
    description: 'Leading provider of sustainable energy solutions. Discover how BioEnergy is transforming the future of clean energy.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'BioEnergy - Sustainable Energy Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BioEnergy - Sustainable Energy Solutions',
    description: 'Leading provider of sustainable energy solutions. Discover how BioEnergy is transforming the future of clean energy.',
    images: ['/images/twitter-image.jpg'],
    creator: '@bioenergy',
  },
  verification: {
    google: 'google-site-verification-code',
    // Add other verification codes as needed
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
};

/**
 * Viewport Configuration
 * 
 * Ensures proper responsive behavior and prevents zoom on mobile
 */
export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: '#10b981',
};

/**
 * Root Layout Props
 */
interface RootLayoutProps {
  children: React.ReactNode;
}

/**
 * Root Layout Component
 * 
 * Provides the base HTML structure with semantic elements
 * and accessibility features
 */
export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        {/* Preconnect to external domains for better performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* DNS prefetch for analytics and other third-party services */}
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
      </head>
      <body className={inter.className}>
        {/* Skip to main content link for accessibility */}
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        
        {/* Main content wrapper */}
        <div id="root" className="min-h-screen flex flex-col">
          {children}
        </div>
        
        {/* Portal root for modals and overlays */}
        <div id="portal-root" />
      </body>
    </html>
  );
}
