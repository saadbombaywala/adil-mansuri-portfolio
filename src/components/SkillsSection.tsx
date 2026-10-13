import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const SkillsSection: React.FC = () => {
  const { skills } = PERSONAL_INFO;

  return (
    <section className="content-section" id="skills">
      <div className="section-header">
        <span className="section-eyebrow">Technical Competencies</span>
        <h2 className="section-title">Skills & Specializations</h2>
        <div className="section-rule" />
      </div>

      <div className="skills-container">
        {/* Software proficiencies */}
        <div className="skills-group">
          <h3 className="skills-group-title">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
              <line x1="8" y1="21" x2="16" y2="21"/>
              <line x1="12" y1="17" x2="12" y2="21"/>
            </svg>
            Architectural & Design Software
          </h3>
          <div className="software-grid">
            {skills.software.map((sw, index) => (
              <div key={index} className="software-card">
                <div className="software-name">{sw.name}</div>
                <div className="software-level">{sw.level}</div>
                <div className="software-desc">{sw.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Professional skills & Languages */}
        <div className="skills-group">
          <h3 className="skills-group-title">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
              <circle cx="9" cy="7" r="4"/>
              <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
            </svg>
            Professional Capabilities & Languages
          </h3>
          <div className="about-grid" style={{ marginBottom: 0 }}>
            <div>
              <span className="info-label" style={{ display: 'block', marginBottom: '0.6rem' }}>Languages</span>
              <div className="badge-row">
                {skills.languages.map((lang, index) => (
                  <span key={index} className="skill-badge">
                    <strong>{lang.name}</strong> · {lang.proficiency}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <span className="info-label" style={{ display: 'block', marginBottom: '0.6rem' }}>Other Competencies</span>
              <div className="badge-row">
                {skills.otherSkills.map((item, index) => (
                  <span key={index} className="skill-badge" title={item.desc}>
                    {item.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Hobbies & Interests */}
        <div className="skills-group">
          <h3 className="skills-group-title">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
            </svg>
            Interests & Creative Disciplines
          </h3>
          <div className="badge-row">
            {skills.interests.map((interest, index) => (
              <span key={index} className="skill-badge">
                {interest.icon === 'camera' && (
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/>
                    <circle cx="12" cy="13" r="4"/>
                  </svg>
                )}
                {interest.icon === 'palette' && (
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="13.5" cy="6.5" r=".5"/>
                    <circle cx="17.5" cy="10.5" r=".5"/>
                    <circle cx="8.5" cy="7.5" r=".5"/>
                    <circle cx="6.5" cy="12.5" r=".5"/>
                    <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.563-2.512 5.563-5.563C22 6.5 17.5 2 12 2z"/>
                  </svg>
                )}
                {interest.icon === 'activity' && (
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M6 5v14M18 5v14M2 12h4M18 12h4M6 12h12"/>
                  </svg>
                )}
                {interest.icon === 'chef' && (
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M6 13.87A4 4 0 0 1 7.41 6a5.11 5.11 0 0 1 1.05-1.54 5 5 0 0 1 7.08 0A5.11 5.11 0 0 1 16.59 6 4 4 0 0 1 18 13.87V21H6Z"/>
                    <line x1="6" y1="17" x2="18" y2="17"/>
                  </svg>
                )}
                {interest.icon === 'leaf' && (
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/>
                    <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/>
                  </svg>
                )}
                {interest.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
