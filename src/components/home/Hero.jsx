import Link from "next/link";
import Button from "../ui/Button";
import { socialMediaLists } from "@/staticData/home/home";
import Typewriter from "typewriter-effect";
import { downloadPdf } from "@/utils/downloadPdf";
import Image from "next/image";
import lightImage from "../../../public/assets/images/hero/portfolio_04.png";
import darkImage from "../../../public/assets/images/hero/hero-img.webp";

const Hero = () => {
    return (
			<div className="hero-banner" id="home">
				<div className="container">
					<div className="content-inner">
						<h2 className="hero-subtitle">Bonjour</h2>
						<h1 className="hero-title">
							Je suis <span className="bottom-border">Sarah</span>
						</h1>
						<div className="typewritter">
							<Typewriter
								options={{
									strings: [
										'Développeuse Full-stack ',
										'Web Développement et Mobile',
										"Concepteuse et Développeuses d'Applications",
									],
									autoStart: true,
									loop: true,
									delay: 20,
								}}
								className="custom-typewriter"
							/>
						</div>
						<ul className="buttons">
							<li>
								<Button arrow onClick={downloadPdf} />
							</li>
						</ul>
						<div className="hero-img">
							<Image
								src={darkImage?.src}
								className="dark img-fluid"
								alt="moi-même"
								height={700}
								width={790}
								priority
							/>
							<Image
								src={lightImage?.src}
								className="light img-fluid"
								alt="moi-même"
								height={700}
								width={790}
								priority
							/>
						</div>
					</div>
					<div className="animated-bg-line">
						{Array(5)
							.fill()
							.map((_item, i) => (
								<div key={i} className="line-item"></div>
							))}
					</div>
				</div>
				<div className="sticky-social-media">
					<ul>
						{socialMediaLists?.map((item) => (
							<li key={item?.id}>
								<Link target="_blank" href={item?.url}>
									{item?.title}
								</Link>
							</li>
						))}
					</ul>
				</div>
			</div>
		);
};

export default Hero;
