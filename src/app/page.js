import HappyCustomers from "@/components/HappyCustomers";
import Hero from "@/components/Hero";
import MobileHero from "@/components/MobileHero";
import SurgerySection from "@/components/SurgerySection";
export default function Home() {
  return (
    <main className="p-0 m-0">
  <Hero />
  <MobileHero />
  <SurgerySection />

  <HappyCustomers/>
</main>

  );
}
