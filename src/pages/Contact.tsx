import { useState } from 'react';
import { cn } from '@/lib/utils';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/sections/Footer';
import { submitToGoogleSheets } from '@/lib/api';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

export function Contact() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation({ threshold: 0.3 });
  const { ref: formRef, isVisible: formVisible } = useScrollAnimation({ threshold: 0.2 });
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [showSuccess, setShowSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    setIsSubmitting(true);
    
    const result = await submitToGoogleSheets({
      formType: 'contact',
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      message: formData.message,
      source: `Contact Page - ${formData.subject}`,
    });
    
    setIsSubmitting(false);
    
    if (result.success) {
      setShowSuccess(true);
      setTimeout(() => {
        setShowSuccess(false);
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      }, 3000);
    } else {
      alert(result.message);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Navigation />
      
      {/* Main Content */}
      <main className="pt-24">
        {/* Header Section */}
        <section className="w-full py-16 lg:py-24 bg-exvia-black">
          <div className="container-large px-6 lg:px-12">
            <div className="max-w-3xl">
              <span className="text-xs font-geist-mono uppercase tracking-widest text-white/50">
                Contact Us
              </span>
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white mt-4 leading-tight">
                Get in Touch
              </h1>
              <p className="text-lg text-white/70 mt-6 leading-relaxed">
                Have questions about our programs? Want to partner with us? We'd love to hear from you.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="w-full py-24 lg:py-32 bg-white">
          <div className="container-large px-6 lg:px-12">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 max-w-5xl mx-auto">
              {/* Contact Info */}
              <div ref={headerRef}>
                <div
                  className={cn(
                    'transition-all duration-800 ease-out-quart',
                    headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  )}
                >
                  <span className="text-xs font-geist-mono uppercase tracking-widest text-exvia-black/50">
                    Contact Information
                  </span>
                </div>
                <h2
                  className={cn(
                    'text-2xl lg:text-3xl font-bold text-exvia-black mt-4 mb-8 transition-all duration-800 ease-out-quart',
                    headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                  )}
                  style={{ transitionDelay: '100ms' }}
                >
                  Let's Start a Conversation
                </h2>

                <div className="space-y-6">
                  <div
                    className={cn(
                      'flex items-start gap-4 p-5 bg-exvia-subtle rounded-xl transition-all duration-800 ease-out-quart',
                      headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                    )}
                    style={{ transitionDelay: '200ms' }}
                  >
                    <div className="w-12 h-12 bg-exvia-black rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-exvia-black mb-1">Email</h3>
                      <a href="mailto:hi@theacceleratex.com" className="text-exvia-black/70 hover:text-exvia-black transition-colors">
                        hi@theacceleratex.com
                      </a>
                    </div>
                  </div>

                  <div
                    className={cn(
                      'flex items-start gap-4 p-5 bg-exvia-subtle rounded-xl transition-all duration-800 ease-out-quart',
                      headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                    )}
                    style={{ transitionDelay: '300ms' }}
                  >
                    <div className="w-12 h-12 bg-exvia-black rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-exvia-black mb-1">Phone</h3>
                      <a href="tel:+919946257018" className="text-exvia-black/70 hover:text-exvia-black transition-colors">
                        +91 9946 25 7018
                      </a>
                    </div>
                  </div>

                  <div
                    className={cn(
                      'flex items-start gap-4 p-5 bg-exvia-subtle rounded-xl transition-all duration-800 ease-out-quart',
                      headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                    )}
                    style={{ transitionDelay: '400ms' }}
                  >
                    <div className="w-12 h-12 bg-exvia-black rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-exvia-black mb-1">Location</h3>
                      <p className="text-exvia-black/70">
                        Kerala, India
                      </p>
                    </div>
                  </div>

                  {/* Office Photo */}
                  <div
                    className={cn(
                      'mt-8 transition-all duration-800 ease-out-quart',
                      headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                    )}
                    style={{ transitionDelay: '500ms' }}
                  >
                    <h3 className="font-semibold text-exvia-black mb-3">Our Office</h3>
                    <div className="rounded-xl overflow-hidden shadow-lg border border-exvia-border/50">
                      <img 
                        src="/images/office-photo.jpg" 
                        alt="AccelerateX Office" 
                        className="w-full h-auto object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div
                ref={formRef}
                className={cn(
                  'bg-exvia-subtle rounded-2xl p-8 transition-all duration-800 ease-out-quart',
                  formVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                )}
              >
                {!showSuccess ? (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid md:grid-cols-2 gap-5">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-sm font-medium text-exvia-black">Full Name</Label>
                        <Input
                          id="name"
                          placeholder="Enter your name"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          required
                          className="w-full bg-white"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-sm font-medium text-exvia-black">Email</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="Enter your email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          required
                          className="w-full bg-white"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-5">
                      <div className="space-y-2">
                        <Label htmlFor="phone" className="text-sm font-medium text-exvia-black">Phone Number</Label>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="Enter your phone number"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full bg-white"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="subject" className="text-sm font-medium text-exvia-black">Subject</Label>
                        <Select value={formData.subject} onValueChange={(value) => setFormData({ ...formData, subject: value })} required>
                          <SelectTrigger className="w-full bg-white">
                            <SelectValue placeholder="Select subject" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="general">General Inquiry</SelectItem>
                            <SelectItem value="programs">Programs Information</SelectItem>
                            <SelectItem value="partnership">Partnership</SelectItem>
                            <SelectItem value="corporate">Corporate Training</SelectItem>
                            <SelectItem value="internship">Internship</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-sm font-medium text-exvia-black">Message</Label>
                      <Textarea
                        id="message"
                        placeholder="How can we help you?"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        required
                        className="w-full bg-white min-h-[120px]"
                      />
                    </div>

                    <Button type="submit" disabled={isSubmitting} className="w-full bg-exvia-black text-white hover:bg-exvia-black/90 py-3">
                      <Send className="w-4 h-4 mr-2" />
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </Button>
                  </form>
                ) : (
                  <div className="py-12 text-center">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-exvia-black mb-2">Message Sent!</h3>
                    <p className="text-exvia-black/70">Thank you for reaching out. We'll get back to you soon.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
}
