import 'server-only';

import type { QueryParams } from 'next-sanity';
import { client } from '@/sanity/lib/client';

const DEFAULT_PARAMS = {} as QueryParams;
const DEFAULT_TAGS = [] as string[];

export const token = process.env.SANITY_READ_TOKEN;

export async function sanityFetch<QueryResponse>({
	query,
	params = DEFAULT_PARAMS,
	tags = DEFAULT_TAGS,
}: {
	query: string;
	params?: QueryParams;
	tags?: string[];
}): Promise<QueryResponse> {
	return client
		.withConfig({ useCdn: true })
		.fetch<QueryResponse>(query, params, {
			token,
			next: {
				revalidate: 30,
				tags,
			},
		});
}
