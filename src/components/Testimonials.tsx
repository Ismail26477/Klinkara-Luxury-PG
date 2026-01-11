import { Star, Quote } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { FadeIn, StaggerContainer, StaggerItem } from '@/lib/animations';
import { motion } from 'framer-motion';

const testimonials = [
  {
    id: 1,
    name: 'Rahul Sharma',
    role: 'Software Engineer',
    company: 'Tech Corp',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&q=80',
    rating: 5,
    text: 'Moving to Klinkara was the best decision I made. The facilities are top-notch, food is amazing, and the community is wonderful. It truly feels like a home away from home.',
  },
  {
    id: 2,
    name: 'Priya Patel',
    role: 'MBA Student',
    company: 'IIM Graduate',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&q=80',
    rating: 5,
    text: 'The study-friendly environment and high-speed WiFi made my exam preparation so much easier. The staff is incredibly supportive and the location is perfect.',
  },
  {
    id: 3,
    name: 'Amit Kumar',
    role: 'Marketing Manager',
    company: 'Global Media',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&q=80',
    rating: 5,
    text: 'I\'ve stayed at multiple PGs before, but Klinkara is in a league of its own. The cleanliness, security, and overall vibe is unmatched. Highly recommended!',
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-cream-dark">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <FadeIn className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-primary text-sm font-medium tracking-[0.2em] uppercase mb-4">
            What Our Residents Say
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
            Stories From Our Community
          </h2>
          <p className="text-muted-foreground text-lg">
            Don't just take our word for it. Hear from the people who call 
            Klinkara their home.
          </p>
        </FadeIn>

        {/* Testimonials Grid */}
        <StaggerContainer className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <StaggerItem key={testimonial.id}>
              <Card className="bg-card border-0 shadow-elevated hover:shadow-gold transition-all duration-300 hover:-translate-y-1 h-full">
                <CardContent className="p-8">
                  <Quote className="w-10 h-10 text-primary/30 mb-4" />
                  
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                    ))}
                  </div>
                  
                  <p className="text-foreground/80 text-lg leading-relaxed mb-6 italic">
                    "{testimonial.text}"
                  </p>
                  
                  <div className="flex items-center gap-4 pt-4 border-t border-border">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-14 h-14 rounded-full object-cover ring-2 ring-primary/20"
                    />
                    <div>
                      <p className="font-serif font-semibold text-foreground">{testimonial.name}</p>
                      <p className="text-muted-foreground text-sm">{testimonial.role}</p>
                      <p className="text-primary text-sm">{testimonial.company}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Trust Badges */}
        <FadeIn delay={0.3} className="mt-16 text-center">
          <p className="text-muted-foreground mb-6">Trusted by leading companies and institutions</p>
          <motion.div 
            className="flex flex-wrap justify-center items-center gap-8 opacity-60"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.1 }
              }
            }}
          >
            {['Google', 'Microsoft', 'Amazon', 'Flipkart', 'TCS'].map((company) => (
              <motion.span 
                key={company} 
                className="text-2xl font-bold text-foreground/40"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
              >
                {company}
              </motion.span>
            ))}
          </motion.div>
        </FadeIn>
      </div>
    </section>
  );
};

export default Testimonials;
