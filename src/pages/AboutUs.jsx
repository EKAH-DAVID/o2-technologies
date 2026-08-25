import { useRef } from "react";
import { motion, useInView } from "framer-motion";


import productImg from "../assets/img2.png";

const specs = [
  { value: "<10S", label: "DEPLOYMENT TIME" },
  { value: "0", label: "POWER REQUIRED" },
  { value: "280G", label: "TOTAL WEIGHT" },
  { value: "∞", label: "CARTRIDGE REPLACEABLE" },
];

const floatingLabels = [
  { text: "Replaceable cartridge", position: "top-[10%] left-0" },
  { text: "No power needed",       position: "top-[48%] right-0" },
  { text: "10-second deploy",      position: "bottom-[10%] left-0" },
];

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1], delay } },
});

export default function AboutSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section ref={sectionRef} className="bg-[#0d1410] text-white py-24 px-6 md:px-16 lg:px-24">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* LEFT — Product image with floating labels */}
        <div className="relative flex items-center justify-center">

          {/* Floating labels */}
          {floatingLabels.map((label, i) => (
            <motion.div
              key={i}
              className={`absolute ${label.position} flex items-center gap-2 bg-[#1a2420]/80 border border-white/10 rounded-full px-3 py-1.5 text-xs font-medium text-white/80 backdrop-blur-sm whitespace-nowrap z-10`}
              initial={{ opacity: 0, x: label.position.includes("right") ? 20 : -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 + i * 0.15 }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block" />
              {label.text}
            </motion.div>
          ))}

          {/* Product image */}
          <motion.div
            className="rounded-2xl overflow-hidden w-full max-w-sm aspect-[4/5]"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          >
            <img src={productImg} alt="TEB Product" className="w-full h-full object-cover" />
          </motion.div>
        </div>

        {/* RIGHT — Copy + specs */}
        <div className="flex flex-col gap-6">

          <motion.p
            className="text-green-400 text-xs font-semibold tracking-widest uppercase flex items-center gap-2"
            variants={fadeUp(0.1)} initial="hidden" animate={isInView ? "show" : "hidden"}
          >
            <span className="text-white/40">—</span> THE TEB
          </motion.p>

          <motion.h2
            className="text-5xl xl:text-6xl font-extrabold leading-[1.05] m-0"
            style={{ fontFamily: "Georgia, serif" }}
            variants={fadeUp(0.2)} initial="hidden" animate={isInView ? "show" : "hidden"}
          >
            Small enough to carry{" "}
            <span className="text-green-400 italic">everywhere.</span>
            <br />
            Powerful enough to matter.
          </motion.h2>

          <motion.p
            className="text-white/60 text-sm leading-relaxed max-w-lg"
            variants={fadeUp(0.3)} initial="hidden" animate={isInView ? "show" : "hidden"}
          >
            The TEB was built around one question: what does a person actually need in the first three
            minutes of a breathing emergency? The answer was a device that's{" "}
            <span className="text-white font-medium">lighter than a water bottle</span>, works without
            electricity, fits in a bag, a drawer, a glove compartment — and{" "}
            <span className="text-white font-medium">deploys in under ten seconds</span>.
          </motion.p>

          {/* Specs grid */}
          <motion.div
            className="grid grid-cols-2 gap-px bg-white/10 rounded-xl overflow-hidden mt-2"
            variants={fadeUp(0.4)} initial="hidden" animate={isInView ? "show" : "hidden"}
          >
            {specs.map((s, i) => (
              <motion.div
                key={i}
                className="bg-[#111a15] px-6 py-5 flex flex-col gap-1"
                whileHover={{ backgroundColor: "#162019" }}
                transition={{ duration: 0.2 }}
              >
                <span className="text-white text-3xl font-bold" style={{ fontFamily: "Georgia, serif" }}>
                  {s.value}
                </span>
                <span className="text-white/40 text-[10px] font-semibold tracking-widest uppercase">
                  {s.label}
                </span>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA row */}
          <motion.div
            className="flex items-center gap-6 mt-2"
            variants={fadeUp(0.5)} initial="hidden" animate={isInView ? "show" : "hidden"}
          >
            <motion.button
              className="bg-green-400 hover:bg-green-500 text-black font-bold text-sm px-8 py-3.5 rounded-full tracking-widest uppercase"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              Shop the TEB
            </motion.button>
            <motion.a
              href="#"
              className="text-white/60 hover:text-white text-sm font-medium transition-colors duration-200"
              whileHover={{ x: 4 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              See full specs →
            </motion.a>
          </motion.div>
        </div>

      </div>
    </section>
  );
}