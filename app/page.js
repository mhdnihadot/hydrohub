import Hero from "@/components/Hero";
import PartnerTicker from "@/components/PartnerTicker";
import ProductStory from "@/components/ProductStory";
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
      <ProductStory />
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
