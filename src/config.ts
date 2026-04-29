// Site configuration
// AccelerateX - AI Training Firm

export interface SiteConfig {
  language: string;
  title: string;
  description: string;
}

export const siteConfig: SiteConfig = {
  language: "en",
  title: "AccelerateX - Practical AI Mastery",
  description: "Don't Just Learn AI — Make AI Work For You. AccelerateX empowers you with practical AI mastery through live, hands-on training programs.",
};

// Navigation configuration
export interface NavLink {
  label: string;
  href: string;
}

export interface NavigationConfig {
  logo: string;
  links: NavLink[];
  contactLabel: string;
  contactHref: string;
}

export const navigationConfig: NavigationConfig = {
  logo: "AccelerateX",
  links: [
    { label: "Home", href: "/" },
    { label: "About us", href: "/about" },
    { label: "Programs", href: "/programs" },
    { label: "Enterprise Solutions", href: "/enterprise-training" },
    { label: "Community", href: "/community" },
    { label: "Contact us", href: "/contact" },
  ],
  contactLabel: "Get Started",
  contactHref: "#cta",
};

// Hero section configuration
export interface HeroConfig {
  name: string;
  roles: string[];
  backgroundImage: string;
}

export const heroConfig: HeroConfig = {
  name: "AccelerateX",
  roles: [
    "AI Training",
    "Prompt Engineering",
    "Tool Mastery",
    "Career Growth",
    "Enterprise Solutions",
    "Workforce Transformation",
  ],
  backgroundImage: "/images/hero-bg.jpg",
};

// About section configuration
export interface AboutStat {
  value: string;
  label: string;
}

export interface AboutImage {
  src: string;
  alt: string;
}

export interface AboutConfig {
  label: string;
  description: string;
  experienceValue: string;
  experienceLabel: string;
  stats: AboutStat[];
  images: AboutImage[];
}

export const aboutConfig: AboutConfig = {
  label: "Why AI Skills Matter Today",
  description: "AI isn't replacing people. People who use AI are replacing those who don't. Work that once took hours now takes minutes. AI literacy is no longer optional — it's expected. Productivity is the new competitive advantage. But here's the reality: AI is only as powerful as the person guiding it. At AccelerateX, we turn you into a confident AI operator.",
  experienceValue: "",
  experienceLabel: "",
  stats: [
    { value: "6,000+", label: "Students Trained" },
    { value: "1,000+", label: "Professionals Upskilled" },
    { value: "500+", label: "Internships Enabled" },
    { value: "5+", label: "Enterprise Clients Served" },
  ],
  images: [
    { src: "/images/about-1.jpg", alt: "AI Training Classroom" },
    { src: "/images/about-2.jpg", alt: "Hands-on Learning" },
    { src: "/images/about-3.jpg", alt: "Team Collaboration" },
    { src: "/images/about-4.jpg", alt: "Success Celebration" },
  ],
};

// Services section configuration
export interface ServiceItem {
  iconName: string;
  title: string;
  description: string;
  image: string;
}

export interface ServicesConfig {
  label: string;
  heading: string;
  services: ServiceItem[];
}

export const servicesConfig: ServicesConfig = {
  label: "Our Programs",
  heading: "AI Tools Mastery & Prompt Engineering",
  services: [
    {
      iconName: "Sparkles",
      title: "Master AI in 30 Days",
      description: "A live, hands-on, structured program designed for real-world application. This is NOT theory. This is applied AI training.",
      image: "/images/service-1.jpg",
    },
    {
      iconName: "Zap",
      title: "Task Automation",
      description: "Learn to automate repetitive tasks, create content 10x faster, and integrate 20+ AI tools into your daily workflow.",
      image: "/images/service-2.jpg",
    },
    {
      iconName: "Palette",
      title: "Creative AI Skills",
      description: "Build presentations, visuals, and websites using AI. Use AI for research, analysis, and business workflows.",
      image: "/images/service-3.jpg",
    },
    {
      iconName: "BarChart3",
      title: "Business Intelligence",
      description: "Write better prompts that generate powerful results. Use AI for research, analysis, and business decision-making.",
      image: "/images/service-4.jpg",
    },
  ],
};

// Portfolio section configuration
export interface ProjectItem {
  title: string;
  category: string;
  year: string;
  iconName: string;
  featured?: boolean;
}

export interface PortfolioConfig {
  label: string;
  heading: string;
  description: string;
  projects: ProjectItem[];
}

export const portfolioConfig: PortfolioConfig = {
  label: "What Makes Us Different",
  heading: "Why AccelerateX?",
  description: "",
  projects: [
    {
      title: "Practical Oriented Learning",
      category: "Hands-on experience with real-world projects",
      year: "",
      iconName: "Target",
      featured: true,
    },
    {
      title: "Weekly Updated Curriculum",
      category: "Stay current with the latest AI trends",
      year: "",
      iconName: "RefreshCw",
    },
    {
      title: "Learn from Expert Practitioners",
      category: "Industry professionals who use AI daily",
      year: "",
      iconName: "Users",
    },
    {
      title: "Internship Opportunities",
      category: "Real-world experience with partner companies",
      year: "",
      iconName: "Briefcase",
    },
    {
      title: "Community",
      category: "Free Access to latest AI knowledge",
      year: "",
      iconName: "MessageCircle",
    },
    {
      title: "Business Integration Expertise",
      category: "Updated enterprise-level AI execution",
      year: "",
      iconName: "BarChart3",
    },
  ],
};

