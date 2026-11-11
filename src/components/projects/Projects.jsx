import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { Link } from "react-router-dom";
import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
import {
  LuPlay, LuGlobe, LuNewspaper, LuGraduationCap, LuLayoutGrid, LuX, LuArrowUpRight,
  LuExternalLink, LuChevronLeft, LuChevronRight, LuFilm, LuBuilding2,
} from "react-icons/lu";
import { useI18n } from "../../i18n/context.js";
import { PHOTOS } from "../../data/site.js";
import { SectionHeading } from "../ui/ui.jsx";
import { EASE, fadeUp, inView } from "../ui/motion.js";
import "./Projects.scss";

const shot = (name) => ({ id: name, src: `/portfolio/${name}.webp`, thumb: `/portfolio/${name}-sm.webp`, w: 1440, h: 900 });

// Réalisations : textes dans t.projects.items[id].
// 👉 Pour une production vidéo, ajouter `video: "https://www.youtube.com/embed/<identifiant>"` : la vidéo
//    sera alors lue dans la fenêtre de détail.
const WORKS = [
  { id: "couverture-ue", type: "video", cover: PHOTOS.visiteUe, media: [PHOTOS.visiteUe, PHOTOS.camigraUe, PHOTOS.echange] },
  { id: "site-etudiant", type: "web", url: "https://www.journaletudiant.com", cover: shot("site-journaletudiant") },
  { id: "drone", type: "video", cover: PHOTOS.dronePaysage, media: [PHOTOS.dronePaysage, PHOTOS.dronePilote, PHOTOS.droneEquipe] },
  { id: "entretiens", type: "video", cover: PHOTOS.interview, media: [PHOTOS.interview, PHOTOS.tournage, PHOTOS.photographe] },
  { id: "site-cmct", type: "web", url: "/", cover: shot("site-cmct") },
  { id: "journal-etudiant", type: "press", cover: PHOTOS.etudiant151, media: [PHOTOS.etudiant151, PHOTOS.etudiant389] },
  { id: "reportage-humanitaire", type: "video", cover: PHOTOS.mission, media: [PHOTOS.mission, PHOTOS.terrain, PHOTOS.enfants] },
  { id: "nouvelle-ere", type: "press", cover: PHOTOS.une, media: [PHOTOS.une] },
  { id: "formation", type: "training", cover: PHOTOS.formation, media: [PHOTOS.formation, PHOTOS.pricnac] },
];

const FILTERS = ["all", "video", "web", "press", "training"];
const TYPE_ICONS = { all: LuLayoutGrid, video: LuFilm, web: LuGlobe, press: LuNewspaper, training: LuGraduationCap };

const hostOf = (url) => (url.startsWith("http") ? new URL(url).host : "cmct.cm");

// Visuel d'une carte selon le type de réalisation
const CardMedia = ({ work }) => {
  const img = <img src={work.cover.thumb} alt="" loading="lazy" width={work.cover.w} height={work.cover.h} />;
  if (work.type === "web") {
    return (
      <div className="w-browser">
        <div className="w-bar" aria-hidden="true">
          <span className="dots"><i /><i /><i /></span>
          <span className="url"><LuGlobe /> {hostOf(work.url)}</span>
        </div>
        <div className="w-screen">{img}</div>
      </div>
    );
  }
  return (
    <div className={`w-photo type-${work.type}`}>
      {img}
      {work.type === "video" && (
        <span className="w-play" aria-hidden="true">
          <LuPlay />
        </span>
      )}
    </div>
  );
};

