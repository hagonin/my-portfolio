import { expFirstCol, expSecondCol } from '@/staticData/home/home';
import EducationIcon from '../icons/home/EducationIcon';
import ExperimentIcon from '../icons/home/ExperimentIcon';
import { motion } from 'framer-motion';
import { useReducedMotion } from '@/hooks/use-reduced-motion';
import { useTranslation } from '@/hooks/use-translations';

function ExperienceCol({ range, title, description }) {
	const prefersReduced = useReducedMotion();

	return (
		<motion.div
			className="timeline-item"
			whileHover={prefersReduced ? {} : { scale: 1.02 }}
		>
			<div className="years-range">{range}</div>
			<h3 className="title">{title}</h3>
			<p>{description}</p>
		</motion.div>
	);
}

const Resume = () => {
	const prefersReduced = useReducedMotion();
	const { t, locale } = useTranslation();

	return (
		<div className="resume" data-title={locale === 'en' ? 'Resume' : 'Parcours'} id="resume">
			<div className="container">
				<div className="section-title">
					<h2 className="title">
						<span>{t('resume.title')}</span>
					</h2>
				</div>
				<div className="row resume-content-area">
					<div className="col-sm-6">
						<div className="timeline-box odd">
							<div className="icon-box text-center">
								<EducationIcon viewBox="0 0 37 37" />
								<div className="box-title">{t('resume.education')}</div>
							</div>
							<div className="timeline">
								<div className="timeline-divider"></div>
								{expFirstCol?.map((item) => (
									<ExperienceCol key={item?.id} {...item} />
								))}
							</div>
						</div>
					</div>
					<div className="center-line"></div>
					<div className="col-sm-6">
						<div className="timeline-box even">
							<div className="icon-box text-center order-lg-last">
								<ExperimentIcon viewBox="0 0 31 35" />
								<div className="box-title">{t('resume.experience')}</div>
							</div>
							<div className="timeline order-lg-first">
								<div className="timeline-divider"></div>
								{expSecondCol?.map((exp) => (
									<motion.div
										className="timeline-item"
										key={exp.id}
										whileHover={prefersReduced ? {} : { scale: 1.02 }}
									>
										<div className="years-range">{exp.range}</div>
										<h3 className="title text-uppercase">{exp.title}</h3>
										<div style={{ marginTop: '15px' }}>
											{exp.desc?.map((line, id) => (
												<div
													key={id}
													style={{
														marginBottom: '8px',
														paddingLeft: '16px',
														position: 'relative',
													}}
												>
													<span
														style={{
															position: 'absolute',
															left: '0',
															top: '8px',
															width: '4px',
															height: '4px',
															backgroundColor: 'currentColor',
															borderRadius: '50%',
														}}
													></span>
													<p style={{ margin: 0 }}>{line}</p>
												</div>
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
