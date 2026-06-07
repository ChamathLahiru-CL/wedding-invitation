import Countdown from "../components/Countdown";
import EventDetails from "../components/EventDetails";
import RSVPForm from "../components/RSVPForm";
import { Great_Vibes, Playfair_Display, Inter } from "next/font/google";

const greatVibes = Great_Vibes({
    weight: "400",
    subsets: ["latin"],
});

const playfairDisplay = Playfair_Display({
    weight: ["700"],
    subsets: ["latin"],
});

const inter = Inter({
    weight: ["400", "500", "700"],
    subsets: ["latin"],
    display: "swap",
});

export default async function GuestInvitation({ params }) {
    const { guest } = await params;

    let guestName;
    if (guest.includes("-and-")) {
        const parts = guest.split("-and-");
        guestName = parts
            .map((part) => part.split("-").map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(" "))
            .join(" & ");
    } else {
        guestName = guest
            .split("-")
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ");
    }

    return (
        <main className="bg-[#f8f5ef] relative overflow-hidden">
            {/* Site Background Image */}
            <div
                className="fixed inset-0 bg-center bg-no-repeat bg-cover opacity-70 pointer-events-none z-0"
                style={{ backgroundImage: "url('/BackgroundImage.png')" }}
            ></div>
            <div className="fixed inset-0 bg-gradient-to-b from-[#f8f5ef]/18 via-[#f8f5ef]/14 to-[#f8f5ef]/22 pointer-events-none z-0"></div>
            {/* Hero Section - Full Viewport */}
            <section className="min-h-screen flex flex-col items-center justify-start px-2 sm:px-4 py-6 sm:py-8 relative overflow-hidden z-10">
                {/* Decorative Elements */}
                <div className="hidden sm:block absolute top-10 left-5 w-8 h-8 text-[#4f6f2f] opacity-40 text-3xl animate-bounce">🌿</div>
                <div className="hidden sm:block absolute top-20 right-8 w-8 h-8 text-[#d4a574] opacity-40 text-3xl" style={{ animation: "bounce 2s infinite 0.3s" }}>✨</div>
                <div className="hidden sm:block absolute bottom-20 left-10 w-8 h-8 text-[#4f6f2f] opacity-40 text-3xl" style={{ animation: "bounce 2s infinite 0.6s" }}>🌿</div>
                <div className="hidden sm:block absolute bottom-32 right-12 w-8 h-8 text-[#d4a574] opacity-40 text-3xl animate-bounce">✨</div>

                <div className="text-center max-w-5xl w-full z-10">

                    {/* Side background images (decorative) */}
                    <div className="absolute left-3 top-1/2 -translate-y-1/2 sm:hidden z-0 pointer-events-none select-none opacity-70">
                        <img src="/LeftSide.png" alt="" className="h-40 w-auto mix-blend-multiply" />
                    </div>
                    <div className="absolute right-3 top-1/2 -translate-y-1/2 sm:hidden z-0 pointer-events-none select-none opacity-75">
                        <img src="/RightSide.png" alt="" className="h-40 w-auto mix-blend-multiply" />
                    </div>

                    <div className="absolute left-12 top-1/2 -translate-y-1/2 hidden lg:block z-0 pointer-events-none select-none opacity-90">
                        <img src="/LeftSide.png" alt="" className="h-[520px] w-auto mix-blend-multiply opacity-90" />
                    </div>

                    <div className="absolute right-12 top-1/2 -translate-y-1/2 hidden lg:block z-0 pointer-events-none select-none opacity-90">
                        <img src="/RightSide.png" alt="" className="h-[520px] w-auto mix-blend-multiply opacity-90" />
                    </div>
                    {/* Greeting */}
                    <div className="mb-1 flex justify-center animate-fadeIn">
                        <p className={`${greatVibes.className} text-[#7b2027] text-3xl sm:text-5xl md:text-6xl lg:text-7xl leading-none drop-shadow-[0_4px_8px_rgba(50,34,28,0.06)]`}>
                            Dear {guestName},
                        </p>
                    </div>

                    <div className="flex justify-center mb-1 animate-fadeIn" style={{ animationDelay: "0.15s" }}>
                        <img
                            src="/headerSection.png"
                            alt=""
                            className="w-52 sm:w-64 md:w-80 lg:w-96 h-auto opacity-95 drop-shadow-[0_10px_20px_rgba(50,34,28,0.08)]"
                        />
                    </div>

                    {/* Couple Names - Main Focus */}
                    <h1 className={`${playfairDisplay.className} text-3xl sm:text-7xl md:text-8xl mb-1 animate-fadeIn animate-glowPulse whitespace-normal sm:whitespace-nowrap leading-tight`} style={{ animationDelay: "0.25s" }}>
                        <span className="block sm:inline bg-gradient-to-r from-[#4f6f2f] via-[#5a7f3b] to-[#4f6f2f] bg-clip-text text-transparent drop-shadow-sm" style={{ textShadow: "0 0 6px rgba(79, 111, 47, 0.14)" }}>Thejani</span>
                        <span className="block sm:inline sm:mx-2 md:mx-3 text-2xl sm:text-6xl md:text-7xl bg-gradient-to-r from-[#d4a574] to-[#e6b88a] bg-clip-text text-transparent" style={{ textShadow: "0 0 6px rgba(212, 165, 116, 0.16)" }}>&</span>
                        <span className="block sm:inline bg-gradient-to-r from-[#4f6f2f] via-[#5a7f3b] to-[#4f6f2f] bg-clip-text text-transparent drop-shadow-sm" style={{ textShadow: "0 0 6px rgba(79, 111, 47, 0.14)" }}>Dhanushka</span>
                    </h1>

                    {/* Invitation Text */}
                    <p className={`${inter.className} mt-3 sm:mt-6 text-sm sm:text-lg md:text-xl text-[#6b4f3f] font-light mb-6 sm:mb-10 animate-fadeIn px-4 sm:px-0 leading-relaxed`} style={{ animationDelay: "0.4s" }}>
                        <span className="block">
                            <span className="hidden sm:block">"With hearts full of love,</span>
                            <span className="hidden sm:block">we step into forever beneath the stars."</span>
                            <span className="sm:hidden">With hearts full of love,</span>
                            <span className="sm:hidden">we step into forever</span>
                            <span className="sm:hidden">beneath the stars."</span>
                        </span>
                        <span className="block my-1">&</span>
                        <span className="block">
                            <span className="hidden sm:block">invite you to join us as we weave</span>
                            <span className="hidden sm:block">our lives together under their gentle light.</span>
                            <span className="hidden sm:block">Your presence will make our day truly magical.</span>
                            <span className="sm:hidden">invite you to join us as we</span>
                            <span className="sm:hidden">weave our lives together</span>
                            <span className="sm:hidden">under their gentle light.</span><br />
                            <span className="sm:hidden">Your presence will make our</span>
                            <span className="sm:hidden">day truly magical.</span>
                        </span>
                    </p>

                    {/* Countdown - Eye Catching */}
                    <div className="animate-fadeIn" style={{ animationDelay: "0.6s" }}>
                        <Countdown />
                    </div>

                    {/* Scroll Indicator */}
                    {/* <div className="mt-12 sm:mt-16 flex flex-col items-center gap-2 animate-pulse">
                        <p className="text-sm text-[#6b4f3f]/60 uppercase tracking-widest">Scroll to explore</p>
                        <svg className="w-6 h-6 text-[#4f6f2f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                        </svg>
                    </div> */}
                </div>
            </section>

            {/* Event Details Section */}
            <section className="min-h-screen flex flex-col items-center justify-center px-4 py-16 sm:py-20 relative z-10">
                <div className="absolute inset-0 pointer-events-none z-0">
                    <div className="absolute left-2 bottom-6 sm:hidden opacity-70">
                        <img src="/LeftSide2.png" alt="" className="h-40 w-auto mix-blend-multiply" />
                    </div>
                    <div className="absolute right-2 bottom-6 sm:hidden opacity-80">
                        <img src="/RightSide2.png" alt="" className="h-40 w-auto mix-blend-multiply" />
                    </div>
                    <div className="absolute left-10 bottom-0 hidden xl:block opacity-90">
                        <img src="/LeftSide2.png" alt="" className="h-[520px] w-auto mix-blend-multiply opacity-90" />
                    </div>
                    <div className="absolute right-10 bottom-0 hidden xl:block opacity-90">
                        <img src="/RightSide2.png" alt="" className="h-[520px] w-auto mix-blend-multiply opacity-90" />
                    </div>
                </div>
                <div className="relative z-10 w-full">
                    <EventDetails />
                </div>
            </section>

            {/* RSVP Section */}
            <section className="min-h-screen flex flex-col items-center justify-center px-4 py-16 sm:py-20 relative z-10">
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

                @keyframes glowPulse {
                    0%, 100% {
                        filter: drop-shadow(0 0 6px rgba(79, 111, 47, 0.22)) drop-shadow(0 0 3px rgba(212, 165, 116, 0.1));
                        text-shadow: 0 0 6px rgba(79, 111, 47, 0.12), 0 0 4px rgba(212, 165, 116, 0.08);
                    }
                    50% {
                        filter: drop-shadow(0 0 8px rgba(79, 111, 47, 0.28)) drop-shadow(0 0 4px rgba(212, 165, 116, 0.12));
                        text-shadow: 0 0 8px rgba(79, 111, 47, 0.18), 0 0 6px rgba(212, 165, 116, 0.1);
                    }
                }

                .animate-glowPulse {
                    animation: glowPulse 3s ease-in-out infinite;
                }
            `}</style>
        </main>
    );

}