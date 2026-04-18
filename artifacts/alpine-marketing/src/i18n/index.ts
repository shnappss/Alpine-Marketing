import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import en from "./locales/en.json";
import de from "./locales/de.json";
import fr from "./locales/fr.json";
import it from "./locales/it.json";

/**
 * Supported languages — all 24 official EU languages.
 * Top-priority languages (EN/DE/FR/IT) ship with full translations.
 * The other 20 are registered with English as the fallback so the
 * language switcher works site-wide; native translations can be filled
 * in incrementally by adding the corresponding locale JSON file.
 */
export const LANGUAGES: { code: string; name: string; native: string; priority?: boolean }[] = [
  { code: "en", name: "English",    native: "English",     priority: true },
  { code: "de", name: "German",     native: "Deutsch",     priority: true },
  { code: "fr", name: "French",     native: "Français",    priority: true },
  { code: "it", name: "Italian",    native: "Italiano",    priority: true },
  { code: "es", name: "Spanish",    native: "Español" },
  { code: "pt", name: "Portuguese", native: "Português" },
  { code: "nl", name: "Dutch",      native: "Nederlands" },
  { code: "pl", name: "Polish",     native: "Polski" },
  { code: "sv", name: "Swedish",    native: "Svenska" },
  { code: "da", name: "Danish",     native: "Dansk" },
  { code: "fi", name: "Finnish",    native: "Suomi" },
  { code: "el", name: "Greek",      native: "Ελληνικά" },
  { code: "cs", name: "Czech",      native: "Čeština" },
  { code: "sk", name: "Slovak",     native: "Slovenčina" },
  { code: "sl", name: "Slovenian",  native: "Slovenščina" },
  { code: "hu", name: "Hungarian",  native: "Magyar" },
  { code: "ro", name: "Romanian",   native: "Română" },
  { code: "bg", name: "Bulgarian",  native: "Български" },
  { code: "hr", name: "Croatian",   native: "Hrvatski" },
  { code: "et", name: "Estonian",   native: "Eesti" },
  { code: "lv", name: "Latvian",    native: "Latviešu" },
  { code: "lt", name: "Lithuanian", native: "Lietuvių" },
  { code: "mt", name: "Maltese",    native: "Malti" },
  { code: "ga", name: "Irish",      native: "Gaeilge" },
];

const resources = {
  en: { translation: en },
  de: { translation: de },
  fr: { translation: fr },
  it: { translation: it },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en",
    supportedLngs: LANGUAGES.map((l) => l.code),
    nonExplicitSupportedLngs: true,
    interpolation: { escapeValue: false },
    detection: {
      order: ["localStorage", "navigator", "htmlTag"],
      caches: ["localStorage"],
      lookupLocalStorage: "alpine-lang",
    },
    react: { useSuspense: false },
  });

export default i18n;
