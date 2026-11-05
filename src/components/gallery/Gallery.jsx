import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
import { LuChevronLeft, LuChevronRight, LuX, LuMaximize2 } from "react-icons/lu";
import { useI18n } from "../../i18n/context.js";
import { GALLERY } from "../../data/site.js";
import { SectionHeading } from "../ui/ui.jsx";
import { EASE, fadeUp, inView } from "../ui/motion.js";
import "./Gallery.scss";

const FILTERS = ["all", "media", "production", "field"];

// Visionneuse plein écran : clavier (← → Échap), glisser au doigt, focus piégé
const Lightbox = ({ photos, index, onClose, onNav, g }) => {
  const photo = photos[index];
  const item = g.items[photo.id];
  const closeRef = useRef(null);
  const dialogRef = useRef(null);
  const [dir, setDir] = useState(0);

  const go = useCallback(
    (step) => {
      setDir(step);
      onNav((index + step + photos.length) % photos.length);
    },
    [index, photos.length, onNav]
  );

  useEffect(() => {
    const previous = document.activeElement;
    closeRef.current?.focus();
    document.body.classList.add("menu-open");
    return () => {
      document.body.classList.remove("menu-open");
      previous?.focus?.();
    };
  }, []);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
      if (e.key === "Tab") {
        const els = dialogRef.current.querySelectorAll("button");
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
    return () => window.removeEventListener("keydown", onKey);
  }, [go, onClose]);

  return (
    <motion.div
      className="lightbox"
      role="dialog"
      aria-modal="true"
      aria-label={g.dialog}
      ref={dialogRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="lb-top">
        <span className="lb-counter" aria-live="polite">{g.counter(index + 1, photos.length)}</span>
        <button ref={closeRef} type="button" className="lb-btn" onClick={onClose} aria-label={g.close}>
          <LuX aria-hidden="true" />
        </button>
      </div>

      <div className="lb-stage" onClick={(e) => e.target === e.currentTarget && onClose()}>
        <AnimatePresence initial={false} custom={dir} mode="popLayout">
          <motion.figure
            key={photo.id}
            className="lb-figure"
            custom={dir}
            variants={{
              enter: (d) => ({ opacity: 0, x: d * 80, scale: 0.96 }),
              center: { opacity: 1, x: 0, scale: 1 },
              exit: (d) => ({ opacity: 0, x: d * -80, scale: 0.96 }),
            }}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.45, ease: EASE }}
            drag={photos.length > 1 ? "x" : false}
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.6}
            onDragEnd={(_, info) => {
              if (info.offset.x < -80) go(1);
              else if (info.offset.x > 80) go(-1);
            }}
          >
            <img src={photo.src} alt={item.caption} width={photo.w} height={photo.h} draggable="false" />
            <figcaption>
              <strong>{item.title}</strong>
              <span>{item.caption}</span>
            </figcaption>
          </motion.figure>
        </AnimatePresence>
      </div>

      {photos.length > 1 && (
        <>
          <button type="button" className="lb-btn lb-nav prev" onClick={() => go(-1)} aria-label={g.prev}>
            <LuChevronLeft aria-hidden="true" />
          </button>
          <button type="button" className="lb-btn lb-nav next" onClick={() => go(1)} aria-label={g.next}>
            <LuChevronRight aria-hidden="true" />
          </button>
        </>
      )}
    </motion.div>
  );
};

const Gallery = () => {
  const { t } = useI18n();
  const g = t.gallery;
  const [filter, setFilter] = useState("all");
  const [open, setOpen] = useState(null);

  const photos = useMemo(() => (filter === "all" ? GALLERY : GALLERY.filter((p) => p.category === filter)), [filter]);
  const close = useCallback(() => setOpen(null), []);

  // Nombre impair de cases : la dernière photo horizontale s'étire (en 2 colonnes) pour éviter un trou
  const cells = photos.reduce((n, p) => n + (p.h > p.w ? 2 : 1), 0);
  const last = photos[photos.length - 1];
  const fillId = cells % 2 && last && last.w > last.h ? last.id : null;

  return (
    <div className="gallery container">
      <SectionHeading label={g.label} title={g.title} intro={g.intro} />

      <motion.div className="g-filters" role="group" aria-label={g.filterLabel} variants={fadeUp} {...inView()}>
        <LayoutGroup id="gallery-filters">
          {FILTERS.map((f) => (
            <button
              key={f}
              type="button"
              className={`g-filter ${filter === f ? "active" : ""}`}
              aria-pressed={filter === f}
              onClick={() => setFilter(f)}
            >
              {filter === f && (
                <motion.span layoutId="g-pill" className="g-pill" transition={{ type: "spring", stiffness: 400, damping: 32 }} />
              )}
              <span className="g-label">{g.categories[f]}</span>
            </button>
          ))}
        </LayoutGroup>
      </motion.div>

      <motion.ul className="g-grid" layout>
        <AnimatePresence mode="popLayout">
          {photos.map((p, i) => {
            const item = g.items[p.id];
            const portrait = p.h > p.w;
            return (
              <motion.li
                key={p.id}
                layout
                className={`g-item ${portrait ? "portrait" : "landscape"} ${p.id === fillId ? "fill" : ""}`}
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.25 } }}
                transition={{ duration: 0.7, delay: (i % 3) * 0.08, ease: EASE }}
              >
                <button type="button" className="g-card" onClick={() => setOpen(i)} aria-label={g.open(item.title)}>
                  <img src={p.thumb} alt="" width={p.w} height={p.h} loading="lazy" decoding="async" />
                  <span className="g-overlay" aria-hidden="true">
                    <span className="g-cat">{g.categories[p.category]}</span>
                    <strong>{item.title}</strong>
                    <span className="g-zoom"><LuMaximize2 /></span>
                  </span>
                </button>
              </motion.li>
            );
          })}
        </AnimatePresence>
      </motion.ul>

      {/* Rendue dans <body> pour ne pas dépendre des transformations des sections */}
      {createPortal(
        <AnimatePresence>
          {open !== null && photos[open] && (
            <Lightbox photos={photos} index={open} onClose={close} onNav={setOpen} g={g} />
          )}
        </AnimatePresence>,
        document.body
      )}
    </div>
  );
};

export default Gallery;
