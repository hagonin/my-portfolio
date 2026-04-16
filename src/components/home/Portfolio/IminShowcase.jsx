import { useLanguage } from '@/context/LanguageContext';
import CustomModal from '@/components/shared/CustomModal';
import FigmaGallery from './FigmaGallery';
import TechStackBadges from './TechStackBadges';

const iminScreens = [
  { name: 'homepage', src: '/assets/images/portfolio/imin/imin-homepage.png' },
  { name: 'groups', src: '/assets/images/portfolio/imin/imin-groups.png' },
  { name: 'event-detail', src: '/assets/images/portfolio/imin/imin-event-detail.png' },
  { name: 'profile', src: '/assets/images/portfolio/imin/imin-profile.png' }
];

export default function IminShowcase({ isOpen, onClose, project }) {
  const { locale } = useLanguage();

  if (!project) return null;

  const translation = project.translations[locale] || project.translations.fr;

  const features = [
    {
      icon: '⭐',
      title: 'Trust Score',
      desc: locale === 'fr'
        ? "Système de notation de fiabilité basé sur l'historique de présence"
        : 'Reliability rating system based on attendance history'
    },
    {
      icon: '📊',
      title: locale === 'fr' ? 'Statistiques' : 'Analytics',
      desc: locale === 'fr'
        ? "Tableau de bord pour suivre le taux de présence en temps réel"
        : 'Dashboard to track attendance rate in real-time'
    },
    {
      icon: '✅',
      title: 'Check-in',
      desc: locale === 'fr'
        ? "Confirmation de présence simple et rapide"
        : 'Quick and easy attendance confirmation'
    },
    {
      icon: '👥',
      title: locale === 'fr' ? 'Groupes' : 'Groups',
      desc: locale === 'fr'
        ? "Organisation des événements par groupes et communautés"
        : 'Event organization by groups and communities'
    }
  ];

  return (
    <CustomModal isOpen={isOpen} onRequestClose={onClose}>
      <div className="imin-showcase">
        <button className="modal-close" onClick={onClose}>&times;</button>

        {/* Header */}
        <header className="showcase-header">
          <h1 className="showcase-title">IMIN</h1>
          <p className="showcase-tagline">{translation.tagline}</p>
          <div className="showcase-badges">
            <span className="badge badge-role">
              {project.role[locale]}
            </span>
            <span className="badge badge-type">
              {locale === 'fr' ? 'Application Mobile' : 'Mobile App'}
            </span>
            <span className="badge badge-duration">
              {project.duration[locale]}
            </span>
          </div>
        </header>

        {/* Case Study Brief */}
        <section className="showcase-section case-study-brief">
          <div className="case-row">
            <div className="case-item">
              <h3>{locale === 'fr' ? 'Problème' : 'Problem'}</h3>
              <p>{translation.problem}</p>
            </div>
            <div className="case-item">
              <h3>Solution</h3>
              <p>{translation.solution}</p>
            </div>
          </div>
        </section>

        {/* Figma Gallery */}
        <section className="showcase-section">
          <h2 className="section-title">
            {locale === 'fr' ? 'Design Mobile' : 'Mobile Design'}
          </h2>
          <FigmaGallery screens={iminScreens} />
        </section>

        {/* Key Features */}
        <section className="showcase-section">
          <h2 className="section-title">
            {locale === 'fr' ? 'Fonctionnalités Clés' : 'Key Features'}
          </h2>
          <div className="features-grid">
            {features.map((feature, idx) => (
              <div key={idx} className="feature-card">
                <span className="feature-icon">{feature.icon}</span>
                <h4>{feature.title}</h4>
                <p>{feature.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Results */}
        {translation.results && (
          <section className="showcase-section">
            <h2 className="section-title">
              {locale === 'fr' ? 'Résultats' : 'Results'}
            </h2>
            <ul className="results-list">
              {translation.results.map((result, idx) => (
                <li key={idx}>{result}</li>
              ))}
            </ul>
          </section>
        )}

        {/* Tech Stack */}
        <section className="showcase-section">
          <h2 className="section-title">Tech Stack</h2>
          <TechStackBadges tech={project.tech} />
        </section>

        {/* Figma Link */}
        {project.links?.figma && (
          <section className="showcase-section figma-link-section">
            <a
              href={project.links.figma}
              target="_blank"
              rel="noopener noreferrer"
              className="figma-link"
            >
              <span className="figma-icon">🎨</span>
              {locale === 'fr' ? 'Voir sur Figma' : 'View on Figma'}
            </a>
          </section>
        )}
      </div>

      <style jsx>{`
        .imin-showcase {
          position: relative;
          max-width: 800px;
          max-height: 90vh;
          overflow-y: auto;
          background: #fff;
          border-radius: 16px;
          padding: 2rem;
        }
        [data-bs-theme="dark"] .imin-showcase {
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
          background: linear-gradient(135deg, #8b5cf6, #ec4899);
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
        .badge-role {
          background: linear-gradient(135deg, #8b5cf6, #7c3aed);
          color: #fff;
        }
        .badge-type {
          background: #fae8ff;
          color: #a21caf;
        }
        .badge-duration {
          background: #f3f4f6;
          color: #374151;
        }
        [data-bs-theme="dark"] .badge-type {
          background: rgba(168, 85, 247, 0.2);
          color: #c4b5fd;
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
        .case-study-brief .case-row {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1rem;
        }
        @media (min-width: 640px) {
          .case-study-brief .case-row {
            grid-template-columns: 1fr 1fr;
          }
        }
        .case-item {
          background: #f9fafb;
          padding: 1rem;
          border-radius: 8px;
          border-left: 4px solid #8b5cf6;
        }
        [data-bs-theme="dark"] .case-item {
          background: rgba(255, 255, 255, 0.05);
        }
        .case-item h3 {
          font-size: 0.875rem;
          font-weight: 600;
          text-transform: uppercase;
          color: #8b5cf6;
          margin: 0 0 0.5rem;
        }
        .case-item p {
          margin: 0;
          color: #374151;
          line-height: 1.6;
          font-size: 0.875rem;
        }
        [data-bs-theme="dark"] .case-item p {
          color: #d1d5db;
        }
        .features-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1rem;
        }
        @media (min-width: 640px) {
          .features-grid {
            grid-template-columns: repeat(4, 1fr);
          }
        }
        .feature-card {
          text-align: center;
          padding: 1rem;
          background: #f9fafb;
          border-radius: 12px;
        }
        [data-bs-theme="dark"] .feature-card {
          background: rgba(255, 255, 255, 0.05);
        }
        .feature-icon {
          font-size: 2rem;
          display: block;
          margin-bottom: 0.5rem;
        }
        .feature-card h4 {
          margin: 0 0 0.25rem;
          font-size: 0.875rem;
          font-weight: 600;
          color: #111827;
        }
        [data-bs-theme="dark"] .feature-card h4 {
          color: #f9fafb;
        }
        .feature-card p {
          margin: 0;
          font-size: 0.75rem;
          color: #6b7280;
          line-height: 1.4;
        }
        .results-list {
          margin: 0;
          padding-left: 1.5rem;
        }
        .results-list li {
          margin-bottom: 0.5rem;
          color: #374151;
        }
        [data-bs-theme="dark"] .results-list li {
          color: #d1d5db;
        }
        .figma-link-section {
          text-align: center;
        }
        .figma-link {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.75rem 1.5rem;
          background: linear-gradient(135deg, #8b5cf6, #ec4899);
          color: #fff;
          border-radius: 9999px;
          font-weight: 600;
          text-decoration: none;
          transition: transform 0.2s, box-shadow 0.2s;
        }
        .figma-link:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 20px rgba(139, 92, 246, 0.3);
        }
        .figma-icon {
          font-size: 1.25rem;
        }
      `}</style>
    </CustomModal>
  );
}
