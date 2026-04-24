// import React from 'react';
// import { motion } from 'framer-motion';
// import "./About.scss";

// const About = () => {
//   // Variantes pour l'apparition de la liste
//   const containerVariants = {
//     animate: {
//       transition: {
//         staggerChildren: 0.2
//       }
//     }
//   };

//   const itemVariants = {
//     initial: { opacity: 0, x: 30 },
//     animate: { opacity: 1, x: 0, transition: { duration: 0.5 } }
//   };

//   return (
//     <section className="about">
//       <div className="container">
//         {/* Titre avec barre jaune */}
//         <div className="header">
//           <motion.h2 
//             initial={{ opacity: 0, y: -20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//           >
//             A propos de nous
//           </motion.h2>
//           <motion.div 
//             className="underline"
//             initial={{ width: 0 }}
//             whileInView={{ width: "150px" }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//           />
//         </div>

//         <div className="content">
//           {/* CÔTÉ GAUCHE : IMAGE + BADGE */}
//           <motion.div 
//             className="imageWrapper"
//             initial={{ opacity: 0, scale: 0.9 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//           >
//             <div className="circle">
//               {/* Remplace par le chemin de ton image réelle */}
//               <img src="/mypic.jpg" alt="M. Boris Landry" />
//             </div>
            
//             <motion.div 
//               className="directorBadge"
//               initial={{ x: 50, opacity: 0 }}
//               whileInView={{ x: 0, opacity: 1 }}
//               transition={{ delay: 0.6 }}
//               viewport={{ once: true }}
//             >
//               <h4>M. Boris Landry</h4>
//               <p>Directeur de CMCT</p>
//             </motion.div>
//           </motion.div>

//           {/* CÔTÉ DROIT : TEXTE */}
//           <div className="textWrapper">
//             <h3>Central Media Communication Technologies (CMCT) :</h3>
//             <p className="intro">
//               CMCT est un écosystème numérique intégré qui combine information, 
//               créativité et innovation technologique à travers trois pôles d'excellence :
//             </p>

//             <motion.ul 
//               variants={containerVariants}
//               initial="initial"
//               whileInView="animate"
//               viewport={{ once: true }}
//             >
//               <motion.li variants={itemVariants}>
//                 <strong>1. Pôle MÉDIA (L'Information) :</strong> Couvre l'actualité à toutes les échelles via L'Étudiant (jeunesse), National Post (territoire national) et Nouvelle Ère (espace francophone).
//               </motion.li>
              
//               <motion.li variants={itemVariants}>
//                 <strong>2. Pôle COMMUNICATION (Créativité & Formation) :</strong> Se concentre sur l'image et la réussite avec Camigra (audiovisuel et graphisme) ainsi que Iric PLUS et Esstic PLUS (préparation aux concours d'élite).
//               </motion.li>

//               <motion.li variants={itemVariants}>
//                 <strong>3. Pôle TECH (Innovation) :</strong> Porté par Makemba, il offre des solutions informatiques sur mesure et des analyses de données au service de la stratégie de communication.
//               </motion.li>
//             </motion.ul>

//             <motion.p 
//               className="highlight"
//               initial={{ opacity: 0 }}
//               whileInView={{ opacity: 1 }}
//               transition={{ delay: 1 }}
//               viewport={{ once: true }}
//             >
//               <span>L'atout majeur :</span> CMCT ne se contente pas de diffuser du contenu, 
//               mais utilise la technologie et la donnée pour maximiser l'impact et la visibilité de ses messages.
//             </motion.p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;

import React from 'react';
import { motion } from 'framer-motion';
import "./About.scss";

const About = () => {
  const containerVariants = {
    animate: {
      transition: { staggerChildren: 0.15, delayChildren: 0.3 }
    }
  };

  const itemVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section className="about-section">
      <div className="container">
        <header className="about-header">
          <motion.h2 
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            À propos de nous
          </motion.h2>
          <motion.div 
            className="decorative-bar"
            initial={{ width: 0 }}
            whileInView={{ width: "100px" }}
            transition={{ duration: 1, delay: 0.4 }}
            viewport={{ once: true }}
          />
        </header>

        <div className="about-grid">
          {/* VISUAL BLOCK */}
          <motion.div 
            className="visual-block"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="image-container">
              <img src="/mypic.jpg" alt="Directeur CMCT" />
              <div className="accent-circle"></div>
            </div>
            
            <motion.div 
              className="floating-badge"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.8, type: "spring", stiffness: 100 }}
              viewport={{ once: true }}
            >
              <span className="name">M. Boris Landry</span>
              <span className="role">Directeur Général, CMCT</span>
            </motion.div>
          </motion.div>

          {/* TEXT BLOCK */}
          <div className="text-block">
            <motion.h3
               initial={{ opacity: 0 }}
               whileInView={{ opacity: 1 }}
               viewport={{ once: true }}
            >
              Un écosystème numérique au service de votre <span>influence</span>.
            </motion.h3>
            
            <p className="description">
              Central Media Communication Technologies (CMCT) fusionne l'expertise médiatique 
              traditionnelle et la puissance de la Data pour redéfinir les standards de la communication.
            </p>

            <motion.div 
              className="poles-list"
              variants={containerVariants}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              {[
                { title: "Pôle MÉDIA", desc: "L'Étudiant, National Post et Nouvelle Ère : une couverture 360° de l'information stratégique." },
                { title: "Pôle COMMUNICATION", desc: "Expertise audiovisuelle avec Camigra et accompagnement d'élite (Iric PLUS / Esstic PLUS)." },
                { title: "Pôle TECH", desc: "Solutions sur mesure avec Makemba, alliant développement SI et Business Intelligence." }
              ].map((pole, idx) => (
                <motion.div key={idx} className="pole-item" variants={itemVariants}>
                  <div className="icon-indicator" />
                  <div>
                    <strong>{pole.title}</strong>
                    <p>{pole.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.footer 
              className="about-footer"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              viewport={{ once: true }}
            >
              <p>
                <strong>L'atout majeur :</strong> Nous transformons la donnée brute en impact média 
                mesurable pour maximiser votre visibilité.
              </p>
            </motion.footer>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;