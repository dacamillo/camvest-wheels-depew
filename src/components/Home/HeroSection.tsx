import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import heroImage from '@/assets/hero-dealership.jpg';
import { Phone, Star } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative h-[600px] flex items-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 text-white">
        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Quality Used Cars in 
            <span className="text-red-400"> Depew, NY</span>
          </h1>
          
          <p className="text-xl mb-8 opacity-90">
            Honest deals, reliable vehicles, and exceptional service. 
            Find your perfect car today with financing options available.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Link to="/inventory">
              <Button size="lg" className="btn-automotive text-lg px-8 py-4">
                View Our Inventory
              </Button>
            </Link>
            <a href="tel:+17166831234">
              <Button size="lg" variant="outline" className="btn-automotive-outline text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-primary">
                <Phone className="mr-2 h-5 w-5" />
                Call Now: (716) 683-1234
              </Button>
            </a>
          </div>

          {/* Trust Indicators */}
          <div className="flex items-center space-x-6 text-sm opacity-90">
            <div className="flex items-center space-x-1">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="ml-2">4.8/5 Rating</span>
            </div>
            <div>15+ Years in Business</div>
            <div>500+ Happy Customers</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;