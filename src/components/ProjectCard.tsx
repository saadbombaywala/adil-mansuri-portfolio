import React from 'react';
import type { ProjectSheet } from '../data/portfolioData';

interface ProjectCardProps {
  sheet: ProjectSheet;
  onOpenLightbox: (sheet: ProjectSheet) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ sheet, onOpenLightbox }) => {
  return (
    <article 
      className="project-card"
      onClick={() => onOpenLightbox(sheet)}
      tabIndex={0}
      role="button"
      aria-label={`Open sheet ${sheet.title}, Page ${sheet.pageNumber}`}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onOpenLightbox(sheet);
        }
      }}
    >
      {/* 16:9 Aspect Ratio Container with Neutral Background and Contain fit */}
      <div className="project-thumb-frame">
        <img
          src={sheet.image}
          alt={`Architectural sheet: ${sheet.title} (Page ${sheet.pageNumber})`}
          className="project-thumb-img"
          loading="lazy"
        />

        {/* Hover inspect overlay */}
        <div className="project-thumb-overlay" aria-hidden="true">
          <span className="overlay-badge">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <circle cx="11" cy="11" r="8"/>
              <line x1="21" y1="21" x2="16.65" y2="16.65"/>
              <line x1="11" y1="8" x2="11" y2="14"/>
              <line x1="8" y1="11" x2="14" y2="11"/>
            </svg>
            Enlarge Sheet
          </span>
        </div>

        {/* Page indicator pill */}
        <div className="page-indicator-pill">
          Page {sheet.pageNumber}
        </div>
      </div>

      {/* Card Content Body */}
      <div className="project-card-body">
        <div className="project-meta-row">
          <span className="project-category-tag">{sheet.sheetLabel || sheet.categoryTitle}</span>
          {sheet.area && (
            <span className="project-area-badge">{sheet.area}</span>
          )}
        </div>

        <h3 className="project-title">{sheet.title}</h3>
        <p className="project-caption">{sheet.caption}</p>

        {sheet.highlights && sheet.highlights.length > 0 && (
          <div className="project-highlights-row">
            {sheet.highlights.map((h, i) => (
              <span key={i} className="highlight-tag">{h}</span>
            ))}
          </div>
        )}
      </div>
    </article>
  );
};
