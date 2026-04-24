// import React from 'react';
// import './Hero.scss';
// import { color, stagger } from 'framer-motion';
// import { motion } from 'framer-motion';

// const textVariants = {
//   initial: { 
//     opacity: 0, 
//     x: -500, 
//     },
//   animate: { 
//     opacity: 1, 
//     x: 0, 
//     transition: { 
//         duration: 0.5,
//         staggerChildren: 0.1
//      } 
//   },
//   scrollButton: {
//     opacity: 0, 
//     y: 10, 
//       transition: { 
//           duration: 0.5,
//           repeat: Infinity,
//         //   repeatType: "mirror",
//         //   ease: "easeInOut"
//        } 
//   }
// };

// const sliderVariants = {
//   initial: { 
//     x: 0, 
//     },
//   animate: {  
//     x: "-220%",
//     transition: { 
//         duration: 20,
//         repeat: Infinity,
//         repeatType: "mirror",
//         ease: "easeInOut"
//      } 
//   },
// };

// const Hero = () => {
//   return (
//     <div className="hero" style={{ backgroundImage: `url(${'../../../public/industrial-designers-working-3d-model.jpg'})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
//         <div className="wrapper">
//             <motion.div 
//                 className="hero-content" 
//                 variants={textVariants}
//                 initial="initial"
//                 animate="animate"
//                 >
//                 <motion.h2 variants={textVariants}>L'expertise <span style={{ color:"red" }}>média</span>, 
//                                                   <br></br>la <span style={{ color:"gold" }}>puissance</span> de la Tech, l'impact de <span style={{ color:"#324986" }}>communication</span></motion.h2>
//                 <p>Un écosystème unique pour informer, former et transformer votre présence digitale à travers nos 3 pôles d'excellence</p>
//                 <motion.div variants={textVariants} className="hero-buttons">
//                     <motion.button variants={textVariants}>commencer</motion.button>
//                     {/* <motion.button variants={textVariants}>Contact Me</motion.button> */}
//                 </motion.div>
//                 <motion.img variants={textVariants} animate="scrollButton"  src="/public/scroll.png" alt="" />
//             </motion.div>
//         </div>
//         <motion.div 
//             className="hero-slidingText" 
//             variants={sliderVariants} 
//             initial="initial" 
//             animate="animate"
//             >
//             Central Media Communication Technologies
//         </motion.div>
//         {/* <div className="hero-image">
//             <img src="/public/mypic.jpg" alt="" />
//         </div> */}
//     </div>
//   );
// };

// export default Hero;

import React from 'react';
import './Hero.scss';
import { motion } from 'framer-motion';

const textVariants = {
  initial: { opacity: 0, x: -50 }, // -500 est trop brusque, -50 est plus élégant
  animate: { 
    opacity: 1, 
    x: 0, 
    transition: { duration: 0.8, staggerChildren: 0.2, ease: "easeOut" } 
  },
  scrollButton: {
    opacity: [0, 1, 0],
    y: [0, 10, 0],
    transition: { duration: 2, repeat: Infinity, ease: "easeInOut" }
  }
};

const sliderVariants = {
  initial: { x: "0%" },
  animate: {  
    x: "-100%", // Ajusté pour un défilement plus fluide
    transition: { 
      duration: 30, // Plus lent = plus premium
      repeat: Infinity,
      repeatType: "loop", // "loop" est préférable pour un texte qui défile
      ease: "linear"
    } 
  },
};

const Hero = () => {
  return (
    <section className="hero">
      {/* Background avec overlay pour la lisibilité */}
      <div className="hero-background">
        <div className="overlay"></div>
        <img src="/industrial-designers-working-3d-model.jpg" alt="Background" />
      </div>

      <div className="wrapper">
        <motion.div 
          className="hero-content" 
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h1 variants={textVariants}>
            L'expertise <span className="text-media">média</span>, <br />
            la <span className="text-power">puissance</span> de la Tech, <br />
            l'impact de <span className="text-comm">communication</span>
          </motion.h1>

          <motion.p variants={textVariants}>
            Un écosystème unique pour informer, former et transformer votre 
            présence digitale à travers nos 3 pôles d'excellence.
          </motion.p>

          <motion.div variants={textVariants} className="hero-buttons">
            <button className="btn-primary">Découvrir notre expertise</button>
            <button className="btn-secondary">Nos projets</button>
          </motion.div>

          <motion.div className="scroll-indicator" variants={textVariants} animate="scrollButton">
             <img src="/scroll.png" alt="Scroll icon" />
          </motion.div>
        </motion.div>
      </div>

      <motion.div 
        className="hero-slidingText" 
        variants={sliderVariants} 
        initial="initial" 
        animate="animate"
      >
        Central Media Communication Technologies — CMCT Group — Innovation & Excellence —
      </motion.div>
    </section>
  );
};

export default Hero;