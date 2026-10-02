import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { FeaturedProjects } from "@/components/FeaturedProjects";
import { Services } from "@/components/Services";
import { Testimonials } from "@/components/Testimonials";
import { AllProjects } from "@/components/AllProjects";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex-1 flex flex-col">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <FeaturedProjects />
      <AllProjects />
      <Services />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
