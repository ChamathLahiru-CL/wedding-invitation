"use client";

import { useEffect, useState } from "react";
import { db } from "../../lib/firebase";
import { collection, onSnapshot } from "firebase/firestore";

export default function AdminPage() {
    const [guests, setGuests] = useState([]);

    useEffect(() => {
        const unsubscribe = onSnapshot(collection(db, "guests"), (snapshot) => {
            const data = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));

            setGuests(data);
        });

        return () => unsubscribe();
    }, []);

    const accepted = guests.filter((guest) => guest.status === "Accepted").length;
    const declined = guests.filter((guest) => guest.status === "Declined").length;
    const total = guests.length;


    // Open WhatsApp with pre-filled message

    function sendWhatsApp(guest) {
        const message = `Hi ${guest.name},

You are invited to our wedding!

Click here: https://yourdomain.com/${guest.id}`;

        const url = `https://wa.me/${guest.phone}?text=${encodeURIComponent(message)}`;

        window.open(url, "_blank");
    }

    return (
        <main className="min-h-screen bg-[#f8f5ef] p-4 sm:p-8">
            <h1 className="text-2xl sm:text-4xl font-bold text-[#4f6f2f] mb-6 sm:mb-8">
                Wedding RSVP Dashboard
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-10">
                <div className="bg-white rounded-2xl shadow p-4 sm:p-6">
                    <p className="text-gray-500">Total Responded</p>
                    <h2 className="text-3xl sm:text-4xl font-bold text-[#4f6f2f]">{total}</h2>
                </div>

                <div className="bg-white rounded-2xl shadow p-4 sm:p-6">
                    <p className="text-gray-500">Accepted</p>
                    <h2 className="text-3xl sm:text-4xl font-bold text-green-700">{accepted}</h2>
                </div>

                <div className="bg-white rounded-2xl shadow p-4 sm:p-6">
                    <p className="text-gray-500">Declined</p>
                    <h2 className="text-3xl sm:text-4xl font-bold text-red-700">{declined}</h2>
                </div>
            </div>

            <div className="bg-white rounded-2xl shadow overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full min-w-[720px] text-left">
                        <thead className="bg-[#4f6f2f] text-white">
                            <tr>
                                <th className="p-3 sm:p-4 text-sm sm:text-base">Guest Name</th>
                                <th className="p-3 sm:p-4 text-sm sm:text-base">Status</th>
                                <th className="p-3 sm:p-4 text-sm sm:text-base">Attending</th>
                                <th className="p-3 sm:p-4 text-sm sm:text-base">Submitted At</th>
                                <th className="p-3 sm:p-4 text-sm sm:text-base">Send</th>
                            </tr>
                        </thead>

                        <tbody>
                            {guests.map((guest) => (
                                <tr key={guest.id} className="border-b">
                                    <td className="p-3 sm:p-4 text-sm sm:text-base">{guest.name}</td>
                                    <td className="p-3 sm:p-4 text-sm sm:text-base">{guest.status}</td>
                                    <td className="p-3 sm:p-4 text-sm sm:text-base">{guest.attending ? "Yes" : "No"}</td>
                                    <td className="p-3 sm:p-4 text-sm sm:text-base">
                                        {guest.submittedAt
                                            ? new Date(guest.submittedAt).toLocaleString()
                                            : "-"}
                                    </td>
                                    <td className="p-3 sm:p-4 text-sm sm:text-base">
                                        <button
                                            onClick={() => sendWhatsApp(guest)}
                                            className="bg-green-600 text-white px-3 sm:px-4 py-2 rounded-xl text-sm sm:text-base"
                                        >
                                            Send
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </main>
    );
}