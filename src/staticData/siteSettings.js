import AboutMeIcon from '@/components/icons/siteIcons/AboutMeIcon';
import HomeIcon from '@/components/icons/siteIcons/HomeIcon';
import PortfolioIcon from '@/components/icons/siteIcons/PortfolioIcon';
import ResumeIcon from '@/components/icons/siteIcons/ResumeIcon';

import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

export const siteSettings = {
	logo: 'HG',
	headerMenus: [
		{
			id: 1,
			title: 'ACCUEIL',
			selector: '#home',
			url: '/',
			Icon: <HomeIcon />,
			notVisibleRoutes: [],
		},
		{
			id: 2,
			title: 'A PROPOS',
			selector: '#about',
			url: '/about',
			Icon: <AboutMeIcon />,
			notVisibleRoutes: [],
		},
		{
			id: 3,
			title: 'PARCOURS',
			selector: '#resume',
			url: '/resume',
			Icon: <ResumeIcon />,
			notVisibleRoutes: [],
		},
		{
			id: 4,
			title: 'PORTFOLIO',
			selector: '#portfolio',
			url: '/portfolio',
			Icon: <PortfolioIcon />,
			notVisibleRoutes: [],
		},
	],
	headerBottom: {
		title: 'Me contacter',
		url: '#contact',
	},
	footerItems: [
		{
			id: 1,
			Icon: <FaGithub />,
			url: 'https://github.com/hagonin',
			tooltip: 'Suivez-moi sur Github',
		},
		{
			id: 2,
			Icon: <FaLinkedinIn />,
			url: 'https://www.linkedin.com/in/hagonin/',
			tooltip: 'Suivez-moi sur Linkedin',
		},
	]
};
