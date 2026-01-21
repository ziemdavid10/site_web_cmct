import "./Navbar.scss";
import { motion } from "framer-motion";
import Sidebar from "../sidebar/Sidebar";


const Navbar = () => {
  return <div className="navbar">
    {/* sidebar */}
    <div className="wrapper">
        <motion.span 
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          ZIEM David
        </motion.span>
        <div className="social">
            <a href="#"><img src="/public/linkedin.png" alt=""/></a>
            <a href="#"><img src="/public/github.png" alt=""/></a>
            <a href="#"><img src="/public/instagram.png" alt=""/></a>
            <a href="#"><img src="/public/gitlab.png" alt=""/></a>
        </div>
    </div>
  </div>
};

export default Navbar;
