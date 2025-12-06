import Header from "@/components/Header";
import Hero from "@/components/Hero";
import DeviceCarousel from "@/components/DeviceCarousel";
import ContentCarousel from "@/components/ContentCarousel";
import PricingCards from "@/components/PricingCards";
import Features from "@/components/Features";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <DeviceCarousel />
      <ContentCarousel />
      <Features />
      <PricingCards />
      <FAQ />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
