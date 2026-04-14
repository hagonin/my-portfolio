import { useState } from 'react';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';

const screenLabels = {
  homepage: { fr: 'Accueil', en: 'Homepage' },
  groups: { fr: 'Liste des Groupes', en: 'Group List' },
  'event-detail': { fr: 'Détail Événement', en: 'Event Detail' },
  profile: { fr: 'Profil Utilisateur', en: 'User Profile' },
  checkin: { fr: 'Check-in', en: 'Check-in' },
  stats: { fr: 'Statistiques', en: 'Statistics' }
};

export default function FigmaGallery({ screens }) {
  const { locale } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  if (!screens || screens.length === 0) {
    return (
      <div className="figma-gallery-placeholder">
        <div className="phone-frame-placeholder">
          <span className="placeholder-icon">📱</span>
          <p>{locale === 'fr' ? 'Écrans à venir...' : 'Screens coming soon...'}</p>
        </div>

        <style jsx>{`
          .figma-gallery-placeholder {
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 2rem;
          }
          .phone-frame-placeholder {
            width: 220px;
            height: 440px;
            background: linear-gradient(135deg, #1a1a1a, #333);
            border-radius: 32px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            color: #fff;
          }
          .placeholder-icon {
            font-size: 3rem;
            margin-bottom: 1rem;
          }
        `}</style>
      </div>
    );
  }

  const currentScreen = screens[activeIndex];
  const currentLabel = screenLabels[currentScreen.name]?.[locale] || currentScreen.name;

  return (
    <div className="figma-gallery">
      {/* Main Display with Phone Frame */}
      <div className="phone-frame">
        <div className="phone-notch" />
        <div className="phone-screen">
          <Image
            src={currentScreen.src}
            alt={currentLabel}
            fill
            style={{ objectFit: 'contain' }}
            onClick={() => setLightboxOpen(true)}
          />
        </div>
        <div className="phone-home-bar" />
      </div>

      {/* Screen Label */}
      <p className="screen-label">{currentLabel}</p>

      {/* Navigation Arrows */}
      <div className="gallery-nav">
        <button
          className="nav-btn"
          onClick={() => setActiveIndex((i) => Math.max(0, i - 1))}
          disabled={activeIndex === 0}
        >
          ←
        </button>
        <span className="nav-counter">
          {activeIndex + 1} / {screens.length}
        </span>
        <button
          className="nav-btn"
          onClick={() => setActiveIndex((i) => Math.min(screens.length - 1, i + 1))}
          disabled={activeIndex === screens.length - 1}
        >
          →
        </button>
      </div>

      {/* Thumbnail Navigation */}
      <div className="gallery-thumbs">
        {screens.map((screen, idx) => (
          <button
            key={screen.name}
            className={`thumb ${idx === activeIndex ? 'active' : ''}`}
            onClick={() => setActiveIndex(idx)}
          >
            <Image
              src={screen.src}
              alt={screenLabels[screen.name]?.[locale] || screen.name}
              width={50}
              height={100}
              style={{ objectFit: 'cover' }}
            />
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div className="lightbox" onClick={() => setLightboxOpen(false)}>
          <div className="lightbox-content">
            <Image
              src={currentScreen.src}
              alt={currentLabel}
              fill
              style={{ objectFit: 'contain', padding: '2rem' }}
            />
          </div>
          <button className="lightbox-close" onClick={() => setLightboxOpen(false)}>
            ×
          </button>
        </div>
      )}

      <style jsx>{`
        .figma-gallery {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 1rem;
        }
        .phone-frame {
          position: relative;
          width: 220px;
          height: 440px;
          background: linear-gradient(135deg, #1a1a1a, #333);
          border-radius: 32px;
          padding: 10px;
          box-shadow:
            0 0 0 2px #333,
            0 20px 40px rgba(0, 0, 0, 0.3);
        }
        .phone-notch {
          position: absolute;
          top: 8px;
          left: 50%;
          transform: translateX(-50%);
          width: 80px;
          height: 20px;
          background: #1a1a1a;
          border-radius: 0 0 12px 12px;
          z-index: 10;
        }
        .phone-screen {
          position: relative;
          width: 100%;
          height: 100%;
          background: #fff;
          border-radius: 24px;
          overflow: hidden;
          cursor: pointer;
        }
        .phone-home-bar {
          position: absolute;
          bottom: 6px;
          left: 50%;
          transform: translateX(-50%);
          width: 80px;
          height: 4px;
          background: #666;
          border-radius: 2px;
        }
        .screen-label {
          margin-top: 1rem;
          font-size: 0.875rem;
          font-weight: 500;
          color: #6b7280;
        }
        .gallery-nav {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-top: 1rem;
        }
        .nav-btn {
          width: 40px;
          height: 40px;
          border: 2px solid #e5e7eb;
          border-radius: 50%;
          background: transparent;
          font-size: 1.25rem;
          cursor: pointer;
          transition: all 0.2s;
          color: #374151;
        }
        .nav-btn:hover:not(:disabled) {
          border-color: #3b82f6;
          color: #3b82f6;
        }
        .nav-btn:disabled {
          opacity: 0.3;
          cursor: not-allowed;
        }
        [data-bs-theme="dark"] .nav-btn {
          border-color: #374151;
          color: #9ca3af;
        }
        .nav-counter {
          font-size: 0.875rem;
          color: #6b7280;
        }
        .gallery-thumbs {
          display: flex;
          justify-content: center;
          gap: 0.5rem;
          margin-top: 1rem;
          flex-wrap: wrap;
        }
        .thumb {
          border: 2px solid transparent;
          border-radius: 8px;
          overflow: hidden;
          cursor: pointer;
          transition: all 0.2s;
          padding: 0;
          background: none;
        }
        .thumb:hover {
          border-color: #93c5fd;
        }
        .thumb.active {
          border-color: #3b82f6;
        }
        .lightbox {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.9);
          z-index: 1000;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
        }
        .lightbox-content {
          position: relative;
          width: 90%;
          height: 90%;
        }
        .lightbox-close {
          position: absolute;
          top: 1rem;
          right: 1rem;
          width: 48px;
          height: 48px;
          background: rgba(255, 255, 255, 0.1);
          border: none;
          border-radius: 50%;
          color: #fff;
          font-size: 2rem;
          cursor: pointer;
          transition: background 0.2s;
        }
        .lightbox-close:hover {
          background: rgba(255, 255, 255, 0.2);
        }
      `}</style>
    </div>
  );
}
