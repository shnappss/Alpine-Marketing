import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import en from "./locales/en.json";
import de from "./locales/de.json";
import fr from "./locales/fr.json";
import it from "./locales/it.json";
import uk from "./locales/uk.json";
import ru from "./locales/ru.json";
import es from "./locales/es.json";
import pt from "./locales/pt.json";
import nl from "./locales/nl.json";
import pl from "./locales/pl.json";
import sv from "./locales/sv.json";
import da from "./locales/da.json";
import fi from "./locales/fi.json";
import el from "./locales/el.json";
import cs from "./locales/cs.json";
import sk from "./locales/sk.json";
import sl from "./locales/sl.json";
import hu from "./locales/hu.json";
import ro from "./locales/ro.json";
import bg from "./locales/bg.json";
import hr from "./locales/hr.json";
import et from "./locales/et.json";
import lv from "./locales/lv.json";
import lt from "./locales/lt.json";
import mt from "./locales/mt.json";
import ga from "./locales/ga.json";

/**
 * Supported languages — all 24 official EU languages plus Ukrainian and Russian.
 * Every language ships with a full translation file.
 */
export const LANGUAGES: { code: string; name: string; native: string; priority?: boolean }[] = [
  { code: "en", name: "English",    native: "English",     priority: true },
  { code: "de", name: "German",     native: "Deutsch",     priority: true },
  { code: "fr", name: "French",     native: "Français",    priority: true },
  { code: "it", name: "Italian",    native: "Italiano",    priority: true },
  { code: "uk", name: "Ukrainian",  native: "Українська",  priority: true },
  { code: "ru", name: "Russian",    native: "Русский",     priority: true },
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
  uk: { translation: uk },
  ru: { translation: ru },
  es: { translation: es },
  pt: { translation: pt },
  nl: { translation: nl },
  pl: { translation: pl },
  sv: { translation: sv },
  da: { translation: da },
  fi: { translation: fi },
  el: { translation: el },
  cs: { translation: cs },
  sk: { translation: sk },
  sl: { translation: sl },
  hu: { translation: hu },
  ro: { translation: ro },
  bg: { translation: bg },
  hr: { translation: hr },
  et: { translation: et },
  lv: { translation: lv },
  lt: { translation: lt },
  mt: { translation: mt },
  ga: { translation: ga },
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
      order: ["querystring", "localStorage", "navigator", "htmlTag"],
      caches: ["localStorage"],
      lookupQuerystring: "lng",
      lookupLocalStorage: "alpine-lang",
    },
    react: { useSuspense: false },
  });

export default i18n;
