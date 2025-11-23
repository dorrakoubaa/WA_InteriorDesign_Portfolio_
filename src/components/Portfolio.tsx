import { useNavigate } from "react-router-dom";
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
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const projects = [
  {
    id: "1",
    image: portfolio1,
    title: "Modern Bedroom Retreat",
    category: "Residential",
  },
  {
    id: "2",
    image: portfolio2,
    title: "Contemporary Kitchen",
    category: "Residential",
  },
  {
    id: "3",
    image: portfolio3,
    title: "Minimalist Living Space",
    category: "Residential",
  },
  {
    id: "4",
    image: portfolio4,
    title: "Luxury Living Room",
    category: "Residential",
  },
  {
    id: "5",
    image: portfolio5,
    title: "Serene Bedroom",
    category: "Residential",
  },
  {
    id: "6",
    image: portfolio6,
    title: "Modern Kitchen Design",
    category: "Residential",
  },
  {
    id: "7",
    image: portfolio7,
    title: "Elegant Dining Room",
    category: "Residential",
  },
  {
    id: "8",
    image: portfolio8,
    title: "Home Office Sanctuary",
    category: "Residential",
  },
  {
    id: "9",
    image: portfolio9,
    title: "Spa-Like Bathroom",
    category: "Residential",
  },
  {
    id: "10",
    image: portfolio10,
    title: "Grand Entryway",
    category: "Residential",
  },
  {
    id: "11",
    image: portfolio11,
    title: "Classic Lounge",
    category: "Residential",
  },
  {
    id: "12",
    image: portfolio12,
    title: "Luxury Walk-In Closet",
    category: "Residential",
  },
  {
    id: "13",
    image: portfolio13,
    title: "Outdoor Living Space",
    category: "Residential",
  },
];

const Portfolio = () => {
  const navigate = useNavigate();

  return (
    <section id="portfolio" className="py-20 md:py-32 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-center mb-8 text-foreground">
          Portfolio
        </h2>
        <div className="h-1 w-24 bg-accent mx-auto mb-16" />
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {projects.map((project, index) => (
              <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <div
                  className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
                  onClick={() => navigate(`/project/${project.id}`)}
                >
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <h3 className="font-serif text-2xl font-semibold text-white mb-2">
                      {project.title}
                    </h3>
                    <p className="text-white/90 text-sm">{project.category}</p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex -left-12" />
          <CarouselNext className="hidden md:flex -right-12" />
        </Carousel>
      </div>
    </section>
  );
};

export default Portfolio;
