// // import { useRef, useState } from "react";
// // import "./Contact.scss";
// // import { motion, useInView } from "framer-motion";
// // import emailjs from "@emailjs/browser";

// // const variants = {
// //   initial: {
// //     y: 500,
// //     opacity: 0,
// //   },
// //   animate: {
// //     y: 0,
// //     opacity: 1,
// //     transition: {
// //       duration: 0.5,
// //       staggerChildren: 0.1,
// //     },
// //   },
// // };

// // const Contact = () => {

// //   const ref = useRef();
// //   const formRef = useRef();
// //   const [error, setError] = useState(false);
// //   const [success, setSuccess] = useState(false);

// //   const sendEmail = (e) => {
// //     e.preventDefault();

// //     emailjs.sendForm(
// //       'service_oqamyih', 
// //       'template_4lgiufc', 
// //       formRef.current, 
// //       'eI_nCqmJPv1_X1v9Y'
// //     )
// //       .then((result) => {
// //         setSuccess(true)
// //         console.log(result.text);
// //         e.target.reset();
// //       }, (error) => {
// //         setError(true)
// //         console.log(error.text);
// //       });
// //   };

// //   const isInView = useInView(ref, { margin: "-100px" });


// //   return <motion.div 
// //     ref={ref}   
// //     className="contact" 
// //     variants={variants} 
// //     initial="initial" 
// //     whileInView="animate"
// //     >
// //     <motion.div className="textContainer" variants={variants}>
// //       <motion.h1 variants={variants}>Let's work together</motion.h1>
// //       <motion.div className="item" variants={variants}>
// //         <h2>Mail</h2>
// //         <span>Email: <a href="mailto:davidloic10@gmail.com">davidloic10@gmail.com</a></span>
// //       </motion.div>
// //       <motion.div className="item" variants={variants}>
// //         <h2>Address</h2>
// //         <span>Yaoundé, Cameroon</span>
// //       </motion.div>
// //       <motion.div className="item" variants={variants}>
// //         <h2>Phone</h2>
// //         <span>Phone: <a href="tel:237692875151">+237 6 92 87 51 51</a></span>
// //       </motion.div>
// //     </motion.div>
// //     <div className="formContainer">
// //       <motion.div className="phoneSvg" 
// //         initial={{ opacity: 1}}
// //         whileInView={{ opacity: 0}}
// //         transition={{ delay: 3, duration: 3}}
// //         >
// //         <svg width="450px" height="450px" viewBox="0 0 512 512" fill="none" transform="rotate(-20)">
// //           {/* <motion.path 
// //             stroke-Width={1.5} 
// //             stroke-linecap="round"
// //             initial={{ pathLength: 0 }}
// //             animate={isInView && { pathLength: 1 }}
// //             transition={{ duration:3 }}
// //             d="M14 2C14 2 16.2 2.2 19 5C21.8 7.8 22 10 22 10"/>
// //           <motion.path 
// //             strokeWidth={1.5} 
// //             stroke-linecap="round"
// //             initial={{ pathLength: 0 }}
// //             animate={isInView && { pathLength: 1 }}
// //             transition={{ duration:3 }}
// //             d="M14.207 5.53564C14.207 5.53564 15.197 5.81849 16.6819 7.30341C18.1668 8.78834 18.4497 9.77829 18.4497 9.77829" />
// //           <motion.path 
// //             strokeWidth={1.5} 
// //             fill="none"
// //             initial={{ pathLength: 0 }}
// //             animate={isInView && { pathLength: 1 }}
// //             transition={{ duration:3 }}
// //             d="M10.0376 5.31617L10.6866 6.4791C11.2723 7.52858 11.0372 8.90532 10.1147 9.8278C10.1147 9.8278 10.1147 9.8278 10.1147 9.8278C10.1146 9.82792 8.99588 10.9468 11.0245 12.9755C13.0525 15.0035 14.1714 13.8861 14.1722 13.8853C14.1722 13.8853 14.1722 13.8853 14.1722 13.8853C15.0947 12.9628 16.4714 12.7277 17.5209 13.3134L18.6838 13.9624C20.2686 14.8468 20.4557 17.0692 19.0628 18.4622C18.2258 19.2992 17.2004 19.9505 16.0669 19.9934C14.1588 20.0658 10.9183 19.5829 7.6677 16.3323C4.41713 13.0817 3.93421 9.84122 4.00655 7.93309C4.04952 6.7996 4.7008 5.77423 5.53781 4.93723C6.93076 3.54428 9.15317 3.73144 10.0376 5.31617Z" /> */}
// //           <g>
// //           <motion.path  
// //             strokeWidth={1.5} 
// //             fill="none"
// //             initial={{ pathLength: 0 }}
// //             animate={isInView && { pathLength: 1 }}
// //             transition={{ duration:3 }}

