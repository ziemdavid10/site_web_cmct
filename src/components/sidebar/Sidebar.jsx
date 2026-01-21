import { useState } from "react";
import "./Sidebar.scss";
import Links from "./links/Links.jsx";
import ToggleButton from "./toggleButton/ToggleButton.jsx";
import { motion } from "framer-motion";

const Sidebar = () => {
    const [open, setOpen] = useState(false);    

    const variants = {
        open: { 
            // opacity: 1, x: 0
            clipPath: "circle(1500px at 40px 40px)",
            // x: 0,
            transition: { 
                type: "spring", 
                stiffness: 20, 
                restDelta: 2 
            }, 
             },
        closed: { 
            // opacity: 0, x: "-100%" 
            clipPath: "circle(30px at 40px 40px)",
            // x: "-100%",
            transition: { 
                delay: 0.5, 
                type: "spring", 
                stiffness: 400, 
                damping: 40 
            },
        },
    };
  return <motion.div className="sidebar" animate={open ? "open" : "closed"} 
//   variants={variants} transition={{ duration: 0.5 }}
  >
    {/* sidebar content */}
    <motion.div className="bg" 
    // animate={open ? "open" : "closed"} 
    variants={variants} 
    // transition={{ duration: 0.5 }}
    >
        <Links />
    </motion.div>
    <ToggleButton setOpen={setOpen} />
  </motion.div>;
};

export default Sidebar;