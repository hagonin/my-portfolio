import { FaGithub, FaExternalLinkAlt, FaFigma } from 'react-icons/fa';
import { useLanguage } from '@/context/LanguageContext';

const ProjectLinks = ({ links, size = 'normal' }) => {
  const { locale } = useLanguage();

  if (!links) return null;

  const linkItems = [
    {
      key: 'github',
      url: links.github,
      icon: FaGithub,
      label: locale === 'en' ? 'Source Code' : 'Code source'
    },
    {
      key: 'demo',
      url: links.demo,
      icon: FaExternalLinkAlt,
      label: locale === 'en' ? 'Live Demo' : 'Démo'
    },
    {
      key: 'figma',
      url: links.figma,
      icon: FaFigma,
      label: 'Figma'
    }
  ].filter(item => item.url);

  if (linkItems.length === 0) return null;

  const isCompact = size === 'compact';

  return (
    <div className={`project-links ${isCompact ? 'project-links-compact' : ''}`}>
      {linkItems.map((item) => (
        <a
          key={item.key}
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          className="project-link"
          title={item.label}
        >
          <item.icon size={isCompact ? 16 : 20} />
          {!isCompact && <span>{item.label}</span>}
        </a>
      ))}

      <style jsx>{`
        .project-links {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
        }
        .project-links-compact {
          gap: 0.5rem;
        }
        .project-link {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 1rem;
          background-color: #1f2937;
          color: #fff;
          border-radius: 8px;
          font-size: 0.875rem;
          font-weight: 500;
          text-decoration: none;
          transition: all 0.2s ease;
        }
        .project-link:hover {
          background-color: #374151;
          transform: translateY(-2px);
        }
        .project-links-compact .project-link {
          padding: 0.375rem 0.625rem;
          border-radius: 6px;
        }
        [data-bs-theme="dark"] .project-link {
          background-color: #374151;
        }
        [data-bs-theme="dark"] .project-link:hover {
          background-color: #4b5563;
        }
      `}</style>
    </div>
  );
};

export default ProjectLinks;
