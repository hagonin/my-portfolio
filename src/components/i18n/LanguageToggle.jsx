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
    { code: 'fr', label: 'FR' },
    { code: 'en', label: 'EN' }
  ];

  return (
    <div className="lang-toggle-fixed" ref={ref}>
      <button
        className="lang-icon-btn"
        onClick={() => setOpen((v) => !v)}
        aria-label="Switch language"
        type="button"
      >
        <MdTranslate size={20} />
        <span className="lang-current">{locale.toUpperCase()}</span>
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
        .lang-toggle-fixed {
          position: fixed;
          top: 20px;
          right: 20px;
          z-index: 9999;
        }
        .lang-icon-btn {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 8px 14px;
          border-radius: 20px;
          border: 1px solid rgba(255, 255, 255, 0.2);
          background: rgba(30, 30, 30, 0.85);
          backdrop-filter: blur(10px);
          color: #fff;
          cursor: pointer;
          transition: all 0.2s ease;
          font-size: 0.85rem;
          font-weight: 500;
        }
        .lang-icon-btn:hover {
          background: rgba(50, 50, 50, 0.95);
          border-color: rgba(255, 255, 255, 0.3);
        }
        .lang-current {
          font-weight: 600;
          letter-spacing: 0.5px;
        }
        .lang-dropdown {
          position: absolute;
          top: calc(100% + 8px);
          right: 0;
          background: rgba(30, 30, 30, 0.95);
          backdrop-filter: blur(10px);
          border-radius: 12px;
          border: 1px solid rgba(255, 255, 255, 0.15);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
          overflow: hidden;
          min-width: 80px;
        }
        .lang-option {
          display: block;
          width: 100%;
          padding: 0.6rem 1rem;
          border: none;
          background: transparent;
          text-align: center;
          font-size: 0.9rem;
          font-weight: 500;
          color: rgba(255, 255, 255, 0.8);
          cursor: pointer;
          transition: all 0.15s;
        }
        .lang-option:hover {
          background: rgba(255, 255, 255, 0.1);
          color: #fff;
        }
        .lang-option.active {
          font-weight: 700;
          color: #fff;
          background: rgba(255, 255, 255, 0.05);
        }
        .lang-option:not(:last-child) {
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        @media (max-width: 768px) {
          .lang-toggle-fixed {
            top: 15px;
            right: 15px;
          }
          .lang-icon-btn {
            padding: 6px 12px;
          }
        }
      `}</style>
    </div>
  );
}
