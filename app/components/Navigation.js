import { motion } from "framer-motion";
import  Items  from "./MenuItems";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};

export const Navigation = () => (
  <motion.ul variants={variants}>
    {itemIds.map(i => (
      <Items i={i} key={i} />
    ))}
  </motion.ul>
);

const itemIds = [0, 1];

export default Navigation;