import React, { useState, useMemo } from 'react';
import { CATEGORIES, PORTFOLIO_PROJECTS } from '../data/portfolioData';
import type { ProjectSheet } from '../data/portfolioData';
import { ProjectCard } from './ProjectCard';

interface GallerySectionProps {
  onOpenLightbox: (sheet: ProjectSheet, activeList: ProjectSheet[]) => void;
}

export const GallerySection: React.FC<GallerySectionProps> = ({ onOpenLightbox }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredSheets = useMemo(() => {
    if (selectedCategory === 'all') {
      return PORTFOLIO_PROJECTS;
    }
    return PORTFOLIO_PROJECTS.filter((sheet) => sheet.category === selectedCategory);
  }, [selectedCategory]);

  // Specific groups for grouped view when "all" is active
  const groupedSections = useMemo(() => {
    return CATEGORIES.filter(c => c.id !== 'all').map(cat => ({
      ...cat,
      sheets: PORTFOLIO_PROJECTS.filter(s => s.category === cat.id)
    }));
  }, []);

  return (
    <section className="content-section" id="work">
      <div className="section-header">
        <span className="section-eyebrow">Academic Portfolio</span>
        <h2 className="section-title">Recent Work / Selected Academic Work</h2>
        <p className="section-subtitle">
          Original technical drawings, rendered floor plans, structural details, working drawings, interior technical sheets, and landscape design boards from the academic curriculum.
        </p>
        <div className="section-rule" />
      </div>

      {/* Filter Navigation Tabs */}
      <div className="gallery-filter-bar" role="tablist" aria-label="Portfolio Categories">
        {CATEGORIES.map((cat) => {
          const isActive = selectedCategory === cat.id;
          return (
            <button
              key={cat.id}
              role="tab"
              aria-selected={isActive}
              className={`filter-tab ${isActive ? 'active' : ''}`}
              onClick={() => setSelectedCategory(cat.id)}
            >
              <span>{cat.shortTitle}</span>
              <span className="filter-count">({cat.count})</span>
            </button>
          );
        })}
      </div>

      {/* Status Bar */}
      <div className="gallery-status-bar">
        <span>
          Showing <strong>{filteredSheets.length}</strong> architectural sheets
        </span>
        <span style={{ fontSize: '0.8rem' }}>
          *Click any drawing sheet to view in full resolution
        </span>
      </div>

      {/* Display by Category or Filtered Grid */}
      {selectedCategory !== 'all' ? (
        <div>
          <div style={{ marginBottom: '1.75rem', padding: '1rem 1.25rem', background: '#f8fafc', borderRadius: '8px', borderLeft: '3px solid var(--accent)' }}>
            <h3 style={{ fontSize: '1.15rem', color: 'var(--text-main)', marginBottom: '0.25rem' }}>
              {CATEGORIES.find(c => c.id === selectedCategory)?.title}
            </h3>
            <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
              {CATEGORIES.find(c => c.id === selectedCategory)?.description}
            </p>
          </div>

          <div className="gallery-grid">
            {filteredSheets.map((sheet) => (
              <ProjectCard
                key={sheet.id}
                sheet={sheet}
                onOpenLightbox={(item) => onOpenLightbox(item, filteredSheets)}
              />
            ))}
          </div>
        </div>
      ) : (
        /* Grouped Display when "All Works" is selected */
        <div style={{ display: 'flex', flexDirection: 'column', gap: '3.5rem' }}>
          {groupedSections.map((group, groupIdx) => {
            const letter = String.fromCharCode(65 + groupIdx); // A, B, C, D, E, F
            return (
              <div key={group.id} id={`group-${group.id}`}>
                {/* Group Heading */}
                <div style={{ marginBottom: '1.5rem', borderBottom: '1px solid var(--border-light)', paddingBottom: '0.75rem' }}>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.65rem' }}>
                    <span style={{ fontFamily: 'var(--font-serif)', fontSize: '1.1rem', color: 'var(--accent)', fontWeight: 700 }}>
                      {letter}.
                    </span>
                    <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.35rem', fontWeight: 600, color: 'var(--text-main)' }}>
                      {group.title}
                    </h3>
                    <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginLeft: 'auto' }}>
                      {group.sheets.length} sheets
                    </span>
                  </div>
                  <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', marginTop: '0.35rem', maxWidth: '750px' }}>
                    {group.description}
                  </p>
                </div>

                {/* Group Grid */}
                <div className="gallery-grid">
                  {group.sheets.map((sheet) => (
                    <ProjectCard
                      key={sheet.id}
                      sheet={sheet}
                      onOpenLightbox={(item) => onOpenLightbox(item, PORTFOLIO_PROJECTS)}
                    />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
};
