import { educationData, experienceData } from '@/staticData/resume-data';
import EducationIcon from '../icons/home/EducationIcon';
import ExperimentIcon from '../icons/home/ExperimentIcon';
import { motion } from 'framer-motion';
import { useReducedMotion } from '@/hooks/use-reduced-motion';
import { useTranslation } from '@/hooks/use-translations';

function EducationItem({ item, locale }) {
	const prefersReduced = useReducedMotion();

	return (
		<motion.div
			className="timeline-item"
			whileHover={prefersReduced ? {} : { scale: 1.02 }}
		>
			<div className="years-range">{item.range[locale] || item.range.fr}</div>
			<h3 className="title">{item.title[locale] || item.title.fr}</h3>
			<p>{item.description[locale] || item.description.fr}</p>
		</motion.div>
	);
}

function ExperienceItem({ item, locale }) {
	const prefersReduced = useReducedMotion();
	const descList = item.desc[locale] || item.desc.fr;

	return (
		<motion.div
			className="timeline-item"
			whileHover={prefersReduced ? {} : { scale: 1.02 }}
		>
			<div className="years-range">{item.range[locale] || item.range.fr}</div>
			<h3 className="title text-uppercase">{item.title[locale] || item.title.fr}</h3>
			<div style={{ marginTop: '15px' }}>
				{descList?.map((line, id) => (
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
	);
}

const Resume = () => {
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
								{educationData?.map((item) => (
									<EducationItem key={item.id} item={item} locale={locale} />
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
								{experienceData?.map((item) => (
									<ExperienceItem key={item.id} item={item} locale={locale} />
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
