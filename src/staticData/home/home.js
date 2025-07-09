
import PhoneNumber from '@/components/icons/home/PhoneNumber';
import EmailIcon from '@/components/icons/home/EmailIcon';
import LocationIcon from '@/components/icons/home/LocationIcon';
import WebsiteIcon from '@/components/icons/home/WebsiteIcon';
import HackathonIcon from '@/components/icons/home/HackathonIcon';

//Compétences images
import skill1Image from '../../../public/assets/images/skills/python.svg';
import skill2Image from '../../../public/assets/images/skills/react.svg';
import skill3Image from '../../../public/assets/images/skills/js.svg';
import skill4Image from '../../../public/assets/images/skills/django.svg';
import skill5Image from '../../../public/assets/images/skills/csharp.svg';
import skill6Image from '../../../public/assets/images/skills/dot-net.svg';
import skill7Image from '../../../public/assets/images/skills/nextjs.svg';
import skill8Image from '../../../public/assets/images/skills/react.svg';
import skill9Image from '../../../public/assets/images/skills/mysql.svg';
import skill10Image from '../../../public/assets/images/skills/postgresql.svg';
import skill11Image from '../../../public/assets/images/skills/docker.svg';
import skill12Image from '../../../public/assets/images/skills/tailwindcss.svg';
import skill13Image from '../../../public/assets/images/skills/firebase.svg';
import skill14Image from '../../../public/assets/images/skills/figma.svg';
import skill15Image from '../../../public/assets/images/skills/jira.svg';
import skill16Image from '../../../public/assets/images/skills/github.svg';
import skill17Image from '../../../public/assets/images/skills/html5.svg';
import skill18Image from '../../../public/assets/images/skills/css3.svg';
import skill19Image from '../../../public/assets/images/skills/photoshop.svg';
import skill20Image from '../../../public/assets/images/skills/bootstrap.svg';

import aboutImage from '../../../public/assets/images/hero/portfolio_03.png';
import aboutImageDark from '../../../public/assets/images/hero/hero-img2-l.webp';
import LanguageIcon from '@/components/icons/home/LanguageIcon';
import WorkingHours from '@/components/icons/home/WorkingHours';
import EducationIcon from '@/components/icons/home/EducationIcon';

export const aboutMe = {
	aboutImage: aboutImage?.src,
	aboutImageDark: aboutImageDark?.src,
	name: 'Sarah GONIN',
	designation: 'DÉVÉLOPPEUSE FULL-STACK',
	desc: [
		'Je suis une développeuse web passionnée par la tech, avec un sens de l’esthétique et une rigueur technique dans la création de projets numériques qui allient performance et expérience utilisateur.',
		"Après mes premiers pas dans le développement web à 17 ans et l’exploration des bases de la programmation en 2017, c’est en 2021 que j'ai plongé sérieusement dans le code à travers des formations intensives et approfondies. Cette évolution a confirmé ma passion et mon intérêt professionnel pour une carrière dans le développement et la programmation.",
		'Avide de rester à jour sur les pratiques et techniques du web, du développement et du design, je suis spécialisée dans la création de solutions répondant aux besoins réels des utilisateurs à chaque étape du processus de développement. Je porte une attention particulière à l’utilisation d’un code propre ainsi qu’à la création d’une interface captivante et soignée.',
		'Je peux m’appuyer sur la diversité de mes expériences professionnelles, notamment sur la plateforme Amadeus mais aussi la coordination de projet, qui a renforcé mes compétences en résolution de problèmes, en organisation et en travail d’équipe.',
		'Je suis ouverte et motivée pour collaborer et participer à des projets innovants et percutants dans le secteur des nouvelles technologies.',
	],

	aboutInfo: [
		{
			id: 1,
			title: 'Montpellier, France',
			Icon: <LocationIcon viewBox="0 0 18 24" />,
			link: '',
		},
		{
			id: 2,
			title: '+33 6 72 17 92 99',
			Icon: (
				<PhoneNumber
					viewBox="0 0 32 31"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				/>
			),
			link: '',
		},
		{
			id: 3,
			title: 'goninha@outlook.fr',
			Icon: (
				<EmailIcon
					viewBox="0 0 32 32"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				/>
			),
			link: '',
		},
		{
			id: 1,
			title: 'hagonin.vercel.app',
			Icon: (
				<WebsiteIcon
					viewBox="0 0 33 32"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				/>
			),
			link: 'https://hagonin.vercel.app/',
		},
	],
	btnText: 'TÉLÉCHARGER CV',
};

export const socialMediaLists = [
	{
		id: 1,
		title: 'GITHUB',
		url: 'https://github.com/hagonin',
	},
	{
		id: 2,
		title: 'LINKEDIN',
		url: 'https://www.linkedin.com/in/hagonin/',
	},
];

export const funItems = [
	{
		id: 1,
		Svg: <WorkingHours />,
		startCount: 1,
		endCount: 3987,
		title: 'HEURES DE TRAVAIL',
	},
	{
		id: 2,
		Svg: <EducationIcon />,
		startCount: 0,
		endCount: 3,
		title: "DIPLÔME D'ÉTUDES SUPÉRIEURS OBTENUES",
	},
	{
		id: 3,
		Svg: <LanguageIcon />,
		startCount: 1,
		endCount: 3,
		title: 'POLYGOTTE DU CODE',
	},
	{
		id: 4,
		Svg: <HackathonIcon />,
		startCount: 1,
		endCount: 1,
		title: 'PRIX DU HACKATHON POUR LA MEILLEURE UX/UI',
	},
];

