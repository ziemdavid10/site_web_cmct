import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { LuChevronRight, LuHome } from "react-icons/lu";
import { useI18n } from "../../i18n/context.js";
import { SplitWords } from "./ui.jsx";
import { EASE } from "./motion.js";
import "./PageHeader.scss";

// En-tête des pages intérieures : photo en fond (parallaxe), titre animé et fil d'Ariane
const PageHeader = ({ title, intro, photo, position = "50% 50%" }) => {
  const { t } = useI18n();
  const reduce = useReducedMotion();
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], reduce ? ["0%", "0%"] : ["0%", "22%"]);
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <header className="page-header" ref={ref} data-nav-theme="dark">
      {photo && (
        <motion.div className="ph-bg" aria-hidden="true" style={{ y }}>
          <motion.img
            src={photo.src}
            alt=""
            style={{ objectPosition: position }}
            initial={{ scale: 1.15 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.8, ease: EASE }}
          />
        </motion.div>
      )}
      <div className="ph-overlay" aria-hidden="true" />

      <motion.div className="ph-inner container" style={{ opacity: fade }}>
        <motion.nav
          aria-label={t.pages.breadcrumb}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE, delay: 0.1 }}
        >
          <ol className="breadcrumb">
            <li>
              <Link to="/"><LuHome aria-hidden="true" /> {t.nav.homePage}</Link>
            </li>
            <li aria-current="page">
              <LuChevronRight aria-hidden="true" className="sep" />
              {title}
            </li>
          </ol>
        </motion.nav>

        <SplitWords as="h1" text={title} className="ph-title" />

        {intro && (
          <motion.p
            className="ph-intro"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.35 }}
          >
            {intro}
          </motion.p>
        )}
        <motion.span
          className="ph-line"
          aria-hidden="true"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.9, ease: EASE, delay: 0.5 }}
        />
      </motion.div>
    </header>
  );
};

export default PageHeader;
