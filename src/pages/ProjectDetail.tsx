import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useState } from "react";
import Contact from "@/components/Contact";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";
import portfolio4 from "@/assets/portfolio-4.jpg";
import portfolio5 from "@/assets/portfolio-5.jpg";
import portfolio6 from "@/assets/portfolio-6.jpg";
import portfolio7 from "@/assets/portfolio-7.jpg";
import portfolio8 from "@/assets/portfolio-8.jpg";
import portfolio9 from "@/assets/portfolio-9.jpg";
import portfolio10 from "@/assets/portfolio-10.jpg";
import portfolio11 from "@/assets/portfolio-11.jpg";
import portfolio12 from "@/assets/portfolio-12.jpg";
import portfolio13 from "@/assets/portfolio-13.jpg";

const projectsData = [
  {
    id: "1",
    title: "Modern Bedroom Retreat",
    category: "Residential",
    mainImage: portfolio1,
    additionalImages: [portfolio2, portfolio3, portfolio4, portfolio5, portfolio6, portfolio7],
    description: "A sophisticated bedroom design that combines modern aesthetics with ultimate comfort. This project features custom-built furniture, carefully selected textiles, and a harmonious color palette that creates a peaceful sanctuary for rest and relaxation.",
    details: {
      area: "350 sq ft",
      year: "2024",
      location: "Sfax, Tunisia",
    },
  },
  {
    id: "2",
    title: "Contemporary Kitchen",
    category: "Residential",
    mainImage: portfolio2,
    additionalImages: [portfolio6, portfolio1, portfolio3, portfolio8, portfolio9, portfolio10],
    description: "A cutting-edge kitchen design featuring state-of-the-art appliances and premium materials. The space maximizes functionality while maintaining an elegant aesthetic with custom cabinetry and thoughtful storage solutions.",
    details: {
      area: "280 sq ft",
      year: "2024",
      location: "Sfax, Tunisia",
    },
  },
  {
    id: "3",
    title: "Minimalist Living Space",
    category: "Residential",
    mainImage: portfolio3,
    additionalImages: [portfolio4, portfolio5, portfolio1],
    description: "An open-concept living area that embraces minimalist design principles. Clean lines, neutral tones, and carefully curated furnishings create a serene environment perfect for modern living.",
    details: {
      area: "450 sq ft",
      year: "2024",
      location: "Sfax, Tunisia",
    },
  },
  {
    id: "4",
    title: "Luxury Living Room",
    category: "Residential",
    mainImage: portfolio4,
    additionalImages: [portfolio11, portfolio3, portfolio7],
    description: "A grand living room design featuring sophisticated furniture, elegant lighting fixtures, and rich textures. The space balances luxury with comfort, creating an inviting atmosphere for entertaining and relaxation.",
    details: {
      area: "520 sq ft",
      year: "2024",
      location: "Sfax, Tunisia",
    },
  },
  {
    id: "5",
    title: "Serene Bedroom",
    category: "Residential",
    mainImage: portfolio5,
    additionalImages: [portfolio1, portfolio8, portfolio10],
    description: "A tranquil bedroom retreat inspired by natural materials and soft color palettes. Every element is chosen to promote rest and peace, from the organic textiles to the carefully positioned lighting.",
    details: {
      area: "320 sq ft",
      year: "2024",
      location: "Sfax, Tunisia",
    },
  },
  {
    id: "6",
    title: "Modern Kitchen Design",
    category: "Residential",
    mainImage: portfolio6,
    additionalImages: [portfolio2, portfolio7, portfolio9],
    description: "An innovative kitchen featuring sage green cabinetry paired with marble countertops and brass fixtures. The design seamlessly blends style and functionality for the modern home chef.",
    details: {
      area: "300 sq ft",
      year: "2024",
      location: "Sfax, Tunisia",
    },
  },
  {
    id: "7",
    title: "Elegant Dining Room",
    category: "Residential",
    mainImage: portfolio7,
    additionalImages: [portfolio11, portfolio4, portfolio6],
    description: "A formal dining space featuring a stunning crystal chandelier, luxurious seating, and refined wall treatments. Perfect for hosting memorable dinner parties in an atmosphere of timeless elegance.",
    details: {
      area: "380 sq ft",
      year: "2024",
      location: "Sfax, Tunisia",
    },
  },
  {
    id: "8",
    title: "Home Office Sanctuary",
    category: "Residential",
    mainImage: portfolio8,
    additionalImages: [portfolio5, portfolio10, portfolio3],
    description: "A productive workspace designed with built-in bookshelves, natural light, and comfortable furnishings. The sage green tones and plant life create an inspiring environment for focused work.",
    details: {
      area: "220 sq ft",
      year: "2024",
      location: "Sfax, Tunisia",
    },
  },
  {
    id: "9",
    title: "Spa-Like Bathroom",
    category: "Residential",
    mainImage: portfolio9,
    additionalImages: [portfolio5, portfolio1, portfolio8],
    description: "A luxurious bathroom retreat featuring natural stone, ambient lighting, and spa-quality fixtures. Every detail is crafted to create a personal sanctuary for relaxation and self-care.",
    details: {
      area: "180 sq ft",
      year: "2024",
      location: "Sfax, Tunisia",
    },
  },
  {
    id: "10",
    title: "Grand Entryway",
    category: "Residential",
    mainImage: portfolio10,
    additionalImages: [portfolio8, portfolio11, portfolio4],
    description: "A welcoming entrance featuring a statement mirror, elegant console table, and artistic lighting. This space sets the tone for the entire home with its sophisticated design elements.",
    details: {
      area: "150 sq ft",
      year: "2024",
      location: "Sfax, Tunisia",
    },
  },
  {
    id: "11",
    title: "Classic Lounge",
    category: "Residential",
    mainImage: portfolio11,
    additionalImages: [portfolio4, portfolio7, portfolio13],
    description: "An elegant lounge space with classical architectural details, refined furniture, and a sophisticated color palette. Perfect for intimate gatherings and quiet contemplation.",
    details: {
      area: "480 sq ft",
      year: "2024",
      location: "Sfax, Tunisia",
    },
  },
  {
    id: "12",
    title: "Luxury Walk-In Closet",
    category: "Residential",
    mainImage: portfolio12,
    additionalImages: [portfolio1, portfolio5, portfolio9],
    description: "An organized luxury storage space featuring custom cabinetry in sage green tones, elegant lighting, and premium finishes. Every detail is designed for both beauty and functionality.",
    details: {
      area: "200 sq ft",
      year: "2024",
      location: "Sfax, Tunisia",
    },
  },
  {
    id: "13",
    title: "Outdoor Living Space",
    category: "Residential",
    mainImage: portfolio13,
    additionalImages: [portfolio3, portfolio4, portfolio11],
    description: "A comfortable outdoor patio designed for year-round enjoyment. Features weather-resistant furniture, ambient lighting, and lush greenery that extends the living space into nature.",
    details: {
      area: "400 sq ft",
      year: "2024",
      location: "Sfax, Tunisia",
    },
  },
];

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
  const project = projectsData.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-4xl mb-4">Project Not Found</h1>
          <Button onClick={() => navigate("/")}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
        <div className="container mx-auto px-4 py-6">
          <Button
            variant="ghost"
            onClick={() => {
              navigate("/");
              setTimeout(() => {
                document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" });
              }, 100);
            }}
            className="gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Portfolio
          </Button>
        </div>
      </header>

      {/* Content */}
      <main className="container mx-auto px-4 py-12 max-w-6xl">
        {/* Project Header */}
        <div className="mb-12 animate-fade-in">
          <h1 className="font-serif text-4xl md:text-6xl font-bold mb-4 text-foreground">
            {project.title}
          </h1>
          <div className="flex flex-wrap gap-4 text-muted-foreground">
            <span className="px-4 py-1 bg-accent/10 text-accent rounded-full text-sm">
              {project.category}
            </span>
            <span>{project.details.area}</span>
            <span>•</span>
            <span>{project.details.year}</span>
            <span>•</span>
            <span>{project.details.location}</span>
          </div>
        </div>

        {/* Main Image */}
        <div className="mb-12 animate-slide-up">
          <img
            src={project.mainImage}
            alt={project.title}
            className="w-full h-[500px] md:h-[600px] object-cover rounded-lg shadow-elegant"
          />
        </div>

        {/* Description */}
        <div className="mb-12 animate-slide-up" style={{ animationDelay: "0.1s" }}>
          <h2 className="font-serif text-3xl font-bold mb-6 text-foreground">
            About This Project
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Additional Images */}
        <div className="animate-slide-up" style={{ animationDelay: "0.2s" }}>
          <h2 className="font-serif text-3xl font-bold mb-6 text-foreground">
            Project Gallery
          </h2>
          <Carousel className="w-full">
            <CarouselContent className="-ml-4">
              {project.additionalImages.map((image, index) => (
                <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <div
                    className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer"
                    onClick={() => setSelectedImage(image)}
                  >
                    <img
                      src={image}
                      alt={`${project.title} - View ${index + 1}`}
                      className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                      <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm font-medium">
                        Click to enlarge
                      </span>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-0" />
            <CarouselNext className="right-0" />
          </Carousel>
        </div>

        {/* Image Lightbox Dialog */}
        <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
          <DialogContent className="max-w-5xl w-full p-0 overflow-hidden bg-accent border-none">
            {selectedImage && (
              <img
                src={selectedImage}
                alt={project.title}
                className="w-full max-h-[85vh] object-contain"
              />
            )}
          </DialogContent>
        </Dialog>

        {/* Contact Section */}
        <div className="mt-16 -mx-4">
          <Contact />
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-8 text-center mt-20">
        <p className="text-sm">© 2024 Wafa Ammous Interior Design. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default ProjectDetail;
