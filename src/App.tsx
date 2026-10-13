import { useState } from 'react';
import type { ProjectSheet } from './data/portfolioData';
import { PERSONAL_INFO } from './data/portfolioData';
import { Sidebar } from './components/Sidebar';
import { AboutSection } from './components/AboutSection';
import { GallerySection } from './components/GallerySection';
import { ContactSection } from './components/ContactSection';
import { Lightbox } from './components/Lightbox';
import './styles/portfolio.css';

export function App() {
  const [activeSheet, setActiveSheet] = useState<ProjectSheet | null>(null);
  const [activeList, setActiveList] = useState<ProjectSheet[]>([]);

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

  return (
    <div id="wrapper">
      {/* Header (Top Hero on Mobile, Fixed Sidebar on Desktop) */}
      <Sidebar />

      {/* Main Content Area */}
      <div id="main">
        {/* Section One: Intro / About */}
        <AboutSection />

        <hr />

        {/* Section Two: Recent Work & Full Portfolio */}
        <GallerySection onOpenLightbox={handleOpenLightbox} />

        <hr />

        {/* Section Three: Get In Touch */}
        <ContactSection />
      </div>

      {/* Mobile Footer (shown at bottom on mobile matching video frame) */}
      <footer id="mobile-footer">
        <div className="footer-inner">
          <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 0.5em 0' }}>
            <li>&copy; {PERSONAL_INFO.name}</li>
            <li>Diploma in Architecture &middot; {PERSONAL_INFO.institute}</li>
          </ul>
          <p style={{ margin: 0, fontSize: '0.85em' }}>
            <a href={`mailto:${PERSONAL_INFO.email}`} className="dotted-link">{PERSONAL_INFO.email}</a>
            {' '}&middot;{' '}
            <a href={`tel:${PERSONAL_INFO.phone}`} className="dotted-link">+91 {PERSONAL_INFO.phone}</a>
          </p>
        </div>
      </footer>

      {/* Poptrox-style Lightbox Modal */}
      <Lightbox
        sheet={activeSheet}
        onClose={handleCloseLightbox}
        onPrev={handlePrevSheet}
        onNext={handleNextSheet}
      />
    </div>
  );
}

export default App;
