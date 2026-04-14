import { useState, useEffect } from 'react';
import useMediaQuery from '@/hooks/useMediaQuery';
import { AnimatePresence } from 'framer-motion';
import PortfolioItem from './PortfolioItem';
import PortfolioModal from './PortfolioModal';
import FilterButton from './PortfolioFilterMenu';
import { portfoliosData, menuLists } from '@/staticData/home/portfolioData';
import Button from '@/components/ui/Button';
import { useTranslation } from '@/hooks/use-translations';

const Portfolio = () => {
	const isMobile = useMediaQuery('(max-width: 592px)');
	const [marginTop, setMarginTop] = useState('60px');
	const [active, setActive] = useState('all');
	const [modalData, setModalData] = useState({ isOpen: false, selected: null });
	const { t, locale } = useTranslation();

	useEffect(() => {
		setMarginTop(isMobile ? '0px' : '60px');
	}, [isMobile]);

	const openModal = (portfolio) => {
		setModalData({ isOpen: true, selected: portfolio });
	};

	const closeModal = () => {
		setModalData({ isOpen: false, selected: null });
	};

	const filteredPortfolios = portfoliosData.filter(
		(portfolio) => active === 'all' || portfolio.types.includes(active)
	);

	return (
		<div className="portfolio" data-title={locale === 'en' ? 'Portfolio' : 'Portfolio'} id="portfolio">
			<div className="container">
				<div className="section-title">
					<h2 className="title">
						<span>{t('portfolio.title')}</span>
					</h2>
				</div>
				<div className="portfolio-wrapper">
					<ul className="filter-button">
						{menuLists.map((item) => (
							<FilterButton
								key={item.value}
								label={item.label}
								isActive={active === item.value}
								onClick={() => setActive(item.value)}
							/>
						))}
					</ul>
					<div className="portfolio-inner row gallery_zoom">
						<AnimatePresence>
							{filteredPortfolios.map((portfolio) => (
								<PortfolioItem
									key={portfolio.id}
									portfolio={portfolio}
									marginTop={marginTop}
									onClick={() => openModal(portfolio)}
								/>
							))}
						</AnimatePresence>
					</div>
				</div>
			</div>

			<PortfolioModal
				isOpen={modalData.isOpen}
				onRequestClose={closeModal}
				selectedImage={modalData.selected?.video}
				selectedPortfolio={modalData.selected}
			/>

			<div className="all-blog-button-area text-center">
				<Button
					arrow
					text={t('portfolio.viewMore')}
					onClick={() => window.open('https://github.com/hagonin', '_blank')}
				/>
			</div>
		</div>
	);
};

export default Portfolio;
