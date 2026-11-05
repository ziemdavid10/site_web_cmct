import { useCallback, useEffect, useMemo, useState } from "react";
import { LanguageContext, LANGS } from "./context.js";
import fr from "./fr.js";
import en from "./en.js";

const DICTS = { fr, en };
const STORAGE_KEY = "cmct-lang";

// Langue initiale : choix mémorisé > langue du navigateur > français
const initialLang = () => {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (LANGS.includes(saved)) return saved;
  } catch { /* stockage indisponible (navigation privée…) */ }
  const nav = (navigator.language || "fr").slice(0, 2).toLowerCase();
  return nav === "en" ? "en" : "fr";
};

const LanguageProvider = ({ children }) => {
  const [lang, setLangState] = useState(initialLang);

  const setLang = useCallback((next) => {
    if (!LANGS.includes(next)) return;
    setLangState(next);
    try { localStorage.setItem(STORAGE_KEY, next); } catch { /* ignoré */ }
  }, []);

  const t = DICTS[lang];

  // Langue du document (lecteurs d'écran, césure) + méta description
  useEffect(() => {
    document.documentElement.lang = lang;
    document.querySelector('meta[name="description"]')?.setAttribute("content", t.meta.description);
  }, [lang, t]);

  const value = useMemo(() => ({ lang, t, setLang }), [lang, t, setLang]);
  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export default LanguageProvider;
