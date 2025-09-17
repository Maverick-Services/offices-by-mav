import Footer from '@/components/main/common/Footer';
import NavBar from '@/components/main/common/NavBar';
import ContactHeroSection from '@/components/main/contact/ContactHeroSection';
import ContactSection from '@/components/main/contact/ContactSection';
import FeaturedProperties from '@/components/main/home/FeaturedProjects';

export default function ContactPage() {
    return (
        <div className="overflow-x-hidden">
            {/* Navbar */}
            <header className="sticky top-0 z-50 shadow-md">
                <NavBar />
            </header>

            {/* Contct Form */}
            <div className="overflow-hidden">
                <ContactSection />
            </div>

            {/* Hero Section */}
            {/* <div className="overflow-hidden">
                <ContactHeroSection />
            </div> */}

            {/* Locations Section */}
            <div className="overflow-hidden">
                <FeaturedProperties />
            </div>

            <Footer />
        </div>
    );
}