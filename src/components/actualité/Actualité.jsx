import "./Actualité.scss";
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Actualites = () => {
  const [filter, setFilter] = useState('all');
  const [visibleCount, setVisibleCount] = useState(6); // Nombre d'articles affichés
  const [isPaused, setIsPaused] = useState(false);
  const scrollRef = useRef(null);
  const loaderRef = useRef(null);

  const sources = [
    { id: 'etudiant', name: "L'Étudiant", logo: "/public/Journal l'Etudiant.jpg.jpeg" },
    { id: 'national', name: "National Post", logo: "/public/Logo National Post.png" },
    { id: 'nouvelle', name: "Nouvelle Ère", logo: "/public/IMG_2498.PNG" },
  ];

  const articles = [
    {
      id: 1,
      source: 'etudiant',
      category: 'POLITIQUE',
      categoryColor: '#e63946',
      title: "Ernest Ouandié: un héros immortel dans l'histoire du Camer...",
      date: "15/02/2025",
      image: "/public/news1.jpg"
    },
    {
      id: 2,
      source: 'etudiant',
      category: 'SOCIETE',
      categoryColor: '#457b9d',
      title: "“j’étais en mbeng, je suis rentré” Ines NTSAMA",
      date: "15/02/2025",
      image: "/public/news1.jpg"
    },
    {
      id: 3,
      source: 'etudiant',
      category: 'CULTURE',
      categoryColor: '#ffbe0b',
      title: "Les pays où les camerounais peuvent aller sans demand...",
      date: "15/02/2025",
      image: "/public/news1.jpg"
    },
    { id: 4, source: 'national', category: 'ECONOMIE', categoryColor: '#1a1a1a', title: "Nouvelle réforme fiscale au Cameroun", date: "16/02/2025", image: "/public/news1.jpg" },
    { id: 5, source: 'nouvelle', category: 'TECH', categoryColor: '#007bff', title: "L'IA au service des médias francophones", date: "17/02/2025", image: "/public/news1.jpg" },
    { id: 6, source: 'etudiant', category: 'EDUCATION', categoryColor: '#2a9d8f', title: "Bourses d'études 2025: le guide", date: "18/02/2025", image: "/public/news1.jpg" },
    { id: 7, source: 'national', category: 'SANTE', categoryColor: '#d90429', title: "Lutte contre le paludisme: les avancées récentes", date: "19/02/2025", image: "/public/news1.jpg" },
    { id: 8, source: 'nouvelle', category: 'SPORT', categoryColor: '#f4a261', title: "Le football camerounais en pleine renaissance", date: "20/02/2025", image: "/public/news1.jpg" },
    { id: 9, source: 'etudiant', category: 'ENVIRONNEMENT', categoryColor: '#2a9d8f', title: "Initiatives écologiques des jeunes camerounais", date: "21/02/2025", image: "/public/news1.jpg" },
    { id: 10, source: 'national', category: 'CULTURE', categoryColor: '#ffbe0b', title: "Festival de Douala 2025 : un succès retentissant", date: "22/02/2025", image: "/public/news1.jpg" },
    { id: 11, source: 'nouvelle', category: 'SCIENCE', categoryColor: '#8338ec', title: "Découverte scientifique majeure en Afrique", date: "23/02/2025", image: "/public/news1.jpg" },
    { id: 12, source: 'etudiant', category: 'POLITIQUE', categoryColor: '#e63946', title: "Nouvelles alliances politiques au Cameroun", date: "24/02/2025", image: "/public/news1.jpg" },
    { id: 13, source: 'national', category: 'SOCIETE', categoryColor: '#457b9d', title: "Les défis de la migration au Cameroun", date: "25/02/2025", image: "/public/news1.jpg" },
    { id: 14, source: 'nouvelle', category: 'CULTURE', categoryColor: '#ffbe0b', title: "La renaissance du cinéma camerounais", date: "26/02/2025", image: "/public/news1.jpg" },
    { id: 15, source: 'etudiant', category: 'ECONOMIE', categoryColor: '#1a1a1a', title: "Le boom des startups au Cameroun", date: "27/02/2025", image: "/public/news1.jpg" },
    { id: 16, source: 'national', category: 'TECH', categoryColor: '#007bff', title: "L'impact de la tech sur l'éducation camerounaise", date: "28/02/2025", image: "/public/news1.jpg" },
        { id: 17, source: 'nouvelle', category: 'SANTE', categoryColor: '#d90429', title: "Nouvelles avancées médicales au Cameroun", date: "01/03/2025", image: "/public/news1.jpg" },
        { id: 18, source: 'etudiant', category: 'SPORT', categoryColor: '#f4a261', title: "Les exploits des athlètes camerounais", date: "02/03/2025", image: "/public/news1.jpg" },
        { id: 19, source: 'national', category: 'ENVIRONNEMENT', categoryColor: '#2a9d8f', title: "Les initiatives vertes au Cameroun", date: "03/03/2025", image: "/public/news1.jpg" },
        { id: 20, source: 'nouvelle', category: 'CULTURE', categoryColor: '#ffbe0b', title: "La musique camerounaise conquiert le monde", date: "04/03/2025", image: "/public/news1.jpg" },
  ];

  // 1. Logique du Slider Automatique
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        if (scrollLeft + clientWidth >= scrollWidth) {
          scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          scrollRef.current.scrollBy({ left: 350, behavior: 'smooth' });
        }
      }
    }, 4000);
    return () => clearInterval(interval);
  }, [isPaused]);

  // 2. Logique du Chargement Infini (Observer)
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && visibleCount < articles.length) {
        loadMore();
      }
    }, { threshold: 1.0 });

    if (loaderRef.current) observer.observe(loaderRef.current);
    return () => observer.disconnect();
  }, [visibleCount]);

  const loadMore = () => {
    setTimeout(() => { // Simulation délai réseau
      setVisibleCount(prev => Math.min(prev + 3, articles.length));
    }, 800);
  };






  const filteredArticles = articles 
    .filter(art => filter === 'all' || art.source === filter)
    .slice(0, visibleCount);

  return (
    <section className="actualites">
      <div className="container">
        {/* En-tête */}
        <header className="newsHeader">
          <motion.h4 
            initial={{ opacity: 0 }} 
            whileInView={{ opacity: 1 }}
            className="subtitle"
          >
            Actualités
          </motion.h4>
          <motion.h2 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            className="mainTitle"
          >
            Une section qui agrège les derniers articles <br />
            de <span>L’Étudiant, National Post et Nouvelle Ère.</span>
          </motion.h2>
          <div className="yellowDivider"></div>
        </header>

        {/* Filtres (Logos) */}
        <div className="filterBar">
          <div className="filterWrapper">
            {sources.map((src) => (
              <motion.div
                key={src.id}
                className={`filterItem ${filter === src.id ? 'active' : ''}`}
                onClick={() => setFilter(filter === src.id ? 'all' : src.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <img src={src.logo} alt={src.name} />
                {filter === src.id && (
                  <motion.div layoutId="outline" className="activeOutline" />
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Grille d'articles */}
        <div 
          className="scrollContainer" 
          ref={scrollRef}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
            <motion.div layout className="articlesGrid">
          <AnimatePresence mode='popLayout'>
            {filteredArticles.map((article) => (
              <motion.article
                key={article.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="articleCard"
              >
                <div className="imageContainer">
                  <img src={article.image} alt={article.title} />
                  <div className="sourceTag">{article.source}</div>
                </div>
                <div className="articleContent">
                  <span className="category" style={{ color: article.categoryColor }}>
                    {article.category}
                  </span>
                  <h3>{article.title}</h3>
                  <div className="dateInfo">
                    <span className="icon">📅</span>
                    {article.date}
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
        </div>

        {/* Bouton Voir Plus */}
        {visibleCount < articles.length && (
          <div className="actions">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={loadMore}
              className="btnMore"
            >
              Voir plus d'articles
            </motion.button>
          </div>
        )}

        {/* Element invisible pour le chargement infini */}
        <div ref={loaderRef} className="infinite-loader">
          {visibleCount < articles.length && <div className="spinner"></div>}
        </div>



      </div>
    </section>
  );
};

export default Actualites;