// Testimonials section configuration
export interface TestimonialItem {
  quote: string;
  author: string;
  role: string;
  company: string;
  image: string;
  rating: number;
}

export interface TestimonialsConfig {
  label: string;
  heading: string;
  testimonials: TestimonialItem[];
}

export const testimonialsConfig: TestimonialsConfig = {
  label: "Real Impact",
  heading: "Hear It From Them",
  testimonials: [
    {
      quote: "Before AccelerateX, I was learning AI only from YouTube and felt completely lost. The structured training and live practice helped me build real skills. Because of the internship support, I secured an opportunity where I'm now applying AI in real projects. I'm genuinely grateful for this turning point in my career.",
      author: "Priya Rajesh",
      role: "B.Tech Student",
      company: "Engineering Graduate",
      image: "/images/testimonial-priya.jpg",
      rating: 5,
    },
    {
      quote: "This program didn't just teach tools — it made me job-ready. I now know how to use AI for research, presentations, automation, and content creation. In interviews, I can confidently explain how I use AI in practical situations. That confidence changed everything for me.",
      author: "Aromal Jayan",
      role: "Final Year Student",
      company: "Computer Science",
      image: "/images/testimonial-aromal.jpg",
      rating: 5,
    },
    {
      quote: "After joining AccelerateX, my work speed improved drastically. Tasks that earlier took hours now take a fraction of the time using AI workflows. The prompt engineering sessions were a game changer. My productivity has easily doubled.",
      author: "Mubasheer",
      role: "Consultant",
      company: "Strategy & Operations",
      image: "/images/testimonial-mubasheer.jpg",
      rating: 5,
    },
    {
      quote: "I always felt I was falling behind in AI. This program gave me clarity and practical exposure. I now feel confident applying for better roles because I can demonstrate how I integrate AI into daily work. It gave me a competitive edge.",
      author: "Shibin",
      role: "Marketing Professional",
      company: "Dubai",
      image: "/images/testimonial-shibin.jpg",
      rating: 5,
    },
  ],
};

// CTA section configuration
export interface CTAConfig {
  tags: string[];
  heading: string;
  description: string;
  buttonText: string;
  buttonHref: string;
  email: string;
  backgroundImage: string;
}

export const ctaConfig: CTAConfig = {
  tags: ["AI Training", "Career Growth", "Enterprise Solutions"],
  heading: "Don't Just Learn AI — Make AI Work For You",
  description: "The AI Gap Is Growing Every Day. Every month you delay learning AI, someone else becomes faster, smarter, and more efficient than you. The question is simple: Are you ready to take action?",
  buttonText: "Get Started",
  buttonHref: "mailto:hi@theacceleratex.com",
  email: "hi@theacceleratex.com",
  backgroundImage: "/images/cta-bg.jpg",
};

// Footer section configuration
export interface FooterLinkColumn {
  title: string;
  links: { label: string; href: string }[];
}

export interface SocialLink {
  iconName: string;
  href: string;
  label: string;
}

export interface FooterConfig {
  logo: string;
  description: string;
  columns: FooterLinkColumn[];
  socialLinks: SocialLink[];
  newsletterHeading: string;
  newsletterDescription: string;
  newsletterButtonText: string;
  newsletterPlaceholder: string;
  copyright: string;
  credit: string;
}

export const footerConfig: FooterConfig = {
  logo: "AccelerateX",
  description: "AccelerateX is where you become AI-ready for the real world. We don't just teach tools — we train you to think, work, and perform with AI.",
  columns: [
    {
      title: "Programs",
      links: [
        { label: "AI Tools Mastery", href: "/programs" },
        { label: "Enterprise Solutions", href: "/enterprise-training" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About Us", href: "/about" },
        { label: "Contact", href: "/contact" },
      ],
    },
    {
      title: "Resources",
      links: [
        { label: "Free AI Tools List", href: "#free-tools" },
        { label: "Blog", href: "/blog" },
      ],
    },
  ],
  socialLinks: [
    { iconName: "Linkedin", href: "https://www.linkedin.com/company/theacceleratex/?viewAsMember=true", label: "LinkedIn" },
    { iconName: "Instagram", href: "https://www.instagram.com/theacceleratex?igsh=ZjM3cTJyejBqbTNx", label: "Instagram" },
  ],
  newsletterHeading: "",
  newsletterDescription: "",
  newsletterButtonText: "",
  newsletterPlaceholder: "",
  copyright: "© 2026 AccelerateX. All rights reserved.",
  credit: "Empowering the future with AI mastery.",
};
