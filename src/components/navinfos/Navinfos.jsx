import "./Navinfos.scss";
import { motion } from "framer-motion";

const Navinfos = () => {
  return <div className="navinfos">
    <div className="wrapper">
        <motion.div 
            className="infos"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <img src="/public/mail.png" alt=""/>
          <p>contact@cmct.cm</p>
        </motion.div>
        <motion.div 
            className="infos"
            style={ { marginLeft: "-560px" } }
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
           <img src="/public/phone.png" alt=""/>
           <p>(237) 222 306 079 - 698 933 346 - 677 137 263</p>
          
        </motion.div>
        <motion.div 
          className="social"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
            <a href="https://www.linkedin.com/company/cmct-central-media-communication-technologies/"><img src="/public/linkedin.png" alt=""/></a>
            <a href="https://www.facebook.com/share/17P8pYCrFd/?mibextid=wwXIfr"><img src="/public/facebook.png" alt=""/></a>
        </motion.div>
    </div>
  </div>;
};

export default Navinfos;