import { aboutMe } from '@/staticData/home/home';
import FunFacts from './FunFacts';
import Image from 'next/image';
import { useTranslation } from '@/hooks/use-translations';

const AboutMe = () => {
	const { t, locale } = useTranslation();
	const aboutDesc = t('about.desc');

	return (
		<div className="about h-100" data-title={locale === 'en' ? 'ABOUT' : 'À PROPOS'} id="about">
			<div className="container">
				<div className="section-title">
					<h2 className="title">
						<span>{locale === 'en' ? 'About' : 'À Propos'}</span>
					</h2>
				</div>
				<div className="row align-items-end">
					<div className="col-lg-6 m-auto">
						<div className="about-thumbnail-area pb-4 pe-4 ps-0 mx-auto">
							<Image
								src={aboutMe?.aboutImage}
								className="about-thumb light img-fluid"
								width={325}
								height={380}
								alt="Sarah Gonin - my portfolio"
								loading="lazy"
							/>
						</div>
					</div>
					<div className="col-lg-6">
						<div className="details">
							<h3 className="name">{aboutMe?.name}</h3>
							<h4 className="designation">
								{t('about.designation')} <span className="line"></span>
							</h4>
							<p className="signature-tagline">
								<span className="sig-serif">{t('about.signatureDesigner')}</span>
								<span className="sig-amp">&amp;&amp;</span>
								<span className="sig-mono">{t('about.signatureDev')}</span>
							</p>
							<div className="bio">
								{Array.isArray(aboutDesc) && aboutDesc.map((text, index) => (
									<p key={index} className="mb-3">
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
