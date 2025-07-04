import { Star, Users, Phone } from 'lucide-react';

const WhyChooseUs = () => {
  const features = [
    {
      icon: Star,
      title: "Honest & Transparent Pricing",
      description: "No hidden fees, no surprises. Every price is clearly marked and fair for both parties."
    },
    {
      icon: Users,
      title: "25 Years Local Experience", 
      description: "Proudly serving the Depew and Buffalo communities with trusted automotive expertise and A+ BBB rating."
    },
    {
      icon: Phone,
      title: "Exceptional Customer Service",
      description: "Personal attention from our knowledgeable team. We're here to help before, during, and after your purchase."
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
              <div key={index} className="automotive-card p-8 text-center">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <IconComponent className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
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