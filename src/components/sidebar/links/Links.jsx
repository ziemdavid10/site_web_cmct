import { motion } from "framer-motion";

const variants = {
    open: {
        transition: { 
            staggerChildren: 0.07, 
            // delayChildren: 0.2 
        },
    },
    closed: {
        transition: { 
            staggerChildren: 0.05, 
            staggerDirection: -1 
        },
    },
};

const itemVariants = {
    open: {
        y: 0,
        opacity: 1,
    },
    closed: {
        y: 20,
        opacity: 0,
    },
};

const Links = () => {

const items = [
    // { name: "Home", path: "/" },
    // { name: "About", path: "/about" },
    // { name: "Projects", path: "/projects" },
    // { name: "Contact", path: "/contact" },
    "Homepage",
    "Services",
    "Projects",
    "About",
    "Contact"
];
  return <motion.div className="links" variants={variants}>
    {/* links content */}
    {items.map((item) => (
        <motion.a href={`#${item}`} key={item} variants={itemVariants} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            {item}
        </motion.a>
    ))}
  </motion.div>;
};

export default Links;