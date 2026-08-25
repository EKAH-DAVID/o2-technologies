import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform, useInView, animate } from "framer-motion";

import heroBg from "../assets/hero-bg.png";

const stats = [
  { value: 10,  prefix: "<", suffix: "S", label: "Deploy time.",            sub: "No training required." },
  { value: 280, prefix: "",  suffix: "G", label: "Lighter than",            sub: "a water bottle."       },
  { value: 0,   prefix: "",  suffix: "",  label: "Batteries or charging",   sub: "required."             },
  { value: null,prefix: "∞", suffix: "",  label: "Replaceable cartridge.",  sub: "Reuse forever."        },
];

// Count-up number component
function CountUp({ value, prefix, suffix }) {
  const [display, setDisplay] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView || value === null) return;
    const controls = animate(0, value, {
      duration: 1.6,
      ease: "easeOut",
      onUpdate: (v) => setDisplay(Math.floor(v)),
    });
    return controls.stop;
  }, [isInView, value]);

  return (
    <span ref={ref} className="text-green-400 font-extrabold text-3xl min-w-[52px]" style={{ fontFamily: "Georgia, serif" }}>
      {value === null ? "∞" : `${prefix}${display}${suffix}`}
    </span>
  );
}

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15, delayChildren: 0.3 } },
};

const lineVariants = {
  hidden: { opacity: 0, y: 48 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export default function HeroSection() {
  const { scrollY } = useScroll();
  const bgY = useTransform(scrollY, [0, 600], ["0%", "20%"]);

  return (
    <div className="relative w-full min-h-screen flex flex-col overflow-hidden">

      {/* Parallax background */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center 30%",
          y: bgY,
          scale: 1.1,
        }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/35 to-black/75 z-10" />

      {/* HERO CONTENT */}
      <div className="relative z-20 flex-1 flex flex-col items-center justify-center text-center px-6 pb-36 pt-28">

        <motion.div variants={containerVariants} initial="hidden" animate="show">
          <motion.h1 className="leading-none font-extrabold m-0" variants={containerVariants}>
            <motion.span className="block text-white text-7xl xl:text-8xl" style={{ fontFamily: "Georgia, serif" }} variants={lineVariants}>
              Breathe.
            </motion.span>
            <motion.span className="block text-green-400 text-7xl xl:text-8xl italic" style={{ fontFamily: "Georgia, serif" }} variants={lineVariants}>
              No matter
            </motion.span>
            <motion.span className="block text-white text-7xl xl:text-8xl" style={{ fontFamily: "Georgia, serif" }} variants={lineVariants}>
              what.
            </motion.span>
          </motion.h1>

          <motion.p
            className="text-white/75 text-base xl:text-lg max-w-lg leading-relaxed mt-7 mb-11 mx-auto"
            variants={lineVariants}
          >
            Emergency breathing support. Ready in under 10 seconds.
            <br />
            No power. No training. No compromise.
          </motion.p>

          <motion.div className="flex items-center gap-5 flex-wrap justify-center" variants={lineVariants}>
            <motion.button
              className="bg-green-400 hover:bg-green-500 text-black font-bold text-sm px-9 py-4 rounded-full tracking-widest uppercase"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              Shop the TEB
            </motion.button>

            <motion.button
              className="flex items-center gap-3 text-white text-sm font-medium bg-transparent border-none cursor-pointer"
              whileHover={{ x: 4 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              How it works
              <span className="w-9 h-9 rounded-full border border-white/40 flex items-center justify-center text-base">→</span>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute right-8 top-1/2 -translate-y-1/2 z-20 text-white/40 text-xs tracking-widest uppercase font-semibold"
        style={{ writingMode: "vertical-rl" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
      >
        Scroll
      </motion.div>

      {/* Stats bar */}
      <div className="absolute bottom-0 left-0 right-0 z-20 bg-black/50 backdrop-blur-md border-t border-white/10 grid grid-cols-4">
        {stats.map((s, i) => (
          <motion.div
            key={i}
            className={`flex items-center gap-4 px-8 py-5 ${i < stats.length - 1 ? "border-r border-white/10" : ""}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 + i * 0.1, duration: 0.5, ease: "easeOut" }}
          >
            <CountUp value={s.value} prefix={s.prefix} suffix={s.suffix} />
            <div>
              <p className="text-white/90 text-xs font-medium leading-snug m-0">{s.label}</p>
              <p className="text-white/50 text-xs leading-snug m-0">{s.sub}</p>
            </div>
          </motion.div>
        ))}
      </div>

    </div>
  );
}