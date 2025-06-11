export default function CoursesSection() {
    return (
        <section id="courses" className="bg-white py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
                        Our Courses
                    </h2>
                    <p className="text-xl text-neutral-600">
                        Choose from our internationally recognized hospitality
                        programs
                    </p>
                </div>

                {/* Course Eligibility Banner */}
                <div className="mb-16">
                    <img
                        src="https://iihm.ac.in/hotel_management/images/abt_2021.jpg"
                        alt="Eligibility Criteria"
                        className="w-full max-w-4xl mx-auto rounded-xl shadow-lg"
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Course 1 */}
                    <div className="bg-gradient-to-br from-red-50 to-blue-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all">
                        <div className="text-center mb-6">
                            <img
                                src="https://iihm.ac.in/hotel_management/images/bsc.png"
                                alt="B.Sc. Hospitality"
                                className="h-16 mx-auto mb-4"
                            />
                            <h3 className="text-2xl font-bold text-neutral-900 mb-2">
                                B.Sc. Hospitality & Tourism Studies
                            </h3>
                            <p className="text-neutral-600 mb-4">
                                3 Year Degree Program
                            </p>
                        </div>
                        <ul className="space-y-2 mb-6">
                            <li className="flex items-center text-sm text-neutral-700">
                                <svg
                                    className="w-4 h-4 text-green-500 mr-2"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                Industry-relevant curriculum
                            </li>
                            <li className="flex items-center text-sm text-neutral-700">
                                <svg
                                    className="w-4 h-4 text-green-500 mr-2"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                International exposure
                            </li>
                            <li className="flex items-center text-sm text-neutral-700">
                                <svg
                                    className="w-4 h-4 text-green-500 mr-2"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                Practical training
                            </li>
                        </ul>
                        <button className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg transition-all">
                            Learn More
                        </button>
                    </div>

                    {/* Course 2 */}
                    <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all">
                        <div className="text-center mb-6">
                            <img
                                src="https://iihm.ac.in/hotel_management/images/ba_culinary.png"
                                alt="BA Culinary Arts"
                                className="h-16 mx-auto mb-4"
                            />
                            <h3 className="text-2xl font-bold text-neutral-900 mb-2">
                                BA Culinary Arts
                            </h3>
                            <p className="text-neutral-600 mb-4">
                                3 Year Degree Program
                            </p>
                        </div>
                        <ul className="space-y-2 mb-6">
                            <li className="flex items-center text-sm text-neutral-700">
                                <svg
                                    className="w-4 h-4 text-green-500 mr-2"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                World-class kitchen facilities
                            </li>
                            <li className="flex items-center text-sm text-neutral-700">
                                <svg
                                    className="w-4 h-4 text-green-500 mr-2"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                Expert chef instructors
                            </li>
                            <li className="flex items-center text-sm text-neutral-700">
                                <svg
                                    className="w-4 h-4 text-green-500 mr-2"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                International cuisine training
                            </li>
                        </ul>
                        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all">
                            Learn More
                        </button>
                    </div>

                    {/* Course 3 */}
                    <div className="bg-gradient-to-br from-green-50 to-amber-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all">
                        <div className="text-center mb-6">
                            <img
                                src="https://iihm.ac.in/hotel_management/images/ba_hospitality.png"
                                alt="BA Hospitality Management"
                                className="h-16 mx-auto mb-4"
                            />
                            <h3 className="text-2xl font-bold text-neutral-900 mb-2">
                                BA Hospitality Management
                            </h3>
                            <p className="text-neutral-600 mb-4">
                                3 Year Degree Program
                            </p>
                        </div>
                        <ul className="space-y-2 mb-6">
                            <li className="flex items-center text-sm text-neutral-700">
                                <svg
                                    className="w-4 h-4 text-green-500 mr-2"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                Management principles
                            </li>
                            <li className="flex items-center text-sm text-neutral-700">
                                <svg
                                    className="w-4 h-4 text-green-500 mr-2"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                Leadership development
                            </li>
                            <li className="flex items-center text-sm text-neutral-700">
                                <svg
                                    className="w-4 h-4 text-green-500 mr-2"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                Celebrity Chef Mentorship
                            </li>
                        </ul>
                        <button className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-all">
                            Learn More
                        </button>
                    </div>
                </div>

                {/* Additional Course Benefits */}
                <div className="mt-16 bg-gradient-to-r from-red-600 to-blue-900 text-white p-8 rounded-xl">
                    <div className="text-center">
                        <h3 className="text-2xl font-bold mb-4">
                            Why Choose IIHM Courses?
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                            <div className="bg-white/20 p-4 rounded-lg">
                                <h4 className="font-semibold mb-2">
                                    International Recognition
                                </h4>
                                <p className="text-sm">
                                    Degrees recognized worldwide
                                </p>
                            </div>
                            <div className="bg-white/20 p-4 rounded-lg">
                                <h4 className="font-semibold mb-2">
                                    Industry Exposure
                                </h4>
                                <p className="text-sm">
                                    Real-world training in top hotels
                                </p>
                            </div>
                            <div className="bg-white/20 p-4 rounded-lg">
                                <h4 className="font-semibold mb-2">
                                    Expert Faculty
                                </h4>
                                <p className="text-sm">
                                    Learn from industry professionals
                                </p>
                            </div>
                            <div className="bg-white/20 p-4 rounded-lg">
                                <h4 className="font-semibold mb-2">
                                    Global Placements
                                </h4>
                                <p className="text-sm">
                                    Opportunities worldwide
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
