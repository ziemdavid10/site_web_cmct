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
        <motion.span key={key} className="brand-item" whileHover={{ y: -6 }}>
          {BRANDS[key].logo ? (
            <span className="brand-logo">
              <img src={BRANDS[key].logo} alt="" loading="lazy" />
            </span>
          ) : (
            <BrandMark brand={BRANDS[key]} size="lg" />
          )}
          <span className="brand-name">{BRANDS[key].name}</span>
        </motion.span>
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
        <Marquee className="logos-marquee" duration={55} reverse>{logos}</Marquee>
      </div>
    </div>
  );
};

export default Brands;
