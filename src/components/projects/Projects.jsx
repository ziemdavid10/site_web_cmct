import { useRef, useState, useEffect, useCallback } from 'react';
import { motion, useScroll, useTransform, useSpring, AnimatePresence, useReducedMotion } from 'framer-motion';
import { createPortal } from 'react-dom';
import { LuX, LuPlay } from 'react-icons/lu';
import { useI18n } from '../../i18n/context.js';
import { SplitWords } from '../ui/ui.jsx';
import './Projects.scss';

const projects = [
  {
    id: 1,
    type: "video",
    src: "https://vjs.zencdn.net/v/oceans.mp4",
    device: "tv"
  },
  {
    id: 2,
    type: "image",
    src: "/news1.webp",
    device: "iphone"
  },
  {
    id: 3,
    type: "audio",
    src: "/audio_projet.mp3",
    device: "tablet"
  }
];

// Parallaxe uniquement sur grand écran (évite les chevauchements sur mobile/tablette)
const useIsLargeScreen = () => {
  const query = "(min-width: 1025px)";
  const [matches, setMatches] = useState(() => window.matchMedia(query).matches);
  useEffect(() => {
    const mq = window.matchMedia(query);
    const onChange = (e) => setMatches(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);
  return matches;
};

// Visuel "onde sonore" pour les projets audio
const AudioVisual = ({ animated = true }) => (
  <div className="audio-visual" aria-hidden="true">
    {Array.from({ length: 24 }).map((_, i) => (
      <span key={i} style={{ animationDelay: `${(i % 8) * 0.12}s`, animationPlayState: animated ? "running" : "paused" }} />
    ))}
  </div>
);

const Lightbox = ({ project, onClose }) => {
  const { t } = useI18n();
  const closeRef = useRef(null);
  const [audioError, setAudioError] = useState(false);

  useEffect(() => {
    const previouslyFocused = document.activeElement;
    closeRef.current?.focus();
    document.body.style.overflow = "hidden";
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
      previouslyFocused?.focus?.();
    };
  }, [onClose]);

  return createPortal(
    <motion.div
      className="lightbox-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="lightbox-content"
        role="dialog"
        aria-modal="true"
        aria-labelledby="lightbox-title"
        initial={{ scale: 0.94, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.94, opacity: 0, y: 20 }}
        transition={{ duration: 0.25 }}
        onClick={(e) => e.stopPropagation()}
      >
        <button ref={closeRef} className="close-btn" onClick={onClose} aria-label={t.common.close}>
          <LuX aria-hidden="true" />
        </button>

        <div className={`media-container ${project.type}`}>
          {project.type === 'video' && <video src={project.src} autoPlay controls playsInline />}
          {project.type === 'image' && <img src={project.src} alt={project.title} />}
          {project.type === 'audio' && (
            <div className="audio-player">
              <AudioVisual />
              {audioError ? (
                <p className="media-note">{t.projects.audioSoon}</p>
              ) : (
                <audio src={project.src} controls onError={() => setAudioError(true)} />
              )}
            </div>
          )}
        </div>

        <div className="info">
          <span>{project.category}</span>
          <h2 id="lightbox-title">{project.title}</h2>
          <p>{project.description}</p>
        </div>
      </motion.div>
    </motion.div>,
    document.body
  );
};

const SingleProject = ({ project, onOpen, reverse }) => {
  const { t } = useI18n();
  const ref = useRef();
  const large = useIsLargeScreen();
  const reduce = useReducedMotion();
  const parallax = large && !reduce;

  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const yImage = useTransform(scrollYProgress, [0, 1], parallax ? [-60, 60] : [0, 0]);
  const yText = useTransform(scrollYProgress, [0, 1], parallax ? [60, -60] : [0, 0]);

  return (
    <article className={`project-item ${reverse ? "reverse" : ""}`} ref={ref}>
      <div className="wrapper">
        <motion.div className={`device-preview ${project.device}`} style={{ y: yImage }}>
          <div className="hardware-frame">
            <div className="screen-content">
              {project.type === 'video' && <video src={project.src} muted autoPlay loop playsInline preload="metadata" />}
              {project.type === 'image' && <img src={project.src} alt="" loading="lazy" />}
              {project.type === 'audio' && <AudioVisual />}
            </div>
          </div>
        </motion.div>

        <motion.div
          className="text-zone"
          style={{ y: yText }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-80px" }}
        >
          <span className="cat-tag">{project.category}</span>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <motion.button
            type="button"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            onClick={() => onOpen(project)}
          >
            <LuPlay aria-hidden="true" />
            {t.projects.caseStudy}
          </motion.button>
        </motion.div>
      </div>
    </article>
  );
};

const Projects = () => {
  const { t } = useI18n();
  const items = projects.map((p, i) => ({ ...p, ...t.projects.items[i] }));
  const containerRef = useRef();
  const [selectedProject, setSelectedProject] = useState(null);
  const closeLightbox = useCallback(() => setSelectedProject(null), []);

  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] });
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <div className="portfolio-scope" ref={containerRef}>
      <div className="portfolio-header">
        <div className="header-content">
          <SplitWords as="h2" text={t.projects.title} />
          <motion.div style={{ scaleX }} className="scroll-progress" />
        </div>
      </div>

      <div className="projects-list">
        {items.map((p, i) => (
          <SingleProject key={p.id} project={p} onOpen={setSelectedProject} reverse={i % 2 === 1} />
        ))}
      </div>

      <AnimatePresence>
        {selectedProject && (
          <Lightbox project={items.find((p) => p.id === selectedProject.id)} onClose={closeLightbox} />
        )}
      </AnimatePresence>
    </div>
  );
};

export default Projects;
