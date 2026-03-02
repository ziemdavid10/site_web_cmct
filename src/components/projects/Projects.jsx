import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from 'framer-motion';
import { createPortal } from 'react-dom';
import './Projects.scss';

const projects = [
  {
    id: 1,
    title: "Campagne Vidéo Événementielle",
    category: "Vidéo",
    type: "video",
    src: "https://vjs.zencdn.net/v/oceans.mp4",
    device: "tv",
    description: "Production vidéo 4K captivante pour le festival international des arts numériques."
  },
  {
    id: 2,
    title: "Application Mobile Interactive",
    category: "Digital",
    type: "image",
    src: "/public/news1.jpg",
    device: "iphone",
    description: "Expérience utilisateur immersive redéfinissant la consommation de l'information mobile."
  },
  {
    id: 3,
    title: "Podcast Narratif : Nouvelle Ère",
    category: "Audio",
    type: "audio",
    src: "/audio_projet.mp3",
    device: "tablet",
    description: "Série audio immersive explorant les mutations sociétales du 21ème siècle."
  }
];

// --- COMPOSANT LIGHTBOX (MODAL) ---
const Lightbox = ({ project, onClose }) => {
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
        initial={{ scale: 0.8, y: 50 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.8, y: 50 }}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="close-btn" onClick={onClose}>&times;</button>
        <div className="media-container">
          {project.type === 'video' && <video src={project.src} autoPlay controls />}
          {project.type === 'image' && <img src={project.src} alt="" />}
          {project.type === 'audio' && <audio src={project.src} controls autoPlay />}
        </div>
        <div className="info">
          <h2>{project.title}</h2>
          <p>{project.description}</p>
        </div>
      </motion.div>
    </motion.div>,
    document.body
  );
};

// --- COMPOSANT ARTICLE UNIQUE ---
const SingleProject = ({ project, onOpen }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const yImage = useTransform(scrollYProgress, [0, 1], [-150, 150]);
  const yText = useTransform(scrollYProgress, [0, 1], [150, -150]);

  return (
    <section className="project-item-section" ref={ref}>
      <div className="wrapper">
        <motion.div className={`device-preview ${project.device}`} style={{ y: yImage }}>
          <div className="hardware-frame">
            <div className="screen-content">
              {project.type === 'video' ? <video src={project.src} muted autoPlay loop /> : <img src={project.src} alt="" />}
            </div>
          </div>
        </motion.div>

        <motion.div className="text-zone" style={{ y: yImage }}>
          <span className="cat-tag">{project.category}</span>
          <h2>{project.title}</h2>
          <p>{project.description}</p>
          <motion.button 
            whileHover={{ scale: 1.05, backgroundColor: "#fff", color: "#000" }} 
            onClick={() => onOpen(project)}
          >
            Découvrir le projet
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

// --- COMPOSANT PRINCIPAL ---
const Projects = () => {
  const containerRef = useRef();
  const [selectedProject, setSelectedProject] = useState(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <div className="portfolio-scope" ref={containerRef}>
      <div className="sticky-header">
        <h1>Nos Réalisations</h1>
        {/* <motion.div style={{ scaleX }} className="scroll-progress" /> */}
      </div>

      <div className="projects-list">
        {projects.map(p => (
          <SingleProject key={p.id} project={p} onOpen={setSelectedProject} />
        ))}
      </div>

      <AnimatePresence>
        {selectedProject && (
          <Lightbox 
            project={selectedProject} 
            onClose={() => setSelectedProject(null)} 
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default Projects;