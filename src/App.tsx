import { useState, useEffect } from "react";
import { Toaster } from "sonner";

export default function App() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("home");

    useEffect(() => {
        const handleScroll = () => {
            const sections = [
                "home",
                "about",
                "courses",
                "testimonials",
                "campuses",
                "placements",
                "contact",
            ];
            const scrollPosition = window.scrollY + 100;

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const offsetTop = element.offsetTop;
                    const offsetHeight = element.offsetHeight;

                    if (
                        scrollPosition >= offsetTop &&
                        scrollPosition < offsetTop + offsetHeight
                    ) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
        setIsMenuOpen(false);
    };

    return (
        <div className="min-h-screen bg-neutral-50">
            {/* Navigation */}
            <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 shadow-lg border-b border-neutral-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        <div className="flex items-center">
                            <img
                                src="https://iihm.ac.in/hotel_management/images/pune.png"
                                alt="IIHM"
                                className="h-10 w-auto"
                            />
                            <span className="ml-2 text-xl font-bold text-secondary">
                                IIHM
                            </span>
                        </div>

                        {/* Desktop Navigation */}
                        <div className="hidden md:block">
                            <div className="ml-10 flex items-baseline space-x-4">
                                {[
                                    "Home",
                                    "About",
                                    "Courses",
                                    "Testimonials",
                                    "Campuses",
                                    "Placements",
                                    "Contact",
                                ].map((item) => (
                                    <button
                                        key={item}
                                        onClick={() =>
                                            scrollToSection(item.toLowerCase())
                                        }
                                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                                            activeSection === item.toLowerCase()
                                                ? "bg-red-100 text-red-700 shadow-sm"
                                                : "text-neutral-700 hover:text-red-600 hover:bg-red-50"
                                        }`}
                                    >
                                        {item}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Mobile menu button */}
                        <div className="md:hidden">
                            <button
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className="inline-flex items-center justify-center p-2 rounded-lg text-neutral-700 hover:text-red-600 hover:bg-red-50 transition-colors"
                            >
                                <svg
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    {isMenuOpen ? (
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    ) : (
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    )}
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div className="md:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-neutral-200 shadow-lg">
                            {[
                                "Home",
                                "About",
                                "Courses",
                                "Testimonials",
                                "Campuses",
                                "Placements",
                                "Contact",
                            ].map((item) => (
                                <button
                                    key={item}
                                    onClick={() =>
                                        scrollToSection(item.toLowerCase())
                                    }
                                    className="block px-3 py-2 rounded-lg text-base font-medium text-neutral-700 hover:text-red-600 hover:bg-red-50 w-full text-left transition-colors"
                                >
                                    {item}
                                </button>
                            ))}
                        </div>
                    </div>
                )}
            </nav>

            {/* Top Contact Bar */}
            <div className="pt-16 bg-gradient-to-r from-blue-900 to-red-800 text-white py-3">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col sm:flex-row justify-between items-center text-sm">
                        <div className="flex items-center space-x-6 mb-2 sm:mb-0">
                            <span className="font-semibold">
                                #IIHMBest3Years #HospitalityRocks
                            </span>
                            <span>Talk to an IIHM expert</span>
                        </div>
                        <div className="flex items-center space-x-4">
                            <a
                                href="tel:1800-103-8586"
                                className="flex items-center space-x-2 hover:text-amber-300 transition-colors"
                            >
                                <img
                                    src="https://iihm.ac.in/hotel_management/images/call.png"
                                    alt="Phone"
                                    className="w-4 h-4"
                                />
                                <span>1800-103-8586</span>
                            </a>
                            <a
                                href="tel:9831050000"
                                className="flex items-center space-x-2 hover:text-amber-300 transition-colors"
                            >
                                <img
                                    src="https://iihm.ac.in/hotel_management/images/whatsapp.png"
                                    alt="WhatsApp"
                                    className="w-4 h-4"
                                />
                                <span>9831050000</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Hero Section with Form */}
            <section
                id="home"
                className="gradient-primary text-white relative overflow-hidden"
            >
                <div className="absolute inset-0 bg-black/10"></div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
                        {/* Main Content */}
                        <div className="lg:col-span-2 animate-fade-in-up">
                            <div className="mb-6">
                                <span className="inline-block bg-amber-400 text-blue-900 px-4 py-2 rounded-full text-sm font-semibold mb-4 shadow-lg">
                                    Featured by Forbes as 'Great Indian
                                    Institute'
                                </span>
                                <img
                                    src="https://iihm.ac.in/hotel_management/images/forbes.jpg"
                                    alt="Forbes India"
                                    className="h-8 mt-2"
                                />
                            </div>
                            <h1 className="text-hero mb-6">
                                Choose Hospitality
                            </h1>
                            <p className="text-xl md:text-2xl mb-8 text-red-100">
                                The Most Lucrative & Glamorous Career There Is!
                            </p>
                            <p className="text-lg mb-8 text-red-200">
                                Asia's largest hotel school chain with campuses
                                in Kolkata, Delhi, Bangalore, Pune, Hyderabad,
                                Jaipur, Ahmedabad, Goa, Bangkok, Samarkand and
                                Singapore
                            </p>

                            {/* Recognition Badges */}
                            <div className="flex flex-wrap gap-4 mb-8">
                                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                                    <img
                                        src="https://iihm.ac.in/hotel_management/images/et_logo.png"
                                        alt="Economic Times"
                                        className="h-6 mx-auto mb-2"
                                    />
                                    <p className="text-sm">
                                        "IIHM is India's top hospitality
                                        education brand, 2025"
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
                                    className="btn-accent"
                                >
                                    Apply Now
                                </button>
                                <button
                                    onClick={() => scrollToSection("about")}
                                    className="btn-outline"
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
                                <div>
                                    <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all">
                                        <option value="">
                                            Preferred Campus*
                                        </option>
                                        <option value="kolkata">Kolkata</option>
                                        <option value="pune">Pune</option>
                                        <option value="delhi">Delhi</option>
                                        <option value="bangalore">
                                            Bangalore
                                        </option>
                                        <option value="hyderabad">
                                            Hyderabad
                                        </option>
                                        <option value="jaipur">Jaipur</option>
                                        <option value="ahmedabad">
                                            Ahmedabad
                                        </option>
                                        <option value="goa">Goa</option>
                                    </select>
                                </div>
                                <div>
                                    <input
                                        type="text"
                                        placeholder="City*"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                                        required
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="w-full bg-gradient-to-r from-red-600 to-red-700 text-white py-3 px-6 rounded-lg font-semibold hover:from-red-700 hover:to-red-800 transition-all shadow-lg transform hover:scale-105"
                                >
                                    Get Free Career Guide
                                </button>
                                <p className="text-xs text-gray-500 text-center">
                                    By submitting this form, you agree to our
                                    terms and conditions.
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

            {/* Quick Stats */}
            <section className="bg-white     shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Promotional Image */}
                    <div className="text-center">
                        <img
                            src="https://iihm.ac.in/hotel_management/images/Banner_Info.png"
                            alt="IIHM Information Banner"
                            className="mx-auto max-w-full h-auto"
                        />
                    </div>
                </div>
            </section>

            {/* ERASMUS Program Section */}
            <section className="bg-gradient-to-r from-blue-800 to-purple-800 py-16 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        IIHM is the only college from India to join the
                        prestigious EU funded ERASMUS program
                    </h2>
                    <p className="text-xl mb-8 text-blue-100">
                        Countries participating in EU Funded Student Exchange
                        Program (ERASMUS)
                    </p>
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 max-w-4xl mx-auto">
                        <img
                            src="https://iihm.ac.in/hotel_management/images/banner_logo.png"
                            alt="ERASMUS Program Countries"
                            className="w-full h-auto max-w-3xl mx-auto"
                        />
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="bg-neutral-100 py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-section-title text-neutral-900 mb-4">
                            About IIHM
                        </h2>
                        <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
                            "IIHM is India's top hospitality education brand,
                            2025" - The Economic Times
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
                            <h3 className="text-card-title text-neutral-900 mb-6">
                                Your Future Career Begins Here
                            </h3>
                            <p className="text-neutral-600 mb-6 leading-relaxed">
                                The IIHM Pune campus boasts of excellent
                                infrastructure facilities and training programs.
                                At IIHM Pune, we prepare you to kick start a
                                career in the ever-growing hospitality industry.
                                The campus itself is located in the heart of the
                                city & sees students from around the country
                                flock to it.
                            </p>
                            <p className="text-neutral-600 mb-6 leading-relaxed">
                                Along with a range of highly qualified
                                professors & trainers, we have regular lectures
                                and sessions from reputed hospitality
                                professionals. The campus is also the only
                                hospitality institute in India that offers a B.
                                Sc. In Hospitality & Tourism Studies from
                                Yashwantrao Chavan Maharashtra Open University,
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
                                    London, UK. The degree is recognised
                                    worldwide and accepted as a symbol of high
                                    quality education.
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
                                            Accepted worldwide
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Features */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="bg-white p-6 rounded-xl shadow-lg text-center card-hover">
                            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg
                                    className="w-8 h-8 text-red-600"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                                Career Building Programs
                            </h3>
                            <p className="text-neutral-600 text-sm">
                                Learn from a faculty that has decades worth of
                                industry experience.
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-lg text-center card-hover">
                            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg
                                    className="w-8 h-8 text-blue-600"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                                International Curriculum
                            </h3>
                            <p className="text-neutral-600 text-sm">
                                Learn what the world learns at IIHM! Be prepared
                                for a global experience on our campus.
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-lg text-center card-hover">
                            <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg
                                    className="w-8 h-8 text-amber-600"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m8 6V8a2 2 0 00-2-2H10a2 2 0 00-2 2v8a2 2 0 002 2h4a2 2 0 002-2z"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                                Training and Placements
                            </h3>
                            <p className="text-neutral-600 text-sm">
                                Our industry ready training modules &
                                International placements are the best way to
                                kick start your career.
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-lg text-center card-hover">
                            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg
                                    className="w-8 h-8 text-green-600"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                                Global Networking & Alumni
                            </h3>
                            <p className="text-neutral-600 text-sm">
                                Network with alumni, faculty and guest lecturers
                                from around the world in the IIHM campus!
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Step Inside India's Most Premium Hotel Management College */}
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
                            hotel management at IIHM. Book a tour of our campus
                            to find out for yourself!
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
                                    Learn from a faculty that has decades worth
                                    of industry experience.
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
                                    Learn what the world learns at IIHM! Be
                                    prepared for a global experience on our
                                    campus.
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
                                    Network with alumni, faculty and guest
                                    lecturers from around the world in the IIHM
                                    campus!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Courses Section */}
            <section id="courses" className="bg-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-section-title text-neutral-900 mb-4">
                            Our Courses
                        </h2>
                        <p className="text-xl text-neutral-600">
                            Choose from our internationally recognized
                            hospitality programs
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
                        <div className="bg-gradient-to-br from-red-50 to-blue-50 p-8 rounded-xl shadow-lg card-hover">
                            <div className="text-center mb-6">
                                <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <svg
                                        className="w-10 h-10 text-red-600"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                                        />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-neutral-900 mb-2">
                                    B.Sc. Hospitality & Tourism Studies
                                </h3>
                                <p className="text-neutral-600 text-sm mb-4">
                                    Comprehensive program covering all aspects
                                    of hospitality management
                                </p>
                            </div>
                            <div className="space-y-3 mb-6">
                                <div className="flex justify-between">
                                    <span className="text-sm text-neutral-600">
                                        Duration:
                                    </span>
                                    <span className="text-sm font-semibold">
                                        3 Years
                                    </span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-sm text-neutral-600">
                                        Eligibility:
                                    </span>
                                    <span className="text-sm font-semibold">
                                        10+2
                                    </span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-sm text-neutral-600">
                                        Degree:
                                    </span>
                                    <span className="text-sm font-semibold">
                                        UGC Recognized
                                    </span>
                                </div>
                            </div>
                            <ul className="text-sm text-neutral-600 space-y-2 mb-6">
                                <li className="flex items-center">
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
                                    Hotel Operations Management
                                </li>
                                <li className="flex items-center">
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
                                    Tourism & Travel Management
                                </li>
                                <li className="flex items-center">
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
                                    Industry Training
                                </li>
                            </ul>
                            <button className="btn-primary w-full">
                                Learn More
                            </button>
                        </div>

                        {/* Course 2 */}
                        <div className="bg-gradient-to-br from-blue-50 to-amber-50 p-8 rounded-xl shadow-lg card-hover">
                            <div className="text-center mb-6">
                                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <svg
                                        className="w-10 h-10 text-blue-600"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                        />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-neutral-900 mb-2">
                                    BA Hospitality Management (UWL)
                                </h3>
                                <p className="text-neutral-600 text-sm mb-4">
                                    International degree from University of West
                                    London
                                </p>
                            </div>
                            <div className="space-y-3 mb-6">
                                <div className="flex justify-between">
                                    <span className="text-sm text-neutral-600">
                                        Duration:
                                    </span>
                                    <span className="text-sm font-semibold">
                                        3 Years
                                    </span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-sm text-neutral-600">
                                        Eligibility:
                                    </span>
                                    <span className="text-sm font-semibold">
                                        10+2
                                    </span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-sm text-neutral-600">
                                        Degree:
                                    </span>
                                    <span className="text-sm font-semibold">
                                        UK University
                                    </span>
                                </div>
                            </div>
                            <ul className="text-sm text-neutral-600 space-y-2 mb-6">
                                <li className="flex items-center">
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
                                    International Curriculum
                                </li>
                                <li className="flex items-center">
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
                                    Global Recognition
                                </li>
                                <li className="flex items-center">
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
                                    UK Study Opportunity
                                </li>
                            </ul>
                            <button className="btn-secondary w-full">
                                Learn More
                            </button>
                        </div>

                        {/* Course 3 */}
                        <div className="bg-gradient-to-br from-amber-50 to-green-50 p-8 rounded-xl shadow-lg card-hover">
                            <div className="text-center mb-6">
                                <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <svg
                                        className="w-10 h-10 text-amber-600"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4"
                                        />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-neutral-900 mb-2">
                                    BA Culinary Arts (UWL)
                                </h3>
                                <p className="text-neutral-600 text-sm mb-4">
                                    Specialized culinary program with
                                    international exposure
                                </p>
                            </div>
                            <div className="space-y-3 mb-6">
                                <div className="flex justify-between">
                                    <span className="text-sm text-neutral-600">
                                        Duration:
                                    </span>
                                    <span className="text-sm font-semibold">
                                        3 Years
                                    </span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-sm text-neutral-600">
                                        Eligibility:
                                    </span>
                                    <span className="text-sm font-semibold">
                                        10+2
                                    </span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-sm text-neutral-600">
                                        Degree:
                                    </span>
                                    <span className="text-sm font-semibold">
                                        UK University
                                    </span>
                                </div>
                            </div>
                            <ul className="text-sm text-neutral-600 space-y-2 mb-6">
                                <li className="flex items-center">
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
                                    Professional Kitchen Training
                                </li>
                                <li className="flex items-center">
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
                                    International Cuisine
                                </li>
                                <li className="flex items-center">
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
                            <button className="btn-accent w-full">
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
                                <div className="text-center">
                                    <div className="text-3xl font-bold mb-2">
                                        95%
                                    </div>
                                    <div className="text-sm">
                                        Placement Rate
                                    </div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-bold mb-2">
                                        50+
                                    </div>
                                    <div className="text-sm">
                                        Countries Alumni Network
                                    </div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-bold mb-2">
                                        ₹8L+
                                    </div>
                                    <div className="text-sm">
                                        Average Starting Salary
                                    </div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-bold mb-2">
                                        100+
                                    </div>
                                    <div className="text-sm">
                                        Industry Partners
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Hospitality Industry Growth Section */}
            <section className="bg-gradient-to-br from-green-600 to-blue-700 py-20 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
                            Hospitality
                        </h2>
                        <div className="flex items-center justify-center mb-6">
                            <img
                                src="https://iihm.ac.in/hotel_management/images/arroww1.png"
                                alt=""
                                className="h-6 mx-2"
                            />
                            <h3 className="text-2xl md:text-3xl font-semibold">
                                A growing, recession free career choice
                            </h3>
                            <img
                                src="https://iihm.ac.in/hotel_management/images/arroww2.png"
                                alt=""
                                className="h-6 mx-2"
                            />
                        </div>
                        <p className="text-xl text-green-100">
                            Still skeptical about joining the hospitality
                            industry? These stats should change your mind!
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-center hover:bg-white/20 transition-all">
                            <div className="text-6xl font-bold text-yellow-300 mb-4">
                                40%
                            </div>
                            <h4 className="text-xl font-semibold mb-2">
                                Salary Increment
                            </h4>
                            <p className="text-green-100">
                                In The Last 3 Years
                            </p>
                        </div>

                        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-center hover:bg-white/20 transition-all">
                            <div className="text-6xl font-bold text-yellow-300 mb-4">
                                50%
                            </div>
                            <h4 className="text-xl font-semibold mb-2">
                                Growth YOY
                            </h4>
                            <p className="text-green-100">
                                In Youth Joining Hospitality
                            </p>
                        </div>

                        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-center hover:bg-white/20 transition-all">
                            <div className="text-6xl font-bold text-yellow-300 mb-4">
                                200+
                            </div>
                            <h4 className="text-xl font-semibold mb-2">
                                New Hotels
                            </h4>
                            <p className="text-green-100">
                                In India Since 2011
                            </p>
                        </div>

                        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-center hover:bg-white/20 transition-all">
                            <div className="text-6xl font-bold text-yellow-300 mb-4">
                                82,512
                            </div>
                            <h4 className="text-xl font-semibold mb-2">
                                Branded Hotel Rooms
                            </h4>
                            <p className="text-green-100">In India</p>
                        </div>

                        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-center hover:bg-white/20 transition-all">
                            <div className="text-6xl font-bold text-yellow-300 mb-4">
                                31
                            </div>
                            <h4 className="text-xl font-semibold mb-2">
                                Average age of GM
                            </h4>
                            <p className="text-green-100">The Youngest</p>
                        </div>

                        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-center hover:bg-white/20 transition-all">
                            <div className="text-6xl font-bold text-yellow-300 mb-4">
                                30%
                            </div>
                            <h4 className="text-xl font-semibold mb-2">
                                Raise In Demand
                            </h4>
                            <p className="text-green-100">For Young Chefs</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section id="testimonials" className="bg-neutral-100 py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-section-title text-neutral-900 mb-4">
                            Testimonials
                        </h2>
                        <p className="text-xl text-neutral-600">
                            Hear what people have to say about IIHM
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Student Testimonials */}
                        <div className="bg-white p-6 rounded-xl shadow-lg card-hover">
                            <div className="flex items-center mb-4">
                                <img
                                    src="https://iihm.ac.in/hotel_management/images/Sirawich_replace.jpg"
                                    alt="Sirawich"
                                    className="w-12 h-12 rounded-full mr-4 border-2 border-red-200"
                                />
                                <div>
                                    <h4 className="font-semibold text-neutral-900">
                                        Sirawich Ruechaipanitch
                                    </h4>
                                    <p className="text-sm text-neutral-600">
                                        Batch 2102-15
                                    </p>
                                </div>
                            </div>
                            <p className="text-neutral-600 text-sm leading-relaxed">
                                "I could not have felt more at home in a place
                                so different from Armenia. I love every moment I
                                spend at the IIHM Hotel School whether it is
                                cooking up an Indian meal in the kitchen or
                                supervising over a Food and Beverage Festival. I
                                am also the Captain of IIHM Rugby Team."
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-lg card-hover">
                            <div className="flex items-center mb-4">
                                <img
                                    src="https://iihm.ac.in/hotel_management/images/sohee_replace.jpg"
                                    alt="Sohee"
                                    className="w-12 h-12 rounded-full mr-4 border-2 border-red-200"
                                />
                                <div>
                                    <h4 className="font-semibold text-neutral-900">
                                        Sohee Lim
                                    </h4>
                                    <p className="text-sm text-neutral-600">
                                        Batch 2015-18
                                    </p>
                                </div>
                            </div>
                            <p className="text-neutral-600 text-sm leading-relaxed">
                                "IIHM is best out of all. As an International
                                Student, IIHM seems to handle and understand us
                                very well. Faculty and members of IIHM are very
                                friendly and reliable. With the warm support
                                from IIHM, the homesickness gradually decreases
                                and I start to progress much faster. IIHM also
                                gave me the opportunity to go for training in
                                USA."
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-lg card-hover">
                            <div className="flex items-center mb-4">
                                <img
                                    src="https://iihm.ac.in/hotel_management/images/sevak-replace.jpg"
                                    alt="Sevak"
                                    className="w-12 h-12 rounded-full mr-4 border-2 border-red-200"
                                />
                                <div>
                                    <h4 className="font-semibold text-neutral-900">
                                        Sevak
                                    </h4>
                                    <p className="text-sm text-neutral-600">
                                        Batch 2013-16
                                    </p>
                                </div>
                            </div>
                            <p className="text-neutral-600 text-sm leading-relaxed">
                                "Life certainly does surprise you with its
                                unexpected turns. I never knew that three years
                                of long journey with IIHM would lead me to the
                                dream hotels of many, Marriott. I cannot thank
                                IIHM enough, along with everyone for their
                                consistent support. And I certainly hope to
                                continue making my IIHM proud"
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-lg card-hover">
                            <div className="flex items-center mb-4">
                                <img
                                    src="https://iihm.ac.in/hotel_management/images/Hovaz.jpg"
                                    alt="Hovaz Dilanchian"
                                    className="w-12 h-12 rounded-full mr-4 border-2 border-red-200"
                                />
                                <div>
                                    <h4 className="font-semibold text-neutral-900">
                                        Hovaz Dilanchian
                                    </h4>
                                    <p className="text-sm text-neutral-600">
                                        Batch 2103-16
                                    </p>
                                </div>
                            </div>
                            <p className="text-neutral-600 text-sm leading-relaxed">
                                "Hello! I am Hovaz and I come from Iran. I
                                wanted to study in IIHM Hotel School in India
                                and therefore I came to Kolkata. IIHM is
                                renowned as an institute that prepares students
                                to succeed in International Hotels, and that is
                                what I look forward to."
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-lg card-hover">
                            <div className="flex items-center mb-4">
                                <img
                                    src="https://iihm.ac.in/hotel_management/images/Dayapal.jpg"
                                    alt="Dayapal"
                                    className="w-12 h-12 rounded-full mr-4 border-2 border-red-200"
                                />
                                <div>
                                    <h4 className="font-semibold text-neutral-900">
                                        Dayapal
                                    </h4>
                                    <p className="text-sm text-neutral-600">
                                        Batch 2004
                                    </p>
                                </div>
                            </div>
                            <p className="text-neutral-600 text-sm leading-relaxed">
                                "With the help of IIHM I Graduated in
                                hospitality management and came to USA on
                                Internship. After completing my Internship, I
                                completed my masters in hospitality management
                                from Columbia University. Today I am the Food &
                                Beverage Manager in Park Hyatt, Washington DC."
                            </p>
                        </div>
                    </div>

                    {/* Industry Expert Testimonials */}
                    <div className="mt-16">
                        <h3 className="text-2xl font-bold text-neutral-900 text-center mb-8">
                            From Industry Experts
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            <div className="bg-gradient-to-br from-red-50 to-blue-50 p-6 rounded-xl shadow-lg card-hover">
                                <div className="flex items-center mb-4">
                                    <img
                                        src="https://iihm.ac.in/hotel_management/images/sanjeev.jpg"
                                        alt="Sanjeev Kapoor"
                                        className="w-12 h-12 rounded-full mr-4 border-2 border-red-200"
                                    />
                                    <div>
                                        <h4 className="font-semibold text-neutral-900">
                                            Mr. Sanjeev Kapoor
                                        </h4>
                                        <p className="text-sm text-neutral-600">
                                            Padma Shri Iconic Chef, Principal
                                            Judge – IIHM YCO
                                        </p>
                                    </div>
                                </div>
                                <p className="text-neutral-600 text-sm leading-relaxed">
                                    "What IIHM has done by organising the Young
                                    Chef Olympiad is truly path breaking and the
                                    direct benefit of YCO goes to students of
                                    IIHM. It's amazing learning for IIHM
                                    students."
                                </p>
                            </div>

                            <div className="bg-gradient-to-br from-blue-50 to-amber-50 p-6 rounded-xl shadow-lg card-hover">
                                <div className="flex items-center mb-4">
                                    <img
                                        src="https://iihm.ac.in/hotel_management/images/atul.jpg"
                                        alt="Chef Atul Kocchar"
                                        className="w-12 h-12 rounded-full mr-4 border-2 border-blue-200"
                                    />
                                    <div>
                                        <h4 className="font-semibold text-neutral-900">
                                            Chef Atul Kocchar
                                        </h4>
                                        <p className="text-sm text-neutral-600">
                                            Celebrity & Michelin Starred Indian
                                            Chef
                                        </p>
                                    </div>
                                </div>
                                <p className="text-neutral-600 text-sm leading-relaxed">
                                    "It is a wonderful opportunity for these
                                    kids to come and experience what they love.
                                    These competitions only polish the talent
                                    and help realize youngsters the world of
                                    opportunities lying at their feet."
                                </p>
                            </div>

                            <div className="bg-gradient-to-br from-green-50 to-blue-50 p-6 rounded-xl shadow-lg card-hover">
                                <div className="flex items-center mb-4">
                                    <img
                                        src="https://iihm.ac.in/hotel_management/images/eric.jpg"
                                        alt="Mr. Eric Pickles"
                                        className="w-12 h-12 rounded-full mr-4 border-2 border-green-200"
                                    />
                                    <div>
                                        <h4 className="font-semibold text-neutral-900">
                                            Mr. Eric Pickles
                                        </h4>
                                        <p className="text-sm text-neutral-600">
                                            Secretary of State for the
                                            communities & Local Government, UK
                                        </p>
                                    </div>
                                </div>
                                <p className="text-neutral-600 text-sm leading-relaxed">
                                    "I thank the effort of IIHM to organize a
                                    national level Indian cuisine themed
                                    Competition with Finals at London and these
                                    efforts would produce more Indian Chefs not
                                    just in India but in UK."
                                </p>
                            </div>

                            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl shadow-lg card-hover">
                                <div className="flex items-center mb-4">
                                    <img
                                        src="https://iihm.ac.in/hotel_management/images/bary.jpg"
                                        alt="Mr. Barry Lowen"
                                        className="w-12 h-12 rounded-full mr-4 border-2 border-purple-200"
                                    />
                                    <div>
                                        <h4 className="font-semibold text-neutral-900">
                                            Mr. Barry Lowen
                                        </h4>
                                        <p className="text-sm text-neutral-600">
                                            Director, UK Trade & Investments,
                                            British High Commission
                                        </p>
                                    </div>
                                </div>
                                <p className="text-neutral-600 text-sm leading-relaxed">
                                    "This contest is a welcome reminder of the
                                    excellence of Indian cooking, and it is
                                    fitting that it is being held in London, the
                                    center of world cuisine. The Food and Drink
                                    sector in the UK employs more than 500,000
                                    people."
                                </p>
                            </div>

                            <div className="bg-gradient-to-br from-orange-50 to-red-50 p-6 rounded-xl shadow-lg card-hover">
                                <div className="flex items-center mb-4">
                                    <img
                                        src="https://iihm.ac.in/hotel_management/images/britta.jpg"
                                        alt="Ms. Britta Leick-Milde"
                                        className="w-12 h-12 rounded-full mr-4 border-2 border-orange-200"
                                    />
                                    <div>
                                        <h4 className="font-semibold text-neutral-900">
                                            Ms. Britta Leick-Milde
                                        </h4>
                                        <p className="text-sm text-neutral-600">
                                            GM, Hyatt Residency, Doha
                                        </p>
                                    </div>
                                </div>
                                <p className="text-neutral-600 text-sm leading-relaxed">
                                    "The state of art facilities that were at
                                    one point missing in top hotel schools of
                                    India were provided by your Institution. I
                                    would like to thank each one of you for
                                    living this dream and building this
                                    wonderful Institution."
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Awards and Recognition Section */}
            <section className="bg-gradient-to-br from-red-700 to-blue-800 py-20 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
                            Becoming the top & largest
                        </h2>
                        <div className="flex items-center justify-center mb-4">
                            <img
                                src="https://iihm.ac.in/hotel_management/images/arroww1.png"
                                alt=""
                                className="h-6 mx-2"
                            />
                            <h3 className="text-2xl md:text-3xl font-semibold">
                                Hotel Management Chain in Asia
                            </h3>
                            <img
                                src="https://iihm.ac.in/hotel_management/images/arroww2.png"
                                alt=""
                                className="h-6 mx-2"
                            />
                        </div>
                        <p className="text-xl text-blue-100">
                            is just the beginning
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-all">
                            <img
                                src="https://iihm.ac.in/hotel_management/images/a1.png"
                                alt="Economic Times Award"
                                className="h-20 mx-auto mb-4"
                            />
                            <p className="text-sm">
                                Economics Times - Best Hospitality Education
                                Brand 2018, 2019, 2020, 2021
                            </p>
                        </div>

                        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-all">
                            <img
                                src="https://iihm.ac.in/hotel_management/images/a2.png"
                                alt="Forbes India Award"
                                className="h-20 mx-auto mb-4"
                            />
                            <p className="text-sm">
                                Forbes India - Great Place to Study & Great
                                Indian Institute 2018, 2019, 2020
                            </p>
                        </div>

                        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-all">
                            <img
                                src="https://iihm.ac.in/hotel_management/images/a3.png"
                                alt="ASSOCHAM Award"
                                className="h-20 mx-auto mb-4"
                            />
                            <p className="text-sm">
                                ASSOCHAM - IIHM as Best Placement Team
                            </p>
                        </div>

                        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-all">
                            <img
                                src="https://iihm.ac.in/hotel_management/images/a4.png"
                                alt="Zee Award"
                                className="h-20 mx-auto mb-4"
                            />
                            <p className="text-sm">
                                Zee 24 Ghanta - Zee Education Excellence Awards
                                as Best Hospitality Education Brand
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-all">
                            <img
                                src="https://iihm.ac.in/hotel_management/images/a5.png"
                                alt="ET Now Award"
                                className="h-20 mx-auto mb-4"
                            />
                            <p className="text-sm">
                                Et Now - IIHM's founder Dr. Suborno Bose as
                                Business Leader of the Year
                            </p>
                        </div>

                        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-all">
                            <img
                                src="https://iihm.ac.in/hotel_management/images/a6.png"
                                alt="UN WTO Award"
                                className="h-20 mx-auto mb-4"
                            />
                            <p className="text-sm">
                                United Nation's WTO - Congratulates IIHM for
                                Championing the Spirit of Hospitality
                            </p>
                        </div>

                        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-all">
                            <img
                                src="https://iihm.ac.in/hotel_management/images/a7.png"
                                alt="Education Leadership Award"
                                className="h-20 mx-auto mb-4"
                            />
                            <p className="text-sm">
                                Education Leadership Awards - International
                                Institute of Hotel Management 2021
                            </p>
                        </div>

                        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-all">
                            <img
                                src="https://iihm.ac.in/hotel_management/images/a8.png"
                                alt="Lifetime Achievement Award"
                                className="h-20 mx-auto mb-4"
                            />
                            <p className="text-sm">
                                Lifetime Achievement Award - Ratan Tata, Sanjeev
                                Kapoor & Raymond Blanc accept the Award
                            </p>
                        </div>
                    </div>

                    {/* Recognition by Media */}
                    <div className="mt-16 text-center">
                        <h3 className="text-2xl font-bold mb-8">
                            Recognized By
                        </h3>
                        <div className="flex flex-wrap justify-center items-center gap-8">
                            <img
                                src="https://iihm.ac.in/hotel_management/images/l1.png"
                                alt="CNN"
                                className="h-12 grayscale hover:grayscale-0 transition-all"
                            />
                            <img
                                src="https://iihm.ac.in/hotel_management/images/l2.png"
                                alt="Forbes India"
                                className="h-12 grayscale hover:grayscale-0 transition-all"
                            />
                            <img
                                src="https://iihm.ac.in/hotel_management/images/l3.png"
                                alt="The Economic Times"
                                className="h-12 grayscale hover:grayscale-0 transition-all"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Campuses Section */}
            <section id="campuses" className="bg-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-20 text-center">
                        <div className="card-hover p-4 rounded-lg bg-neutral-50">
                            <div className="text-3xl font-bold text-primary">
                                40%
                            </div>
                            <div className="text-sm text-neutral-600">
                                Salary Increment In The Last 3 Years
                            </div>
                        </div>
                        <div className="card-hover p-4 rounded-lg bg-neutral-50">
                            <div className="text-3xl font-bold text-primary">
                                50%
                            </div>
                            <div className="text-sm text-neutral-600">
                                Growth YOY In Youth Joining Hospitality
                            </div>
                        </div>
                        <div className="card-hover p-4 rounded-lg bg-neutral-50">
                            <div className="text-3xl font-bold text-primary">
                                200+
                            </div>
                            <div className="text-sm text-neutral-600">
                                New Hotels In India Since 2011
                            </div>
                        </div>
                        <div className="card-hover p-4 rounded-lg bg-neutral-50">
                            <div className="text-3xl font-bold text-primary">
                                82,512
                            </div>
                            <div className="text-sm text-neutral-600">
                                Branded Hotel Rooms In India
                            </div>
                        </div>
                        <div className="card-hover p-4 rounded-lg bg-neutral-50">
                            <div className="text-3xl font-bold text-primary">
                                31
                            </div>
                            <div className="text-sm text-neutral-600">
                                Average age of GM, The Youngest
                            </div>
                        </div>
                        <div className="card-hover p-4 rounded-lg bg-neutral-50">
                            <div className="text-3xl font-bold text-primary">
                                30%
                            </div>
                            <div className="text-sm text-neutral-600">
                                Raise In The Demand For Young Chefs
                            </div>
                        </div>
                    </div>
                    <div className="text-center mb-16">
                        <h2 className="text-section-title text-neutral-900 mb-4">
                            IIHM Campuses
                        </h2>
                        <div className="flex items-center justify-center mb-6">
                            <img
                                src="https://iihm.ac.in/hotel_management/images/arrowb1.png"
                                alt=""
                                className="h-6 mx-2"
                            />
                            <p className="text-xl text-neutral-600">
                                Know more about our campuses around the world
                            </p>
                            <img
                                src="https://iihm.ac.in/hotel_management/images/arrowb2.png"
                                alt=""
                                className="h-6 mx-2"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
                        {[
                            {
                                name: "Kolkata",
                                image: "https://iihm.ac.in/hotel_management/images/kolkata.png",
                            },
                            {
                                name: "Pune",
                                image: "https://iihm.ac.in/hotel_management/images/pune.png",
                            },
                            {
                                name: "Hyderabad",
                                image: "https://iihm.ac.in/hotel_management/images/hyderabad.png",
                            },
                            {
                                name: "Ahmedabad",
                                image: "https://iihm.ac.in/hotel_management/images/ahmedabad.png",
                            },
                            {
                                name: "Bangalore",
                                image: "https://iihm.ac.in/hotel_management/images/bangalore.png",
                            },
                            {
                                name: "Jaipur",
                                image: "https://iihm.ac.in/hotel_management/images/jaipur.png",
                            },
                            {
                                name: "Delhi",
                                image: "https://iihm.ac.in/hotel_management/images/delhi.png",
                            },
                            {
                                name: "Goa",
                                image: "https://iihm.ac.in/hotel_management/images/goa.png",
                            },
                            {
                                name: "Bangkok",
                                image: "https://iihm.ac.in/hotel_management/images/bangkok.png",
                            },
                            {
                                name: "Samarkand",
                                image: "https://iihm.ac.in/hotel_management/images/samarkand.png",
                            },
                            {
                                name: "Singapore",
                                image: "https://iihm.ac.in/hotel_management/images/scampus.jpg",
                            },
                            {
                                name: "Siliguri",
                                image: "https://iihm.ac.in/hotel_management/images/siliguri-icon.png",
                            },
                        ].map((campus, index) => (
                            <div key={index} className="text-center group">
                                <div className="bg-neutral-50 p-4 rounded-xl shadow-lg card-hover">
                                    <img
                                        src={campus.image}
                                        alt={`IIHM ${campus.name}`}
                                        className="w-16 h-16 mx-auto mb-2 rounded-full"
                                    />
                                    <p className="text-sm font-medium text-neutral-900">
                                        {campus.name}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Placements Section */}
            <section id="placements" className="bg-neutral-100 py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-section-title text-neutral-900 mb-4">
                            Open New Doors Around The World With IIHM
                        </h2>
                        <p className="text-xl text-neutral-600">
                            Take a look at some of our esteemed tie-ups and
                            lucrative placement partners.
                        </p>
                    </div>

                    {/* International Tie-ups */}
                    <div className="mb-16">
                        <h3 className="text-2xl font-bold text-neutral-900 text-center mb-8">
                            Our International Tie-Ups
                        </h3>
                        <div className="bg-white p-8 rounded-xl shadow-lg">
                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
                                {[
                                    {
                                        name: "University of West London",
                                        image: "https://iihm.ac.in/hotel_management/images/1.png",
                                    },
                                    {
                                        name: "DeVry University",
                                        image: "https://iihm.ac.in/hotel_management/images/2.png",
                                    },
                                    {
                                        name: "Kasem Bundit University",
                                        image: "https://iihm.ac.in/hotel_management/images/4.png",
                                    },
                                    {
                                        name: "Niagara College Canada",
                                        image: "https://iihm.ac.in/hotel_management/images/9.png",
                                    },
                                    {
                                        name: "George Brown College",
                                        image: "https://iihm.ac.in/hotel_management/images/10.png",
                                    },
                                    {
                                        name: "Taylor's University",
                                        image: "https://iihm.ac.in/hotel_management/images/11.png",
                                    },
                                ].map((partner, index) => (
                                    <div key={index} className="text-center">
                                        <img
                                            src={partner.image}
                                            alt={partner.name}
                                            className="h-16 mx-auto grayscale hover:grayscale-0 transition-all duration-300 hover:scale-110"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Global Placements */}
                    <div>
                        <h3 className="text-2xl font-bold text-neutral-900 text-center mb-8">
                            Our Global Placements
                        </h3>
                        <div className="bg-gradient-to-br from-red-50 to-blue-50 p-8 rounded-xl shadow-lg">
                            <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center">
                                {[
                                    {
                                        name: "Hyatt Regency",
                                        image: "https://iihm.ac.in/hotel_management/images/5.png",
                                    },
                                    {
                                        name: "The Park Hotels",
                                        image: "https://iihm.ac.in/hotel_management/images/6.png",
                                    },
                                    {
                                        name: "The Oberoi Grand",
                                        image: "https://iihm.ac.in/hotel_management/images/7.png",
                                    },
                                    {
                                        name: "ITC Hotel",
                                        image: "https://iihm.ac.in/hotel_management/images/8.png",
                                    },
                                    {
                                        name: "Swissotel",
                                        image: "https://iihm.ac.in/hotel_management/images/12.png",
                                    },
                                    {
                                        name: "The Ritz-Carlton",
                                        image: "https://iihm.ac.in/hotel_management/images/13.png",
                                    },
                                    {
                                        name: "JW Marriott",
                                        image: "https://iihm.ac.in/hotel_management/images/14.png",
                                    },
                                    {
                                        name: "Novotel",
                                        image: "https://iihm.ac.in/hotel_management/images/15.png",
                                    },
                                    {
                                        name: "Taj",
                                        image: "https://iihm.ac.in/hotel_management/images/16.png",
                                    },
                                    {
                                        name: "The Leela",
                                        image: "https://iihm.ac.in/hotel_management/images/17.png",
                                    },
                                ].map((hotel, index) => (
                                    <div key={index} className="text-center">
                                        <img
                                            src={hotel.image}
                                            alt={hotel.name}
                                            className="h-12 mx-auto grayscale hover:grayscale-0 transition-all duration-300 hover:scale-110"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section
                id="contact"
                className="gradient-secondary text-white py-20 relative overflow-hidden"
            >
                <div className="absolute inset-0 bg-black/10"></div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-section-title mb-4">
                            Get In Touch
                        </h2>
                        <p className="text-xl text-blue-200">
                            Ready to start your hospitality career? Contact us
                            today!
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Contact Information */}
                        <div>
                            <h3 className="text-2xl font-bold mb-8">
                                Contact Information
                            </h3>
                            <div className="space-y-6">
                                <div className="flex items-center">
                                    <div className="w-12 h-12 bg-blue-800 rounded-full flex items-center justify-center mr-4">
                                        <svg
                                            className="w-6 h-6"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                            />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="font-semibold">Phone</p>
                                        <a
                                            href="tel:1800-103-8586"
                                            className="text-blue-200 hover:text-white transition-colors"
                                        >
                                            1800-103-8586
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-center">
                                    <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mr-4">
                                        <svg
                                            className="w-6 h-6"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="font-semibold">
                                            WhatsApp
                                        </p>
                                        <a
                                            href="https://wa.me/919831050000"
                                            className="text-blue-200 hover:text-white transition-colors"
                                        >
                                            +91 9831050000
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-center">
                                    <div className="w-12 h-12 bg-blue-800 rounded-full flex items-center justify-center mr-4">
                                        <svg
                                            className="w-6 h-6"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                            />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="font-semibold">Email</p>
                                        <a
                                            href="mailto:info@iihm.ac.in"
                                            className="text-blue-200 hover:text-white transition-colors"
                                        >
                                            info@iihm.ac.in
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-center">
                                    <div className="w-12 h-12 bg-blue-800 rounded-full flex items-center justify-center mr-4">
                                        <svg
                                            className="w-6 h-6"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                            />
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                            />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="font-semibold">Address</p>
                                        <p className="text-blue-200">
                                            IIHM Pune Campus, Maharashtra, India
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Quick Action Buttons */}
                            <div className="mt-8 space-y-4">
                                <a
                                    href="https://wa.me/919831050000"
                                    className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg flex items-center justify-center transition-all shadow-lg hover:shadow-xl"
                                >
                                    <svg
                                        className="w-5 h-5 mr-2"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                                    </svg>
                                    Chat on WhatsApp
                                </a>
                                <a
                                    href="tel:1800-103-8586"
                                    className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg flex items-center justify-center transition-all shadow-lg hover:shadow-xl"
                                >
                                    <svg
                                        className="w-5 h-5 mr-2"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                        />
                                    </svg>
                                    Call Now
                                </a>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="bg-white text-neutral-900 p-8 rounded-xl shadow-2xl">
                            <h3 className="text-2xl font-bold mb-6">
                                Get A Free Career Guide!
                            </h3>
                            <form className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-neutral-700 mb-1">
                                        Full Name
                                    </label>
                                    <input
                                        type="text"
                                        className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                                        placeholder="Enter your full name"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-neutral-700 mb-1">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                                        placeholder="Enter your email"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-neutral-700 mb-1">
                                        Phone
                                    </label>
                                    <input
                                        type="tel"
                                        className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                                        placeholder="Enter your phone number"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-neutral-700 mb-1">
                                        Course Interest
                                    </label>
                                    <select className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all">
                                        <option>Select Course</option>
                                        <option>
                                            B.Sc. Hospitality & Tourism Studies
                                        </option>
                                        <option>
                                            BA Hospitality Management (UWL)
                                        </option>
                                        <option>BA Culinary Arts (UWL)</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-neutral-700 mb-1">
                                        Message
                                    </label>
                                    <textarea
                                        rows={4}
                                        className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                                        placeholder="Tell us about your career goals..."
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg transition-all shadow-lg hover:shadow-xl"
                                >
                                    Get Free Career Guide
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-neutral-900 text-white py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <div>
                            <div className="flex items-center mb-4">
                                <img
                                    src="https://iihm.ac.in/hotel_management/images/pune.png"
                                    alt="IIHM"
                                    className="h-8 w-auto"
                                />
                                <span className="ml-2 text-xl font-bold">
                                    IIHM
                                </span>
                            </div>
                            <p className="text-neutral-400 text-sm">
                                Asia's largest hotel school chain, preparing
                                students for successful careers in the
                                hospitality industry.
                            </p>
                        </div>
                        <div>
                            <h4 className="font-semibold mb-4">Quick Links</h4>
                            <ul className="space-y-2 text-sm text-neutral-400">
                                <li>
                                    <button
                                        onClick={() => scrollToSection("about")}
                                        className="hover:text-white transition-colors"
                                    >
                                        About Us
                                    </button>
                                </li>
                                <li>
                                    <button
                                        onClick={() =>
                                            scrollToSection("courses")
                                        }
                                        className="hover:text-white transition-colors"
                                    >
                                        Courses
                                    </button>
                                </li>
                                <li>
                                    <button
                                        onClick={() =>
                                            scrollToSection("campuses")
                                        }
                                        className="hover:text-white transition-colors"
                                    >
                                        Campuses
                                    </button>
                                </li>
                                <li>
                                    <button
                                        onClick={() =>
                                            scrollToSection("placements")
                                        }
                                        className="hover:text-white transition-colors"
                                    >
                                        Placements
                                    </button>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold mb-4">Contact Info</h4>
                            <ul className="space-y-2 text-sm text-neutral-400">
                                <li>Phone: 1800-103-8586</li>
                                <li>Email: info@iihm.ac.in</li>
                                <li>WhatsApp: +91 9831050000</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold mb-4">Follow Us</h4>
                            <div className="flex space-x-4">
                                <a
                                    href="#"
                                    className="text-neutral-400 hover:text-white transition-colors"
                                >
                                    <svg
                                        className="w-6 h-6"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                                    </svg>
                                </a>
                                <a
                                    href="#"
                                    className="text-neutral-400 hover:text-white transition-colors"
                                >
                                    <svg
                                        className="w-6 h-6"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
                                    </svg>
                                </a>
                                <a
                                    href="#"
                                    className="text-neutral-400 hover:text-white transition-colors"
                                >
                                    <svg
                                        className="w-6 h-6"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M22.23 0H1.77C.8 0 0 .77 0 1.72v20.56C0 23.23.8 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.2 0 22.23 0zM7.27 20.1H3.65V9.24h3.62V20.1zM5.47 7.76h-.03c-1.22 0-2-.83-2-1.87 0-1.06.8-1.87 2.05-1.87 1.24 0 2 .8 2.02 1.87 0 1.04-.78 1.87-2.05 1.87zM20.34 20.1h-3.63v-5.8c0-1.45-.52-2.45-1.83-2.45-1 0-1.6.67-1.87 1.32-.1.23-.11.55-.11.88v6.05H9.28s.05-9.82 0-10.84h3.63v1.54a3.6 3.6 0 0 1 3.26-1.8c2.37 0 4.15 1.55 4.15 4.89v6.21z" />
                                    </svg>
                                </a>
                                <a
                                    href="#"
                                    className="text-neutral-400 hover:text-white transition-colors"
                                >
                                    <svg
                                        className="w-6 h-6"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.751-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.001z.017-.001z" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="border-t border-neutral-800 mt-8 pt-8 text-center text-sm text-neutral-400">
                        <p>
                            &copy; 2025 IIHM. All rights reserved. | Designed
                            for hospitality excellence.
                        </p>
                        <p className="mt-2">
                            <a
                                href="https://www.iihm.ac.in"
                                className="hover:text-white transition-colors"
                            >
                                www.iihm.ac.in
                            </a>
                        </p>
                    </div>
                </div>
            </footer>

            {/* Admission Open Banner */}
            <div className="fixed bottom-4 right-4 z-50">
                <a
                    href="https://echat.elink.in/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-green-500 to-blue-600 text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center space-x-2 animate-bounce"
                >
                    <span className="font-bold">
                        🎓 Admission Open For 2025-26
                    </span>
                    <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                    </svg>
                </a>
            </div>

            <Toaster />
        </div>
    );
}
