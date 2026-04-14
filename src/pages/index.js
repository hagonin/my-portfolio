import Hero from '@/components/home/Hero';
import AboutMe from '@/components/home/About/AboutMe';
import Skills from '@/components/home/Skills';
import Resume from '@/components/home/Resume';
import Portfolio from '@/components/home/Portfolio/Portfolio';
import Contact from '@/components/home/Contact/Contact';
import Layout from '@/layout/Layout';

export default function Home() {
	return (
		<Layout>
			<Hero />
			<AboutMe />
			<Skills />
			<Resume />
			<Portfolio />
			<Contact />
		</Layout>
	);
}
