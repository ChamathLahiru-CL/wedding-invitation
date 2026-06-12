"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const images = [
  { src: "/couple-photo.jpg", rotate: -3, y: 10 },
  { src: "/image 2.jpeg", rotate: 2, y: -20 },
  { src: "/image 1 - Copy.jpeg", rotate: -1, y: 15 },
  { src: "/image 1 - Copy (2).jpeg", rotate: 4, y: -10 },
  { src: "/image 1.jpeg", rotate: -2, y: 5 },
  { src: "/image 2.jpeg", rotate: 3, y: -15 },
];

export default function PhotoAlbum() {
  return (
    <section className="py-24 sm:py-32 bg-[#FAF9F6] px-4 sm:px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-24"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-cormorant text-[#2C2C2C] font-light tracking-wide mb-4">
            Captured Moments
          </h2>
          <p className="text-[#8C7A6B] text-sm tracking-widest uppercase font-light">A glimpse into our journey</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 lg:gap-16 items-center justify-center">
          {images.map((img, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 100, rotate: 0 }}
              whileInView={{ opacity: 1, y: img.y, rotate: img.rotate }}
              whileHover={{ 
                scale: 1.05, 
                rotate: 0, 
                y: img.y - 10,
                zIndex: 50,
                transition: { duration: 0.4, ease: "easeOut" }
              }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ 
                duration: 1, 
                delay: index * 0.1, 
                ease: [0.25, 1, 0.5, 1] 
              }}
              className="relative aspect-[4/5] w-full max-w-sm mx-auto bg-white p-3 sm:p-4 pb-12 sm:pb-16 shadow-[0_15px_35px_rgba(0,0,0,0.05)] hover:shadow-[0_25px_50px_rgba(0,0,0,0.1)] transition-shadow duration-500 rounded-sm cursor-crosshair group z-10"
            >
              <div className="relative w-full h-full overflow-hidden border border-[#E8DCC4]/30">
                <Image
                  src={img.src}
                  alt={`Gallery moment ${index + 1}`}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-[#A39171]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <div className="absolute bottom-4 left-0 w-full text-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <span className="font-cormorant text-xl text-[#2C2C2C] italic tracking-wide">
                  Memory {index + 1}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="mt-32 text-center max-w-3xl mx-auto"
        >
          <p className="text-xl sm:text-2xl md:text-3xl font-cormorant text-[#2C2C2C] leading-relaxed italic font-light relative">
            <span className="text-4xl sm:text-6xl text-[#E8DCC4] absolute -top-8 -left-8 font-serif">"</span>
            We can’t wait to see all of our beloved friends and relatives at our wedding. Your presence will make our day truly special!
            <span className="text-4xl sm:text-6xl text-[#E8DCC4] absolute -bottom-10 -right-4 font-serif">"</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
