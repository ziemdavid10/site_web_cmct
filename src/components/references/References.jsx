import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useMotionValue, useScroll, useSpring, useTransform } from "framer-motion";
import { LuGlobe, LuLandmark, LuFlag, LuHeartHandshake, LuSchool, LuFilm, LuArrowUpRight, LuImage } from "react-icons/lu";
import { useI18n } from "../../i18n/context.js";
import { SectionHeading } from "../ui/ui.jsx";
import { fadeUp, stagger, inView, EASE } from "../ui/motion.js";
import { PHOTOS, PARTNERS } from "../../data/site.js";
import "./References.scss";

const MotionLink = motion(Link);

const ICONS = [LuGlobe, LuLandmark, LuFlag, LuHeartHandshake, LuSchool, LuFilm];
// Logo officiel affiché sur la carte quand on le possède (même ordre que t.references.items)
const CARD_LOGOS = { 1: "/partners/ue.webp", 3: "/partners/acf.webp", 4: "/partners/auf.webp" };

// Mur de logos des partenaires : apparition en cascade, couleur au survol
const PartnerWall = ({ r }) => (
  <div className="partners">
    <motion.div className="partners-head" variants={stagger(0.1)} {...inView(0.4)}>
      {/* <motion.h3 variants={fadeUp}>{r.partnersTitle}</motion.h3> */}
      {/* <motion.p variants={fadeUp}>{r.partnersIntro}</motion.p> */}
    </motion.div>
    <motion.ul className="partner-grid" variants={stagger(0.05)} {...inView(0.15)}>
      {PARTNERS.map((p) => (
        <motion.li
          key={p.id}
          className={`partner partner-${p.id}`}
          variants={{
            hidden: { opacity: 0, y: 24, scale: 0.9 },
            show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: EASE } },
          }}
          whileHover={{ y: -6 }}
          title={p.name}
        >
          <img src={p.logo} alt={p.name} loading="lazy" />
        </motion.li>
      ))}
    </motion.ul>
  </div>
);

// Carte qui s'incline en 3D selon la position de la souris
const TiltCard = ({ children, className }) => {
  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const srx = useSpring(rx, { stiffness: 200, damping: 18 });
  const sry = useSpring(ry, { stiffness: 200, damping: 18 });
  const glareX = useTransform(sry, [-10, 10], ["0%", "100%"]);

  const onMove = (e) => {
    if (e.pointerType !== "mouse") return;
    const r = e.currentTarget.getBoundingClientRect();
    ry.set(((e.clientX - r.left) / r.width - 0.5) * 16);
    rx.set(-((e.clientY - r.top) / r.height - 0.5) * 16);
  };
  const reset = () => {
    rx.set(0);
    ry.set(0);
  };

  return (
    <motion.li
      className={className}
      variants={fadeUp}
      style={{ rotateX: srx, rotateY: sry, transformPerspective: 800 }}
      onPointerMove={onMove}
      onPointerLeave={reset}
    >
      <motion.span className="glare" style={{ left: glareX }} aria-hidden="true" />
      {children}
    </motion.li>
  );
};

// Bandeau "Sur le terrain" : deux photos en léger parallaxe
const FieldBand = ({ g }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y1 = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-30, 50]);
  const shots = [
    { p: PHOTOS.mission, y: y1, cls: "shot-a" },
    { p: PHOTOS.terrain, y: y2, cls: "shot-b" },
  ];

  return (
    <div className="ref-field" ref={ref}>
      <motion.div className="field-text" variants={stagger(0.1)} {...inView(0.3)}>
        <motion.h3 variants={fadeUp}>{g.fieldTitle}</motion.h3>
        {/* <motion.p variants={fadeUp}>{g.fieldText}</motion.p> */}
        <MotionLink variants={fadeUp} to="/galerie" className="field-link">
          <LuImage aria-hidden="true" />
          {g.seeAll}
          <LuArrowUpRight aria-hidden="true" />
        </MotionLink>
      </motion.div>
      <div className="field-shots">
        {shots.map(({ p, y, cls }, i) => (
          <motion.figure
            key={p.id}
            className={`field-shot ${cls}`}
            style={{ y }}
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9, delay: i * 0.15, ease: EASE }}
          >
            <img src={p.thumb} alt={g.items[p.id].caption} width={p.w} height={p.h} loading="lazy" />
            <figcaption>{g.items[p.id].title}</figcaption>
          </motion.figure>
        ))}
      </div>
    </div>
  );
};

const References = () => {
  const { t } = useI18n();
  const r = t.references;

  return (
    <div className="references container">
      <SectionHeading label={r.label} title={r.title} intro={r.intro} />

      {/* <motion.ul className="ref-grid" variants={stagger(0.08)} {...inView(0.15)}>
        {r.items.map((it, i) => {
          const Icon = ICONS[i];
          return (
            <TiltCard key={it.short} className={`ref-card ref-${i}`}>
              {CARD_LOGOS[i] ? (
                <span className="ref-logo"><img src={CARD_LOGOS[i]} alt="" loading="lazy" /></span>
              ) : (
                <Icon className="ref-icon" aria-hidden="true" />
              )}
              <strong className="ref-short">{it.short}</strong>
              <span className="ref-name">{it.name}</span>
            </TiltCard>
          );
        })}
      </motion.ul> */}

      <PartnerWall r={r} />

      <FieldBand g={t.gallery} />

      <motion.div className="ref-more" variants={stagger(0.1)} {...inView(0.3)}>
        <motion.p variants={fadeUp}>{r.more}</motion.p>
        <motion.ul className="sectors" variants={stagger(0.06)}>
          {r.sectors.map((s) => (
            <motion.li key={s} variants={fadeUp}>{s}</motion.li>
          ))}
        </motion.ul>
        <MotionLink variants={fadeUp} to="/contact" className="btn dark">
          {r.cta}
          <LuArrowUpRight className="btn-icon" aria-hidden="true" />
        </MotionLink>
      </motion.div>
    </div>
  );
};

export default References;
