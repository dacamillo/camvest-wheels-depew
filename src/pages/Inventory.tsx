import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useState } from 'react';

const Inventory = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // Sample inventory data - in real app this would come from database
  const inventory = [
    {
      id: 1,
      year: 2020,
      make: "Honda",
      model: "Civic",
      price: 18995,
      mileage: 45000,
      image: "https://images.unsplash.com/photo-1549399015-6d91d74c2ea4?w=400&h=300&fit=crop",
      features: ["Excellent Condition", "One Owner", "Service Records"],
      type: "Sedan"
    },
    {
      id: 2,
      year: 2019,
      make: "Toyota",
      model: "Camry",
      price: 21995,
      mileage: 52000,
      image: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=400&h=300&fit=crop",
      features: ["Low Miles", "Clean CarFax", "Recently Serviced"],
      type: "Sedan"
    },
    {
      id: 3,
      year: 2021,
      make: "Ford",
      model: "F-150",
      price: 32995,
      mileage: 38000,
      image: "https://images.unsplash.com/photo-1593941707882-a5bac6861f5?w=400&h=300&fit=crop",
      features: ["4WD", "Crew Cab", "Excellent Condition"],
      type: "Truck"
    },
    {
      id: 4,
      year: 2020,
      make: "Jeep",
      model: "Wrangler",
      price: 28995,
      mileage: 41000,
      image: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=400&h=300&fit=crop",
      features: ["4x4", "Hardtop", "Low Miles"],
      type: "SUV"
    },
    {
      id: 5,
      year: 2018,
      make: "Nissan",
      model: "Altima",
      price: 16995,
      mileage: 68000,
      image: "https://images.unsplash.com/photo-1551522435-a13afa10f103?w=400&h=300&fit=crop",
      features: ["Great Value", "Reliable", "Well Maintained"],
      type: "Sedan"
    },
    {
      id: 6,
      year: 2019,
      make: "Chevrolet",
      model: "Equinox",
      price: 22995,
      mileage: 55000,
      image: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=400&h=300&fit=crop",
      features: ["AWD", "Clean Interior", "Popular Model"],
      type: "SUV"
    }
  ];

  const filteredInventory = inventory.filter(vehicle => 
    vehicle.make.toLowerCase().includes(searchTerm.toLowerCase()) ||
    vehicle.model.toLowerCase().includes(searchTerm.toLowerCase()) ||
    vehicle.year.toString().includes(searchTerm)
  );

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="py-16 section-gray">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-4">Our Vehicle Inventory</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Browse our selection of quality used vehicles. All cars are inspected and ready to drive.
            </p>
          </div>

          {/* Search */}
          <div className="max-w-md mx-auto mb-8">
            <Input
              type="text"
              placeholder="Search by make, model, or year..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="text-center"
            />
          </div>
        </div>
      </section>

      {/* Inventory Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredInventory.map((vehicle) => (
              <div key={vehicle.id} className="vehicle-card p-0 overflow-hidden">
                <div className="aspect-video w-full">
                  <img 
                    src={vehicle.image} 
                    alt={`${vehicle.year} ${vehicle.make} ${vehicle.model}`}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold">
                      {vehicle.year} {vehicle.make} {vehicle.model}
                    </h3>
                    <span className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded">
                      {vehicle.type}
                    </span>
                  </div>
                  
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-2xl font-bold text-primary">
                      ${vehicle.price.toLocaleString()}
                    </span>
                    <span className="text-muted-foreground">
                      {vehicle.mileage.toLocaleString()} mi
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
                    <a href="tel:+17166831234" className="flex-1">
                      <Button className="w-full btn-automotive">
                        Call About This Car
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredInventory.length === 0 && (
            <div className="text-center py-16">
              <p className="text-xl text-muted-foreground">
                No vehicles found matching your search. Try a different term.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 hero-gradient text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Don't See What You're Looking For?</h2>
          <p className="text-lg mb-8 opacity-90">
            Our inventory changes daily. Call us and we'll help you find the perfect vehicle.
          </p>
          <a href="tel:+17166831234">
            <Button size="lg" className="bg-white text-primary hover:bg-gray-100">
              Call Us: (716) 683-1234
            </Button>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Inventory;