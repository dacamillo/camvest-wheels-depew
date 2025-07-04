import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const FeaturedVehicles = () => {
  // Sample vehicle data - in real app this would come from database
  const featuredVehicles = [
    {
      id: 1,
      year: 2017,
      make: "Jeep",
      model: "Grand Cherokee Limited",
      price: 12995,
      mileage: 174356,
      image: "https://cdn05.carsforsale.com/3810a5926a24d840bbf9873e2828fe6d/480x360/2017-jeep-grand-cherokee-limited-4x4-4dr-suv.jpg",
      features: ["4x4", "Limited Trim", "Excellent Condition"]
    },
    {
      id: 2,
      year: 2014,
      make: "Chevrolet",
      model: "Impala LT",
      price: 9499,
      mileage: 127321,
      image: "https://cdn05.carsforsale.com/7e916e015d29872c520adc3ed5dc709d/480x360/2014-chevrolet-impala-lt-4dr-sedan-w-2lt.jpg",
      features: ["LT Package", "Well Maintained", "Great Value"]
    },
    {
      id: 3,
      year: 2014,
      make: "Ford",
      model: "Expedition Limited",
      price: 9999,
      mileage: 161727,
      image: "https://cdn05.carsforsale.com/00a282ebcad56a771474d84d2673d6414e/480x360/2014-ford-expedition-limited-4x4-4dr-suv.jpg",
      features: ["4x4", "Limited Trim", "7-Passenger"]
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Featured Vehicles</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Check out some of our most popular vehicles currently available. 
            All vehicles come with our quality guarantee.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {featuredVehicles.map((vehicle) => (
            <div key={vehicle.id} className="vehicle-card p-0 overflow-hidden">
              <div className="aspect-video w-full">
                <img 
                  src={vehicle.image} 
                  alt={`${vehicle.year} ${vehicle.make} ${vehicle.model}`}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">
                  {vehicle.year} {vehicle.make} {vehicle.model}
                </h3>
                
                <div className="flex justify-between items-center mb-4">
                  <span className="text-2xl font-bold text-primary">
                    ${vehicle.price.toLocaleString()}
                  </span>
                  <span className="text-muted-foreground">
                    {vehicle.mileage.toLocaleString()} miles
                  </span>
                </div>

                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {vehicle.features.map((feature, index) => (
                      <span 
                        key={index}
                        className="px-3 py-1 bg-secondary text-secondary-foreground text-sm rounded-full"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button variant="outline" className="flex-1">
                    View Details
                  </Button>
                  <Button className="flex-1 btn-automotive">
                    Contact Us
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link to="/inventory">
            <Button size="lg" className="btn-automotive">
              View All Inventory
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedVehicles;