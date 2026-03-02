import { cn } from '@/lib/utils';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/sections/Footer';
import { Users, Award, Lightbulb, ArrowRight, BookOpen, GraduationCap, Briefcase, CheckCircle, Star } from 'lucide-react';

const blogPosts = [
  {
    title: "Why AI Upskilling is Essential for Career Growth in 2025",
    excerpt: "Discover how AI skills are becoming the new standard for professional success and why staying ahead of the curve matters more than ever.",
    icon: Award,
    color: "from-blue-500 to-purple-500"
  },
  {
    title: "How AI is Transforming the Workplace",
    excerpt: "From automation to intelligent decision-making, learn how AI is reshaping industries and creating new opportunities for skilled professionals.",
    icon: Briefcase,
    color: "from-purple-500 to-pink-500"
  },
  {
    title: "The Future of Work: AI Skills Every Professional Needs",
    excerpt: "Explore the essential AI competencies that will define career success in the coming decade.",
    icon: BookOpen,
    color: "from-emerald-500 to-teal-500"
  },
  {
    title: "Why Kerala is Becoming an AI Hub",
    excerpt: "Understanding the growing AI ecosystem in Kerala and the opportunities it creates for local talent.",
    icon: Users,
    color: "from-orange-500 to-red-500"
  }
];

const whyAccelerateX = [
  {
    title: "Practical, Hands-On Training",
    description: "We don't just teach theory. Every session includes live practice with real AI tools and real-world applications.",
    icon: Lightbulb
  },
  {
    title: "Industry-Expert Trainers",
    description: "Learn from professionals who actively use AI in their work, not just academics who teach about it.",
    icon: Briefcase
  },
  {
    title: "Comprehensive Curriculum",
    description: "From prompt engineering to workflow automation, we cover everything you need to become AI-proficient.",
    icon: BookOpen
  },
  {
    title: "Proven Track Record",
    description: "Over 6,000 students trained, 1,000+ professionals upskilled, and 500+ internships enabled.",
    icon: Award
  },
  {
    title: "Enterprise-Ready Programs",
    description: "Customized training solutions for organizations looking to upskill their entire workforce.",
    icon: GraduationCap
  },
  {
    title: "Continuous Support",
    description: "1-year access to recordings, community support, and ongoing guidance as you implement AI in your work.",
    icon: Users
  }
];

