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
        <main className="bg-[#f8f5ef]">
            {/* Hero Section - Full Viewport */}
            <section className="min-h-screen flex flex-col items-center justify-center px-4 relative overflow-hidden">
                {/* Decorative Elements */}
                <div className="absolute top-10 left-5 w-8 h-8 text-[#4f6f2f] opacity-40 text-3xl animate-bounce">🌿</div>
                <div className="absolute top-20 right-8 w-8 h-8 text-[#d4a574] opacity-40 text-3xl" style={{ animation: "bounce 2s infinite 0.3s" }}>✨</div>
                <div className="absolute bottom-20 left-10 w-8 h-8 text-[#4f6f2f] opacity-40 text-3xl" style={{ animation: "bounce 2s infinite 0.6s" }}>🌿</div>
                <div className="absolute bottom-32 right-12 w-8 h-8 text-[#d4a574] opacity-40 text-3xl animate-bounce">✨</div>

                <div className="text-center max-w-2xl z-10">
                    {/* Greeting */}
                    <p className="text-2xl md:text-3xl text-red-800 font-serif mb-8 opacity-90 animate-fadeIn">
                        Dear {guestName},
                    </p>

                    {/* Couple Names - Main Focus */}
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fadeIn" style={{ animationDelay: "0.2s" }}>
                        <span className="text-[#4f6f2f]">Priyanjalee</span>
                        <span className="text-[#d4a574]"> & </span>
                        <span className="text-[#4f6f2f]">Dhanushka</span>
                    </h1>

                    {/* Invitation Text */}
                    <p className="mt-8 text-lg md:text-xl text-[#6b4f3f] font-light mb-12 animate-fadeIn" style={{ animationDelay: "0.4s" }}>
                        We warmly invite you to celebrate our wedding day.
                    </p>

                    {/* Countdown - Eye Catching */}
                    <div className="animate-fadeIn" style={{ animationDelay: "0.6s" }}>
                        <Countdown />
                    </div>

                    {/* Scroll Indicator */}
                    <div className="mt-16 flex flex-col items-center gap-2 animate-pulse">
                        <p className="text-sm text-[#6b4f3f]/60 uppercase tracking-widest">Scroll to explore</p>
                        <svg className="w-6 h-6 text-[#4f6f2f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                        </svg>
                    </div>
                </div>
            </section>

            {/* Event Details Section */}
            <section className="min-h-screen flex flex-col items-center justify-center px-4 py-20">
                <EventDetails />
            </section>

            {/* RSVP Section */}
            <section className="min-h-screen flex flex-col items-center justify-center px-4 py-20">
                <RSVPForm guestName={guestName} />
            </section>

            {/* Animation Styles */}
            <style>{`
                @keyframes fadeIn {
                    from {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                .animate-fadeIn {
                    animation: fadeIn 1s ease-out forwards;
                }

                @keyframes pulse {
                    0%, 100% {
                        opacity: 1;
                    }
                    50% {
                        opacity: 0.5;
                    }
                }

                .animate-pulse {
                    animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
                }
            `}</style>
        </main>
    );

}