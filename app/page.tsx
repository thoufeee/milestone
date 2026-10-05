import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Works from "@/components/Works";
import PlanBuilder from "@/components/PlanBuilder";
import Process from "@/components/Process";
import Customers from "@/components/Customers";
import Faq from "@/components/Faq";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <>
      <Header />
      <main id="top" className="mx-auto max-w-[1040px] px-5">
        <Hero />
        <Services />
        <Works />
        <PlanBuilder />
        <Process />
        <Customers />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
