import { Phone, Mail, MapPin, Instagram, Facebook, Twitter, Linkedin } from "lucide-react"
import { FadeIn, StaggerContainer, StaggerItem } from "@/lib/animations"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer id="contact" className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-16">
        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <StaggerItem>
            <div className="mb-6">
              <span className="font-serif text-2xl font-bold text-cream">Klinkara</span>
              <span className="text-gold text-sm font-medium tracking-widest uppercase ml-2">Luxury PG</span>
            </div>
            <p className="text-cream/70 mb-6 leading-relaxed">
              Experience premium living with world-class amenities and a vibrant community in the heart of Bangalore.
            </p>
            <div className="flex gap-4">
              {[Instagram, Facebook, Twitter, Linkedin].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-10 h-10 bg-cream/10 rounded-full flex items-center justify-center hover:bg-gradient-gold hover:text-secondary transition-all duration-300"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </StaggerItem>

          {/* Quick Links */}
          <StaggerItem>
            <h4 className="font-serif text-lg font-semibold text-cream mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {["Home", "Rooms", "Amenities", "Gallery", "Location", "Book Visit"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase().replace(" ", "")}`}
                    className="text-cream/70 hover:text-gold transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </StaggerItem>

          {/* Room Types */}
          <StaggerItem>
            <h4 className="font-serif text-lg font-semibold text-cream mb-6">Room Types</h4>
            <ul className="space-y-3">
              <li className="text-cream/70">Single Occupancy - ₹12,000/mo</li>
              <li className="text-cream/70">Double Sharing - ₹8,000/mo</li>
              <li className="text-cream/70">Triple Sharing - ₹6,500/mo</li>
              <li className="text-cream/70">Premium Suite - ₹18,000/mo</li>
            </ul>
          </StaggerItem>

          {/* Contact */}
          <StaggerItem>
            <h4 className="font-serif text-lg font-semibold text-cream mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                <span className="text-cream/70">
                  456 MG Road, Viman Nagar,
                  <br />
                  Pune - 411014
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-gold shrink-0" />
                <a href="tel:+919876543210" className="text-cream/70 hover:text-gold transition-colors">
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-gold shrink-0" />
                <a href="mailto:info@klinkarapg.com" className="text-cream/70 hover:text-gold transition-colors">
                  info@klinkarapg.com
                </a>
              </li>
            </ul>
          </StaggerItem>
        </StaggerContainer>

        {/* Bottom Bar */}
        <FadeIn delay={0.4}>
          <div className="mt-12 pt-8 border-t border-cream/10 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-cream/50 text-sm">© {currentYear} Klinkara Luxury PG. All rights reserved.</p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-cream/50 hover:text-gold transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-cream/50 hover:text-gold transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-cream/50 hover:text-gold transition-colors">
                Refund Policy
              </a>
            </div>
          </div>
        </FadeIn>
      </div>
    </footer>
  )
}

export default Footer
