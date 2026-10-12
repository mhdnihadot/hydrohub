import Hero from "@/components/Hero";
import PartnerTicker from "@/components/PartnerTicker";
import ProcessSection from "@/components/ProcessSection";
import OemSection from "@/components/OemSection";
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
      <ProcessSection />
      <OemSection />
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
