import { cn } from '@/lib/utils';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/sections/Footer';
import { Users, MessageCircle, Share2, Lightbulb, Rocket, GraduationCap, Briefcase, Palette, Store, Globe, ArrowRight } from 'lucide-react';

export function Community() {
  const { ref: audienceRef, isVisible: audienceVisible } = useScrollAnimation({ threshold: 0.2 });
  const { ref: whyRef, isVisible: whyVisible } = useScrollAnimation({ threshold: 0.2 });
  const { ref: collabRef, isVisible: collabVisible } = useScrollAnimation({ threshold: 0.2 });

  const audienceGroups = [
    { icon: GraduationCap, label: "Students exploring AI" },
    { icon: Briefcase, label: "Internship participants" },
    { icon: Rocket, label: "Working professionals upgrading skills" },
    { icon: Palette, label: "Content creators using AI" },
    { icon: Store, label: "Business owners adopting AI" },
    { icon: Globe, label: "Anyone who wants to stay relevant in the AI era" },
  ];

  const whyBenefits = [
    { icon: Lightbulb, text: "Stay updated with minimal effort" },
    { icon: Share2, text: "Learn from real-world use cases" },
    { icon: MessageCircle, text: "Get guidance when you're stuck" },
    { icon: Rocket, text: "Discover opportunities early" },
  ];

  const collaborationItems = [
    "Share useful prompts",
    "Discuss AI tool experiences",
    "Solve workflow challenges",
    "Exchange learning resources",
  ];

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
                Join Our Community
              </span>
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white mt-4 leading-tight">
                AccelerateX Community
              </h1>
              <p className="text-lg text-white/70 mt-6 leading-relaxed">
                Connect with fellow AI learners, share insights, and grow together in the rapidly evolving world of artificial intelligence.
              </p>
              
              {/* WhatsApp Join Button */}
              <a 
                href="https://chat.whatsapp.com/Ch58MG1IMvt3Z0IhqOlqqw" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 mt-8 px-8 py-4 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-full transition-all duration-300 group"
              >
                <MessageCircle className="w-6 h-6" />
                <span>Join WhatsApp Community</span>
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </section>

        {/* Who This Community Is For */}
        <section className="w-full py-24 lg:py-32 bg-white">
          <div className="container-large px-6 lg:px-12">
            <div ref={audienceRef} className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <div
                  className={cn(
                    'transition-all duration-800 ease-out-quart',
                    audienceVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  )}
                >
                  <span className="text-xs font-geist-mono uppercase tracking-widest text-exvia-black/50">
                    🎯 Who This Community Is For
                  </span>
                </div>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {audienceGroups.map((group, index) => (
                  <div
                    key={index}
                    className={cn(
                      'flex items-center gap-4 p-5 bg-exvia-subtle rounded-xl transition-all duration-500 hover:bg-exvia-black hover:text-white group cursor-default',
                      audienceVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                    )}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <div className="w-10 h-10 bg-exvia-black group-hover:bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors duration-300">
                      <group.icon className="w-5 h-5 text-white group-hover:text-white" />
                    </div>
                    <span className="text-sm font-medium text-exvia-black group-hover:text-white transition-colors duration-300">
                      {group.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Why Community Matters */}
        <section className="w-full py-24 lg:py-32 bg-exvia-subtle/30">
          <div className="container-large px-6 lg:px-12">
            <div ref={whyRef} className="max-w-4xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div
                    className={cn(
                      'transition-all duration-800 ease-out-quart',
                      whyVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                    )}
                  >
                    <span className="text-xs font-geist-mono uppercase tracking-widest text-exvia-black/50">
                      💡 Why Community Matters in AI Learning
                    </span>
                  </div>
                  <h2
                    className={cn(
                      'text-2xl lg:text-3xl font-bold text-exvia-black mt-4 mb-6 transition-all duration-800 ease-out-quart',
                      whyVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                    )}
                    style={{ transitionDelay: '100ms' }}
                  >
                    AI evolves rapidly
                  </h2>
                  <p
                    className={cn(
                      'text-lg text-exvia-black/70 leading-relaxed mb-8 transition-all duration-800 ease-out-quart',
                      whyVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                    )}
                    style={{ transitionDelay: '200ms' }}
                  >
                    Tools, workflows, and best practices change constantly. Being part of a learning network ensures you stay ahead of the curve.
                  </p>
                  
                  <div className="space-y-4">
                    {whyBenefits.map((benefit, index) => (
                      <div
                        key={index}
                        className={cn(
                          'flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm transition-all duration-500',
                          whyVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-6'
                        )}
                        style={{ transitionDelay: `${300 + index * 100}ms` }}
                      >
                        <div className="w-10 h-10 bg-exvia-black rounded-lg flex items-center justify-center flex-shrink-0">
                          <benefit.icon className="w-5 h-5 text-white" />
                        </div>
                        <span className="text-sm font-medium text-exvia-black">{benefit.text}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div
                  className={cn(
                    'bg-exvia-black rounded-2xl p-8 lg:p-10 transition-all duration-800 ease-out-quart',
                    whyVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  )}
                  style={{ transitionDelay: '400ms' }}
                >
                  <p className="text-xl text-white/90 leading-relaxed italic">
                    "Community turns learning into a continuous journey, not a one-time event."
                  </p>
                  <div className="mt-6 pt-6 border-t border-white/20">
                    <p className="text-white/60 text-sm">
                      Join thousands of AI enthusiasts who are learning, sharing, and growing together.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Built Around Collaboration */}
        <section className="w-full py-24 lg:py-32 bg-white">
          <div className="container-large px-6 lg:px-12">
            <div ref={collabRef} className="max-w-4xl mx-auto text-center">
              <div
                className={cn(
                  'transition-all duration-800 ease-out-quart',
                  collabVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                )}
              >
                <span className="text-xs font-geist-mono uppercase tracking-widest text-exvia-black/50">
                  🌱 Built Around Collaboration
                </span>
              </div>
              <h2
                className={cn(
                  'text-2xl lg:text-3xl font-bold text-exvia-black mt-4 mb-6 transition-all duration-800 ease-out-quart',
                  collabVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                )}
                style={{ transitionDelay: '100ms' }}
              >
                Members help each other
              </h2>
              <p
                className={cn(
                  'text-lg text-exvia-black/70 mb-10 transition-all duration-800 ease-out-quart',
                  collabVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                )}
                style={{ transitionDelay: '200ms' }}
              >
                It's a space driven by collective growth
              </p>

              <div className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto">
                {collaborationItems.map((item, index) => (
                  <div
                    key={index}
                    className={cn(
                      'flex items-center gap-3 p-5 bg-exvia-subtle rounded-xl transition-all duration-500 hover:bg-exvia-black hover:text-white group cursor-default',
                      collabVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                    )}
                    style={{ transitionDelay: `${300 + index * 100}ms` }}
                  >
                    <div className="w-8 h-8 bg-exvia-black group-hover:bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors duration-300">
                      <Users className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-sm font-medium text-exvia-black group-hover:text-white transition-colors duration-300">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div
                className={cn(
                  'mt-12 transition-all duration-800 ease-out-quart',
                  collabVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                )}
                style={{ transitionDelay: '700ms' }}
              >
                <a 
                  href="https://chat.whatsapp.com/Ch58MG1IMvt3Z0IhqOlqqw" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-full transition-all duration-300 group"
                >
                  <MessageCircle className="w-6 h-6" />
                  <span>Join Our WhatsApp Community</span>
                  <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
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
