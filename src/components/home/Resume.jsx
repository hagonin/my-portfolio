import { expFirstCol, expSecondCol } from '@/staticData/home/home';
import EducationIcon from '../icons/home/EducationIcon';
import ExperimentIcon from '../icons/home/ExperimentIcon';

function ExperienceCol({ range, title, description }) {
	return (
		<div className="timeline-item">
			<div className="years-range">{range}</div>
			<h3 className="title">{title}</h3>
			<p>{description}</p>
		</div>
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
								<div className="box-title">EXPÉRIENCES</div>
							</div>
							<div className="timeline order-lg-first">
								<div className="timeline-divider"></div>
								{expSecondCol?.map((exp, id) => (
									<div className="timeline-item" key={exp.id}>
										<div className="years-range">{exp.range}</div>
										<h3 className="title text-uppercase">{exp.title}</h3>
										{exp.desc?.map((line, id) => (
											<ul style={{ listStyleType: 'disc', marginTop: '15px' }}>
												<li key={id}>
													<p>{line}</p>
												</li>
											</ul>
										))}
									</div>
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
