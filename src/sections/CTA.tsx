import { useState } from 'react';
import { cn } from '@/lib/utils';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { ArrowRight, Mail } from 'lucide-react';
import { ctaConfig } from '@/config';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

export function CTA() {
  if (!ctaConfig.heading && !ctaConfig.description) return null;

  const { ref: sectionRef, isVisible } = useScrollAnimation({ threshold: 0.3 });
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    whatsapp: '',
    interest: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('Form submitted:', formData);
    alert('Thank you for your interest! We will contact you soon.');
    setIsDialogOpen(false);
    setFormData({ name: '', mobile: '', whatsapp: '', interest: '' });
  };

  return (
    <section id="contact" className="relative w-full py-20 lg:py-28 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={ctaConfig.backgroundImage}
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-exvia-black/60" />
      </div>

      {/* Content */}
      <div ref={sectionRef} className="relative z-10 container-large px-6 lg:px-12">
        <div className="max-w-3xl mx-auto text-center">
          {/* Role Tags */}
          {ctaConfig.tags.length > 0 && (
            <div
              className={cn(
                'flex flex-wrap justify-center gap-3 mb-8 transition-all duration-800 ease-out-quart',
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              )}
            >
              {ctaConfig.tags.map((tag, index) => (
                <span key={index} className="px-4 py-2 text-xs font-geist-mono text-white/80 border border-white/20 rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* Main Heading */}
          {ctaConfig.heading && (
            <h2
              className={cn(
                'text-3xl lg:text-5xl font-semibold text-white leading-tight transition-all duration-800 ease-out-quart',
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              )}
              style={{ transitionDelay: '100ms' }}
            >
              {ctaConfig.heading}
            </h2>
          )}

          {/* Subtext */}
          {ctaConfig.description && (
            <p
              className={cn(
                'mt-6 text-lg text-white/70 max-w-xl mx-auto transition-all duration-800 ease-out-quart',
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              )}
              style={{ transitionDelay: '200ms' }}
            >
              {ctaConfig.description}
            </p>
          )}

          {/* CTA Buttons */}
          <div
            className={cn(
              'flex flex-col sm:flex-row items-center justify-center gap-4 mt-10 transition-all duration-800 ease-out-quart',
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            )}
            style={{ transitionDelay: '300ms' }}
          >
            {ctaConfig.buttonText && (
              <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <DialogTrigger asChild>
                  <button className="inline-flex items-center gap-2 px-8 py-4 bg-white text-exvia-black text-base font-medium rounded-lg hover:bg-white/90 transition-all duration-300 group">
                    <span>{ctaConfig.buttonText}</span>
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-md bg-white">
                  <DialogHeader>
                    <DialogTitle className="text-2xl font-semibold text-exvia-black">Get Started with AccelerateX</DialogTitle>
                    <DialogDescription className="sr-only">
                      Fill out the form and we will contact you soon.
                    </DialogDescription>
                  </DialogHeader>
                  <form onSubmit={handleSubmit} className="space-y-4 mt-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-sm font-medium text-exvia-black">Full Name</Label>
                      <Input
                        id="name"
                        placeholder="Enter your full name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                        className="w-full"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="mobile" className="text-sm font-medium text-exvia-black">Mobile Number</Label>
                      <Input
                        id="mobile"
                        type="tel"
                        placeholder="Enter your mobile number"
                        value={formData.mobile}
                        onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                        required
                        className="w-full"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="whatsapp" className="text-sm font-medium text-exvia-black">WhatsApp Number</Label>
                      <Input
                        id="whatsapp"
                        type="tel"
                        placeholder="Enter your WhatsApp number"
                        value={formData.whatsapp}
                        onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                        required
                        className="w-full"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="interest" className="text-sm font-medium text-exvia-black">Interest Area in AI</Label>
                      <Select value={formData.interest} onValueChange={(value) => setFormData({ ...formData, interest: value })} required>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select your interest area" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="prompt-engineering">Prompt Engineering</SelectItem>
                          <SelectItem value="ai-tools">AI Tools Mastery</SelectItem>
                          <SelectItem value="automation">Task Automation</SelectItem>
                          <SelectItem value="content-creation">AI Content Creation</SelectItem>
                          <SelectItem value="business-intelligence">Business Intelligence</SelectItem>
                          <SelectItem value="enterprise">Enterprise Solutions</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <Button type="submit" className="w-full bg-exvia-black text-white hover:bg-exvia-black/90 py-3">
                      Submit
                    </Button>
                  </form>
                </DialogContent>
              </Dialog>
            )}

            {ctaConfig.email && (
              <a
                href={`mailto:${ctaConfig.email}`}
                className="inline-flex items-center gap-2 text-sm text-white/80 hover:text-white transition-colors group"
              >
                <Mail className="w-4 h-4" />
                <span>{ctaConfig.email}</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
