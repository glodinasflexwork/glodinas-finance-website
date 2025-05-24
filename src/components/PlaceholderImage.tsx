import React from 'react';
import Image from 'next/image';
import {useLocale} from 'next-intl';

// Create a placeholder image component for testing
export default function PlaceholderImage({
  width = 800,
  height = 400,
  text = 'Placeholder Image',
  locale
}: {
  width?: number;
  height?: number;
  text?: string;
  locale?: string;
}) {
  // Use the current locale if not explicitly provided
  const currentLocale = locale || useLocale();
  
  // Generate a different background color based on locale
  const getBackgroundColor = () => {
    switch(currentLocale) {
      case 'nl': return '#e6f2ff'; // Light blue for Dutch
      case 'ro': return '#fff2e6'; // Light orange for Romanian
      case 'tr': return '#f2ffe6'; // Light green for Turkish
      case 'ru': return '#ffe6e6'; // Light red for Russian
      default: return '#f0f0f0';   // Light gray for English and fallback
    }
  };
  
  return (
    <div 
      style={{
        width: `${width}px`,
        height: `${height}px`,
        backgroundColor: getBackgroundColor(),
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '8px',
        color: '#333',
        fontWeight: 'bold',
        fontSize: '24px',
        textAlign: 'center',
        padding: '20px',
        position: 'relative'
      }}
    >
      <div>{text}</div>
      <div 
        style={{
          position: 'absolute',
          bottom: '10px',
          right: '10px',
          backgroundColor: '#fff',
          padding: '5px 10px',
          borderRadius: '4px',
          fontSize: '14px'
        }}
      >
        {currentLocale.toUpperCase()}
      </div>
    </div>
  );
}
