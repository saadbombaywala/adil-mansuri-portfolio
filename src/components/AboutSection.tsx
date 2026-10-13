import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const AboutSection: React.FC = () => {
  return (
    <section id="one">
      <header className="major">
        <h2>
          I am an aspiring architect passionate about concept design, interior design, and architectural visualization.
        </h2>
      </header>
      <p>
        {PERSONAL_INFO.introduction}
      </p>
      <p style={{ color: '#999999', fontSize: '0.9em' }}>
        Currently pursuing Diploma in Architecture at {PERSONAL_INFO.instituteFullName} ({PERSONAL_INFO.institute} &middot; Enrollment: {PERSONAL_INFO.enrollmentNumber}) after completing secondary education (10th Pass GSEB, 2024). Specializations include sustainable architecture, technical drafting in AutoCAD, 3D modeling in SketchUp, Photoshop post-production, and V-Ray visualization.
      </p>
      <ul className="actions">
        <li>
          <a href="#two" className="button">
            Learn More
          </a>
        </li>
      </ul>
    </section>
  );
};
