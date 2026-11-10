import "./Navlogo.scss";
import { motion, useReducedMotion } from "framer-motion";
import { LuSparkle } from "react-icons/lu";
import { BRANDS } from "../../data/site.js";
import { useI18n } from "../../i18n/context.js";
import { BrandMark } from "../ui/ui.jsx";
import { EASE, fadeUp, stagger, inView } from "../ui/motion.js";

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

  return (
    <div className="brands-band">
      <Marquee className="domains-marquee" duration={28}>{domains}</Marquee>

      {/* Nos Entités : tous les logos visibles, sans défilement */}
      <section className="entities container" aria-labelledby="entities-title">
        <motion.div className="entities-head" variants={stagger(0.1)} {...inView(0.5)}>
          <motion.h2 id="entities-title" className="logos-label" variants={fadeUp}>
            <span aria-hidden="true">/</span> {t.brands.label}
          </motion.h2>
          <motion.p variants={fadeUp}>{t.brands.intro}</motion.p>
        </motion.div>

        <motion.ul className="entities-grid" variants={stagger(0.07)} {...inView(0.15)}>
          {LOGOS.map((key) => (
            <motion.li
              key={key}
              className="brand-item"
              variants={{
                hidden: { opacity: 0, y: 30, scale: 0.94 },
                show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.55, ease: EASE } },
              }}
              whileHover={{ y: -6 }}
            >
              {BRANDS[key].logo ? (
                <span className="brand-logo">
                  <img src={BRANDS[key].logo} alt="" loading="lazy" />
                </span>
              ) : (
                <BrandMark brand={BRANDS[key]} size="lg" />
              )}
              <span className="brand-name">{BRANDS[key].name}</span>
            </motion.li>
          ))}
        </motion.ul>
      </section>
    </div>
  );
};

export default Brands;
