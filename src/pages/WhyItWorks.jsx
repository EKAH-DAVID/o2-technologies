import { useRef } from "react";
import { motion, useInView } from "framer-motion";


import card1Img from "../assets/audience-gobag.png";
import card3Img from "../assets/product-outdoor.png";

const cards = [
  {
    emoji: "🧳",
    title: "Built to go anywhere",
    body: "Lighter than a water bottle. Smaller than a first aid kit. The TEB fits in a bag, a desk drawer, a glove compartment, or a go-bag — so it's there when you need it.",
    image: card1Img,
    imageBg: null,
  },
  {
    emoji: "⚡",
    title: "Works when nothing else does",
    body: "No batteries. No charging. No app. The TEB is purely mechanical — which means it works during power outages and the exact kind of chaos where everything else breaks down.",
    image: null,
    imageBg: "stat",
  },
  {
    emoji: "🎯",
    title: "No training required",
    body: "Emergencies don't wait for you to read a manual. The TEB deploys in three steps — designed so that anyone, including children, can use it under pressure.",
    image: card3Img,
    imageBg: null,
  },
];

function StatCard() {
  return (
    <div className="w-full h-full bg-[#dce8f5] rounded-b-xl flex flex-col items-center justify-center py-10 gap-3">
      <div className="flex items-end gap-1.5 h-16">
        {[40, 55, 62, 70, 75, 82, 90, 98].map((h, i) => (
          <motion.div
            key={i}
            className="w-5 rounded-sm bg-[#6aaad4]"
            initial={{ scaleY: 0, originY: 1 }}
            whileInView={{ scaleY: 1 }}
            transition={{ duration: 0.5, delay: 0.1 * i, ease: "easeOut" }}
            viewport={{ once: true }}
            style={{ height: `${h}%` }}
          />
        ))}
      </div>
      <p className="text-[#4a7fa8] text-xs font-semibold tracking-wide">98% Field Tested</p>
    </div>
  );
}

export default function WhyItWorksSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section ref={sectionRef} className="bg-[#f5f0e8] py-24 px-6 md:px-16 lg:px-24">
      <div className="max-w-6xl mx-auto">

        {/* Eyebrow */}
        <motion.p
          className="text-[#0d1410] text-xs font-semibold tracking-widest uppercase flex items-center gap-2 mb-5"
          initial={{ opacity: 0, x: -16 }} animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <span className="w-6 h-px bg-[#0d1410] inline-block" /> WHY IT WORKS
        </motion.p>

        {/* Headline */}
        <motion.h2
          className="text-4xl xl:text-5xl font-extrabold text-[#0d1410] leading-tight mb-14 max-w-xl"
          style={{ fontFamily: "Georgia, serif" }}
          initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          Engineered for the moments that{" "}
          <span className="text-green-600 italic">can't wait.</span>
        </motion.h2>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              className="bg-white rounded-xl flex flex-col overflow-hidden border border-black/5"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6, boxShadow: "0 20px 40px rgba(0,0,0,0.10)" }}
            >
              <div className="p-6 flex flex-col gap-3 flex-1">
                <motion.span
                  className="text-2xl"
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={isInView ? { scale: 1, opacity: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.35 + i * 0.12, type: "spring" }}
                >
                  {card.emoji}
                </motion.span>
                <h3 className="text-[#0d1410] text-base font-bold leading-snug">{card.title}</h3>
                <p className="text-[#0d1410]/55 text-sm leading-relaxed flex-1">{card.body}</p>
                <motion.a
                  href="#"
                  className="text-green-600 text-sm font-medium mt-1 inline-block"
                  whileHover={{ x: 4 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  Learn more →
                </motion.a>
              </div>

              <div className="h-44 overflow-hidden">
                {card.imageBg === "stat" ? (
                  <StatCard />
                ) : (
                  <motion.img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.06 }}
                    transition={{ duration: 0.5 }}
                  />
                )}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}