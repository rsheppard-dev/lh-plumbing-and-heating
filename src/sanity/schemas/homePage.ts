import { defineArrayMember, defineField, defineType } from 'sanity';
import pages from './pages';

const homePage = defineType({
	name: 'homePage',
	type: 'document',
	title: 'Home Section',
	fieldsets: [
		{
			title: 'Primary Button',
			name: 'primaryButton',
		},
		{
			title: 'Secondary Button',
			name: 'secondaryButton',
		},
		{
			title: 'Slider Settings',
			name: 'sliderFieldset',
		},
	],
	fields: [
		defineField({
			title: 'CTA Heading',
			name: 'ctaHeading',
			description: 'Call-to-action text that displays over image slider.',
			type: 'string',
			validation: Rule => Rule.required(),
		}),
		defineField({
			title: 'Primary Button Text',
			name: 'primaryButtonText',
			description: 'Primary button label.',
			type: 'string',
			fieldset: 'primaryButton',
			validation: Rule => Rule.required(),
		}),
		defineField({
			title: 'Primary Button Navigation',
			name: 'primaryButtonLink',
			description: 'Select the page you want the button to go to.',
			type: 'string',
			fieldset: 'primaryButton',
			options: {
				list: pages.map(({ title, url }) => ({ title: title, value: url })),
				layout: 'dropdown',
			},
			initialValue: '/contact',
		}),
		defineField({
			title: 'Secondary Button Text',
			name: 'secondaryButtonText',
			description: 'Secondary button label.',
			type: 'string',
			fieldset: 'secondaryButton',
		}),
		defineField({
			title: 'Secondary Button Navigation',
			name: 'secondaryButtonLink',
			description: 'Select the page you want the button to go to.',
			type: 'string',
			fieldset: 'secondaryButton',
			options: {
				list: pages.map(({ title, url }) => ({ title: title, value: url })),
				layout: 'dropdown',
			},
		}),
		defineField({
			title: 'Slider Images',
			name: 'sliderImages',
			type: 'array',
			of: [
				defineArrayMember({
					type: 'image',
					name: 'image',
					title: 'Image',
					options: {
						hotspot: true,
					},
					validation: Rule => Rule.required(),
					fields: [
						defineField({
							name: 'alt',
							type: 'string',
							title: 'Alternative Text',
							validation: Rule => Rule.required(),
						}),
					],
				}),
			],
			fieldset: 'sliderFieldset',
		}),
		defineField({
			title: 'Auto Slide',
			name: 'autoSlide',
			description: 'If enabled slider will automatically slide through images.',
			type: 'boolean',
			initialValue: true,
			fieldset: 'sliderFieldset',
		}),
		defineField({
			title: 'Timer',
			name: 'timer',
			description: 'Set how often you want slider to update (in seconds).',
			type: 'number',
			initialValue: 5,
			hidden: ({ document }) => !document?.autoSlide,
			validation: Rule => Rule.min(1).max(60),
			fieldset: 'sliderFieldset',
		}),
	],
	preview: {
		prepare() {
			return {
				title: 'Home Section',
			};
		},
	},
});

export default homePage;
