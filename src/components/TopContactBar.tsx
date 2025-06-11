export default function TopContactBar() {
    return (
        <div className="pt-16 bg-gradient-to-r from-blue-900 to-red-800 text-white py-3">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col sm:flex-row justify-between items-center text-sm">
                    <div className="flex items-center space-x-6 mb-2 sm:mb-0">
                        <span className="font-bold text-lg">
                            #IIHMBest3Years #HospitalityRocks
                        </span>
                        <span>Talk to an IIHM expert</span>
                    </div>
                    <div className="flex items-center space-x-4">
                        <a
                            href="tel:+918600147345"
                            className="flex items-center space-x-2 hover:text-amber-300 transition-colors"
                        >
                            <img
                                src="https://iihm.ac.in/hotel_management/images/call.png"
                                alt="Phone"
                                className="w-4 h-4"
                            />
                            <span>+91 8600147345</span>
                        </a>
                        <a
                            href="tel:02067296200"
                            className="flex items-center space-x-2 hover:text-amber-300 transition-colors"
                        >
                            <img
                                src="https://iihm.ac.in/hotel_management/images/whatsapp.png"
                                alt="WhatsApp"
                                className="w-4 h-4"
                            />
                            <span>020 6729 6200</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
