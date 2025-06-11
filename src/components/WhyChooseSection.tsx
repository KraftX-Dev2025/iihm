export default function WhyChooseSection() {
    return (
        <section className="bg-gradient-to-br from-red-700 to-blue-800 py-20 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        Step Inside India's most premium
                    </h2>
                    <div className="flex items-center justify-center mb-6">
                        <img
                            src="https://iihm.ac.in/hotel_management/images/arrowb1.png"
                            alt=""
                            className="h-6 mx-2"
                        />
                        <h3 className="text-2xl md:text-3xl font-semibold">
                            Hotel Management College
                        </h3>
                        <img
                            src="https://iihm.ac.in/hotel_management/images/arrowb2.png"
                            alt=""
                            className="h-6 mx-2"
                        />
                    </div>
                    <p className="text-xl text-blue-100">
                        There are many reasons to kick start your career in
                        hotel management at IIHM. Book a tour of our campus to
                        find out for yourself!
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="bg-white text-gray-800 rounded-xl overflow-hidden shadow-2xl hover:transform hover:scale-105 transition-all duration-300">
                        <div className="h-48 overflow-hidden">
                            <img
                                src="https://iihm.ac.in/hotel_management/images/hmc1.jpg"
                                alt="Career Building Programs"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="p-6">
                            <h4 className="text-xl font-bold mb-3 text-red-700">
                                Career Building Programs
                            </h4>
                            <p className="text-gray-600">
                                Learn from a faculty that has decades worth of
                                industry experience.
                            </p>
                        </div>
                    </div>

                    <div className="bg-white text-gray-800 rounded-xl overflow-hidden shadow-2xl hover:transform hover:scale-105 transition-all duration-300">
                        <div className="h-48 overflow-hidden">
                            <img
                                src="https://iihm.ac.in/hotel_management/images/hmc2.jpg"
                                alt="International Curriculum"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="p-6">
                            <h4 className="text-xl font-bold mb-3 text-blue-700">
                                International Curriculum
                            </h4>
                            <p className="text-gray-600">
                                Learn what the world learns at IIHM! Be prepared
                                for a global experience on our campus.
                            </p>
                        </div>
                    </div>

                    <div className="bg-white text-gray-800 rounded-xl overflow-hidden shadow-2xl hover:transform hover:scale-105 transition-all duration-300">
                        <div className="h-48 overflow-hidden">
                            <img
                                src="https://iihm.ac.in/hotel_management/images/hmc3.jpg"
                                alt="Training and Placements"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="p-6">
                            <h4 className="text-xl font-bold mb-3 text-green-700">
                                Training and Placements
                            </h4>
                            <p className="text-gray-600">
                                Our industry ready training modules &
                                International placements are the best way to
                                kick start your career.
                            </p>
                        </div>
                    </div>

                    <div className="bg-white text-gray-800 rounded-xl overflow-hidden shadow-2xl hover:transform hover:scale-105 transition-all duration-300">
                        <div className="h-48 overflow-hidden">
                            <img
                                src="https://iihm.ac.in/hotel_management/images/hmc4.jpg"
                                alt="Global Networking & Alumni"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="p-6">
                            <h4 className="text-xl font-bold mb-3 text-purple-700">
                                Global Networking & Alumni
                            </h4>
                            <p className="text-gray-600">
                                Network with alumni, faculty and guest lecturers
                                from around the world in the IIHM campus!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
