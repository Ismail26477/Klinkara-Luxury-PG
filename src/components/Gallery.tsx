import { useState } from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { FadeIn, StaggerContainer, StaggerItem } from '@/lib/animations';

const images = [
  {
    src: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80',
    alt: 'Premium Room',
    category: 'Rooms',
  },
  {
    src: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80',
    alt: 'Building Exterior',
    category: 'Exterior',
  },
  {
    src: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80',
    alt: 'Modern Kitchen',
    category: 'Common Areas',
  },
  {
    src: 'https://images.unsplash.com/photo-1540518614846-7eded433c457?w=800&q=80',
    alt: 'Bedroom Interior',
    category: 'Rooms',
  },
  {
    src: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80',
    alt: 'Fitness Center',
    category: 'Amenities',
  },
  {
    src: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80',
    alt: 'Dining Area',
    category: 'Common Areas',
  },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % images.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + images.length) % images.length);
    }
  };

  return (
    <section id="gallery" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <FadeIn className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-primary text-sm font-medium tracking-[0.2em] uppercase mb-4">
            Virtual Tour
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
            Explore Our Spaces
          </h2>
          <p className="text-muted-foreground text-lg">
            Take a visual journey through our premium accommodations and facilities.
          </p>
        </FadeIn>

        {/* Video Section */}
        <FadeIn delay={0.2} className="mb-12">
          <div className="relative aspect-video rounded-2xl overflow-hidden shadow-elevated">
            <video
              autoPlay
              loop
              muted
              playsInline
              controls
              className="w-full h-full object-cover"
              poster="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=80"
            >
              <source 
                src="https://assets.mixkit.co/videos/preview/mixkit-modern-apartment-interior-4681-large.mp4" 
                type="video/mp4" 
              />
            </video>
          </div>
          <p className="text-center text-muted-foreground mt-4">
            Take a virtual tour of Klinkara Luxury PG
          </p>
        </FadeIn>

        {/* Image Grid */}
        <StaggerContainer className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <StaggerItem key={index}>
              <div
                className="group relative aspect-square rounded-xl overflow-hidden cursor-pointer"
                onClick={() => setSelectedImage(index)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <p className="text-gold text-xs font-medium uppercase tracking-wider">{image.category}</p>
                  <p className="text-cream font-serif text-lg">{image.alt}</p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>

      {/* Lightbox Dialog */}
      <Dialog open={selectedImage !== null} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-5xl p-0 bg-secondary border-0 overflow-hidden">
          {selectedImage !== null && (
            <div className="relative">
              <img
                src={images[selectedImage].src}
                alt={images[selectedImage].alt}
                className="w-full h-auto max-h-[80vh] object-contain"
              />
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-background/80 rounded-full hover:bg-background transition-colors"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-background/80 rounded-full hover:bg-background transition-colors"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
              <div className="absolute bottom-4 left-4 right-4 text-center">
                <p className="text-gold text-sm uppercase tracking-wider">{images[selectedImage].category}</p>
                <p className="text-cream font-serif text-xl">{images[selectedImage].alt}</p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Gallery;
