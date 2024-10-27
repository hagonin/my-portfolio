import { AnimatePresence} from 'framer-motion';
import PortfolioSwiper from './PortfolioSwiper';
import PortfolioItem from './PortfolioItem';

const PortfolioGrid = ({ portfolios, openModal }) => (
	<div className="portfolio-inner row gallery_zoom">
		<AnimatePresence>
			{portfolios.map((portfolio) =>
				portfolio.id === 3 ? (
					<PortfolioSwiper
						key={portfolio.id}
						portfolio={portfolio}
						onClick={() => openModal(portfolio)}
					/>
				) : (
					<PortfolioItem
						key={portfolio.id}
						portfolio={portfolio}
						onClick={() => openModal(portfolio)}
					/>
				)
			)}
		</AnimatePresence>
	</div>
);
export default PortfolioGrid;
