import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from './getMessages';

// This provider is specifically for the Getting Started page only
export async function NextIntlGettingStartedProvider({
  locale,
  children
}: {
  locale: string;
  children: React.ReactNode;
}) {
  const messages = await getMessages(locale);
  
  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      {children}
    </NextIntlClientProvider>
  );
}
