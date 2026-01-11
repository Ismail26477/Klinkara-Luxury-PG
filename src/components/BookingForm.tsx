import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Card, CardContent } from '@/components/ui/card';
import { CalendarIcon, Phone, Mail, MapPin, Clock, Check } from 'lucide-react';
import { format } from 'date-fns';
import { toast } from 'sonner';
import { FadeIn, ScaleIn } from '@/lib/animations';
import { motion } from 'framer-motion';

const BookingForm = () => {
  const [date, setDate] = useState<Date>();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    roomType: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    toast.success('Site visit scheduled successfully! We\'ll contact you shortly.');
  };

  if (isSubmitted) {
    return (
      <section id="booking" className="py-24 bg-gradient-navy">
        <div className="container mx-auto px-4">
          <ScaleIn>
            <Card className="max-w-2xl mx-auto bg-card border-0 shadow-elevated">
              <CardContent className="p-12 text-center">
                <motion.div 
                  className="w-20 h-20 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-6"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                >
                  <Check className="w-10 h-10 text-secondary" />
                </motion.div>
                <h3 className="font-serif text-3xl font-bold text-foreground mb-4">
                  Visit Scheduled!
                </h3>
                <p className="text-muted-foreground text-lg mb-6">
                  Thank you for your interest in Klinkara Luxury PG. Our team will contact 
                  you within 24 hours to confirm your visit.
                </p>
                <Button 
                  onClick={() => setIsSubmitted(false)}
                  className="bg-gradient-gold hover:opacity-90 text-secondary"
                >
                  Schedule Another Visit
                </Button>
              </CardContent>
            </Card>
          </ScaleIn>
        </div>
      </section>
    );
  }

  return (
    <section id="booking" className="py-24 bg-gradient-navy">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left - Form */}
          <FadeIn direction="left">
            <Card className="bg-card border-0 shadow-elevated">
              <CardContent className="p-8">
                <h3 className="font-serif text-3xl font-bold text-foreground mb-2">
                  Book a Site Visit
                </h3>
                <p className="text-muted-foreground mb-8">
                  Schedule a tour and experience luxury living firsthand.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        placeholder="Enter your name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>Room Preference</Label>
                      <Select onValueChange={(value) => setFormData({ ...formData, roomType: value })}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select room type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="single">Single Occupancy</SelectItem>
                          <SelectItem value="double">Double Sharing</SelectItem>
                          <SelectItem value="triple">Triple Sharing</SelectItem>
                          <SelectItem value="premium">Premium Suite</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label>Preferred Visit Date</Label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            className="w-full justify-start text-left font-normal"
                          >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {date ? format(date, 'PPP') : 'Pick a date'}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={date}
                            onSelect={setDate}
                            initialFocus
                            disabled={(date) => date < new Date()}
                          />
                        </PopoverContent>
                      </Popover>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Additional Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Any specific requirements or questions?"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={4}
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-gold hover:opacity-90 text-secondary font-semibold py-6 text-lg shadow-gold"
                  >
                    Schedule My Visit
                  </Button>
                </form>
              </CardContent>
            </Card>
          </FadeIn>

          {/* Right - Contact Info */}
          <FadeIn direction="right" delay={0.2}>
            <div className="text-cream space-y-8">
              <div>
                <p className="text-gold-light text-sm font-medium tracking-[0.2em] uppercase mb-4">
                  Get In Touch
                </p>
                <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
                  We'd Love to<br />
                  <span className="text-gradient-gold">Hear From You</span>
                </h2>
                <p className="text-cream/80 text-lg">
                  Have questions about our PG? Our team is here to help you 
                  find your perfect home.
                </p>
              </div>

              <motion.div 
                className="space-y-6"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: {},
                  visible: { transition: { staggerChildren: 0.15 } }
                }}
              >
                {[
                  { icon: Phone, title: 'Call Us', lines: ['+91 98765 43210', '+91 87654 32109'] },
                  { icon: Mail, title: 'Email Us', lines: ['info@klinkarapg.com', 'booking@klinkarapg.com'] },
                  { icon: MapPin, title: 'Visit Us', lines: ['Klinkara Luxury PG, 123 MG Road,', 'Koramangala, Bangalore - 560034'] },
                  { icon: Clock, title: 'Visiting Hours', lines: ['Mon - Sat: 9:00 AM - 7:00 PM', 'Sunday: 10:00 AM - 5:00 PM'] },
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-start gap-4"
                    variants={{
                      hidden: { opacity: 0, x: 30 },
                      visible: { opacity: 1, x: 0 }
                    }}
                  >
                    <div className="w-12 h-12 bg-gradient-gold rounded-xl flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-secondary" />
                    </div>
                    <div>
                      <p className="font-medium text-cream">{item.title}</p>
                      {item.lines.map((line, i) => (
                        <p key={i} className="text-cream/70">{line}</p>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default BookingForm;
