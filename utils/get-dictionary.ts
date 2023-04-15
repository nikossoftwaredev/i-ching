import 'server-only';
import type { Locale } from 'i18n-config';

// We enumerate all dictionaries here for better linting and typescript support
// We also get the default import for cleaner types
const dictionaries = {
  el: () => import('data/dictionaries/el.json').then(module => module.default),
  en: () => import('data/dictionaries/en.json').then(module => module.default)
};

export const getDictionary = async (locale: Locale) => dictionaries[locale]();
