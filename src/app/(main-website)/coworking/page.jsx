import Footer from '@/components/main/common/Footer';
import NavBar from '@/components/main/common/NavBar';
import CoworkingDiscover from '@/components/main/coworking/CoworkingDiscover';
import CoworkingFeatures from '@/components/main/coworking/CoworkingFeatures';
import CoworkingHeroSection from '@/components/main/coworking/CoworkingHeroSection';
import Coworkingservices from '@/components/main/coworking/Coworkingservices';
import CoworkingTestimonials from '@/components/main/coworking/CoworkingTestimonials';

export default function CoworkingPage() {
    return (
        <div className="overflow-x-hidden">
            {/* Navbar */}
            <header className="sticky top-0 z-50 shadow-md">
                <NavBar />
            </header>

            {/* Hero Section */}
            <div className="overflow-hidden">
                <CoworkingHeroSection />
            </div>

            <div className="overflow-hidden">
                <CoworkingFeatures />
            </div>

            <div className="overflow-hidden">
                <Coworkingservices />
            </div>

            <div className="overflow-hidden">
                <CoworkingTestimonials />
            </div>

            <div className="overflow-hidden">
                <CoworkingDiscover />
            </div>


            <Footer />
        </div>
    );
}