import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import heroImage from '@/assets/hero-dealership.jpg';
import { Phone, Star } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative h-[700px] flex items-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-6">
        <div className="max-w-3xl">
          <div className="mb-4">
            <span className="inline-block px-4 py-2 bg-primary text-primary-foreground text-sm font-semibold rounded-full mb-4">
              A+ BBB Rating • 25 Years in Business
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-white">
            Quality Used Cars in 
            <span className="block text-primary"> Depew, NY</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-10 text-white/90 leading-relaxed max-w-2xl">
            Honest deals, reliable vehicles, and exceptional service. 
            Find your perfect car today with financing options available for all credit situations.
          </p>

          <div className="flex flex-col lg:flex-row gap-4 mb-12">
            <Link to="/inventory">
              <Button size="lg" className="btn-automotive text-lg px-10 py-5 h-auto font-bold">
                View Our Inventory
              </Button>
            </Link>
            <a href="tel:+17165781787">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white text-lg px-10 py-5 h-auto font-bold">
                <Phone className="mr-3 h-6 w-6" />
                Call (716) 578-1787
              </Button>
            </a>
            <a href="https://calendly.com/camvest-auto-sales" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline" className="text-lg px-10 py-5 h-auto font-bold border-2 border-white text-white hover:bg-white hover:text-primary">
                Schedule Test Drive
              </Button>
            </a>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap items-center gap-8 text-white/90">
            <div className="flex items-center space-x-2">
              <div className="flex">
                {[...Array(4)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
                <Star className="h-5 w-5 text-yellow-400" />
              </div>
              <span className="font-semibold">4.2/5 Stars (55 Reviews)</span>
            </div>
            <div className="font-semibold">25 Years in Business</div>
            <div className="font-semibold">A+ BBB Rating</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;