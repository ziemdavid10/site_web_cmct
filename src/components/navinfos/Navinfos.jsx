// import "./Navinfos.scss";
// import { motion } from "framer-motion";

// const Navinfos = () => {
//   return <div className="navinfos">
//     <div className="wrapper">
//         <motion.div 
//             className="infos"
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//         >
//           <img src="/public/mail.png" alt=""/>
//           <p>contact@cmct.cm</p>
//         </motion.div>
//         <motion.div 
//             className="infos"
//             style={ { marginLeft: "-560px" } }
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//         >
//            <img src="/public/phone.png" alt=""/>
//            <p>(237) 222 306 079 - 698 933 346 - 677 137 263</p>
          
//         </motion.div>
//         <motion.div 
//           className="social"
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//         >
//             <a href="https://www.linkedin.com/company/cmct-central-media-communication-technologies/"><img src="/public/linkedin.png" alt=""/></a>
//             <a href="https://www.facebook.com/share/17P8pYCrFd/?mibextid=wwXIfr"><img src="/public/facebook.png" alt=""/></a>
//         </motion.div>
//     </div>
//   </div>;
// };

// export default Navinfos;

import "./Navinfos.scss";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: -15 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
};

const Navinfos = () => {
  return (
    <div className="navinfos">
      <motion.div 
        className="wrapper"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="contact-group">
          <motion.div className="infos" variants={itemVariants}>
            <a href="mailto:contact@cmct.cm">
              <img src="/mail.png" alt="Email icon" />
              <span>contact@cmct.cm</span>
            </a>
          </motion.div>

          <motion.div className="infos" variants={itemVariants}>
            <a href="tel:+237222306079">
              <img src="/phone.png" alt="Phone icon" />
              {/* Le texte complet est masqué sur petit mobile pour l'esthétique */}
              <span className="phone-text">(237) 222 306 079 / 698 933 346</span>
            </a>
          </motion.div>
        </div>

        <motion.div className="social" variants={itemVariants}>
          <a href="https://www.linkedin.com/company/cmct-central-media-communication-technologies/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <img src="/linkedin.png" alt="LinkedIn" />
          </a>
          <a href="https://www.facebook.com/share/17P8pYCrFd/?mibextid=wwXIfr" target="_blank" rel="noreferrer" aria-label="Facebook">
            <img src="/facebook.png" alt="Facebook" />
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Navinfos;