import { cn } from '@/lib/utils';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Globe, Award, Users, Lightbulb } from 'lucide-react';

export function Partnership() {
  const { ref: sectionRef, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section id="partnership" className="w-full py-24 lg:py-32 bg-exvia-subtle">
      <div className="container-large px-6 lg:px-12">
        <div ref={sectionRef} className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div
              className={cn(
                'transition-all duration-800 ease-out-quart',
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              )}
            >
              <span className="text-xs font-geist-mono uppercase tracking-widest text-exvia-black/50">
                Our Partners
              </span>
            </div>
            <h2
              className={cn(
                'text-3xl lg:text-4xl xl:text-5xl font-bold text-exvia-black mt-4 transition-all duration-800 ease-out-quart',
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              )}
              style={{ transitionDelay: '100ms' }}
            >
              Powered by Industry Leaders
            </h2>
          </div>

          {/* Partner Logos */}
          <div
            className={cn(
              'flex flex-wrap justify-center items-center gap-8 lg:gap-16 mb-12 transition-all duration-800 ease-out-quart',
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            )}
            style={{ transitionDelay: '200ms' }}
          >
            {/* Google for Developers */}
            <div className="flex items-center gap-3 px-6 py-4 bg-white rounded-xl shadow-sm">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 via-red-500 to-yellow-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">G</span>
              </div>
              <div>
                <p className="font-semibold text-exvia-black">Google for Developers</p>
                <p className="text-xs text-exvia-black/50">Official Partner</p>
              </div>
            </div>

            {/* Novolo.ai */}
            <div className="flex items-center gap-3 px-6 py-4 bg-white rounded-xl shadow-sm">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-pink-500 rounded-lg flex items-center justify-center">
                <Lightbulb className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="font-semibold text-exvia-black">Novolo.ai</p>
                <p className="text-xs text-exvia-black/50">AI Technology Partner</p>
              </div>
            </div>
          </div>

          {/* Description */}
          <div
            className={cn(
              'bg-white rounded-2xl p-8 lg:p-10 shadow-sm transition-all duration-800 ease-out-quart',
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            )}
            style={{ transitionDelay: '300ms' }}
          >
            <p className="text-lg text-exvia-black/80 leading-relaxed text-center">
              AccelerateX is proud to be an official partner of <strong>Google for Developers</strong> and <strong>Novolo.ai</strong>, 
              a US-based AI technology company known for its focus on applied AI solutions and industry-oriented innovation. 
              Through this partnership, we were part of Kerala's first major AI-focused student event, where over 
              <strong> 2,000 students</strong> were introduced to practical AI applications, global AI trends, and 
              real-world implementation possibilities.
            </p>
            
            <div className="mt-6 pt-6 border-t border-exvia-border">
              <p className="text-exvia-black/70 leading-relaxed text-center">
                Our impact extends further through the successful execution of AI internship programs for more than 
                <strong> 1,300+ students</strong>, offering hands-on experience aligned with industry expectations. 
                In addition, we have organized multiple seminars and workshops across colleges to spread AI awareness 
                and encourage responsible, productive adoption of AI technologies among students and professionals.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-8 pt-8 border-t border-exvia-border">
              <div className="text-center">
                <div className="w-12 h-12 bg-exvia-subtle rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Users className="w-6 h-6 text-exvia-black" />
                </div>
                <p className="text-2xl font-bold text-exvia-black">2,000+</p>
                <p className="text-sm text-exvia-black/60">Students Reached</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-exvia-subtle rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Award className="w-6 h-6 text-exvia-black" />
                </div>
                <p className="text-2xl font-bold text-exvia-black">1,300+</p>
                <p className="text-sm text-exvia-black/60">Internships</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-exvia-subtle rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Globe className="w-6 h-6 text-exvia-black" />
                </div>
                <p className="text-2xl font-bold text-exvia-black">Kerala's</p>
                <p className="text-sm text-exvia-black/60">First AI Event</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-exvia-subtle rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Lightbulb className="w-6 h-6 text-exvia-black" />
                </div>
                <p className="text-2xl font-bold text-exvia-black">Multiple</p>
                <p className="text-sm text-exvia-black/60">Workshops</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
