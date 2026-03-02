import { useState } from 'react';
import { cn } from '@/lib/utils';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/sections/Footer';
import { submitToGoogleSheets } from '@/lib/api';
import { CheckCircle, Rocket, Zap, Clock, Users, Wrench, TrendingUp, Briefcase, Palette, BarChart3, MessageSquare, Target, ArrowRight, IndianRupee, GraduationCap } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';

function EnquiryDialog({ isOpen, onClose, title }: { isOpen: boolean; onClose: () => void; title: string }) {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' });
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
      source: `Programs Page - ${title}`,
    });
    
    setIsSubmitting(false);
    
    if (result.success) {
      setShowSuccess(true);
      setTimeout(() => {
        onClose();
        setShowSuccess(false);
        setFormData({ name: '', email: '', phone: '' });
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

function AIToolsMastery({ onEnquiry }: { onEnquiry: () => void }) {
  const { ref: sectionRef, isVisible } = useScrollAnimation({ threshold: 0.1 });

  const benefits = [
    "Improve productivity",
    "Save hours every week",
    "Stay career-relevant",
    "Work smarter using AI"
  ];

  const howYouLearn = [
    "100% live instructor-led sessions",
    "Monday–Friday core learning",
    "Weekend doubt-clearing & practice",
    "Small-batch interactive format",
    "1-year access to recordings"
  ];

  const whatYouLearn = [
    "Create effective prompts that generate accurate AI results",
    "Use AI for content, research, and communication",
    "Automate repetitive tasks and workflows",
    "Create presentations, visuals, and websites faster",
    "Apply AI for career growth and business productivity",
    "Increase efficiency and reduce manual workload"
  ];

  const toolsCovered = [
    "Communication Tools",
    "Content creation (image, video, audio)",
    "Project & task management",
    "Presentations & website building",
    "Automation & workflow tools",
    "Avatar & clone creation",
    "Research & education tools",
    "Productivity tools",
    "Social media growth tools",
    "Job preparation Tools"
  ];

  return (
    <div ref={sectionRef} className="space-y-16">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 rounded-3xl p-8 lg:p-12 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-400/30 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-400/30 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-3xl" />
        </div>
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center border border-white/20">
              <Wrench className="w-6 h-6 text-cyan-400" />
            </div>
            <span className="text-sm font-medium text-cyan-300 uppercase tracking-wider">AI Tools Mastery</span>
          </div>
          <h3 className="text-2xl lg:text-3xl font-bold mb-4">
            Master AI Tools. Master the Future of Work.
          </h3>
          <p className="text-white/80 leading-relaxed max-w-2xl">
            AI is transforming how work gets done. Tasks that once took hours now take minutes. The real advantage today belongs to people who know how to use AI effectively — not just those who know it exists.
          </p>
        </div>
      </div>

      {/* Benefits */}
      <div className={cn('transition-all duration-800', isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8')}>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="flex items-center gap-3 p-5 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl border border-blue-100 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                <CheckCircle className="w-4 h-4 text-white" />
              </div>
              <span className="text-exvia-black text-sm font-medium">{benefit}</span>
            </div>
          ))}
        </div>
        
        <div className="mt-8 p-6 bg-exvia-black rounded-2xl">
          <p className="text-white/90 leading-relaxed">
            Companies are already automating work using AI. Professionals using AI complete tasks faster. Students with AI skills stand out in the job market.
          </p>
          <p className="mt-4 text-cyan-400 font-medium">
            The risk today isn't AI replacing people — it's people who use AI outperforming those who don't.
          </p>
        </div>
      </div>

      {/* About the Program */}
      <div className={cn('bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-8 transition-all duration-800', isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8')} style={{ transitionDelay: '100ms' }}>
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-indigo-500 rounded-lg flex items-center justify-center">
            <Rocket className="w-5 h-5 text-white" />
          </div>
          <h4 className="text-xl font-bold text-exvia-black">About the Program</h4>
        </div>
        <p className="text-exvia-black/70 leading-relaxed mb-6">
          <strong>AI Tools Mastery & Prompt Engineering</strong> is a practical, 1-month intensive training designed to help you confidently apply AI tools in real work, studies, and business. This is not theoretical learning — it is hands-on, application-focused training where every concept is practiced live.
        </p>
        <p className="text-exvia-black/70 mb-6">
          You'll work with <strong>40+ AI Tools</strong>, real examples, and live practice.
        </p>
        <div className="flex flex-wrap gap-4">
          <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm">
            <Clock className="w-4 h-4 text-indigo-500" />
            <span className="text-sm text-exvia-black">Duration: 1 Month</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm">
            <Users className="w-4 h-4 text-indigo-500" />
            <span className="text-sm text-exvia-black">Mode: 100% Live Online</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm">
            <Target className="w-4 h-4 text-indigo-500" />
            <span className="text-sm text-exvia-black">Approach: Practical | Hands-On</span>
          </div>
        </div>
      </div>

      {/* How You Learn */}
      <div className={cn('transition-all duration-800', isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8')} style={{ transitionDelay: '200ms' }}>
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-cyan-500 rounded-lg flex items-center justify-center">
            <Zap className="w-5 h-5 text-white" />
          </div>
          <h4 className="text-xl font-bold text-exvia-black">How You Learn</h4>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {howYouLearn.map((item, index) => (
            <div key={index} className="flex items-center gap-3 p-4 bg-white border border-cyan-100 rounded-xl hover:border-cyan-300 hover:shadow-md transition-all">
              <div className="w-6 h-6 bg-cyan-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-xs font-bold text-cyan-600">{index + 1}</span>
              </div>
              <span className="text-exvia-black text-sm">{item}</span>
            </div>
          ))}
        </div>
        <p className="mt-6 text-center text-exvia-black/60 italic">
          You don't just watch — you practice in real time.
        </p>
      </div>

      {/* What You Will Learn */}
      <div className={cn('transition-all duration-800', isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8')} style={{ transitionDelay: '300ms' }}>
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center">
            <Target className="w-5 h-5 text-white" />
          </div>
          <h4 className="text-xl font-bold text-exvia-black">What You Will Be Able To Do</h4>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          {whatYouLearn.map((item, index) => (
            <div key={index} className="flex items-start gap-3 p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl">
              <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <CheckCircle className="w-3 h-3 text-white" />
              </div>
              <span className="text-exvia-black text-sm">{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Tools Covered */}
      <div className={cn('transition-all duration-800', isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8')} style={{ transitionDelay: '400ms' }}>
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center">
            <Wrench className="w-5 h-5 text-white" />
          </div>
          <h4 className="text-xl font-bold text-exvia-black">Tools & Areas Covered</h4>
        </div>
        <p className="text-exvia-black/60 mb-6">
          You will work with AI tools across key categories:
        </p>
        <div className="flex flex-wrap gap-3">
          {toolsCovered.map((tool, index) => (
            <span key={index} className="px-4 py-2 bg-exvia-black text-white rounded-full text-sm hover:bg-gray-800 transition-colors">
              {tool}
            </span>
          ))}
        </div>
      </div>

      {/* Pricing Section */}
      <div className={cn('transition-all duration-800', isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8')} style={{ transitionDelay: '450ms' }}>
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-amber-500 rounded-lg flex items-center justify-center">
            <IndianRupee className="w-5 h-5 text-white" />
          </div>
          <h4 className="text-xl font-bold text-exvia-black">Program Fees</h4>
        </div>
        
        {/* Original Price Strikethrough */}
        <div className="mb-6">
          <span className="text-lg text-exvia-black/50 line-through">Original Price: ₹12,000</span>
        </div>
        
        {/* Special Offer Badge */}
        <div className="inline-block px-4 py-2 bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-full text-sm font-semibold mb-6">
          🔥 Special Offer Running!
        </div>
        
        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Normal Classes */}
          <div className="bg-white border-2 border-blue-100 rounded-2xl p-6 hover:border-blue-300 hover:shadow-lg transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <Users className="w-5 h-5 text-blue-600" />
              </div>
              <h5 className="text-lg font-bold text-exvia-black">Normal Classes</h5>
            </div>
            <div className="mb-4">
              <span className="text-3xl font-bold text-blue-600">₹5,000</span>
              <span className="text-sm text-exvia-black/50 ml-2">only</span>
            </div>
            <ul className="space-y-2 text-sm text-exvia-black/70">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                Live instructor-led sessions
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                Access to all course materials
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                1-year recording access
              </li>
            </ul>
          </div>
          
          {/* Dedicated Practical Training */}
          <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-6 text-white relative overflow-hidden">
            {/* Recommended Badge */}
            <div className="absolute top-4 right-4 px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-semibold">
              RECOMMENDED
            </div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                <Target className="w-5 h-5 text-white" />
              </div>
              <h5 className="text-lg font-bold">With Dedicated Practical Training</h5>
            </div>
            <div className="mb-4">
              <span className="text-3xl font-bold">₹7,500</span>
              <span className="text-sm text-white/70 ml-2">only</span>
            </div>
            <ul className="space-y-2 text-sm text-white/90">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-cyan-300" />
                Everything in Normal Classes
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-cyan-300" />
                Hands-on practical sessions
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-cyan-300" />
                Personal doubt-clearing support
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-cyan-300" />
                Project-based learning
              </li>
            </ul>
          </div>
        </div>
        
        {/* Student Discount */}
        <div className="mt-6 p-4 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl border border-emerald-200">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-emerald-500 rounded-lg flex items-center justify-center">
              <GraduationCap className="w-5 h-5 text-white" />
            </div>
            <div>
              <h5 className="font-semibold text-emerald-800">Special Extra Discounts for College Students</h5>
              <p className="text-sm text-emerald-700">Contact us with your student ID to avail additional discounts!</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Button */}
      <div className={cn('text-center pt-8 transition-all duration-800', isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8')} style={{ transitionDelay: '500ms' }}>
        <button
          onClick={onEnquiry}
          className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300 group"
        >
          <MessageSquare className="w-5 h-5" />
          <span>Join now</span>
          <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
        </button>
      </div>
    </div>
  );
}

function ContentCreation({ onEnquiry }: { onEnquiry: () => void }) {
  const { ref: sectionRef, isVisible } = useScrollAnimation({ threshold: 0.1 });

  const whatYouLearn = [
    "Generate content ideas instantly",
    "Write scripts, captions, blogs, and posts using AI",
    "Create images, thumbnails, and designs faster",
    "Use AI tools for video assistance and editing workflows",
    "Produce voiceovers and audio content using AI",
    "Plan and schedule social media content efficiently",
    "Repurpose one piece of content into multiple formats",
    "Increase output without increasing workload",
    "Build a consistent and scalable content workflow"
  ];

  const toolsCovered = [
    "Video creation support tools",
    "Image generation & design tools",
    "AI voice & audio tools",
    "Writing and script-generation tools",
    "Social media planning tools",
    "Creative ideation and brainstorming tools",
    "Workflow and productivity tools for creators"
  ];

  const whyMatters = [
    "Reduce time spent on repetitive work",
    "Focus more on creative direction",
    "Produce higher-quality content consistently",
    "Stay competitive in fast-moving digital platforms",
    "Scale your content production"
  ];

  const whoIsFor = [
    "Content Creators",
    "YouTubers",
    "Instagram & Social Media Creators",
    "Video Editors",
    "Designers",
    "Influencers",
    "Digital Marketers",
    "Podcasters"
  ];

  return (
    <div ref={sectionRef} className="space-y-16">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-pink-600 via-rose-600 to-orange-600 rounded-3xl p-8 lg:p-12 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-400/30 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-pink-400/30 rounded-full blur-3xl" />
        </div>
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center border border-white/20">
              <Palette className="w-6 h-6 text-yellow-300" />
            </div>
            <span className="text-sm font-medium text-yellow-300 uppercase tracking-wider">Content Creation</span>
          </div>
          <h3 className="text-2xl lg:text-3xl font-bold mb-4">
            AI for Content Creators
          </h3>
          <p className="text-lg text-white/90 mb-4">
            Create Faster. Create Smarter. Create with AI.
          </p>
          <p className="text-white/80 leading-relaxed max-w-2xl">
            AI is transforming how creators work. Tasks that once took hours — writing scripts, editing visuals, planning posts, creating designs, or producing videos — can now be completed in minutes with the right tools.
          </p>
        </div>
      </div>

      {/* About the Program */}
      <div className={cn('bg-gradient-to-r from-rose-50 to-orange-50 rounded-2xl p-8 transition-all duration-800', isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8')}>
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-rose-500 rounded-lg flex items-center justify-center">
            <Rocket className="w-5 h-5 text-white" />
          </div>
          <h4 className="text-xl font-bold text-exvia-black">About the Program</h4>
        </div>
        <p className="text-exvia-black/70 leading-relaxed mb-6">
          <strong>AI for Content Creators</strong> is a practical, application-focused training designed to help creators, marketers, and media professionals use AI tools to simplify workflows and enhance output.
        </p>
        <p className="text-exvia-black/70 leading-relaxed">
          This program teaches you how to use AI not to replace creativity — but to amplify it. You learn how to create more, faster, and with better quality, while saving time and reducing creative burnout.
        </p>
      </div>

      {/* What You Learn */}
      <div className={cn('transition-all duration-800', isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8')} style={{ transitionDelay: '100ms' }}>
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center">
            <Target className="w-5 h-5 text-white" />
          </div>
          <h4 className="text-xl font-bold text-exvia-black">What This Program Helps You Do</h4>
        </div>
        <p className="text-exvia-black/60 mb-6">
          By the end of the program, you will be able to:
        </p>
        <div className="grid md:grid-cols-2 gap-4">
          {whatYouLearn.map((item, index) => (
            <div key={index} className="flex items-start gap-3 p-4 bg-white border-2 border-orange-100 rounded-xl hover:border-orange-300 hover:shadow-md transition-all">
              <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <CheckCircle className="w-3 h-3 text-white" />
              </div>
              <span className="text-exvia-black text-sm">{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Tools Covered */}
      <div className={cn('transition-all duration-800', isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8')} style={{ transitionDelay: '200ms' }}>
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-pink-500 rounded-lg flex items-center justify-center">
            <Wrench className="w-5 h-5 text-white" />
          </div>
          <h4 className="text-xl font-bold text-exvia-black">Tools & Creative Areas Covered</h4>
        </div>
        <p className="text-exvia-black/60 mb-6">
          You will work with AI tools across key content domains:
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {toolsCovered.map((tool, index) => (
            <div key={index} className="flex items-center gap-3 p-4 bg-gradient-to-br from-pink-50 to-rose-50 rounded-xl">
              <div className="w-8 h-8 bg-pink-500 rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-sm">{index + 1}</span>
              </div>
              <span className="text-exvia-black text-sm">{tool}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Why This Matters */}
      <div className={cn('bg-exvia-black rounded-2xl p-8 transition-all duration-800', isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8')} style={{ transitionDelay: '300ms' }}>
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-yellow-500 rounded-lg flex items-center justify-center">
            <TrendingUp className="w-5 h-5 text-exvia-black" />
          </div>
          <h4 className="text-xl font-bold text-white">Why This Matters for Creators</h4>
        </div>
        <p className="text-white/70 mb-6">
          Today's top creators are not working harder — they are working smarter. AI helps you:
        </p>
        <div className="space-y-3">
          {whyMatters.map((item, index) => (
            <div key={index} className="flex items-center gap-3">
              <div className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0">
                <CheckCircle className="w-3 h-3 text-exvia-black" />
              </div>
              <span className="text-white/80">{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Who Is This For */}
      <div className={cn('transition-all duration-800', isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8')} style={{ transitionDelay: '400ms' }}>
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center">
            <Users className="w-5 h-5 text-white" />
          </div>
          <h4 className="text-xl font-bold text-exvia-black">Who This Program Is For</h4>
        </div>
        <div className="flex flex-wrap gap-3">
          {whoIsFor.map((item, index) => (
            <span key={index} className="px-5 py-3 bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-full text-sm font-medium">
              {item}
            </span>
          ))}
        </div>
        <p className="mt-6 text-exvia-black/60 text-center">
          No technical or coding knowledge required.
        </p>
      </div>

      {/* CTA Button */}
      <div className={cn('text-center pt-8 transition-all duration-800', isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8')} style={{ transitionDelay: '500ms' }}>
        <button
          onClick={onEnquiry}
          className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-pink-500 to-orange-500 text-white font-semibold rounded-full hover:from-pink-600 hover:to-orange-600 transition-all duration-300 group"
        >
          <MessageSquare className="w-5 h-5" />
          <span>JOIN Waitlist</span>
          <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
        </button>
      </div>
    </div>
  );
}

function BusinessOwnersProgram({ onEnquiry }: { onEnquiry: () => void }) {
  const { ref: sectionRef, isVisible } = useScrollAnimation({ threshold: 0.1 });

  const whatYouAchieve = [
    "Use AI to plan and manage business operations",
    "Automate routine administrative tasks",
    "Improve internal communication and documentation",
    "Use AI tools for marketing content and campaigns",
    "Generate insights from business data",
    "Support sales processes using AI",
    "Analyze employee productivity and workflows",
    "Improve decision-making with AI-powered insights",
    "Save time and reduce operational workload"
  ];

  const businessAreas = [
    "Operations & workflow management",
    "Team coordination and task tracking",
    "Marketing content and campaign support",
    "Customer communication",
    "Data analysis and reporting",
    "Documentation and internal processes",
    "Sales support and lead handling",
    "Planning and productivity tools"
  ];

  const whyAI = [
    "Operate more efficiently",
    "Reduce dependency on manual processes",
    "Improve team productivity",
    "Make faster, data-informed decisions",
    "Scale operations without increasing workload"
  ];

  const whoIsFor = [
    "Entrepreneurs",
    "Small and Medium Business Owners",
    "Startup Founders",
    "Managers and Team Leaders",
    "Self-Employed Professionals"
  ];

  return (
    <div ref={sectionRef} className="space-y-16">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-emerald-700 via-teal-700 to-cyan-800 rounded-3xl p-8 lg:p-12 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-400/30 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-cyan-400/30 rounded-full blur-3xl" />
        </div>
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center border border-white/20">
              <Briefcase className="w-6 h-6 text-emerald-300" />
            </div>
            <span className="text-sm font-medium text-emerald-300 uppercase tracking-wider">Business Owners</span>
          </div>
          <h3 className="text-2xl lg:text-3xl font-bold mb-4">
            AI for Business Owners
          </h3>
          <p className="text-lg text-white/90 mb-4">
            Work Smarter. Scale Faster. Lead with AI.
          </p>
          <p className="text-white/80 leading-relaxed max-w-2xl">
            Running a business today is not just about strategy — it's about efficiency. From managing teams and operations to marketing, sales, customer communication, and data analysis, business owners are constantly handling multiple responsibilities.
          </p>
        </div>
      </div>

      {/* About the Program */}
      <div className={cn('bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl p-8 transition-all duration-800', isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8')}>
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-emerald-500 rounded-lg flex items-center justify-center">
            <Rocket className="w-5 h-5 text-white" />
          </div>
          <h4 className="text-xl font-bold text-exvia-black">About the Program</h4>
        </div>
        <p className="text-exvia-black/70 leading-relaxed">
          <strong>AI for Business Owners</strong> is a practical, application-focused training program designed to help entrepreneurs and business leaders integrate AI tools into daily business operations. This program does not require technical knowledge. It focuses on real business use cases, showing how AI can support management, marketing, communication, and operational efficiency.
        </p>
      </div>

      {/* What You Achieve */}
      <div className={cn('transition-all duration-800', isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8')} style={{ transitionDelay: '100ms' }}>
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-teal-500 rounded-lg flex items-center justify-center">
            <Target className="w-5 h-5 text-white" />
          </div>
          <h4 className="text-xl font-bold text-exvia-black">What This Program Helps You Achieve</h4>
        </div>
        <p className="text-exvia-black/60 mb-6">
          After completing this program, you will be able to:
        </p>
        <div className="grid md:grid-cols-2 gap-4">
          {whatYouAchieve.map((item, index) => (
            <div key={index} className="flex items-start gap-3 p-4 bg-white border-2 border-teal-100 rounded-xl hover:border-teal-300 hover:shadow-md transition-all">
              <div className="w-6 h-6 bg-teal-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <CheckCircle className="w-3 h-3 text-white" />
              </div>
              <span className="text-exvia-black text-sm">{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Business Areas */}
      <div className={cn('transition-all duration-800', isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8')} style={{ transitionDelay: '200ms' }}>
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-cyan-500 rounded-lg flex items-center justify-center">
            <BarChart3 className="w-5 h-5 text-white" />
          </div>
          <h4 className="text-xl font-bold text-exvia-black">Business Areas Covered</h4>
        </div>
        <p className="text-exvia-black/60 mb-6">
          AI tools will be applied across key business functions:
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {businessAreas.map((area, index) => (
            <div key={index} className="p-4 bg-gradient-to-br from-cyan-50 to-emerald-50 rounded-xl text-center">
              <div className="w-8 h-8 bg-cyan-500 rounded-lg flex items-center justify-center mx-auto mb-2">
                <span className="text-white font-bold text-sm">{index + 1}</span>
              </div>
              <span className="text-exvia-black text-sm">{area}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Why AI Matters */}
      <div className={cn('bg-exvia-black rounded-2xl p-8 transition-all duration-800', isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8')} style={{ transitionDelay: '300ms' }}>
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-emerald-500 rounded-lg flex items-center justify-center">
            <TrendingUp className="w-5 h-5 text-white" />
          </div>
          <h4 className="text-xl font-bold text-white">Why AI Matters for Business Owners</h4>
        </div>
        <p className="text-white/70 mb-6">
          Modern businesses that adopt AI:
        </p>
        <div className="space-y-3">
          {whyAI.map((item, index) => (
            <div key={index} className="flex items-center gap-3">
              <div className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center flex-shrink-0">
                <CheckCircle className="w-3 h-3 text-white" />
              </div>
              <span className="text-white/80">{item}</span>
            </div>
          ))}
        </div>
        <p className="mt-6 text-emerald-400">
          AI helps you shift from managing daily chaos to leading with clarity and control.
        </p>
      </div>

      {/* Who Is This For */}
      <div className={cn('transition-all duration-800', isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8')} style={{ transitionDelay: '400ms' }}>
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center">
            <Users className="w-5 h-5 text-white" />
          </div>
          <h4 className="text-xl font-bold text-exvia-black">Who This Program Is For</h4>
        </div>
        <div className="flex flex-wrap gap-3">
          {whoIsFor.map((item, index) => (
            <span key={index} className="px-5 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-full text-sm font-medium">
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* CTA Button */}
      <div className={cn('text-center pt-8 transition-all duration-800', isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8')} style={{ transitionDelay: '500ms' }}>
        <button
          onClick={onEnquiry}
          className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold rounded-full hover:from-emerald-600 hover:to-teal-600 transition-all duration-300 group"
        >
          <MessageSquare className="w-5 h-5" />
          <span>JOIN Waitlist</span>
          <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
        </button>
      </div>
    </div>
  );
}

export function Programs() {
  const [activeTab, setActiveTab] = useState<'tools' | 'content' | 'business'>('tools');
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [dialogTitle, setDialogTitle] = useState('');
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation({ threshold: 0.3 });

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
        {/* Futuristic Hero Section */}
        <section ref={heroRef} className="w-full py-16 lg:py-24 bg-exvia-black relative overflow-hidden">
          {/* Blurred Background Illustration */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-cyan-600/20" />
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[100px]" />
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/20 rounded-full blur-[100px]" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px]" />
          </div>
          
          {/* Grid Pattern Overlay */}
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }} />
          
          <div className="container-large px-6 lg:px-12 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <div
                className={cn(
                  'inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6 transition-all duration-800',
                  heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                )}
              >
                <span className="text-xs font-geist-mono uppercase tracking-widest text-cyan-300">
                  AI Training Programs
                </span>
              </div>
              
              <h1
                className={cn(
                  'text-3xl lg:text-4xl xl:text-5xl font-bold text-white leading-tight mb-6 transition-all duration-800',
                  heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                )}
                style={{ transitionDelay: '100ms' }}
              >
                Master AI with live, hands-on, structured programs designed for real-world application.
              </h1>
            </div>
          </div>
        </section>

        {/* Programs Section with Tabs */}
        <section className="w-full py-24 lg:py-32 bg-white">
          <div className="container-large px-6 lg:px-12">
            {/* Tabs */}
            <div className="flex flex-wrap justify-center gap-2 mb-12">
              <button
                onClick={() => setActiveTab('tools')}
                className={cn(
                  'px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2',
                  activeTab === 'tools'
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                    : 'bg-exvia-subtle text-exvia-black/60 hover:text-exvia-black'
                )}
              >
                <Wrench className="w-4 h-4" />
                AI Tools Mastery
              </button>
              <button
                onClick={() => setActiveTab('content')}
                className={cn(
                  'px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2',
                  activeTab === 'content'
                    ? 'bg-gradient-to-r from-pink-500 to-orange-500 text-white'
                    : 'bg-exvia-subtle text-exvia-black/60 hover:text-exvia-black'
                )}
              >
                <Palette className="w-4 h-4" />
                Content Creation
              </button>
              <button
                onClick={() => setActiveTab('business')}
                className={cn(
                  'px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2',
                  activeTab === 'business'
                    ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white'
                    : 'bg-exvia-subtle text-exvia-black/60 hover:text-exvia-black'
                )}
              >
                <Briefcase className="w-4 h-4" />
                Business Owners
              </button>
            </div>

            {/* Tab Content */}
            <div className="max-w-4xl mx-auto">
              {activeTab === 'tools' && <AIToolsMastery onEnquiry={() => handleEnquiry('AI Tools Mastery Enquiry')} />}
              {activeTab === 'content' && <ContentCreation onEnquiry={() => handleEnquiry('Content Creation Enquiry')} />}
              {activeTab === 'business' && <BusinessOwnersProgram onEnquiry={() => handleEnquiry('Business Owners Program Enquiry')} />}
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
