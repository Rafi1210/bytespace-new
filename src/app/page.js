import Navbar from "@/components/layout/Navbar";
import HeroSection from "@/components/home/HeroSection";
import PartnersSection from "@/components/home/PartnersSection";
import CoursesIntroSection from "@/components/home/CoursesIntroSection";
import CoursesSection from "@/components/home/CoursesSection";
import CategoriesSection from "@/components/home/CategoriesSection";
import GrowthSection from "@/components/home/GrowthSection";
import CreatorCTASection from "@/components/home/CreatorCTASection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <HeroSection />
        <PartnersSection />
        <CoursesIntroSection />
        <CoursesSection />
        <CategoriesSection />
        <GrowthSection />
        <CreatorCTASection />
        <TestimonialsSection />
      </main>
      <Footer />
    </>
  );
}
