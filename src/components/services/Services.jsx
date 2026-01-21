import { useRef } from "react";
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

    const ref = useRef();

    const isInView = useInView(ref, { margin:"-100px" })

  return (
    <motion.div 
        className="services" 
        variants={variants} 
        initial="initial" 
        // animate="animate"
        // whileInView="animate" 
        // viewport={{ 
        //     once: true, 
        //     amount: 0.5 
        //     }} 
        // transition={{ 
        //     type: "spring", 
        //     stiffness: 50, 
        //     delay: 0.3 
        //     }}
        ref={ref}
        animate={isInView && "animate"}    
    >
      <motion.div className="textContainer" variants={variants}>
            <p>
                We offer a wide range of services 
                with the best quality<br />to meet your needs.
            </p>
            <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
            <img src="/public/people.webp" alt="" />
            <h1>
                <motion.b whileHover={{color:"orange"}}>Unique</motion.b> Ideas
            </h1>
        </div>
        <div className="title">
            <h1>
                <motion.b whileHover={{color:"orange"}}>For Your </motion.b> Business.
            </h1>
            <button>What We DO?</button>
        </div>
      </motion.div>
      <motion.div className="services-list" variants={variants}>
            <motion.div className="service-item" whileHover={{ background: "lightgray", color: "black" }} transition={{ type: "spring", stiffness: 300 }}>
                <h3>Web Development</h3>
                <p>Building responsive and modern websites.</p>
                <button>Go</button>
            </motion.div>
            <motion.div className="service-item" whileHover={{ background: "lightgray", color: "black" }} transition={{ type: "spring", stiffness: 300 }}>
                <h3>Mobile App Development</h3>
                <p>Creating user-friendly mobile applications.</p>
                <button>Go</button>
            </motion.div>
            <motion.div className="service-item" whileHover={{ background: "lightgray", color: "black" }} transition={{ type: "spring", stiffness: 300 }}>
                <h3>Digital Marketing</h3>
                <p>Enhancing your online presence through targeted marketing strategies.</p>
                <button>Go</button>
            </motion.div>
            <motion.div className="service-item" whileHover={{ background: "lightgray", color: "black" }} transition={{ type: "spring", stiffness: 300 }}>
                <h3>UI/UX Design</h3>
                <p>Designing intuitive and engaging user interfaces.</p>
                <button>Go</button>
            </motion.div>
        </motion.div>
    </motion.div>
  )
}

export default Services