import { motion } from "framer-motion";
import Profile from "./carditem/Profile";
import Second from "./carditem/second";
import ContactForm from "./carditem/contactForm";
import galaxy from "../assets/galaxy1.jpg";
import MusicCard from "./carditem/music";

// Animation Variants
const fadeFromLeft = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 3, ease: "easeOut" } },
};

const fadeFromRight = {
  hidden: { opacity: 0, x: 30 },
  visible: { opacity: 1, x: 0, transition: { duration: 3, ease: "easeOut" } },
};

const fadeFromBottom = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 3, ease: "easeOut" } },
};

const Bento = () => {
  return (
    <div className="font-inter flex flex-col min-h-screen gap-5">

      {/* Profile & MusicCard Side-by-Side */}
      <div className="flex flex-col lg:flex-row gap-3 w-full mx-auto">
        <motion.div
          variants={fadeFromLeft}
          className="w-full lg:flex-3"
          initial="hidden"
          animate="visible"
        >
          <Profile />
        </motion.div>

        <motion.div
          className="w-full lg:flex-2"
          variants={fadeFromRight}
          initial="hidden"
          animate="visible"
        >
          <MusicCard />
        </motion.div>
      </div>

      {/* Middle Section */}
      <motion.div
        variants={fadeFromBottom}
        initial="hidden"
        animate="visible"
      >
        <Second />
      </motion.div>

      {/* Bottom Section: Contact + Image */}
      <div className="flex flex-col lg:flex-row gap-5 items-stretch">
        <motion.div
          variants={fadeFromLeft}
          initial="hidden"
          animate="visible"
          className="flex-[4]"
        >
          <ContactForm />
        </motion.div>

        <motion.div
          variants={fadeFromRight}
          initial="hidden"
          animate="visible"
          className="rounded-xl shadow flex-[3]"
        >
          <img src={galaxy} className="object-cover rounded-xl" />
        </motion.div>
      </div>
    </div>
  );
};

export default Bento;
