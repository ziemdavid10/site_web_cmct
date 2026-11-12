import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  LuNewspaper, LuClapperboard, LuCpu, LuGraduationCap, LuCheck, LuInfo,
  LuArrowUpRight, LuFileVideo, LuCamera, LuMegaphone, LuLightbulb, LuMonitor, LuWifi, LuShuffle,
} from "react-icons/lu";
import { useI18n } from "../../i18n/context.js";
import { BRANDS, PHOTOS } from "../../data/site.js";
import { SectionHeading, BrandMark } from "../ui/ui.jsx";
import { fadeUp, inView, EASE } from "../ui/motion.js";
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
  <div className="panel-inner">
    <motion.div className={`panel-head ${photos ? "has-photo" : ""}`} variants={fadeUp} {...inView(0.15)}>
      <span className="panel-num" aria-hidden="true">{d.number}</span>
      <div>
        <h3 id={`titre-${d.id}`}>{d.title}</h3>
        <p className="panel-lead">{d.lead}</p>
      </div>
      {photos && photos.length > 1 && <Covers photos={photos} items={items} label={coversLabel} />}
      {photos && photos.length === 1 && (
        <motion.figure
          className={`panel-photo photo-${photos[0].id}`}
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, delay: 0.15, ease: EASE }}
        >
          <motion.img
            src={photos[0].thumb}
            alt={items[photos[0].id].caption}
            width={photos[0].w}
            height={photos[0].h}
            loading="lazy"
            initial={{ scale: 1.2 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.4, ease: EASE }}
          />
          <figcaption>{items[photos[0].id].title}</figcaption>
        </motion.figure>
      )}
    </motion.div>

    {d.structures && (
      <motion.div className="block" variants={fadeUp} {...inView(0.15)}>
        <h4 className="block-title">{d.structures.title}</h4>
        <div className={`structures count-${d.structures.items.length}`}>
          {d.structures.items.map((s, i) => (
            <motion.article
              key={s.name}
              className="structure"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.08, duration: 0.6, ease: EASE }}
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
        <motion.div className="block list-block" key={l.title} variants={fadeUp} {...inView(0.15)}>
          <h4 className="block-title">{l.title}</h4>
          <ul className="checklist">
            {l.items.map((it, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: i * 0.04, duration: 0.45 }}
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
      <motion.div className="block" variants={fadeUp} {...inView(0.15)}>
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
      <motion.div className="block" variants={fadeUp} {...inView(0.15)}>
        <h4 className="block-title">{d.steps.title}</h4>
        <ol className="steps">
          {d.steps.items.map((s, i) => (
            <motion.li
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.1, duration: 0.55, ease: EASE }}
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
      <motion.ul className="formats" variants={fadeUp} {...inView(0.15)}>
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
        <motion.div className="text-box" key={x.title} variants={fadeUp} {...inView(0.15)}>
          <LuLightbulb className="tb-icon" aria-hidden="true" />
          <h4>{x.title}</h4>
          <p>{x.text}</p>
        </motion.div>
      ))}
    </div>

    <motion.div className="panel-foot" variants={fadeUp} {...inView(0.15)}>
      <p className="note">
        <LuInfo aria-hidden="true" />
        <span>{d.note}</span>
      </p>
      <Link to="/contact" className="btn primary">
        {ctaLabel}
        <LuArrowUpRight className="btn-icon" aria-hidden="true" />
      </Link>
    </motion.div>
  </div>
);

const sectionId = (id) => `direction-${id}`;

const Expertises = () => {
  const { t } = useI18n();
  const e = t.expertises;
  const [active, setActive] = useState(e.directions[0].id);

  // Repère la direction affichée à l'écran pour la mettre en évidence dans la barre
  useEffect(() => {
    const sections = e.directions.map((d) => document.getElementById(sectionId(d.id))).filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id.replace("direction-", ""));
        });
      },
      // Zone de détection : une bande horizontale un peu au-dessus du milieu de l'écran
      { rootMargin: "-35% 0px -60% 0px" }
    );
    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [e.directions]);

  // Garde le repère actif visible dans la barre quand elle défile horizontalement (mobile)
  useEffect(() => {
    const link = document.getElementById(`repere-${active}`);
    const bar = link?.parentElement;
    if (!link || !bar || bar.scrollWidth <= bar.clientWidth) return;
    bar.scrollTo({ left: link.offsetLeft - (bar.clientWidth - link.offsetWidth) / 2, behavior: "smooth" });
  }, [active]);

  const goTo = (ev, id) => {
    ev.preventDefault();
    document.getElementById(sectionId(id))?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="expertises container">
      <SectionHeading label={e.label} title={e.title} intro={e.intro} dark />

      {/* Barre de repères : reste visible pendant le défilement et indique la direction en cours */}
      <nav className="dir-nav" aria-label={e.tablist}>
        <div className="dir-nav-inner">
          {e.directions.map((d) => {
            const Icon = TAB_ICONS[d.id];
            const isActive = d.id === active;
            return (
              <a
                key={d.id}
                id={`repere-${d.id}`}
                href={`#${sectionId(d.id)}`}
                className={`dir-link tab-${d.id} ${isActive ? "active" : ""}`}
                aria-current={isActive ? "true" : undefined}
                onClick={(ev) => goTo(ev, d.id)}
              >
                {isActive && (
                  <motion.span layoutId="dir-bg" className="dir-bg" transition={{ type: "spring", stiffness: 380, damping: 32 }} />
                )}
                <span className="dir-icon"><Icon aria-hidden="true" /></span>
                <span className="dir-text">
                  <span className="dir-num">{d.number}</span>
                  <span className="dir-label">{d.tab}</span>
                </span>
              </a>
            );
          })}
        </div>
      </nav>

      <div className="directions">
        {e.directions.map((d) => (
          <section key={d.id} id={sectionId(d.id)} className={`panel panel-${d.id}`} aria-labelledby={`titre-${d.id}`}>
            <Panel
              d={d}
              ctaLabel={e.contactCta}
              sep={t.code === "fr" ? " : " : ": "}
              photos={PANEL_PHOTOS[d.id]}
              items={t.gallery.items}
              coversLabel={t.gallery.covers}
            />
          </section>
        ))}
      </div>
    </div>
  );
};

export default Expertises;
