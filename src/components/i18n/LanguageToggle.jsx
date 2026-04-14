import { useState, useRef, useEffect } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { MdTranslate } from 'react-icons/md';

export default function LanguageToggle() {
  const { locale, changeLocale } = useLanguage();
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const languages = [
    { code: 'fr', label: 'Français' },
    { code: 'en', label: 'English' }
  ];

  return (
    <div className="lang-toggle-wrapper" ref={ref}>
      <button
        className="lang-icon-btn"
        onClick={() => setOpen((v) => !v)}
        aria-label="Switch language"
        type="button"
      >
        <MdTranslate size={22} />
      </button>

      {open && (
        <div className="lang-dropdown">
          {languages.map((lang) => (
            <button
              key={lang.code}
              className={`lang-option ${locale === lang.code ? 'active' : ''}`}
              onClick={() => { changeLocale(lang.code); setOpen(false); }}
              type="button"
            >
              {lang.label}
            </button>
          ))}
        </div>
      )}

      <style jsx>{`
        .lang-toggle-wrapper {
          position: relative;
        }
        .lang-icon-btn {
          width: 40px;
          height: 40px;
          border-radius: 12px;
          border: none;
          background: rgba(255, 255, 255, 0.12);
          color: inherit;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: background 0.2s;
        }
        .lang-icon-btn:hover {
          background: rgba(255, 255, 255, 0.2);
        }
        .lang-dropdown {
          position: absolute;
          top: calc(100% + 8px);
          right: 0;
          background: #fff;
          border-radius: 12px;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
          overflow: hidden;
          min-width: 130px;
          z-index: 1000;
        }
        .lang-option {
          display: block;
          width: 100%;
          padding: 0.75rem 1.25rem;
          border: none;
          background: transparent;
          text-align: left;
          font-size: 0.95rem;
          color: #1f2937;
          cursor: pointer;
          transition: background 0.15s;
        }
        .lang-option:hover {
          background: #f3f4f6;
        }
        .lang-option.active {
          font-weight: 700;
          color: #111827;
        }
        .lang-option:not(:last-child) {
          border-bottom: 1px solid #f3f4f6;
        }
      `}</style>
    </div>
  );
}