// //             d="M255.998,0.002C114.606,0.012,0.01,114.604,0,256c0.01,141.406,114.65,255.328,255.926,255.998h0.334   l0.297-0.009c27.124,0.038,49.507-8.527,64.961-22.594c15.468-14.01,23.727-33.254,23.708-52.736   c0.02-9.148-1.914-18.306-5.521-27.024c6.086-3.464,10.143-6.612,11.301-7.444c4.152-2.957,16-18.766,7.693-31.79   c-8.344-13.014-38.042-42.678-46.152-47.702c-8.086-5.015-21.598-0.124-28.105,9.426c-6.526,9.55-11.674,6.689-11.674,6.689   s-18.516-14.957-44.124-66.621c-25.607-51.694-26.263-75.454-26.263-75.454s0.833-5.847,12.388-5.263   c11.53,0.621,23.598-7.168,24.516-16.66c0.928-9.464-4.698-51.091-10-65.598c-5.316-14.516-25.062-14.65-29.928-13.138   c-4.89,1.502-55.033,13.712-59.014,66.21c-3.966,52.506,9.565,100.18,28.943,139.309c19.387,39.119,49.128,78.765,93.3,107.406   c17.89,11.598,35.058,13.1,49.493,10.67c2.483,5.54,3.718,11.291,3.746,16.985c-0.028,11.292-4.621,22.354-14.066,30.966   c-9.469,8.564-24.071,14.928-45.2,14.967l-0.516,0.009C130.797,481.96,29.387,381.09,29.397,256   c0.01-62.621,25.339-119.186,66.367-160.237c41.053-41.023,97.612-66.354,160.234-66.364c62.621,0.01,119.181,25.34,160.232,66.364   c41.033,41.052,66.354,97.606,66.373,160.237c-0.01,38.67-9.666,74.966-26.698,106.784c-9.531,17.837-21.397,34.23-35.177,48.812   c-5.569,5.905-5.301,15.206,0.594,20.776c5.894,5.578,15.205,5.32,20.784-0.584c15.54-16.46,28.937-34.976,39.712-55.139   C501.071,340.717,512,299.589,512,256C511.98,114.604,397.389,0.012,255.998,0.002z"/>
// //             </g> 
// //             </svg>
// //       </motion.div>
// //       <motion.form
// //         ref={formRef}
// //         onSubmit={ sendEmail }
// //         initial={{ opacity: 0}}
// //         whileInView={{ opacity: 1}}
// //         transition={{ delay: 4, duration: 1}}
// //       >
// //         <input type="text" placeholder="Your Name" name="name" required />
// //         <input type="email" placeholder="Your Email" name="email"  required />
// //         <textarea placeholder="Your Message" rows={8} name="message" required />
// //         <button type="submit">Submit</button>
// //         {error && <span className="error">Something went wrong!</span>}
// //         {success && <span className="success">Message sent successfully!</span>}
// //       </motion.form>
// //     </div>
// //   </motion.div>;
// // };

// // export default Contact;

// import { motion } from "framer-motion";
// import "./Contact.scss";

// const Contact = () => {
//   const currentYear = new Date().getFullYear();

//   const containerVariants = {
//     initial: { opacity: 0 },
//     animate: {
//       opacity: 1,
//       transition: { staggerChildren: 0.2 },
//     },
//   };

//   const itemVariants = {
//     initial: { y: 20, opacity: 0 },
//     animate: { y: 0, opacity: 1 },
//   };

//   return (
//     <section className="contact">
//       <motion.h2 
//         initial={{ opacity: 0, y: -20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         className="contactTitle"
//       >
//         Contactez Nous
//       </motion.h2>

