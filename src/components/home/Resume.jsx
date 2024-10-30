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
								<div className="timeline-item">
									<div className="years-range">2016 - 2020</div>
									<h3 className="title">CONSEILÈRE EN VOYAGE</h3>
									<ul style={{ listStyleType: 'disc', marginTop: '15px' }}>
										<li style={{ marginBottom: '10px' }}>
											<p>
												Recherche des destinations, prix, coutumes et avis pour
												les clients
											</p>
										</li>
										<li style={{ marginBottom: '10px' }}>
											<p>
												Augmentation de la satisfaction client en résolvant les
												problèmes et en proposant des services de voyage sur
												mesure
											</p>
										</li>
										<li style={{ marginBottom: '10px' }}>
											<p>
												Organisation complète des voyages, y compris les
												billets, l’hébergement et le transport
											</p>
										</li>
										<li>
											<p>
												Négociation de devis et itinéraires personnalisés,
												contribuant à la croissance des ventes
											</p>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Resume;
