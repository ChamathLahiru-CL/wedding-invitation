"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function StorySection() {
  const stories = [
    {
      title: "First Time We Met",
      text: "We met by chance at a coffee shop on a rainy afternoon. she was reading her favorite book, and I offered her the last available seat. What began as casual conversation quickly turned into hours of laughter neither of them expected.",
      image: "/illustration1.png"
    },
    {
      title: "Where Love Started",
      text: "A few weeks later, we went on our first official date to an art gallery. Walking through the exhibits, we realized how much we shared in common. That evening, under the city lights, we both knew this was the start of something truly special.",
      image: "/illustration2.png"
    }
  ];

  return (
    <section className="py-20 sm:py-32 px-6 bg-[#FAF9F6] overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="space-y-24 sm:space-y-32">
          {stories.map((story, index) => {
            const isReverse = index % 2 !== 0;
            return (
              <div key={index} className={`flex flex-col ${isReverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12 md:gap-20`}>
                <motion.div 
                  initial={{ opacity: 0, x: isReverse ? 100 : -100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                  className="w-full md:w-1/2 relative h-[400px] sm:h-[500px] group flex justify-center items-center"
                >
                  <div className="absolute inset-0 border border-[#D4CBB3] translate-x-4 translate-y-4 group-hover:translate-x-6 group-hover:translate-y-6 transition-transform duration-700 -z-10"></div>
                  <Image
                    src={story.image}
                    alt={story.title}
                    fill
                    className="object-contain object-center z-10 p-4"
                  />
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, x: isReverse ? -100 : 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                  className="w-full md:w-1/2 text-center md:text-left"
                >
                  <h3 className="text-sm font-light tracking-widest text-[#8C7A6B] uppercase mb-4">{story.title}</h3>
                  <h2 className="text-3xl sm:text-4xl font-cormorant text-[#2C2C2C] mb-6 font-light">{story.title}</h2>
                  <p className="text-[#5A5A5A] text-sm sm:text-base leading-relaxed font-light">
                    {story.text}
                  </p>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
