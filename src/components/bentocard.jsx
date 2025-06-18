import React from "react";
import { motion } from "framer-motion";

const BentoCard = ({ children, direction = "left", delay = 0 }) => {
  const variants = {
    hidden: {
      opacity: 0,
      x: direction === "left" ? -50 : direction === "right" ? 50 : 0,
      y: direction === "top" ? -50 : direction === "bottom" ? 50 : 0,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: 0.6, delay },
    },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={variants}
      className="rounded-xl shadow p-4 bg-gradient-to-br from-gray-800 via-gray-700 to-gray-900 text-white"
    >
      {children}
    </motion.div>
  );
};

export default BentoCard;
