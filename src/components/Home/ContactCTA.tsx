import { Button } from '@/components/ui/button';
import { Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const ContactCTA = () => {
  return (
    <section className="py-16 hero-gradient text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-6">Ready to Find Your Perfect Car?</h2>
        <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
          Visit our lot today to see our full inventory, or give us a call to discuss 
          financing options and schedule a test drive.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <a href="tel:+17166831234">
            <Button size="lg" variant="outline" className="btn-automotive-outline border-white text-white hover:bg-white hover:text-primary">
              <Phone className="mr-2 h-5 w-5" />
              Call (716) 683-1234
            </Button>
          </a>
          <Link to="/contact">
            <Button size="lg" className="bg-white text-primary hover:bg-gray-100">
              Visit Our Lot
            </Button>
          </Link>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-sm opacity-90">
          <div className="flex items-center space-x-2">
            <MapPin className="h-4 w-4" />
            <span>123 Transit Road, Depew, NY 14043</span>
          </div>
          <div>Mon-Fri: 9AM-7PM | Sat: 9AM-6PM | Sun: 11AM-5PM</div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;