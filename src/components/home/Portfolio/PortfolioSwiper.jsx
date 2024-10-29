import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, EffectCreative } from 'swiper/modules';


const PortfolioSwiper = ({ portfolio }) => (
	<Swiper
		grabCursor={true}
		effect={'creative'}
		creativeEffect={{
			prev: { shadow: true, translate: ['-20%', 0, -1] },
			next: { translate: ['100%', 0, 0] },
		}}
		pagination={{ clickable: true }}
		freeMode={true}
		modules={[EffectCreative, Pagination, Autoplay]}
		className="mySwiper3"
		autoplay={{
			delay: 90000,
			disableOnInteraction: false,
			stopOnLastSlide: false,
			waitForTransition: false,
		}}
		loop={true}
	>
		{portfolio.map((image, idx) => (
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
);

export default PortfolioSwiper;
