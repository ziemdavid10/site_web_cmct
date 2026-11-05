import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  LuNewspaper, LuClapperboard, LuCpu, LuGraduationCap, LuCheck, LuInfo,
  LuArrowUpRight, LuFileVideo, LuCamera, LuMegaphone, LuLightbulb, LuMonitor, LuWifi, LuShuffle,
} from "react-icons/lu";
import { useI18n } from "../../i18n/context.js";
import { BRANDS, PHOTOS } from "../../data/site.js";
import { SectionHeading, BrandMark } from "../ui/ui.jsx";
import { fadeUp, stagger, EASE } from "../ui/motion.js";
import "./Services.scss";

const TAB_ICONS = { media: LuNewspaper, comm: LuClapperboard, tech: LuCpu, training: LuGraduationCap };
const CARD_ICONS = [LuFileVideo, LuCamera, LuMegaphone];
const FORMAT_ICONS = [LuMonitor, LuWifi, LuShuffle];
// Visuels de chaque direction : plusieurs unes = éventail de journaux, sinon une photo
const PANEL_PHOTOS = {
  media: [PHOTOS.une, PHOTOS.etudiant151, PHOTOS.etudiant389],
  comm: [PHOTOS.interview],
  tech: [PHOTOS.dronePilote],
  training: [PHOTOS.formation],
};

// Éventail de unes qui s'ouvre au survol
const Covers = ({ photos, items, label }) => (
  <motion.figure
    className="panel-covers"
    initial="rest"
    animate="rest"
    whileHover="open"
    whileFocus="open"
    tabIndex={0}
    aria-label={label}
  >
    {photos.map((p, i) => {
      const offset = i - (photos.length - 1) / 2;
      return (
        <motion.img
          key={p.id}
          src={p.thumb}
          alt={items[p.id].caption}
          width={p.w}
          height={p.h}
          loading="lazy"
          style={{ zIndex: photos.length - Math.abs(offset) * 2 + (offset === 0 ? 1 : 0) }}
          initial={{ opacity: 0, y: 60, rotate: 0 }}
          variants={{
            rest: { opacity: 1, y: 0, x: `${offset * 38}%`, rotate: offset * 7, transition: { duration: 0.8, delay: 0.2 + i * 0.1, ease: EASE } },
            open: { opacity: 1, y: -6, x: `${offset * 62}%`, rotate: offset * 11, transition: { type: "spring", stiffness: 220, damping: 20 } },
          }}
        />
      );
    })}
    <figcaption>{label}</figcaption>
  </motion.figure>
);

// Contenu détaillé d'une direction
const Panel = ({ d, ctaLabel, sep, photos, items, coversLabel }) => (
  <motion.div
    className="panel-inner"
    variants={stagger(0.08)}
    initial="hidden"
    animate="show"
    exit={{ opacity: 0, y: -20, transition: { duration: 0.25 } }}
  >
    <motion.div className={`panel-head ${photos ? "has-photo" : ""}`} variants={fadeUp}>
      <span className="panel-num" aria-hidden="true">{d.number}</span>
      <div>
        <h3>{d.title}</h3>
        <p className="panel-lead">{d.lead}</p>
      </div>
      {photos && photos.length > 1 && <Covers photos={photos} items={items} label={coversLabel} />}
      {photos && photos.length === 1 && (
        <motion.figure
          className={`panel-photo photo-${photos[0].id}`}
          initial={{ opacity: 0, clipPath: "inset(0% 0% 100% 0% round 20px)" }}
          animate={{ opacity: 1, clipPath: "inset(0% 0% 0% 0% round 20px)" }}
          transition={{ duration: 0.9, delay: 0.15, ease: EASE }}
        >
          <motion.img
            src={photos[0].thumb}
            alt={items[photos[0].id].caption}
            width={photos[0].w}
            height={photos[0].h}
            loading="lazy"
            initial={{ scale: 1.2 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.4, ease: EASE }}
          />
          <figcaption>{items[photos[0].id].title}</figcaption>
        </motion.figure>
      )}
    </motion.div>

    {d.structures && (
      <motion.div className="block" variants={fadeUp}>
        <h4 className="block-title">{d.structures.title}</h4>
        <div className={`structures count-${d.structures.items.length}`}>
          {d.structures.items.map((s, i) => (
            <motion.article
              key={s.name}
              className="structure"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 + i * 0.08, duration: 0.6, ease: EASE }}
              whileHover={{ y: -6 }}
            >
              <BrandMark brand={BRANDS[s.brand]} size="lg" />
              <div>
                <h5>{s.name}</h5>
                <p>{s.text}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </motion.div>
    )}

    <div className={`lists count-${d.lists.length}`}>
      {d.lists.map((l) => (
        <motion.div className="block list-block" key={l.title} variants={fadeUp}>
          <h4 className="block-title">{l.title}</h4>
          <ul className="checklist">
            {l.items.map((it, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + i * 0.05, duration: 0.45 }}
              >
                <span className="check"><LuCheck aria-hidden="true" /></span>
                <p>
                  {it.lead && <strong>{it.lead}{sep}</strong>}
                  {it.text}
                </p>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      ))}
    </div>

    {d.cards && (
      <motion.div className="block" variants={fadeUp}>
        <h4 className="block-title">{d.cards.title}</h4>
        <div className="deliverables">
          {d.cards.items.map((c, i) => {
            const Icon = CARD_ICONS[i % CARD_ICONS.length];
            return (
              <motion.article key={c.title} className="deliverable" whileHover={{ y: -6, rotate: -0.5 }}>
                <Icon className="d-icon" aria-hidden="true" />
                <h5>{c.title}</h5>
                <p>{c.text}</p>
              </motion.article>
            );
          })}
        </div>
      </motion.div>
    )}

    {d.steps && (
      <motion.div className="block" variants={fadeUp}>
        <h4 className="block-title">{d.steps.title}</h4>
        <ol className="steps">
          {d.steps.items.map((s, i) => (
            <motion.li
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 + i * 0.12, duration: 0.55, ease: EASE }}
            >
              <span className="step-num">{i + 1}</span>
              <h5>{s.title}</h5>
              <p>{s.text}</p>
            </motion.li>
          ))}
        </ol>
      </motion.div>
    )}

    {d.formats && (
      <motion.ul className="formats" variants={fadeUp}>
        {d.formats.map((f, i) => {
          const Icon = FORMAT_ICONS[i];
          return (
            <li key={f}>
              <Icon aria-hidden="true" /> {f}
            </li>
          );
        })}
      </motion.ul>
    )}

    <div className="texts">
      {d.texts.map((x) => (
        <motion.div className="text-box" key={x.title} variants={fadeUp}>
          <LuLightbulb className="tb-icon" aria-hidden="true" />
          <h4>{x.title}</h4>
          <p>{x.text}</p>
        </motion.div>
      ))}
    </div>

    <motion.div className="panel-foot" variants={fadeUp}>
      <p className="note">
        <LuInfo aria-hidden="true" />
        <span>{d.note}</span>
      </p>
      <a href="#Contact" className="btn primary">
        {ctaLabel}
        <LuArrowUpRight className="btn-icon" aria-hidden="true" />
      </a>
    </motion.div>
  </motion.div>
);

