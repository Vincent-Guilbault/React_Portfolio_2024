import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="scrollToTopButton" // Unique key to prevent flashing
          onClick={scrollToTop}
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed bottom-8 right-8 z-50 cursor-pointer rounded-full bg-neutral-900 p-4 text-purple-800 shadow-lg hover:bg-purple-800 hover:text-white"
        >
          <FaArrowUp size={24} />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;
