"use client";

import { motion } from "framer-motion";

export default function QuoteSection() {
  return (
    <section className="py-20 sm:py-32 px-6 flex justify-center text-center relative z-10 bg-white">
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-4xl w-full"
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-cormorant text-[#2C2C2C] mb-8 sm:mb-12 font-light italic">
          “You are my today and all of my tomorrows.”
        </h2>
        <p className="text-[#5A5A5A] text-sm sm:text-base leading-relaxed sm:leading-loose font-light max-w-3xl mx-auto">
          Your smile is so gentle, yet powerful enough to light up the darkest corners of my soul. It carries warmth, hope, and a kind of magic the night sky could only dream of. While stars twinkle far away in the heavens, your smile glows right here beside me— real, radiant, and made just for my heart to find peace. It’s not just beauty I see; it’s love, comfort, and home all at once.
        </p>
      </motion.div>
    </section>
  );
}
