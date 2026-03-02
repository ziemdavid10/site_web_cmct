import { motion } from "framer-motion";
import "./Footer.scss";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const containerVariants = {
    initial: { opacity: 0, y: 50 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <motion.footer
      className="footer"
      variants={containerVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
    >
      <div className="footer-content">
        <motion.div className="footer-section" variants={itemVariants}>
          <img src="/LOGO CMCT.png" alt="CMCT Logo" className="footer-logo" />
          <p className="footer-description">
            Central Media Communication Technologies - Votre partenaire en communication et technologies médias.
          </p>
          <div className="footer-social">
            <a href="https://www.linkedin.com/company/cmct-central-media-communication-technologies/" target="_blank" rel="noopener noreferrer">
              <img src="/public/linkedin.png" alt="LinkedIn" />
            </a>
            <a href="https://www.facebook.com/share/17P8pYCrFd/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer">
              <img src="/public/facebook.png" alt="Facebook" />
            </a>
          </div>
        </motion.div>

        <motion.div className="footer-section" variants={itemVariants}>
          <h3>Navigation</h3>
          <ul>
            <li><a href="#Homepage">Accueil</a></li>
            <li><a href="#Services">Services</a></li>
            <li><a href="#About">À propos</a></li>
            <li><a href="#Actualites">Actualités</a></li>
            <li><a href="#Contact">Contact</a></li>
          </ul>
        </motion.div>

        <motion.div className="footer-section" variants={itemVariants}>
          <h3>Services</h3>
          <ul>
            <li>Production Audiovisuelle</li>
            <li>Communication Digitale</li>
            <li>Événementiel</li>
            <li>Conseil en Communication</li>
          </ul>
        </motion.div>

        <motion.div className="footer-section" variants={itemVariants}>
          <h3>Contact</h3>
          <div className="footer-contact">
            <div className="contact-item">
              <img src="/public/mail.png" alt="Email" />
              <span>contact@cmct.cm</span>
            </div>
            <div className="contact-item">
              <img src="/public/phone.png" alt="Phone" />
              <span>(237) 222 306 079</span>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div className="footer-bottom" variants={itemVariants}>
        <p>&copy; {currentYear} CMCT. Tous droits réservés.</p>
        <div className="footer-links">
          <a href="#privacy">Politique de confidentialité</a>
          <span>|</span>
          <a href="#terms">Conditions d'utilisation</a>
        </div>
      </motion.div>
    </motion.footer>
  );
};

export default Footer;
