import { defineField, defineType } from 'sanity';
import { FaHighlighter } from 'react-icons/fa';
import HighlightedTextUI from '@/components/HighlightedTextUI';

const about = defineType({
	name: 'about',
	type: 'document',
	title: 'About Section',
	fieldsets: [
		{
			title: 'Button',
			name: 'button',
		},
	],
	fields: [
		defineField({
			title: 'Subheading',
			name: 'subheading',
			type: 'string',
			validation: Rule => Rule.required(),
		}),
		defineField({
			title: 'Heading',
			name: 'heading',
			type: 'array',
			of: [
				{
					type: 'block',
					styles: [],
					lists: [],
					marks: {
						annotations: [],
						decorators: [
							{
								title: 'Highlight',
								value: 'highlight',
								icon: FaHighlighter,
								component: HighlightedTextUI,
							},
						],
					},
				},
			],
			validation: Rule => Rule.required(),
		}),
		defineField({
			title: 'Content',
			name: 'content',
			type: 'array',
			of: [{ type: 'block' }],
			validation: Rule => Rule.required(),
		}),
		defineField({
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
	preview: {
		prepare() {
			return {
				title: 'About Section',
			};
		},
	},
});

export default about;
