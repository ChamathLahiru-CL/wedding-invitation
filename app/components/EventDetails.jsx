export default function EventDetails() {
    return (
        <section className="py-14 sm:py-20 text-center px-4 sm:px-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#4f6f2f] mb-10 sm:mb-12">
                The Ceremony & Celebration
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto">
                <div className="bg-white/80 rounded-3xl shadow p-6 sm:p-10">
                    <h3 className="text-xl sm:text-2xl font-bold text-[#6b4f3f]">Aug 5, 2026</h3>
                    <p className="mt-2 text-sm sm:text-base text-[#9b7b68]">Save the Date</p>
                </div>

                <div className="bg-white/80 rounded-3xl shadow p-6 sm:p-10">
                    <h3 className="text-xl sm:text-2xl font-bold text-[#6b4f3f]">09:30 AM</h3>
                    <p className="mt-2 text-sm sm:text-base text-[#9b7b68]">The Golden Hour</p>
                </div>

                <div className="bg-white/80 rounded-3xl shadow p-6 sm:p-10">
                    <h3 className="text-xl sm:text-2xl font-bold text-[#6b4f3f]">
                        Minuwangoda Kanatta
                    </h3>
                    <p className="mt-2 text-sm sm:text-base text-[#9b7b68]">
                        Minuwangoda, Sri Lanka
                    </p>
                </div>
            </div>
        </section>
    );
}