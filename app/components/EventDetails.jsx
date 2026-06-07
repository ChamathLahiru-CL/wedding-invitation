export default function EventDetails() {
    const calendarUrl = "https://calendar.google.com/calendar/render?action=TEMPLATE&text=Wedding%20of%20Thejani%20%26%20Dhanushka&dates=20260803T043000Z/20260803T103000Z&details=Join%20us%20to%20celebrate%20our%20wedding!&location=Hotel%20Ramrich,%20Temple%20Road,%20Ekala,%20Ja-Ela";

    return (
        <section className="py-4 sm:py-8 text-center px-4 sm:px-6">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#4f6f2f] mb-4 sm:mb-8">
                The Ceremony & Celebration
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-6 lg:gap-8 max-w-5xl mx-auto">
                <a
                    href={calendarUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/80 rounded-2xl sm:rounded-3xl shadow p-4 sm:p-8 lg:p-10 block hover:bg-white hover:scale-[1.02] hover:shadow-xl transition-all duration-300 cursor-pointer group"
                >
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-[#6b4f3f]">Aug 3rd(Monday), 2026</h3>
                    <p className="mt-1 sm:mt-2 text-xs sm:text-sm lg:text-base text-[#9b7b68]">Save the Date</p>
                    {/* <p className="mt-2 sm:mt-3 text-[10px] sm:text-xs text-[#4f6f2f] font-semibold opacity-70 group-hover:opacity-100 transition-opacity">
                        Add to Calendar 📅
                    </p> */}
                </a>

                <a
                    href={calendarUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/80 rounded-2xl sm:rounded-3xl shadow p-4 sm:p-8 lg:p-10 block hover:bg-white hover:scale-[1.02] hover:shadow-xl transition-all duration-300 cursor-pointer group"
                >
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-[#6b4f3f]">10:00 AM to 4:00 PM</h3>
                    <p className="mt-1 sm:mt-2 text-xs sm:text-sm lg:text-base text-[#9b7b68]">The Golden Hour</p>
                    <p className="mt-2 sm:mt-3 text-[10px] sm:text-xs text-[#4f6f2f] font-semibold opacity-70 group-hover:opacity-100 transition-opacity">
                        Add to Calendar
                    </p>
                </a>

                <a
                    href="https://maps.app.goo.gl/CQ5w2sjxXyz4ULY4A"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/80 rounded-2xl sm:rounded-3xl shadow p-4 sm:p-8 lg:p-10 block hover:bg-white hover:scale-[1.02] hover:shadow-xl transition-all duration-300 cursor-pointer group"
                >
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-[#6b4f3f]">
                        Hotel Ramrich
                    </h3>
                    <p className="mt-1 sm:mt-2 text-xs sm:text-sm lg:text-base text-[#9b7b68]">
                        Temple Road, Ekala, Ja-Ela
                    </p>
                    <p className="mt-2 sm:mt-3 text-[10px] sm:text-xs text-[#4f6f2f] font-semibold opacity-70 group-hover:opacity-100 transition-opacity">
                        View Map ↗
                    </p>
                </a>
            </div>
        </section>
    );
}
