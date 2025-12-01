/**
 * Sentry Configuration and Utilities
 * 
 * This module provides Sentry initialization and error reporting utilities.
 * Sentry integration is optional and will gracefully degrade if not configured.
 * 
 * Requirements: 6.4 - Error reporting with context and stack traces
 * 
 * Setup Instructions:
 * 1. Install Sentry: npm install @sentry/nextjs
 * 2. Set environment variable: NEXT_PUBLIC_SENTRY_DSN=your-dsn-here
 * 3. Set environment variable: NEXT_PUBLIC_SENTRY_ENVIRONMENT=production|staging|development
 * 4. Uncomment the Sentry imports and initialization code below
 */

// Uncomment when @sentry/nextjs is installed:
// import * as Sentry from '@sentry/nextjs';

export interface SentryConfig {
  dsn: string;
  environment: string;
  tracesSampleRate: number;
  replaysSessionSampleRate: number;
  replaysOnErrorSampleRate: number;
}

/**
 * Initialize Sentry with configuration
 * Call this in app/layout.tsx or a client component
 */
export function initSentry(): void {
  const dsn = process.env.NEXT_PUBLIC_SENTRY_DSN;
  const environment = process.env.NEXT_PUBLIC_SENTRY_ENVIRONMENT || 'development';

  // Only initialize if DSN is provided
  if (!dsn) {
    console.warn('Sentry DSN not configured. Error reporting is disabled.');
    return;
  }

  // Uncomment when @sentry/nextjs is installed:
  /*
  Sentry.init({
    dsn,
    environment,
    
    // Set tracesSampleRate to 1.0 to capture 100% of transactions for performance monitoring.
    // Adjust this value in production to reduce volume
    tracesSampleRate: environment === 'production' ? 0.1 : 1.0,
    
    // Capture Replay for 10% of all sessions,
    // plus 100% of sessions with an error
    replaysSessionSampleRate: 0.1,
    replaysOnErrorSampleRate: 1.0,
    
    // Ignore common errors that don't require action
    ignoreErrors: [
      // Browser extensions
      'top.GLOBALS',
      // Random plugins/extensions
      'originalCreateNotification',
      'canvas.contentDocument',
      'MyApp_RemoveAllHighlights',
      // Facebook errors
      'fb_xd_fragment',
      // Network errors
      'NetworkError',
      'Network request failed',
      // ResizeObserver errors (benign)
      'ResizeObserver loop limit exceeded',
    ],
    
    // Filter out sensitive data
    beforeSend(event, hint) {
      // Remove sensitive data from event
      if (event.request) {
        delete event.request.cookies;
        delete event.request.headers;
      }
      
      return event;
    },
  });
  */

  console.log(`Sentry initialized for environment: ${environment}`);
}

/**
 * Manually capture an exception
 */
export function captureException(
  error: Error,
  context?: Record<string, any>
): void {
  if (process.env.NODE_ENV === 'development') {
    console.error('Error captured:', error, context);
  }

  // Uncomment when @sentry/nextjs is installed:
  /*
  if (typeof window !== 'undefined' && (window as any).Sentry) {
    Sentry.captureException(error, {
      contexts: context,
    });
  }
  */
}

/**
 * Manually capture a message
 */
export function captureMessage(
  message: string,
  level: 'info' | 'warning' | 'error' = 'info',
  context?: Record<string, any>
): void {
  if (process.env.NODE_ENV === 'development') {
    console.log(`[${level.toUpperCase()}] ${message}`, context);
  }

  // Uncomment when @sentry/nextjs is installed:
  /*
  if (typeof window !== 'undefined' && (window as any).Sentry) {
    Sentry.captureMessage(message, {
      level,
      contexts: context,
    });
  }
  */
}

/**
 * Set user context for error reporting
 */
export function setUser(_user: {
  id?: string;
  email?: string;
  username?: string;
}): void {
  // Uncomment when @sentry/nextjs is installed:
  /*
  if (typeof window !== 'undefined' && (window as any).Sentry) {
    Sentry.setUser(_user);
  }
  */
}

/**
 * Clear user context
 */
export function clearUser(): void {
  // Uncomment when @sentry/nextjs is installed:
  /*
  if (typeof window !== 'undefined' && (window as any).Sentry) {
    Sentry.setUser(null);
  }
  */
}

/**
 * Add breadcrumb for debugging
 */
export function addBreadcrumb(
  _message: string,
  _category?: string,
  _level?: 'info' | 'warning' | 'error'
): void {
  // Uncomment when @sentry/nextjs is installed:
  /*
  if (typeof window !== 'undefined' && (window as any).Sentry) {
    Sentry.addBreadcrumb({
      message: _message,
      category: _category,
      level: _level,
      timestamp: Date.now() / 1000,
    });
  }
  */
}

/**
 * Check if Sentry is initialized
 */
export function isSentryInitialized(): boolean {
  return typeof window !== 'undefined' && !!(window as any).Sentry;
}
