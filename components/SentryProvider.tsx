'use client';

/**
 * Sentry Provider Component
 * 
 * Client-side component that initializes Sentry on mount.
 * This ensures Sentry is only initialized in the browser.
 * 
 * Requirements: 6.4 - Configure Sentry with DSN and environment
 */

import { useEffect } from 'react';
import { initSentry } from '@/lib/sentry';

export default function SentryProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    // Initialize Sentry on client-side mount
    initSentry();
  }, []);

  return <>{children}</>;
}
