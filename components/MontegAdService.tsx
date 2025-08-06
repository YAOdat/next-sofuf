'use client';

import { useEffect } from 'react';

interface MontegAdServiceProps {
  enabled?: boolean;
}

const MontegAdService: React.FC<MontegAdServiceProps> = ({ enabled = true }) => {
  useEffect(() => {
    if (!enabled) return;

    // Only register on blog pages
    const isBlogPage = window.location.pathname.includes('/blog');
    if (!isBlogPage) return;

    // Check if service worker is supported
    if ('serviceWorker' in navigator) {
      const registerMontegServiceWorker = async () => {
        try {
          const registration = await navigator.serviceWorker.register('/sw.js', {
            scope: '/'
          });
          
          console.log('Monteg ad service worker registered successfully:', registration.scope);
          
          // Listen for service worker updates
          registration.addEventListener('updatefound', () => {
            const newWorker = registration.installing;
            if (newWorker) {
              newWorker.addEventListener('statechange', () => {
                if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                  console.log('New monteg ad service worker available');
                }
              });
            }
          });
          
        } catch (error) {
          console.error('Failed to register monteg ad service worker:', error);
        }
      };

      // Register when page loads
      if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', registerMontegServiceWorker);
      } else {
        registerMontegServiceWorker();
      }
    }
  }, [enabled]);

  // This component doesn't render anything
  return null;
};

export default MontegAdService; 