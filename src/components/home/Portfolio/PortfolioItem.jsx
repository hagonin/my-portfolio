import { motion } from 'framer-motion';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import TechStackBadges from './TechStackBadges';

const PortfolioItem = ({ project, onClick }) => {
	const { locale } = useLanguage();
	const translation = project.translations[locale] || project.translations.fr;

	return (
		<motion.div
			className="col-12 col-md-6 col-lg-4 portfolio-item"
			style={{ transformOrigin: 'left bottom' }}
			layout
			initial={{ opacity: 0, scale: 0.9 }}
			animate={{ opacity: 1, scale: 1 }}
			exit={{ opacity: 0, scale: 0.9 }}
			transition={{ duration: 0.3 }}
		>
			<div className="project-card" onClick={onClick}>
				<div className="project-image-wrapper">
					{project.image && (
						<Image
							src={project.image}
							alt={translation.name}
							width={380}
							height={240}
							className="project-image"
						/>
					)}
					{project.featured && (
						<span className="featured-badge">
							{locale === 'en' ? 'Featured' : 'En vedette'}
						</span>
					)}
				</div>
				<div className="project-content">
					<h3 className="project-name">{translation.name}</h3>
					<p className="project-tagline">{translation.tagline}</p>
					<TechStackBadges tech={project.tech} limit={4} />
				</div>
			</div>

			<style jsx>{`
				.project-card {
					background: #fff;
					border-radius: 16px;
					overflow: hidden;
					cursor: pointer;
					transition: all 0.3s ease;
					box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
					height: 100%;
					display: flex;
					flex-direction: column;
				}
				.project-card:hover {
					transform: translateY(-8px);
					box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
				}
				[data-bs-theme="dark"] .project-card {
					background: #1f2937;
				}
				.project-image-wrapper {
					position: relative;
					width: 100%;
					height: 200px;
					overflow: hidden;
				}
				.project-card :global(.project-image) {
					width: 100%;
					height: 100%;
					object-fit: cover;
					transition: transform 0.3s ease;
				}
				.project-card:hover :global(.project-image) {
					transform: scale(1.05);
				}
				.featured-badge {
					position: absolute;
					top: 12px;
					right: 12px;
					background: linear-gradient(135deg, #f59e0b, #d97706);
					color: #fff;
					padding: 0.25rem 0.75rem;
					border-radius: 9999px;
					font-size: 0.75rem;
					font-weight: 600;
				}
				.project-content {
					padding: 1.25rem;
					display: flex;
					flex-direction: column;
					gap: 0.5rem;
					flex: 1;
				}
				.project-name {
					font-size: 1.25rem;
					font-weight: 700;
					margin: 0;
					color: #111827;
				}
				[data-bs-theme="dark"] .project-name {
					color: #f9fafb;
				}
				.project-tagline {
					font-size: 0.875rem;
					color: #6b7280;
					margin: 0 0 0.5rem 0;
				}
				[data-bs-theme="dark"] .project-tagline {
					color: #9ca3af;
				}
			`}</style>
		</motion.div>
	);
};

export default PortfolioItem;
