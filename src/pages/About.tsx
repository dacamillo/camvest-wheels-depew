import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Link } from 'react-router-dom';
import { Star, Users, Phone } from 'lucide-react';
import { useState } from 'react';

const About = () => {
  const [openDialog, setOpenDialog] = useState<string | null>(null);

  const values = [
    {
      id: "honesty",
      icon: Star,
      title: "Honesty & Transparency",
      description: "We believe in clear, upfront pricing with no hidden fees or surprises. What you see is what you pay.",
      competitiveAdvantage: {
        title: "Why This Makes Us Different",
        content: [
          "Unlike many dealerships, we post our final prices upfront - no negotiation games or hidden fees",
          "Other dealers often add documentation fees, prep charges, and surprise costs at closing",
          "We provide detailed vehicle history and condition reports for every car on our lot",
          "Competitors may pressure you with 'limited time offers' - our fair prices are consistent",
          "You'll never hear 'let me talk to my manager' - our staff has full pricing authority"
        ]
      }
    },
    {
      id: "community",
      icon: Users,
      title: "Community Focused",
      description: "As a local business, we're invested in our community. Your satisfaction is our reputation.",
      competitiveAdvantage: {
        title: "Local vs. Corporate Dealerships",
        content: [
          "Big corporate lots treat you like a number - we know our customers by name",
          "Chain dealerships have quotas and pressure tactics - we focus on finding your right car",
          "Corporate dealers may disappear or change ownership - we've been here 25 years and counting",
          "National chains use high-pressure sales teams - our family-owned approach is relationship-based",
          "We support local charities and events - your purchase helps strengthen our community"
        ]
      }
    },
    {
      id: "service",
      icon: Phone,
      title: "Personal Service",
      description: "We take time to understand your needs and find the right vehicle, not just make a quick sale.",
      competitiveAdvantage: {
        title: "Personal Attention You Won't Find Elsewhere",
        content: [
          "Large dealers rush customers through - we spend quality time understanding your needs",
          "Competitors use high-pressure tactics and artificial urgency - we let you decide at your pace",
          "Other lots may not return calls - we're personally invested in your satisfaction",
          "Corporate dealerships train for maximum profit per sale - we focus on the right fit for you",
          "Big dealers hand you off between departments - you'll work with the same person throughout"
        ]
      }
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
                <Dialog key={index} open={openDialog === value.id} onOpenChange={(open) => setOpenDialog(open ? value.id : null)}>
                  <DialogTrigger asChild>
                    <div className="automotive-card p-8 text-center cursor-pointer hover:scale-105 transition-transform duration-200">
                      <div className="mb-6">
                        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                          <IconComponent className="h-8 w-8 text-primary" />
                        </div>
                      </div>
                      <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
                      <p className="text-muted-foreground leading-relaxed mb-4">
                        {value.description}
                      </p>
                      <p className="text-primary text-sm font-medium">Click to learn more →</p>
                    </div>
                  </DialogTrigger>
                  
                  <DialogContent className="sm:max-w-lg">
                    <DialogHeader>
                      <DialogTitle className="flex items-center space-x-3 text-xl">
                        <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                          <IconComponent className="h-4 w-4 text-primary" />
                        </div>
                        <span>{value.competitiveAdvantage.title}</span>
                      </DialogTitle>
                    </DialogHeader>
                    <div className="space-y-4 mt-6">
                      {value.competitiveAdvantage.content.map((advantage, advantageIndex) => (
                        <div key={advantageIndex} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <p className="text-foreground leading-relaxed">{advantage}</p>
                        </div>
                      ))}
                    </div>
                    <div className="mt-8 pt-6 border-t border-border bg-secondary/50 -mx-6 px-6 -mb-6 pb-6">
                      <p className="text-center text-foreground">
                        <span className="block text-sm text-muted-foreground mb-2">Experience the Camvest difference</span>
                        <a href="tel:+17165781787" className="text-primary font-semibold hover:underline text-lg">
                          Call (716) 578-1787
                        </a>
                      </p>
                    </div>
                  </DialogContent>
                </Dialog>
              );
            })}
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
              <Button size="lg" className="btn-automotive">
                View Our Inventory
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" className="btn-automotive">
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