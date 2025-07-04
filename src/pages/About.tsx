import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Star, Users, Phone } from 'lucide-react';

const About = () => {
  const teamMembers = [
    {
      name: "Mike Camvest",
      title: "Owner & General Manager", 
      experience: "15+ years",
      description: "Mike founded Camvest Inc Auto Sales with a mission to provide honest, transparent car buying experiences to the Depew community."
    },
    {
      name: "Sarah Johnson",
      title: "Sales Manager",
      experience: "8 years",
      description: "Sarah specializes in helping first-time buyers and families find the perfect vehicle that fits their needs and budget."
    },
    {
      name: "Tom Rodriguez",
      title: "Finance Specialist",
      experience: "10 years", 
      description: "Tom works with multiple lenders to secure the best financing options for our customers, regardless of credit situation."
    }
  ];

  const values = [
    {
      icon: Star,
      title: "Honesty & Transparency",
      description: "We believe in clear, upfront pricing with no hidden fees or surprises. What you see is what you pay."
    },
    {
      icon: Users,
      title: "Community Focused",
      description: "As a local business, we're invested in our community. Your satisfaction is our reputation."
    },
    {
      icon: Phone,
      title: "Personal Service",
      description: "We take time to understand your needs and find the right vehicle, not just make a quick sale."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="py-16 section-gray">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">About Camvest Inc Auto Sales</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            For over 15 years, we've been proudly serving the Depew and Buffalo communities 
            with quality used vehicles and exceptional customer service.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Our Story</h2>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-lg leading-relaxed mb-6">
                Camvest Inc Auto Sales was founded in 2009 with a simple mission: to change how people 
                buy used cars. After years of seeing customers frustrated with high-pressure tactics and 
                hidden fees at other dealerships, our founder Mike Camvest decided to do things differently.
              </p>
              
              <p className="text-lg leading-relaxed mb-6">
                We started small, with just a handful of carefully selected vehicles and a commitment to 
                treating every customer like family. Word spread quickly through the Depew and Buffalo 
                communities about our honest approach, fair prices, and exceptional after-sale service.
              </p>
              
              <p className="text-lg leading-relaxed mb-8">
                Today, we're proud to have helped over 500 families find their perfect vehicle. We've 
                grown our inventory and team, but our core values remain the same: honesty, quality, 
                and putting our customers first.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 section-gray">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Values</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <Card key={index} className="automotive-card text-center">
                  <CardHeader>
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Meet Our Team</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="automotive-card text-center">
                <CardHeader>
                  <div className="w-24 h-24 bg-secondary rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users className="h-12 w-12 text-muted-foreground" />
                  </div>
                  <CardTitle className="text-xl">{member.name}</CardTitle>
                  <p className="text-primary font-semibold">{member.title}</p>
                  <p className="text-sm text-muted-foreground">{member.experience} experience</p>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {member.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Summary */}
      <section className="py-16 hero-gradient text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Why Customers Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="opacity-90">Happy Customers</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">25</div>
              <div className="opacity-90">Years in Business</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">4.2★</div>
              <div className="opacity-90">Customer Rating (55 Reviews)</div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/inventory">
              <Button size="lg" className="bg-white text-primary hover:bg-gray-100">
                View Our Inventory
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                Visit Our Lot
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;