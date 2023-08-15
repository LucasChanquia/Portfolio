import { motion } from "framer-motion";
import { MenuItem } from "./MenuItems";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};

export const Navigation = () => {
    const itemIds = [0, 1];
  
    return (
      <motion.ul variants={variants} className="w-full h-10">
        {itemIds.map(i => (
          <MenuItem key={i} i={i} />
        ))}
      </motion.ul>
    );
  };