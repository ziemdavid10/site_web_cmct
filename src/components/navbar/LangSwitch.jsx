import { motion } from "framer-motion";
import { LuLanguages } from "react-icons/lu";
import { useI18n, LANGS } from "../../i18n/context.js";

// Sélecteur FR / EN avec une pastille animée qui glisse sous la langue active
const LangSwitch = ({ id = "nav", compact = false }) => {
  const { lang, setLang, t } = useI18n();

  return (
    <div className={`lang-switch ${compact ? "compact" : ""}`} role="group" aria-label={t.common.langSwitch}>
      {!compact && <LuLanguages className="lang-icon" aria-hidden="true" />}
      {LANGS.map((code) => (
        <button
          key={code}
          type="button"
          className={lang === code ? "active" : ""}
          aria-pressed={lang === code}
          lang={code}
          title={t.common.langNames[code]}
          onClick={() => setLang(code)}
        >
          {lang === code && (
            <motion.span
              layoutId={`lang-pill-${id}`}
              className="pill"
              transition={{ type: "spring", stiffness: 500, damping: 34 }}
            />
          )}
          <span className="code">{code.toUpperCase()}</span>
        </button>
      ))}
    </div>
  );
};

export default LangSwitch;
