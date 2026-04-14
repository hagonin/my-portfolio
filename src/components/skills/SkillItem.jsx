import Image from 'next/image';
import { proficiencyLevels } from '@/staticData/skills-data';
import { useLanguage } from '@/context/LanguageContext';

export default function SkillItem({ skill }) {
  const { name, icon, level, years } = skill;
  const { locale } = useLanguage();
  const levelConfig = proficiencyLevels[level];

  const yearsText = locale === 'en'
    ? `${years} year${years > 1 ? 's' : ''}`
    : `${years} an${years > 1 ? 's' : ''}`;

  return (
    <div className="skill-item">
      <div className="skill-icon-wrapper">
        <Image
          src={`/assets/images/skills/${icon}`}
          alt={name}
          width={40}
          height={40}
          loading="lazy"
        />
      </div>
      <span className="skill-name">{name}</span>
      <div className="skill-bar">
        <div
          className="skill-progress"
          style={{
            width: levelConfig.width,
            backgroundColor: levelConfig.color
          }}
        />
      </div>
      <div className="skill-tooltip">
        <span className="tooltip-name">{name}</span>
        <span className="tooltip-years">{yearsText}</span>
        <span className="tooltip-level" style={{ color: levelConfig.color }}>
          {levelConfig.label[locale]}
        </span>
      </div>
    </div>
  );
}
