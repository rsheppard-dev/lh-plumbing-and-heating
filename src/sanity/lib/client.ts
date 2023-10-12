import { createClient } from 'next-sanity';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID as string;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET as string;

const config = {
	projectId,
	dataset,
	apiVersion: '2023-09-20',
	useCdn: false,
};

export const client = createClient(config);
