import { defineConfig } from 'sanity';
import { StructureBuilder, deskTool } from 'sanity/desk';
import { visionTool } from '@sanity/vision';
import { googleMapsInput } from '@sanity/google-maps-input';
import {
	FaCog,
	FaHome,
	FaStar,
	FaBuilding,
	FaMedal,
	FaTools,
	FaImage,
} from 'react-icons/fa';
import { FaMessage } from 'react-icons/fa6';
import types from '@/sanity/schemas';
import { media } from 'sanity-plugin-media';
import { availability } from 'sanity-plugin-availability';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID as string;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET as string;
const basePath = process.env.NEXT_PUBLIC_SANITY_BASE_PATH as string;
const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API as string;

const singletonActions = new Set(['publish', 'discardChanges', 'restore']);

const singletonTypes = new Set([
	'homePage',
	'about',
	'service',
	'settings',
	'contact',
	'gallery',
]);

const singletonListItem = (
	S: StructureBuilder,
	typeName: string,
	title?: string
) =>
	S.listItem()
		.title(title || typeName)
		.id(typeName)
		.child(S.document().schemaType(typeName).documentId(typeName));

const config = defineConfig({
	projectId,
	dataset,
	title: 'LH Plumbing & Heating',
	basePath,
	apiVersion: '2023-09-20',
	useCdn: false,
	plugins: [
		deskTool({
			structure: S =>
				S.list()
					.title('Content')
					.items([
						singletonListItem(S, 'homePage', 'Home Section').icon(FaHome),
						singletonListItem(S, 'about', 'About Section').icon(FaBuilding),
						singletonListItem(S, 'service', 'Service Section').icon(FaTools),
						singletonListItem(S, 'gallery', 'Gallery Section').icon(FaImage),
						singletonListItem(S, 'contact', 'Contact Section').icon(FaMessage),

						S.divider(),

						S.documentTypeListItem('testimonial')
							.title('Testimonials')
							.icon(FaStar),
						S.documentTypeListItem('certification')
							.title('Certifications')
							.icon(FaMedal),

						S.divider(),

						singletonListItem(S, 'settings', 'Company Details').icon(FaCog),
					]),
		}),
		googleMapsInput({
			apiKey,
			defaultZoom: 20,
			defaultLocation: {
				lat: 51.5791574,
				lng: -0.3513656,
			},
		}),
		media(),
		visionTool(),
		availability(),
	],
	schema: {
		types,

		// Filter out singleton types from the global “New document” menu options
		templates: templates =>
			templates.filter(({ schemaType }) => !singletonTypes.has(schemaType)),
	},

	document: {
		// For singleton types, filter out actions that are not explicitly included
		// in the `singletonActions` list defined above
		actions: (input, context) =>
			singletonTypes.has(context.schemaType)
				? input.filter(({ action }) => action && singletonActions.has(action))
				: input,
	},
});

export default config;