//       <motion.div 
//         className="wrapper"
//         variants={containerVariants}
//         initial="initial"
//         whileInView="animate"
//         viewport={{ once: true }}
//       >
//         <div className="leftSide">
//           <motion.div className="card infoCard" variants={itemVariants}>
//             <div className="cardHeader">
//               <h3>informations de contact</h3>
//               <span className="line yellow"></span>
//             </div>
//             <div className="contactItem">
//               <div className="icon">✉</div>
//               <div className="details">
//                 <span>Email</span>
//                 <p>contact@cmct.cm</p>
//               </div>
//             </div>
//             <div className="contactItem">
//               <div className="icon">📞</div>
//               <div className="details">
//                 <span>Téléphone</span>
//                 <p>(237) 222 306 079</p>
//               </div>
//             </div>
//           </motion.div>

//           <motion.div className="card socialCard" variants={itemVariants}>
//             <div className="cardHeader">
//               <h3>Nos réseaux sociaux</h3>
//               <span className="line red"></span>
//             </div>
//             <div className="socialIcons">
//               <a href="https://www.linkedin.com/company/cmct-central-media-communication-technologies/" target="_blank" rel="noopener noreferrer">
//                 <img src="/public/linkedin.png" alt="LinkedIn" />
//               </a>
//               <a href="https://www.facebook.com/share/17P8pYCrFd/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer">
//                 <img src="/public/facebook.png" alt="Facebook" />
//               </a>
//             </div>
//           </motion.div>
//         </div>

//         <motion.div className="rightSide card formCard" variants={itemVariants}>
//           <div className="cardHeader">
//             <h3>Envoyez-nous un message</h3>
//             <span className="line blue"></span>
//           </div>
//           <form onSubmit={(e) => e.preventDefault()}>
//             <div className="inputGroup">
//               <label>Nom complet</label>
//               <input type="text" placeholder="votre nom" required />
//             </div>
//             <div className="inputGroup">
//               <label>Email</label>
//               <input type="email" placeholder="votre email" required />
//             </div>
//             <div className="inputGroup">
//               <label>Message</label>
//               <textarea placeholder="votre message" rows="5" required></textarea>
//             </div>
//             <motion.button 
//               whileHover={{ scale: 1.02 }}
//               whileTap={{ scale: 0.98 }}
//               type="submit"
//             >
//               envoyer le message <span>➤</span>
//             </motion.button>
//           </form>
//         </motion.div>
//       </motion.div>

//       {/* FOOTER SECTION */}
//       <motion.footer
//         className="footer"
//         variants={containerVariants}
//         initial="initial"
//         whileInView="animate"
//         viewport={{ once: true }}
//       >
//         <div className="footer-content">
//           <motion.div className="footer-section" variants={itemVariants}>
//             <img src="/LOGO CMCT.png" alt="CMCT Logo" className="footer-logo" />
//             <p className="footer-description">
//               Central Media Communication Technologies - Votre partenaire en communication et technologies médias.
//             </p>
//             <div className="footer-social">
//               <a href="https://www.linkedin.com/company/cmct-central-media-communication-technologies/" target="_blank" rel="noopener noreferrer">
//                 <img src="/public/linkedin.png" alt="LinkedIn" />
//               </a>
//               <a href="https://www.facebook.com/share/17P8pYCrFd/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer">
//                 <img src="/public/facebook.png" alt="Facebook" />
//               </a>
//             </div>
//           </motion.div>

//           <motion.div className="footer-section" variants={itemVariants}>
//             <h3>Navigation</h3>
//             <ul>
//               <li><a href="#Homepage">Accueil</a></li>
//               <li><a href="#Services">Services</a></li>
//               <li><a href="#About">À propos</a></li>
//               <li><a href="#Actualites">Actualités</a></li>
//               <li><a href="#Contact">Contact</a></li>
//             </ul>
//           </motion.div>

//           <motion.div className="footer-section" variants={itemVariants}>
//             <h3>Services</h3>
//             <ul>
//               <li>Production Audiovisuelle</li>
//               <li>Communication Digitale</li>
//               <li>Événementiel</li>
//               <li>Conseil en Communication</li>
//             </ul>
//           </motion.div>

