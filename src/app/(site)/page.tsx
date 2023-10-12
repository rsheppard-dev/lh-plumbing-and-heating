import HeroSection from '@/components/HeroSection';
import AboutSection from '../../components/AboutSection';
import { sanityFetch, token } from '@/sanity/lib/sanityFetch';
import {
	aboutQuery,
	certificationQuery,
	homeQuery,
} from '@/sanity/lib/queries';
import { draftMode } from 'next/headers';
import PreviewProvider from '@/components/PreviewProvider';
import PreviewHeroSection from '@/components/PreviewHeroSection';
import IHomePage from '@/interfaces/IHomePage';
import IAbout from '@/interfaces/IAbout';
import PreviewAboutSection from '@/components/PreviewAboutSection';
import Certifications from '@/components/Certifications';
import ICertification from '@/interfaces/ICertification';
import ServicesSection from '@/components/ServicesSection';

export default async function Home() {
	const homePromise = sanityFetch<IHomePage>({ query: homeQuery });
	const aboutPromise = sanityFetch<IAbout>({ query: aboutQuery });
	const certificationPromise = sanityFetch<ICertification[]>({
		query: certificationQuery,
	});

	const [homeData, aboutData, certificationData] = await Promise.all([
		homePromise,
		aboutPromise,
		certificationPromise,
	]);
	const isDraftMode = draftMode().isEnabled;

	if (isDraftMode && token) {
		return (
			<PreviewProvider token={token}>
				<PreviewHeroSection data={homeData} />
				<PreviewAboutSection data={aboutData} />
			</PreviewProvider>
		);
	}
	return (
		<main>
			<HeroSection data={homeData} />
			<AboutSection data={aboutData} />
			<Certifications data={certificationData} />
			<ServicesSection data='' />
		</main>
	);
}
