import Footer from '@/components/main/common/Footer';
import NavBar from '@/components/main/common/NavBar';
import CorporateDiscover from '@/components/main/corporate-services/CorporateDiscover';
import CorporateGuestHouse from '@/components/main/corporate-services/CorporateGuestHouse';
import CorporateHeroSection from '@/components/main/corporate-services/CorporateHeroSection';
import CorporateServicesFeatures from '@/components/main/corporate-services/CorporateServicesFeatures';
import CorporateTestimonials from '@/components/main/corporate-services/CorporateTestimonials';

export default function CorporateServicesPage() {
    return (
        <div className="overflow-x-hidden">
            {/* Navbar */}
            <header className="sticky top-0 z-50 shadow-md">
                <NavBar />
            </header>

            {/* Hero Section */}
            <div className="overflow-hidden">
                <CorporateHeroSection />
            </div>

            <div className="overflow-hidden">
                <CorporateServicesFeatures />
            </div>

            <div className="overflow-hidden">
                <CorporateGuestHouse />
            </div>

            <div className="overflow-hidden">
                <CorporateTestimonials />
            </div>

            <div className="overflow-hidden">
                <CorporateDiscover />
            </div>


            <Footer />
        </div>
    );
}