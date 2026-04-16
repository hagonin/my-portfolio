import homecook1 from '../../../public/assets/images/portfolio/homecook-1.png';
import freshmeal1 from '../../../public/assets/images/portfolio/freshmeals-1.webp';

import healthy1 from '../../../public/assets/images/portfolio/healthy-food-1.webp';
import healthy2 from '../../../public/assets/images/portfolio/healthy-food-2.png';
import healthy3 from '../../../public/assets/images/portfolio/healthy-food-3.png';
import healthy4 from '../../../public/assets/images/portfolio/healthy-food-4.png';
import healthy5 from '../../../public/assets/images/portfolio/healthy-food-5.png';
import healthy6 from '../../../public/assets/images/portfolio/healthy-food-6.png';
import healthy7 from '../../../public/assets/images/portfolio/healthy-food-7.png';

import airsenThumb from '../../../public/assets/images/portfolio/airsen/airsen-thumb.png';
import airsenDashboard from '../../../public/assets/images/portfolio/airsen/airsen-dashboard.png';
import airsenMap from '../../../public/assets/images/portfolio/airsen/airsen-map.png';
import airsenFavoris from '../../../public/assets/images/portfolio/airsen/airsen-favoris.png';
import airsenAccueil from '../../../public/assets/images/portfolio/airsen/airsen-accueil.png';
import airsenCarte from '../../../public/assets/images/portfolio/airsen/airsen-carte.png';
import airsenForum from '../../../public/assets/images/portfolio/airsen/airsen-forum.png';
import airsenJournal from '../../../public/assets/images/portfolio/airsen/airsen-journal.png';
import airsenProfil from '../../../public/assets/images/portfolio/airsen/airsen-profil.png';

import iminThumb from '../../../public/assets/images/portfolio/imin/imin-thumb.png';
import iminEventList from '../../../public/assets/images/portfolio/imin/imin-event-list.png';
import iminViewEvent from '../../../public/assets/images/portfolio/imin/imin-view-event.png';
import iminViewGroup from '../../../public/assets/images/portfolio/imin/imin-view-group.png';
import iminProfile from '../../../public/assets/images/portfolio/imin/imin-profile.png';
import iminTrustScore from '../../../public/assets/images/portfolio/imin/imin-trust-score.png';
import iminCreateEvent from '../../../public/assets/images/portfolio/imin/imin-create-event.png';

import { FaImage, FaImages, FaPalette } from 'react-icons/fa';

export const projects = [
	healthy1,
	healthy2,
	healthy3,
	healthy4,
	healthy5,
	healthy6,
	healthy7,
];

export const iminProjects = [
	iminViewEvent,
	iminViewGroup,
	iminTrustScore,
	iminProfile,
	iminEventList,
	iminCreateEvent,
	iminThumb,
];

export const airsenProjects = [
	airsenThumb,
	airsenAccueil,
	airsenCarte,
	airsenForum,
	airsenJournal,
	airsenProfil,
	airsenDashboard,
	airsenMap,
	airsenFavoris,
];

export const portfoliosData = [
	{
		id: 1,
		types: ['full_stack'],
		list_images: airsenProjects,
		image: airsenCarte?.src,
		tags: 'Web App',
		IconType: <FaImages size={35} />,
		name: 'AIRSEN',
		translationKey: 'airsen',
		tech: ['Java 21', 'Spring Boot', 'Angular', 'TypeScript', 'MariaDB', 'Redis', 'Docker'],
		url1: 'https://github.com/Diginamic-Fil-rouge/Airsen-springboot-angular',
		url2: null,
	},
	{
		id: 2,
		types: ['full_stack'],
		list_images: iminProjects,
		image: iminTrustScore?.src,
		tags: 'Mobile App',
		IconType: <FaImages size={35} />,
		name: 'IMIN',
		translationKey: 'imin',
		tech: ['Flutter', 'Node.js', 'TypeScript', 'AdminJS', 'Autocannon', 'Testing'],
		url1: null,
		url2: null,
	},
	{
		id: 3,
		types: ['full_stack'],
		video: 'https://www.youtube.com/embed/15NvtxEiVOs?si=tpqCTK-69-AdkT0Y',
		image: homecook1?.src,
		tags: 'Blogs',
		IconType: <FaImage size={35} />,
		name: 'HomeCook App',
		translationKey: 'homecook',
		tech: [
			'Python',
			'Django',
			'React',
			'Nextjs',
			'TailwindCSS',
			'HTML5',
			'PostgreSQL',
			'Responsive',
		],
		url1: 'https://github.com/hagonin/Recipe-Django-NextJs',
		url2: 'https://homecook-iota.vercel.app/',
	},
	{
		id: 4,
		types: ['front_end'],
		video: 'https://www.youtube.com/embed/KTp0V3KcX2w?si=6pL3gDQtvIh6Yo5j',
		image: freshmeal1?.src,
		tags: 'E-commerce',
		IconType: <FaImage size={35} />,
		name: 'Freshmeals website',
		translationKey: 'freshmeals',
		tech: [
			'React',
			'React-router',
			'Redux',
			'TailwindCSS',
			'HTML5',
			'Responsive',
			'Firebase',
		],
		url1: 'https://github.com/fenewbie/freshmeals-app-reactjs',
		url2: 'https://freshmeals-reactjs.web.app/',
	},
	{
		id: 5,
		types: ['front_end'],
		list_images: projects,
		video: healthy2?.src,
		image: healthy1?.src,
		IconType: <FaImages size={35} />,
		name: 'Healthy Food website',
		translationKey: 'healthyfood',
		tech: ['HTML5', 'Bootstrap', 'SASS/SCSS'],
		url1: 'https://github.com/hagonin/Healthy-food',
		url2: 'https://healthy-food-38.netlify.app/',
	},
];

export const menuLists = [
	{ label: 'All', value: 'all' },
	{ label: 'Full-stack', value: 'full_stack' },
	{ label: 'Front-end', value: 'front_end' },
];
