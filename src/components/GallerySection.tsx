import SectionHeader from './SectionHeader';
import Wrapper from './Wrapper';
import IGallery from '@/interfaces/IGallery';
import ImageModal from './ImageModal';
import PaginationControls from './PaginationControls';

type Props = {
	gallery: IGallery;
	limit: number;
	start: number;
	end: number;
};

export default function GallerySection({ gallery, limit, start, end }: Props) {
	return (
		<section aria-label='Gallery Section' className='pt-32'>
			<SectionHeader
				heading={gallery?.heading}
				subheading={gallery?.subheading}
				type='page'
			/>
			<Wrapper className='grid gap-2 grid-cols-gallery mb-10'>
				{gallery.imageGallery.map((image, index) => (
					<ImageModal key={image._key} image={image} priority={index === 0} />
				))}
			</Wrapper>

			{limit < gallery.totalImages ? (
				<PaginationControls
					hasNextPage={end < gallery.totalImages}
					hasPreviousPage={start > 0}
					totalResults={gallery.totalImages}
					resultsPerPage={gallery.limit}
				/>
			) : null}
		</section>
	);
}
