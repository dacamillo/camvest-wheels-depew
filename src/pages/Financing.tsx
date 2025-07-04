import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Phone, Star, Users } from 'lucide-react';
import { useState } from 'react';

const Financing = () => {
  const [loanData, setLoanData] = useState({
    loanAmount: '',
    downPayment: '',
    creditScore: '',
    monthlyIncome: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoanData({
      ...loanData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your application! We will contact you within 24 hours with pre-approval information.');
  };

  const lenders = [
    "Wells Fargo Auto Finance",
    "Capital One Auto Finance", 
    "Chase Auto Finance",
    "Local Credit Unions",
    "Specialized Bad Credit Lenders"
  ];

  const benefits = [
    {
      icon: Star,
      title: "Multiple Lender Network",
      description: "We work with over 15 lenders to find you the best rates, regardless of your credit situation."
    },
    {
      icon: Users,
      title: "Bad Credit? No Problem!",
      description: "We specialize in helping customers with less-than-perfect credit get approved for financing."
    },
    {
      icon: Phone,
      title: "Quick Pre-Approval",
      description: "Get pre-approved in minutes, not hours. Fast, easy application process."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="py-16 section-gray">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Auto Financing Made Easy</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get pre-approved for your next car loan in minutes. We work with multiple lenders 
            to find the best rates for your situation, including bad credit financing.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Financing Application */}
          <div>
            <Card className="automotive-card">
              <CardHeader>
                <CardTitle className="text-2xl">Quick Pre-Approval Application</CardTitle>
                <p className="text-muted-foreground">
                  Get started with our simple pre-approval process. No obligation and won't affect your credit score.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="loanAmount" className="block text-sm font-medium mb-2">
                      Desired Loan Amount
                    </label>
                    <Input
                      id="loanAmount"
                      name="loanAmount"
                      type="number"
                      value={loanData.loanAmount}
                      onChange={handleChange}
                      placeholder="$20,000"
                    />
                  </div>

                  <div>
                    <label htmlFor="downPayment" className="block text-sm font-medium mb-2">
                      Down Payment
                    </label>
                    <Input
                      id="downPayment"
                      name="downPayment"
                      type="number"
                      value={loanData.downPayment}
                      onChange={handleChange}
                      placeholder="$2,000"
                    />
                  </div>

                  <div>
                    <label htmlFor="creditScore" className="block text-sm font-medium mb-2">
                      Estimated Credit Score
                    </label>
                    <select 
                      className="w-full px-3 py-2 border border-input bg-background rounded-md"
                      name="creditScore"
                      value={loanData.creditScore}
                      onChange={(e) => setLoanData({...loanData, creditScore: e.target.value})}
                    >
                      <option value="">Select Range</option>
                      <option value="excellent">Excellent (750+)</option>
                      <option value="good">Good (700-749)</option>
                      <option value="fair">Fair (650-699)</option>
                      <option value="poor">Poor (600-649)</option>
                      <option value="bad">Bad Credit (Below 600)</option>
                      <option value="no-credit">No Credit History</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="monthlyIncome" className="block text-sm font-medium mb-2">
                      Monthly Income
                    </label>
                    <Input
                      id="monthlyIncome"
                      name="monthlyIncome"
                      type="number"
                      value={loanData.monthlyIncome}
                      onChange={handleChange}
                      placeholder="$4,000"
                    />
                  </div>

                  <Button type="submit" className="w-full btn-automotive">
                    Get Pre-Approved Now
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    This pre-qualification will not affect your credit score. 
                    For informational purposes only.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Financing Information */}
          <div className="space-y-8">
            {/* Benefits */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold">Why Finance with Us?</h2>
              {benefits.map((benefit, index) => {
                const IconComponent = benefit.icon;
                return (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">{benefit.title}</h3>
                      <p className="text-muted-foreground">{benefit.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Lender Network */}
            <Card className="automotive-card">
              <CardHeader>
                <CardTitle>Our Lender Network</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  We partner with trusted financial institutions to offer competitive rates:
                </p>
                <ul className="space-y-2">
                  {lenders.map((lender, index) => (
                    <li key={index} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span>{lender}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Credit Requirements */}
            <Card className="automotive-card">
              <CardHeader>
                <CardTitle>Credit Requirements</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-green-600">Excellent Credit (750+)</h4>
                    <p className="text-sm text-muted-foreground">Lowest rates available, minimal documentation required</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-600">Good Credit (650-749)</h4>
                    <p className="text-sm text-muted-foreground">Competitive rates, standard approval process</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-yellow-600">Fair Credit (550-649)</h4>
                    <p className="text-sm text-muted-foreground">Higher rates, may require larger down payment</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-red-600">Poor/No Credit (Below 550)</h4>
                    <p className="text-sm text-muted-foreground">Specialized lenders, we can still help you get approved!</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <section className="py-16 hero-gradient text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Pre-Approved?</h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Don't let credit concerns stop you from getting the car you need. 
            Our financing specialists are here to help find a solution that works for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+17165781787">
              <Button size="lg" className="bg-white text-primary hover:bg-gray-100">
                <Phone className="mr-2 h-5 w-5" />
                Call Our Finance Team
              </Button>
            </a>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
              Complete Application Online
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Financing;