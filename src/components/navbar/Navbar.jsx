import "./Navbar.scss";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const textVariants = {
  initial: { opacity: 0, x: -500 },
  animate: { 
    opacity: 1, 
    x: 0, 
    transition: { duration: 0.5, staggerChildren: 0.1 } 
  },
  dropdownButton: {
    opacity: 1, // Corrigé de 0 à 1 pour être visible
    y: [0, 5, 0], // Création d'un petit mouvement de haut en bas
    transition: { duration: 2, repeat: Infinity }
  }
};

const Navbar = () => {
  const items = ["Homepage", "Services", "Projects", "About", "Actualité", "Contact"];

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50); // Ajustez la valeur selon vos besoins
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div className="navbar"
    style={{ position: "fixed", top: 100, left: 0, right: 0 }} // Setup CSS
    initial={{ y: 20 }} // Position initiale sur la Homepage
    animate={{ y: isScrolled ? -100 : 20 }} // Passe de y à y + 20 au scroll
    transition={{ duration: 0.4, ease: "easeInOut" }}
    
    >
      <div className="wrapper">
        <motion.span 
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* Note: Enlever /public/ du chemin */}
          <img src="/LOGO CMCT.png" alt="Logo"/>
        </motion.span>

        <div className="menu">
          {items.map((item) => (
            item === "Services" ? (
              <motion.a 
                href={`#${item}`} 
                key={item} 
                // style={{ color: 'gold', display: 'flex', alignItems: 'center', gap: '5px' }} 
                variants={textVariants}
                whileHover={{ scale: 1.1 }} 
                whileTap={{ scale: 0.95 }}
              >
                {item} 
                <motion.img 
                  animate="dropdownButton" 
                  variants={textVariants} 
                  src="/dropdownButton.png" 
                  alt="" 
                />
              </motion.a>
            ) : (
              <motion.a 
                href={`#${item}`} 
                key={item} 
                variants={textVariants} 
                whileHover={{ scale: 1.1 }} 
                whileTap={{ scale: 0.95 }}
              >
                {item}
              </motion.a>
            )
          ))} 
        </div>
      </div>
    </motion.div>
  );
};

export default Navbar;