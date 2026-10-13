import React, { useEffect, useRef, useState, useCallback } from 'react';
import type { ProjectSheet } from '../data/portfolioData';

interface LightboxProps {
  sheet: ProjectSheet | null;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
  currentIndex: number;
  totalCount: number;
}

export const Lightbox: React.FC<LightboxProps> = ({
  sheet,
  onClose,
  onPrev,
  onNext,
  currentIndex,
  totalCount
}) => {
  const [isZoomed, setIsZoomed] = useState(false);
  const closeBtnRef = useRef<HTMLButtonElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  // Reset zoom when sheet changes
  useEffect(() => {
    setIsZoomed(false);
  }, [sheet?.id]);

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

    // Focus close button on mount
    closeBtnRef.current?.focus();

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [sheet, handleKeyDown]);

  if (!sheet) return null;

  return (
    <div 
      className="lightbox-backdrop" 
      ref={modalRef}
      role="dialog" 
      aria-modal="true" 
      aria-label={`Drawing Sheet: ${sheet.title}`}
      onClick={(e) => {
        // Close if clicked outside image/controls
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      {/* Top Header Bar */}
      <div className="lightbox-header">
        <div className="lightbox-sheet-title">
          <span>{sheet.title}</span>
          {sheet.sheetLabel && (
            <span style={{ fontSize: '0.85rem', color: '#82c49e', marginLeft: '0.75rem', fontWeight: 400 }}>
              [{sheet.sheetLabel}]
            </span>
          )}
        </div>

        <div className="lightbox-controls-top">
          {/* Zoom Toggle Button */}
          <button
            type="button"
            className="lightbox-btn"
            onClick={() => setIsZoomed(!isZoomed)}
            aria-label={isZoomed ? "Reset zoom" : "Zoom drawing details"}
            title={isZoomed ? "Reset zoom (100%)" : "Zoom drawing (140%)"}
          >
            {isZoomed ? (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8"/>
                <line x1="21" y1="21" x2="16.65" y2="16.65"/>
                <line x1="8" y1="11" x2="14" y2="11"/>
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8"/>
                <line x1="21" y1="21" x2="16.65" y2="16.65"/>
                <line x1="11" y1="8" x2="11" y2="14"/>
                <line x1="8" y1="11" x2="14" y2="11"/>
              </svg>
            )}
          </button>

          {/* Close Button */}
          <button
            type="button"
            ref={closeBtnRef}
            className="lightbox-btn"
            onClick={onClose}
            aria-label="Close lightbox"
            title="Close (Esc)"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18"/>
              <line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
        </div>
      </div>

      {/* Main Lightbox Body with full image and navigation buttons */}
      <div className="lightbox-body">
        {/* Previous Button */}
        <button
          type="button"
          className="lightbox-nav-btn lightbox-prev"
          onClick={(e) => {
            e.stopPropagation();
            onPrev();
          }}
          aria-label="Previous sheet"
          title="Previous sheet (Left Arrow)"
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>

        {/* Next Button */}
        <button
          type="button"
          className="lightbox-nav-btn lightbox-next"
          onClick={(e) => {
            e.stopPropagation();
            onNext();
          }}
          aria-label="Next sheet"
          title="Next sheet (Right Arrow)"
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>

        {/* Image Frame - 100% aspect ratio preserved */}
        <div 
          className="lightbox-img-wrapper"
          onClick={() => setIsZoomed(!isZoomed)}
          title="Click to toggle zoom"
        >
          <img
            src={sheet.image}
            alt={`${sheet.title} - Academic Sheet Page ${sheet.pageNumber}`}
            className={`lightbox-image ${isZoomed ? 'zoomed' : ''}`}
          />
        </div>
      </div>

      {/* Lightbox Footer Caption Bar */}
      <div className="lightbox-footer">
        <div className="lightbox-footer-header">
          <span>{sheet.categoryTitle}</span>
          <span>•</span>
          <span>Sheet Page {sheet.pageNumber}</span>
          <span>•</span>
          <span>{currentIndex + 1} of {totalCount}</span>
          {sheet.area && (
            <>
              <span>•</span>
              <span>Area: {sheet.area}</span>
            </>
          )}
        </div>
        <p className="lightbox-footer-desc">{sheet.caption}</p>
        <span className="lightbox-keyboard-hint">
          Keyboard navigation: Use ◄ Left / ► Right arrows to browse · Esc to close · Click image to toggle zoom
        </span>
      </div>
    </div>
  );
};
