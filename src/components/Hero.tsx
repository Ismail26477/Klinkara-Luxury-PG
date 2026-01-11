import { Button } from '@/components/ui/button';
import { Play, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          poster="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=80"
        >
          <source 
            src="https://assets.mixkit.co/videos/preview/mixkit-luxury-home-interior-4696-large.mp4" 
            type="video/mp4" 
          />
        </video>
        <div className="absolute inset-0 bg-overlay" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div 
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <motion.p 
            className="text-gold-light text-sm md:text-base font-medium tracking-[0.3em] uppercase mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Premium Living Experience
          </motion.p>
          <motion.h1 
            className="font-serif text-4xl md:text-6xl lg:text-7xl text-cream font-bold leading-tight mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Klinkara
            <span className="block text-gradient-gold">Luxury PG</span>
          </motion.h1>
          <motion.p 
            className="text-cream/80 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Experience the pinnacle of comfortable living with premium amenities, 
            world-class facilities, and a vibrant community in the heart of the city.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <Button 
              size="lg"
              className="bg-gradient-gold hover:opacity-90 text-secondary font-semibold px-8 py-6 text-lg shadow-gold"
              onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Book a Site Visit
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-cream/30 text-cream hover:bg-cream/10 font-medium px-8 py-6 text-lg backdrop-blur-sm"
              onClick={() => document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Play className="w-5 h-5 mr-2" />
              Take a Virtual Tour
            </Button>
          </motion.div>
        </motion.div>

        {/* Stats */}
        <motion.div 
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          {[
            { value: '50+', label: 'Premium Rooms' },
            { value: '24/7', label: 'Security & Support' },
            { value: '100+', label: 'Happy Residents' },
            { value: '5★', label: 'Google Rating' },
          ].map((stat, index) => (
            <motion.div 
              key={index} 
              className="text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 1.2 + index * 0.1 }}
            >
              <p className="text-3xl md:text-4xl font-serif font-bold text-gold">{stat.value}</p>
              <p className="text-cream/70 text-sm mt-1">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ 
          opacity: { duration: 0.6, delay: 1.5 },
          y: { duration: 1.5, repeat: Infinity, ease: 'easeInOut' }
        }}
      >
        <a href="#rooms" className="flex flex-col items-center gap-2 text-cream/60 hover:text-cream transition-colors">
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <ChevronDown className="w-5 h-5" />
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
