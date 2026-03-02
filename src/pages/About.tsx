import { cn } from '@/lib/utils';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/sections/Footer';
import { aboutConfig } from '@/config';
import { ChevronLeft, ChevronRight, Rocket, Target, Award, Users, Lightbulb, Globe, Calendar, Building2, ArrowRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const galleryImages = [
  { src: '/images/gallery-1.jpg', alt: 'AccelerateX Event' },
  { src: '/images/gallery-2.jpg', alt: 'Team Training' },
  { src: '/images/gallery-3.jpg', alt: 'Workshop Session' },
];

const milestones = [
  {
    icon: Calendar,
    title: "October 2024",
    description: "AccelerateX was established with a vision to transform AI education in Kerala."
  },
  {
    icon: Building2,
    title: "Official Launch",
    description: "Launch at Mar Athanasius College of Engineering with IAS officers, international representatives, and CXOs."
  },
  {
    icon: Globe,
    title: "Strategic Partnership",
    description: "Collaboration with Google for Developers and Novolo.ai, a US-based AI technology company."
  },
  {
    icon: Users,
    title: "Kerala's First AI Event for Engineers",
    description: "Over 2,000 students introduced to practical AI applications and global trends."
  },
  {
    icon: Award,
    title: "Internship Programs",
    description: "Successfully executed AI internship programs for 500+ students with industry exposure."
  }
];

export function About() {
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation({ threshold: 0.2 });
  const { ref: galleryRef, isVisible: galleryVisible } = useScrollAnimation({ threshold: 0.2 });
  const { ref: statsRef, isVisible: statsVisible } = useScrollAnimation({ threshold: 0.2 });
  const { ref: milestonesRef, isVisible: milestonesVisible } = useScrollAnimation({ threshold: 0.1 });
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % galleryImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextImage = () => setCurrentImage((prev) => (prev + 1) % galleryImages.length);
  const prevImage = () => setCurrentImage((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Navigation />
      
      {/* Main Content */}
      <main className="pt-24">
        {/* Hero Section with Logo */}
        <section className="w-full py-20 lg:py-32 bg-exvia-black relative overflow-hidden">
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl" />
          </div>
          <div className="container-large px-6 lg:px-12 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              {/* Logo */}
              <div className="mb-8">
                <img 
                  src="/images/logo.png" 
                  alt="AccelerateX" 
                  className="h-16 lg:h-20 w-auto mx-auto"
                />
              </div>
              <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-xs font-geist-mono uppercase tracking-widest text-white/60 mb-6">
                About Us
              </span>
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight mb-6">
                Building the Future of AI Learning
              </h1>
              <p className="text-lg lg:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
                We are building a comprehensive AI learning ecosystem designed to empower individuals and organizations to seamlessly integrate Artificial Intelligence into everyday work.
              </p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="w-full py-24 lg:py-32 bg-white">
          <div className="container-large px-6 lg:px-12">
            <div ref={contentRef} className="max-w-5xl mx-auto">
              {/* Mission Cards */}
              <div className="grid md:grid-cols-3 gap-6 mb-16">
                <div 
                  className={cn(
                    'bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 transition-all duration-800',
                    contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  )}
                >
                  <div className="w-14 h-14 bg-blue-500 rounded-xl flex items-center justify-center mb-6">
                    <Target className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-exvia-black mb-3">Our Mission</h3>
                  <p className="text-exvia-black/60 text-sm leading-relaxed">
                    To simplify complex workflows, enhance productivity, and equip people with practical AI capabilities required to thrive in an AI-driven world.
                  </p>
                </div>
                
                <div 
                  className={cn(
                    'bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 transition-all duration-800',
                    contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  )}
                  style={{ transitionDelay: '100ms' }}
                >
                  <div className="w-14 h-14 bg-purple-500 rounded-xl flex items-center justify-center mb-6">
                    <Lightbulb className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-exvia-black mb-3">Our Approach</h3>
                  <p className="text-exvia-black/60 text-sm leading-relaxed">
                    We emphasize real-world application—ensuring learners move beyond awareness and develop confidence to use AI tools effectively.
                  </p>
                </div>
                
                <div 
                  className={cn(
                    'bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-8 transition-all duration-800',
                    contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  )}
                  style={{ transitionDelay: '200ms' }}
                >
                  <div className="w-14 h-14 bg-emerald-500 rounded-xl flex items-center justify-center mb-6">
                    <Rocket className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-exvia-black mb-3">Our Vision</h3>
                  <p className="text-exvia-black/60 text-sm leading-relaxed">
                    Bridge the critical gap between knowing about AI and using AI meaningfully to improve outcomes in professional environments.
                  </p>
                </div>
              </div>

              {/* Main Story */}
              <div 
                className={cn(
                  'bg-exvia-black rounded-3xl p-8 lg:p-12 text-white relative overflow-hidden transition-all duration-800',
                  contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                )}
                style={{ transitionDelay: '300ms' }}
              >
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl" />
                <div className="relative z-10">
                  <h2 className="text-2xl lg:text-3xl font-bold mb-6">Our Story</h2>
                  <p className="text-white/80 leading-relaxed mb-6">
                    At AccelerateX, we are building a comprehensive AI learning ecosystem designed to empower individuals and organizations to seamlessly integrate Artificial Intelligence into everyday work.
                  </p>
                  <p className="text-white/80 leading-relaxed">
                    Our mission is simple yet ambitious: to simplify complex workflows, enhance productivity, and equip people with practical AI capabilities required to thrive in an AI-driven world.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Milestones Section */}
        <section className="w-full py-24 lg:py-32 bg-exvia-subtle/30">
          <div className="container-large px-6 lg:px-12">
            <div ref={milestonesRef} className="max-w-5xl mx-auto">
              <div className="text-center mb-16">
                <span className="text-xs font-geist-mono uppercase tracking-widest text-exvia-black/50 mb-4 block">
                  Our Journey
                </span>
                <h2 
                  className={cn(
                    'text-3xl lg:text-4xl font-bold text-exvia-black transition-all duration-800',
                    milestonesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                  )}
                >
                  Key Milestones
                </h2>
              </div>

              <div className="space-y-6">
                {milestones.map((milestone, index) => (
                  <div
                    key={index}
                    className={cn(
                      'flex items-start gap-6 p-6 bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-500 group',
                      milestonesVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
                    )}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <milestone.icon className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-exvia-black mb-2">{milestone.title}</h3>
                      <p className="text-exvia-black/60 leading-relaxed">{milestone.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Partnership Highlight */}
              <div 
                className={cn(
                  'mt-12 p-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl text-white transition-all duration-800',
                  milestonesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                )}
                style={{ transitionDelay: '500ms' }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                    <Globe className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Strategic Collaborations</h3>
                    <p className="text-white/70">Google for Developers & Novolo.ai</p>
                  </div>
                </div>
                <p className="text-white/80 leading-relaxed">
                  Through our partnership with Google for Developers and Novolo.ai, a US-based AI technology company, we contributed to Kerala's first major AI-focused student event where over 2,000 students were introduced to practical AI applications, global AI trends, real-world implementation strategies, and career opportunities in the AI ecosystem.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Photo Gallery Section */}
        <section className="w-full py-24 lg:py-32 bg-white">
          <div className="container-large px-6 lg:px-12">
            <div ref={galleryRef} className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <span className="text-xs font-geist-mono uppercase tracking-widest text-exvia-black/50 mb-4 block">
                  Gallery
                </span>
                <h2
                  className={cn(
                    'text-3xl lg:text-4xl font-bold text-exvia-black transition-all duration-800 ease-out-quart',
                    galleryVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                  )}
                >
                  Our Events & Workshops
                </h2>
              </div>
              
              <div 
                className={cn(
                  'relative rounded-2xl overflow-hidden shadow-2xl transition-all duration-800 ease-out-quart',
                  galleryVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                )}
                style={{ transitionDelay: '100ms' }}
              >
                {/* Image Container */}
                <div className="relative aspect-[16/9] bg-gray-100">
                  {galleryImages.map((image, index) => (
                    <img
                      key={index}
                      src={image.src}
                      alt={image.alt}
                      className={cn(
                        'absolute inset-0 w-full h-full object-cover transition-opacity duration-700',
                        index === currentImage ? 'opacity-100' : 'opacity-0'
                      )}
                    />
                  ))}
                  
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  
                  {/* Navigation Arrows */}
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110"
                  >
                    <ChevronLeft className="w-6 h-6 text-exvia-black" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110"
                  >
                    <ChevronRight className="w-6 h-6 text-exvia-black" />
                  </button>
                  
                  {/* Dots Indicator */}
                  <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
                    {galleryImages.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImage(index)}
                        className={cn(
                          'w-3 h-3 rounded-full transition-all duration-300',
                          index === currentImage 
                            ? 'bg-white w-8' 
                            : 'bg-white/50 hover:bg-white/70'
                        )}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="w-full py-24 lg:py-32 bg-exvia-black">
          <div className="container-large px-6 lg:px-12">
            <div ref={statsRef} className="text-center mb-12">
              <h2
                className={cn(
                  'text-3xl lg:text-4xl font-bold text-white transition-all duration-800 ease-out-quart',
                  statsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                )}
              >
                Our Impact
              </h2>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {aboutConfig.stats.map((stat, index) => (
                <div 
                  key={index} 
                  className="group relative p-6 bg-white/5 rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-1 border border-white/10"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative z-10">
                    <span className="block text-3xl lg:text-4xl font-black text-white leading-none mb-2 group-hover:scale-105 transition-transform duration-300">
                      {stat.value}
                    </span>
                    <span className="text-sm text-white/60 font-medium leading-tight">
                      {stat.label}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-24 lg:py-32 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-500">
          <div className="container-large px-6 lg:px-12">
            <div className="max-w-3xl mx-auto text-center text-white">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Ready to Transform Your Career with AI?
              </h2>
              <p className="text-white/80 text-lg mb-8">
                Join thousands of learners who have already started their AI journey with AccelerateX.
              </p>
              <Link
                to="/programs"
                className="inline-flex items-center gap-3 px-8 py-4 bg-white text-exvia-black font-semibold rounded-full hover:bg-white/90 transition-all duration-300 group"
              >
                <span>Explore Our Programs</span>
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
}
