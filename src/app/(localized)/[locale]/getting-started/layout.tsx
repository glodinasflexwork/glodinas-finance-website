import React from 'react';
import {Metadata} from 'next';
import {useLocale} from 'next-intl';

// Generate metadata for SEO
export async function generateMetadata({
  params: {locale}
}: {
  params: {locale: string};
}): Promise<Metadata> {
  // Get translations based on locale
  let title = '';
  let description = '';
  
  // Set SEO metadata based on language
  switch(locale) {
    case 'nl':
      title = 'Aan de Slag met Glodinas Finance | Boekhouding voor ZZP en BV';
      description = 'Volg ons eenvoudige driestappenproces om uw boekhouding op te zetten en soepel te laten verlopen met Glodinas Finance.';
      break;
    case 'ro':
      title = 'Primii Pași cu Glodinas Finance | Contabilitate pentru Antreprenori';
      description = 'Urmați procesul nostru simplu în trei pași pentru a configura și gestiona contabilitatea dumneavoastră fără probleme.';
      break;
    case 'tr':
      title = 'Glodinas Finance ile Başlangıç | Girişimciler için Muhasebe';
      description = 'Muhasebenizi kurmak ve sorunsuz çalıştırmak için basit üç adımlı sürecimizi izleyin.';
      break;
    case 'ru':
      title = 'Начало Работы с Glodinas Finance | Бухгалтерия для Предпринимателей';
      description = 'Следуйте нашему простому трехэтапному процессу, чтобы настроить и обеспечить бесперебойную работу вашего бухгалтерского учета.';
      break;
    default: // 'en' and fallback
      title = 'Getting Started with Glodinas Finance | Bookkeeping for Entrepreneurs';
      description = 'Follow our simple three-step process to get your bookkeeping set up and running smoothly with Glodinas Finance.';
      break;
  }
  
  return {
    title,
    description,
    alternates: {
      canonical: `https://www.glodinasfinance.nl/${locale}/getting-started`,
      languages: {
        'en': 'https://www.glodinasfinance.nl/en/getting-started',
        'nl': 'https://www.glodinasfinance.nl/nl/aan-de-slag',
        'ro': 'https://www.glodinasfinance.nl/ro/primii-pasi',
        'tr': 'https://www.glodinasfinance.nl/tr/baslangic',
        'ru': 'https://www.glodinasfinance.nl/ru/nachalo-raboty',
      },
    },
    openGraph: {
      title,
      description,
      url: `https://www.glodinasfinance.nl/${locale}/getting-started`,
      siteName: 'Glodinas Finance',
      locale,
      type: 'website',
    },
  };
}

export default function GettingStartedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
    </>
  );
}