export function Blog() {
  const { ref: postsRef, isVisible: postsVisible } = useScrollAnimation({ threshold: 0.1 });
  const { ref: whyRef, isVisible: whyVisible } = useScrollAnimation({ threshold: 0.1 });
  const { ref: articleRef, isVisible: articleVisible } = useScrollAnimation({ threshold: 0.05 });

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Navigation />
      
      {/* Main Content */}
      <main className="pt-24">
        {/* Header Section */}
        <section className="w-full py-16 lg:py-24 bg-exvia-black relative overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-500/30 rounded-full blur-3xl" />
          </div>
          <div className="container-large px-6 lg:px-12 relative z-10">
            <div className="max-w-3xl">
              <span className="text-xs font-geist-mono uppercase tracking-widest text-white/50">
                Blog
              </span>
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white mt-4 leading-tight">
                AI Insights & Learning Resources
              </h1>
              <p className="text-lg text-white/70 mt-6 leading-relaxed">
                Stay updated with the latest trends in AI upskilling and discover why AccelerateX is leading AI education in Kerala.
              </p>
            </div>
          </div>
        </section>

        {/* Main Article Section */}
        <section className="w-full py-24 lg:py-32 bg-white">
          <div className="container-large px-6 lg:px-12">
            <div ref={articleRef} className="max-w-4xl mx-auto">
              <article 
                className={cn(
                  'transition-all duration-800',
                  articleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                )}
              >
                {/* Article Header */}
                <div className="mb-12">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">Featured</span>
                    <span className="text-exvia-black/50 text-sm">AI Education</span>
                  </div>
                  <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-exvia-black leading-tight mb-6">
                    AI Courses in Kerala: Why AccelerateX Is Setting the 2026 Standard
                  </h2>
                  <div className="flex items-center gap-4 text-sm text-exvia-black/50">
                    <span>AccelerateX Team</span>
                    <span>•</span>
                    <span>10 min read</span>
                  </div>
                </div>

                {/* Article Content */}
                <div className="prose prose-lg max-w-none text-exvia-black/80 leading-relaxed">
                  <p className="text-xl text-exvia-black/90 mb-8">
                    Artificial Intelligence is no longer a future concept — it is a present-day requirement. From startups to enterprise organizations, AI literacy is becoming a baseline expectation across industries.
                  </p>

                  <p className="mb-6">
                    If you're searching for AI courses in Kerala in 2026, you're likely asking:
                  </p>

                  <ul className="space-y-2 mb-8 list-none pl-0">
                    <li className="flex items-start gap-3">
                      <span className="text-blue-500 mt-1">•</span>
                      <span>Which course is actually practical?</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-blue-500 mt-1">•</span>
                      <span>Do I need coding knowledge?</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-blue-500 mt-1">•</span>
                      <span>Will this help me get hired?</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-blue-500 mt-1">•</span>
                      <span>Is this relevant to my field?</span>
                    </li>
                  </ul>

                  <p className="mb-8">
                    These are the right questions. Because the AI education landscape is crowded — but not all programs are built for real-world outcomes.
                  </p>

                  <h3 className="text-2xl font-bold text-exvia-black mt-12 mb-6">What Most AI Courses in Kerala Are Missing</h3>

                  <p className="mb-6">
                    Many programs focus heavily on:
                  </p>

                  <ul className="space-y-3 mb-8">
                    <li className="flex items-start gap-3">
                      <span className="text-red-500 mt-1">✗</span>
                      <span>Theoretical explanations</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-500 mt-1">✗</span>
                      <span>Outdated technical modules</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-500 mt-1">✗</span>
                      <span>Generic certifications</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-500 mt-1">✗</span>
                      <span>Surface-level tool demonstrations</span>
                    </li>
                  </ul>

                  <p className="mb-8">
                    But companies today are not hiring based on theory alone. They are hiring people who can use AI to improve speed, clarity, decision-making, and output quality. That is the difference.
                  </p>

                  <h3 className="text-2xl font-bold text-exvia-black mt-12 mb-6">The 2026 Shift: From Learning AI to Working With AI</h3>

                  <p className="mb-6">
                    AI education is rapidly evolving from:
                  </p>

                  <div className="bg-exvia-subtle rounded-xl p-6 mb-8">
                    <p className="text-center text-lg">
                      <span className="text-exvia-black/60">"Understanding what AI is"</span>
                      <br />
                      <span className="text-2xl my-2 block">↓</span>
                      <span className="text-exvia-black font-semibold">"Knowing how to integrate AI into daily work."</span>
                    </p>
                  </div>

                  <p className="mb-6">
                    The real advantage now lies in learning:
                  </p>

                  <ul className="space-y-3 mb-8">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Practical AI tool usage</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Prompt engineering mastery</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Workflow automation</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>AI-assisted research and reporting</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Business integration strategies</span>
                    </li>
                  </ul>

                  <p className="mb-8">
                    This is exactly where AccelerateX stands apart.
                  </p>

                  <h3 className="text-2xl font-bold text-exvia-black mt-12 mb-6">Why AccelerateX Is Emerging as Kerala's Practical AI Leader</h3>

                  <p className="mb-6">
                    AccelerateX was built with a simple philosophy:
                  </p>

                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 mb-8 text-white">
                    <p className="text-center text-lg font-medium">
                      AI education must be execution-focused, not theory-heavy.
                    </p>
                  </div>

                  <p className="mb-6">
                    Unlike traditional programs, AccelerateX emphasizes:
                  </p>

                  <ul className="space-y-4 mb-8">
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <CheckCircle className="w-4 h-4 text-white" />
                      </div>
                      <span><strong>Hands-on implementation</strong> from Day 1</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <CheckCircle className="w-4 h-4 text-white" />
                      </div>
                      <span><strong>Real AI tools</strong> used in business environments</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <CheckCircle className="w-4 h-4 text-white" />
                      </div>
                      <span><strong>Structured prompt engineering</strong> frameworks</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <CheckCircle className="w-4 h-4 text-white" />
                      </div>
                      <span><strong>Internship-based</strong> exposure</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <CheckCircle className="w-4 h-4 text-white" />
                      </div>
                      <span><strong>Corporate-level AI integration</strong> training</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <CheckCircle className="w-4 h-4 text-white" />
                      </div>
                      <span><strong>Role-based use cases</strong> for different departments</span>
                    </li>
                  </ul>

                  <p className="mb-8">
                    This approach ensures learners don't just "learn AI" — they start using AI immediately.
                  </p>

                  <h3 className="text-2xl font-bold text-exvia-black mt-12 mb-6">AI Skills Companies Are Hiring For in 2026 — And How AccelerateX Prepares You</h3>

                  <p className="mb-6">
                    Companies are no longer hiring only AI engineers. They are hiring <strong>AI-enabled professionals</strong>.
                  </p>

                  <p className="mb-6">
                    In-demand skills include:
                  </p>

                  <div className="grid md:grid-cols-2 gap-4 mb-8">
                    <div className="bg-exvia-subtle rounded-xl p-4">
                      <h4 className="font-bold text-exvia-black mb-2">Prompt Engineering</h4>
                      <p className="text-sm text-exvia-black/70">Guiding AI for strategic outputs</p>
                    </div>
                    <div className="bg-exvia-subtle rounded-xl p-4">
                      <h4 className="font-bold text-exvia-black mb-2">AI-Assisted Productivity</h4>
                      <p className="text-sm text-exvia-black/70">Faster documentation and research</p>
                    </div>
                    <div className="bg-exvia-subtle rounded-xl p-4">
                      <h4 className="font-bold text-exvia-black mb-2">Workflow Automation</h4>
                      <p className="text-sm text-exvia-black/70">Reducing repetitive effort</p>
                    </div>
                    <div className="bg-exvia-subtle rounded-xl p-4">
                      <h4 className="font-bold text-exvia-black mb-2">AI for Marketing & Communication</h4>
                      <p className="text-sm text-exvia-black/70">Smarter content systems</p>
                    </div>
                    <div className="bg-exvia-subtle rounded-xl p-4 md:col-span-2">
                      <h4 className="font-bold text-exvia-black mb-2">Data Interpretation Using AI</h4>
                      <p className="text-sm text-exvia-black/70">Better decision support</p>
                    </div>
                  </div>

                  <p className="mb-8">
                    AccelerateX programs are designed around these exact skills — aligned with real hiring expectations. We train students and professionals to combine domain knowledge with AI capability — the most powerful career combination in 2026.
                  </p>

                  <h3 className="text-2xl font-bold text-exvia-black mt-12 mb-6">AI Training for Colleges in Kerala: The AccelerateX Model</h3>

                  <p className="mb-6">
                    Colleges across Kerala are facing a gap:
                  </p>

                  <div className="bg-exvia-black rounded-xl p-6 mb-8 text-white">
                    <p className="text-center">
                      Students graduate with theoretical knowledge.<br />
                      <span className="text-yellow-400">Companies expect AI-ready execution skills.</span>
                    </p>
                  </div>

                  <p className="mb-6">
                    AccelerateX bridges this gap through:
                  </p>

                  <ul className="space-y-3 mb-8">
                    <li className="flex items-start gap-3">
                      <Star className="w-5 h-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                      <span>Structured AI fundamentals (without technical overload)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Star className="w-5 h-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                      <span>Department-specific AI training modules</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Star className="w-5 h-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                      <span>Internship-style practical exposure</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Star className="w-5 h-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                      <span>Industry-aligned curriculum</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Star className="w-5 h-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                      <span>Corporate guest sessions and workshops</span>
                    </li>
                  </ul>

                  <p className="mb-8">
                    Institutions that collaborate with AccelerateX position themselves as future-ready campuses.
                  </p>

                  <h3 className="text-2xl font-bold text-exvia-black mt-12 mb-6">Why Most Professionals Use AI Wrong — And How AccelerateX Fixes It</h3>

                  <p className="mb-6">
                    AI tools are widely available. But most professionals are not seeing real results.
                  </p>

                  <p className="mb-4">
                    <strong>Why?</strong>
                  </p>

                  <p className="mb-6">
                    Because they:
                  </p>

                  <ul className="space-y-2 mb-8">
                    <li className="flex items-start gap-3">
                      <span className="text-red-500">•</span>
                      <span>Use AI occasionally</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-500">•</span>
                      <span>Ask vague prompts</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-500">•</span>
                      <span>Lack structured frameworks</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-500">•</span>
                      <span>Don't integrate AI into workflows</span>
                    </li>
                  </ul>

                  <p className="mb-6">
                    AI is not magic. It is guided intelligence. The difference between average and powerful AI usage lies in structured prompting, clarity of thinking, and workflow design.
                  </p>

                  <p className="mb-6">
                    AccelerateX teaches professionals how to:
                  </p>

                  <ul className="space-y-3 mb-8">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Think in structured prompts</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Design AI-assisted workflows</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Integrate AI into daily operations</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Use AI strategically — not casually</span>
                    </li>
                  </ul>

                  <p className="mb-8">
                    That is the transformation.
                  </p>

                  <h3 className="text-2xl font-bold text-exvia-black mt-12 mb-6">Prompt Engineering: The Core Skill AccelerateX Specializes In</h3>

                  <p className="mb-6">
                    Prompt engineering is the new digital literacy. Just as computer skills became essential in the 2000s, AI guidance skills are becoming essential in 2026.
                  </p>

                  <p className="mb-6">
                    At AccelerateX, prompt engineering is not taught as a trend — it is taught as a structured capability:
                  </p>

                  <ul className="space-y-3 mb-8">
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <CheckCircle className="w-4 h-4 text-white" />
                      </div>
                      <span><strong>Framework-based prompting</strong></span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <CheckCircle className="w-4 h-4 text-white" />
                      </div>
                      <span><strong>Role-specific prompting models</strong></span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <CheckCircle className="w-4 h-4 text-white" />
                      </div>
                      <span><strong>Business-oriented AI guidance</strong></span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <CheckCircle className="w-4 h-4 text-white" />
                      </div>
                      <span><strong>Workflow-driven output systems</strong></span>
                    </li>
                  </ul>

                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 mb-8 text-white">
                    <p className="text-center text-lg font-medium">
                      We don't just teach prompts.<br />
                      We teach structured AI thinking.
                    </p>
                  </div>

                  <h3 className="text-2xl font-bold text-exvia-black mt-12 mb-6">The Bottom Line</h3>

                  <p className="mb-6">
                    In 2026, AI skill is not optional — it is competitive advantage.
                  </p>

                  <p className="mb-6">
                    The real question is not whether to learn AI. It is <strong>where to learn it correctly.</strong>
                  </p>

                  <p className="mb-6">
                    For students, professionals, colleges, and businesses in Kerala, AccelerateX is building an ecosystem focused on:
                  </p>

                  <ul className="space-y-3 mb-8">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Practical execution</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Real-world application</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Industry alignment</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Scalable AI integration</span>
                    </li>
                  </ul>

                  <p className="mb-6">
                    AI will not replace you. But those who learn to use it effectively will move ahead faster.
                  </p>

                  <div className="bg-exvia-black rounded-xl p-8 text-white text-center">
                    <p className="text-xl font-bold mb-2">
                      AccelerateX exists to make sure you are one of them.
                    </p>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* Why AccelerateX Section */}
        <section className="w-full py-24 lg:py-32 bg-exvia-subtle/30">
          <div className="container-large px-6 lg:px-12">
            <div ref={whyRef} className="max-w-5xl mx-auto">
              <div className="text-center mb-16">
                <div
                  className={cn(
                    'transition-all duration-800 ease-out-quart',
                    whyVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  )}
                >
                  <span className="text-xs font-geist-mono uppercase tracking-widest text-exvia-black/50">
                    Why Choose Us
                  </span>
                </div>
                <h2
                  className={cn(
                    'text-3xl lg:text-4xl xl:text-5xl font-bold text-exvia-black mt-4 transition-all duration-800 ease-out-quart',
                    whyVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                  )}
                  style={{ transitionDelay: '100ms' }}
                >
                  Why AccelerateX is the Best AI Training Institute in Kerala
                </h2>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {whyAccelerateX.map((item, index) => (
                  <div
                    key={index}
                    className={cn(
                      'bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-500 group',
                      whyVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                    )}
                    style={{ transitionDelay: `${200 + index * 100}ms` }}
                  >
                    <div className="w-12 h-12 bg-exvia-black rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-exvia-black mb-2">{item.title}</h3>
                    <p className="text-exvia-black/60 text-sm leading-relaxed">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="w-full py-24 lg:py-32 bg-white">
          <div className="container-large px-6 lg:px-12">
            <div ref={postsRef}>
              <div className="text-center mb-12">
                <h2
                  className={cn(
                    'text-3xl lg:text-4xl font-bold text-exvia-black transition-all duration-800',
                    postsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                  )}
                >
                  More Insights
                </h2>
              </div>

              <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {blogPosts.map((post, index) => (
                  <div
                    key={index}
                    className={cn(
                      'group bg-white border border-exvia-border rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-500',
                      postsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                    )}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <div className={`h-2 bg-gradient-to-r ${post.color}`} />
                    <div className="p-6">
                      <div className="w-12 h-12 bg-exvia-subtle rounded-xl flex items-center justify-center mb-4 group-hover:bg-exvia-black transition-colors">
                        <post.icon className="w-6 h-6 text-exvia-black group-hover:text-white transition-colors" />
                      </div>
                      <h3 className="text-xl font-bold text-exvia-black mb-3 group-hover:text-blue-600 transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-exvia-black/60 text-sm leading-relaxed mb-4">
                        {post.excerpt}
                      </p>
                      <button className="inline-flex items-center gap-2 text-sm font-medium text-exvia-black group-hover:text-blue-600 transition-colors">
                        Read More
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="w-full py-24 lg:py-32 bg-exvia-black">
          <div className="container-large px-6 lg:px-12">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto text-center">
              <div>
                <p className="text-4xl lg:text-5xl font-bold text-white mb-2">6,000+</p>
                <p className="text-white/60">Students Trained</p>
              </div>
              <div>
                <p className="text-4xl lg:text-5xl font-bold text-white mb-2">1,000+</p>
                <p className="text-white/60">Professionals Upskilled</p>
              </div>
              <div>
                <p className="text-4xl lg:text-5xl font-bold text-white mb-2">500+</p>
                <p className="text-white/60">Internships Enabled</p>
              </div>
              <div>
                <p className="text-4xl lg:text-5xl font-bold text-white mb-2">5+</p>
                <p className="text-white/60">Enterprise Clients</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-24 lg:py-32 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-500">
          <div className="container-large px-6 lg:px-12">
            <div className="max-w-3xl mx-auto text-center text-white">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Ready to Start Your AI Journey?
              </h2>
              <p className="text-white/80 text-lg mb-8">
                Join thousands of learners who have transformed their careers with AccelerateX.
              </p>
              <a
                href="/programs"
                className="inline-flex items-center gap-3 px-8 py-4 bg-white text-exvia-black font-semibold rounded-full hover:bg-white/90 transition-all duration-300 group"
              >
                <span>Explore Our Programs</span>
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </section>
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
}
