import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navigation } from '@/components/Navigation';
import { PageOverlay } from '@/components/PageOverlay';
import { Hero } from '@/sections/Hero';
import { About as AboutSection } from '@/sections/About';
import { Portfolio } from '@/sections/Portfolio';
import { Testimonials } from '@/sections/Testimonials';
import { FAQ } from '@/sections/FAQ';
import { CTA } from '@/sections/CTA';
import { Footer } from '@/sections/Footer';
import { Programs } from '@/pages/Programs';
import { About } from '@/pages/About';
import { EnterpriseTraining } from '@/pages/EnterpriseTraining';
import { Community } from '@/pages/Community';
import { Contact } from '@/pages/Contact';
import { Blog } from '@/pages/Blog';
import { usePageLoad } from '@/hooks/usePageLoad';

function HomePage() {
  const { showOverlay } = usePageLoad(500);

  return (
    <div className="min-h-screen bg-white">
      {/* Page Load Overlay */}
      <PageOverlay isVisible={showOverlay} />
      
      {/* Navigation */}
      <Navigation />
      
      {/* Main Content */}
      <main>
        <Hero />
        <AboutSection />
        <Portfolio />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/about" element={<About />} />
        <Route path="/enterprise-training" element={<EnterpriseTraining />} />
        <Route path="/community" element={<Community />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
