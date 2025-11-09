import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Contact />
      <footer className="bg-primary text-primary-foreground py-8 text-center">
        <p className="text-sm">© 2024 Wafa Ammous Interior Design. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Index;
