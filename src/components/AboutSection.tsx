import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const AboutSection: React.FC = () => {
  return (
    <section className="content-section" id="about">
      <div className="section-header">
        <span className="section-eyebrow">Academic Background</span>
        <h2 className="section-title">About Adil Mansuri</h2>
        <div className="section-rule" />
      </div>

      <p className="about-intro-lead">
        {PERSONAL_INFO.bioSummary}
      </p>

      <div className="about-grid">
        {/* Education Timeline */}
        <div className="info-block">
          <div className="info-block-header">
            <h3 className="info-block-title">
              Academic Education
            </h3>
          </div>
          <div className="education-list">
            {PERSONAL_INFO.education.map((item, index) => (
              <div key={index} className="education-card">
                <div className="education-degree">{item.degree}</div>
                <div className="education-institution">{item.institution}</div>
                {'enrollment' in item && (
                  <div className="info-sub">Enrollment: {item.enrollment}</div>
                )}
                <div className="education-desc">{item.description}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Academic Focus & Institute Reference */}
        <div className="info-block">
          <div className="info-block-header">
            <h3 className="info-block-title">
              Institutional Profile
            </h3>
          </div>
          <div className="info-block-content">
            <div className="info-item">
              <span className="info-label">Institution</span>
              <span className="info-value">{PERSONAL_INFO.instituteFullName} ({PERSONAL_INFO.institute})</span>
            </div>
            <div className="info-item">
              <span className="info-label">Enrollment Number</span>
              <span className="info-value">{PERSONAL_INFO.enrollmentNumber}</span>
            </div>
            <div className="info-item">
              <span className="info-label">Location</span>
              <span className="info-value">{PERSONAL_INFO.location}</span>
            </div>
            <div className="info-item">
              <span className="info-label">Core Specializations</span>
              <div className="badge-row" style={{ marginTop: '0.4rem' }}>
                {PERSONAL_INFO.specializations.map((spec, i) => (
                  <span key={i} className="skill-badge">{spec}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
