import Hero from '@/components/home/Hero';
import AboutMe from '@/components/home/About/AboutMe';
import Skills from '@/components/home/Skills';
import Resume from '@/components/home/Resume';
import Portfolio from '@/components/home/Portfolio/Portfolio';
import Contact from '@/components/home/Contact/Contact';
import Layout from '@/layout/Layout';
import { useMemo } from 'react';
import dynamic from 'next/dynamic';




export default function Home() {
	const Map = useMemo(
		() =>
			dynamic(() => import('@/components/home/Map/Map'), {
				loading: () => <p>A map is loading</p>,
				ssr: false,
			}),
		[]
	);
	return (
		<Layout>
			<Hero />
			<AboutMe />
			<Skills />
			<Resume />
			<Portfolio />
			<Contact />
			<div
				className="bg-white mx-auto my-5 w-100"
				style={{height: '780px' }}
			>
				<Map />
			</div>
		</Layout>
	);
}
