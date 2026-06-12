"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Countdown() {
  const weddingDate = new Date("2026-08-03T09:30:00").getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = weddingDate - now;

      if (distance < 0) {
        clearInterval(timer);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((distance / (1000 * 60)) % 60),
        seconds: Math.floor((distance / 1000) % 60),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 sm:py-32 px-4 flex justify-center text-center bg-[#FAF9F6] relative overflow-hidden">
      <div className="absolute inset-0 bg-[#E8DCC4] opacity-[0.15] -z-10 mix-blend-multiply"></div>
      
      <div className="max-w-4xl mx-auto z-10">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xs sm:text-sm text-[#8C7A6B] tracking-[0.3em] uppercase mb-8 sm:mb-16 font-light"
        >
          Counting down to forever
        </motion.p>
        
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15 } }
          }}
          className="flex flex-wrap justify-center gap-6 sm:gap-12 md:gap-20"
        >
          {[
            { label: "Days", value: timeLeft.days },
            { label: "Hours", value: timeLeft.hours },
            { label: "Minutes", value: timeLeft.minutes },
            { label: "Seconds", value: timeLeft.seconds }
          ].map((item, index) => (
            <motion.div 
              key={index} 
              variants={{
                hidden: { scale: 0.8, opacity: 0 },
                visible: { scale: 1, opacity: 1, transition: { type: "spring", stiffness: 100, damping: 15 } }
              }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="flex flex-col items-center group cursor-default"
            >
              <div className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-full border border-[#D4CBB3] flex items-center justify-center relative bg-white group-hover:border-[#A39171] transition-colors duration-500 shadow-sm">
                <span className="text-3xl sm:text-4xl md:text-5xl font-cormorant text-[#2C2C2C] font-light">
                  {item.value.toString().padStart(2, '0')}
                </span>
                <div className="absolute -inset-2 border border-[#E8DCC4]/30 rounded-full group-hover:rotate-180 transition-transform duration-[3s] ease-in-out"></div>
              </div>
              <span className="text-[10px] sm:text-xs text-[#8C7A6B] tracking-[0.2em] uppercase mt-6 font-light">
                {item.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
