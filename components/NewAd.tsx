// AdComponent.tsx
import { useEffect, useRef } from 'react';
import { Card } from "@nextui-org/react";

interface AdProps {
  adUrl: string;
  width?: string;
  height?: string;
  className?: string;
}

const AdComponent = ({ 
  adUrl,
  width = "100%",
  height = "250px",
  className = ""
}: AdProps) => {
  const adContainerRef = useRef<HTMLDivElement>(null);
  const hasAttemptedLoad = useRef(false);

  useEffect(() => {
    // Only attempt to load ad once
    if (hasAttemptedLoad.current || !adContainerRef.current) return;
    
    hasAttemptedLoad.current = true;

    try {
      // Create iframe for ad content
      const iframe = document.createElement('iframe');
      iframe.style.width = '100%';
      iframe.style.height = '100%';
      iframe.style.border = 'none';
      iframe.sandbox.add(
        'allow-scripts',
        'allow-same-origin',
        'allow-popups',
        'allow-forms'
      );
      
      // Set up error handling
      iframe.onerror = () => {
        console.error('Failed to load ad content');
        if (adContainerRef.current) {
          adContainerRef.current.innerHTML = 'Ad failed to load';
        }
      };

      // Add iframe to container
      iframe.src = adUrl;
      adContainerRef.current.appendChild(iframe);
    } catch (error) {
      console.error('Error loading ad:', error);
    }

    // Cleanup function
    return () => {
      if (adContainerRef.current) {
        adContainerRef.current.innerHTML = '';
      }
    };
  }, [adUrl]);

  return (
    <Card
      className={`overflow-hidden ${className}`}
      style={{
        width,
        height,
        minHeight: height
      }}
    >
      <div
        ref={adContainerRef}
        style={{
          width: '100%',
          height: '100%',
        }}
      />
    </Card>
  );
};

export default AdComponent;