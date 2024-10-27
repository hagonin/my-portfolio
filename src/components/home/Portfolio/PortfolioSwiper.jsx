import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from 'framer-motion';
import { EffectCreative } from 'swiper/modules';
import { Pagination, Autoplay } from 'swiper/modules';


const PortfolioSwiper = ({ portfolio, onClick }) => (
	<motion.div
		style={{ transformOrigin: 'left bottom' }}
		className="col-6 col-md-4 portfolio-item"
		layout
		initial={{ opacity: 0, rotate: -20 }}
		animate={{ opacity: 1, rotate: 0 }}
		exit={{ opacity: 0 }}
		transition={{ duration: 0.4 }}
		onClick={onClick}
	>
		<div className="item">
			<Swiper
				grabCursor={true}
				effect="creative"
				creativeEffect={{
					prev: { shadow: true, translate: ['-20%', 0, -1] },
					next: { translate: ['100%', 0, 0] },
				}}
				pagination={{ clickable: true }}
				freeMode={true}
				modules={[EffectCreative, Pagination, Autoplay]}
				className="mySwiper3"
				autoplay={{ delay: 3000, disableOnInteraction: false }}
				loop
			>
				{portfolio.list_images.map((image, idx) => (
					<SwiperSlide key={idx}>
						<Image
							src={image}
							alt="Portfolio Slide"
							width={380}
							height={510}
							className="img-fluid w-100"
						/>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	</motion.div>
);

export default PortfolioSwiper;