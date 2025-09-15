import Footer from '@/components/main/common/Footer';
import NavBar from '@/components/main/common/NavBar';
import Discover from '@/components/main/home/DiscoverSection';
import FeaturedProjects from '@/components/main/home/FeaturedProjects';
import SkyLimitSection from '@/components/main/home/ProjectButtonSction';
import ProjectsSection from '@/components/main/home/Projects';
import RealEstateFeatures from '@/components/main/home/RealEstateFeatures';
import Testimonials from '@/components/main/home/Testimonials';
import VirtualOfficeDiscover from '@/components/main/virtual-office/VirtualOfficeDiscover';
import VirtualOfficeHeroSection from '@/components/main/virtual-office/VirtualOfficeHeroSection';
import VirtualOfficeServices from '@/components/main/virtual-office/VirtualOfficeServices';

export default function VirtualOfficePage() {
    return (
        <div className="overflow-x-hidden">
            {/* Navbar */}
            <header className="sticky top-0 z-50 shadow-md">
                <NavBar />
            </header>

            {/* Hero Section */}
            <div className="overflow-hidden">
                <VirtualOfficeHeroSection />
            </div>

            {/* <div className="overflow-hidden">
                <SkyLimitSection />
            </div> */}

            <div className="overflow-hidden">
                <FeaturedProjects />
            </div>

            <div className="overflow-hidden">
                <VirtualOfficeServices />
            </div>

            <div className="overflow-hidden">
                <RealEstateFeatures />
            </div>

            <div className="overflow-hidden">
                <VirtualOfficeDiscover />
            </div>

            {/* <div className="overflow-hidden">
                <Testimonials />
            </div> */}

            <Footer />
        </div>
    );
}