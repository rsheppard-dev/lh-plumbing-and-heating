import ICategory from '@/interfaces/ICategory';
import SectionHeader from './SectionHeader';
import Wrapper from './Wrapper';
import IGallery from '@/interfaces/IGallery';

type Props = {
	categories: ICategory[];
	gallery: IGallery;
};

export default function GallerySection({ categories, gallery }: Props) {
	console.log(gallery.imageGallery[0].categories);
	return (
		<div className='pt-32'>
			<SectionHeader
				heading={gallery?.heading}
				subheading={gallery?.subheading}
				type='page'
			/>
			<Wrapper>
				<aside className='flex flex-col md:flex-row w-fit'>
					<div className='bg-brand-yellow h-full px-6 py-3'>
						<h3 className='font-montserrat font-bold text-zinc-900'>Filter</h3>
					</div>
					<form
						action=''
						className='grid grid-cols-2 md:flex md:items-center gap-2 bg-brand-blue grow px-6 py-3 h-full'
					>
						{categories.map(category => (
							<div key={category?._id} className='flex items-center gap-2'>
								<input
									type='checkbox'
									name={category?.name.toLowerCase()}
									id={category?.name.toLowerCase()}
									defaultChecked
									className='w-4 h-4 text-brand-yellow bg-white border-zinc-300 focus:ring-brand-yellow focus:ring-2'
								/>
								<label
									htmlFor={category?.name.toLowerCase()}
									className='font-sourceSans text-white'
								>
									{category?.name}
								</label>
							</div>
						))}
					</form>
				</aside>
			</Wrapper>
		</div>
	);
}
