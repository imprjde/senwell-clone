import { useEffect, useState } from "react";
import { IoIosArrowUp } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";

export default function TopScroller() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          onClick={scrollToTop}
          className="bg-black fixed bottom-10 p-3 bg-opacity-30 z-40 cursor-pointer rounded-full right-8"
        >
          <span className="text-white">
            <IoIosArrowUp size={25} />
          </span>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
