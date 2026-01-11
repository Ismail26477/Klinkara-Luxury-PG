import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import RoomShowcase from '@/components/RoomShowcase';
import Amenities from '@/components/Amenities';
import Gallery from '@/components/Gallery';
import Testimonials from '@/components/Testimonials';
import BookingForm from '@/components/BookingForm';
import LocationMap from '@/components/LocationMap';
import AIAssistant from '@/components/AIAssistant';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <RoomShowcase />
      <Amenities />
      <Gallery />
      <Testimonials />
      <BookingForm />
      <LocationMap />
      <Footer />
      <AIAssistant />
    </main>
  );
};

export default Index;
