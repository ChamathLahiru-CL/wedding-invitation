"use client";

import { useEffect, useState } from "react";

const countdownStyles = `
  @keyframes flip {
    0% {
      transform: rotateY(0deg);
      opacity: 1;
    }
    50% {
      transform: rotateY(90deg);
      opacity: 0.5;
    }
    100% {
      transform: rotateY(0deg);
      opacity: 1;
    }
  }

  @keyframes float {
    0%, 100% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-8px);
    }
  }

  @keyframes glow {
    0%, 100% {
      box-shadow: 0 0 20px rgba(79, 111, 47, 0.3), 0 20px 40px rgba(0, 0, 0, 0.1);
    }
    50% {
      box-shadow: 0 0 30px rgba(79, 111, 47, 0.5), 0 20px 50px rgba(0, 0, 0, 0.15);
    }
  }

  @keyframes slideInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .countdown-number {
    animation: flip 0.6s ease-in-out;
    perspective: 1000px;
  }

  .countdown-box {
    animation: slideInUp 0.6s ease-out forwards, float 3s ease-in-out infinite;
  }

  .countdown-box:nth-child(1) { animation-delay: 0s, 0s; }
  .countdown-box:nth-child(2) { animation-delay: 0.1s, 0.3s; }
  .countdown-box:nth-child(3) { animation-delay: 0.2s, 0.6s; }
  .countdown-box:nth-child(4) { animation-delay: 0.3s, 0.9s; }

  .countdown-box:hover {
    animation: glow 0.6s ease-in-out !important;
  }
`;

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
        <>
            <style>{countdownStyles}</style>
            <div className="mt-16 flex justify-center gap-4 px-4 flex-wrap">
                {[
                    ["Days", timeLeft.days],
                    ["Hours", timeLeft.hours],
                    ["Minutes", timeLeft.minutes],
                    ["Seconds", timeLeft.seconds],
                ].map(([label, value]) => (
                    <div
                        key={label}
                        className="countdown-box group relative w-28 h-28 rounded-3xl bg-gradient-to-br from-white/95 via-white/90 to-white/85 backdrop-blur-md shadow-2xl hover:shadow-3xl hover:scale-110 transition-all duration-300 ease-out flex flex-col items-center justify-center border border-white/40 overflow-hidden cursor-pointer"
                    >
                        <div className="absolute inset-0 bg-gradient-to-tr from-[#4f6f2f]/5 to-[#d4a574]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <div className="relative z-10 flex flex-col items-center justify-center h-full">
                            <p className="countdown-number text-4xl font-bold bg-gradient-to-r from-[#4f6f2f] to-[#6b8e3f] bg-clip-text text-transparent">
                                {value.toString().padStart(2, '0')}
                            </p>
                            <p className="text-xs tracking-widest uppercase font-semibold text-[#6b4f3f]/70 mt-2 group-hover:text-[#6b4f3f] transition-colors duration-300">
                                {label}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}