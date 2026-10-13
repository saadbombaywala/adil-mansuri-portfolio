import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio Inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="three">
      <h2>Get In Touch</h2>
      <p>
        Feel free to reach out regarding academic inquiries, architectural reviews, or collaboration opportunities. My portfolio sheets and technical drawings are available for studio review.
      </p>

      <div className="contact-desktop-row">
        {/* Contact Form */}
        <div className="contact-form-side">
          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-col">
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>
              <div className="form-col">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
            </div>
            <div>
              <textarea
                name="message"
                id="message"
                placeholder="Message"
                rows={4}
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              />
            </div>
            <ul className="actions">
              <li>
                <button type="submit" className="button">
                  Send Message
                </button>
              </li>
            </ul>
          </form>
        </div>

        {/* Text-Based Contact Info List with Simple Icons matching sec_019 and sec_038 */}
        <div className="contact-info-side">
          <ul className="contact-list">
            <li>
              <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
              </svg>
              <span>
                {PERSONAL_INFO.location}
                <br />
                {PERSONAL_INFO.institute} &middot; Enr: {PERSONAL_INFO.enrollmentNumber}
              </span>
            </li>
            <li>
              <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
                <line x1="12" y1="18" x2="12.01" y2="18" />
              </svg>
              <span>
                <a href={`tel:${PERSONAL_INFO.phone}`} className="dotted-link">
                  {PERSONAL_INFO.phone}
                </a>
              </span>
            </li>
            <li>
              <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              <span>
                <a href={`mailto:${PERSONAL_INFO.email}`} className="dotted-link">
                  {PERSONAL_INFO.email}
                </a>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
