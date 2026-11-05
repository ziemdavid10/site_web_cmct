import "./Navlogo.scss";
import { motion, useReducedMotion } from "framer-motion";
import { LuSparkle } from "react-icons/lu";
import { BRANDS } from "../../data/site.js";
import { useI18n } from "../../i18n/context.js";
import { BrandMark } from "../ui/ui.jsx";

// Bandeaux défilants sous l'accueil : domaines d'activité + marques et programmes
const LOGOS = ["etudiant", "nationalpost", "nouvelleere", "camigra", "makemba", "esstic", "iric", "prepas"];

const Marquee = ({ children, duration = 30, reverse = false, className = "" }) => {
  const reduce = useReducedMotion();
  return (
    <div className={`marquee ${className}`}>
      <motion.div
        className="marquee-track"
        animate={reduce ? undefined : { x: reverse ? ["-50%", "0%"] : ["0%", "-50%"] }}
        transition={{ duration, repeat: Infinity, ease: "linear" }}
      >
        {children}
        {children}
      </motion.div>
    </div>
  );
};

const Brands = () => {
  const { t } = useI18n();

  const domains = (
    <div className="marquee-group" aria-hidden="true">
      {t.hero.domains.map((d) => (
        <span key={d} className="domain">
          {d}
          <LuSparkle className="sep" />
        </span>
      ))}
    </div>
  );

  const logos = (
    <div className="marquee-group">
      {LOGOS.map((key) => (
        <span key={key} className="brand-item">
          <BrandMark brand={BRANDS[key]} size="sm" />
          <span className="brand-name">{BRANDS[key].name}</span>
        </span>
      ))}
    </div>
  );

  return (
    <div className="brands-band">
      <Marquee className="domains-marquee" duration={28}>{domains}</Marquee>
      <div className="logos-row">
        <p className="logos-label">
          <span>/</span> {t.brands.label}
        </p>
        <Marquee className="logos-marquee" duration={40} reverse>{logos}</Marquee>
      </div>
    </div>
  );
};

export default Brands;
