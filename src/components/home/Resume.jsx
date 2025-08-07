import { expFirstCol, expSecondCol } from '@/staticData/home/home';
import EducationIcon from '../icons/home/EducationIcon';
import ExperimentIcon from '../icons/home/ExperimentIcon';
import { motion } from 'framer-motion';

function ExperienceCol({ range, title, description, index }) {
	return (
		<motion.div 
			className="timeline-item"
			initial={{ opacity: 0, x: -30 }}
			whileInView={{ opacity: 1, x: 0 }}
			transition={{ duration: 0.5, delay: index * 0.1 }}
			viewport={{ once: true }}
			whileHover={{ scale: 1.02 }}
		>
			<div className="years-range">{range}</div>
			<h3 className="title">{title}</h3>
			<p>{description}</p>
		</motion.div>
	);
}

const Resume = () => {
	return (
		<div className="resume" data-title="Parcours" id="resume">
			<div className="container">
				<div className="section-title">
					<h2 className="title">
						<span>Parcours</span>
					</h2>
				</div>
				<div className="row resume-content-area">
					<div className="col-sm-6">
						<div className="timeline-box odd">
							<div className="icon-box text-center">
								<EducationIcon viewBox="0 0 37 37" />
								<div className="box-title">FORMATIONS</div>
							</div>
							<div className="timeline">
								<div className="timeline-divider"></div>
								{expFirstCol?.map((item, index) => (
									<ExperienceCol key={item?.id} {...item} index={index} />
								))}
							</div>
						</div>
					</div>
					<div className="center-line"></div>
					<div className="col-sm-6">
						<div className="timeline-box even">
							<div className="icon-box text-center order-lg-last">
								<ExperimentIcon viewBox="0 0 31 35" />
								<div className="box-title">EXPÉRIENCES</div>
							</div>
							<div className="timeline order-lg-first">
								<div className="timeline-divider"></div>
								{expSecondCol?.map((exp, index) => (
									<motion.div 
										className="timeline-item" 
										key={exp.id}
										initial={{ opacity: 0, x: 30 }}
										whileInView={{ opacity: 1, x: 0 }}
										transition={{ duration: 0.5, delay: index * 0.1 }}
										viewport={{ once: true }}
										whileHover={{ scale: 1.02 }}
									>
										<div className="years-range">{exp.range}</div>
										<h3 className="title text-uppercase">{exp.title}</h3>
										<div style={{ marginTop: '15px' }}>
											{exp.desc?.map((line, id) => (
												<motion.div 
													key={id}
													initial={{ opacity: 0, y: 10 }}
													whileInView={{ opacity: 1, y: 0 }}
													transition={{ duration: 0.4, delay: index * 0.1 + id * 0.1 }}
													viewport={{ once: true }}
													style={{ 
														marginBottom: '8px',
														paddingLeft: '16px',
														position: 'relative'
													}}
												>
													<span style={{
														position: 'absolute',
														left: '0',
														top: '8px',
														width: '4px',
														height: '4px',
														backgroundColor: 'currentColor',
														borderRadius: '50%'
													}}></span>
													<p style={{ margin: 0 }}>{line}</p>
												</motion.div>
											))}
										</div>
									</motion.div>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Resume;
