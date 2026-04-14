import { useTranslation } from '@/hooks/use-translations';
import { skillsData } from '@/staticData/skills-data';
import SkillCategory from '@/components/skills/SkillCategory';

const Skills = () => {
	const { t, locale } = useTranslation();

	return (
		<div className="skills-section section-gap" data-title={locale === 'en' ? 'Skills' : 'Compétences'} id="skill">
			<div className="container">
				<div className="section-title">
					<h2 className="title">
						<span>{t('skills.title')}</span>
					</h2>
				</div>
				<div className="skills-categories">
					{skillsData.categories.map((category) => (
						<SkillCategory key={category.id} category={category} />
					))}
				</div>
			</div>

			<style jsx>{`
				.skills-section {
					padding: 80px 0;
				}
				.skills-categories {
					display: flex;
					flex-direction: column;
					gap: 2.5rem;
				}
			`}</style>

			<style jsx global>{`
				.skill-category {
					margin-bottom: 1rem;
				}
				.category-title {
					font-size: 1.25rem;
					font-weight: 600;
					margin-bottom: 1rem;
					padding-bottom: 0.5rem;
					border-bottom: 2px solid var(--bs-primary, #0d6efd);
					display: inline-block;
				}
				.skills-grid {
					display: grid;
					grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
					gap: 1.25rem;
				}
				@media (min-width: 768px) {
					.skills-grid {
						grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
					}
				}
				.skill-item {
					display: flex;
					flex-direction: column;
					align-items: center;
					padding: 1rem 0.75rem;
					border-radius: 8px;
					transition: all 0.3s ease;
					position: relative;
					cursor: pointer;
				}
				.skill-item:hover {
					background-color: rgba(0, 0, 0, 0.05);
					transform: translateY(-3px);
				}
				[data-bs-theme="dark"] .skill-item:hover {
					background-color: rgba(255, 255, 255, 0.08);
				}
				.skill-icon-wrapper {
					width: 48px;
					height: 48px;
					display: flex;
					align-items: center;
					justify-content: center;
					margin-bottom: 0.5rem;
				}
				.skill-name {
					font-size: 0.85rem;
					font-weight: 500;
					text-align: center;
					margin-bottom: 0.5rem;
				}
				.skill-bar {
					width: 100%;
					height: 4px;
					background-color: rgba(0, 0, 0, 0.1);
					border-radius: 2px;
					overflow: hidden;
				}
				[data-bs-theme="dark"] .skill-bar {
					background-color: rgba(255, 255, 255, 0.15);
				}
				.skill-progress {
					height: 100%;
					border-radius: 2px;
					transition: width 0.5s ease;
				}
				.skill-tooltip {
					position: absolute;
					bottom: 100%;
					left: 50%;
					transform: translateX(-50%);
					background-color: #1f2937;
					color: white;
					padding: 0.5rem 0.75rem;
					border-radius: 6px;
					font-size: 0.75rem;
					white-space: nowrap;
					opacity: 0;
					visibility: hidden;
					transition: all 0.2s ease;
					z-index: 10;
					display: flex;
					flex-direction: column;
					align-items: center;
					gap: 0.25rem;
					margin-bottom: 8px;
				}
				.skill-tooltip::after {
					content: '';
					position: absolute;
					top: 100%;
					left: 50%;
					transform: translateX(-50%);
					border: 6px solid transparent;
					border-top-color: #1f2937;
				}
				.skill-item:hover .skill-tooltip {
					opacity: 1;
					visibility: visible;
				}
				.tooltip-name {
					font-weight: 600;
				}
				.tooltip-years {
					opacity: 0.8;
				}
				.tooltip-level {
					font-weight: 500;
				}
			`}</style>
		</div>
	);
};

export default Skills;
