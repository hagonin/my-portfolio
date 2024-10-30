import homecook1 from '../../../public/assets/images/portfolio/homecook-1.png';
import freshmeal1 from '../../../public/assets/images/portfolio/freshmeals-1.png';

import healthy1 from '../../../public/assets/images/portfolio/healthy-food-1.png';
import healthy2 from '../../../public/assets/images/portfolio/healthy-food-2.png';
import healthy3 from '../../../public/assets/images/portfolio/healthy-food-3.png';
import healthy4 from '../../../public/assets/images/portfolio/healthy-food-4.png';
import healthy5 from '../../../public/assets/images/portfolio/healthy-food-5.png';
import healthy6 from '../../../public/assets/images/portfolio/healthy-food-6.png';
import healthy7 from '../../../public/assets/images/portfolio/healthy-food-7.png';

import { FaImage, FaImages } from 'react-icons/fa';

export const projects = [
	healthy1,
	healthy2,
	healthy3,
	healthy4,
	healthy5,
	healthy6,
	healthy7,
];

export const portfoliosData = [
	{
		id: 1,
		types: ['full_stack'],
		video: 'https://www.youtube.com/embed/15NvtxEiVOs?si=tpqCTK-69-AdkT0Y',
		image: homecook1?.src,
		tags: 'Blogs',
		IconType: <FaImage size={35} />,
		name: 'Home Cook App',
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
		description:
			'Une application web de gestion de recettes permettant la création, le stockage et la recherche par catégorie et ingrédients, avec authentification des utilisateurs pour la gestion des comptes et des recettes.',
		url1: 'https://github.com/hagonin/Recipe-Django-NextJs',
		url2: 'https://homecook-iota.vercel.app/',
	},
	{
		id: 2,
		types: ['front_end'],
		video: 'https://www.youtube.com/embed/KTp0V3KcX2w?si=6pL3gDQtvIh6Yo5j',
		image: freshmeal1?.src,
		tags: 'E-commerce',
		IconType: <FaImage size={35} />,
		name: 'Freshmeals website',
		tech: [
			'React',
			'React-router',
			'Redux',
			'TailwindCSS',
			'HTML5',
			'Responsive',
			'Firebase',
		],
		description:
			'Un site e-commerce responsive permettant aux utilisateurs de parcourir des produits biologiques, sélectionner des articles à acheter, les ajouter au panier, créer un compte et se connecter.',
		url1: 'https://github.com/fenewbie/freshmeals-app-reactjs',
		url2: 'https://freshmeals-reactjs.web.app/',
	},
	{
		id: 3,
		types: ['front_end'],
		list_images: projects,
		video: healthy2?.src,
		image: healthy1?.src,
		IconType: <FaImages size={35} />,
		name: 'Healthy Food website',
		tech: ['HTML5', 'Bootstrap', 'SASS/SCSS'],
		description:
			"Ce projet est une réplique du site Slimming World, réalisé dans le cadre d'un projet d'entraînement.",
		url1: 'https://github.com/hagonin/Healthy-food',
		url2: '',
	},
];

export const menuLists = [
	{ label: 'All', value: 'all' },
	{ label: 'Full-stack', value: 'full_stack' },
	{ label: 'Front-end', value: 'front_end' },
];
