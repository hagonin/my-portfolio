import homecook1 from '../../../public/assets/images/portfolio/homecook-1.png';
import freshmeal1 from '../../../public/assets/images/portfolio/freshmeals-1.png';
import book1 from '../../../public/assets/images/portfolio/healthy-food-1.png';

import healthy1 from '../../../public/assets/images/portfolio/healthy-food-1.png';
import healthy2 from '../../../public/assets/images/portfolio/healthy-food-2.png';
import healthy3 from '../../../public/assets/images/portfolio/healthy-food-3.png';
import healthy4 from '../../../public/assets/images/portfolio/healthy-food-4.png';
import healthy5 from '../../../public/assets/images/portfolio/healthy-food-5.png';
import healthy6 from '../../../public/assets/images/portfolio/healthy-food-6.png';
import healthy7 from '../../../public/assets/images/portfolio/healthy-food-7.png';



export const projets = [
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
		video: 'https://player.vimeo.com/video/312334044',
		image: homecook1?.src,
		tags: 'Inspiration / Book',
		IconType: <FaImage size={35} />,
		name: 'Home Cook',
	},
	{
		id: 2,
		types: ['front_end'],
		video: 'https://www.youtube.com/embed/9No-FiEInLA',
		image: freshmeal1?.src,
		tags: 'Healthy Food',
		IconType: <FaImage size={35} />,
		name: 'Freshmeals',
	},
	{
		id: 3,
		types: ['front_end'],
		list_images: projets,
		image: book1?.src,
		IconType: <FaImages size={35} />,
		name: 'E-commerce',
	},
];

export const menuLists = [
	{ label: 'All', value: 'all' },
	{ label: 'Full-stack', value: 'full_stack' },
	{ label: 'Front-end', value: 'front_end' },
];
