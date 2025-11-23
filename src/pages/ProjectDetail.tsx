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


import BedRoom1_1 from "@/assets/BedRoom1_1.jpg";
import BedRoom1_2 from "@/assets/BedRoom1_2.jpg";
import BedRoom1_3 from "@/assets/BedRoom1_3.jpg";

import BedRoom2_1 from "@/assets/BedRoom2_1.jpg";
import BedRoom2_2 from "@/assets/BedRoom2_2.jpg";
import BedRoom2_3 from "@/assets/BedRoom2_3.jpg";

import Kitchen1_1 from "@/assets/Kitchen1_1.jpg";
import Kitchen1_2 from "@/assets/Kitchen1_2.jpg";
import Kitchen1_3 from "@/assets/Kitchen1_3.jpg";

import LivingRoom1_1 from "@/assets/LivingRoom1_1.jpg";
import LivingRoom1_2 from "@/assets/LivingRoom1_2.jpg";

import EntryWay1_1 from "@/assets/EntryWay1_1.jpg";
import EntryWay1_2 from "@/assets/EntryWay1_2.jpg";

import BedRoom3_1 from "@/assets/BedRoom3_1.jpg";
import BedRoom3_2 from "@/assets/BedRoom3_2.jpg";
import BedRoom3_3 from "@/assets/BedRoom3_3.jpg";

import Bathroom1_1 from "@/assets/Bathroom1_1.jpg";
import Bathroom1_2 from "@/assets/Bathroom1_2.jpg";

import Laundry from "@/assets/Laundry.jpg";

const projectsData = [
  {
    id: "1",
    title: "Harmony Haven Bedroom",
    category: "Residential",
    mainImage: BedRoom1_1,
    additionalImages: [BedRoom1_1,BedRoom1_2, BedRoom1_3],
    videos: [],
    description: "This design celebrates harmony through natural textures, soft neutrals, and elegant geometric accents. A panoramic window opens the room to nature, enhancing its calm and airy feel. The tailored furniture and gentle lighting add a layer of luxury that transforms everyday rest into a soothing escape.",
    details: {
      area: "350 sq ft",
      year: "2024",
      location: "Sfax, Tunisia",
    },
  },
  {
    id: "2",
    title: "Natural Calm Bedroom",
    category: "Residential",
    mainImage: BedRoom2_1,
    additionalImages: [BedRoom2_1,BedRoom2_2, BedRoom2_3],
    videos: [],
    description: "A soothing blend of soft neutrals, warm wood textures, and minimalist lines. This bedroom was designed to embrace natural daylight, creating a calm and refreshing atmosphere. The vertical wooden slats add warmth and rhythm, while simple pendant lighting enhances the modern serenity of the space.",
    details: {
      area: "280 sq ft",
      year: "2024",
      location: "Sfax, Tunisia",
    },
  },
  {
    id: "3",
    title: "Organic Modern Kitchen",
    category: "Residential",
    mainImage: Kitchen1_1,
    additionalImages: [Kitchen1_1, Kitchen1_2, Kitchen1_3],
    videos: [],
    description: "A harmonious fusion of organic wood textures and modern finishes. The curved kitchen peninsula and vertical wood slats add movement and character, while the built-in wine storage and sleek lighting bring a touch of contemporary luxury. Perfect for clients who appreciate functional beauty and natural comfort.",
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
    mainImage: LivingRoom1_1,
    additionalImages: [LivingRoom1_1, LivingRoom1_2],
    videos: [],
    description: "A bright, minimalist open-plan living room blending Scandinavian clean lines with soft Japanese serenity: white tones, warm wood, bold line-art, neon accents, and lush greenery for a calm, elegant everyday escape.",
    details: {
      area: "520 sq ft",
      year: "2024",
      location: "Sfax, Tunisia",
    },
  },
  {
    id: "5",
    title: "Entryway Elegance",
    category: "Residential",
    mainImage: EntryWay1_1,
    additionalImages: [EntryWay1_1, EntryWay1_2],
    videos: [],
    description: "A warm minimalist entryway that welcomes with quiet elegance: light oak beams and accents frame a serene palette of white and natural textures. An arched mirror, sculptural pendant lights, and lush greenery create a peaceful transition from the outside world into a calm, contemporary home.",
    details: {
      area: "320 sq ft",
      year: "2024",
      location: "Sfax, Tunisia",
    },
  },
  {
    id: "6",
    title: "Embrace Room",
    category: "Residential",
    mainImage: BedRoom3_1,
    additionalImages: [BedRoom3_1, BedRoom3_2, BedRoom3_3],
    videos: [],
    description: "A soft, intimate bedroom wrapped in warm beige tones and natural oak. Minimalist line-art duo above a floating headboard, gentle pampas accents, and the quiet promise of “Together Forever” create a serene, romantic retreat perfect for slow mornings and peaceful nights.",
    details: {
      area: "300 sq ft",
      year: "2024",
      location: "Sfax, Tunisia",
    },
  },
  {
    id: "7",
    title: "Bathroom",
    category: "Residential",
    mainImage: Bathroom1_1,
    additionalImages: [Bathroom1_1, Bathroom1_2],
    videos: [],
    description: "A luxurious bathroom retreat featuring natural stone, ambient lighting, and spa-quality fixtures. Every detail is crafted to create a personal sanctuary for relaxation and self-care.",
    details: {
      area: "180 sq ft",
      year: "2024",
      location: "Sfax, Tunisia",
    },
  },
  {
    id: "8",
    title: "Laundry Retreat",
    category: "Residential",
    mainImage: Laundry,
    additionalImages: [Laundry],
    videos: [],
    description: "A serene, hotel-inspired laundry nook seamlessly integrated into the bedroom suite. Warm oak cabinetry with soft LED glow, matte black fixtures, and clever hidden storage turn a functional space into a calm, elegant ritual corner.",
    details: {
      area: "220 sq ft",
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
          <Carousel 
            className="w-full"
            opts={{
              align: "start",
              loop: true,
            }}
          >
            <CarouselContent className="-ml-4">
              {project.additionalImages.map((image, index) => (
                <CarouselItem key={index} className="mb-12 animate-slide-up">
                  <div
                    className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer bg-background"
                    onClick={() => setSelectedImage(image)}
                  >
                    <img
                      src={image}
                      alt={`${project.title} - View ${index + 1}`}
                      className="w-full h-[500px] md:h-[600px] object-cover rounded-lg shadow-elegant"
                      loading="lazy"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-0" />
            <CarouselNext className="right-0" />
          </Carousel>
        </div>

        {/* Project Videos */}
        {project.videos && project.videos.length > 0 && (
          <div className="mt-12 animate-slide-up" style={{ animationDelay: "0.3s" }}>
            <h2 className="font-serif text-3xl font-bold mb-6 text-foreground">
              Project Videos
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.videos.map((videoUrl, index) => (
                <div
                  key={index}
                  className="relative overflow-hidden rounded-lg shadow-lg bg-secondary/20"
                >
                  <video
                    controls
                    className="w-full h-auto rounded-lg"
                    poster={project.mainImage}
                  >
                    <source src={videoUrl} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              ))}
            </div>
          </div>
        )}

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
