'use client';

import { useSearchParams, useRouter } from 'next/navigation';
import Wrapper from './Wrapper';

type Props = {
	hasNextPage: boolean;
	hasPreviousPage: boolean;
	totalResults: number;
	resultsPerPage: number;
};

export default function PaginationControls({
	hasNextPage,
	hasPreviousPage,
	totalResults,
	resultsPerPage,
}: Props) {
	const searchParams = useSearchParams();
	const router = useRouter();

	const page = searchParams.get('page') ?? 1;
	const limit = searchParams.get('limit') ?? resultsPerPage;
	return (
		<Wrapper className='mb-10'>
			<div className='flex gap-2 items-center justify-center mb-5'>
				<button
					disabled={!hasPreviousPage}
					onClick={() =>
						router.push(
							`/gallery/?page=${Number(page) - 1}&limit=${Number(limit)}`
						)
					}
					className='bg-brand-blue enabled:hover:bg-brand-yellow enabled:hover:text-zinc-900 transition-colors disabled:opacity-30 px-4 py-2 flex items-center justify-center font-sourceSans text-sm text-white'
				>
					Previous
				</button>

				<button
					disabled={!hasNextPage}
					onClick={() =>
						router.push(
							`/gallery/?page=${Number(page) + 1}&limit=${Number(limit)}`
						)
					}
					className='bg-brand-blue enabled:hover:bg-brand-yellow enabled:hover:text-zinc-900 transition-colors disabled:opacity-30 px-4 py-2 flex items-center justify-center font-sourceSans text-sm text-white'
				>
					Next
				</button>
			</div>
			<div className='font-montserrat text-sm text-zinc-600 text-center'>
				{page} / {Math.ceil(totalResults / Number(limit))}
			</div>
		</Wrapper>
	);
}
