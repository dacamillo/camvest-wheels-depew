import { Link } from 'react-router-dom';
import { Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Camvest Inc Auto Sales</h3>
            <p className="mb-4 opacity-90">
              Your trusted used car dealer in Depew, NY. We pride ourselves on honest deals, 
              quality vehicles, and exceptional customer service for over 15 years.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>5222 Transit Rd, Depew, NY 14043</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <a href="tel:+17165781787" className="hover:opacity-80 transition-opacity">
                  (716) 578-1787
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/inventory" className="hover:opacity-80 transition-opacity">
                  View Inventory
                </Link>
              </li>
              <li>
                <Link to="/trade-in" className="hover:opacity-80 transition-opacity">
                  Trade-In Value
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:opacity-80 transition-opacity">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:opacity-80 transition-opacity">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Test Drive Hours */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Test Drive Hours</h4>
            <a href="https://calendly.com/camvest-auto-sales" target="_blank" rel="noopener noreferrer" className="block hover:opacity-80 transition-opacity">
              <div className="space-y-1 text-sm opacity-90 mb-3">
                <div>Monday - Friday: 10:00 AM - 6:00 PM</div>
                <div>Saturday: 10:00 AM - 4:00 PM</div>
                <div>Sunday: Closed</div>
              </div>
              <div className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded text-sm font-semibold transition-colors">
                Schedule Test Drive
              </div>
            </a>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="opacity-80">
            © 2024 Camvest Inc Auto Sales. All rights reserved. | 
            <span className="ml-2">Licensed Used Car Dealer in Depew, NY</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;