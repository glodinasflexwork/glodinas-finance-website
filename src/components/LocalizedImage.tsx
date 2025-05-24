'use client';

import React from 'react';
import {useLocale} from 'next-intl';
import Image from 'next/image';

// Component for displaying language-specific images
export default function LocalizedImage({
  src,
  alt,
  width,
  height,
  className,
  priority = false
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  priority?: boolean;
}) {
  const locale = useLocale();
  
  // Construct the language-specific image path
  // Format: /images/[section]/[locale]/[filename]
  const getLocalizedImagePath = () => {
    // Extract the section and filename from the src
    const parts = src.split('/');
    const filename = parts.pop() || '';
    const section = parts.pop() || '';
    
    // Construct the new path with the locale
    return `/images/${section}/${locale}/${filename}`;
  };
  
  return (
    <Image
      src={getLocalizedImagePath()}
      alt={alt}
      width={width}
      height={height}
      className={className}
      priority={priority}
    />
  );
}
