/**
 * Analytics Type Declarations
 * 
 * Global type declarations for analytics integrations (GTM, GA4)
 */

interface AnalyticsEvent {
  event: string;
  category?: string;
  action?: string;
  label?: string;
  location?: string;
  buttonText?: string;
  value?: number;
  [key: string]: any;
}

interface Window {
  dataLayer?: AnalyticsEvent[];
}
