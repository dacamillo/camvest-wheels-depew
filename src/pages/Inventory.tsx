import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useState } from 'react';

const Inventory = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // Sample inventory data - in real app this would come from database
  const inventory = [
    {
      id: 1,
      year: 2014,
      make: "Ford",
      model: "Expedition Limited",
      price: 9999,
      mileage: 161727,
      image: "https://cdn05.carsforsale.com/00a282ebcad56a771474d84d2673d6414e/480x360/2014-ford-expedition-limited-4x4-4dr-suv.jpg",
      features: ["4x4", "Limited Trim", "7-Passenger"],
      type: "SUV"
    },
    {
      id: 2,
      year: 2017,
      make: "Jeep",
      model: "Grand Cherokee Limited",
      price: 12999,
      mileage: 174356,
      image: "https://cdn05.carsforsale.com/3810a5926a24d840bbf9873e2828fe6d/480x360/2017-jeep-grand-cherokee-limited-4x4-4dr-suv.jpg",
      features: ["4x4", "Limited Trim", "Low Miles"],
      type: "SUV"
    },
    {
      id: 3,
      year: 2015,
      make: "Jeep",
      model: "Grand Cherokee Limited",
      price: 10999,
      mileage: 179204,
      image: "https://cdn05.carsforsale.com/008b21218202fbfb6799bd807eae963ec1/480x360/2015-jeep-grand-cherokee-limited-4x4-4dr-suv.jpg",
      features: ["4x4", "Limited Trim", "Great Value"],
      type: "SUV"
    },
    {
      id: 4,
      year: 2014,
      make: "Chevrolet",
      model: "Impala LT",
      price: 9499,
      mileage: 127321,
      image: "https://cdn05.carsforsale.com/7e916e015d29872c520adc3ed5dc709d/480x360/2014-chevrolet-impala-lt-4dr-sedan-w-2lt.jpg",
      features: ["LT Package", "Well Maintained", "Reliable"],
      type: "Sedan"
    },
    {
      id: 5,
      year: 2010,
      make: "Lincoln",
      model: "MKX",
      price: 6999,
      mileage: 168233,
      image: "https://cdn05.carsforsale.com/00e336979b011f7d83063e9a1cfdf8c5c9/480x360/2010-lincoln-mkx-base-awd-4dr-suv.jpg",
      features: ["AWD", "Luxury Interior", "Great Condition"],
      type: "SUV"
    },
    {
      id: 6,
      year: 2009,
      make: "Buick",
      model: "Enclave CXL",
      price: 7999,
      mileage: 125560,
      image: "https://cdn05.carsforsale.com/74db9dcfdf05ac7decb2aa507a441661/480x360/2009-buick-enclave-cxl-awd-4dr-crossover.jpg",
      features: ["AWD", "CXL Package", "7-Passenger"],
      type: "SUV"
    },
    {
      id: 7,
      year: 2008,
      make: "Ford",
      model: "Edge SEL",
      price: 7999,
      mileage: 101421,
      image: "https://cdn05.carsforsale.com/0098a30149ada44b3f07279f84de143187/480x360/2008-ford-edge-sel-awd-4dr-crossover.jpg",
      features: ["AWD", "SEL Package", "Low Miles"],
      type: "SUV"
    },
    {
      id: 8,
      year: 2007,
      make: "Jeep",
      model: "Liberty Sport",
      price: 5499,
      mileage: 133927,
      image: "https://cdn05.carsforsale.com/00d6d77a66daed5388aec27592120069d1/480x360/2007-jeep-liberty-sport-4dr-suv-4wd.jpg",
      features: ["4WD", "Sport Package", "Affordable"],
      type: "SUV"
    },
    {
      id: 9,
      year: 2007,
      make: "Lincoln",
      model: "MKX",
      price: 6999,
      mileage: 138251,
      image: "https://cdn05.carsforsale.com/3a0fe48cb29b4e4dd2e0769baa6aba76/480x360/2007-lincoln-mkx-base-awd-4dr-suv.jpg",
      features: ["AWD", "Luxury Features", "Well Maintained"],
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
                    <a href="tel:+17165781787" className="flex-1">
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
          <a href="tel:+17165781787">
            <Button size="lg" className="bg-white text-primary hover:bg-gray-100">
              Call Us: (716) 578-1787
            </Button>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Inventory;