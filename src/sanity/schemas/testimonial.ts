import { defineField, defineType } from 'sanity';

const testimonial = defineType({
	name: 'testimonial',
	type: 'document',
	title: 'Testimonials',
	fields: [
		defineField({
			title: 'Client Name',
			name: 'name',
			type: 'string',
			validation: Rule => Rule.required(),
		}),
		defineField({
			title: 'Review Date',
			name: 'reviewDate',
			type: 'date',
			options: {
				dateFormat: 'DD MMMM YYYY',
			},
			validation: Rule => Rule.required(),
		}),
		defineField({
			title: 'Star Rating',
			description: 'How many stars out of 5?',
			name: 'rating',
			type: 'number',
			initialValue: 5,
			options: {
				list: [1, 2, 3, 4, 5],
				layout: 'dropdown',
			},
			validation: Rule => Rule.required(),
		}),
		defineField({
			title: 'Testimonial',
			name: 'content',
			type: 'array',
			of: [{ type: 'block' }],
			validation: Rule => Rule.required(),
		}),
	],
	preview: {
		select: {
			name: 'name',
			date: 'reviewDate',
		},
		prepare(selection) {
			const { name, date } = selection;
			return {
				title: `${name}'s Testimonial`,
				subtitle: date.split('-').reverse().join('-'),
			};
		},
	},
});

export default testimonial;
