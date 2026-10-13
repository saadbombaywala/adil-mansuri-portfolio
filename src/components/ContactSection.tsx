import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [copiedType, setCopiedType] = useState<string | null>(null);

  const handleCopy = (text: string, type: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedType(type);
      setTimeout(() => setCopiedType(null), 2500);
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(formData.subject || `Inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    // Genuine mailto-based submission
    window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section className="content-section" id="contact">
      <div className="section-header">
        <span className="section-eyebrow">Communication</span>
        <h2 className="section-title">Get In Touch</h2>
        <div className="section-rule" />
      </div>

      <div className="contact-layout">
        {/* Contact Information Column */}
        <div className="contact-info-col">
          <p className="contact-lead">
            Feel free to connect regarding academic inquiries, architectural reviews, studio collaborations, or portfolio discussions.
          </p>

          <div className="contact-cards-list">
            {/* Location */}
            <div className="contact-card">
              <div className="contact-icon-box" aria-hidden="true">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <div className="contact-card-text">
                <span className="contact-card-label">Location</span>
                <span className="contact-card-value">{PERSONAL_INFO.location}</span>
                <span className="contact-card-action" style={{ color: 'var(--text-muted)' }}>
                  Vadodara, Gujarat, India
                </span>
              </div>
            </div>

            {/* Phone */}
            <div className="contact-card">
              <div className="contact-icon-box" aria-hidden="true">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
              </div>
              <div className="contact-card-text" style={{ width: '100%' }}>
                <span className="contact-card-label">Direct Telephone</span>
                <a href={`tel:${PERSONAL_INFO.phone}`} className="contact-card-value">
                  +91 {PERSONAL_INFO.phone}
                </a>
                <div style={{ display: 'flex', gap: '0.75rem', marginTop: '0.35rem' }}>
                  <a href={`tel:${PERSONAL_INFO.phone}`} className="contact-card-action">
                    <span>Call Now</span>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <line x1="7" y1="17" x2="17" y2="7"/>
                      <polyline points="7 7 17 7 17 17"/>
                    </svg>
                  </a>
                  <button 
                    type="button" 
                    onClick={() => handleCopy(PERSONAL_INFO.phone, 'phone')}
                    className="contact-card-action"
                    style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
                  >
                    {copiedType === 'phone' ? '✓ Copied Number' : 'Copy Number'}
                  </button>
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="contact-card">
              <div className="contact-icon-box" aria-hidden="true">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
              </div>
              <div className="contact-card-text" style={{ width: '100%' }}>
                <span className="contact-card-label">Email Address</span>
                <a href={`mailto:${PERSONAL_INFO.email}`} className="contact-card-value">
                  {PERSONAL_INFO.email}
                </a>
                <div style={{ display: 'flex', gap: '0.75rem', marginTop: '0.35rem' }}>
                  <a href={`mailto:${PERSONAL_INFO.email}`} className="contact-card-action">
                    <span>Send Email</span>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <line x1="7" y1="17" x2="17" y2="7"/>
                      <polyline points="7 7 17 7 17 17"/>
                    </svg>
                  </a>
                  <button 
                    type="button" 
                    onClick={() => handleCopy(PERSONAL_INFO.email, 'email')}
                    className="contact-card-action"
                    style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
                  >
                    {copiedType === 'email' ? '✓ Copied Email' : 'Copy Email'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form Box (Genuine mailto-based submission) */}
        <div className="contact-form-box">
          <h3 className="contact-form-title">Send a Direct Message</h3>
          <p className="contact-form-desc">
            Submitting this form prepares an email directly directed to <strong>{PERSONAL_INFO.email}</strong> via your default email application.
          </p>

          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="contact-name" className="form-label">Your Name</label>
              <input
                id="contact-name"
                type="text"
                required
                className="form-input"
                placeholder="e.g. Ar. Rajesh Sharma"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>

            <div className="form-group">
              <label htmlFor="contact-email" className="form-label">Your Email</label>
              <input
                id="contact-email"
                type="email"
                required
                className="form-input"
                placeholder="e.g. rajesh@architecture.in"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>

            <div className="form-group">
              <label htmlFor="contact-subject" className="form-label">Subject</label>
              <input
                id="contact-subject"
                type="text"
                required
                className="form-input"
                placeholder="e.g. Academic Portfolio Inquiry"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
              />
            </div>

            <div className="form-group">
              <label htmlFor="contact-message" className="form-label">Message</label>
              <textarea
                id="contact-message"
                required
                className="form-textarea"
                placeholder="Write your note or feedback regarding Adil Mansuri's portfolio sheets..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              />
            </div>

            <button type="submit" className="submit-btn">
              <span>Send Message</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="22" y1="2" x2="11" y2="13"/>
                <polygon points="22 2 15 22 11 13 2 9 22 2"/>
              </svg>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
