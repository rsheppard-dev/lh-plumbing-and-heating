import HeroSection from '@/components/HeroSection';
import AboutSection from '../../components/AboutSection';
import { sanityFetch, token } from '@/sanity/lib/sanityFetch';
import {
	aboutQuery,
	certificationQuery,
	homeQuery,
	serviceQuery,
	testimonialQuery,
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
import IService from '@/interfaces/IService';
import ITestimonial from '@/interfaces/ITestimonial';
import TestimonialsSection from '@/components/TestimonialsSection';
import ContactSection from '@/components/ContactSection';

export default async function Home() {
	const homePromise = sanityFetch<IHomePage>({ query: homeQuery });
	const aboutPromise = sanityFetch<IAbout>({ query: aboutQuery });
	const certificationPromise = sanityFetch<ICertification[]>({
		query: certificationQuery,
	});
	const servicesPromise = sanityFetch<IService>({
		query: serviceQuery,
	});
	const testimonialsPromise = sanityFetch<ITestimonial[]>({
		query: testimonialQuery,
	});

	const [
		homeData,
		aboutData,
		certificationData,
		servicesData,
		testimonialsData,
	] = await Promise.all([
		homePromise,
		aboutPromise,
		certificationPromise,
		servicesPromise,
		testimonialsPromise,
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
		<>
			<HeroSection data={homeData} />
			<AboutSection data={aboutData} />
			<Certifications data={certificationData} />
			<TestimonialsSection data={testimonialsData} />
			<ServicesSection data={servicesData} />
			<ContactSection />
		</>
	);
}
