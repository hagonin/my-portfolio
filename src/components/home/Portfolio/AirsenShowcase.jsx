import { useState } from 'react';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import CountUp from 'react-countup';
import CustomModal from '@/components/shared/CustomModal';
import 'react-circular-progressbar/dist/styles.css';

const AirsenShowcase = ({ isOpen, onClose, project }) => {
  const { locale } = useLanguage();
  const [activeTab, setActiveTab] = useState('backend');

  if (!project) return null;

  const translation = project.translations[locale] || project.translations.fr;

  const metrics = [
    {
      type: 'progress',
      value: 90,
      label: locale === 'fr' ? 'Réduction Appels API' : 'API Call Reduction',
      color: '#22c55e'
    },
    {
      type: 'progress',
      value: 82,
      label: locale === 'fr' ? 'Couverture de Code' : 'Code Coverage',
      color: '#3b82f6'
    },
    {
      type: 'counter',
      value: 611,
      label: 'Tests',
      suffix: ''
    },
    {
      type: 'counter',
      value: 35000,
      label: 'Communes',
      suffix: '+'
    }
  ];

  const techHighlights = [
    {
      title: locale === 'fr' ? 'Sécurité' : 'Security',
      icon: '🔒',
      items: [
        'JWT Authentication (24h access + 7d refresh)',
        'BCrypt password hashing',
        'Redis token blacklist'
      ]
    },
    {
      title: 'Performance',
      icon: '⚡',
      items: [
        locale === 'fr' ? 'Cache Redis (90% hit rate)' : 'Redis cache (90% hit rate)',
        'Circuit breakers (Resilience4j)',
        'Rate limiting (Bucket4j)'
      ]
    },
    {
      title: 'DevOps',
      icon: '🚀',
      items: [
        'Docker Compose (5 services)',
        'GitHub Actions CI/CD',
        'Multi-stage Dockerfile'
      ]
    },
    {
      title: 'Testing',
      icon: '✅',
      items: [
        'JUnit 5 + Mockito (backend)',
        'TestContainers (integration)',
        'Jasmine + Karma (frontend)'
      ]
    }
  ];

  const techStack = {
    backend: ['Java 21', 'Spring Boot 3.2', 'MapStruct', 'Lombok'],
    frontend: ['Angular 20', 'TypeScript 5.8', 'RxJS', 'Leaflet'],
    database: ['MariaDB 11.6', 'Redis 7.4', 'Flyway'],
    apis: ['ATMO France', 'OpenMeteo', 'INSEE']
  };

  const myRole = locale === 'fr'
    ? [
        'Coordination technique de l\'équipe de 3 développeurs',
        'Architecture backend et choix technologiques',
        'Mise en place du pipeline CI/CD avec GitHub Actions',
        'Code reviews et validation des PRs',
        'Documentation Swagger et README',
        'Intégration des 3 APIs externes'
      ]
    : [
        'Technical coordination of 3-developer team',
        'Backend architecture and tech decisions',
        'CI/CD pipeline setup with GitHub Actions',
        'Code reviews and PR validation',
        'Swagger and README documentation',
        'Integration of 3 external APIs'
      ];

  return (
    <CustomModal isOpen={isOpen} onRequestClose={onClose}>
      <div className="airsen-showcase">
        <button className="modal-close" onClick={onClose}>&times;</button>

        {/* Header */}
        <header className="showcase-header">
          <h1 className="showcase-title">AIRSEN</h1>
          <p className="showcase-tagline">{translation.tagline}</p>
          <div className="showcase-badges">
            <span className="badge badge-lead">Lead Developer</span>
            <span className="badge badge-team">
              {locale === 'fr' ? 'Équipe de 3' : 'Team of 3'}
            </span>
            <span className="badge badge-duration">
              {project.duration[locale]}
            </span>
          </div>
        </header>

        {/* Metrics Dashboard */}
        <section className="showcase-section">
          <h2 className="section-title">
            {locale === 'fr' ? 'Métriques Clés' : 'Key Metrics'}
          </h2>
          <div className="metrics-grid">
            {metrics.map((metric, idx) => (
              <div key={idx} className="metric-card">
                {metric.type === 'progress' ? (
                  <div className="circular-progress">
                    <CircularProgressbar
                      value={metric.value}
                      text={`${metric.value}%`}
                      styles={buildStyles({
                        textSize: '1.5rem',
                        pathColor: metric.color,
                        textColor: metric.color,
                        trailColor: '#e5e7eb'
                      })}
                    />
                  </div>
                ) : (
                  <div className="counter-display">
                    <CountUp
                      end={metric.value}
                      duration={2}
                      suffix={metric.suffix}
                      enableScrollSpy
                      scrollSpyOnce
                    />
                  </div>
                )}
                <span className="metric-label">{metric.label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Case Study */}
        <section className="showcase-section case-study">
          <div className="case-item">
            <h3>{locale === 'fr' ? 'Problème' : 'Problem'}</h3>
            <p>{translation.problem}</p>
          </div>
          <div className="case-item">
            <h3>Solution</h3>
            <p>{translation.solution}</p>
          </div>
          <div className="case-item">
            <h3>{locale === 'fr' ? 'Résultats' : 'Results'}</h3>
            <ul>
              {translation.results.map((result, idx) => (
                <li key={idx}>{result}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* Technical Highlights */}
        <section className="showcase-section">
          <h2 className="section-title">
            {locale === 'fr' ? 'Points Techniques' : 'Technical Highlights'}
          </h2>
          <div className="highlights-grid">
            {techHighlights.map((highlight, idx) => (
              <div key={idx} className="highlight-card">
                <div className="highlight-header">
                  <span className="highlight-icon">{highlight.icon}</span>
                  <h4>{highlight.title}</h4>
                </div>
                <ul>
                  {highlight.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Tech Stack */}
        <section className="showcase-section">
          <h2 className="section-title">Tech Stack</h2>
          <div className="stack-tabs">
            {Object.keys(techStack).map((tab) => (
              <button
                key={tab}
                className={`stack-tab ${activeTab === tab ? 'active' : ''}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
          <div className="stack-items">
            {techStack[activeTab].map((tech, idx) => (
              <span key={idx} className="stack-badge">{tech}</span>
            ))}
          </div>
        </section>

        {/* My Role */}
        <section className="showcase-section">
          <h2 className="section-title">
            {locale === 'fr' ? 'Mon Rôle' : 'My Role'}
          </h2>
          <ul className="role-list">
            {myRole.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </section>

        {/* Video Placeholder */}
        <section className="showcase-section">
          <h2 className="section-title">
            {locale === 'fr' ? 'Démo Vidéo' : 'Video Demo'}
          </h2>
          <div className="video-placeholder">
            <span className="placeholder-icon">🎬</span>
            <p>{locale === 'fr' ? 'Vidéo à venir...' : 'Video coming soon...'}</p>
          </div>
        </section>
      </div>

      <style jsx>{`
        .airsen-showcase {
          position: relative;
          max-width: 900px;
          max-height: 90vh;
          overflow-y: auto;
          background: #fff;
          border-radius: 16px;
          padding: 2rem;
        }
        [data-bs-theme="dark"] .airsen-showcase {
          background: #1f2937;
        }
        .modal-close {
          position: fixed;
          top: 1rem;
          right: 1rem;
          width: 40px;
          height: 40px;
          border: none;
          background: rgba(0, 0, 0, 0.5);
          color: #fff;
          font-size: 1.5rem;
          border-radius: 50%;
          cursor: pointer;
          z-index: 100;
        }
        .showcase-header {
          text-align: center;
          margin-bottom: 2rem;
          padding-bottom: 2rem;
          border-bottom: 1px solid #e5e7eb;
        }
        [data-bs-theme="dark"] .showcase-header {
          border-bottom-color: #374151;
        }
        .showcase-title {
          font-size: 2.5rem;
          font-weight: 800;
          margin: 0;
          background: linear-gradient(135deg, #3b82f6, #22c55e);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .showcase-tagline {
          font-size: 1.125rem;
          color: #6b7280;
          margin: 0.5rem 0 1rem;
        }
        .showcase-badges {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 0.5rem;
        }
        .badge {
          padding: 0.375rem 0.875rem;
          border-radius: 9999px;
          font-size: 0.75rem;
          font-weight: 600;
        }
        .badge-lead {
          background: linear-gradient(135deg, #f59e0b, #d97706);
          color: #fff;
        }
        .badge-team {
          background: #dbeafe;
          color: #1d4ed8;
        }
        .badge-duration {
          background: #f3f4f6;
          color: #374151;
        }
        [data-bs-theme="dark"] .badge-team {
          background: rgba(59, 130, 246, 0.2);
          color: #93c5fd;
        }
        [data-bs-theme="dark"] .badge-duration {
          background: #374151;
          color: #d1d5db;
        }
        .showcase-section {
          margin-bottom: 2rem;
        }
        .section-title {
          font-size: 1.25rem;
          font-weight: 700;
          margin-bottom: 1rem;
          color: #111827;
        }
        [data-bs-theme="dark"] .section-title {
          color: #f9fafb;
        }
        .metrics-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1rem;
        }
        @media (min-width: 640px) {
          .metrics-grid {
            grid-template-columns: repeat(4, 1fr);
          }
        }
        .metric-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 1rem;
          background: linear-gradient(135deg, #f0f9ff, #ecfdf5);
          border-radius: 12px;
        }
        [data-bs-theme="dark"] .metric-card {
          background: linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(34, 197, 94, 0.1));
        }
        .circular-progress {
          width: 80px;
          height: 80px;
          margin-bottom: 0.5rem;
        }
        .counter-display {
          font-size: 2rem;
          font-weight: 800;
          color: #3b82f6;
          line-height: 1;
          height: 80px;
          display: flex;
          align-items: center;
        }
        .metric-label {
          font-size: 0.75rem;
          color: #6b7280;
          text-align: center;
        }
        .case-study {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .case-item {
          background: #f9fafb;
          padding: 1rem;
          border-radius: 8px;
          border-left: 4px solid #3b82f6;
        }
        [data-bs-theme="dark"] .case-item {
          background: rgba(255, 255, 255, 0.05);
        }
        .case-item h3 {
          font-size: 0.875rem;
          font-weight: 600;
          text-transform: uppercase;
          color: #3b82f6;
          margin: 0 0 0.5rem;
        }
        .case-item p, .case-item ul {
          margin: 0;
          color: #374151;
          line-height: 1.6;
        }
        [data-bs-theme="dark"] .case-item p,
        [data-bs-theme="dark"] .case-item ul {
          color: #d1d5db;
        }
        .case-item ul {
          padding-left: 1.25rem;
        }
        .highlights-grid {
          display: grid;
          grid-template-columns: repeat(1, 1fr);
          gap: 1rem;
        }
        @media (min-width: 640px) {
          .highlights-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (min-width: 768px) {
          .highlights-grid {
            grid-template-columns: repeat(4, 1fr);
          }
        }
        .highlight-card {
          background: #f9fafb;
          padding: 1rem;
          border-radius: 8px;
        }
        [data-bs-theme="dark"] .highlight-card {
          background: rgba(255, 255, 255, 0.05);
        }
        .highlight-header {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 0.75rem;
        }
        .highlight-icon {
          font-size: 1.25rem;
        }
        .highlight-card h4 {
          margin: 0;
          font-size: 0.875rem;
          font-weight: 600;
          color: #111827;
        }
        [data-bs-theme="dark"] .highlight-card h4 {
          color: #f9fafb;
        }
        .highlight-card ul {
          margin: 0;
          padding-left: 1rem;
          font-size: 0.75rem;
          color: #6b7280;
        }
        .highlight-card li {
          margin-bottom: 0.25rem;
        }
        .stack-tabs {
          display: flex;
          gap: 0.5rem;
          margin-bottom: 1rem;
          flex-wrap: wrap;
        }
        .stack-tab {
          padding: 0.5rem 1rem;
          border: 2px solid #e5e7eb;
          border-radius: 8px;
          background: transparent;
          font-size: 0.875rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s;
          color: #6b7280;
        }
        .stack-tab:hover {
          border-color: #3b82f6;
          color: #3b82f6;
        }
        .stack-tab.active {
          background: #3b82f6;
          border-color: #3b82f6;
          color: #fff;
        }
        [data-bs-theme="dark"] .stack-tab {
          border-color: #374151;
          color: #9ca3af;
        }
        .stack-items {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }
        .stack-badge {
          padding: 0.5rem 1rem;
          background: #dbeafe;
          color: #1d4ed8;
          border-radius: 8px;
          font-size: 0.875rem;
          font-weight: 500;
        }
        [data-bs-theme="dark"] .stack-badge {
          background: rgba(59, 130, 246, 0.2);
          color: #93c5fd;
        }
        .role-list {
          margin: 0;
          padding-left: 1.5rem;
        }
        .role-list li {
          margin-bottom: 0.5rem;
          color: #374151;
          line-height: 1.6;
        }
        [data-bs-theme="dark"] .role-list li {
          color: #d1d5db;
        }
        .video-placeholder {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 3rem;
          background: #f9fafb;
          border-radius: 12px;
          border: 2px dashed #d1d5db;
        }
        [data-bs-theme="dark"] .video-placeholder {
          background: rgba(255, 255, 255, 0.02);
          border-color: #374151;
        }
        .placeholder-icon {
          font-size: 3rem;
          margin-bottom: 0.5rem;
        }
        .video-placeholder p {
          margin: 0;
          color: #6b7280;
        }
      `}</style>
    </CustomModal>
  );
};

export default AirsenShowcase;
