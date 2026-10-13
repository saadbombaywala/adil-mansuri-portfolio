import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface SidebarProps {
  activeSection?: string;
}

export const Sidebar: React.FC<SidebarProps> = ({ activeSection = 'work' }) => {
  return (
    <aside className="portfolio-sidebar" id="sidebar">
      <div className="sidebar-bg-image" aria-hidden="true" />
      <div className="sidebar-overlay" aria-hidden="true" />

      <div className="sidebar-content">
        <div className="sidebar-top">
          {/* Circular AM Monogram Avatar */}
          <div className="avatar-container">
            <div className="monogram-avatar" title={`${PERSONAL_INFO.name} — Architecture Portfolio`}>
              <div className="monogram-compass-ring" />
              <span className="monogram-letters">AM</span>
            </div>
          </div>

          {/* Profile Identity */}
          <div className="sidebar-identity">
            <h1 className="sidebar-title">{PERSONAL_INFO.name}</h1>
            <p className="sidebar-role">{PERSONAL_INFO.role}</p>
            <p className="sidebar-meta">
              {PERSONAL_INFO.institute} · Enrollment: {PERSONAL_INFO.enrollmentNumber}
            </p>
            <div className="sidebar-divider" />
            <p className="sidebar-intro">
              {PERSONAL_INFO.introduction}
            </p>

            <a href="#work" className="sidebar-explore" aria-label="Explore My Work">
              <span>Explore My Work</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 5v14M19 12l-7 7-7-7" />
              </svg>
            </a>
          </div>

          {/* Navigation links */}
          <nav className="sidebar-nav" aria-label="Portfolio sections">
            <a 
              href="#about" 
              className={`sidebar-nav-link ${activeSection === 'about' ? 'active' : ''}`}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="7" r="4"/>
                <path d="M5.5 21a8.38 8.38 0 0 1 13 0"/>
              </svg>
              <span>About & Education</span>
            </a>
            <a 
              href="#work" 
              className={`sidebar-nav-link ${activeSection === 'work' ? 'active' : ''}`}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="3" width="18" height="18" rx="2"/>
                <path d="M3 9h18M9 21V9"/>
              </svg>
              <span>Recent Work Gallery</span>
            </a>
            <a 
              href="#skills" 
              className={`sidebar-nav-link ${activeSection === 'skills' ? 'active' : ''}`}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
              </svg>
              <span>Technical Skills</span>
            </a>
            <a 
              href="#contact" 
              className={`sidebar-nav-link ${activeSection === 'contact' ? 'active' : ''}`}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
              <span>Get In Touch</span>
            </a>
          </nav>
        </div>

        {/* Sidebar Footer Contacts */}
        <div className="sidebar-footer">
          <div className="sidebar-contact-list">
            <div className="sidebar-contact-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <span>{PERSONAL_INFO.location}</span>
            </div>
            <a href={`tel:${PERSONAL_INFO.phone}`} className="sidebar-contact-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              <span>+91 {PERSONAL_INFO.phone}</span>
            </a>
            <a href={`mailto:${PERSONAL_INFO.email}`} className="sidebar-contact-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
              <span>{PERSONAL_INFO.email}</span>
            </a>
          </div>
        </div>
      </div>
    </aside>
  );
};
