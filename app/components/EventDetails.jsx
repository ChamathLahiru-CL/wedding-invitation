export default function EventDetails() {
    return (
        <section className="py-4 sm:py-8 text-center px-4 sm:px-6">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#4f6f2f] mb-4 sm:mb-8">
                The Ceremony & Celebration
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-6 lg:gap-8 max-w-5xl mx-auto">
                <div className="bg-white/80 rounded-2xl sm:rounded-3xl shadow p-4 sm:p-8 lg:p-10">
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-[#6b4f3f]">Aug 3rd(Monday), 2026</h3>
                    <p className="mt-1 sm:mt-2 text-xs sm:text-sm lg:text-base text-[#9b7b68]">Save the Date</p>
                </div>

                <div className="bg-white/80 rounded-2xl sm:rounded-3xl shadow p-4 sm:p-8 lg:p-10">
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-[#6b4f3f]">10:00 AM to 4:00 PM</h3>
                    <p className="mt-1 sm:mt-2 text-xs sm:text-sm lg:text-base text-[#9b7b68]">The Golden Hour</p>
                </div>

                <div className="bg-white/80 rounded-2xl sm:rounded-3xl shadow p-4 sm:p-8 lg:p-10">
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-[#6b4f3f]">
                        Hotel Ramrich
                    </h3>
                    <p className="mt-1 sm:mt-2 text-xs sm:text-sm lg:text-base text-[#9b7b68]">
                        Temple Road, Ekala, Ja-Ela
                    </p>
                </div>
            </div>
        </section>
    );
}
