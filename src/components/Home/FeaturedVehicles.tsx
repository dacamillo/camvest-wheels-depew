import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const FeaturedVehicles = () => {
  // Sample vehicle data - in real app this would come from database
  const featuredVehicles = [
    {
      id: 1,
      year: 2020,
      make: "Honda",
      model: "Civic",
      price: 18995,
      mileage: 45000,
      image: "https://images.unsplash.com/photo-1549399015-6d91d74c2ea4?w=400&h=300&fit=crop",
      features: ["Excellent Condition", "One Owner", "Service Records"]
    },
    {
      id: 2,
      year: 2019,
      make: "Toyota",
      model: "Camry",
      price: 21995,
      mileage: 52000,
      image: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=400&h=300&fit=crop",
      features: ["Low Miles", "Clean CarFax", "Recently Serviced"]
    },
    {
      id: 3,
      year: 2021,
      make: "Ford",
      model: "F-150",
      price: 32995,
      mileage: 38000,
      image: "https://images.unsplash.com/photo-1593941707882-a5bac6861d75?w=400&h=300&fit=crop",
      features: ["4WD", "Crew Cab", "Excellent Condition"]
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