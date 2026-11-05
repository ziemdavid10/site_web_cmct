import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { LuCalendarDays, LuMapPin, LuArrowUpRight, LuRadio, LuSparkles } from "react-icons/lu";
import { useI18n } from "../../i18n/context.js";
import { EASE, fadeUp, stagger, inView } from "../ui/motion.js";
import "./EventBanner.scss";

// Événement annoncé (source : www.jciacm.com)
const EVENT = {
  url: "https://www.jciacm.com",
  logo: "/events/jcia-logo-white.webp",
  start: new Date("2027-04-27T08:00:00+01:00"),
  end: new Date("2027-04-28T23:00:00+01:00"),
};

const remaining = () => {
  const ms = Math.max(0, EVENT.start - Date.now());
  return {
    days: Math.floor(ms / 86400000),
    hours: Math.floor(ms / 3600000) % 24,
    minutes: Math.floor(ms / 60000) % 60,
    seconds: Math.floor(ms / 1000) % 60,
  };
};

// Chiffre du compte à rebours qui glisse à chaque changement
const Unit = ({ value, label }) => (
  <div className="cd-unit">
    <span className="cd-value" aria-hidden="true">
      <motion.span
        key={value}
        initial={{ y: "-100%", opacity: 0 }}
        animate={{ y: "0%", opacity: 1 }}
        transition={{ duration: 0.35, ease: EASE }}
      >
        {String(value).padStart(2, "0")}
      </motion.span>
    </span>
    <span className="cd-label">{label}</span>
  </div>
);

const EventBanner = () => {
  const { t, lang } = useI18n();
  const e = t.event;
  const reduce = useReducedMotion();
  const [left, setLeft] = useState(remaining);
  const now = Date.now();

  useEffect(() => {
    const id = setInterval(() => setLeft(remaining()), 1000);
    return () => clearInterval(id);
  }, []);

  // L'annonce disparaît une fois l'événement terminé
  if (now > EVENT.end) return null;
  const live = now >= EVENT.start;

  const dateFmt = new Intl.DateTimeFormat(lang === "fr" ? "fr-FR" : "en-GB", { day: "numeric", month: "long", year: "numeric" });
  const dayFmt = new Intl.DateTimeFormat(lang === "fr" ? "fr-FR" : "en-GB", { day: "numeric" });

  return (
    <section className="event-banner" aria-labelledby="event-title" data-nav-theme="dark">
      <div className="eb-bg" aria-hidden="true">
        <motion.span
          className="eb-orb orb-a"
          animate={reduce ? undefined : { x: [0, 40, 0], y: [0, -20, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.span
          className="eb-orb orb-b"
          animate={reduce ? undefined : { x: [0, -30, 0], y: [0, 25, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />
        <span className="eb-dots" />
      </div>

      <div className="eb-inner container">
        <motion.div className="eb-main" variants={stagger(0.1)} {...inView(0.3)}>
          <motion.p className="eb-kicker" variants={fadeUp}>
            <span className="eb-pulse" aria-hidden="true" />
            {live ? e.liveKicker : e.kicker}
          </motion.p>

          <motion.div className="eb-head" variants={fadeUp}>
            <img src={EVENT.logo} alt="JCIA 2027" width="520" height="215" className="eb-logo" loading="lazy" />
          </motion.div>

          <motion.h2 id="event-title" variants={fadeUp}>{e.name}</motion.h2>
          <motion.p className="eb-theme" variants={fadeUp}>
            <LuSparkles aria-hidden="true" />
            <span>
              <strong>{e.tagline}</strong> {e.theme}
            </span>
          </motion.p>

          <motion.ul className="eb-facts" variants={stagger(0.08)}>
            <motion.li variants={fadeUp}>
              <LuCalendarDays aria-hidden="true" />
              <time dateTime="2027-04-27">{dayFmt.format(EVENT.start)}</time>
              {" & "}
              <time dateTime="2027-04-28">{dateFmt.format(EVENT.end)}</time>
            </motion.li>
            <motion.li variants={fadeUp}>
              <LuMapPin aria-hidden="true" /> {e.place}
            </motion.li>
            <motion.li variants={fadeUp}>
              <LuRadio aria-hidden="true" /> {e.mode}
            </motion.li>
          </motion.ul>

          <motion.p className="eb-organizer" variants={fadeUp}>{e.organizer}</motion.p>
        </motion.div>

        <motion.aside
          className="eb-side"
          initial={{ opacity: 0, x: 40, rotate: 1.5 }}
          whileInView={{ opacity: 1, x: 0, rotate: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, ease: EASE, delay: 0.2 }}
        >
          {live ? (
            <p className="eb-live">{e.liveNow}</p>
          ) : (
            <>
              <p className="cd-title">{e.countdown}</p>
              <div className="countdown" role="timer" aria-label={e.countdownLabel(left.days)}>
                <Unit value={left.days} label={e.units.days} />
                <Unit value={left.hours} label={e.units.hours} />
                <Unit value={left.minutes} label={e.units.minutes} />
                <Unit value={left.seconds} label={e.units.seconds} />
              </div>
            </>
          )}
          <motion.a
            href={EVENT.url}
            target="_blank"
            rel="noreferrer"
            className="btn primary eb-cta"
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.97 }}
          >
            {e.cta}
            <LuArrowUpRight className="btn-icon" aria-hidden="true" />
            <span className="visually-hidden"> {e.newTab}</span>
          </motion.a>
          <a href={EVENT.url} target="_blank" rel="noreferrer" className="eb-url">www.jciacm.com</a>
        </motion.aside>
      </div>
    </section>
  );
};

export default EventBanner;
