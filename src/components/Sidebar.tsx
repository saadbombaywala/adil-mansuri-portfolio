import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Sidebar: React.FC = () => {
  return (
    <header id="header">
      <div className="header-inner">
        <span className="image avatar">
          <img src="/avatar.jpg" alt={PERSONAL_INFO.name} />
        </span>
        <h1>
          <strong>I am {PERSONAL_INFO.name}</strong>, an aspiring architect<br />
          passionate about concept design, interior design,<br />
          and architectural visualization.
        </h1>
      </div>

      <div id="desktop-sidebar-footer">
        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
          <li>&copy; {PERSONAL_INFO.name}</li>
          <li>{PERSONAL_INFO.institute} &middot; Enr: {PERSONAL_INFO.enrollmentNumber}</li>
          <li>
            <a href={`mailto:${PERSONAL_INFO.email}`} className="dotted-link">
              {PERSONAL_INFO.email}
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};
