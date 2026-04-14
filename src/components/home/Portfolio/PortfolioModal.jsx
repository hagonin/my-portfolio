import CustomModal from '@/components/shared/CustomModal';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import TechStackBadges from './TechStackBadges';
import MetricsDisplay from './MetricsDisplay';
import ProjectLinks from './ProjectLinks';

const PortfolioModal = ({ isOpen, onRequestClose, project }) => {
	const { locale } = useLanguage();

	if (!project) return null;

	const translation = project.translations[locale] || project.translations.fr;
	const isVideo = project.video && !project.video.match(/\.(jpg|jpeg|png|gif|webp)$/i);

	return (
		<CustomModal isOpen={isOpen} onRequestClose={onRequestClose}>
			<div className="project-modal">
				<button className="modal-close" onClick={onRequestClose}>
					&times;
				</button>

				<div className="modal-content">
					<div className="modal-media">
						{isVideo ? (
							<iframe
								src={project.video}
								title={translation.name}
								width="100%"
								height="350"
								allowFullScreen
								className="modal-video"
							/>
						) : (
							project.image && (
								<Image
									src={project.image}
									alt={translation.name}
									width={600}
									height={350}
									className="modal-image"
								/>
							)
						)}
					</div>

					<div className="modal-details">
						<div className="modal-header">
							<h2 className="modal-title">{translation.name}</h2>
							<p className="modal-tagline">{translation.tagline}</p>
						</div>

						<div className="modal-meta">
							<div className="meta-item">
								<span className="meta-label">{locale === 'en' ? 'Role' : 'Rôle'}</span>
								<span className="meta-value">{project.role[locale] || project.role.fr}</span>
							</div>
							{project.teamSize && (
								<div className="meta-item">
									<span className="meta-label">{locale === 'en' ? 'Team' : 'Équipe'}</span>
									<span className="meta-value">
										{project.teamSize} {locale === 'en' ? (project.teamSize > 1 ? 'people' : 'person') : (project.teamSize > 1 ? 'personnes' : 'personne')}
									</span>
								</div>
							)}
							<div className="meta-item">
								<span className="meta-label">{locale === 'en' ? 'Duration' : 'Durée'}</span>
								<span className="meta-value">{project.duration[locale] || project.duration.fr}</span>
							</div>
						</div>

						{project.metrics && <MetricsDisplay metrics={project.metrics} />}

						{!project.compact && translation.problem && (
							<div className="case-study">
								<div className="case-study-section">
									<h4 className="case-section-title">
										{locale === 'en' ? 'Problem' : 'Problème'}
									</h4>
									<p>{translation.problem}</p>
								</div>

								<div className="case-study-section">
									<h4 className="case-section-title">
										{locale === 'en' ? 'Solution' : 'Solution'}
									</h4>
									<p>{translation.solution}</p>
								</div>

								{translation.results && (
									<div className="case-study-section">
										<h4 className="case-section-title">
											{locale === 'en' ? 'Results' : 'Résultats'}
										</h4>
										<ul className="results-list">
											{translation.results.map((result, idx) => (
												<li key={idx}>{result}</li>
											))}
										</ul>
									</div>
								)}
							</div>
						)}

						{project.compact && translation.description && (
							<div className="case-study-section">
								<p>{translation.description}</p>
							</div>
						)}

						<div className="modal-tech">
							<h4 className="tech-title">
								{locale === 'en' ? 'Technologies' : 'Technologies'}
							</h4>
							<TechStackBadges tech={project.tech} />
						</div>

						<ProjectLinks links={project.links} />
					</div>
				</div>
			</div>

			<style jsx>{`
				.project-modal {
					position: relative;
					max-height: 90vh;
					overflow-y: auto;
					background: #fff;
					border-radius: 16px;
				}
				[data-bs-theme="dark"] .project-modal {
					background: #1f2937;
				}
				.modal-close {
					position: absolute;
					top: 1rem;
					right: 1rem;
					width: 40px;
					height: 40px;
					border: none;
					background: rgba(0, 0, 0, 0.5);
					color: #fff;
					font-size: 1.5rem;
					border-radius: 50%;
					cursor: pointer;
					z-index: 10;
					display: flex;
					align-items: center;
					justify-content: center;
					transition: background 0.2s ease;
				}
				.modal-close:hover {
					background: rgba(0, 0, 0, 0.7);
				}
				.modal-content {
					display: flex;
					flex-direction: column;
				}
				.modal-media {
					width: 100%;
					background: #111827;
				}
				.project-modal :global(.modal-image) {
					width: 100%;
					height: auto;
					object-fit: cover;
				}
				.modal-video {
					border: none;
				}
				.modal-details {
					padding: 1.5rem;
					display: flex;
					flex-direction: column;
					gap: 1.5rem;
				}
				.modal-header {
					border-bottom: 1px solid rgba(0, 0, 0, 0.1);
					padding-bottom: 1rem;
				}
				[data-bs-theme="dark"] .modal-header {
					border-bottom-color: rgba(255, 255, 255, 0.1);
				}
				.modal-title {
					font-size: 1.75rem;
					font-weight: 700;
					margin: 0 0 0.5rem 0;
					color: #111827;
				}
				[data-bs-theme="dark"] .modal-title {
					color: #f9fafb;
				}
				.modal-tagline {
					font-size: 1rem;
					color: #6b7280;
					margin: 0;
				}
				[data-bs-theme="dark"] .modal-tagline {
					color: #9ca3af;
				}
				.modal-meta {
					display: flex;
					flex-wrap: wrap;
					gap: 1.5rem;
				}
				.meta-item {
					display: flex;
					flex-direction: column;
					gap: 0.25rem;
				}
				.meta-label {
					font-size: 0.75rem;
					font-weight: 600;
					text-transform: uppercase;
					color: #9ca3af;
				}
				.meta-value {
					font-size: 0.875rem;
					font-weight: 500;
					color: #111827;
				}
				[data-bs-theme="dark"] .meta-value {
					color: #f9fafb;
				}
				.case-study {
					display: flex;
					flex-direction: column;
					gap: 1.25rem;
				}
				.case-study-section {
					background: rgba(0, 0, 0, 0.02);
					padding: 1rem;
					border-radius: 8px;
					border-left: 3px solid #3b82f6;
				}
				[data-bs-theme="dark"] .case-study-section {
					background: rgba(255, 255, 255, 0.05);
				}
				.case-section-title {
					font-size: 0.875rem;
					font-weight: 600;
					text-transform: uppercase;
					color: #3b82f6;
					margin: 0 0 0.5rem 0;
				}
				.case-study-section p {
					margin: 0;
					color: #374151;
					line-height: 1.6;
				}
				[data-bs-theme="dark"] .case-study-section p {
					color: #d1d5db;
				}
				.results-list {
					margin: 0;
					padding-left: 1.25rem;
					color: #374151;
				}
				[data-bs-theme="dark"] .results-list {
					color: #d1d5db;
				}
				.results-list li {
					margin-bottom: 0.25rem;
				}
				.modal-tech {
					border-top: 1px solid rgba(0, 0, 0, 0.1);
					padding-top: 1rem;
				}
				[data-bs-theme="dark"] .modal-tech {
					border-top-color: rgba(255, 255, 255, 0.1);
				}
				.tech-title {
					font-size: 0.875rem;
					font-weight: 600;
					color: #6b7280;
					margin: 0 0 0.75rem 0;
				}
				[data-bs-theme="dark"] .tech-title {
					color: #9ca3af;
				}
				@media (min-width: 768px) {
					.modal-content {
						flex-direction: row;
					}
					.modal-media {
						width: 50%;
						flex-shrink: 0;
					}
					.modal-details {
						width: 50%;
						max-height: 90vh;
						overflow-y: auto;
					}
				}
			`}</style>
		</CustomModal>
	);
};

export default PortfolioModal;
