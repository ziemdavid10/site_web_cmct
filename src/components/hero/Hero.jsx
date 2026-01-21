import React from 'react';
import './Hero.scss';
import { stagger } from 'framer-motion';
import { motion } from 'framer-motion';

const textVariants = {
  initial: { 
    opacity: 0, 
    x: -500, 
    },
  animate: { 
    opacity: 1, 
    x: 0, 
    transition: { 
        duration: 0.5,
        staggerChildren: 0.1
     } 
  },
  scrollButton: {
    opacity: 0, 
    y: 10, 
      transition: { 
          duration: 0.5,
          repeat: Infinity,
        //   repeatType: "mirror",
        //   ease: "easeInOut"
       } 
  }
};

const sliderVariants = {
  initial: { 
    x: 0, 
    },
  animate: {  
    x: "-220%",
    transition: { 
        duration: 20,
        repeat: Infinity,
        repeatType: "mirror",
        ease: "easeInOut"
     } 
  },
};

const Hero = () => {
  return (
    <div className="hero">
        <div className="wrapper">
            <motion.div 
                className="hero-content" 
                variants={textVariants}
                initial="initial"
                animate="animate"
                >
                <motion.h2 variants={textVariants}>ZIEM NGAM DAVID LOÏC</motion.h2>
                <motion.h1 variants={textVariants}>AI, Data & Cloud Engineer</motion.h1>
                <p>Your journey to excellence starts here.</p>
                <motion.div variants={textVariants} className="hero-buttons">
                    <motion.button variants={textVariants}>See the latest Works</motion.button>
                    <motion.button variants={textVariants}>Contact Me</motion.button>
                </motion.div>
                <motion.img variants={textVariants} animate="scrollButton"  src="/public/scroll.png" alt="" />
            </motion.div>
        </div>
        <motion.div 
            className="hero-slidingText" 
            variants={sliderVariants} 
            initial="initial" 
            animate="animate"
            >
            Jésus Rédempteur
        </motion.div>
        <div className="hero-image">
            <img src="/public/mypic.jpg" alt="" />
        </div>
    </div>
  );
};

export default Hero;