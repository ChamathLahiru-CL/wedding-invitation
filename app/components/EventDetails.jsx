"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export default function EventDetails() {
    const calendarUrl = "https://calendar.google.com/calendar/render?action=TEMPLATE&text=Wedding%20of%20Thejani%20%26%20Dhanushka&dates=20260803T043000Z/20260803T103000Z&details=Join%20us%20to%20celebrate%20our%20wedding!&location=Hotel%20Ramrich,%20Temple%20Road,%20Ekala,%20Ja-Ela";

    const [activeTab, setActiveTab] = useState("The Wedding Day");

    const tabs = ["The Day Before", "The Wedding Day", "The Day After"];

    const events = {
        "The Day Before": [
            { name: "Event One", time: "03:00 PM" },
            { name: "Event Two", time: "05:00 PM" },
            { name: "Event Three", time: "08:00 PM" }
        ],
        "The Wedding Day": [
            { name: "The Ceremony", time: "10:00 AM", location: "Hotel Ramrich, Temple Road, Ekala", link: calendarUrl },
            { name: "The Celebration", time: "11:30 AM", location: "Hotel Ramrich, Temple Road, Ekala", link: calendarUrl },
            { name: "Farewell", time: "04:00 PM", location: "Hotel Ramrich, Temple Road, Ekala", link: calendarUrl }
        ],
        "The Day After": [
            { name: "Event One", time: "03:00 PM" },
            { name: "Event Two", time: "05:00 PM" },
            { name: "Event Three", time: "08:00 PM" }
        ]
    };

    return (
        <section className="py-20 sm:py-32 text-center px-4 sm:px-6 relative bg-white">
            <motion.h2 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-3xl sm:text-4xl lg:text-5xl font-cormorant text-[#2C2C2C] mb-12 font-light tracking-wide"
            >
                The Plans
            </motion.h2>

            <div className="max-w-4xl mx-auto">
                <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="flex justify-center gap-4 sm:gap-12 mb-12 border-b border-[#E8DCC4] overflow-x-auto pb-4"
                >
                    {tabs.map(tab => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`text-sm tracking-widest uppercase pb-2 transition-colors whitespace-nowrap ${activeTab === tab ? "text-[#A39171] border-b-2 border-[#A39171]" : "text-[#8C7A6B] hover:text-[#2C2C2C]"}`}
                        >
                            {tab}
                        </button>
                    ))}
                </motion.div>

                <motion.div 
                    key={activeTab}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col gap-8 max-w-2xl mx-auto"
                >
                    {events[activeTab].map((event, index) => (
                        <motion.div 
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="flex flex-col sm:flex-row justify-between items-center sm:items-start border-b border-[#E8DCC4]/50 pb-8 last:border-0 hover:-translate-y-1 transition-transform duration-300"
                        >
                            <div className="text-center sm:text-left mb-4 sm:mb-0">
                                <h3 className="text-2xl font-cormorant text-[#2C2C2C] font-light mb-2">{event.name}</h3>
                                {event.location && <p className="text-sm text-[#5A5A5A] font-light">{event.location}</p>}
                                {event.link && <a href={event.link} target="_blank" rel="noopener noreferrer" className="text-[10px] text-[#A39171] uppercase tracking-[0.2em] mt-2 block hover:underline">Add to Calendar</a>}
                            </div>
                            <div className="text-[#A39171] font-light tracking-widest text-sm">
                                {event.time}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
