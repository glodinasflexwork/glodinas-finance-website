import type {Messages} from 'next-intl';

// Function to load messages for a specific locale
export async function getMessages(locale: string): Promise<Messages> {
  try {
    // Import the messages for the requested locale
    const messages = (await import(`./messages/${locale}.json`)).default;
    return messages;
  } catch (error) {
    console.error(`Error loading messages for locale ${locale}:`, error);
    // Fallback to English if the requested locale is not available
    if (locale !== 'en') {
      return getMessages('en');
    }
    // If even English fails, return an empty object
    return {};
  }
}
