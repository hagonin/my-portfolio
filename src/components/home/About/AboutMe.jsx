import { aboutMe } from '@/staticData/home/home';
import FunFacts from './FunFacts';
import Image from 'next/image';
import { motion } from 'framer-motion';

const AboutMe = () => {
	return (
		<div className="about h-100" data-title="À PROPOS" id="about">
			<div className="container">
				<div className="section-title">
					<h2 className="title">
						<span>À Propos</span>
					</h2>
				</div>
				<div className="row align-items-end">
					<motion.div 
						className="col-lg-6 m-auto"
						initial={{ opacity: 0, x: -50 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.6 }}
						viewport={{ once: true }}
					>
						<div className="about-thumbnail-area pb-4 pe-4 ps-0 mx-auto">
							<Image
								src={aboutMe?.aboutImage}
								className="about-thumb light img-fluid"
								width={325}
								height={380}
								alt="Ha Gonin - my portfolio"
								loading="lazy"
							/>
						</div>
					</motion.div>
					<motion.div 
						className="col-lg-6"
						initial={{ opacity: 0, x: 50 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.6, delay: 0.2 }}
						viewport={{ once: true }}
					>
						<div className="details">
							<motion.h3 
								className="name"
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.5, delay: 0.3 }}
								viewport={{ once: true }}
							>
								{aboutMe?.name}
							</motion.h3>
							<motion.h4 
								className="designation"
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.5, delay: 0.4 }}
								viewport={{ once: true }}
							>
								{aboutMe?.designation} <span className="line"></span>
							</motion.h4>
							<div className="bio">
								{aboutMe.desc.map((text, index) => (
									<motion.p
										key={index}
										className="mb-3"
										initial={{ opacity: 0, y: 20 }}
										whileInView={{ opacity: 1, y: 0 }}
										transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
										viewport={{ once: true }}
									>
										{text}
									</motion.p>
								))}
							</div>
							<motion.ul 
								className="info"
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6, delay: 0.8 }}
								viewport={{ once: true }}
							>
								{aboutMe?.aboutInfo?.map((item, i) => (
									<motion.li 
										key={i}
										initial={{ opacity: 0, x: -20 }}
										whileInView={{ opacity: 1, x: 0 }}
										transition={{ duration: 0.4, delay: 0.9 + i * 0.1 }}
										viewport={{ once: true }}
									>
										{item?.Icon}
										{item?.title}
									</motion.li>
								))}
							</motion.ul>
						</div>
					</motion.div>
				</div>

				<FunFacts />
			</div>
		</div>
	);
};

export default AboutMe;
