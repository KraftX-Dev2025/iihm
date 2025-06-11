interface HeroSectionProps {
    scrollToSection: (sectionId: string) => void;
}

export default function HeroSection({ scrollToSection }: HeroSectionProps) {
    return (
        <section
            id="home"
            className="bg-gradient-to-br from-blue-800 to-red-700 text-white relative overflow-hidden"
        >
            <div className="absolute inset-0 bg-black/20"></div>
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
                    {/* Main Content */}
                    <div className="lg:col-span-2 animate-fade-in-up">
                        <div className="mb-6">
                            <span className="inline-block bg-amber-400 text-blue-900 px-4 py-2 rounded-full text-sm font-semibold mb-4 shadow-lg">
                                Featured by Forbes as "Best Hotel Management
                                Institute"
                            </span>
                            <img
                                src="https://iihm.ac.in/hotel_management/images/forbes.jpg"
                                alt="Forbes India"
                                className="h-8 mt-2"
                            />
                        </div>
                        <h1 className="text-5xl md:text-6xl font-bold mb-6">
                            Choose Hospitality
                        </h1>
                        <p className="text-xl md:text-2xl mb-8 text-red-100">
                            The Most Lucrative & Glamorous Career There Is!
                        </p>
                        <p className="text-lg mb-8 text-red-200">
                            Asia's largest hotel school chain with campuses in
                            Kolkata, Delhi, Bangalore, Pune, Hyderabad, Jaipur,
                            Ahmedabad, Goa, Bangkok, Samarkand and Singapore
                        </p>

                        {/* Recognition Badges */}
                        <div className="flex flex-wrap gap-4 mb-8">
                            <div className="bg-black/30 backdrop-blur-sm rounded-lg p-4 text-center">
                                <img
                                    src="https://iihm.ac.in/hotel_management/images/et_logo.png"
                                    alt="Economic Times"
                                    className="h-8 mx-auto mb-2 filter brightness-150"
                                />
                                <p className="text-sm">
                                    "IIHM is India's top hospitality education
                                    brand, 2025"
                                </p>
                            </div>
                            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
                                <img
                                    src="https://iihm.ac.in/hotel_management/images/b2_1.png"
                                    alt="Great Indian Institutes"
                                    className="h-12"
                                />
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <button
                                onClick={() => scrollToSection("contact")}
                                className="bg-amber-500 hover:bg-amber-600 text-blue-900 font-bold py-3 px-8 rounded-lg transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
                            >
                                Apply Now
                            </button>
                            <button
                                onClick={() => scrollToSection("about")}
                                className="border-2 border-white text-white hover:bg-white hover:text-blue-900 font-bold py-3 px-8 rounded-lg transition-all"
                            >
                                Learn More
                            </button>
                        </div>
                    </div>

                    {/* Admission Form */}
                    <div className="bg-white rounded-xl shadow-2xl p-6 text-gray-800">
                        <div className="text-center mb-6">
                            <img
                                src="https://iihm.ac.in/hotel_management/images/PDF.png"
                                alt="Free Career Guide"
                                className="mx-auto mb-4 h-12"
                            />
                            <h3 className="text-xl font-bold text-red-700">
                                Register & Get A Free Career Guide!
                            </h3>
                            <p className="text-sm text-gray-600 mt-2">
                                Start Your Hospitality Journey Today
                            </p>
                        </div>

                        <form className="space-y-4">
                            <div>
                                <input
                                    type="text"
                                    placeholder="Full Name*"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                                    required
                                />
                            </div>
                            <div>
                                <input
                                    type="email"
                                    placeholder="Email Address*"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                                    required
                                />
                            </div>
                            <div>
                                <input
                                    type="tel"
                                    placeholder="Mobile Number*"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                                    required
                                />
                            </div>
                            <div>
                                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all">
                                    <option value="">Select Course*</option>
                                    <option value="bsc-hospitality">
                                        B.Sc. Hospitality & Tourism Studies
                                    </option>
                                    <option value="ba-culinary">
                                        BA Culinary Arts
                                    </option>
                                    <option value="ba-hospitality">
                                        BA Hospitality Management
                                    </option>
                                    <option value="diploma">
                                        Diploma in Hotel Management
                                    </option>
                                </select>
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-gradient-to-r from-red-600 to-red-700 text-white py-3 px-6 rounded-lg font-semibold hover:from-red-700 hover:to-red-800 transition-all shadow-lg transform hover:scale-105"
                            >
                                Get Free Career Guide
                            </button>
                            <p className="text-xs text-gray-500 text-center">
                                By submitting this form, you agree to our terms
                                and conditions.
                            </p>
                        </form>
                    </div>
                </div>
            </div>

            {/* Chef Image positioned absolutely */}
            <div className="absolute bottom-0 right-20 hidden xl:block">
                <img
                    src="https://iihm.ac.in/hotel_management/images/chef.png"
                    alt="Chef"
                    className="h-96 w-auto drop-shadow-2xl"
                />
            </div>
        </section>
    );
}
