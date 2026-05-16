"use client";

import { useState } from "react";
import { db } from "../../lib/firebase";
import { doc, setDoc } from "firebase/firestore";
import { getDoc } from "firebase/firestore";

export default function RSVPForm({ guestName }) {
    const [attending, setAttending] = useState("");
    const [submitted, setSubmitted] = useState(false);

    async function handleSubmit(e) {
        e.preventDefault();

        const docRef = doc(
            db,
            "guests",
            guestName.toLowerCase().replace(/ /g, "-")
        );

        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            alert("You have already responded ❤️");
            return;
        }

        try {
            await setDoc(docRef, {
                name: guestName,
                attending: attending === "Accepted",
                status: attending,
                submittedAt: new Date().toISOString(),
            });

            setSubmitted(true);
        } catch (error) {
            console.error("RSVP save error:", error);
        }
    }

    return (
        <section className="py-16 sm:py-28 px-4 sm:px-6">
            <div className="max-w-5xl mx-auto text-white rounded-[32px] sm:rounded-[56px] p-8 sm:p-12 md:p-16 text-center bg-gradient-to-br from-[#5e5349]/95 via-[#5a4a42]/92 to-[#4b4038]/95 backdrop-blur-xl border border-white/10 shadow-[0_36px_90px_rgba(50,34,28,0.30)]">
                <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 sm:mb-5">Confirm Your Presence</h2>

                <p className="mb-10 sm:mb-12 text-white/80 text-base sm:text-lg md:text-xl">
                    Kindly let us know by{" "}
                    <span className="text-[#c9a768] font-bold">May 01, 2026</span>
                </p>

                {submitted ? (
                    <p className="text-2xl font-bold text-[#d4af37]">
                        Thank you! Your RSVP has been saved.
                    </p>
                ) : (
                    <form onSubmit={handleSubmit}>
                        <label className="block text-left text-sm sm:text-base md:text-lg font-semibold text-[#c9a768] mb-2 tracking-widest">
                            YOUR NAME(S)
                        </label>

                        <input
                            value={guestName}
                            readOnly
                            className="w-full mb-10 sm:mb-12 rounded-3xl bg-white/10 border border-white/20 px-5 sm:px-7 py-4 sm:py-5 text-white text-base sm:text-lg md:text-xl focus:outline-none focus:ring-2 focus:ring-[#d4af37]/40"
                        />

                        <label className="block text-left text-sm sm:text-base md:text-lg font-semibold text-[#c9a768] mb-4 tracking-widest">
                            WILL YOU JOIN THE DANCE?
                        </label>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 mb-10 sm:mb-12">
                            <button
                                type="button"
                                onClick={() => setAttending("Accepted")}
                                className={`rounded-3xl border px-6 sm:px-7 py-4 sm:py-5 font-semibold text-base sm:text-lg md:text-xl transition-all duration-300 ${attending === "Accepted"
                                    ? "bg-[#c9a768] text-[#4e3a33] shadow-[0_10px_24px_rgba(201,167,104,0.35)]"
                                    : "bg-white/10 text-white hover:bg-white/15"
                                    }`}
                            >
                                Joyfully Accept
                            </button>

                            <button
                                type="button"
                                onClick={() => setAttending("Declined")}
                                className={`rounded-3xl border px-6 sm:px-7 py-4 sm:py-5 font-semibold text-base sm:text-lg md:text-xl transition-all duration-300 ${attending === "Declined"
                                    ? "bg-[#c9a768] text-[#4e3a33] shadow-[0_10px_24px_rgba(201,167,104,0.35)]"
                                    : "bg-white/10 text-white hover:bg-white/15"
                                    }`}
                            >
                                Regretfully Decline
                            </button>
                        </div>

                        <button
                            disabled={!attending}
                            className="w-full rounded-3xl bg-[#c9a768] py-5 sm:py-6 font-bold text-base sm:text-lg md:text-xl text-[#4e3a33] shadow-[0_18px_46px_rgba(201,167,104,0.35)] disabled:opacity-50 disabled:shadow-none"
                        >
                            Send RSVP
                        </button>
                    </form>
                )}
            </div>
        </section>
    );
}