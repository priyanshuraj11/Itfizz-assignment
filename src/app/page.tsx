import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Impact from "@/components/Impact";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Technology from "@/components/Technology";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Impact />
      <Features />
      <HowItWorks />
      <Technology />
      <Footer />
    </main>
  );
}
