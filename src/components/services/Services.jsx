import { useRef, useState } from "react";
import "./Services.scss" 
import { motion, stagger, useInView } from "framer-motion"


const variants = {
    initial: {
        x: -500,
        y: 100,
        opacity: 0
    },
    animate: {
        x: 0,
        y: 0,
        opacity: 1,
        transition: { 
            duration: 1, 
            staggerChildren: 0.1,  
        },
    },
};
const Services = () =>  {

    const services = [
        {
            id: 1,
            icon: "/public/media.png",
            title: "Média",
            desc: "Une couverture médiatique complète,\nde l'étudiant au monde francophone...",
        },
        {
            id: 2,
            icon: "/public/communication.png",
            title: "Communication",
            desc: "Nous façonnons votre image \n et préparons votre avenir.",
        },
        {
            id: 3,
            icon: "/public/tech.png",
            title: "Tech",
            desc: "La technologie au service \n des nouveaux médias.",
        },
    ]

    const media = [
        {
            id: 1,
            icon: "/public/Journal l'Etudiant.jpg.jpeg",
            lien: "https://www.facebook.com/CMCT.Cameroun",
            desc: "Le guide de référence pour l'actualité \n jeunesse et estudiantine.",
            boutontext: "Consulter l'actualité"
        },
        {
            id: 2,
            icon: "/public/Logo National Post.png",
            lien: "https://www.facebook.com/CMCT.Cameroun",
            desc: "L'œil sur l'ensemble du territoire national.",
            boutontext: "Consulter l'actualité"
        },
        {
            id: 3,
            icon: "/public/IMG_2498.PNG",
            lien: "https://www.facebook.com/CMCT.Cameroun",
            desc: "Le pont vers l'actualité de l'espace \nfrancophone mondial.",
            boutontext: "Consulter l'actualité"
        },
    ]

    const communication = [
        {
            id: 1,
            icon: "/public/Logo Camigra PNG.png",
            lien: "https://www.facebook.com/CMCT.Cameroun",
            desc: "Experts en montages audiovisuels, \ngraphisme haute définition et \nformations professionnelle",
            boutontext: "Se former"
        },
        {
            id: 2,
            icon: "/public/IMG_3905.JPG.jpeg",
            lien: "https://www.facebook.com/CMCT.Cameroun",
            desc: "Plateformes d'excellence \npour la préparation aux concours IRIC.",
            boutontext: "Préparer un concours"
        },
        {
            id: 3,
            icon: "/public/IMG_3906.PNG",
            size: { width: "50px", height: "50px" },
            lien: "https://www.facebook.com/CMCT.Cameroun",
            desc: "Plateformes d'excellence \npour la préparation aux concours ESSTIC.",
            boutontext: "Préparer un concours"
        },
    ]

    const Tech = [
        {
            id: 1,
            icon: "/public/Logo Makemba-03.jpg.jpeg",
            size: { width: "175px", height: "70px" },
            lien: "https://www.facebook.com/CMCT.Cameroun",
            desc: "Solutions informatiques sur mesure \noptimisées pour \nvos besoins.",
            boutontext: "Demander une prestation tech"
        },
    ]

    // 1. Initialize state to track selected category (default to 'Média')
    const [selectedCategory, setSelectedCategory] = useState("Média");

    // Helper to get the correct sub-array based on selection
    const getSubServices = () => {
        switch(selectedCategory) {
            case "Média": return media;
            case "Communication": return communication;
            case "Tech": return Tech;
            default: return [];
        }
    }

    const ref = useRef();

    const isInView = useInView(ref, { margin:"-100px" })

  return (
    <motion.div 
        className="services" 
        variants={variants} 
        initial="initial" 
        // animate="animate"
        // whileInView="animate" 
        ref={ref}
        animate={isInView && "animate"}    
    >
      <motion.div className="textContainer" variants={variants}>
            <h1>
                <span style={{ color: "black"}}>Nos</span> <span style={{ color: "red"}}>Branches</span> 
                <br/>
                <span style={{ color: "black"}}>Nos 3 pôles d'<motion.b whileHover={{color:"orange"}}>expertise</motion.b></span>
            </h1>
      </motion.div>
      
      <hr />
      
      <motion.div className="services-list" variants={variants}>
        {services.map((item) => (
            <motion.div
                key={item.id}
                className={`service-item ${selectedCategory === item.title ? "active" : ""}`}
                onClick={() => setSelectedCategory(item.title)}
                
                // On combine l'animation d'entrée des variants ET le changement de couleur
                animate={{
                // On garde les propriétés de ton variant 'animate' initial
                x: 0, 
                y: 0, 
                opacity: 1,
                // On ajoute la logique dynamique pour la sélection
                backgroundColor: selectedCategory === item.title ? "#ffa500" : "#F5F5F5",
                borderColor: selectedCategory === item.title ? "#ffa500" : "gray",
                }}
                
                // Le whileHover peut entrer en conflit, on s'assure qu'il ne bloque pas l'état actif
                whileHover={{ scale: 1.02, backgroundColor: selectedCategory === item.title ? "#ffa500" : "lightgray" }}
                
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                style={{ cursor: "pointer", border: "0.5px solid" }} // On laisse le style de base ici
            >
                <img src={item.icon} alt="" />
                <h3 style={{ color: selectedCategory === item.title ? "white" : "black" }}>{item.title}</h3>
                <p style={{ color: selectedCategory === item.title ? "white" : "black" }}>{item.desc}</p>
            </motion.div>
))}
        </motion.div>

        <hr />

        <motion.div 
            className="sub-services-list" 
            variants={variants}
            key={selectedCategory}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
        >
            {getSubServices().map((sub) => (
                <motion.div className="service-item" whileHover={{ background: "lightgray", color: "black" }} transition={{ type: "spring", stiffness: 300 }}
                key={sub.id}    
            >   
                <img src={sub.icon} alt=""  style={sub.size}/>
                <h3>{sub.title}</h3>
                <p>{sub.desc}</p>
                <button><p>{sub.boutontext}</p></button>
            </motion.div>
            ))}
        </motion.div>
    </motion.div>
  )
}

export default Services