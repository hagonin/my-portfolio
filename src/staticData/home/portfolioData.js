import homecook1 from '../../../public/assets/images/portfolio/homecook-1.png';
import freshmeal1 from '../../../public/assets/images/portfolio/freshmeals-1.png';

import healthy1 from '../../../public/assets/images/portfolio/healthy-food-1.png';
import healthy2 from '../../../public/assets/images/portfolio/healthy-food-2.png';
import healthy3 from '../../../public/assets/images/portfolio/healthy-food-3.png';
import healthy4 from '../../../public/assets/images/portfolio/healthy-food-4.png';
import healthy5 from '../../../public/assets/images/portfolio/healthy-food-5.png';
import healthy6 from '../../../public/assets/images/portfolio/healthy-food-6.png';
import healthy7 from '../../../public/assets/images/portfolio/healthy-food-7.png';


import {
	FaImage,
	FaImages,
} from 'react-icons/fa';


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
		],
		description: 'Une application web pour les recettes',
		feat: [
			'Création, stockage et recherche de recettes par catégorie et ingrédients',
			"Ajout de l'authentification des utilisateurs pour la connexion, la déconnexion, la gestion des mots de passe et la gestion des recettes",
			"Conception d'une interface entièrement responsive avec TailwindCSS",
		],
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
			'Firebase Cloud Firestore',
			'TailwindCSS',
			'HTML5',
		],
		description:
			'Un site e-commerce responsive permettant aux utilisateurs de parcourir des produits biologiques, sélectionner des articles à acheter, les ajouter au panier, créer un compte et se connecter.',
		feat: [
			'Interface intuitive : Navigation fluide avec menus organisés pour une recherche facile.',
			'Filtrage avancé : Affinage des recherches par catégorie, prix ou popularité.',
			'Panier interactif : Calcul du total en temps réel avec options de paiement simples.',
		],
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
		feat: [
			'Ce projet vise à apprendre à structurer un site de manière professionnelle en utilisant Sass',
			'Galerie d’images : Présentation des images en grille avec des styles CSS pour l’alignement et les marges.',
			'Effets de survol : Effets visuels au survol des boutons et liens pour rendre l’interaction agréable.',
		],
	},
];

export const menuLists = [
	{ label: 'All', value: 'all' },
	{ label: 'Full-stack', value: 'full_stack' },
	{ label: 'Front-end', value: 'front_end' },
];
