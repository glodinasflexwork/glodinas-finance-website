'use client';

import Image from 'next/image';
import { useTranslation } from 'react-i18next';

interface LocalizedImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  fallbackLocale?: string;
  // Other Image props
  [key: string]: any;
}

/**
 * A component that displays different images based on the current language
 * 
 * Usage:
 * <LocalizedImage
 *   src="hero-banner.jpg"
 *   alt="Hero Banner"
 *   width={1200}
 *   height={600}
 *   className="w-full h-auto"
 *   fallbackLocale="en"
 * />
 * 
 * This will look for:
 * - /images/nl/hero-banner.jpg (for Dutch)
 * - /images/en/hero-banner.jpg (fallback)
 */
export default function LocalizedImage({
  src,
  alt,
  width,
  height,
  className,
  fallbackLocale = 'en',
  ...props
}: LocalizedImageProps) {
  const { i18n } = useTranslation();
  const locale = i18n.language || fallbackLocale;
  
  // Construct path to localized image
  const localizedSrc = `/images/${locale}/${src}`;
  const fallbackSrc = `/images/${fallbackLocale}/${src}`;
  
  // Handle image loading error by falling back to default locale
  const handleError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const target = e.target as HTMLImageElement;
    if (target.src.includes(localizedSrc) && locale !== fallbackLocale) {
      console.log(`Image not found for locale ${locale}, falling back to ${fallbackLocale}`);
      target.src = target.src.replace(localizedSrc, fallbackSrc);
    }
  };
  
  return (
    <Image
      src={localizedSrc}
      alt={alt}
      width={width}
      height={height}
      className={className}
      onError={handleError}
      {...props}
    />
  );
}
