import ICategory from '@/interfaces/ICategory';
import SectionHeader from './SectionHeader';
import Wrapper from './Wrapper';
import IGallery, { IImageData } from '@/interfaces/IGallery';
import ImageModal from './ImageModal';
import PaginationControls from './PaginationControls';

type Props = {
	categories: ICategory[];
	gallery: IGallery;
	limit: number;
	start: number;
	end: number;
};

export default function GallerySection({
	categories,
	gallery,
	limit,
	start,
	end,
}: Props) {
	return (
		<section aria-label='Gallery Section' className='pt-32'>
			<SectionHeader
				heading={gallery?.heading}
				subheading={gallery?.subheading}
				type='page'
			/>
			<Wrapper className='grid gap-2 grid-cols-gallery mb-10'>
				{gallery.imageGallery.map(item => (
					<ImageModal key={item._key} item={item} />
				))}
			</Wrapper>

			{limit < gallery.totalImages ? (
				<PaginationControls
					hasNextPage={end < gallery.totalImages}
					hasPreviousPage={start > 0}
					totalResults={gallery.totalImages}
					resultsPerPage={gallery.limit}
				/>
			) : (
				<div>
					<p>{limit}</p>
					<p>{gallery.totalImages}</p>
				</div>
			)}
		</section>
	);
}
