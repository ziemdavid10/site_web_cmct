import "./Hero.scss";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { LuNewspaper, LuMegaphone, LuClapperboard, LuGraduationCap, LuCpu, LuArrowUpRight, LuMapPin, LuChevronDown } from "react-icons/lu";
import { useI18n } from "../../i18n/context.js";
import { Magnetic } from "../ui/ui.jsx";
import { EASE } from "../ui/motion.js";
import { PHOTOS } from "../../data/site.js";

// Diaporama de fond : l'image d'origine puis des photos de terrain (fondu + zoom lent)
const SLIDES = [
  { id: "hero", src: "/hero-bg.webp", mobile: "/hero-bg-mobile.webp" },
  ...[PHOTOS.dronePaysage, PHOTOS.interview, PHOTOS.visiteUe, PHOTOS.pricnac].map((p) => ({
    id: p.id,
    src: p.src,
    mobile: p.thumb,
  })),
];
const SLIDE_MS = 6500;

const DOMAIN_ICONS = [LuNewspaper, LuMegaphone, LuClapperboard, LuGraduationCap, LuCpu];

const Hero = () => {
  const { t, lang } = useI18n();
  const h = t.hero;
  const reduce = useReducedMotion();
  const ref = useRef(null);

  const [slide, setSlide] = useState(0);
  const [paused, setPaused] = useState(false);
  useEffect(() => {
    if (reduce || paused) return;
    const id = setTimeout(() => setSlide((s) => (s + 1) % SLIDES.length), SLIDE_MS);
    return () => clearTimeout(id);
  }, [slide, reduce, paused]);
  // Pause quand l'onglet est masqué
  useEffect(() => {
    const onVis = () => setPaused(document.hidden);
    document.addEventListener("visibilitychange", onVis);
    return () => document.removeEventListener("visibilitychange", onVis);
  }, []);
  const current = SLIDES[slide];
  const caption = t.gallery.items[current.id];

  // Parallaxe au défilement
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], reduce ? ["0%", "0%"] : ["0%", "25%"]);
  const bgScale = useTransform(scrollYProgress, [0, 1], reduce ? [1, 1] : [1.08, 1.2]);
  const contentY = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [0, -80]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  // Halos lumineux qui suivent la souris
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const glowX = useSpring(mx, { stiffness: 40, damping: 20 });
  const glowY = useSpring(my, { stiffness: 40, damping: 20 });
  const onPointerMove = (e) => {
    if (reduce || e.pointerType !== "mouse") return;
    const r = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - r.left - r.width / 2) / 12);
    my.set((e.clientY - r.top - r.height / 2) / 12);
  };

  return (
    <div className="hero" ref={ref} onPointerMove={onPointerMove}>
      <motion.div className="hero-background" aria-hidden="true" style={{ y: bgY, scale: bgScale }}>
        <AnimatePresence initial={false}>
          <motion.picture
            key={current.id}
            className="hero-slide"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.4, ease: "easeInOut" }}
          >
            <source media="(max-width: 768px)" srcSet={current.mobile} type="image/webp" />
            <motion.img
              src={current.src}
              alt=""
              decoding="async"
              initial={{ scale: 1 }}
              animate={{ scale: reduce ? 1 : 1.08 }}
              transition={{ duration: SLIDE_MS / 1000 + 1.5, ease: "linear" }}
            />
          </motion.picture>
        </AnimatePresence>
      </motion.div>
      <div className="hero-overlay" aria-hidden="true" />
      <motion.div className="glow glow-a" style={{ x: glowX, y: glowY }} aria-hidden="true" />
      <motion.div className="glow glow-b" style={{ x: glowY, y: glowX }} aria-hidden="true" />
      <div className="grid-lines" aria-hidden="true" />

      <motion.div className="hero-inner container" style={{ y: contentY, opacity: contentOpacity }}>
        <div className="hero-content" key={lang}>
          <motion.p
            className="eyebrow"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.2 }}
          >
            <motion.span
              className="eyebrow-line"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, ease: EASE, delay: 0.4 }}
            />
            {h.eyebrow}
          </motion.p>

          <h1 aria-label={h.slogans.map((s) => `${s.lead} ${s.word}`).join(" ")}>
            {h.slogans.map((s, i) => (
              <span className="line-mask" key={s.word} aria-hidden="true">
                <motion.span
                  className="line"
                  initial={{ y: "110%" }}
                  animate={{ y: "0%" }}
                  transition={{ duration: 1, ease: EASE, delay: 0.35 + i * 0.15 }}
                >
                  {s.lead}{" "}
                  <span className={`accent accent-${i}`}>
                    {s.word}
                    <motion.svg
                      className="underline"
                      viewBox="0 0 200 12"
                      preserveAspectRatio="none"
                      aria-hidden="true"
                    >
                      <motion.path
                        d="M2 8 Q 50 2 100 7 T 198 5"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 0.9, ease: "easeInOut", delay: 1.1 + i * 0.2 }}
                      />
                    </motion.svg>
                  </span>
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            className="hero-lead"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.9 }}
          >
            <strong>{h.vocationTitle}. </strong>
            {h.vocation}
          </motion.p>

          <motion.div
            className="hero-buttons"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE, delay: 1.05 }}
          >
            <Magnetic>
              <a href="#Services" className="btn primary">
                {h.ctaPrimary}
                <LuArrowUpRight className="btn-icon" aria-hidden="true" />
              </a>
            </Magnetic>
            <Magnetic>
              <a href="#Contact" className="btn ghost">
                {h.ctaSecondary}
              </a>
            </Magnetic>
          </motion.div>
        </div>

        {/* Carte des 5 domaines */}
        <motion.aside
          className="hero-card"
          key={`card-${lang}`}
          initial={{ opacity: 0, y: 40, rotate: 2 }}
          animate={{ opacity: 1, y: 0, rotate: 0 }}
          transition={{ duration: 1, ease: EASE, delay: 0.6 }}
        >
          <motion.div
            className="card-float"
            animate={reduce ? undefined : { y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            <p className="card-title">{h.cardTitle}</p>
            <motion.ul
              initial="hidden"
              animate="show"
              variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1, delayChildren: 1 } } }}
            >
              {h.domains.map((d, i) => {
                const Icon = DOMAIN_ICONS[i];
                return (
                  <motion.li
                    key={d}
                    variants={{ hidden: { opacity: 0, x: 30 }, show: { opacity: 1, x: 0, transition: { duration: 0.5, ease: EASE } } }}
                    whileHover={{ x: 6 }}
                  >
                    <span className={`d-icon d-${i}`}><Icon aria-hidden="true" /></span>
                    <span>{d}</span>
                  </motion.li>
                );
              })}
            </motion.ul>
            <div className="card-approach">
              <strong>{h.approachTitle}</strong>
              <p>{h.approach}</p>
            </div>
          </motion.div>
        </motion.aside>
      </motion.div>

      <div className="hero-bottom container">
        <motion.span
          className="location"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
        >
          <LuMapPin aria-hidden="true" /> {h.location}
        </motion.span>

        <div className="hero-slides-ui">
          <AnimatePresence mode="wait">
            {caption && (
              <motion.span
                key={current.id}
                className="slide-caption"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.4 }}
              >
                {caption.title}
              </motion.span>
            )}
          </AnimatePresence>
          <div className="slide-dots" role="group" aria-label={h.slidesLabel}>
            {SLIDES.map((sl, i) => (
              <button
                key={sl.id}
                type="button"
                className={i === slide ? "active" : ""}
                aria-label={h.slideGoTo(i + 1)}
                aria-current={i === slide ? "true" : undefined}
                onClick={() => setSlide(i)}
              >
                {i === slide && !reduce && !paused && (
                  <motion.span
                    key={`p-${slide}`}
                    className="dot-progress"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: SLIDE_MS / 1000, ease: "linear" }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>
        <motion.a
          href="#About"
          className="scroll-indicator"
          aria-label={h.scroll}
          animate={reduce ? undefined : { y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <LuChevronDown aria-hidden="true" />
        </motion.a>
      </div>
    </div>
  );
};

export default Hero;
