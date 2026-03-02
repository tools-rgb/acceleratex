import { useEffect, useState, useRef, useCallback } from 'react';
import { cn } from '@/lib/utils';
import { heroConfig } from '@/config';
import { submitToGoogleSheets } from '@/lib/api';
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

const boxSize = 450;
const halfBox = boxSize / 2;

export function Hero() {
  if (!heroConfig.name && heroConfig.roles.length === 0) return null;

  const [isLoaded, setIsLoaded] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', whatsapp: '' });
  const [showSuccess, setShowSuccess] = useState(false);
  const [whatsappError, setWhatsappError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLElement>) => {
    const section = e.currentTarget;
    const rect = section.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    section.style.setProperty('--mouse-x', `${x - halfBox}px`);
    section.style.setProperty('--mouse-y', `${y - halfBox}px`);
  }, []);

  const handleWhatsappChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    // Only allow numbers
    const numericValue = value.replace(/[^0-9]/g, '');
    setFormData({ ...formData, whatsapp: numericValue });
    
    if (value !== numericValue) {
      setWhatsappError('Please enter numbers only');
    } else {
      setWhatsappError('');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.whatsapp.replace(/[^0-9]/g, '') !== formData.whatsapp) {
      setWhatsappError('Please enter numbers only');
      return;
    }
    
    setIsSubmitting(true);
    
    const result = await submitToGoogleSheets({
      formType: 'freeTool',
      name: formData.name,
      email: '',
      phone: formData.whatsapp,
      toolName: 'AI Tools List',
      source: 'Hero - Download Free AI Tools Button',
    });
    
    setIsSubmitting(false);
    
    if (result.success) {
      setShowSuccess(true);
      setTimeout(() => {
        setIsDialogOpen(false);
        setShowSuccess(false);
        setFormData({ name: '', whatsapp: '' });
      }, 3000);
    } else {
      alert(result.message);
    }
  };

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative w-full min-h-screen overflow-hidden bg-neutral-900 cursor-none"
      onMouseMove={handleMouseMove}
      style={{ '--mouse-x': 'calc(42vw - 200px)', '--mouse-y': 'calc(28vh - 200px)' } as React.CSSProperties}
    >
      {/* Background Image with Blur */}
      <div
        className={cn(
          'absolute inset-0 transition-opacity duration-[1800ms]',
          isLoaded && imageLoaded ? 'opacity-100' : 'opacity-0'
        )}
      >
        <img
          src={heroConfig.backgroundImage}
          alt="Hero Background"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ filter: 'blur(15px) brightness(0.7)' }}
          onLoad={() => setImageLoaded(true)}
        />
      </div>

      {/* Sharp Image Container - uses CSS variables for position */}
      <div
        className={cn(
          'absolute top-0 left-0 overflow-hidden pointer-events-none z-20',
          isLoaded && imageLoaded ? 'opacity-100' : 'opacity-0'
        )}
        style={{
          width: boxSize,
          height: boxSize,
          transform: 'translate3d(var(--mouse-x), var(--mouse-y), 0)',
          willChange: 'transform',
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            transform: 'translate3d(calc(var(--mouse-x) * -1), calc(var(--mouse-y) * -1), 0)',
            width: '100vw',
            height: '100vh',
            willChange: 'transform',
          }}
        >
          <img
            src={heroConfig.backgroundImage}
            alt="Hero Sharp"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Square border frame */}
      <div
        className={cn(
          'absolute top-0 left-0 pointer-events-none z-20',
          isLoaded && imageLoaded ? 'opacity-100' : 'opacity-0'
        )}
        style={{
          width: boxSize,
          height: boxSize,
          border: '1px solid rgba(255,255,255,0.4)',
          transform: 'translate3d(var(--mouse-x), var(--mouse-y), 0)',
          willChange: 'transform',
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-4 h-px bg-white/60" />
          <div className="absolute w-px h-4 bg-white/60" />
        </div>
      </div>

      {/* Content Container - moved down to show robot's finger */}
      <div className="relative z-30 flex flex-col items-center justify-start min-h-screen px-6 lg:px-12 pt-[35vh]">
        {/* Tagline - on top */}
        <div
          className={cn(
            'text-center transition-all duration-[1200ms] ease-out-quart',
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          )}
          style={{ transitionDelay: '500ms' }}
        >
          <p className="text-[clamp(1rem,2.5vw,1.75rem)] font-medium text-white/90 tracking-wide whitespace-nowrap">
            Don't Just Learn AI — Make AI Work For You
          </p>
        </div>

        {/* Main Heading - AccelerateX */}
        <div
          className={cn(
            'text-center mt-4 transition-all duration-[1200ms] ease-out-quart',
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          )}
          style={{ transitionDelay: '600ms' }}
        >
          <h1 className="text-[clamp(3rem,12vw,12rem)] font-black text-white tracking-[-0.04em] leading-[0.85]">
            {heroConfig.name}
          </h1>
        </div>

        {/* Download Button - close to AccelerateX */}
        <div
          className={cn(
            'mt-6 transition-all duration-[1200ms] ease-out-quart',
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          )}
          style={{ transitionDelay: '700ms' }}
        >
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <button className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/30 rounded-full text-white text-base font-medium hover:bg-white/20 transition-all duration-300 group">
                <span>Download Free AI Tools List</span>
                <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-y-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md bg-white">
              {!showSuccess ? (
                <>
                  <DialogHeader>
                    <DialogTitle className="text-2xl font-semibold text-exvia-black">Download Free AI Tools List</DialogTitle>
                    <DialogDescription className="sr-only">
                      Enter your details to receive the AI tools list on WhatsApp.
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
                      <Label htmlFor="whatsapp" className="text-sm font-medium text-exvia-black">WhatsApp Number</Label>
                      <Input
                        id="whatsapp"
                        type="tel"
                        placeholder="Enter your WhatsApp number"
                        value={formData.whatsapp}
                        onChange={handleWhatsappChange}
                        required
                        className="w-full"
                      />
                      {whatsappError && (
                        <p className="text-sm text-red-500">{whatsappError}</p>
                      )}
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
                  <p className="text-exvia-black/70">We shall share the list to your whatsapp number :)</p>
                </div>
              )}
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </section>
  );
}
