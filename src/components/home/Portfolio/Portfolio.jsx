import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import PortfolioItem from './PortfolioItem';
import PortfolioModal from './PortfolioModal';
import AirsenShowcase from './AirsenShowcase';
import IminShowcase from './IminShowcase';
import FilterButton from './PortfolioFilterMenu';
import { projectsData, projectFilters } from '@/staticData/projects-data';
import { useTranslation } from '@/hooks/use-translations';
import Button from '@/components/ui/Button';

const Portfolio = () => {
	const { t, locale } = useTranslation();
	const [activeFilter, setActiveFilter] = useState('all');
	const [modalData, setModalData] = useState({ isOpen: false, selected: null });

	const openModal = (project) => {
		setModalData({ isOpen: true, selected: project });
	};

	const closeModal = () => {
		setModalData({ isOpen: false, selected: null });
	};

	const filteredProjects = projectsData
		.filter((project) => activeFilter === 'all' || project.types.includes(activeFilter))
		.sort((a, b) => a.order - b.order);

	return (
		<div
			className="portfolio section-gap"
			data-title={locale === 'en' ? 'Portfolio' : 'Portfolio'}
			id="portfolio"
		>
			<div className="container">
				<div className="section-title">
					<h2 className="title">
						<span>{t('portfolio.title')}</span>
					</h2>
				</div>
				<div className="portfolio-wrapper">
					<ul className="filter-button">
						{projectFilters.map((filter) => (
							<FilterButton
								key={filter.value}
								filter={filter}
								isActive={activeFilter === filter.value}
								onClick={() => setActiveFilter(filter.value)}
							/>
						))}
					</ul>
					<div className="portfolio-inner row gallery_zoom">
						<AnimatePresence mode="popLayout">
							{filteredProjects.map((project) => (
								<PortfolioItem
									key={project.id}
									project={project}
									onClick={() => openModal(project)}
								/>
							))}
						</AnimatePresence>
					</div>
				</div>
			</div>

			{modalData.selected?.id === 'airsen' ? (
				<AirsenShowcase
					isOpen={modalData.isOpen}
					onClose={closeModal}
					project={modalData.selected}
				/>
			) : modalData.selected?.id === 'imin' ? (
				<IminShowcase
					isOpen={modalData.isOpen}
					onClose={closeModal}
					project={modalData.selected}
				/>
			) : (
				<PortfolioModal
					isOpen={modalData.isOpen}
					onRequestClose={closeModal}
					project={modalData.selected}
				/>
			)}

			<div className="all-blog-button-area text-center">
				<Button
					arrow
					text={t('portfolio.viewMore')}
					onClick={() => window.open('https://github.com/hagonin', '_blank')}
				/>
			</div>

			<style jsx>{`
				.portfolio {
					padding: 80px 0;
				}
				.portfolio-wrapper {
					margin-bottom: 2rem;
				}
				.filter-button {
					display: flex;
					flex-wrap: wrap;
					justify-content: center;
					gap: 0.5rem;
					list-style: none;
					padding: 0;
					margin: 0 0 2rem 0;
				}
				.portfolio-inner {
					display: flex;
					flex-wrap: wrap;
					gap: 1.5rem;
				}
				.portfolio-inner :global(.portfolio-item) {
					margin-bottom: 1.5rem;
				}
				.all-blog-button-area {
					margin-top: 2rem;
				}
			`}</style>

			<style jsx global>{`
				.filter-button li {
					padding: 0.5rem 1.25rem;
					border-radius: 9999px;
					cursor: pointer;
					font-weight: 500;
					font-size: 0.875rem;
					background-color: transparent;
					border: 2px solid #e5e7eb;
					color: #6b7280;
					transition: all 0.2s ease;
				}
				.filter-button li:hover {
					border-color: #3b82f6;
					color: #3b82f6;
				}
				.filter-button li.active {
					background-color: #3b82f6;
					border-color: #3b82f6;
					color: #fff;
				}
				[data-bs-theme="dark"] .filter-button li {
					border-color: #374151;
					color: #9ca3af;
				}
				[data-bs-theme="dark"] .filter-button li:hover {
					border-color: #3b82f6;
					color: #3b82f6;
				}
				[data-bs-theme="dark"] .filter-button li.active {
					background-color: #3b82f6;
					border-color: #3b82f6;
					color: #fff;
				}
			`}</style>
		</div>
	);
};

export default Portfolio;
