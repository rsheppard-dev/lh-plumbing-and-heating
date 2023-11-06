import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import ContactSection from '@/components/ContactSection';
import { sanityFetch } from '@/sanity/lib/sanityFetch';
import {
	aboutQuery,
	certificationQuery,
	contactQuery,
	homeQuery,
	serviceQuery,
	settingsQuery,
	testimonialQuery,
} from '@/sanity/lib/queries';
import IHomePage from '@/interfaces/IHomePage';
import IAbout from '@/interfaces/IAbout';
import Certifications from '@/components/Certifications';
import ICertification from '@/interfaces/ICertification';
import IService from '@/interfaces/IService';
import ITestimonial from '@/interfaces/ITestimonial';
import TestimonialsSection from '@/components/TestimonialsSection';
import ISettings from '@/interfaces/ISettings';
import IContact from '@/interfaces/IContact';
import dynamic from 'next/dynamic';
import { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
	const pagePromise = sanityFetch<IHomePage>({ query: homeQuery });
	const sitePromise = sanityFetch<ISettings>({ query: settingsQuery });

	const [page, site] = await Promise.all([pagePromise, sitePromise]);

	return {
		title: page?.metaTitle ?? site.metaTitle,
		description: page?.metaDescription ?? site?.metaDescription,
		openGraph: {
			images: page?.ogImage?.url ?? site?.ogImage?.url,
		},
	};
}

export default async function Home() {
	const homePromise = sanityFetch<IHomePage>({ query: homeQuery });
	const aboutPromise = sanityFetch<IAbout>({ query: aboutQuery });
	const certificationPromise = sanityFetch<ICertification[]>({
		query: certificationQuery,
	});
	const servicesPromise = sanityFetch<IService>({
		query: serviceQuery,
	});
	const contactPromise = sanityFetch<IContact>({
		query: contactQuery,
	});
	const testimonialsPromise = sanityFetch<ITestimonial[]>({
		query: testimonialQuery,
	});
	const settingsPromise = sanityFetch<ISettings>({
		query: settingsQuery,
	});

	const [
		homeData,
		aboutData,
		certificationData,
		servicesData,
		contactData,
		testimonialsData,
		settingsData,
	] = await Promise.all([
		homePromise,
		aboutPromise,
		certificationPromise,
		servicesPromise,
		contactPromise,
		testimonialsPromise,
		settingsPromise,
	]);

	return (
		<>
			<HeroSection data={homeData} />
			<AboutSection data={aboutData} />
			<Certifications data={certificationData} />
			<TestimonialsSection data={testimonialsData} />
			<ServicesSection data={servicesData} />
			<ContactSection settings={settingsData} contact={contactData} />
		</>
	);
}
