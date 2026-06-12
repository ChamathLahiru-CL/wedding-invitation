"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Navbar from "./components/Navbar";
import Countdown from "./components/Countdown";
import QuoteSection from "./components/QuoteSection";
import StorySection from "./components/StorySection";
import EventDetails from "./components/EventDetails";
import PhotoAlbum from "./components/PhotoAlbum";
import RSVPForm from "./components/RSVPForm";
import MagneticButton from "./components/MagneticButton";

export default function Home() {
  const [guestName, setGuestName] = useState("");
  const [isNameSubmitted, setIsNameSubmitted] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const name = params.get("guest");
    if (name) {
      setGuestName(decodeURIComponent(name));
      setIsNameSubmitted(true);
    }

    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const moveX = clientX - window.innerWidth / 2;
      const moveY = clientY - window.innerHeight / 2;
      setMousePosition({ x: moveX, y: moveY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-[#333333] overflow-hidden selection:bg-[#E8DCC4] selection:text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative w-full pt-20 sm:pt-28 md:pt-36 pb-12 sm:pb-16 px-4 flex flex-col items-center justify-center text-center mt-12 min-h-[70vh] overflow-hidden">
        {/* Background Texture */}
        <div className="absolute inset-0 w-full h-full -z-20 opacity-[0.15] mix-blend-multiply pointer-events-none">
          <Image src="/bg-texture.jpg" alt="Background Texture" fill className="object-cover object-top" priority />
        </div>
        <div className="absolute top-0 left-0 w-full h-[70vh] bg-gradient-to-b from-[#E8DCC4]/40 to-transparent pointer-events-none -z-10"></div>
        
        {/* Flowering Vines Parallax */}
        <motion.div 
          animate={{ 
            x: mousePosition.x * -0.03, 
            y: mousePosition.y * -0.03 
          }}
          transition={{ type: "spring", stiffness: 75, damping: 20 }}
          className="absolute top-0 left-0 w-64 h-96 sm:w-96 sm:h-[500px] pointer-events-none z-0"
        >
          <Image src="/LeftSide.png" alt="Left Vine" fill className="object-contain object-left-top" priority />
        </motion.div>
        
        <motion.div 
          animate={{ 
            x: mousePosition.x * 0.03, 
            y: mousePosition.y * 0.03 
          }}
          transition={{ type: "spring", stiffness: 75, damping: 20 }}
          className="absolute top-0 right-0 w-64 h-96 sm:w-96 sm:h-[500px] pointer-events-none z-0"
        >
          <Image src="/RightSide.png" alt="Right Vine" fill className="object-contain object-right-top" priority />
        </motion.div>

        <motion.div 
          className="max-w-5xl mx-auto relative w-full z-10"
          style={{ y: heroY, opacity }}
        >
          <div className="relative flex flex-col items-center">
            {/* Cute Emblem */}
            <motion.div 
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, ease: "backOut" }}
              className="relative w-32 h-32 sm:w-40 sm:h-40 mb-6"
            >
              <Image src="/heart-rings.png" alt="Heart and Rings" fill className="object-contain drop-shadow-sm" priority />
            </motion.div>
            
            <motion.h1 
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="text-[12vw] sm:text-7xl md:text-8xl lg:text-[10rem] font-cormorant text-[#2C2C2C] leading-none mb-4 font-light tracking-tight uppercase"
            >
              Forever<br/><span className="text-[#A39171] font-serif italic text-[10vw] sm:text-6xl md:text-7xl">&</span> After
            </motion.h1>
          </div>
          
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            className="text-sm sm:text-base md:text-lg text-[#5A5A5A] font-light mt-10 sm:mt-16 tracking-wide max-w-2xl mx-auto leading-relaxed"
          >
            Hi, Welcome to our Big Day in August 3, 2026. Together, let's create a remarkable journey where our dreams become realities.
          </motion.p>
        </motion.div>
      </section>

      <QuoteSection />
      <StorySection />

      {/* Countdown Section */}
      <Countdown />

      {/* Event Details Section */}
      <EventDetails />

      {/* Photo Album Section */}
      <PhotoAlbum />

      {/* RSVP Section */}
      <section className="py-16 sm:py-24 md:py-32 px-4 relative">
        <div className="max-w-3xl mx-auto relative z-10">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-cormorant text-[#2C2C2C] mb-8 sm:mb-12 text-center font-light">
            Kindly RSVP
          </h2>

          {!isNameSubmitted && guestName === "" ? (
            <div className="bg-white border border-[#E8DCC4] rounded-none sm:rounded-none p-8 sm:p-12 lg:p-16 max-w-xl mx-auto shadow-[0_10px_40px_rgba(0,0,0,0.03)] relative">
              <div className="absolute top-0 left-0 w-full h-1 bg-[#A39171]"></div>
              <p className="text-center text-[#8C7A6B] text-sm mb-8 tracking-widest uppercase">Please enter your name</p>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  const formData = new FormData(e.target);
                  const name = formData.get("name");
                  if (name.trim()) {
                    setGuestName(name);
                    setIsNameSubmitted(true);
                    window.history.pushState({}, "", `?guest=${encodeURIComponent(name)}`);
                  }
                }}
                className="flex flex-col gap-6"
              >
                <div className="relative">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Full Name"
                    className="w-full bg-transparent border-b border-[#D4CBB3] py-3 text-center text-lg text-[#2C2C2C] placeholder:text-[#B5AFA6] focus:outline-none focus:border-[#A39171] transition-colors font-light"
                    required
                  />
                </div>
                <MagneticButton className="w-full mt-4">
                  <button
                    type="submit"
                    className="px-8 py-4 bg-[#2C2C2C] text-white text-sm tracking-widest uppercase hover:bg-[#A39171] transition-colors duration-500 w-full"
                  >
                    Continue
                  </button>
                </MagneticButton>
              </form>
            </div>
          ) : (
            <RSVPForm guestName={guestName} />
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#FAF9F6] border-t border-[#E8DCC4]/50 pt-20 sm:pt-28 pb-10 px-6 text-[#5A5A5A] text-sm font-light">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 sm:gap-16 mb-20 text-center md:text-left"
        >
          {/* Column 1: Logo */}
          <div className="flex flex-col items-center md:items-start justify-center md:justify-start">
            <div className="text-4xl sm:text-5xl font-cormorant font-light tracking-widest text-[#2C2C2C] mb-4">
              T<span className="text-[#A39171] italic mx-2">&</span>D
            </div>
            <p className="text-[#8C7A6B] text-xs tracking-widest uppercase mt-2">August 3, 2026</p>
          </div>
          
          {/* Column 2: Links */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-[#2C2C2C] tracking-[0.2em] uppercase text-xs mb-8 font-medium">Links</h4>
            <ul className="space-y-5">
              <li><a href="#" className="hover:text-[#A39171] transition-colors relative group"><span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#A39171] transition-all duration-300 group-hover:w-full"></span>About Us</a></li>
              <li><a href="#" className="hover:text-[#A39171] transition-colors relative group"><span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#A39171] transition-all duration-300 group-hover:w-full"></span>Story</a></li>
              <li><a href="#" className="hover:text-[#A39171] transition-colors relative group"><span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#A39171] transition-all duration-300 group-hover:w-full"></span>RSVP</a></li>
              <li><a href="#" className="hover:text-[#A39171] transition-colors relative group"><span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#A39171] transition-all duration-300 group-hover:w-full"></span>Gallery</a></li>
            </ul>
          </div>

          {/* Column 3: Contacts */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-[#2C2C2C] tracking-[0.2em] uppercase text-xs mb-8 font-medium">Contacts</h4>
            <ul className="space-y-5">
              <li className="hover:text-[#2C2C2C] transition-colors cursor-default">0726233387 (Theja)<br/>0776233387 (Dhanu)</li>
              <li className="hover:text-[#2C2C2C] transition-colors cursor-default leading-relaxed">Hotel Ramrich,<br/>Temple Road, Ekala, Ja-Ela</li>
            </ul>
          </div>
        </motion.div>
        
        <div className="text-center pt-8 border-t border-[#E8DCC4]/50 text-xs tracking-widest uppercase">
          <p>Copyright © 2026 | Thejani & Dhanushka | All Rights Reserved <br className="sm:hidden"/> | Develop by W.A.H.ISHAN</p>
        </div>
      </footer>
    </div>
  );
}
