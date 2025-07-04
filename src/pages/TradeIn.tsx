import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Phone, Star } from 'lucide-react';
import { useState } from 'react';

const TradeIn = () => {
  const [vehicleData, setVehicleData] = useState({
    year: '',
    make: '',
    model: '',
    mileage: '',
    condition: '',
    description: '',
    name: '',
    phone: '',
    email: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setVehicleData({
      ...vehicleData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your trade-in request! We will contact you within 24 hours with a valuation estimate.');
  };

  const tradeInSteps = [
    {
      step: 1,
      title: "Submit Your Vehicle Info",
      description: "Fill out our simple form with your vehicle details and contact information."
    },
    {
      step: 2,
      title: "Get a Free Estimate",
      description: "We'll research your vehicle's value and provide you with a competitive estimate within 24 hours."
    },
    {
      step: 3,
      title: "Schedule an Inspection",
      description: "Bring your vehicle to our lot for a quick inspection to confirm the final trade-in value."
    },
    {
      step: 4,
      title: "Apply Credit to Purchase",
      description: "Use your trade-in value as a down payment or credit toward your next vehicle purchase."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="py-16 section-gray">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Trade In Your Vehicle</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get the most value for your current vehicle. We accept all makes and models, 
            regardless of condition. Get your free estimate today!
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Trade-In Form */}
          <div>
            <Card className="automotive-card">
              <CardHeader>
                <CardTitle className="text-2xl">Get Your Free Trade-In Estimate</CardTitle>
                <p className="text-muted-foreground">
                  Fill out the form below and we'll provide you with a competitive estimate within 24 hours.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Vehicle Information */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Vehicle Information</h3>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="year" className="block text-sm font-medium mb-2">
                          Year *
                        </label>
                        <Input
                          id="year"
                          name="year"
                          type="number"
                          required
                          value={vehicleData.year}
                          onChange={handleChange}
                          placeholder="2020"
                          min="1990"
                          max="2024"
                        />
                      </div>
                      <div>
                        <label htmlFor="mileage" className="block text-sm font-medium mb-2">
                          Mileage *
                        </label>
                        <Input
                          id="mileage"
                          name="mileage"
                          type="number"
                          required
                          value={vehicleData.mileage}
                          onChange={handleChange}
                          placeholder="50000"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="make" className="block text-sm font-medium mb-2">
                          Make *
                        </label>
                        <Input
                          id="make"
                          name="make"
                          required
                          value={vehicleData.make}
                          onChange={handleChange}
                          placeholder="Honda"
                        />
                      </div>
                      <div>
                        <label htmlFor="model" className="block text-sm font-medium mb-2">
                          Model *
                        </label>
                        <Input
                          id="model"
                          name="model"
                          required
                          value={vehicleData.model}
                          onChange={handleChange}
                          placeholder="Civic"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="condition" className="block text-sm font-medium mb-2">
                        Overall Condition *
                      </label>
                      <select 
                        className="w-full px-3 py-2 border border-input bg-background rounded-md"
                        name="condition"
                        required
                        value={vehicleData.condition}
                        onChange={handleChange}
                      >
                        <option value="">Select Condition</option>
                        <option value="excellent">Excellent - Like new, no visible wear</option>
                        <option value="good">Good - Minor wear, well maintained</option>
                        <option value="fair">Fair - Some wear, needs minor repairs</option>
                        <option value="poor">Poor - Significant wear, needs major repairs</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="description" className="block text-sm font-medium mb-2">
                        Additional Details
                      </label>
                      <Textarea
                        id="description"
                        name="description"
                        value={vehicleData.description}
                        onChange={handleChange}
                        placeholder="Any accidents, recent repairs, special features, or other details that might affect value..."
                        rows={3}
                      />
                    </div>
                  </div>

                  {/* Contact Information */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Contact Information</h3>
                    
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Full Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={vehicleData.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium mb-2">
                          Phone Number *
                        </label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          required
                          value={vehicleData.phone}
                          onChange={handleChange}
                          placeholder="(716) 555-0123"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-2">
                          Email Address
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={vehicleData.email}
                          onChange={handleChange}
                          placeholder="your.email@example.com"
                        />
                      </div>
                    </div>
                  </div>

                  <Button type="submit" className="w-full btn-automotive">
                    Get My Free Estimate
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    No obligation. We'll contact you within 24 hours with your vehicle's estimated trade-in value.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Trade-In Process & Benefits */}
          <div className="space-y-8">
            {/* How It Works */}
            <div>
              <h2 className="text-2xl font-bold mb-6">How Our Trade-In Process Works</h2>
              <div className="space-y-6">
                {tradeInSteps.map((step, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                      {step.step}
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">{step.title}</h3>
                      <p className="text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Benefits */}
            <Card className="automotive-card">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Star className="h-5 w-5 text-primary" />
                  <span>Why Trade With Us?</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Fair Market Value:</strong> We use current market data to ensure competitive offers</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Accept All Conditions:</strong> Running or not, we'll make an offer</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Instant Credit:</strong> Apply trade value immediately to your purchase</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Save on Taxes:</strong> Trading in can reduce your sales tax</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>No Hassle:</strong> Skip the private sale headaches</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Quick Contact */}
            <div className="hero-gradient text-white p-6 rounded-lg text-center">
              <h3 className="text-xl font-bold mb-4">Need Help? Speak to Our Team</h3>
              <p className="mb-4 opacity-90">
                Have questions about your trade-in? Our experienced team can help assess your vehicle's value over the phone.
              </p>
              <a href="tel:+17165781787">
                <Button className="bg-white text-primary hover:bg-gray-100">
                  <Phone className="mr-2 h-4 w-4" />
                  Call Now: (716) 578-1787
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TradeIn;