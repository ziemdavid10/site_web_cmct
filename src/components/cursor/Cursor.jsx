import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";
import "./Cursor.scss";

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  
  // Utilisation de useSpring pour un mouvement fluide et organique (physique)
  const springConfig = { damping: 25, stiffness: 150 };
  const cursorX = useSpring(0, springConfig);
  const cursorY = useSpring(0, springConfig);

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX - 16); // Centrer le curseur (32px / 2)
      cursorY.set(e.clientY - 16);
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, [cursorX, cursorY]);

  return (
    <>
      {/* Curseur principal (Cercle fluide) */}
      <motion.div 
        className="cursor-outline" 
        style={{ 
          x: cursorX, 
          y: cursorY 
        }}
      />
      {/* Point central (Réaction immédiate) */}
      <motion.div 
        className="cursor-dot"
        animate={{ x: position.x - 2, y: position.y - 2 }}
        transition={{ type: "tween", ease: "linear", duration: 0 }}
      />
    </>
  );
};

export default Cursor;