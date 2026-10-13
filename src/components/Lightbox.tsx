import React, { useEffect, useCallback } from 'react';
import type { ProjectSheet } from '../data/portfolioData';

interface LightboxProps {
  sheet: ProjectSheet | null;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export const Lightbox: React.FC<LightboxProps> = ({
  sheet,
  onClose,
  onPrev,
  onNext
}) => {
  // Handle keyboard events (Escape, Left, Right)
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (!sheet) return;
    if (e.key === 'Escape') {
      e.preventDefault();
      onClose();
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      onPrev();
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      onNext();
    }
  }, [sheet, onClose, onPrev, onNext]);

  useEffect(() => {
    if (!sheet) return;

    // Lock background scroll
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [sheet, handleKeyDown]);

  if (!sheet) return null;

  return (
    <div 
      className="poptrox-overlay" 
      role="dialog" 
      aria-modal="true" 
      aria-label={`Drawing Sheet: ${sheet.title}`}
      onClick={(e) => {
        // Close if clicked on dark backdrop
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <div className="poptrox-box">
        {/* Close Button at top-right of image */}
        <button
          type="button"
          className="poptrox-closer"
          onClick={onClose}
          aria-label="Close lightbox"
          title="Close (Esc)"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <line x1="18" y1="6" x2="6" y2="18"/>
            <line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        </button>

        {/* Previous Button */}
        <button
          type="button"
          className="poptrox-nav prev"
          onClick={(e) => {
            e.stopPropagation();
            onPrev();
          }}
          aria-label="Previous sheet"
          title="Previous (Left Arrow)"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>

        {/* Next Button */}
        <button
          type="button"
          className="poptrox-nav next"
          onClick={(e) => {
            e.stopPropagation();
            onNext();
          }}
          aria-label="Next sheet"
          title="Next (Right Arrow)"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>

        {/* Image Display */}
        <div className="poptrox-image-wrap">
          <img
            src={sheet.image}
            alt={sheet.title}
            className="poptrox-image"
          />
        </div>

        {/* Caption directly beneath the image */}
        <div className="poptrox-caption">
          <div>{sheet.title}</div>
          <div className="poptrox-subcaption">
            {sheet.categoryTitle} &middot; Page {sheet.pageNumber}
            {sheet.area && ` &middot; ${sheet.area}`}
          </div>
        </div>
      </div>
    </div>
  );
};
