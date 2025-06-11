export default function AboutSection() {
    return (
        <section id="about" className="bg-neutral-100 py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
                        About IIHM
                    </h2>
                    <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
                        "IIHM is India's top hospitality education brand, 2025"
                        - The Economic Times
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
                    <div>
                        <img
                            src="https://iihm.ac.in/hotel_management/images/IIHM_PUNE.jpg"
                            alt="IIHM Pune Campus"
                            className="w-full rounded-xl shadow-2xl"
                        />
                    </div>
                    <div>
                        <h3 className="text-3xl font-bold text-neutral-900 mb-6">
                            Your Future Career Begins Here
                        </h3>
                        <p className="text-neutral-600 mb-6 leading-relaxed">
                            The IIHM Pune campus boasts of excellent
                            infrastructure facilities and training programs. At
                            IIHM Pune, we prepare you to kick start a career in
                            the ever-growing hospitality industry. The campus
                            itself is located in the heart of the city & sees
                            students from around the country flock to it.
                        </p>
                        <p className="text-neutral-600 mb-6 leading-relaxed">
                            Along with a range of highly qualified professors &
                            trainers, we have regular lectures and sessions from
                            reputed hospitality professionals. The campus is
                            also the only hospitality institute in India that
                            offers a B. Sc. In Hospitality & Tourism Studies
                            from Yashwantrao Chavan Maharashtra Open University,
                            Nashik (YCMOU).
                        </p>

                        {/* University of West London Collaboration */}
                        <div className="bg-gradient-to-r from-blue-600 to-red-600 text-white p-6 rounded-xl mb-6">
                            <h4 className="text-xl font-bold mb-3">
                                🇬🇧 Study at University of West London
                            </h4>
                            <p className="text-blue-100 mb-4">
                                Through our campus, IIHM gives you the
                                opportunity to study at UK's most renowned
                                University: University of West London (UWL),
                                London, UK. The degree is recognised worldwide
                                and accepted as a symbol of high quality
                                education.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                                <div className="bg-white/20 p-3 rounded-lg">
                                    <h5 className="font-semibold mb-1">
                                        BA Hospitality Management
                                    </h5>
                                    <p className="text-blue-100">
                                        World renowned programme
                                    </p>
                                </div>
                                <div className="bg-white/20 p-3 rounded-lg">
                                    <h5 className="font-semibold mb-1">
                                        BA Culinary Arts
                                    </h5>
                                    <p className="text-blue-100">
                                        Center of excellence
                                    </p>
                                </div>
                                <div className="bg-white/20 p-3 rounded-lg">
                                    <h5 className="font-semibold mb-1">
                                        Work 20 hrs/week
                                    </h5>
                                    <p className="text-blue-100">
                                        While studying in UK
                                    </p>
                                </div>
                                <div className="bg-white/20 p-3 rounded-lg">
                                    <h5 className="font-semibold mb-1">
                                        Global Recognition
                                    </h5>
                                    <p className="text-blue-100">
                                        International degree
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Quick Features */}
                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-white p-4 rounded-lg shadow-lg text-center">
                                <h4 className="text-lg font-semibold text-neutral-900 mb-2">
                                    Address
                                </h4>
                                <p className="text-sm text-neutral-600">
                                    Plot No. 16, S. No. 206/3, Kalptaru Arcade,
                                    Viman Nagar Rd, near Neco Gardens & Rosary
                                    School, Viman Nagar, Pune, Maharashtra
                                    411014
                                </p>
                            </div>
                            <div className="bg-white p-4 rounded-lg shadow-lg text-center">
                                <h4 className="text-lg font-semibold text-neutral-900 mb-2">
                                    Contact
                                </h4>
                                <p className="text-sm text-neutral-600">
                                    Landline: 020 6729 6200
                                    <br />
                                    Mobile: +91 8600147345
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Featured Programs */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                        <img
                            src="https://iihm.ac.in/hotel_management/images/hmc1.jpg"
                            alt="Career Building Programs"
                            className="w-full h-32 object-cover rounded-lg mb-4"
                        />
                        <h4 className="text-xl font-bold mb-3 text-red-700">
                            Career Building Programs
                        </h4>
                        <p className="text-gray-600">
                            Learn from a faculty that has decades worth of
                            industry experience.
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                        <img
                            src="https://iihm.ac.in/hotel_management/images/hmc2.jpg"
                            alt="International Curriculum"
                            className="w-full h-32 object-cover rounded-lg mb-4"
                        />
                        <h4 className="text-xl font-bold mb-3 text-blue-700">
                            International Curriculum
                        </h4>
                        <p className="text-gray-600">
                            Learn what the world learns at IIHM! Be prepared for
                            a global experience on our campus.
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                        <img
                            src="https://iihm.ac.in/hotel_management/images/hmc3.jpg"
                            alt="Training and Placements"
                            className="w-full h-32 object-cover rounded-lg mb-4"
                        />
                        <h4 className="text-xl font-bold mb-3 text-green-700">
                            Training and Placements
                        </h4>
                        <p className="text-gray-600">
                            Our industry ready training modules & International
                            placements are the best way to kick start your
                            career.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
