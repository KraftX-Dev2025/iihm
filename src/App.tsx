import { useState, useEffect } from "react";

// Import all components
import TopContactBar from "./components/TopContactBar";
import Navigation from "./components/Navigation";
import HeroSection from "./components/HeroSection";
import QuickStats from "./components/QuickStats";
import ErasmusProgram from "./components/ErasmusProgram";
import AboutSection from "./components/AboutSection";
import WhyChooseSection from "./components/WhyChooseSection";
import CoursesSection from "./components/CoursesSection";
import HospitalityGrowth from "./components/HospitalityGrowth";
import TestimonialsSection from "./components/TestimonialsSection";
import AwardsSection from "./components/AwardsSection";
import PlacementsSection from "./components/PlacementsSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import AdmissionBanner from "./components/AdmissionBanner";

export default function App() {
    const [activeSection, setActiveSection] = useState("home");
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Smooth scroll to section function
    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
        setIsMenuOpen(false); // Close mobile menu after navigation
    };

    // Track active section on scroll
    useEffect(() => {
        const sections = [
            "home",
            "about",
            "courses",
            "testimonials",
            "placements",
            "contact",
        ];

        const observerOptions = {
            root: null,
            rootMargin: "-20% 0px -80% 0px",
            threshold: 0,
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        }, observerOptions);

        sections.forEach((section) => {
            const element = document.getElementById(section);
            if (element) {
                observer.observe(element);
            }
        });

        return () => {
            sections.forEach((section) => {
                const element = document.getElementById(section);
                if (element) {
                    observer.unobserve(element);
                }
            });
        };
    }, []);

    return (
        <div className="min-h-screen bg-white">
            {/* Top Contact Bar */}
            <TopContactBar />

            {/* Navigation */}
            <Navigation
                activeSection={activeSection}
                isMenuOpen={isMenuOpen}
                setIsMenuOpen={setIsMenuOpen}
                scrollToSection={scrollToSection}
            />

            {/* Hero Section */}
            <HeroSection scrollToSection={scrollToSection} />

            {/* Quick Stats/Promotional Banner */}
            <QuickStats />

            {/* ERASMUS Program */}
            <ErasmusProgram />

            {/* About Section */}
            <AboutSection />

            {/* Why Choose IIHM Section */}
            <WhyChooseSection />

            {/* Courses Section */}
            <CoursesSection />

            {/* Hospitality Industry Growth */}
            <HospitalityGrowth />

            {/* Testimonials Section */}
            <TestimonialsSection />

            {/* Awards and Recognition */}
            <AwardsSection />

            {/* Placements Section */}
            <PlacementsSection />

            {/* Contact Section */}
            <ContactSection />

            {/* Footer */}
            <Footer scrollToSection={scrollToSection} />

            {/* Admission Banner (Fixed) */}
            <AdmissionBanner />
        </div>
    );
}
