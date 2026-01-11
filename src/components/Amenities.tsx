import { 
  Utensils, 
  Wifi, 
  ShieldCheck, 
  Car, 
  Dumbbell, 
  Tv, 
  Shirt, 
  Sparkles,
  UtensilsCrossed,
  BedDouble,
  Droplets,
  Zap
} from 'lucide-react';
import { FadeIn, StaggerContainer, StaggerItem, ScaleIn } from '@/lib/animations';

const amenities = [
  { icon: Utensils, name: 'Hygienic Meals', description: 'Nutritious veg & non-veg options' },
  { icon: Wifi, name: 'High-Speed WiFi', description: '100 Mbps fiber connection' },
  { icon: ShieldCheck, name: '24/7 Security', description: 'CCTV & security personnel' },
  { icon: Car, name: 'Parking Space', description: 'Covered parking available' },
  { icon: Dumbbell, name: 'Fitness Center', description: 'Modern gym equipment' },
  { icon: Tv, name: 'Common Area', description: 'TV lounge & recreation room' },
  { icon: Shirt, name: 'Laundry Service', description: 'Weekly laundry included' },
  { icon: Sparkles, name: 'Daily Housekeeping', description: 'Clean rooms every day' },
  { icon: UtensilsCrossed, name: 'Modern Kitchen', description: 'Self-cooking facilities' },
  { icon: BedDouble, name: 'Premium Bedding', description: 'Quality mattress & linens' },
  { icon: Droplets, name: 'RO Purifier', description: 'Clean drinking water' },
  { icon: Zap, name: 'Power Backup', description: '24/7 electricity supply' },
];

const Amenities = () => {
  return (
    <section id="amenities" className="py-24 bg-cream-dark">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <FadeIn className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-primary text-sm font-medium tracking-[0.2em] uppercase mb-4">
            World-Class Facilities
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
            Amenities That Define Luxury
          </h2>
          <p className="text-muted-foreground text-lg">
            Every detail is crafted to provide you with a comfortable and 
            hassle-free living experience.
          </p>
        </FadeIn>

        {/* Amenities Grid */}
        <StaggerContainer className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {amenities.map((amenity, index) => (
            <StaggerItem key={index}>
              <div className="group bg-card p-6 rounded-xl shadow-soft hover:shadow-gold transition-all duration-300 hover:-translate-y-1">
                <div className="w-14 h-14 bg-gradient-gold rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <amenity.icon className="w-7 h-7 text-secondary" />
                </div>
                <h3 className="font-serif text-lg font-semibold text-foreground mb-1">
                  {amenity.name}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {amenity.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Feature Banner */}
        <ScaleIn delay={0.2} className="mt-16">
          <div className="bg-gradient-navy rounded-2xl overflow-hidden">
            <div className="grid md:grid-cols-2 gap-8 p-8 md:p-12 items-center">
              <FadeIn direction="left">
                <h3 className="font-serif text-3xl md:text-4xl font-bold text-cream mb-4">
                  Ready to Experience Luxury Living?
                </h3>
                <p className="text-cream/80 text-lg mb-6">
                  Schedule a site visit today and see for yourself why Klinkara 
                  is the preferred choice for premium PG accommodation.
                </p>
                <button 
                  className="bg-gradient-gold text-secondary font-semibold px-8 py-4 rounded-lg hover:opacity-90 transition-opacity shadow-gold"
                  onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Schedule Your Visit
                </button>
              </FadeIn>
              <FadeIn direction="right" delay={0.2} className="relative hidden md:block">
                <img
                  src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=600&q=80"
                  alt="Luxury Living Space"
                  className="rounded-xl shadow-2xl"
                />
                <div className="absolute -bottom-4 -left-4 bg-card p-4 rounded-lg shadow-elevated">
                  <p className="text-primary font-bold text-2xl">4.9★</p>
                  <p className="text-muted-foreground text-sm">Google Reviews</p>
                </div>
              </FadeIn>
            </div>
          </div>
        </ScaleIn>
      </div>
    </section>
  );
};

export default Amenities;
