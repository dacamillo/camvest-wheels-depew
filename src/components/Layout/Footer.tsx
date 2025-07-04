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
                <span>123 Transit Road, Depew, NY 14043</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <a href="tel:+17166831234" className="hover:opacity-80 transition-opacity">
                  (716) 683-1234
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
                <Link to="/financing" className="hover:opacity-80 transition-opacity">
                  Financing
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
            </ul>
          </div>

          {/* Business Hours */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Business Hours</h4>
            <div className="space-y-1 text-sm opacity-90">
              <div>Monday - Friday: 9:00 AM - 7:00 PM</div>
              <div>Saturday: 9:00 AM - 6:00 PM</div>
              <div>Sunday: 11:00 AM - 5:00 PM</div>
            </div>
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