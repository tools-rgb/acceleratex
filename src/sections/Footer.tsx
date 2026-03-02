import { useState, type MouseEvent } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { ArrowUpRight, MessageCircle, CheckCircle } from 'lucide-react';
import { footerConfig } from '@/config';
import { submitToGoogleSheets } from '@/lib/api';
import * as LucideIcons from 'lucide-react';
import { type ElementType } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';

function getIcon(iconName: string): ElementType {
  const icons = LucideIcons as unknown as Record<string, ElementType>;
  return icons[iconName] || LucideIcons.Circle;
}

function FreeToolsDialog({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [formData, setFormData] = useState({ name: '', whatsapp: '' });
  const [showSuccess, setShowSuccess] = useState(false);
  const [phoneError, setPhoneError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    // Only allow numbers
    const numericValue = value.replace(/[^0-9]/g, '');
    setFormData({ ...formData, whatsapp: numericValue });
    
    if (value !== numericValue) {
      setPhoneError('Please enter numbers only');
    } else {
      setPhoneError('');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.whatsapp.replace(/[^0-9]/g, '') !== formData.whatsapp) {
      setPhoneError('Please enter numbers only');
      return;
    }
    
    setIsSubmitting(true);
    
    const result = await submitToGoogleSheets({
      formType: 'freeTool',
      name: formData.name,
      email: '',
      phone: formData.whatsapp,
      toolName: 'AI Tools List',
      source: 'Footer - Free AI Tools List',
    });
    
    setIsSubmitting(false);
    
    if (result.success) {
      setShowSuccess(true);
      setTimeout(() => {
        onClose();
        setShowSuccess(false);
        setFormData({ name: '', whatsapp: '' });
      }, 3000);
    } else {
      alert(result.message);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md bg-white">
        {!showSuccess ? (
          <>
            <DialogHeader>
              <DialogTitle className="text-2xl font-semibold text-exvia-black">Download Free AI Tools List</DialogTitle>
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
                  onChange={handlePhoneChange}
                  required
                  className="w-full"
                />
                {phoneError && (
                  <p className="text-sm text-red-500">{phoneError}</p>
                )}
              </div>
              <Button type="submit" disabled={isSubmitting} className="w-full bg-exvia-black text-white hover:bg-exvia-black/90 py-3">
                <MessageCircle className="w-4 h-4 mr-2" />
                {isSubmitting ? 'Submitting...' : 'Submit'}
              </Button>
            </form>
          </>
        ) : (
          <div className="py-8 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold text-exvia-black mb-2">Thank You!</h3>
            <p className="text-exvia-black/70">We shall share the list to your WhatsApp number :)</p>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}

export function Footer() {
  if (!footerConfig.logo && footerConfig.columns.length === 0 && footerConfig.socialLinks.length === 0) return null;

  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleNavClick = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href === '#free-tools') {
      e.preventDefault();
      setIsDialogOpen(true);
    } else if (href.startsWith('#')) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const isExternalLink = (href: string) => {
    return href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('tel:');
  };

  return (
    <footer ref={ref} className="w-full bg-exvia-black text-white py-16 lg:py-24">
      <div className="container-large px-6 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div
            className={cn(
              'lg:col-span-4 space-y-6 transition-all duration-800 ease-out-quart',
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            )}
          >
            {footerConfig.logo && (
              <Link to="/" className="inline-block">
                <img src="/images/logo.png" alt="AccelerateX" className="h-8 w-auto" />
              </Link>
            )}
            {footerConfig.description && (
              <p className="text-sm text-white/60 max-w-xs leading-relaxed">
                {footerConfig.description}
              </p>
            )}

            {/* Social Links */}
            {footerConfig.socialLinks.length > 0 && (
              <div className="flex gap-3 pt-2">
                {footerConfig.socialLinks.map((social) => {
                  const Icon = getIcon(social.iconName);
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center hover:bg-white hover:text-exvia-black transition-all duration-300"
                      aria-label={social.label}
                    >
                      <Icon className="w-4 h-4" />
                    </a>
                  );
                })}
              </div>
            )}
          </div>

          {/* Links Columns */}
          {footerConfig.columns.map((column, colIndex) => (
            <div
              key={column.title}
              className={cn(
                'lg:col-span-2 transition-all duration-800 ease-out-quart',
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              )}
              style={{ transitionDelay: `${(colIndex + 1) * 100}ms` }}
            >
              <h4 className="text-xs font-geist-mono uppercase tracking-widest text-white/40 mb-4">
                {column.title}
              </h4>
              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    {isExternalLink(link.href) ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-white/70 hover:text-white transition-colors inline-flex items-center gap-1 group cursor-pointer"
                      >
                        {link.label}
                        <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                      </a>
                    ) : link.href === '#free-tools' ? (
                      <a
                        href={link.href}
                        onClick={(e) => handleNavClick(e, link.href)}
                        className="text-sm text-white/70 hover:text-white transition-colors inline-flex items-center gap-1 group cursor-pointer"
                      >
                        {link.label}
                        <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                      </a>
                    ) : (
                      <Link
                        to={link.href}
                        className="text-sm text-white/70 hover:text-white transition-colors inline-flex items-center gap-1 group cursor-pointer"
                      >
                        {link.label}
                        <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        {(footerConfig.copyright || footerConfig.credit) && (
          <div
            className={cn(
              'mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 transition-all duration-800 ease-out-quart',
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            )}
            style={{ transitionDelay: '500ms' }}
          >
            {footerConfig.copyright && (
              <p className="text-xs text-white/40">
                {footerConfig.copyright}
              </p>
            )}
            {footerConfig.credit && (
              <p className="text-xs text-white/40">
                {footerConfig.credit}
              </p>
            )}
          </div>
        )}
      </div>

      {/* Free Tools Dialog */}
      <FreeToolsDialog isOpen={isDialogOpen} onClose={() => setIsDialogOpen(false)} />
    </footer>
  );
}
