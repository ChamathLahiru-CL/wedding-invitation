import Countdown from "../components/Countdown";
import EventDetails from "../components/EventDetails";
import RSVPForm from "../components/RSVPForm";

export default async function GuestInvitation({ params }) {
    const { guest } = await params;

    const guestName = guest
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");

    return (
        <main className="min-h-screen flex items-center justify-center bg-[#f8f5ef]">
            <div className="text-center">
                <p className="text-3xl text-red-800 font-serif mb-4">
                    Dear {guestName},
                </p>

                <h1 className="text-6xl font-bold text-[#4f6f2f]">
                    Priyanjalee <span className="text-[#d4af37]">&</span> Dhanushka
                </h1>

                <p className="mt-6 text-xl text-[#6b4f3f]">
                    We warmly invite you to celebrate our wedding day.
                </p>

                <Countdown />

                <EventDetails />

                <RSVPForm guestName={guestName} />
            </div>
        </main>
    );

}