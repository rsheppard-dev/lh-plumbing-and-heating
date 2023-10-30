import { TypeOf, z } from 'zod';

export const contactSchema = z.object({
	companyName: z.undefined(),
	firstName: z.string({
		required_error: 'First name is required.',
	}),
	lastName: z.string({
		required_error: 'Last name is required.',
	}),
	phone: z.string({
		required_error: 'A phone number is required.',
	}),
	email: z.string().email().optional(),
	message: z.string({
		required_error: 'A message is required.',
	}),
});

export type ContactInput = TypeOf<typeof contactSchema>;
