import { createContext, useContext } from "react";
import fr from "./fr.js";

export const LANGS = ["fr", "en"];
export const LanguageContext = createContext({ lang: "fr", t: fr, setLang: () => {} });

// Hook utilisé par tous les composants : const { t, lang, setLang } = useI18n();
export const useI18n = () => useContext(LanguageContext);
