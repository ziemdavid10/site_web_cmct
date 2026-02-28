import "./Navlogo.scss";
import { motion } from "framer-motion";

const Navlogo = () => {
  return <div className="navlogo">
    <div className="wrapper">
      
      <motion.div 
            className="infos"
            style={ {  } }
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
           <img src="/public/journal l'Etudiant.jpg.jpeg" alt=""/>
    </motion.div>

    <motion.div 
            className="infos"
            style={ {  } }
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
           <img src="/public/Logo National Post.png" alt=""/>
        </motion.div>

        <motion.div 
            className="infos"
            style={ {  } }
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
           <img src="/public/Logo Camigra PNG.png" alt=""/>
        </motion.div>

        <motion.div 
            className="infos"
            style={ {  } }
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
           <img src="/public/IMG_2498.PNG" alt=""/>
        </motion.div>

        <motion.div 
            className="infos"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
           <img src="/public/Logo Makemba-03.jpg.jpeg" style={{width: 175, height:59, backgroundColor: "white" }} alt=""/>
        </motion.div>

        <motion.div 
            className="infos"
            style={ {  } }
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
           <img src="/public/IMG_3905.JPG.jpeg" alt=""/>
        </motion.div>

        <motion.div 
            className="infos"
            style={ {  } }
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
           <img src="/public/IMG_3906.PNG" style={{width: 85, height:60, backgroundColor: "white" }} alt=""/>
        </motion.div>
  </div> 
</div>
    
};

export default Navlogo;