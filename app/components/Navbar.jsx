"use client";

import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 w-full z-50 bg-[#FAF9F6]/90 backdrop-blur-md border-b border-[#E8DCC4]/50 py-4 flex justify-center items-center transition-all duration-300"
    >
      {/* Logo */}
      <div className="text-2xl font-cormorant font-light tracking-widest text-[#2C2C2C] hover:scale-110 transition-transform cursor-pointer">
        T<span className="text-[#A39171] italic mx-1">&</span>D
      </div>
    </motion.nav>
  );
}
