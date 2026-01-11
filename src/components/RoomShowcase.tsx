import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Bed, Users, Check } from 'lucide-react';
import { FadeIn, StaggerContainer, StaggerItem } from '@/lib/animations';

const rooms = [
  {
    id: 1,
    name: 'Single Occupancy',
    price: '₹12,000',
    period: '/month',
    image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80',
    beds: 1,
    occupancy: 1,
    features: ['Private AC', 'Attached Bathroom', 'WiFi', 'Study Table', 'Wardrobe'],
    popular: false,
  },
  {
    id: 2,
    name: 'Double Sharing',
    price: '₹8,000',
    period: '/month',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=80',
    beds: 2,
    occupancy: 2,
    features: ['Shared AC', 'Attached Bathroom', 'WiFi', 'Study Table', 'Wardrobe'],
    popular: true,
  },
  {
    id: 3,
    name: 'Triple Sharing',
    price: '₹6,500',
    period: '/month',
    image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80',
    beds: 3,
    occupancy: 3,
    features: ['Shared AC', 'Attached Bathroom', 'WiFi', 'Study Table', 'Wardrobe'],
    popular: false,
  },
  {
    id: 4,
    name: 'Premium Suite',
    price: '₹18,000',
    period: '/month',
    image: 'https://images.unsplash.com/photo-1598928506311-c55ez3e2a9e9?w=800&q=80',
    beds: 1,
    occupancy: 1,
    features: ['Private AC', 'Ensuite Bathroom', 'Smart TV', 'Mini Fridge', 'Balcony'],
    popular: false,
  },
];

const RoomShowcase = () => {
  const [hoveredRoom, setHoveredRoom] = useState<number | null>(null);

  return (
    <section id="rooms" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <FadeIn className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-primary text-sm font-medium tracking-[0.2em] uppercase mb-4">
            Our Accommodations
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
            Choose Your Perfect Space
          </h2>
          <p className="text-muted-foreground text-lg">
            From private suites to comfortable shared spaces, find the accommodation 
            that fits your lifestyle and budget.
          </p>
        </FadeIn>

        {/* Room Grid */}
        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {rooms.map((room) => (
            <StaggerItem key={room.id}>
              <Card
                className={`group overflow-hidden border-0 shadow-lg transition-all duration-500 ${
                  hoveredRoom === room.id ? 'shadow-gold scale-[1.02]' : 'shadow-elevated hover:shadow-gold'
                }`}
                onMouseEnter={() => setHoveredRoom(room.id)}
                onMouseLeave={() => setHoveredRoom(null)}
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={room.image}
                    alt={room.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 to-transparent" />
                  {room.popular && (
                    <Badge className="absolute top-4 right-4 bg-gradient-gold text-secondary border-0">
                      Most Popular
                    </Badge>
                  )}
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="font-serif text-xl font-bold text-cream">{room.name}</h3>
                    <div className="flex items-baseline gap-1 mt-1">
                      <span className="text-2xl font-bold text-gold">{room.price}</span>
                      <span className="text-cream/70 text-sm">{room.period}</span>
                    </div>
                  </div>
                </div>
                
                <CardContent className="p-5">
                  <div className="flex items-center gap-4 mb-4 text-muted-foreground">
                    <div className="flex items-center gap-1.5">
                      <Bed className="w-4 h-4" />
                      <span className="text-sm">{room.beds} Bed</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Users className="w-4 h-4" />
                      <span className="text-sm">{room.occupancy} Person</span>
                    </div>
                  </div>

                  <ul className="space-y-2 mb-5">
                    {room.features.slice(0, 4).map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-foreground/80">
                        <Check className="w-4 h-4 text-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Button 
                    className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground"
                    onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    Enquire Now
                  </Button>
                </CardContent>
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default RoomShowcase;
