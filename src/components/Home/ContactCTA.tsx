import { Button } from '@/components/ui/button';
import { Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const ContactCTA = () => {
  return (
    <section className="py-16 hero-gradient text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-6">Ready to Find Your Perfect Car?</h2>
        <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
          Visit our lot today to see our full inventory, or give us a call to schedule a test drive.
        </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a href="tel:+17165781787">
              <Button size="lg" className="btn-automotive">
                <Phone className="mr-2 h-5 w-5" />
                Call (716) 578-1787
              </Button>
            </a>
            <a href="https://api.leadconnectorhq.com/widget/booking/PG4skS5X8wxVQjWKPBO7" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="btn-automotive">
                Schedule Test Drive
              </Button>
            </a>
          </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-sm opacity-90">
          <div className="flex items-center space-x-2">
            <MapPin className="h-4 w-4" />
            <span>123 Transit Road, Depew, NY 14043</span>
          </div>
          <div>Mon-Fri: 10AM-5PM | Sat: 10AM-3PM | Sun: Closed</div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;