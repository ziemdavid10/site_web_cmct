import { useRef, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import {
  LuNewspaper, LuMegaphone, LuClapperboard, LuGraduationCap, LuCpu,
  LuEar, LuShieldCheck, LuCompass, LuPuzzle, LuQuote, LuTarget, LuUsers,
} from "react-icons/lu";
import { useI18n } from "../../i18n/context.js";
import { SectionHeading, Counter } from "../ui/ui.jsx";
import { fadeUp, scaleIn, stagger, inView, EASE } from "../ui/motion.js";
import { PHOTOS } from "../../data/site.js";
import "./About.scss";

// 👉 Mettre ici le chemin de la photo du directeur (ex : "/directeur.jpg" dans /public)
const DIRECTOR_PHOTO = "";

const MISSION_ICONS = [LuNewspaper, LuMegaphone, LuClapperboard, LuGraduationCap, LuCpu];
const PRINCIPLE_ICONS = [LuEar, LuShieldCheck, LuCompass, LuPuzzle];

const About = () => {
  const { t } = useI18n();
  const a = t.about;
  const [photoFailed, setPhotoFailed] = useState(false);
  const showPhoto = DIRECTOR_PHOTO && !photoFailed;

  // La ligne de la frise se dessine au fil du défilement
  const timelineRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: timelineRef, offset: ["start 85%", "end 60%"] });
  const progress = useSpring(scrollYProgress, { stiffness: 80, damping: 25 });

  return (
    <div className="about container">
      <SectionHeading number={a.number} label={a.label} title={a.title} />

      {/* Présentation + direction */}
      <div className="about-intro">
        <motion.div className="intro-text" variants={stagger(0.12)} {...inView()}>
          <motion.p className="lead" variants={fadeUp}>{a.intro}</motion.p>
          <motion.p className="audiences-title" variants={fadeUp}>
            <LuUsers aria-hidden="true" /> {a.audiencesTitle}
          </motion.p>
          <motion.ul className="audiences" variants={stagger(0.06)}>
            {a.audiences.map((x) => (
              <motion.li key={x} variants={scaleIn} whileHover={{ y: -3 }}>{x}</motion.li>
            ))}
          </motion.ul>
        </motion.div>

        <motion.figure
          className="director"
          initial={{ opacity: 0, clipPath: "inset(12% 12% 12% 12% round 28px)" }}
          whileInView={{ opacity: 1, clipPath: "inset(0% 0% 0% 0% round 28px)" }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, ease: EASE }}
        >
          <div className="photo">
            {showPhoto ? (
              <img src={DIRECTOR_PHOTO} alt={a.director.alt} onError={() => setPhotoFailed(true)} />
            ) : (
              <div className="photo-fallback">
                <motion.img
                  src="/logo-cmct.png"
                  alt={a.director.logoAlt}
                  animate={{ rotate: [0, 4, -4, 0] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                />
              </div>
            )}
          </div>
          <motion.figcaption
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <span className="name">{a.director.name}</span>
            <span className="role">{a.director.role}</span>
          </motion.figcaption>
        </motion.figure>
      </div>

      {/* Chiffres clés */}
      <motion.ul className="stats" variants={stagger(0.1)} {...inView(0.3)}>
        {a.stats.map((s) => (
          <motion.li key={s.label} variants={fadeUp}>
            <Counter value={s.value} plain={s.plain} />
            <span>{s.label}</span>
          </motion.li>
        ))}
      </motion.ul>

      {/* Frise du parcours */}
      <div className="journey" ref={timelineRef}>
        <motion.h3 variants={fadeUp} {...inView()}>{a.journey.title}</motion.h3>
        <div className="timeline">
          <div className="timeline-track" aria-hidden="true">
            <motion.span className="timeline-fill" style={{ scaleX: progress }} />
          </div>
          <ol>
            {a.journey.steps.map((s, i) => (
              <motion.li
                key={s.year}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.7, delay: i * 0.15, ease: EASE }}
              >
                <motion.span
                  className="dot"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 300, damping: 15, delay: 0.2 + i * 0.15 }}
                />
                <span className="year">{s.year}</span>
                <strong className="name">{s.name}</strong>
                <p>{s.text}</p>
              </motion.li>
            ))}
          </ol>
        </div>
        <motion.p className="journey-conclusion" variants={fadeUp} {...inView()}>
          {a.journey.conclusion}
        </motion.p>
      </div>

      {/* Raison d'être + mission */}
      <div className="purpose-mission">
        <motion.div
          className="purpose"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: EASE }}
        >
          <LuTarget className="purpose-icon" aria-hidden="true" />
          <h3>{a.purpose.title}</h3>
          <p>{a.purpose.text}</p>
        </motion.div>

        <div className="mission">
          <motion.h3 variants={fadeUp} {...inView()}>{a.mission.title}</motion.h3>
          <motion.ol variants={stagger(0.1)} {...inView(0.15)}>
            {a.mission.items.map((m, i) => {
              const Icon = MISSION_ICONS[i];
              return (
                <motion.li key={i} variants={fadeUp} whileHover={{ x: 8 }}>
                  <span className="m-icon"><Icon aria-hidden="true" /></span>
                  <p>{m}</p>
                </motion.li>
              );
            })}
          </motion.ol>
        </div>
      </div>

      {/* Principes d'intervention */}
      <div className="principles">
        <motion.h3 variants={fadeUp} {...inView()}>{a.principles.title}</motion.h3>
        <motion.ul variants={stagger(0.12)} {...inView(0.15)}>
          {a.principles.items.map((p, i) => {
            const Icon = PRINCIPLE_ICONS[i];
            return (
              <motion.li key={p.title} variants={fadeUp} whileHover={{ y: -8 }}>
                <motion.span className="p-icon" whileHover={{ rotate: 12, scale: 1.1 }}>
                  <Icon aria-hidden="true" />
                </motion.span>
                <span className="p-num">0{i + 1}</span>
                <h4>{p.title}</h4>
                <p>{p.text}</p>
              </motion.li>
            );
          })}
        </motion.ul>
      </div>

      {/* Citation */}
      <motion.blockquote
        className="about-quote"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
        variants={{
          hidden: { opacity: 0, scale: 0.96 },
          show: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: EASE } },
        }}
      >
        {/* Animation pilotée par le parent : un élément entièrement masqué n'est jamais « visible » */}
        <motion.figure
          className="quote-photo"
          variants={{
            hidden: { clipPath: "inset(0% 100% 0% 0% round 22px)" },
            show: { clipPath: "inset(0% 0% 0% 0% round 22px)", transition: { duration: 1.1, delay: 0.15, ease: EASE } },
          }}
        >
          <motion.img
            src={PHOTOS.parole.thumb}
            alt={t.gallery.items[PHOTOS.parole.id].caption}
            width={PHOTOS.parole.w}
            height={PHOTOS.parole.h}
            loading="lazy"
            variants={{ hidden: { scale: 1.25 }, show: { scale: 1, transition: { duration: 1.6, ease: EASE } } }}
          />
        </motion.figure>
        <div className="quote-body">
          <motion.span
            className="q-mark"
            variants={{ hidden: { rotate: -20, opacity: 0 }, show: { rotate: 0, opacity: 1, transition: { delay: 0.3, type: "spring" } } }}
          >
            <LuQuote aria-hidden="true" />
          </motion.span>
          <p>{a.quote}</p>
        </div>
      </motion.blockquote>
    </div>
  );
};

export default About;
