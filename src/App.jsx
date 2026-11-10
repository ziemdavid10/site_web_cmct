import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence, motion, useAnimationControls, useReducedMotion, useScroll, useSpring } from "framer-motion";
import { LuArrowUp } from "react-icons/lu";
import "./App.scss";
import { useI18n } from "./i18n/context.js";
import Navbar from "./components/navbar/Navbar.jsx";
import Navinfos from "./components/navinfos/Navinfos.jsx";
import {
  HomePage, AboutPage, OrganisationPage, ExpertisesPage, RealisationsPage,
  GalleryPage, NewsPage, ContactPage, NotFoundPage,
} from "./pages/Pages.jsx";
import Footer from "./components/footer/Footer.jsx";

// Barre de progression de lecture en haut de l'écran
const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });
  return <motion.div className="scroll-progress" style={{ scaleX }} aria-hidden="true" />;
};

// Court écran d'introduction avec le logo (une fois par session)
const IntroScreen = () => {
  const reduce = useReducedMotion();
  const [show, setShow] = useState(() => {
    try {
      return !sessionStorage.getItem("cmct-intro");
    } catch {
      return false;
    }
  });

  useEffect(() => {
    if (!show) return;
    try { sessionStorage.setItem("cmct-intro", "1"); } catch { /* ignoré */ }
    const id = setTimeout(() => setShow(false), reduce ? 200 : 1300);
    return () => clearTimeout(id);
  }, [show, reduce]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="intro-screen"
          aria-hidden="true"
          exit={{ clipPath: "inset(0 0 100% 0)" }}
          initial={{ clipPath: "inset(0 0 0% 0)" }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        >
          <div className="intro-inner">
            <motion.img
              src="/logo-cmct.png"
              alt=""
              initial={{ opacity: 0, scale: 0.7, rotate: -8 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            />
            <div className="intro-bar">
              <motion.span initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 1.1, ease: "easeInOut" }} />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// Bouton "retour en haut" avec anneau indiquant la progression
const BackToTop = () => {
  const { t } = useI18n();
  const [visible, setVisible] = useState(false);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const onScroll = () => {
      const footer = document.querySelector(".footer");
      const footerVisible = footer && footer.getBoundingClientRect().top < window.innerHeight;
      setVisible(window.scrollY > window.innerHeight && !footerVisible);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          className="back-to-top"
          aria-label={t.common.backToTop}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          whileHover={{ y: -4 }}
          whileTap={{ scale: 0.9 }}
        >
          <svg className="ring" viewBox="0 0 52 52" aria-hidden="true">
            <circle className="track" cx="26" cy="26" r="24" />
            <motion.circle className="bar" cx="26" cy="26" r="24" style={{ pathLength: scrollYProgress }} />
          </svg>
          <LuArrowUp className="icon" aria-hidden="true" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

const App = () => {
  const { t, lang } = useI18n();
  const controls = useAnimationControls();
  const first = useRef(true);
  const location = useLocation();

  // Le navigateur ne doit pas restaurer la position de défilement entre les pages
  useLayoutEffect(() => {
    if ("scrollRestoration" in window.history) window.history.scrollRestoration = "manual";
  }, []);

  // Petit fondu du contenu à chaque changement de langue
  useEffect(() => {
    if (first.current) {
      first.current = false;
      return;
    }
    controls.start({ opacity: [0.25, 1], y: [6, 0], transition: { duration: 0.45, ease: "easeOut" } });
  }, [lang, controls]);

  return (
    <>
      <a href="#main" className="skip-link">{t.common.skip}</a>
      <ScrollProgress />
      <IntroScreen />

      <Navinfos />
      <header className="sticky-header">
        <Navbar />
      </header>

      <motion.main id="main" className="lang-swap" animate={controls}>
        {/* Transition douce entre les pages */}
        <AnimatePresence mode="wait" initial={false} onExitComplete={() => window.scrollTo({ top: 0, behavior: "instant" })}>
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <Routes location={location}>
              <Route path="/" element={<HomePage />} />
              <Route path="/a-propos" element={<AboutPage />} />
              <Route path="/organisation" element={<OrganisationPage />} />
              <Route path="/expertises" element={<ExpertisesPage />} />
              <Route path="/realisations" element={<RealisationsPage />} />
              <Route path="/galerie" element={<GalleryPage />} />
              <Route path="/actualites" element={<NewsPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </motion.div>
        </AnimatePresence>
      </motion.main>

      <Footer />
      <BackToTop />
    </>
  );
};

export default App;
