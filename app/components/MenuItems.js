import { motion } from "framer-motion";
import Link from 'next/link'

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
};

const text = ["Sobre mi", "Proyectos"];
const colors = ["#BB7070", "#BB7070"];

export const MenuItem = ({ i, toggleMenu }) => {

  const style = { border: `2px dashed ${colors[i]}`, borderRadius: '5px', fontSize: '25px', color:'#4D3C77' };
  const linkUrl = i === 0 ? "/#aboutMe" : "/#proyects"; // Define las URLs de redirección según el índice

  return (
    <motion.li
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="mt-5"
    >
      <div className="text-placeholder mt-2" style={style}>
        <Link href={linkUrl}>
        <h3 className="text-center p-2">{text[i]}</h3>
        </Link>
      </div>
    </motion.li>
  );
};