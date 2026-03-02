import { useState } from 'react';
import { cn } from '@/lib/utils';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/sections/Footer';
import { submitToGoogleSheets } from '@/lib/api';
import { CheckCircle, Rocket, Briefcase, Building2, TrendingUp, Users, MessageSquare, ArrowRight, Target, Zap, BarChart3 } from 'lucide-react';
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

function EnquiryDialog({ isOpen, onClose, title }: { isOpen: boolean; onClose: () => void; title: string }) {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', company: '' });
  const [showSuccess, setShowSuccess] = useState(false);
  const [phoneError, setPhoneError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handlePhoneChange = (value: string) => {
    const numericValue = value.replace(/[^0-9]/g, '');
    setFormData({ ...formData, phone: numericValue });
    
    if (value !== numericValue) {
      setPhoneError('Please enter numbers only');
    } else {
      setPhoneError('');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.phone.replace(/[^0-9]/g, '') !== formData.phone) {
      setPhoneError('Please enter numbers only');
      return;
    }
    
    setIsSubmitting(true);
    
    const result = await submitToGoogleSheets({
      formType: 'enquiry',
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      message: `Company: ${formData.company}`,
      source: `Enterprise Training - ${title}`,
    });
    
    setIsSubmitting(false);
    
    if (result.success) {
      setShowSuccess(true);
      setTimeout(() => {
        onClose();
        setShowSuccess(false);
        setFormData({ name: '', email: '', phone: '', company: '' });
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
              <DialogTitle className="text-2xl font-semibold text-exvia-black">{title}</DialogTitle>
              <DialogDescription className="sr-only">
                Enter your details and we will contact you about enterprise training.
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
                <Label htmlFor="email" className="text-sm font-medium text-exvia-black">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="w-full"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone" className="text-sm font-medium text-exvia-black">Phone Number</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="Enter your phone number"
                  value={formData.phone}
                  onChange={(e) => handlePhoneChange(e.target.value)}
                  required
                  className="w-full"
                />
                {phoneError && (
                  <p className="text-sm text-red-500">{phoneError}</p>
                )}
              </div>
              <div className="space-y-2">
                <Label htmlFor="company" className="text-sm font-medium text-exvia-black">Company Name</Label>
                <Input
                  id="company"
                  placeholder="Enter your company name"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="w-full"
                />
              </div>
              <Button type="submit" disabled={isSubmitting} className="w-full bg-exvia-black text-white hover:bg-exvia-black/90 py-3">
                {isSubmitting ? 'Submitting...' : 'Submit Enquiry'}
              </Button>
            </form>
          </>
        ) : (
          <div className="py-8 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold text-exvia-black mb-2">Thank You!</h3>
            <p className="text-exvia-black/70">We will contact you soon.</p>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}

function TeamTraining({ onEnquiry }: { onEnquiry: () => void }) {
  const { ref: sectionRef, isVisible } = useScrollAnimation({ threshold: 0.1 });

  const benefits = [
    "Higher productivity",
    "Faster task completion",
    "Reduced manual workload",
    "Improved documentation and communication",
    "Better time management",
    "Increased operational efficiency"
  ];

  const learningPoints = [
    "Automate repetitive tasks",
    "Create reports and presentations faster",
    "Improve research and documentation",
    "Enhance communication",
    "Support decision-making with AI",
    "Optimize daily workflows"
  ];

  const idealFor = [
    "Increase productivity",
    "Reduce routine workload",
    "Improve work quality",
    "Enable smarter workflows",
    "Future-proof their teams"
  ];

  const programTopics = [
    "AI fundamentals (non-technical)",
    "AI for proposals, reports, and communication",
    "Marketing and content creation",
    "Workflow automation",
    "AI-powered decision support"
  ];

  return (
    <div ref={sectionRef} className="space-y-16">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-exvia-black to-gray-900 rounded-3xl p-8 lg:p-12 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
              <Users className="w-6 h-6 text-blue-400" />
            </div>
            <span className="text-sm font-medium text-white/60 uppercase tracking-wider">Team Training</span>
          </div>
          <h3 className="text-2xl lg:text-3xl font-bold mb-4">
            Employee AI Training Programs
          </h3>
          <p className="text-lg text-white/80 mb-4">
            Empower Your Workforce to Work Smarter with AI
          </p>
          <p className="text-white/60 leading-relaxed max-w-2xl">
            Workplaces today demand faster execution, higher accuracy, and smarter decision-making. AI is no longer optional — it is a productivity multiplier.
          </p>
        </div>
      </div>

      {/* Why Train */}
      <div className={cn('transition-all duration-800', isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8')}>
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
            <Rocket className="w-5 h-5 text-green-600" />
          </div>
          <h4 className="text-xl font-bold text-exvia-black">Why Train Your Team in AI?</h4>
        </div>
        <p className="text-exvia-black/60 mb-6">
          Organizations that upskill their employees in AI see:
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="flex items-center gap-3 p-4 bg-exvia-subtle rounded-xl hover:bg-exvia-black hover:text-white transition-all duration-300 group"
            >
              <CheckCircle className="w-5 h-5 text-green-500 group-hover:text-green-400 flex-shrink-0" />
              <span className="text-exvia-black group-hover:text-white text-sm">{benefit}</span>
            </div>
          ))}
        </div>
        <p className="mt-6 text-exvia-black/60 italic">
          AI-trained employees become proactive problem-solvers — not just task executors.
        </p>
      </div>

      {/* Proven Impact */}
      <div className={cn('bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 transition-all duration-800', isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8')} style={{ transitionDelay: '100ms' }}>
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
            <Target className="w-5 h-5 text-white" />
          </div>
          <h4 className="text-xl font-bold text-exvia-black">Proven Impact</h4>
        </div>
        <p className="text-exvia-black/70 leading-relaxed mb-6">
          We recently delivered a 5-session in-person program titled "AI for Business: From Basics to Impact" for members of BNI, focused on entrepreneurs and business professionals.
        </p>
        <p className="text-exvia-black/70 mb-4">The program covered:</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
          {programTopics.map((topic, index) => (
            <div key={index} className="flex items-start gap-2 p-3 bg-white rounded-lg shadow-sm">
              <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-xs font-bold text-blue-600">{index + 1}</span>
              </div>
              <span className="text-sm text-exvia-black/80">{topic}</span>
            </div>
          ))}
        </div>
        <p className="mt-6 text-exvia-black/70 leading-relaxed">
          Each session was hands-on and immediately applicable, enabling participants to use AI tools from day one.
        </p>
      </div>

      {/* What Employees Learn */}
      <div className={cn('transition-all duration-800', isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8')} style={{ transitionDelay: '200ms' }}>
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
            <Zap className="w-5 h-5 text-purple-600" />
          </div>
          <h4 className="text-xl font-bold text-exvia-black">What Employees Learn</h4>
        </div>
        <p className="text-exvia-black/60 mb-6">
          Our training focuses on practical, role-based applications. Employees learn to:
        </p>
        <div className="grid md:grid-cols-2 gap-4">
          {learningPoints.map((point, index) => (
            <div key={index} className="flex items-center gap-3 p-4 bg-white border border-exvia-border rounded-xl hover:border-purple-300 hover:shadow-md transition-all duration-300">
              <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                <CheckCircle className="w-4 h-4 text-purple-600" />
              </div>
              <span className="text-exvia-black">{point}</span>
            </div>
          ))}
        </div>
        <div className="mt-6 p-4 bg-exvia-black rounded-xl text-white text-center">
          <p className="text-sm">No coding required. Fully practical. Immediately implementable.</p>
        </div>
      </div>

      {/* Ideal For */}
      <div className={cn('transition-all duration-800', isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8')} style={{ transitionDelay: '300ms' }}>
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
            <Building2 className="w-5 h-5 text-orange-600" />
          </div>
          <h4 className="text-xl font-bold text-exvia-black">Ideal for Organizations That Want To</h4>
        </div>
        <div className="flex flex-wrap gap-3">
          {idealFor.map((item, index) => (
            <span key={index} className="px-5 py-3 bg-exvia-black text-white rounded-full text-sm font-medium hover:bg-gray-800 transition-colors">
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* CTA Button */}
      <div className={cn('text-center pt-8 transition-all duration-800', isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8')} style={{ transitionDelay: '400ms' }}>
        <button
          onClick={onEnquiry}
          className="inline-flex items-center gap-3 px-8 py-4 bg-exvia-black text-white font-semibold rounded-full hover:bg-gray-800 transition-all duration-300 group"
        >
          <MessageSquare className="w-5 h-5" />
          <span>Book Consultation</span>
          <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
        </button>
      </div>
    </div>
  );
}

function BusinessIntegration({ onEnquiry }: { onEnquiry: () => void }) {
  const { ref: sectionRef, isVisible } = useScrollAnimation({ threshold: 0.1 });

  const integrationAreas = [
    "Task and workflow management",
    "Internal communication and documentation",
    "Customer interaction processes",
    "Reporting and performance analysis",
    "Marketing and outreach workflows",
    "Administrative coordination"
  ];

  const implementationSteps = [
    "Identify repetitive and time-intensive tasks suitable for AI support",
    "Streamline documentation, reporting, and internal communication",
    "Implement AI-assisted planning and workflow tracking",
    "Integrate AI into marketing and customer engagement processes",
    "Enable data-backed decision-making using AI tools",
    "Improve cross-department efficiency and coordination"
  ];

  const methodFeatures = [
    "No technical or coding background required",
    "Role-based AI use cases tailored to each department",
    "Live demonstrations and guided implementation",
    "Hands-on workflow design aligned with real business tasks",
    "Immediate deployment of practical AI tools"
  ];

  return (
    <div ref={sectionRef} className="space-y-16">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-indigo-900 to-purple-900 rounded-3xl p-8 lg:p-12 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-pink-500/10 rounded-full blur-3xl" />
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-cyan-400" />
            </div>
            <span className="text-sm font-medium text-white/60 uppercase tracking-wider">Business Integration</span>
          </div>
          <h3 className="text-2xl lg:text-3xl font-bold mb-4">
            Business Operations Integration with AI
          </h3>
          <p className="text-lg text-white/80 mb-4">
            Transforming Daily Operations Through Intelligent Systems
          </p>
          <p className="text-white/60 leading-relaxed max-w-2xl">
            AI is no longer just a personal productivity tool — it is becoming the operational backbone of modern organizations.
          </p>
        </div>
      </div>

      {/* What AI Integration Means */}
      <div className={cn('transition-all duration-800', isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8')}>
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-cyan-100 rounded-lg flex items-center justify-center">
            <Rocket className="w-5 h-5 text-cyan-600" />
          </div>
          <h4 className="text-xl font-bold text-exvia-black">What AI Integration Means for Your Business</h4>
        </div>
        <p className="text-exvia-black/60 mb-6">
          We help embed AI directly into everyday operational systems, including:
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {integrationAreas.map((area, index) => (
            <div 
              key={index} 
              className="p-5 bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl border border-cyan-100 hover:shadow-lg hover:border-cyan-300 transition-all duration-300"
            >
              <div className="w-8 h-8 bg-cyan-500 rounded-lg flex items-center justify-center mb-3">
                <span className="text-white font-bold text-sm">{index + 1}</span>
              </div>
              <p className="text-exvia-black text-sm">{area}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 p-6 bg-exvia-black rounded-2xl text-white text-center">
          <p className="text-lg">The result: AI supports your teams continuously — not occasionally.</p>
        </div>
      </div>

      {/* How We Implement */}
      <div className={cn('bg-gradient-to-r from-gray-50 to-slate-50 rounded-2xl p-8 transition-all duration-800', isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8')} style={{ transitionDelay: '100ms' }}>
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-indigo-500 rounded-lg flex items-center justify-center">
            <Target className="w-5 h-5 text-white" />
          </div>
          <h4 className="text-xl font-bold text-exvia-black">How We Implement AI Across Operations</h4>
        </div>
        <p className="text-exvia-black/70 leading-relaxed mb-6">
          Our approach is practical, structured, and business-focused. We work with your leadership and teams to:
        </p>
        <div className="space-y-3">
          {implementationSteps.map((step, index) => (
            <div key={index} className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <CheckCircle className="w-4 h-4 text-indigo-600" />
              </div>
              <span className="text-exvia-black/80">{step}</span>
            </div>
          ))}
        </div>
        <p className="mt-6 text-exvia-black/70 italic">
          We don't introduce tools randomly — we align AI with your existing business processes.
        </p>
      </div>

      {/* Our Integration Method */}
      <div className={cn('transition-all duration-800', isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8')} style={{ transitionDelay: '200ms' }}>
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-pink-100 rounded-lg flex items-center justify-center">
            <Zap className="w-5 h-5 text-pink-600" />
          </div>
          <h4 className="text-xl font-bold text-exvia-black">Our Integration Method</h4>
        </div>
        <p className="text-exvia-black/60 mb-6">
          We ensure AI adoption is smooth and sustainable:
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {methodFeatures.map((feature, index) => (
            <div key={index} className="flex items-center gap-3 p-4 bg-white border-2 border-pink-100 rounded-xl hover:border-pink-300 transition-colors">
              <div className="w-6 h-6 bg-pink-500 rounded-full flex items-center justify-center flex-shrink-0">
                <CheckCircle className="w-3 h-3 text-white" />
              </div>
              <span className="text-exvia-black text-sm">{feature}</span>
            </div>
          ))}
        </div>
        <div className="mt-8 p-6 bg-gradient-to-r from-pink-500 to-purple-500 rounded-2xl text-white text-center">
          <p className="text-lg font-medium">AI becomes part of your operational system — not an added burden.</p>
        </div>
      </div>

      {/* CTA Button */}
      <div className={cn('text-center pt-8 transition-all duration-800', isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8')} style={{ transitionDelay: '300ms' }}>
        <button
          onClick={onEnquiry}
          className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-full hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 group"
        >
          <MessageSquare className="w-5 h-5" />
          <span>Book a Strategy Call</span>
          <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
        </button>
      </div>
    </div>
  );
}

function BusinessOwners({ onEnquiry }: { onEnquiry: () => void }) {
  const { ref: sectionRef, isVisible } = useScrollAnimation({ threshold: 0.1 });

  const whyAI = [
    "Identify automation opportunities",
    "Reduce operational inefficiencies",
    "Improve marketing and customer engagement",
    "Analyze performance data effectively",
    "Make faster, smarter decisions",
    "Build AI-ready teams"
  ];

  const trainingTopics = [
    "AI fundamentals explained in simple business language",
    "Everyday AI tools for operations and communication",
    "Marketing and content creation using AI",
    "Automation of repetitive tasks",
    "AI-powered decision-making and strategic insights"
  ];

  const gains = [
    "Integrate AI into daily decision-making",
    "Use AI to analyze business data and performance",
    "Improve internal systems and workflows",
    "Guide your team in AI adoption",
    "Leverage AI for marketing, sales, and customer communication",
    "Build a scalable, AI-supported business model"
  ];

  return (
    <div ref={sectionRef} className="space-y-16">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-amber-600 to-orange-700 rounded-3xl p-8 lg:p-12 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-400/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-red-400/20 rounded-full blur-3xl" />
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
              <Briefcase className="w-6 h-6 text-yellow-300" />
            </div>
            <span className="text-sm font-medium text-white/60 uppercase tracking-wider">Business Owners</span>
          </div>
          <h3 className="text-2xl lg:text-3xl font-bold mb-4">
            AI Training for Business Owners
          </h3>
          <p className="text-lg text-white/90 mb-4">
            Lead Smarter. Decide Faster. Scale with Confidence.
          </p>
          <p className="text-white/70 leading-relaxed max-w-2xl">
            AI is not just a tool for teams — it is a strategic advantage for leaders. The difference between businesses that grow and businesses that struggle is often simple: Leadership that understands how to leverage AI.
          </p>
        </div>
      </div>

      {/* Why Business Owners Must Understand AI */}
      <div className={cn('transition-all duration-800', isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8')}>
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
            <Rocket className="w-5 h-5 text-amber-600" />
          </div>
          <h4 className="text-xl font-bold text-exvia-black">Why Business Owners Must Understand AI</h4>
        </div>
        <p className="text-exvia-black/60 mb-6 leading-relaxed">
          AI adoption is accelerating across industries. But delegating AI completely to teams without understanding it at the leadership level creates a gap. When business owners understand AI, they can:
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {whyAI.map((item, index) => (
            <div 
              key={index} 
              className="flex items-center gap-3 p-4 bg-amber-50 rounded-xl border border-amber-100 hover:bg-amber-100 transition-colors"
            >
              <div className="w-6 h-6 bg-amber-500 rounded-full flex items-center justify-center flex-shrink-0">
                <CheckCircle className="w-3 h-3 text-white" />
              </div>
              <span className="text-exvia-black text-sm">{item}</span>
            </div>
          ))}
        </div>
        <div className="mt-8 p-6 bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl text-white text-center">
          <p className="text-lg font-medium">AI literacy at leadership level creates long-term competitive advantage.</p>
        </div>
      </div>

      {/* Our Business Owner Training Approach */}
      <div className={cn('bg-gradient-to-r from-orange-50 to-amber-50 rounded-2xl p-8 transition-all duration-800', isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8')} style={{ transitionDelay: '100ms' }}>
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center">
            <Target className="w-5 h-5 text-white" />
          </div>
          <h4 className="text-xl font-bold text-exvia-black">Our Business Owner Training Approach</h4>
        </div>
        <p className="text-exvia-black/70 leading-relaxed mb-6">
          AccelerateX delivers structured AI learning experiences specifically tailored for entrepreneurs, founders, and business leaders.
        </p>
        <p className="text-exvia-black/70 mb-4">
          One such initiative was our "AI for Business: From Basics to Impact" 5-session in-person training series delivered for BNI members — focusing on practical AI implementation for business growth.
        </p>
        <p className="text-exvia-black/70 mb-4">The sessions covered:</p>
        <div className="space-y-3">
          {trainingTopics.map((topic, index) => (
            <div key={index} className="flex items-start gap-3 p-3 bg-white rounded-lg shadow-sm">
              <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-xs font-bold text-orange-600">{index + 1}</span>
              </div>
              <span className="text-exvia-black/80">{topic}</span>
            </div>
          ))}
        </div>
        <p className="mt-6 text-exvia-black/70 leading-relaxed">
          Each session was practical, hands-on, and directly applicable to real business scenarios — enabling leaders to begin using AI immediately.
        </p>
      </div>

      {/* What You'll Gain */}
      <div className={cn('transition-all duration-800', isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8')} style={{ transitionDelay: '200ms' }}>
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
            <BarChart3 className="w-5 h-5 text-green-600" />
          </div>
          <h4 className="text-xl font-bold text-exvia-black">What You'll Gain as a Business Owner</h4>
        </div>
        <p className="text-exvia-black/60 mb-6">
          After completing this training, you will be able to:
        </p>
        <div className="grid md:grid-cols-2 gap-4">
          {gains.map((gain, index) => (
            <div key={index} className="flex items-center gap-3 p-4 bg-white border-2 border-green-100 rounded-xl hover:border-green-300 hover:shadow-md transition-all duration-300">
              <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
                <CheckCircle className="w-4 h-4 text-white" />
              </div>
              <span className="text-exvia-black text-sm">{gain}</span>
            </div>
          ))}
        </div>
        <div className="mt-8 p-6 bg-exvia-black rounded-2xl text-white text-center">
          <p className="text-lg">You don't need to become technical — you need to become strategically AI-aware.</p>
        </div>
      </div>

      {/* CTA Button */}
      <div className={cn('text-center pt-8 transition-all duration-800', isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8')} style={{ transitionDelay: '300ms' }}>
        <button
          onClick={onEnquiry}
          className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold rounded-full hover:from-amber-600 hover:to-orange-600 transition-all duration-300 group"
        >
          <MessageSquare className="w-5 h-5" />
          <span>Book a Strategy Call</span>
          <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
        </button>
      </div>
    </div>
  );
}

export function EnterpriseTraining() {
  const [activeTab, setActiveTab] = useState<'team' | 'integration' | 'owners'>('team');
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [dialogTitle, setDialogTitle] = useState('');

  const handleEnquiry = (title: string) => {
    setDialogTitle(title);
    setIsDialogOpen(true);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Navigation />
      
      {/* Main Content */}
      <main className="pt-24">
        {/* Header Section */}
        <section className="w-full py-20 lg:py-28 bg-exvia-black relative overflow-hidden">
          {/* Animated background elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px] animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1s' }} />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }} />
          </div>
          
          {/* Grid pattern overlay */}
          <div className="absolute inset-0 opacity-5" style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }} />
          
          <div className="container-large px-6 lg:px-12 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6 animate-fade-in-up">
                <span className="text-xs font-geist-mono uppercase tracking-widest text-cyan-300">
                  For Organizations
                </span>
              </div>
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                Enterprise Training
              </h1>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 mx-auto mt-6 rounded-full animate-scale-in" />
              <p className="text-lg text-white/70 mt-6 leading-relaxed max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                Transform your workforce with structured AI training programs designed for teams, operations, and business leaders.
              </p>
            </div>
          </div>
        </section>

        {/* Programs Section with Tabs */}
        <section className="w-full py-24 lg:py-32 bg-white">
          <div className="container-large px-6 lg:px-12">
            {/* Tabs */}
            <div className="flex flex-wrap justify-center gap-2 mb-12">
              <button
                onClick={() => setActiveTab('team')}
                className={cn(
                  'px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2',
                  activeTab === 'team'
                    ? 'bg-exvia-black text-white'
                    : 'bg-exvia-subtle text-exvia-black/60 hover:text-exvia-black'
                )}
              >
                <Users className="w-4 h-4" />
                Team Training
              </button>
              <button
                onClick={() => setActiveTab('integration')}
                className={cn(
                  'px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2',
                  activeTab === 'integration'
                    ? 'bg-exvia-black text-white'
                    : 'bg-exvia-subtle text-exvia-black/60 hover:text-exvia-black'
                )}
              >
                <TrendingUp className="w-4 h-4" />
                Business Integration
              </button>
              <button
                onClick={() => setActiveTab('owners')}
                className={cn(
                  'px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2',
                  activeTab === 'owners'
                    ? 'bg-exvia-black text-white'
                    : 'bg-exvia-subtle text-exvia-black/60 hover:text-exvia-black'
                )}
              >
                <Briefcase className="w-4 h-4" />
                Business Owners
              </button>
            </div>

            {/* Tab Content */}
            <div className="max-w-4xl mx-auto">
              {activeTab === 'team' && <TeamTraining onEnquiry={() => handleEnquiry('Team Training Enquiry')} />}
              {activeTab === 'integration' && <BusinessIntegration onEnquiry={() => handleEnquiry('Business Integration Enquiry')} />}
              {activeTab === 'owners' && <BusinessOwners onEnquiry={() => handleEnquiry('Business Owner Training Enquiry')} />}
            </div>
          </div>
        </section>
      </main>
      
      {/* Footer */}
      <Footer />

      {/* Enquiry Dialog */}
      <EnquiryDialog 
        isOpen={isDialogOpen} 
        onClose={() => setIsDialogOpen(false)} 
        title={dialogTitle}
      />
    </div>
  );
}
