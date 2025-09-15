import Footer from '@/components/main/common/Footer';
import NavBar from '@/components/main/common/NavBar';
import Discover from '@/components/main/home/DiscoverSection';
import FeaturedProjects from '@/components/main/home/FeaturedProjects';
import HeroSection from '@/components/main/home/HeroSection';
import SkyLimitSection from '@/components/main/home/ProjectButtonSction';
import ProjectsSection from '@/components/main/home/Projects';
import RealEstateFeatures from '@/components/main/home/RealEstateFeatures';
import Testimonials from '@/components/main/home/Testimonials';

export default function Page() {
  return (
    <div className="overflow-x-hidden">
      {/* Navbar */}
      <header className="sticky top-0 z-50 shadow-md">
        <NavBar />
      </header>

      {/* Hero Section */}
      <div className="overflow-hidden">
        <HeroSection />
      </div>

      <div className="overflow-hidden">
        <SkyLimitSection />
      </div>

      <div className="overflow-hidden">
        <FeaturedProjects />
      </div>

      <div className="overflow-hidden">
        <ProjectsSection />
      </div>

      <div className="overflow-hidden">
        <RealEstateFeatures />
      </div>

      <div className="overflow-hidden">
        <Discover />
      </div>

      <div className="overflow-hidden">
        <Testimonials />
      </div>

      <Footer />
    </div>
  );
}