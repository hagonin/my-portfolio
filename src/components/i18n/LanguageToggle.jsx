import { useLanguage } from '@/context/LanguageContext';

export default function LanguageToggle() {
  const { locale, changeLocale } = useLanguage();

  return (
    <div className="language-toggle d-flex align-items-center gap-1">
      <button
        onClick={() => changeLocale('fr')}
        className={`lang-btn ${locale === 'fr' ? 'active' : ''}`}
        aria-label="Français"
        type="button"
      >
        FR
      </button>
      <span className="text-muted">|</span>
      <button
        onClick={() => changeLocale('en')}
        className={`lang-btn ${locale === 'en' ? 'active' : ''}`}
        aria-label="English"
        type="button"
      >
        EN
      </button>
      <style jsx>{`
        .language-toggle {
          font-size: 0.875rem;
        }
        .lang-btn {
          background: none;
          border: none;
          color: var(--bs-secondary);
          cursor: pointer;
          padding: 0.25rem 0.5rem;
          transition: color 0.2s ease;
        }
        .lang-btn:hover {
          color: var(--bs-primary);
        }
        .lang-btn.active {
          color: var(--bs-primary);
          font-weight: 600;
        }
      `}</style>
    </div>
  );
}
