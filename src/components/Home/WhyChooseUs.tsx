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
          "💰 You'll never pay more than the sticker price - no surprise fees at closing",
          "📋 All costs are clearly listed upfront so you can budget confidently", 
          "🤝 No high-pressure tactics or bait-and-switch pricing games",
          "✅ Compare our prices easily - we're confident they're fair and competitive",
          "💡 Save time and stress by knowing exactly what you'll pay before you visit"
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
          "🏆 You're buying from proven experts who know cars inside and out",
          "🛡️ A+ BBB rating means we resolve issues fairly and professionally",
          "🏠 We're your neighbors - our reputation depends on treating you right",
          "📞 25 years means we'll still be here when you need service or support",
          "🔍 We know which vehicles are reliable and which ones to avoid"
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
          "👥 Real people answer your calls - no phone trees or outsourced support",
          "⏰ We take time to understand your needs, not rush you into a sale",
          "🎯 Get personalized vehicle recommendations based on your lifestyle and budget",
          "🚗 Test drive vehicles without pressure or time limits",
          "🤝 Ongoing support after your purchase - we want you happy long-term"
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
                
                <DialogContent className="sm:max-w-md">
                  <DialogHeader>
                    <DialogTitle className="flex items-center space-x-2">
                      <IconComponent className="h-5 w-5 text-primary" />
                      <span>{feature.customerBenefit.title}</span>
                    </DialogTitle>
                  </DialogHeader>
                  <div className="space-y-3">
                    {feature.customerBenefit.content.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-start space-x-2">
                        <span className="text-sm leading-relaxed">{benefit}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 pt-4 border-t border-border">
                    <p className="text-sm text-muted-foreground text-center">
                      Ready to experience the difference? Call us at{' '}
                      <a href="tel:+17166831234" className="text-primary font-semibold hover:underline">
                        (716) 683-1234
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