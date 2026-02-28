import { useRef } from "react";
import "./Projects.scss";
import {motion, useScroll, useSpring, useTransform} from "framer-motion";

const items = [
  {
    id:1,
    title: "Project 1",
    img:"",
    video:"",
    description: "Description of Project 1.",
  },
  {
    id:2,
    title: "Project 2",
    img:"",
    video:"",
    description: "Description of Project 2.",
  },
  {
    id:3,
    title: "Project 3",
    img:"",
    video:"",
    description: "Description of Project 3.",
  },
  {
    id:4,
    title: "Project 4",
    img:"",
    video:"",
    description: "Description of Project 4.",
  },
  {
    id:5,
    title: "Project 5",
    img:"",
    video:"",
    description: "Description of Project 5.",
  },
  {
    id:6,
    title: "Project 6",
    img:"",
    video:"",
    description: "Description of Project 6.",
  },
  {
    id:7,
    title: "Project 7",
    img:"",
    video:"",
    description: "Description of Project 7.",
  },
];

const Single = ({ item }) => {

  const ref = useRef();
  const { scrollYProgress } = useScroll ({
    target: ref,
    // offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0,1], [-300,300]);

  return <section>
    <div className="container">
      <div className="wrapper">
        <div className="imageContainer" ref={ref}>
          <img src="{item.img}" alt="" />
        </div>
        {/* <video src="{item.video}" autoPlay muted loop /> */}
        <motion.div className="textContainer" style={{ y }}>
          <h2>{item.title}</h2>
          <p>{item.description}</p>
          <button>View Demo</button>
        </motion.div>
      </div>
    </div>
  </section>;
}
const Projects = () => {
  const ref = useRef ();
  const { scrollYProgress } = useScroll ({
    target: ref,
    offset: ["end end", "start start"]
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });


  return <div className="projects" ref={ref}>
  <div className="progress">
      <h2>L'ensemble de nos réalisations</h2>
      <motion.div style={{ scaleX }} className="progress-bar"></motion.div>
  </div>
    {items.map((item) => (
      <Single item={item} key={item.id} />
    ))}
  </div>;
};

export default Projects;