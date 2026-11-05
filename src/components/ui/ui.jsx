import { useEffect, useRef, useState } from "react";
import { motion, useInView, animate, useReducedMotion, useMotionValue, useSpring } from "framer-motion";
import { EASE } from "./motion.js";
import "./ui.scss";

// Titre dont chaque mot "monte" depuis un masque — rejoué au changement de langue
export const SplitWords = ({ text, className = "", delay = 0, as = "span" }) => {
  const Tag = motion[as];
  const words = text.split(" ");
  return (
    <Tag
      key={text}
      className={`split-words ${className}`}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.4 }}
      transition={{ staggerChildren: 0.045, delayChildren: delay }}
    >
      {/* Texte complet pour les lecteurs d'écran ; les mots animés sont décoratifs */}
      <span className="visually-hidden">{text}</span>
      {words.map((w, i) => (
        <span key={i} aria-hidden="true">
          <span className="word-mask">
            <motion.span
              className="word"
              variants={{
                hidden: { y: "110%", rotate: 4 },
                show: { y: "0%", rotate: 0, transition: { duration: 0.75, ease: EASE } },
              }}
            >
              {w}
            </motion.span>
          </span>
          {i < words.length - 1 ? " " : ""}
        </span>
      ))}
    </Tag>
  );
};

// En-tête de section : « / 01 — Libellé », grand titre, introduction
export const SectionHeading = ({ number, label, title, intro, dark = false, center = false }) => (
  <header className={`section-heading ${dark ? "dark" : ""} ${center ? "center" : ""}`}>
    <motion.p
      className="section-label"
      initial={{ opacity: 0, x: -24 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: EASE }}
    >
      <span className="slash" aria-hidden="true">/</span>
      {number && <span className="num">{number}</span>}
      <span>{label}</span>
    </motion.p>
    <SplitWords as="h2" text={title} className="section-title" />
    {intro && (
      <motion.p
        key={intro}
        className="section-intro"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.25, ease: EASE }}
      >
        {intro}
      </motion.p>
    )}
  </header>
);

// Compteur animé qui démarre quand il devient visible
export const Counter = ({ value, plain = false, suffix = "" }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const reduce = useReducedMotion();
  const from = plain ? value - 17 : 0;
  const [display, setDisplay] = useState(reduce ? value : from);

  useEffect(() => {
    if (!inView || reduce) return;
    const controls = animate(from, value, {
      duration: 1.6,
      ease: EASE,
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, reduce, from, value]);

  return (
    <span ref={ref} className="counter">
      {display}
      {suffix}
    </span>
  );
};

// Élément "magnétique" qui suit légèrement la souris (souris uniquement)
export const Magnetic = ({ children, strength = 0.25, className = "" }) => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 220, damping: 15, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 220, damping: 15, mass: 0.4 });

  const onMove = (e) => {
    if (e.pointerType !== "mouse") return;
    const r = ref.current.getBoundingClientRect();
    x.set((e.clientX - (r.left + r.width / 2)) * strength);
    y.set((e.clientY - (r.top + r.height / 2)) * strength);
  };
  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.span ref={ref} className={`magnetic ${className}`} style={{ x: sx, y: sy }} onPointerMove={onMove} onPointerLeave={reset}>
      {children}
    </motion.span>
  );
};

// Logo de marque, ou monogramme si aucun logo n'est disponible
export const BrandMark = ({ brand, size = "md" }) => {
  if (!brand) return null;
  return (
    <span className={`brand-mark ${size} ${brand.logo ? "" : "mono"}`}>
      {brand.logo ? (
        <img src={brand.logo} alt={brand.name} loading="lazy" />
      ) : (
        <span aria-label={brand.name}>
          {brand.name
            .split(" ")
            .map((w) => w[0])
            .join("")
            .slice(0, 2)}
        </span>
      )}
    </span>
  );
};
