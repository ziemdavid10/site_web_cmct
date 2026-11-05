import "./Navbar.scss";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useCallback } from "react";
import { LuArrowUpRight, LuMail, LuPhone, LuMapPin } from "react-icons/lu";
import { FaLinkedinIn, FaFacebookF } from "react-icons/fa6";
import { NAV_ITEMS, CONTACT_EMAIL, PHONES, SOCIAL } from "../../data/site.js";
import { useI18n } from "../../i18n/context.js";
import LangSwitch from "./LangSwitch.jsx";
import { Magnetic } from "../ui/ui.jsx";

const menuVariants = {
  closed: { clipPath: "circle(0% at calc(100% - 40px) 32px)", transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] } },
  open: { clipPath: "circle(150% at calc(100% - 40px) 32px)", transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] } },
};

const linkVariants = {
  closed: { opacity: 0, y: 40 },
  open: (i) => ({ opacity: 1, y: 0, transition: { delay: 0.25 + i * 0.06, duration: 0.5, ease: [0.22, 1, 0.36, 1] } }),
};

const Navbar = () => {
  const { t } = useI18n();
  const [active, setActive] = useState(null);
  const [dark, setDark] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [hovered, setHovered] = useState(null);

  // Section active + thème (clair/sombre) selon la section sous la barre
  useEffect(() => {
    let ticking = false;
    const update = () => {
      ticking = false;
      const navH = parseInt(getComputedStyle(document.documentElement).getPropertyValue("--nav-h")) || 80;
      const probe = navH + 10;
      setScrolled(window.scrollY > 10);

      let current = null;
      for (const { id } of NAV_ITEMS) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= probe + window.innerHeight * 0.3) current = id;
      }
      setActive(current);

      // La barre passe en sombre au-dessus des sections sombres
      const nav = document.querySelector(".navbar");
      const navBottom = nav ? nav.getBoundingClientRect().bottom : probe;
      let isDark = false;
      document.querySelectorAll("[data-nav-theme='dark']").forEach((s) => {
        const r = s.getBoundingClientRect();
        if (r.top <= navBottom - 1 && r.bottom > navBottom) isDark = true;
      });
      setDark(isDark);
    };
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const close = useCallback(() => setOpen(false), []);

  // Menu mobile : bloque le défilement, ferme avec Échap ou si l'écran s'élargit
  useEffect(() => {
    document.body.classList.toggle("menu-open", open);
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && close();
    const mq = window.matchMedia("(min-width: 1201px)");
    const onMq = (e) => e.matches && close();
    window.addEventListener("keydown", onKey);
    mq.addEventListener("change", onMq);
    return () => {
      window.removeEventListener("keydown", onKey);
      mq.removeEventListener("change", onMq);
      document.body.classList.remove("menu-open");
    };
  }, [open, close]);

  const classes = ["navbar", dark && !open && "is-dark", scrolled && "scrolled", open && "is-open"].filter(Boolean).join(" ");
  const indicator = hovered ?? active;

  return (
    <nav className={classes} aria-label={t.nav.label}>
      <div className="nav-inner">
        <a href="#Homepage" className="logo-container" onClick={close} aria-label={t.nav.home}>
          <motion.img
            src="/logo-cmct.png"
            alt="CMCT"
            width="400"
            height="355"
            whileHover={{ rotate: -6, scale: 1.06 }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
          />
          <span className="logo-text">
            <strong>CMCT</strong>
            <small>Media · Com · Tech</small>
          </span>
        </a>

        <ul className="menu" onMouseLeave={() => setHovered(null)}>
          {NAV_ITEMS.map(({ id, key }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className={`menu-item ${active === id ? "active" : ""}`}
                aria-current={active === id ? "true" : undefined}
                onMouseEnter={() => setHovered(id)}
                onFocus={() => setHovered(id)}
                onBlur={() => setHovered(null)}
              >
                {indicator === id && (
                  <motion.span
                    layoutId="nav-indicator"
                    className="indicator"
                    transition={{ type: "spring", stiffness: 400, damping: 32 }}
                  />
                )}
                <span className="label">{t.nav[key]}</span>
              </a>
            </li>
          ))}
        </ul>

        <div className="nav-actions">
          <LangSwitch id="desktop" />
          <Magnetic className="cta-wrap">
            <a href="#Contact" className="nav-cta">
              <span>{t.nav.cta}</span>
              <LuArrowUpRight aria-hidden="true" />
            </a>
          </Magnetic>

          <button
            className="burger"
            aria-label={open ? t.nav.closeMenu : t.nav.open}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((o) => !o)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            className="mobile-menu"
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            <div className="mobile-inner">
              <ul>
                {NAV_ITEMS.map(({ id, key }, i) => (
                  <motion.li key={id} custom={i} variants={linkVariants}>
                    <a
                      href={`#${id}`}
                      className={active === id ? "active" : ""}
                      aria-current={active === id ? "true" : undefined}
                      onClick={close}
                    >
                      <span className="num">0{i + 1}</span>
                      {t.nav[key]}
                    </a>
                  </motion.li>
                ))}
              </ul>

              <motion.div className="mobile-bottom" custom={NAV_ITEMS.length} variants={linkVariants}>
                <a href="#Contact" className="btn primary" onClick={close}>
                  {t.nav.cta}
                  <LuArrowUpRight className="btn-icon" aria-hidden="true" />
                </a>
                <p className="mobile-label">{t.nav.menuContact}</p>
                <ul className="mobile-contact">
                  <li><a href={`mailto:${CONTACT_EMAIL}`}><LuMail aria-hidden="true" />{CONTACT_EMAIL}</a></li>
                  <li><a href={PHONES[0].href}><LuPhone aria-hidden="true" />{PHONES[0].display}</a></li>
                  <li><span><LuMapPin aria-hidden="true" />{t.topbar.location}</span></li>
                </ul>
                <div className="mobile-social">
                  <a href={SOCIAL.linkedin} target="_blank" rel="noreferrer" aria-label={t.topbar.linkedin}><FaLinkedinIn /></a>
                  <a href={SOCIAL.facebook} target="_blank" rel="noreferrer" aria-label={t.topbar.facebook}><FaFacebookF /></a>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
