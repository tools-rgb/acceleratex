import { } from 'react';
import { cn } from '@/lib/utils';
import { useScrollAnimation, useStaggerAnimation } from '@/hooks/useScrollAnimation';
import { aboutConfig } from '@/config';

export function About() {
  if (!aboutConfig.description && aboutConfig.stats.length === 0 && aboutConfig.images.length === 0) return null;

  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation({ threshold: 0.2 });
  const { containerRef: imagesRef, visibleItems } = useStaggerAnimation(aboutConfig.images.length || 4, 150);

  return (
    <section id="about" className="w-full py-16 lg:py-20 bg-white">
      <div className="container-large px-6 lg:px-12">
        <div ref={sectionRef} className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            {/* Section Label */}
            {aboutConfig.label && (
              <div
                className={cn(
                  'transition-all duration-800 ease-out-quart',
                  sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                )}
              >
                <span className="text-xs font-geist-mono uppercase tracking-widest text-exvia-black/50">
                  {aboutConfig.label}
                </span>
              </div>
            )}

            {/* Main Text */}
            {aboutConfig.description && (
              <div
                className={cn(
                  'transition-all duration-800 ease-out-quart',
                  sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                )}
                style={{ transitionDelay: '100ms' }}
              >
                <p className="text-lg lg:text-xl text-exvia-black leading-relaxed text-justify font-light tracking-wide">
                  {aboutConfig.description}
                </p>
              </div>
            )}

            {/* Stats - Uniform Feature Boxes with Gradient Hover */}
            {aboutConfig.stats.length > 0 && (
              <div
                className={cn(
                  'grid grid-cols-2 gap-4 pt-8 transition-all duration-800 ease-out-quart',
                  sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                )}
                style={{ transitionDelay: '200ms' }}
              >
                {aboutConfig.stats.map((stat, index) => (
                  <div 
                    key={index} 
                    className="group relative p-6 bg-exvia-black rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-1"
                    style={{
                      background: 'linear-gradient(135deg, #1a1a1a 0%, #0d0d0d 100%)',
                    }}
                  >
                    {/* Gradient overlay on hover */}
                    <div 
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{
                        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)',
                      }}
                    />
                    
                    {/* Dark overlay to maintain readability */}
                    <div className="absolute inset-0 bg-exvia-black/80 group-hover:bg-exvia-black/60 transition-colors duration-500" />
                    
                    {/* Decorative gradient orb */}
                    <div 
                      className="absolute -top-8 -right-8 w-24 h-24 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{
                        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                      }}
                    />
                    
                    {/* Content */}
                    <div className="relative z-10">
                      <span className="block text-3xl lg:text-4xl font-black text-white leading-none mb-2 group-hover:scale-105 transition-transform duration-300">
                        {stat.value}
                      </span>
                      <span className="text-sm text-white/70 font-medium leading-tight group-hover:text-white/90 transition-colors duration-300">
                        {stat.label}
                      </span>
                    </div>
                    
                    {/* Bottom accent line */}
                    <div 
                      className="absolute bottom-0 left-0 right-0 h-1 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
                      style={{
                        background: 'linear-gradient(90deg, #667eea 0%, #764ba2 50%, #f093fb 100%)',
                      }}
                    />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Right Column - Image Grid */}
          {aboutConfig.images.length > 0 && (
            <div ref={imagesRef} className="grid grid-cols-2 gap-4">
              {aboutConfig.images.map((image, index) => (
                <div
                  key={index}
                  className={cn(
                    'relative overflow-hidden transition-all duration-700 ease-out-quart',
                    index % 2 === 1 ? 'mt-8' : '',
                    visibleItems[index] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  )}
                >
                  <div className="aspect-[4/5] relative group cursor-pointer">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover transition-transform duration-500 ease-out-quad group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-exvia-black/0 group-hover:bg-exvia-black/10 transition-colors duration-300" />
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
