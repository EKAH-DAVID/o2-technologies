import { useEffect, useRef, useState } from "react";
import { motion, useScroll } from "framer-motion";

const navLinks = ["About", "How It Works", "Who It's For", "Shop"];

export default function Navbar() {
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0);
  const { scrollY } = useScroll();

  useEffect(() => {
    const unsubscribe = scrollY.on("change", (current) => {
      const previous = lastScrollY.current;
      if (current > previous && current > 80) {
        setVisible(false);
      } else {
        setVisible(true);
      }
      lastScrollY.current = current;
    });
    return () => unsubscribe();
  }, [scrollY]);

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-12 py-5 bg-black/60 backdrop-blur-md border-b border-white/10"
      animate={{ y: visible ? 0 : -80, opacity: visible ? 1 : 0 }}
      transition={{ duration: 0.35, ease: "easeInOut" }}
    >
      {/* Logo */}
      <motion.a
        href="#"
        className="text-white text-xl font-bold tracking-tight no-underline"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <span className="text-green-400">O2</span> Technologies
      </motion.a>

      {/* Nav Links */}
      <motion.div
        className="hidden md:flex items-center gap-9"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        {navLinks.map((link, i) => (
          <motion.a
            key={link}
            href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}
            className="text-white/80 hover:text-white text-sm font-medium no-underline relative group"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 + i * 0.07 }}
          >
            {link}
            <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-green-400 group-hover:w-full transition-all duration-300" />
          </motion.a>
        ))}
      </motion.div>

      {/* CTA Button */}
      <motion.button
        className="bg-green-400 hover:bg-green-500 text-black font-bold text-sm px-6 py-3 rounded-full tracking-wide"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.97 }}
      >
        Shop the TEB
      </motion.button>
    </motion.nav>
  );
}