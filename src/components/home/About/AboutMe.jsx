import { aboutMe } from '@/staticData/home/home';
import FunFacts from './FunFacts';
import Image from 'next/image';

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
					<div className="col-lg-6 m-auto">
						<div className="about-thumbnail-area pb-4 pe-4 ps-0 mx-auto">
							<Image
								src={aboutMe?.aboutImageDark}
								className="about-thumb dark img-fluid"
								width={325}
								height={380}
								alt="Ha GONIN - portfolio"
							/>
							<Image
								src={aboutMe?.aboutImage}
								className="about-thumb light img-fluid"
								width={325}
								height={380}
								alt="Ha Gonin - my portfolio"
							/>
						</div>
					</div>
					<div className="col-lg-6">
						<div className="details">
							<h3 className="name">{aboutMe?.name}</h3>
							<h4 className="designation">
								{aboutMe?.designation} <span className="line"></span>
							</h4>
							<div className="bio">
								{aboutMe.desc.map((text, index) => (
									<p
										key={index}
										className="mb-3"
										style={{ textAlign: 'justify' }}
									>
										{text}
									</p>
								))}
							</div>
							<ul className="info">
								{aboutMe?.aboutInfo?.map((item, i) => (
									<li key={i}>
										{item?.Icon}
										{item?.title}
									</li>
								))}
							</ul>
						</div>
					</div>
				</div>

				<FunFacts />
			</div>
		</div>
	);
};

export default AboutMe;
