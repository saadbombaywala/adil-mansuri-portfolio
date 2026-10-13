import { useState, useEffect } from 'react';
import type { ProjectSheet } from './data/portfolioData';
import { Sidebar } from './components/Sidebar';
import { AboutSection } from './components/AboutSection';
import { SkillsSection } from './components/SkillsSection';
import { GallerySection } from './components/GallerySection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { Lightbox } from './components/Lightbox';
import './styles/portfolio.css';

export function App() {
  const [activeSheet, setActiveSheet] = useState<ProjectSheet | null>(null);
  const [activeList, setActiveList] = useState<ProjectSheet[]>([]);
  const [activeSection, setActiveSection] = useState<string>('work');

  // Open Lightbox handler
  const handleOpenLightbox = (sheet: ProjectSheet, list: ProjectSheet[]) => {
    setActiveSheet(sheet);
    setActiveList(list);
  };

  // Close Lightbox handler
  const handleCloseLightbox = () => {
    setActiveSheet(null);
  };

  // Lightbox Previous
  const handlePrevSheet = () => {
    if (!activeSheet || activeList.length === 0) return;
    const currentIndex = activeList.findIndex((item) => item.id === activeSheet.id);
    const prevIndex = (currentIndex - 1 + activeList.length) % activeList.length;
    setActiveSheet(activeList[prevIndex]);
  };

  // Lightbox Next
  const handleNextSheet = () => {
    if (!activeSheet || activeList.length === 0) return;
    const currentIndex = activeList.findIndex((item) => item.id === activeSheet.id);
    const nextIndex = (currentIndex + 1) % activeList.length;
    setActiveSheet(activeList[nextIndex]);
  };

  // Scroll spy for sidebar nav items
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'work', 'skills', 'contact'];
      const scrollY = window.scrollY;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop - 120;
          const height = el.offsetHeight;
          if (scrollY >= top && scrollY < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const currentIndex = activeSheet && activeList.length > 0 
    ? activeList.findIndex(item => item.id === activeSheet.id) 
    : 0;

  return (
    <div className="portfolio-layout">
      {/* Strata-style Sidebar (Desktop) / Top Hero (Mobile) */}
      <Sidebar activeSection={activeSection} />

      {/* Main Content Column */}
      <main className="portfolio-main">
        {/* About & Education */}
        <AboutSection />

        {/* Recent Work Gallery (Primary Visual Core) */}
        <GallerySection onOpenLightbox={handleOpenLightbox} />

        {/* Technical Skills & Specializations */}
        <SkillsSection />

        {/* Get In Touch */}
        <ContactSection />

        {/* Minimal Footer */}
        <Footer />
      </main>

      {/* Lightbox Modal */}
      <Lightbox
        sheet={activeSheet}
        onClose={handleCloseLightbox}
        onPrev={handlePrevSheet}
        onNext={handleNextSheet}
        currentIndex={currentIndex}
        totalCount={activeList.length}
      />
    </div>
  );
}

export default App;
