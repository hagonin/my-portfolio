import SkillItem from './SkillItem';
import { useLanguage } from '@/context/LanguageContext';

export default function SkillCategory({ category }) {
  const { locale } = useLanguage();

  return (
    <div className="skill-category">
      <h3 className="category-title">
        {category.name[locale] || category.name.fr}
      </h3>
      <div className="skills-grid">
        {category.skills.map((skill, idx) => (
          <SkillItem key={`${category.id}-${idx}`} skill={skill} />
        ))}
      </div>
    </div>
  );
}
