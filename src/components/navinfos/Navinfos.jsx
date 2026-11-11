import "./Navinfos.scss";
import { motion } from "framer-motion";
import { LuMail, LuPhone, LuMapPin } from "react-icons/lu";
import { FaLinkedinIn, FaFacebookF } from "react-icons/fa6";
import { SOCIAL, CONTACT_EMAIL, PHONES, LANDLINE } from "../../data/site.js";
import { useI18n } from "../../i18n/context.js";

// Bandeau supérieur : coordonnées rapides + réseaux sociaux
const Navinfos = () => {
  const { t } = useI18n();

  return (
    <motion.div
      className="navinfos"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      <div className="wrapper">
        <div className="contact-group">
          <span className="infos hide-tablet">
            <LuMapPin aria-hidden="true" />
            <span>{t.topbar.location}</span>
          </span>
          <a href={`mailto:${CONTACT_EMAIL}`} className="infos" aria-label={CONTACT_EMAIL}>
            <LuMail aria-hidden="true" />
            <span className="hide-small">{CONTACT_EMAIL}</span>
          </a>
          <a href={LANDLINE.href} className="infos hide-mobile">
            <span>{LANDLINE.display}</span>
          </a>
          <a href={PHONES[0].href} className="infos">
            <LuPhone aria-hidden="true" />
            <span>{PHONES[0].display}</span>
          </a>
        </div>

        <div className="social">
          <motion.a whileHover={{ y: -2 }} href={SOCIAL.linkedin} target="_blank" rel="noreferrer" aria-label={t.topbar.linkedin}>
            <FaLinkedinIn />
          </motion.a>
          <motion.a whileHover={{ y: -2 }} href={SOCIAL.facebook} target="_blank" rel="noreferrer" aria-label={t.topbar.facebook}>
            <FaFacebookF />
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
};

export default Navinfos;