// Fenêtre de détail : vidéo ou diaporama, description, liens
const Detail = ({ work, onClose, p }) => {
  const item = p.items[work.id];
  const closeRef = useRef(null);
  const dialogRef = useRef(null);
  const slides = work.media ?? [work.cover];
  const [index, setIndex] = useState(0);
  const go = useCallback((step) => setIndex((i) => (i + step + slides.length) % slides.length), [slides.length]);
  const Icon = TYPE_ICONS[work.type];
  const external = work.url?.startsWith("http");

  useEffect(() => {
    const previous = document.activeElement;
    closeRef.current?.focus();
    document.body.classList.add("menu-open");
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight" && slides.length > 1) go(1);
      if (e.key === "ArrowLeft" && slides.length > 1) go(-1);
      if (e.key === "Tab") {
        const els = dialogRef.current.querySelectorAll("button, a[href], iframe");
        const first = els[0];
        const last = els[els.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.classList.remove("menu-open");
      previous?.focus?.();
    };
  }, [onClose, go, slides.length]);

  return createPortal(
    <motion.div
      className="work-modal"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        ref={dialogRef}
        className="wm-dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby="wm-title"
        initial={{ opacity: 0, y: 40, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 30, scale: 0.97 }}
        transition={{ duration: 0.4, ease: EASE }}
        onClick={(e) => e.stopPropagation()}
      >
        <button ref={closeRef} type="button" className="wm-close" onClick={onClose} aria-label={p.close}>
          <LuX aria-hidden="true" />
        </button>

        <div className={`wm-media type-${work.type}`}>
          {work.video ? (
            <iframe src={work.video} title={item.title} allow="autoplay; encrypted-media; picture-in-picture" allowFullScreen />
          ) : work.type === "web" ? (
            <div className="w-browser large">
              <div className="w-bar" aria-hidden="true">
                <span className="dots"><i /><i /><i /></span>
                <span className="url"><LuGlobe /> {hostOf(work.url)}</span>
              </div>
              <div className="w-screen"><img src={work.cover.src} alt={item.alt} /></div>
            </div>
          ) : (
            <>
              <AnimatePresence mode="popLayout" initial={false}>
                <motion.img
                  key={slides[index].id}
                  src={slides[index].src}
                  alt={index === 0 ? item.alt : ""}
                  initial={{ opacity: 0, scale: 1.04 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.45 }}
                />
              </AnimatePresence>
              {slides.length > 1 && (
                <>
                  <button type="button" className="wm-nav prev" onClick={() => go(-1)} aria-label={p.prev}>
                    <LuChevronLeft aria-hidden="true" />
                  </button>
                  <button type="button" className="wm-nav next" onClick={() => go(1)} aria-label={p.next}>
                    <LuChevronRight aria-hidden="true" />
                  </button>
                  <div className="wm-dots" aria-hidden="true">
                    {slides.map((s, i) => <span key={s.id} className={i === index ? "on" : ""} />)}
                  </div>
                </>
              )}
            </>
          )}
        </div>

        <div className="wm-info">
          <span className={`w-tag type-${work.type}`}>
            <Icon aria-hidden="true" /> {p.categories[work.type]}
          </span>
          <h2 id="wm-title">{item.title}</h2>
          <p className="wm-client"><LuBuilding2 aria-hidden="true" /> {item.client}</p>
          <p className="wm-desc">{item.description}</p>
          {item.deliverables && (
            <ul className="wm-tags">
              {item.deliverables.map((d) => <li key={d}>{d}</li>)}
            </ul>
          )}
          {work.type === "video" && !work.video && <p className="wm-note">{p.videoOnRequest}</p>}
          <div className="wm-actions">
            {work.url && (external ? (
              <a href={work.url} target="_blank" rel="noreferrer" className="btn primary">
                {p.visit} <LuExternalLink className="btn-icon-static" aria-hidden="true" />
                <span className="visually-hidden"> {p.newTab}</span>
              </a>
            ) : (
              <Link to={work.url} className="btn primary" onClick={onClose}>{p.visit}</Link>
            ))}
            <Link to="/contact" className={`btn ${work.url ? "ghost-dark" : "primary"}`} onClick={onClose}>
              {p.similar} <LuArrowUpRight className="btn-icon" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </motion.div>
    </motion.div>,
    document.body
  );
};

const Projects = () => {
  const { t } = useI18n();
  const p = t.projects;
  const [filter, setFilter] = useState("all");
  const [open, setOpen] = useState(null);
  const close = useCallback(() => setOpen(null), []);

  const works = useMemo(() => (filter === "all" ? WORKS : WORKS.filter((w) => w.type === filter)), [filter]);
  const count = (f) => (f === "all" ? WORKS.length : WORKS.filter((w) => w.type === f).length);

  return (
    <div className="works container">
      <SectionHeading label={p.label} title={p.title} intro={p.intro} />

      <motion.div className="w-filters" role="group" aria-label={p.filterLabel} variants={fadeUp} {...inView(0.5)}>
        <LayoutGroup id="works-filters">
          {FILTERS.map((f) => {
            const Icon = TYPE_ICONS[f];
            return (
              <button key={f} type="button" className={`w-filter ${filter === f ? "active" : ""}`} aria-pressed={filter === f} onClick={() => setFilter(f)}>
                {filter === f && <motion.span layoutId="w-pill" className="w-pill" transition={{ type: "spring", stiffness: 400, damping: 32 }} />}
                <Icon aria-hidden="true" />
                <span className="w-label">{p.categories[f]}</span>
                <span className="w-count">{count(f)}</span>
              </button>
            );
          })}
        </LayoutGroup>
      </motion.div>

      <motion.ul className="w-grid" layout>
        <AnimatePresence mode="popLayout">
          {works.map((w, i) => {
            const item = p.items[w.id];
            const Icon = TYPE_ICONS[w.type];
            return (
              <motion.li
                key={w.id}
                layout
                className={`w-card ${i === 0 ? "featured" : ""} type-${w.type}`}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.2 } }}
                transition={{ duration: 0.55, delay: Math.min(i, 6) * 0.06, ease: EASE }}
              >
                <button type="button" className="w-open" onClick={() => setOpen(w.id)} aria-label={p.openLabel(item.title)}>
                  <CardMedia work={w} />
                  <span className="w-body">
                    <span className={`w-tag type-${w.type}`}>
                      <Icon aria-hidden="true" /> {p.categories[w.type]}
                    </span>
                    <strong className="w-title">{item.title}</strong>
                    <span className="w-client">{item.client}</span>
                    <span className="w-desc">{item.summary}</span>
                    <span className="w-more">
                      {w.type === "video" ? p.watch : w.type === "web" ? p.discover : p.details}
                      <LuArrowUpRight aria-hidden="true" />
                    </span>
                  </span>
                </button>
              </motion.li>
            );
          })}
        </AnimatePresence>
      </motion.ul>

      <motion.div className="w-cta" variants={fadeUp} {...inView(0.4)}>
        <p>{p.ctaText}</p>
        <Link to="/contact" className="btn primary">
          {p.ctaButton}
          <LuArrowUpRight className="btn-icon" aria-hidden="true" />
        </Link>
      </motion.div>

      <AnimatePresence>
        {open && <Detail work={WORKS.find((w) => w.id === open)} onClose={close} p={p} />}
      </AnimatePresence>
    </div>
  );
};

export default Projects;
