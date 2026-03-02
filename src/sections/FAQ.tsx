import { useState } from 'react';
import { cn } from '@/lib/utils';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { ChevronDown, HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: "Is coding required to learn AI?",
    answer: "No. Our programs focus on practical AI usage and workflow integration. Coding knowledge is not required unless specified for advanced modules."
  },
  {
    question: "Will this help me in placements or career growth?",
    answer: "Yes. AI literacy is becoming a hiring advantage. We focus on skills that improve productivity, decision-making, and real workplace execution — all of which enhance employability."
  },
  {
    question: "Is this suitable for non-technical students?",
    answer: "Absolutely. Students from commerce, arts, management, and other non-technical backgrounds can benefit significantly from AI-assisted productivity and automation training."
  },
  {
    question: "Do you offer corporate or bulk training for organizations?",
    answer: "Yes. We provide structured AI training programs for companies, institutions, and business networks tailored to their operational needs."
  },
  {
    question: "What makes AccelerateX different from other AI programs in Kerala?",
    answer: "We focus on implementation, not just theory. Our training emphasizes prompt engineering, workflow automation, and real-world business application from Day 1."
  },
  {
    question: "Will I get access to recordings or learning resources?",
    answer: "Depending on the program format, participants may receive structured learning resources and guided materials for continued practice."
  },
  {
    question: "Can colleges collaborate with AccelerateX for AI training?",
    answer: "Yes. We work with institutions to integrate AI training into academic environments through workshops, internships, and structured programs."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const { ref: sectionRef, isVisible } = useScrollAnimation({ threshold: 0.1 });

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="w-full py-16 lg:py-20 bg-exvia-subtle/30">
      <div className="container-large px-6 lg:px-12">
        <div ref={sectionRef} className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div
              className={cn(
                'transition-all duration-800 ease-out-quart',
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              )}
            >
              <span className="text-xs font-geist-mono uppercase tracking-widest text-exvia-black/50">
                Got Questions?
              </span>
            </div>
            <h2
              className={cn(
                'text-3xl lg:text-4xl xl:text-5xl font-bold text-exvia-black mt-4 transition-all duration-800 ease-out-quart',
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              )}
              style={{ transitionDelay: '100ms' }}
            >
              Frequently Asked Questions
            </h2>
          </div>

          {/* FAQ Items */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={cn(
                  'bg-white rounded-xl overflow-hidden shadow-sm transition-all duration-500',
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                )}
                style={{ transitionDelay: `${200 + index * 50}ms` }}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-exvia-subtle/50 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-exvia-black rounded-lg flex items-center justify-center flex-shrink-0">
                      <HelpCircle className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-lg font-medium text-exvia-black pr-4">{faq.question}</span>
                  </div>
                  <ChevronDown 
                    className={cn(
                      'w-5 h-5 text-exvia-black/50 flex-shrink-0 transition-transform duration-300',
                      openIndex === index && 'rotate-180'
                    )} 
                  />
                </button>
                <div 
                  className={cn(
                    'overflow-hidden transition-all duration-300',
                    openIndex === index ? 'max-h-96' : 'max-h-0'
                  )}
                >
                  <div className="px-6 pb-6 pl-20">
                    <p className="text-exvia-black/70 leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