const Expertises = () => {
  const { t } = useI18n();
  const e = t.expertises;
  const [selected, setSelected] = useState(e.directions[0].id);
  const tabsRef = useRef([]);
  const current = e.directions.find((d) => d.id === selected) ?? e.directions[0];

  // Navigation au clavier entre onglets (flèches, Début, Fin)
  const onKeyDown = (ev, index) => {
    const n = e.directions.length;
    let next = null;
    if (ev.key === "ArrowRight" || ev.key === "ArrowDown") next = (index + 1) % n;
    if (ev.key === "ArrowLeft" || ev.key === "ArrowUp") next = (index - 1 + n) % n;
    if (ev.key === "Home") next = 0;
    if (ev.key === "End") next = n - 1;
    if (next === null) return;
    ev.preventDefault();
    setSelected(e.directions[next].id);
    tabsRef.current[next]?.focus();
  };

  return (
    <div className="expertises container">
      <SectionHeading label={e.label} title={e.title} intro={e.intro} dark />

      <motion.div
        className="tabs"
        role="tablist"
        aria-label={e.tablist}
        variants={stagger(0.08)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        {e.directions.map((d, i) => {
          const Icon = TAB_ICONS[d.id];
          const active = d.id === selected;
          return (
            <motion.button
              key={d.id}
              ref={(el) => (tabsRef.current[i] = el)}
              type="button"
              role="tab"
              id={`tab-${d.id}`}
              aria-selected={active}
              aria-controls="expertise-panel"
              tabIndex={active ? 0 : -1}
              className={`tab tab-${d.id} ${active ? "active" : ""}`}
              onClick={() => setSelected(d.id)}
              onKeyDown={(ev) => onKeyDown(ev, i)}
              variants={fadeUp}
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.98 }}
            >
              {active && (
                <motion.span layoutId="tab-bg" className="tab-bg" transition={{ type: "spring", stiffness: 380, damping: 32 }} />
              )}
              <span className="tab-icon"><Icon aria-hidden="true" /></span>
              <span className="tab-text">
                <span className="tab-num">{d.number}</span>
                <span className="tab-label">{d.tab}</span>
              </span>
            </motion.button>
          );
        })}
      </motion.div>

      <div id="expertise-panel" className="panel" role="tabpanel" aria-labelledby={`tab-${current.id}`}>
        <AnimatePresence mode="wait">
          <Panel
            key={`${current.id}-${t.code}`}
            d={current}
            ctaLabel={e.contactCta}
            sep={t.code === "fr" ? " : " : ": "}
            photos={PANEL_PHOTOS[current.id]}
            items={t.gallery.items}
            coversLabel={t.gallery.covers}
          />
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Expertises;
