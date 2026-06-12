"use client";

import { useState } from "react";
import { db } from "../../lib/firebase";
import { doc, setDoc, serverTimestamp, getDoc } from "firebase/firestore";
import { motion } from "framer-motion";

export default function RSVPForm() {
  const [formData, setFormData] = useState({ name: "", guests: 1, rsvp: "" });
  const [submitStatus, setSubmitStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  async function handleSubmit(e) {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    const docId = formData.name.toLowerCase().trim().replace(/ /g, "-");

    try {
      const docRef = doc(db, "guests", docId);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setError("You have already responded ❤️");
        setIsSubmitting(false);
        return;
      }

      await setDoc(docRef, {
        ...formData,
        submittedAt: serverTimestamp(),
      });

      setSubmitStatus("success");
    } catch (err) {
      console.error("RSVP save error:", err);
      setError("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section className="py-20 sm:py-32 bg-white px-4 flex flex-col items-center overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12 sm:mb-16"
      >
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-cormorant text-[#2C2C2C] font-light tracking-wide">
          Be Our Guest
        </h2>
        <p className="text-sm sm:text-base text-[#8C7A6B] mt-4 font-light italic">
          We would love for you to join us
        </p>
      </motion.div>

      {submitStatus === "success" ? (
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="text-center bg-[#FAF9F6] border border-[#E8DCC4] p-12 sm:p-16 max-w-lg w-full"
        >
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", delay: 0.2 }}
            className="w-16 h-16 mx-auto border border-[#A39171] rounded-full flex items-center justify-center mb-6"
          >
            <span className="text-[#A39171] text-2xl font-serif italic">✓</span>
          </motion.div>
          <h3 className="text-2xl sm:text-3xl font-cormorant text-[#2C2C2C] mb-4">Thank You!</h3>
          <p className="text-[#5A5A5A] font-light">Your RSVP has been beautifully received.</p>
        </motion.div>
      ) : (
        <motion.form 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          onSubmit={handleSubmit} 
          className="w-full max-w-md flex flex-col gap-8"
        >
          {error && <p className="text-red-800 text-sm text-center font-light">{error}</p>}
          
          <div className="flex flex-col gap-8">
            <div className="relative group">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder=" "
                required
                className="w-full bg-transparent border-b border-[#D4CBB3] focus:border-[#A39171] py-3 px-2 text-[#2C2C2C] placeholder-transparent focus:outline-none transition-colors peer"
              />
              <label className="absolute left-2 top-3 text-[#8C7A6B] text-sm font-light transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-[#A39171] peer-valid:-top-4 peer-valid:text-xs peer-valid:text-[#8C7A6B]">
                Your Name
              </label>
            </div>

            <div className="relative group">
              <input
                type="number"
                name="guests"
                value={formData.guests}
                onChange={handleChange}
                placeholder=" "
                min="1"
                required
                className="w-full bg-transparent border-b border-[#D4CBB3] focus:border-[#A39171] py-3 px-2 text-[#2C2C2C] placeholder-transparent focus:outline-none transition-colors peer"
              />
              <label className="absolute left-2 top-3 text-[#8C7A6B] text-sm font-light transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-[#A39171] peer-valid:-top-4 peer-valid:text-xs peer-valid:text-[#8C7A6B]">
                Number of Guests
              </label>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-4">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              onClick={() => setFormData({ ...formData, rsvp: "Joyfully Accept" })}
              disabled={isSubmitting}
              className="flex-1 border border-[#D4CBB3] bg-[#FAF9F6] text-[#2C2C2C] py-4 text-xs tracking-widest uppercase hover:border-[#A39171] hover:text-[#A39171] transition-all duration-300 disabled:opacity-50"
            >
              {isSubmitting && formData.rsvp === "Joyfully Accept" ? "Sending..." : "Joyfully Accept"}
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              onClick={() => setFormData({ ...formData, rsvp: "Regretfully Decline" })}
              disabled={isSubmitting}
              className="flex-1 border border-[#D4CBB3] bg-transparent text-[#5A5A5A] py-4 text-xs tracking-widest uppercase hover:border-[#A39171] hover:text-[#A39171] transition-all duration-300 disabled:opacity-50"
            >
              {isSubmitting && formData.rsvp === "Regretfully Decline" ? "Sending..." : "Decline"}
            </motion.button>
          </div>
        </motion.form>
      )}
    </section>
  );
}
