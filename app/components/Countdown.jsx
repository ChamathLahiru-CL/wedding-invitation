"use client";

import { useEffect, useState } from "react";

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
        <div className="mt-12 flex justify-center gap-5">
            {[
                ["Days", timeLeft.days],
                ["Hours", timeLeft.hours],
                ["Minutes", timeLeft.minutes],
                ["Seconds", timeLeft.seconds],
            ].map(([label, value]) => (
                <div
                    key={label}
                    className="w-24 h-24 rounded-2xl bg-white/80 shadow flex flex-col items-center justify-center"
                >
                    <p className="text-3xl font-bold text-[#4f6f2f]">{value}</p>
                    <p className="text-xs tracking-widest uppercase text-[#6b4f3f]">
                        {label}
                    </p>
                </div>
            ))}
        </div>
    );
}