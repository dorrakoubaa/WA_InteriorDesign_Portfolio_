import heroImage from "@/assets/hero-interior.jpg";
import { Button } from "@/components/ui/button";
import { Mail, Phone } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${heroImage})`,
        }}
      />
      <div className="relative z-10 container mx-auto px-4 text-center text-white animate-fade-in">
        <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6 tracking-tight">
          Wafa Ammous
        </h1>
        <p className="text-xl md:text-2xl mb-8 font-light">Interior Designer</p>
        <p className="text-lg md:text-xl mb-12 max-w-2xl mx-auto font-light opacity-90">
          Transforming spaces into timeless expressions of elegance and functionality
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="bg-accent hover:bg-accent/90 text-accent-foreground font-medium"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <Mail className="mr-2 h-5 w-5" />
            Get in Touch
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-white text-black hover:bg-white hover:text-primary font-medium"
            onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
          >
            View Portfolio
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