export const SkillsImages = [
	{
		id: 1,
		url: '#',
		image: skill1Image?.src,
	},
	{
		id: 2,
		url: '#',
		image: skill2Image?.src,
	},
	{
		id: 3,
		url: '#',
		image: skill3Image?.src,
	},
	{
		id: 4,
		url: '#',
		image: skill4Image?.src,
	},
	{
		id: 5,
		url: '#',
		image: skill5Image?.src,
	},
	{
		id: 6,
		url: '#',
		image: skill6Image?.src,
	},
	{
		id: 7,
		url: '#',
		image: skill7Image?.src,
	},
	{
		id: 8,
		url: '#',
		image: skill8Image?.src,
	},
	{
		id: 9,
		url: '#',
		image: skill9Image?.src,
	},
	{
		id: 10,
		url: '#',
		image: skill10Image?.src,
	},
	{
		id: 11,
		url: '#',
		image: skill11Image?.src,
	},
	{
		id: 12,
		url: '#',
		image: skill12Image?.src,
	},
	{
		id: 13,
		url: '#',
		image: skill13Image?.src,
	},
	{
		id: 14,
		url: '#',
		image: skill14Image?.src,
	},
	{
		id: 15,
		url: '#',
		image: skill15Image?.src,
	},
	{
		id: 16,
		url: '#',
		image: skill16Image?.src,
	},
	{
		id: 17,
		url: '#',
		image: skill17Image?.src,
	},
	{
		id: 18,
		url: '#',
		image: skill18Image?.src,
	},
	{
		id: 19,
		url: '#',
		image: skill19Image?.src,
	},
	{
		id: 20,
		url: '#',
		image: skill20Image?.src,
	},
];

export const expFirstCol = [
	{
		id: 1,
		range: 'June 2025 - Mars 2026',
		title: "CONCEPTEUSE DÉVELOPPEUSE D'APPLICATIONS - Equiv BAC+4",
		description:
			'Maîtrise du développement d’applications web et mobiles en Java, JavaScript, Angular et Spring. Conception d’architectures logicielles robustes, analyse des besoins et modélisation UML. Gestion de bases de données SQL et NoSQL, déploiement, tests unitaires et rédaction de documentation technique. Application des méthodes Agile et DevOps, veille sécurité et utilisation d’outils collaboratifs comme Git. ',
	},
	{
		id: 2,
		range: 'Janvier 2022 - Octobre 2022',
		title: 'DÉVELOPPEUSE FRONT-END BOOTCAMP - Equiv BAC+2',
		description:
			'Maîtriser HTML, CSS, JavaScript, les algorithmes fondamentaux, et React pour créer des interfaces web dynamiques, responsives et optimisées ',
	},
	{
		id: 3,
		range: 'Octobre 2021 - Décembre 2021',
		title: 'PYTHON ET DÉVELOPPEMENT WEB AVEC DJANGO',
		description:
			"Maîtriser les bases de Python, le développement web avec Django, la gestion des bases de données SQL, la création d'interfaces dynamiques et le déploiement d’applications sécurisées ",
	},
	{
		id: 4,
		range: '2014 - 2016',
		title: 'MASTER MANAGEMENT DES SERVICES DU TOURISME SPORTIF - BAC+5 ',
		description:
			'Développer des compétences en gestion et promotion du tourisme sportif, apprendre à organiser des événements sportifs, et maîtriser les stratégies de communication pour valoriser les services liés au sport et au tourisme',
	},
	{
		id: 5,
		range: '2009 - 2013',
		title: 'LICENCE TRADUCTION ET INTERPRETATION EN ANGLAIS - BAC+3',
		description:
			'Acquérir les compétences pour traduire, interpréter et adapter le contenu à divers contextes culturels et professionnels.',
	},
];

export const expSecondCol = [
	{
		id: 1,
		range: 'Mar 2023 - Jun 2023',
		title: 'Market Research Analyst - Volunteering',
		desc: [
			'Mener des recherches de marché pour identifier les tendances et les besoins des consommateurs',
			'Analyser les données et produire des rapports pour guider les décisions stratégiques',
			"Concevoir des interfaces utilisateur intuitives (UI/UX Design) et créer des logos alginés avec l'identité visuelle de la marque",
		],
	},
	{
		id: 2,
		range: '2016 - 2020',
		title: 'Conseillère en voyages',
		desc: [
			'Recherche des destinations, prix, coutumes et avis pour les clients',
			'Augmentation de la satisfaction client en résolvant les problèmes et en proposant des services de voyage sur mesure',
			'Organisation complète des voyages, y compris les billets, l’hébergement et le transport',
			'Négociation de devis et itinéraires personnalisés, contribuant à la croissance des ventes',
		],
	},
];

export const contactInfo = [
	{
		id: 1,
		Icon: <PhoneNumber />,
		title: 'NUMÉRO TÉLÉPHONE',
		data1: '+33 6 72 17 92 99',
	},
	{
		id: 2,
		Icon: <EmailIcon />,
		title: 'ADRESSE EMAIL',
		data1: 'goninha@outlook.fr',
	},
	{
		id: 3,
		Icon: <LocationIcon />,
		title: 'LOCALISATION',
		data1: 'Montpellier',
		data2: 'France',
	},
	{
		id: 4,
		Icon: <WebsiteIcon />,
		title: 'WEBSITE',
		data1: 'hagonin.vercel.app',
	},
];
