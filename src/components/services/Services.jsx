// import { useRef, useState } from "react";
// import "./Services.scss" 
// import { motion, stagger, useInView } from "framer-motion"


// const variants = {
//     initial: {
//         x: -500,
//         y: 100,
//         opacity: 0
//     },
//     animate: {
//         x: 0,
//         y: 0,
//         opacity: 1,
//         transition: { 
//             duration: 1, 
//             staggerChildren: 0.1,  
//         },
//     },
// };
// const Services = () =>  {

//     const services = [
//         {
//             id: 1,
//             icon: "/public/media.png",
//             title: "Média",
//             desc: "Une couverture médiatique complète,\nde l'étudiant au monde francophone...",
//         },
//         {
//             id: 2,
//             icon: "/public/communication.png",
//             title: "Communication",
//             desc: "Nous façonnons votre image \n et préparons votre avenir.",
//         },
//         {
//             id: 3,
//             icon: "/public/tech.png",
//             title: "Tech",
//             desc: "La technologie au service \n des nouveaux médias.",
//         },
//     ]

//     const media = [
//         {
//             id: 1,
//             icon: "/public/Journal l'Etudiant.jpg.jpeg",
//             lien: "https://www.facebook.com/CMCT.Cameroun",
//             desc: "Le guide de référence pour l'actualité \n jeunesse et estudiantine.",
//             boutontext: "Consulter l'actualité"
//         },
//         {
//             id: 2,
//             icon: "/public/Logo National Post.png",
//             lien: "https://www.facebook.com/CMCT.Cameroun",
//             desc: "L'œil sur l'ensemble du territoire national.",
//             boutontext: "Consulter l'actualité"
//         },
//         {
//             id: 3,
//             icon: "/public/IMG_2498.PNG",
//             lien: "https://www.facebook.com/CMCT.Cameroun",
//             desc: "Le pont vers l'actualité de l'espace \nfrancophone mondial.",
//             boutontext: "Consulter l'actualité"
//         },
//     ]

//     const communication = [
//         {
//             id: 1,
//             icon: "/public/Logo Camigra PNG.png",
//             lien: "https://www.facebook.com/CMCT.Cameroun",
//             desc: "Experts en montages audiovisuels, \ngraphisme haute définition et \nformations professionnelle",
//             boutontext: "Se former"
//         },
//         {
//             id: 2,
//             icon: "/public/IMG_3905.JPG.jpeg",
//             lien: "https://www.facebook.com/CMCT.Cameroun",
//             desc: "Plateformes d'excellence \npour la préparation aux concours IRIC.",
//             boutontext: "Préparer un concours"
//         },
//         {
//             id: 3,
//             icon: "/public/IMG_3906.PNG",
//             size: { width: "50px", height: "50px" },
//             lien: "https://www.facebook.com/CMCT.Cameroun",
//             desc: "Plateformes d'excellence \npour la préparation aux concours ESSTIC.",
//             boutontext: "Préparer un concours"
//         },
//     ]

//     const Tech = [
//         {
//             id: 1,
//             icon: "/public/Logo Makemba-03.jpg.jpeg",
//             size: { width: "175px", height: "70px" },
//             lien: "https://www.facebook.com/CMCT.Cameroun",
//             desc: "Solutions informatiques sur mesure \noptimisées pour \nvos besoins.",
//             boutontext: "Demander une prestation tech"
//         },
//     ]

//     // 1. Initialize state to track selected category (default to 'Média')
//     const [selectedCategory, setSelectedCategory] = useState("Média");

//     // Helper to get the correct sub-array based on selection
//     const getSubServices = () => {
//         switch(selectedCategory) {
//             case "Média": return media;
//             case "Communication": return communication;
//             case "Tech": return Tech;
//             default: return [];
//         }
//     }

//     const ref = useRef();

//     const isInView = useInView(ref, { margin:"-100px" })

//   return (
//     <motion.div 
//         className="services" 
//         variants={variants} 
//         initial="initial" 
//         // animate="animate"
//         // whileInView="animate" 
//         ref={ref}
//         animate={isInView && "animate"}    
//     >
//       <motion.div className="textContainer" variants={variants}>
//             <h1>
//                 <span style={{ color: "black"}}>Nos</span> <span style={{ color: "red"}}>Branches</span> 
//                 <br/>
//                 <span style={{ color: "black"}}>Nos 3 pôles d'<motion.b whileHover={{color:"orange"}}>expertise</motion.b></span>
//             </h1>
//       </motion.div>
      
//       <hr />
      
//       <motion.div className="services-list" variants={variants}>
//         {services.map((item) => (
//             <motion.div
//                 key={item.id}
//                 className={`service-item ${selectedCategory === item.title ? "active" : ""}`}
//                 onClick={() => setSelectedCategory(item.title)}
                
//                 // On combine l'animation d'entrée des variants ET le changement de couleur
//                 animate={{
//                 // On garde les propriétés de ton variant 'animate' initial
//                 x: 0, 
//                 y: 0, 
//                 opacity: 1,
//                 // On ajoute la logique dynamique pour la sélection
//                 backgroundColor: selectedCategory === item.title ? "#ffa500" : "#F5F5F5",
//                 borderColor: selectedCategory === item.title ? "#ffa500" : "gray",
//                 }}
                
