import { Star, Users, Phone } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { useState } from 'react';

const WhyChooseUs = () => {
  const [openDialog, setOpenDialog] = useState<string | null>(null);

  const features = [
    {
      id: "pricing",
      icon: Star,
      title: "Honest & Transparent Pricing",
      description: "No hidden fees, no surprises. Every price is clearly marked and fair for both parties.",
      customerBenefit: {
        title: "What This Means for You",
        content: [
          "You'll never pay more than the advertised price - no surprise fees at closing",
          "All costs are clearly listed upfront so you can budget confidently", 
          "No high-pressure tactics or bait-and-switch pricing strategies",
          "Compare our prices easily - we're confident they're fair and competitive",
          "Save time and stress by knowing exactly what you'll pay before you visit"
        ]
      }
    },
    {
      id: "experience",
      icon: Users,
      title: "25 Years Local Experience", 
      description: "Proudly serving the Depew and Buffalo communities with trusted automotive expertise and A+ BBB rating.",
      customerBenefit: {
        title: "Why This Matters to You",
        content: [
          "You're buying from proven automotive experts with extensive vehicle knowledge",
          "Our A+ BBB rating demonstrates our commitment to resolving issues fairly and professionally",
          "As a local business, our reputation depends on treating customers with integrity",
          "25 years of operation means we'll be here to support you long after your purchase",
          "Our experience helps us identify reliable vehicles and steer you away from problem cars"
        ]
      }
    },
    {
      id: "service",
      icon: Phone,
      title: "Exceptional Customer Service",
      description: "Personal attention from our knowledgeable team. We're here to help before, during, and after your purchase.",
      customerBenefit: {
        title: "How We Take Care of You",
        content: [
          "Real people answer your calls - no automated phone systems or outsourced support",
          "We take time to understand your specific needs rather than rushing you into a sale",
          "Receive personalized vehicle recommendations based on your lifestyle and budget",
          "Test drive vehicles without pressure or artificial time constraints",
          "Ongoing support after your purchase - we're invested in your long-term satisfaction"
        ]
      }
    }
  ];

  return (
    <section className="py-16 section-gray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Why Choose Camvest Inc Auto Sales?</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We've built our reputation on trust, quality, and putting our customers first. 
            Here's what sets us apart from other dealerships.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Dialog key={index} open={openDialog === feature.id} onOpenChange={(open) => setOpenDialog(open ? feature.id : null)}>
                <DialogTrigger asChild>
                  <div className="automotive-card p-8 text-center cursor-pointer hover:scale-105 transition-transform duration-200">
                    <div className="mb-6">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                        <IconComponent className="h-8 w-8 text-primary" />
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      {feature.description}
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
                      <span>{feature.customerBenefit.title}</span>
                    </DialogTitle>
                  </DialogHeader>
                  <div className="space-y-4 mt-6">
                    {feature.customerBenefit.content.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-foreground leading-relaxed">{benefit}</p>
                      </div>
                    ))}
                  </div>
                  <div className="mt-8 pt-6 border-t border-border bg-secondary/50 -mx-6 px-6 -mb-6 pb-6">
                    <p className="text-center text-foreground">
                      <span className="block text-sm text-muted-foreground mb-2">Ready to experience the difference?</span>
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

        <div className="text-center mt-12">
          <div className="bg-primary/5 border border-primary/20 rounded-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-primary">Our Promise to You</h3>
            <p className="text-lg text-foreground leading-relaxed">
              Every vehicle on our lot has been carefully inspected and priced fairly. 
              We believe in building long-term relationships with our customers, not just making a quick sale. 
              When you buy from Camvest Inc Auto Sales, you're buying from neighbors who care about your satisfaction.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;