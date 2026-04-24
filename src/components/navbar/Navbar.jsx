// import "./Navbar.scss";
// import { motion } from "framer-motion";
// import { useState, useEffect } from "react";

// const textVariants = {
//   initial: { opacity: 0, x: -500 },
//   animate: { 
//     opacity: 1, 
//     x: 0, 
//     transition: { duration: 0.5, staggerChildren: 0.1 } 
//   },
//   dropdownButton: {
//     opacity: 1, // Corrigé de 0 à 1 pour être visible
//     y: [0, 5, 0], // Création d'un petit mouvement de haut en bas
//     transition: { duration: 2, repeat: Infinity }
//   }
// };

// const Navbar = () => {
//   const items = ["Homepage", "Services", "Projects", "About", "Actualités", "Contact"];

//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isInProjects, setIsInProjects] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50);
      
//       const projectsSection = document.getElementById('Projects');
//       if (projectsSection) {
//         const rect = projectsSection.getBoundingClientRect();
//         setIsInProjects(rect.top <= 100 && rect.bottom > 100);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <motion.div className={`navbar ${isInProjects ? 'projects-navbar' : ''}`}
//     style={{ position: "fixed", top: 100, left: 0, right: 0 }} // Setup CSS
//     initial={{ y: 20 }} // Position initiale sur la Homepage
//     animate={{ y: isScrolled ? -100 : 20 }} // Passe de y à y + 20 au scroll
//     transition={{ duration: 0.4, ease: "easeInOut" }}
    
//     >
//       <div className="wrapper">
//         <motion.span 
//           initial={{ opacity: 0, scale: 0.5 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.5 }}
//         >
//           {/* Note: Enlever /public/ du chemin */}
//           <img src="/LOGO CMCT.png" alt="Logo"/>
//         </motion.span>

//         <div className="menu">
//           {items.map((item) => (
//             item === "Services" ? (
//               <motion.a 
//                 href={`#${item}`} 
//                 key={item} 
//                 // style={{ color: 'gold', display: 'flex', alignItems: 'center', gap: '5px' }} 
//                 variants={textVariants}
//                 whileHover={{ scale: 1.1 }} 
//                 whileTap={{ scale: 0.95 }}
//               >
//                 {item} 
//                 <motion.img 
//                   animate="dropdownButton" 
//                   variants={textVariants} 
//                   src="/dropdownButton.png" 
//                   alt="" 
//                 />
//               </motion.a>
//             ) : (
//               <motion.a 
//                 href={`#${item}`} 
//                 key={item} 
//                 variants={textVariants} 
//                 whileHover={{ scale: 1.1 }} 
//                 whileTap={{ scale: 0.95 }}
//               >
//                 {item}
//               </motion.a>
//             )
//           ))} 
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// export default Navbar;

import "./Navbar.scss";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const textVariants = {
  initial: { opacity: 0, y: -10 },
  animate: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.5, staggerChildren: 0.1 } 
  },
  dropdownButton: {
    y: [0, 3, 0],
    transition: { duration: 2, repeat: Infinity, ease: "easeInOut" }
  }
};

const Navbar = () => {
  const items = ["Homepage", "Services", "Projects", "About", "Actualités", "Contact"];
  const [isInProjects, setIsInProjects] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const projectsSection = document.getElementById('Projects');
      if (projectsSection) {
        const rect = projectsSection.getBoundingClientRect();
        setIsInProjects(rect.top <= 100 && rect.bottom > 100);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav 
      className={`navbar ${isInProjects ? 'projects-navbar' : ''}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <div className="wrapper">
        <motion.div 
          className="logo-container"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <img src="/LOGO CMCT.png" alt="CMCT Logo" />
        </motion.div>

        <motion.div 
          className="menu"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          {items.map((item) => (
            <motion.a 
              href={`#${item}`} 
              key={item} 
              className="menu-item"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              {item}
              {item === "Services" && (
                <motion.img 
                  animate="dropdownButton" 
                  variants={textVariants} 
                  src="/dropdownButton.png" 
                  className="icon-dropdown"
                  alt="" 
                />
              )}
            </motion.a>
          ))} 
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navbar;