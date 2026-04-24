// import "./Navlogo.scss";
// import { motion } from "framer-motion";

// const Navlogo = () => {
//   return <div className="navlogo">
//     <div className="wrapper">
      
//       <motion.div 
//             className="infos"
//             style={ {  } }
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//         >
//            <img src="/journal l'Etudiant.jpg.jpeg" alt=""/>
//     </motion.div>

//     <motion.div 
//             className="infos"
//             style={ {  } }
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//         >
//            <img src="/Logo National Post.png" alt=""/>
//         </motion.div>

//         <motion.div 
//             className="infos"
//             style={ {  } }
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//         >
//            <img src="/Logo Camigra PNG.png" alt=""/>
//         </motion.div>

//         <motion.div 
//             className="infos"
//             style={ {  } }
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//         >
//            <img src="/IMG_2498.PNG" alt=""/>
//         </motion.div>

//         <motion.div 
//             className="infos"
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//         >
//            <img src="/Logo Makemba-03.jpg.jpeg" style={{width: 175, height:59, backgroundColor: "white" }} alt=""/>
//         </motion.div>

//         <motion.div 
//             className="infos"
//             style={ {  } }
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//         >
//            <img src="/IMG_3905.JPG.jpeg" alt=""/>
//         </motion.div>

//         <motion.div 
//             className="infos"
//             style={ {  } }
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//         >
//            <img src="/IMG_3906.PNG" style={{width: 85, height:60, backgroundColor: "white" }} alt=""/>
//         </motion.div>
//   </div> 
// </div>
    
// };

// export default Navlogo;

import "./Navlogo.scss";
import { motion } from "framer-motion";

const LOGOS = [
  { id: 1, src: "/Journal l'Etudiant.jpg.jpeg", alt: "L'Etudiant" },
  { id: 2, src: "/Logo National Post.png", alt: "National Post" },
  { id: 3, src: "/Logo Camigra PNG.png", alt: "Camigra" },
  { id: 4, src: "/IMG_2498.PNG", alt: "Partner 4" },
  { id: 5, src: "/logo.png", alt: "Makemba"
    // , customStyle: { width: 120, height: 45 } 
  },
  { id: 6, src: "/IMG_3905.JPG.jpeg", alt: "Partner 6" },
  { id: 7, src: "/IMG_3906.PNG", alt: "Partner 7", customStyle: { width: 85 } },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

const Navlogo = () => {
  return (
    <nav className="navlogo">
      <motion.div 
        className="wrapper"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {LOGOS.map((logo) => (
          <motion.div key={logo.id} className="logo-container" variants={itemVariants}>
            <img 
              src={logo.src} 
              alt={logo.alt} 
              style={logo.customStyle}
              loading="lazy"
            />
          </motion.div>
        ))}
      </motion.div>
    </nav>
  );
};

export default Navlogo;