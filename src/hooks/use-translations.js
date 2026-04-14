import { useLanguage } from '@/context/LanguageContext';
import frMessages from '@/messages/fr.json';
import enMessages from '@/messages/en.json';

const messages = { fr: frMessages, en: enMessages };

/**
 * Hook to get translations based on current locale
 * Uses static JSON files - Firebase can be added as enhancement later
 */
export function useTranslation() {
  const { locale } = useLanguage();

  const t = (key) => {
    const keys = key.split('.');
    let value = messages[locale] || messages.fr;

    for (const k of keys) {
      value = value?.[k];
      if (value === undefined) {
        // Fallback to French
        let fallback = messages.fr;
        for (const fk of keys) {
          fallback = fallback?.[fk];
        }
        return fallback || key;
      }
    }
    return value;
  };

  return { t, locale };
}
