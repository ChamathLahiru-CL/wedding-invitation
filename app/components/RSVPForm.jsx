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
        <section className="py-20 px-6">
            <div className="max-w-3xl mx-auto bg-[#6b5149] text-white rounded-[40px] p-10 text-center">
                <h2 className="text-4xl font-bold mb-4">Confirm Your Presence</h2>

                <p className="mb-8">
                    Kindly let us know by{" "}
                    <span className="text-[#d4af37] font-bold">May 01, 2026</span>
                </p>

                {submitted ? (
                    <p className="text-2xl font-bold text-[#d4af37]">
                        Thank you! Your RSVP has been saved.
                    </p>
                ) : (
                    <form onSubmit={handleSubmit}>
                        <label className="block text-left text-sm font-bold text-[#d4af37] mb-2">
                            YOUR NAME(S)
                        </label>

                        <input
                            value={guestName}
                            readOnly
                            className="w-full mb-8 rounded-2xl bg-white/10 border border-white/20 px-5 py-4 text-white"
                        />

                        <label className="block text-left text-sm font-bold text-[#d4af37] mb-3">
                            WILL YOU JOIN THE DANCE?
                        </label>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                            <button
                                type="button"
                                onClick={() => setAttending("Accepted")}
                                className={`rounded-2xl border px-5 py-4 font-bold ${attending === "Accepted"
                                    ? "bg-[#d4af37] text-[#6b5149]"
                                    : "bg-white/10 text-white"
                                    }`}
                            >
                                Joyfully Accept
                            </button>

                            <button
                                type="button"
                                onClick={() => setAttending("Declined")}
                                className={`rounded-2xl border px-5 py-4 font-bold ${attending === "Declined"
                                    ? "bg-[#d4af37] text-[#6b5149]"
                                    : "bg-white/10 text-white"
                                    }`}
                            >
                                Regretfully Decline
                            </button>
                        </div>

                        <button
                            disabled={!attending}
                            className="w-full rounded-2xl bg-[#d4af37] py-4 font-bold text-[#6b5149] disabled:opacity-50"
                        >
                            Send RSVP
                        </button>
                    </form>
                )}
            </div>
        </section>
    );
}