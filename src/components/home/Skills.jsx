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

	const titleMotionProps = prefersReduced
		? { initial: false }
		: {
				initial: { opacity: 0, y: 30 },
				whileInView: { opacity: 1, y: 0 },
				transition: { duration: 0.6 },
				viewport: { once: true },
		  };

	const getItemMotionProps = (index) =>
		prefersReduced
			? { initial: false }
			: {
					initial: { opacity: 0, scale: 0.8 },
					whileInView: { opacity: 1, scale: 1 },
					whileHover: { scale: 1.1, rotateY: 10, transition: { duration: 0.3 } },
					transition: { duration: 0.5, delay: index * 0.1 },
					viewport: { once: true },
			  };

	return (
		<div className="section-gap" data-title="Compétences" id="skill">
			<div className="container">
				<motion.div className="section-title" {...titleMotionProps}>
					<h2 className="title">
						<span>Compétences</span>
					</h2>
				</motion.div>
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
						{SkillsImages?.map((item, index) => (
							<SwiperSlide key={item?.id}>
								<motion.div className="item" {...getItemMotionProps(index)}>
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
