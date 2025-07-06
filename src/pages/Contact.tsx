import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin, Phone, Clock } from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will contact you soon.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="py-16 section-gray">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Contact Camvest Inc Auto Sales</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to find your next car? We're here to help. Visit our lot, give us a call, 
            or send us a message.
          </p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <Card className="automotive-card">
                <CardHeader>
                  <CardTitle className="text-2xl">Send Us a Message</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Full Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your.email@example.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium mb-2">
                        Phone Number
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="(716) 555-0123"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2">
                        Message *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us what you're looking for or any questions you have..."
                        rows={4}
                      />
                    </div>

                    <Button type="submit" className="w-full btn-automotive">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Business Info */}
              <Card className="automotive-card">
                <CardHeader>
                  <CardTitle className="text-2xl">Visit Our Dealership</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <MapPin className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Address</h3>
                    <p className="text-muted-foreground">
                      5222 Transit Rd<br />
                      Depew, NY 14043
                    </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Phone className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Phone</h3>
                      <a 
                        href="tel:+17165781787" 
                        className="text-primary hover:underline font-semibold"
                      >
                        (716) 578-1787
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Clock className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Business Hours</h3>
                        <div className="text-muted-foreground space-y-1">
                          <div>Monday - Friday: 10:00 AM - 5:00 PM</div>
                          <div>Saturday: 10:00 AM - 3:00 PM</div>
                          <div>Sunday: Closed</div>
                        </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Map Placeholder */}
              <Card className="automotive-card">
                <CardHeader>
                  <CardTitle className="text-xl">Find Us</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video bg-secondary rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="h-12 w-12 text-primary mx-auto mb-2" />
                      <p className="text-muted-foreground">
                        Interactive map will be integrated here
                      </p>
                      <Button 
                        variant="outline" 
                        className="mt-4"
                        onClick={() => window.open('https://maps.google.com/?q=5222+Transit+Rd+Depew+NY+14043', '_blank')}
                      >
                        Open in Google Maps
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Call CTA */}
              <div className="hero-gradient text-white p-8 rounded-lg text-center">
                <h3 className="text-2xl font-bold mb-4">Need Immediate Assistance?</h3>
                <p className="mb-6 opacity-90">
                  Speak directly with our sales team right now. We're here to help!
                </p>
                <a href="tel:+17165781787">
                  <Button size="lg" className="bg-white text-primary hover:bg-gray-100">
                    <Phone className="mr-2 h-5 w-5" />
                    Call Now: (716) 578-1787
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;