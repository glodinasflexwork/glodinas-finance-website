# Next-Intl Migration Implementation Guide

This document outlines the implementation of next-intl for the Getting Started page as a proof of concept for the enhanced translation architecture.

## Overview

The implementation demonstrates how to use next-intl to create a robust multilingual website with:
- Language code-based URLs (e.g., /nl/aan-de-slag, /en/getting-started)
- Language-specific layouts and styling
- Language-specific images
- SEO optimization for each language
- Instant language switching

## Implementation Components

1. **Middleware**: Language detection and routing
2. **Navigation**: Localized route configuration
3. **Providers**: Next-intl integration
4. **Translation Files**: JSON-based translations
5. **Components**: Language-specific UI elements
6. **Layouts**: Different layouts per language

## Directory Structure

```
src/
├── app/
│   └── (localized)/
│       └── [locale]/
│           └── getting-started/
│               ├── page.tsx           # Main page component
│               └── layout.tsx         # SEO metadata and layout
├── components/
│   ├── LocalizedImage.tsx             # Language-specific image component
│   └── PlaceholderImage.tsx           # Testing component for images
├── i18n/
│   └── next-intl/
│       ├── messages/                  # Translation files
│       │   ├── en.json
│       │   ├── nl.json
│       │   ├── ro.json
│       │   ├── tr.json
│       │   └── ru.json
│       ├── getMessages.ts             # Message loader
│       ├── navigation.ts              # Route configuration
│       └── provider.tsx               # Next-intl provider
└── middleware.ts                      # Language detection middleware
```

## How It Works

1. The middleware detects the user's language from the URL, cookies, or browser settings
2. The appropriate translation file is loaded based on the detected language
3. The page renders with language-specific layouts and images
4. Users can switch languages using the language switcher, which updates the URL

## Extending to Other Pages

To extend this approach to other pages:
1. Add the page to the pathnames configuration in navigation.ts
2. Create the page component in the (localized)/[locale] directory
3. Add translations for the page to all language files
4. Implement language-specific layouts and images as needed

## Benefits Over Previous Implementation

1. **Isolated Changes**: Each page can be migrated independently
2. **SEO Friendly**: Proper language URLs and metadata
3. **Maintainable**: Clear separation of translations and code
4. **Flexible**: Different layouts and images per language
5. **Scalable**: Easy to add new languages and pages

## Next Steps

1. Migrate additional pages one by one
2. Implement site-wide language detection
3. Create a global language switcher component
4. Add more language-specific assets and layouts
