import { type ElementType } from 'react';
import { cn } from '@/lib/utils';
import { useScrollAnimation, useStaggerAnimation } from '@/hooks/useScrollAnimation';
import { ArrowUpRight } from 'lucide-react';
import { portfolioConfig } from '@/config';
import * as LucideIcons from 'lucide-react';

function getIcon(iconName: string): ElementType {
  const icons = LucideIcons as unknown as Record<string, ElementType>;
  return icons[iconName] || LucideIcons.Circle;
}

function ProjectCard({ project, index, isVisible }: { project: { title: string; category: string; year: string; iconName: string; featured?: boolean }; index: number; isVisible: boolean }) {
  const Icon = getIcon(project.iconName);
  
  return (
    <div
      className={cn(
        'group cursor-pointer transition-all duration-700 ease-out-quart h-full',
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      )}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="relative overflow-hidden bg-black rounded-xl p-6 border border-red-500/30 hover:border-red-500 transition-all duration-500 hover:-translate-y-1 hover:shadow-lg hover:shadow-red-500/10 h-full flex flex-col">
        {/* Icon */}
        <div className="w-12 h-12 mb-4 flex items-center justify-center bg-red-500/10 rounded-lg group-hover:bg-red-500/20 transition-colors duration-300 flex-shrink-0">
          <Icon className="w-6 h-6 text-red-400" />
        </div>

        {/* Arrow Icon */}
        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0">
          <ArrowUpRight className="w-5 h-5 text-red-400" />
        </div>

        {/* Project Info */}
        <div className="space-y-1 flex-grow">
          <h3 className="text-lg font-semibold text-white group-hover:text-red-100 transition-colors">
            {project.title}
          </h3>
          <p className="text-sm text-white/50">{project.category}</p>
        </div>
        
        {/* Neon red glow on hover */}
        <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{ boxShadow: 'inset 0 0 20px rgba(239, 68, 68, 0.1)' }}
        />
      </div>
    </div>
  );
}

export function Portfolio() {
  if (!portfolioConfig.heading && portfolioConfig.projects.length === 0) return null;

  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation({ threshold: 0.3 });
  const { containerRef: gridRef, visibleItems } = useStaggerAnimation(portfolioConfig.projects.length, 120);

  return (
    <section id="portfolio" className="w-full py-16 lg:py-20 bg-exvia-subtle/30">
      <div className="container-large px-6 lg:px-12">
        {/* Header */}
        <div ref={headerRef} className="max-w-3xl mb-12">
          {portfolioConfig.heading && (
            <h2
              className={cn(
                'text-4xl lg:text-5xl xl:text-6xl font-bold text-exvia-black transition-all duration-800 ease-out-quart',
                headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              )}
              style={{ transitionDelay: '100ms' }}
            >
              {portfolioConfig.heading}
            </h2>
          )}

          {portfolioConfig.label && (
            <div
              className={cn(
                'transition-all duration-800 ease-out-quart mt-4',
                headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              )}
              style={{ transitionDelay: '50ms' }}
            >
              <span className="text-lg text-exvia-black/60">
                {portfolioConfig.label}
              </span>
            </div>
          )}

          {portfolioConfig.description && (
            <div
              className={cn(
                'mt-6 p-6 bg-white rounded-xl border border-exvia-border/50 transition-all duration-800 ease-out-quart',
                headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              )}
              style={{ transitionDelay: '200ms' }}
            >
              <p className="text-lg text-exvia-black/80 leading-relaxed">
                {portfolioConfig.description}
              </p>
            </div>
          )}
        </div>

        {/* Projects Grid - 3 columns for 6 boxes */}
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl">
          {portfolioConfig.projects.map((project, index) => (
            <ProjectCard
              key={index}
              project={project}
              index={index}
              isVisible={visibleItems[index]}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
