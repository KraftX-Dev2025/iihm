export default function PlacementsSection() {
    return (
        <section id="placements" className="bg-neutral-100 py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
                        Open New Doors Around The World With IIHM
                    </h2>
                    <p className="text-xl text-neutral-600">
                        Take a look at some of our esteemed tie-ups and
                        lucrative placement partners.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* International Tie-ups */}
                    <div>
                        <h3 className="text-3xl font-bold text-neutral-900 text-center mb-8">
                            Our International Tie-Ups
                        </h3>
                        <div className="bg-white p-8 rounded-xl shadow-lg">
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 items-center">
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
                                            className="h-20 mx-auto grayscale hover:grayscale-0 transition-all duration-300 hover:scale-110"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Global Placements */}
                    <div>
                        <h3 className="text-3xl font-bold text-neutral-900 text-center mb-8">
                            Our Global Placements
                        </h3>
                        <div className="bg-gradient-to-br from-red-50 to-blue-50 p-8 rounded-xl shadow-lg">
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 items-center">
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
                                            className="h-16 mx-auto grayscale hover:grayscale-0 transition-all duration-300 hover:scale-110"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
