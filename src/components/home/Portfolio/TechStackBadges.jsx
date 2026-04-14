const TechStackBadges = ({ tech, limit }) => {
  const displayTech = limit ? tech.slice(0, limit) : tech;
  const remaining = limit && tech.length > limit ? tech.length - limit : 0;

  return (
    <div className="tech-stack-badges">
      {displayTech.map((item, idx) => (
        <span key={idx} className="tech-badge">
          {item}
        </span>
      ))}
      {remaining > 0 && (
        <span className="tech-badge tech-badge-more">+{remaining}</span>
      )}

      <style jsx>{`
        .tech-stack-badges {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }
        .tech-badge {
          display: inline-block;
          padding: 0.25rem 0.75rem;
          font-size: 0.75rem;
          font-weight: 500;
          background-color: rgba(59, 130, 246, 0.1);
          color: #3b82f6;
          border-radius: 9999px;
          border: 1px solid rgba(59, 130, 246, 0.2);
          transition: all 0.2s ease;
        }
        .tech-badge:hover {
          background-color: rgba(59, 130, 246, 0.2);
        }
        .tech-badge-more {
          background-color: rgba(107, 114, 128, 0.1);
          color: #6b7280;
          border-color: rgba(107, 114, 128, 0.2);
        }
        [data-bs-theme="dark"] .tech-badge {
          background-color: rgba(59, 130, 246, 0.2);
          border-color: rgba(59, 130, 246, 0.3);
        }
        [data-bs-theme="dark"] .tech-badge-more {
          background-color: rgba(156, 163, 175, 0.2);
          color: #9ca3af;
        }
      `}</style>
    </div>
  );
};

export default TechStackBadges;
