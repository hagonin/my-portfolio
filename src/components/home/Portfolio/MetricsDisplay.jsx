import { useEffect, useState, useRef } from 'react';
import { useLanguage } from '@/context/LanguageContext';

const MetricsDisplay = ({ metrics }) => {
  const { locale } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  if (!metrics) return null;

  const metricItems = [
    {
      key: 'tests',
      value: metrics.tests,
      label: locale === 'en' ? 'Tests' : 'Tests',
      suffix: ''
    },
    {
      key: 'coverage',
      value: metrics.coverage,
      label: locale === 'en' ? 'Coverage' : 'Couverture',
      suffix: '%'
    },
    {
      key: 'cacheReduction',
      value: metrics.cacheReduction,
      label: locale === 'en' ? 'Cache Reduction' : 'Réduction API',
      suffix: '%'
    }
  ].filter(item => item.value !== undefined);

  return (
    <div className="metrics-display" ref={containerRef}>
      {metricItems.map((item) => (
        <div key={item.key} className="metric-item">
          <span className="metric-value">
            <CountUp
              end={item.value}
              isVisible={isVisible}
              suffix={item.suffix}
            />
          </span>
          <span className="metric-label">{item.label}</span>
        </div>
      ))}

      <style jsx>{`
        .metrics-display {
          display: flex;
          gap: 1.5rem;
          padding: 1rem 0;
        }
        .metric-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 0.75rem 1rem;
          background: linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(147, 51, 234, 0.1));
          border-radius: 12px;
          min-width: 80px;
        }
        .metric-value {
          font-size: 1.5rem;
          font-weight: 700;
          color: #3b82f6;
        }
        .metric-label {
          font-size: 0.75rem;
          color: #6b7280;
          text-align: center;
        }
        [data-bs-theme="dark"] .metric-label {
          color: #9ca3af;
        }
      `}</style>
    </div>
  );
};

const CountUp = ({ end, isVisible, suffix = '' }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 1500;
    const steps = 60;
    const increment = end / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [end, isVisible]);

  return <>{count}{suffix}</>;
};

export default MetricsDisplay;
