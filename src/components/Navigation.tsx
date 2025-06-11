import { useState } from "react";

interface NavigationProps {
    activeSection: string;
    isMenuOpen: boolean;
    setIsMenuOpen: (isOpen: boolean) => void;
    scrollToSection: (sectionId: string) => void;
}

export default function Navigation({
    activeSection,
    isMenuOpen,
    setIsMenuOpen,
    scrollToSection,
}: NavigationProps) {
    return (
        <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 shadow-lg border-b border-neutral-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex items-center">
                        <img
                            src="/IIHM_Logo.jpg"
                            alt="IIHM"
                            className="h-12 w-auto"
                        />
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            {[
                                "Home",
                                "About",
                                "Courses",
                                "Testimonials",
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
    );
}