//           <motion.div className="footer-section" variants={itemVariants}>
//             <h3>Contact</h3>
//             <div className="footer-contact">
//               <div className="contact-item">
//                 <img src="/public/mail.png" alt="Email" />
//                 <span>contact@cmct.cm</span>
//               </div>
//               <div className="contact-item">
//                 <img src="/public/phone.png" alt="Phone" />
//                 <span>(237) 222 306 079</span>
//               </div>
//             </div>
//           </motion.div>
//         </div>

//         <motion.div className="footer-bottom" variants={itemVariants}>
//           <p>&copy; {currentYear} CMCT. Tous droits réservés.</p>
//           <div className="footer-links">
//             <a href="#privacy">Politique de confidentialité</a>
//             <span>|</span>
//             <a href="#terms">Conditions d'utilisation</a>
//           </div>
//         </motion.div>
//       </motion.footer>
//     </section>
//   );
// };

// export default Contact;

import { motion } from "framer-motion";
import "./Contact.scss";

const Contact = () => {
  const currentYear = new Date().getFullYear();

  const containerVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    initial: { y: 30, opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section className="contact-section">
      <div className="container">
        {/* Titre avec ligne de fond discrète */}
        <header className="section-intro">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="kicker"
          >
            Prêt pour la suite ?
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="main-title"
          >
            Parlons de votre <span>prochain projet</span>
          </motion.h2>
        </header>

        <motion.div 
          className="contact-grid"
          variants={containerVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* CÔTÉ GAUCHE : INFOS */}
          <div className="contact-info-panel">
            <motion.div className="info-block" variants={itemVariants}>
              <div className="block-header">
                <h3>Coordonnées</h3>
                <div className="accent yellow"></div>
              </div>
              
              <div className="info-list">
                <div className="info-item">
                  <div className="icon-box">✉</div>
                  <div className="content">
                    <label>Email professionnel</label>
                    <a href="mailto:contact@cmct.cm">contact@cmct.cm</a>
                  </div>
                </div>
                <div className="info-item">
                  <div className="icon-box">📞</div>
                  <div className="content">
                    <label>Ligne directe</label>
                    <a href="tel:+237222306079">(237) 222 306 079</a>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div className="social-block" variants={itemVariants}>
              <div className="block-header">
                <h3>Digital Presence</h3>
                <div className="accent red"></div>
              </div>
              <div className="social-links">
                <a href="#" className="social-btn linkedin">LinkedIn</a>
                <a href="#" className="social-btn facebook">Facebook</a>
              </div>
            </motion.div>
          </div>

          {/* CÔTÉ DROIT : FORMULAIRE */}
          <motion.div className="contact-form-panel" variants={itemVariants}>
            <div className="form-header">
              <h3>Dites-nous tout</h3>
              <div className="accent blue"></div>
            </div>
            
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="form-row">
                <div className="input-field">
                  <input type="text" id="name" required placeholder=" " />
                  <label htmlFor="name">Nom complet</label>
                </div>
                <div className="input-field">
                  <input type="email" id="email" required placeholder=" " />
                  <label htmlFor="email">Email</label>
                </div>
              </div>
              
              <div className="input-field full-width">
                <textarea id="message" rows="5" required placeholder=" "></textarea>
                <label htmlFor="message">Décrivez votre besoin...</label>
              </div>

              <motion.button 
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.98 }}
                className="submit-button"
                type="submit"
              >
                Envoyer le message
                <svg viewBox="0 0 24 24" className="arrow-icon">
                  <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                </svg>
              </motion.button>
            </form>
          </motion.div>
        </motion.div>
      </div>

      {/* FOOTER */}
      {/* <footer className="footer-corporate">
        <div className="footer-top">
          <div className="footer-brand">
            <img src="/LOGO CMCT.png" alt="CMCT" />
            <p>Intelligence créative & Technologies médias pour les leaders de demain.</p>
          </div>
          <div className="footer-nav-group">
            <div className="nav-col">
              <h4>Expertises</h4>
              <a href="#">Audiovisuel</a>
              <a href="#">Digital</a>
              <a href="#">Conseil</a>
            </div>
            <div className="nav-col">
              <h4>Entreprise</h4>
              <a href="#">À propos</a>
              <a href="#">Actualités</a>
              <a href="#">Carrières</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© {currentYear} CMCT. All Rights Reserved.</p>
          <div className="legal">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </footer> */}
    </section>
  );
};

export default Contact;