import React, { useState, useMemo } from 'react';
import { CATEGORIES, PORTFOLIO_PROJECTS, getSectionSheets } from '../data/portfolioData';
import type { ProjectSheet } from '../data/portfolioData';

interface GallerySectionProps {
  onOpenLightbox: (sheet: ProjectSheet, activeList: ProjectSheet[]) => void;
}

export const GallerySection: React.FC<GallerySectionProps> = ({ onOpenLightbox }) => {
  const [isFullPortfolio, setIsFullPortfolio] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  // Curated 6 representative works matching the 6 items in the reference video
  const curatedRecentWorks = useMemo(() => {
    const featuredIds = ['page-04', 'page-16', 'page-20', 'page-25', 'page-45', 'page-53'];
    return featuredIds
      .map((id) => PORTFOLIO_PROJECTS.find((p) => p.id === id))
      .filter((p): p is ProjectSheet => Boolean(p));
  }, []);

  // Filtered sheets when Full Portfolio is expanded
  const displaySheets = useMemo(() => {
    if (!isFullPortfolio) {
      return curatedRecentWorks;
    }
    if (selectedCategory === 'all') {
      return PORTFOLIO_PROJECTS;
    }
    return PORTFOLIO_PROJECTS.filter((s) => s.category === selectedCategory);
  }, [isFullPortfolio, selectedCategory, curatedRecentWorks]);

  return (
    <section id="two">
      <h2>Recent Work</h2>

      {/* Category filter pills shown when Full Portfolio is toggled */}
      {isFullPortfolio && (
        <div className="portfolio-category-nav" role="tablist" aria-label="Portfolio Categories">
          {CATEGORIES.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                className={`button small ${isActive ? 'active' : ''}`}
                onClick={() => setSelectedCategory(cat.id)}
                role="tab"
                aria-selected={isActive}
              >
                {cat.shortTitle} ({cat.count})
              </button>
            );
          })}
        </div>
      )}

      {/* Vertical work items matching the video reference */}
      <div className="work-list">
        {displaySheets.map((item) => (
          <article key={item.id} className="work-item">
            <div
              className="image thumb"
              onClick={() => onOpenLightbox(item, getSectionSheets(item.category))}
              role="button"
              tabIndex={0}
              aria-label={`View sheet: ${item.title}`}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  onOpenLightbox(item, getSectionSheets(item.category));
                }
              }}
            >
              <img
                src={item.image}
                alt={`${item.title} (Page ${item.pageNumber})`}
                loading="lazy"
              />
            </div>
            <h3>{item.title}</h3>
            <p>{item.caption}</p>
          </article>
        ))}
      </div>

      {/* Outlined Full Portfolio Button matching the reference video */}
      <ul className="actions">
        <li>
          <button
            type="button"
            className="button"
            onClick={() => {
              setIsFullPortfolio(!isFullPortfolio);
              if (!isFullPortfolio) {
                // Scroll slightly to keep place
                const el = document.getElementById('two');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            {isFullPortfolio ? 'Show Recent Only' : 'Full Portfolio'}
          </button>
        </li>
      </ul>
    </section>
  );
};
