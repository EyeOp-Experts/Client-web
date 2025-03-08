import HappyCustomers from "@/components/HappyCustomers";
import Hero from "@/components/Hero";
import MobileHero from "@/components/MobileHero";
import SurgerySection from "@/components/SurgerySection";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";

import FormButton from "@/components/FormButton";
import WhatsAppButton from "@/components/CallButton";
export default function Home() {
  return (
    <main className="p-0 m-0">
  <Hero />
  <MobileHero />
  <SurgerySection />

  <HappyCustomers/>
  <Faq/>
  <Footer/>
  <WhatsAppButton/>
  <FormButton/>
</main>

  );
}
