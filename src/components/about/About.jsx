import React from 'react';
import { motion } from 'framer-motion';
import "./About.scss";

const About = () => {
  // Variantes pour l'apparition de la liste
  const containerVariants = {
    animate: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    initial: { opacity: 0, x: 30 },
    animate: { opacity: 1, x: 0, transition: { duration: 0.5 } }
  };

  return (
    <section className="about">
      <div className="container">
        {/* Titre avec barre jaune */}
        <div className="header">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            A propos de nous
          </motion.h2>
          <motion.div 
            className="underline"
            initial={{ width: 0 }}
            whileInView={{ width: "150px" }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          />
        </div>

        <div className="content">
          {/* CÔTÉ GAUCHE : IMAGE + BADGE */}
          <motion.div 
            className="imageWrapper"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="circle">
              {/* Remplace par le chemin de ton image réelle */}
              <img src="/mypic.jpg" alt="M. Boris Landry" />
            </div>
            
            <motion.div 
              className="directorBadge"
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
              viewport={{ once: true }}
            >
              <h4>M. Boris Landry</h4>
              <p>Directeur de CMCT</p>
            </motion.div>
          </motion.div>

          {/* CÔTÉ DROIT : TEXTE */}
          <div className="textWrapper">
            <h3>Central Media Communication Technologies (CMCT) :</h3>
            <p className="intro">
              CMCT est un écosystème numérique intégré qui combine information, 
              créativité et innovation technologique à travers trois pôles d'excellence :
            </p>

            <motion.ul 
              variants={containerVariants}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <motion.li variants={itemVariants}>
                <strong>1. Pôle MÉDIA (L'Information) :</strong> Couvre l'actualité à toutes les échelles via L'Étudiant (jeunesse), National Post (territoire national) et Nouvelle Ère (espace francophone).
              </motion.li>
              
              <motion.li variants={itemVariants}>
                <strong>2. Pôle COMMUNICATION (Créativité & Formation) :</strong> Se concentre sur l'image et la réussite avec Camigra (audiovisuel et graphisme) ainsi que Iric PLUS et Esstic PLUS (préparation aux concours d'élite).
              </motion.li>

              <motion.li variants={itemVariants}>
                <strong>3. Pôle TECH (Innovation) :</strong> Porté par Makemba, il offre des solutions informatiques sur mesure et des analyses de données au service de la stratégie de communication.
              </motion.li>
            </motion.ul>

            <motion.p 
              className="highlight"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 1 }}
              viewport={{ once: true }}
            >
              <span>L'atout majeur :</span> CMCT ne se contente pas de diffuser du contenu, 
              mais utilise la technologie et la donnée pour maximiser l'impact et la visibilité de ses messages.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;