import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import { LuMail, LuPhone, LuMapPin, LuArrowUp, LuArrowUpRight } from "react-icons/lu";
import { FaLinkedinIn, FaFacebookF } from "react-icons/fa6";
import { NAV_ITEMS, CONTACT_EMAIL, PHONES, LANDLINE, ADDRESS, SOCIAL, COMPANY, RCCM } from "../../data/site.js";
import { useI18n } from "../../i18n/context.js";
import { SplitWords, Magnetic } from "../ui/ui.jsx";
import { fadeUp, stagger, inView } from "../ui/motion.js";
import "./Footer.scss";

const Footer = () => {
  const { t } = useI18n();
  const f = t.footer;
  const year = new Date().getFullYear();
  const reduce = useReducedMotion();

  // Le grand « CMCT » glisse horizontalement au défilement
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end end"] });
  const bigX = useTransform(scrollYProgress, [0, 1], reduce ? ["0%", "0%"] : ["-12%", "0%"]);

  return (
    <footer className="footer" ref={ref}>
      <div className="container">
        {/* Phrase de conclusion + appel à l'action */}
        <div className="footer-cta">
          <SplitWords as="p" text={f.tagline} className="footer-tagline" />
          <Magnetic>
            <a href="#Contact" className="btn primary">
              {t.nav.cta}
              <LuArrowUpRight className="btn-icon" aria-hidden="true" />
            </a>
          </Magnetic>
        </div>

        <motion.div className="footer-grid" variants={stagger(0.1)} {...inView(0.15)}>
          <motion.div className="footer-brand" variants={fadeUp}>
            <img src="/logo-cmct.png" alt="CMCT" className="footer-logo" loading="lazy" />
            <p className="brand-name">{COMPANY}</p>
            <div className="social-wrap">
              <a href={SOCIAL.linkedin} target="_blank" rel="noreferrer" className="social-link" aria-label={t.topbar.linkedin}>
                <FaLinkedinIn />
              </a>
              <a href={SOCIAL.facebook} target="_blank" rel="noreferrer" className="social-link" aria-label={t.topbar.facebook}>
                <FaFacebookF />
              </a>
            </div>
          </motion.div>

          <motion.nav className="footer-col" variants={fadeUp} aria-label={f.ariaNav}>
            <h4>{f.navTitle}</h4>
            <ul>
              {NAV_ITEMS.map(({ id, key }) => (
                <li key={id}><a href={`#${id}`}>{t.nav[key]}</a></li>
              ))}
            </ul>
          </motion.nav>

          <motion.div className="footer-col" variants={fadeUp}>
            <h4>{f.expertisesTitle}</h4>
            <ul>
              {t.hero.domains.map((d) => <li key={d}><a href="#Services">{d}</a></li>)}
            </ul>
          </motion.div>

          <motion.div className="footer-col contact-col" variants={fadeUp}>
            <h4>{f.contactTitle}</h4>
            <ul>
              <li><a href={`mailto:${CONTACT_EMAIL}`}><LuMail aria-hidden="true" />{CONTACT_EMAIL}</a></li>
              {[...PHONES, LANDLINE].map((p) => (
                <li key={p.href}><a href={p.href}><LuPhone aria-hidden="true" />{p.display}</a></li>
              ))}
              <li><span><LuMapPin aria-hidden="true" />{ADDRESS}</span></li>
            </ul>
          </motion.div>
        </motion.div>

        <motion.p className="disclaimer" variants={fadeUp} {...inView()}>{f.disclaimer}</motion.p>

        <div className="footer-bottom">
          <p>
            &copy; {year} <strong>CMCT</strong> — {f.rights} <span className="rccm">RCCM {RCCM}</span>
          </p>
          <a href="#Homepage" className="to-top">
            {t.common.toTop} <LuArrowUp aria-hidden="true" />
          </a>
        </div>
      </div>

      <div className="footer-giant" aria-hidden="true">
        <motion.span style={{ x: bigX }}>CMCT · Media · Communication · Technologies</motion.span>
      </div>
    </footer>
  );
};

export default Footer;
