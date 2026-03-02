import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { navigationConfig } from '@/config';
import { submitToGoogleSheets } from '@/lib/api';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

export function Navigation() {
  if (!navigationConfig.logo && navigationConfig.links.length === 0) return null;

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    whatsapp: '',
    interest: ''
  });
  const [showSuccess, setShowSuccess] = useState(false);
  const [phoneError, setPhoneError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handlePhoneChange = (field: 'mobile' | 'whatsapp', value: string) => {
    const numericValue = value.replace(/[^0-9]/g, '');
    setFormData({ ...formData, [field]: numericValue });
    
    if (value !== numericValue) {
      setPhoneError('Please enter numbers only');
    } else {
      setPhoneError('');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.mobile.replace(/[^0-9]/g, '') !== formData.mobile || 
        formData.whatsapp.replace(/[^0-9]/g, '') !== formData.whatsapp) {
      setPhoneError('Please enter numbers only');
      return;
    }
    
    setIsSubmitting(true);
    
    const result = await submitToGoogleSheets({
      formType: 'enquiry',
      name: formData.name,
      email: '',
      phone: formData.whatsapp || formData.mobile,
      interest: formData.interest,
      source: 'Navigation - Get Started Button',
    });
    
    setIsSubmitting(false);
    
    if (result.success) {
      setShowSuccess(true);
      setTimeout(() => {
        setIsDialogOpen(false);
        setShowSuccess(false);
        setFormData({ name: '', mobile: '', whatsapp: '', interest: '' });
      }, 3000);
    } else {
      alert(result.message);
    }
  };

  return (
    <>
      <nav
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out-circ',
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4',
          isHomePage 
            ? (isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent')
            : 'bg-exvia-black/95 backdrop-blur-md shadow-lg'
        )}
      >
        <div className="w-full px-6 lg:px-12 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <img 
                src="/images/logo.png" 
                alt="AccelerateX" 
                className="h-8 w-auto object-contain"
              />
            </Link>

            {/* Desktop Navigation */}
            {navigationConfig.links.length > 0 && (
              <div className="hidden lg:flex items-center gap-10">
                {navigationConfig.links.map((link) => (
                  <Link
                    key={link.label}
                    to={link.href}
                    className={cn(
                      "text-base transition-colors duration-500 relative group",
                      isHomePage 
                        ? (isScrolled ? "text-exvia-black/80 hover:text-exvia-black" : "text-white/90 hover:text-white")
                        : "text-white/80 hover:text-white"
                    )}
                  >
                    {link.label}
                    <span className={cn(
                      "absolute -bottom-1 left-0 w-0 h-px transition-all duration-300 group-hover:w-full",
                      isHomePage && isScrolled ? "bg-exvia-black" : "bg-white"
                    )} />
                  </Link>
                ))}
              </div>
            )}

            {/* Get Started Button with Popup */}
            {navigationConfig.contactLabel && (
              <div className="hidden lg:block">
                <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                  <Button
                    onClick={() => setIsDialogOpen(true)}
                    className={cn(
                      "px-6 py-2 rounded-lg font-medium transition-all duration-300",
                      isHomePage 
                        ? (isScrolled ? "bg-exvia-black text-white hover:bg-exvia-black/90" : "bg-transparent border border-white/50 text-white hover:bg-white/10")
                        : "bg-white text-exvia-black hover:bg-white/90"
                    )}
                  >
                    {navigationConfig.contactLabel}
                  </Button>
                  <DialogContent className="sm:max-w-md bg-white">
                    {!showSuccess ? (
                      <>
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
                              onChange={(e) => handlePhoneChange('mobile', e.target.value)}
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
                              onChange={(e) => handlePhoneChange('whatsapp', e.target.value)}
                              required
                              className="w-full"
                            />
                            {phoneError && (
                              <p className="text-sm text-red-500">{phoneError}</p>
                            )}
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
                          <Button type="submit" disabled={isSubmitting} className="w-full bg-exvia-black text-white hover:bg-exvia-black/90 py-3">
                            {isSubmitting ? 'Submitting...' : 'Submit'}
                          </Button>
                        </form>
                      </>
                    ) : (
                      <div className="py-8 text-center">
                        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                          <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <h3 className="text-xl font-semibold text-exvia-black mb-2">Thank You!</h3>
                        <p className="text-exvia-black/70">We will contact you soon.</p>
                      </div>
                    )}
                  </DialogContent>
                </Dialog>
              </div>
            )}

            {/* Mobile Menu Button */}
            {navigationConfig.links.length > 0 && (
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden relative w-10 h-10 flex flex-col justify-center items-center gap-1.5 rounded-lg transition-all duration-300"
                style={{
                  background: isHomePage && !isScrolled ? 'rgba(255,255,255,0.1)' : 'rgba(255,255,255,0.1)'
                }}
                aria-label="Toggle menu"
              >
                <span
                  className={cn(
                    'w-5 h-0.5 transition-all duration-500 ease-out-quad origin-center bg-white',
                    isMenuOpen && 'translate-y-2 rotate-[-45deg]'
                  )}
                />
                <span
                  className={cn(
                    'w-5 h-0.5 transition-all duration-300 ease-out-quad bg-white',
                    isMenuOpen && 'scale-0 opacity-0'
                  )}
                />
                <span
                  className={cn(
                    'w-5 h-0.5 transition-all duration-500 ease-out-quad origin-center bg-white',
                    isMenuOpen && '-translate-y-2 rotate-[45deg]'
                  )}
                />
              </button>
            )}
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {navigationConfig.links.length > 0 && (
        <div
          className={cn(
            'fixed inset-0 z-40 bg-exvia-black/98 backdrop-blur-xl transition-all duration-500 ease-out-cubic lg:hidden',
            isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
          )}
        >
          {/* Close button */}
          <button
            onClick={() => setIsMenuOpen(false)}
            className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          
          <div className="flex flex-col items-center justify-center h-full gap-6 px-8">
            {/* Logo */}
            <div className={cn(
              'mb-8 transition-all duration-500 ease-out-quart',
              isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            )}>
              <img src="/images/logo.png" alt="AccelerateX" className="h-10 w-auto" />
            </div>
            
            {navigationConfig.links.map((link, index) => (
              <Link
                key={link.label}
                to={link.href}
                onClick={() => setIsMenuOpen(false)}
                className={cn(
                  'text-2xl font-medium text-white/90 hover:text-white transition-all duration-500 ease-out-quart py-3 px-6 rounded-xl hover:bg-white/10',
                  isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                )}
                style={{ transitionDelay: isMenuOpen ? `${index * 80}ms` : '0ms' }}
              >
                {link.label}
              </Link>
            ))}
            <button
              onClick={() => {
                setIsMenuOpen(false);
                setIsDialogOpen(true);
              }}
              className={cn(
                'mt-6 px-8 py-4 bg-white text-exvia-black rounded-full font-semibold transition-all duration-500 ease-out-quart hover:bg-white/90',
                isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              )}
              style={{ transitionDelay: isMenuOpen ? '400ms' : '0ms' }}
            >
              {navigationConfig.contactLabel}
            </button>
          </div>
        </div>
      )}
    </>
  );
}
