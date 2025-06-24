import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

const RoleSwitcher = () => {
  const roles = ["Fullstack", "Backend", "Frontend"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 3000); // slower transition for calm effect
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="inline-block relative h-5 mt-1">
      <AnimatePresence mode="wait">
        <motion.span
          key={roles[index]}
          initial={{ opacity: 0, y: 2, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -2, scale: 0.98 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="absolute left-0 top-0 bg-gradient-to-r from-pink-800 via-rose-500 to-orange-600 text-xs px-2  rounded-full font-extrabold text-white"
        >
          {roles[index]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
};

export default RoleSwitcher;
