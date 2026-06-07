"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

const images = [
    "/image 1.jpeg",
    "/image 1 - Copy (2).jpeg",
    "/image 1 - Copy.jpeg"
];

export default function PhotoAlbum() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 4000); // Change photo every 4 seconds

        return () => clearInterval(timer);
    }, []);

    return (
        <section className="py-14 sm:py-20 text-center px-4 sm:px-6 w-full flex justify-center relative z-10">
            <div className="max-w-5xl w-full">
                <h2 className="text-3xl sm:text-4xl font-bold text-[#4f6f2f] mb-10 sm:mb-12 drop-shadow-sm">
                    Captured Moments
                </h2>

                <div className="relative mx-auto w-[560px] max-w-full h-[760px] rounded-3xl overflow-hidden shadow-2xl bg-white/80 border-8 border-white/60 group">
                    {images.map((src, index) => (
                        <div
                            key={index}
                            className="absolute inset-0 transition-transform duration-1000 ease-in-out"
                            style={{ transform: `translateX(${(index - currentIndex) * 100}%)` }}
                        >
                            <Image
                                src={src}
                                alt={`Wedding moment ${index + 1}`}
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1000px"
                                priority={index === 0}
                            />
                        </div>
                    ))}

                    {/* Decorative Corner Overlays */}
                    <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-black/20 to-transparent z-20 pointer-events-none"></div>
                    <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-black/20 to-transparent z-20 pointer-events-none"></div>

                    {/* Navigation Dots */}
                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-30">
                        {images.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                className={`w-3 h-3 rounded-full transition-all duration-300 shadow-sm ${index === currentIndex
                                        ? "bg-white scale-125 shadow-md"
                                        : "bg-white/50 hover:bg-white/80"
                                    }`}
                                aria-label={`Go to image ${index + 1}`}
                            />
                        ))}
                    </div>

                    {/* Next/Prev buttons visible on hover */}
                    <button
                        onClick={() => setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)}
                        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 text-white p-2 rounded-full backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100 z-30 shadow-lg"
                        aria-label="Previous image"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                        </svg>
                    </button>
                    <button
                        onClick={() => setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)}
                        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 text-white p-2 rounded-full backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100 z-30 shadow-lg"
                        aria-label="Next image"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    );
}
