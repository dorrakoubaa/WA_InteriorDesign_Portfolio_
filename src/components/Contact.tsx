import { Mail, Phone, MapPin, Instagram, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section id="contact" className="py-20 md:py-32 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-4xl">
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-center mb-8 text-foreground">
          Get in Touch
        </h2>
        <div className="h-1 w-24 bg-accent mx-auto mb-16" />
        <div className="space-y-8 animate-slide-up">
          <p className="text-center text-lg text-muted-foreground mb-12">
            Ready to transform your space? Let's discuss your vision and bring it to life.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <a
              href="mailto:ammouswafa2@gmail.com"
              className="flex flex-col items-center text-center group"
            >
              <div className="bg-accent/10 p-4 rounded-full mb-4 group-hover:bg-accent/20 transition-colors cursor-pointer">
                <Mail className="h-6 w-6 text-accent" />
              </div>
              <h3 className="font-semibold mb-2 text-foreground">Email</h3>
              <span className="text-muted-foreground group-hover:text-accent transition-colors">
                ammouswafa2@gmail.com
              </span>
            </a>
            <a
              href="https://wa.me/21653243559"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center text-center group"
            >
              <div className="bg-accent/10 p-4 rounded-full mb-4 group-hover:bg-accent/20 transition-colors cursor-pointer">
                <Phone className="h-6 w-6 text-accent" />
              </div>
              <h3 className="font-semibold mb-2 text-foreground">WhatsApp</h3>
              <span className="text-muted-foreground group-hover:text-accent transition-colors">
                +216 53 243 559
              </span>
            </a>
            <a
              href="https://maps.app.goo.gl/D59wKRv5yhFKrK1t7"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center text-center group"
            >
              <div className="bg-accent/10 p-4 rounded-full mb-4 group-hover:bg-accent/20 transition-colors cursor-pointer">
                <MapPin className="h-6 w-6 text-accent" />
              </div>
              <h3 className="font-semibold mb-2 text-foreground">Location</h3>
              <span className="text-muted-foreground group-hover:text-accent transition-colors">
                Route Sidi Abes Km3.5, Sfax
              </span>
            </a>
          </div>
          <div className="flex justify-center gap-6">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full border-accent text-accent hover:bg-accent hover:text-accent-foreground"
              asChild
            >
              <a href="https://www.instagram.com/w.a.interior.designer?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer">
                <Instagram className="h-5 w-5" />
              </a>
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full border-accent text-accent hover:bg-accent hover:text-accent-foreground"
              asChild
            >
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
