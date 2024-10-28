import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const PortfolioItem = ({ portfolio, onClick }) => (
	<motion.div
		className="col-12 col-md-4 portfolio-item"
		style={{ transformOrigin: 'left bottom' }}
		layout
		initial={{ opacity: 0, rotate: -20 }}
		animate={{ opacity: 1, rotate: 0 }}
		exit={{ opacity: 0 }}
		transition={{ duration: 0.4 }}
	>
		<div className="item" onClick={onClick}>
			{portfolio.Section || (
				<>
					<div className="full_link">
						<Image
							src={portfolio.image}
							alt="Portfolio Item"
							width={380}
							height={510}
							className="img-fluid"
						/>
					</div>
					<Link href="#">
						<div className="item-label">
							<p>Inspirations</p>
						</div>
					</Link>
					<div className="type">{portfolio.IconType}</div>
				</>
			)}
		</div>
	</motion.div>
);

export default PortfolioItem;