//                 // Le whileHover peut entrer en conflit, on s'assure qu'il ne bloque pas l'état actif
//                 whileHover={{ scale: 1.02, backgroundColor: selectedCategory === item.title ? "#ffa500" : "lightgray" }}
                
//                 transition={{ type: "spring", stiffness: 300, damping: 20 }}
//                 style={{ cursor: "pointer", border: "0.5px solid" }} // On laisse le style de base ici
//             >
//                 <img src={item.icon} alt="" />
//                 <h3 style={{ color: selectedCategory === item.title ? "white" : "black" }}>{item.title}</h3>
//                 <p style={{ color: selectedCategory === item.title ? "white" : "black" }}>{item.desc}</p>
//             </motion.div>
// ))}
//         </motion.div>

//         <hr />

//         <motion.div 
//             className="sub-services-list" 
//             variants={variants}
//             key={selectedCategory}
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.3 }}
//         >
//             {getSubServices().map((sub) => (
//                 <motion.div className="service-item" whileHover={{ background: "lightgray", color: "black" }} transition={{ type: "spring", stiffness: 300 }}
//                 key={sub.id}    
//             >   
//                 <img src={sub.icon} alt=""  style={sub.size}/>
//                 <h3>{sub.title}</h3>
//                 <p>{sub.desc}</p>
//                 <button><p>{sub.boutontext}</p></button>
//             </motion.div>
//             ))}
//         </motion.div>
//     </motion.div>
//   )
// }

// export default Services

import { useRef, useState } from "react";
import "./Services.scss";
import { motion, useInView, AnimatePresence } from "framer-motion";

const variants = {
  initial: { opacity: 0, y: 30 },
  animate: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, staggerChildren: 0.1 } 
  },
};

const Services = () => {
  const [selectedCategory, setSelectedCategory] = useState("Média");
  const ref = useRef();
  const isInView = useInView(ref, { margin: "-100px", once: true });

  const categories = [
    { id: 1, title: "Média", icon: "/media.png", desc: "Couverture médiatique du monde francophone." },
    { id: 2, title: "Communication", icon: "/communication.png", desc: "Conseil en image et stratégie d'avenir." },
    { id: 3, title: "Tech", icon: "/tech.png", desc: "Solutions digitales pour les nouveaux médias." },
  ];

  // Regroupement des données pour plus de clarté
  const subData = {
    "Média": [
      { id: 1, icon: "/Journal l'Etudiant.jpg.jpeg", desc: "Actualité jeunesse et estudiantine.", btn: "Consulter" },
      { id: 2, icon: "/Logo National Post.png", desc: "Actualité du territoire national.", btn: "Consulter" },
      { id: 3, icon: "/IMG_2498.PNG", desc: "Le pont vers l'espace francophone.", btn: "Consulter" },
    ],
    "Communication": [
      { id: 1, icon: "/Logo Camigra PNG.png", desc: "Montage audiovisuel et graphisme HD.", btn: "Se former" },
      { id: 2, icon: "/IMG_3905.JPG.jpeg", desc: "Préparation aux concours de l'IRIC.", btn: "Préparer" },
      { id: 3, icon: "/IMG_3906.PNG", desc: "Préparation aux concours de l'ESSTIC.", btn: "Préparer" },
    ],
    "Tech": [
      { id: 1, icon: "/logo.png", desc: "Solutions informatiques sur mesure.", btn: "Demander un devis" },
    ]
  };

  return (
    <motion.section 
      className="services" 
      ref={ref}
      variants={variants}
      initial="initial"
      animate={isInView ? "animate" : "initial"}
    >
      <div className="container">
        <motion.div className="header" variants={variants}>
          <h2>Nos <span>Branches</span></h2>
          <p className="subtitle">Explorez nos 3 pôles d'expertise</p>
          <div className="line" />
        </motion.div>

        {/* Sélecteur de catégories principal */}
        <motion.div className="category-grid" variants={variants}>
          {categories.map((cat) => (
            <motion.div
              key={cat.id}
              className={`category-card ${selectedCategory === cat.title ? "active" : ""}`}
              onClick={() => setSelectedCategory(cat.title)}
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="icon-wrapper">
                <img src={cat.icon} alt={cat.title} />
              </div>
              <h3>{cat.title}</h3>
              <p>{cat.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Liste des sous-services dynamique */}
        <AnimatePresence mode="wait">
          <motion.div 
            className="details-grid"
            key={selectedCategory}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.4 }}
          >
            {subData[selectedCategory].map((sub) => (
              <div key={sub.id} className="sub-card">
                <div className="logo-box">
                  <img src={sub.icon} alt="Service Logo" />
                </div>
                <p>{sub.desc}</p>
                <button className="btn-action">
                   <span>{sub.btn}</span>
                   <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z" fill="currentColor"></path></svg>
                </button>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.section>
  );
};

export default Services;