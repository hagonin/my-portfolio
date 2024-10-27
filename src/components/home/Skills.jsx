import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Autoplay } from 'swiper/modules';
import 'react-circular-progressbar/dist/styles.css';
import Link from 'next/link';
import Image from 'next/image';
import { SkillsImages } from '@/staticData/home/home';

const Skills = () => {

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
							// when window width is >= 400px
							350: {
								slidesPerView: 3,
							},
							450: {
								slidesPerView: 4,
							},
							// when window width is >= 692px
							692: {
								slidesPerView: 4,
							},
							// when window width is >= 800px
							892: {
								slidesPerView: 6,
							},
							// when window width is >= 1200px
							1200: {
								slidesPerView: 9,
							},
						}}
						slidesPerView={4}
						// slidesPerView={"auto"}
						spaceBetween={40}
						freeMode={true}
						modules={[FreeMode, Autoplay]}
						className={`mySwiper`}
						style={{ padding: '0 10px' }}
						autoplay={{
							delay: 800,
							disableOnInteraction: false,
							stopOnLastSlide: false,
							waitForTransition: false,
						}}
						loop={true}
					>
						{SkillsImages?.map((item) => (
							<SwiperSlide key={item?.id}>
								<div className="item">
									<Link href={item?.url}>
										<Image
											src={item?.image}
											alt="Mes compétences"
											width={80}
											height={80}
										/>
									</Link>
								</div>
							</SwiperSlide>
						))}
					</Swiper>
				</div>
			</div>
		</div>
	);
};

export default Skills;
