import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Autoplay } from 'swiper/modules';
import 'react-circular-progressbar/dist/styles.css';
import Link from 'next/link';
import Image from 'next/image';
import { SkillsImages } from '@/staticData/home/home';
import { motion } from 'framer-motion';
import { useReducedMotion } from '@/hooks/use-reduced-motion';

const Skills = () => {
	const prefersReduced = useReducedMotion();

	return (
		<div className="section-gap" data-title="Compétences" id="skill">
			<div className="container">
				<div className="section-title">
					<h2 className="title">
						<span>Compétences</span>
					</h2>
				</div>
				<div className="clientCarousel owl-carousel">
					<Swiper
						breakpoints={{
							350: { slidesPerView: 3 },
							450: { slidesPerView: 4 },
							692: { slidesPerView: 4 },
							892: { slidesPerView: 6 },
							1200: { slidesPerView: 9 },
						}}
						slidesPerView={4}
						spaceBetween={40}
						freeMode={true}
						modules={[FreeMode, Autoplay]}
						className="mySwiper"
						style={{ padding: '0 10px' }}
						autoplay={
							prefersReduced
								? false
								: {
										delay: 2000,
										disableOnInteraction: false,
										stopOnLastSlide: false,
										waitForTransition: false,
								  }
						}
						loop={true}
					>
						{SkillsImages?.map((item) => (
							<SwiperSlide key={item?.id}>
								<motion.div
									className="item"
									whileHover={
										prefersReduced ? {} : { scale: 1.1, rotateY: 10, transition: { duration: 0.3 } }
									}
								>
									<Link href={item?.url}>
										<Image
											src={item?.image}
											alt={item?.name}
											width={80}
											height={80}
											loading="lazy"
										/>
									</Link>
								</motion.div>
							</SwiperSlide>
						))}
					</Swiper>
				</div>
			</div>
		</div>
	);
};

export default Skills;
