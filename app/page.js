import Hero from "@/components/Hero";
import PartnerTicker from "@/components/PartnerTicker";
import ProductCategories from "@/components/ProductCategories";
import FeatureBento from "@/components/FeatureBento";
import InteractiveCalculator from "@/components/InteractiveCalculator";
import Gallery from "@/components/Gallery";
import FaqAccordion from "@/components/FaqAccordion";
import TestimonialSlider from "@/components/TestimonialSlider";
import SpacesSection from "@/components/SpacesSection";
import EnquirySection from "@/components/EnquirySection";

export default function Home() {
  return (
    <main>
      <Hero />
      <PartnerTicker />
      <ProductCategories />
      <FeatureBento />
      <InteractiveCalculator />
      <Gallery />
      <FaqAccordion />
      <TestimonialSlider />
      <SpacesSection />
      <EnquirySection />
    </main>
  );
}
