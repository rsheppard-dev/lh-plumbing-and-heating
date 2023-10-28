import { IImageData } from '@/interfaces/IGallery';
import Image from 'next/image';

type Props = {
	item: IImageData;
};

export default function GalleryItem({ item }: Props) {
	return (
		<figure className='h-64 bg-zinc-300 relative overflow-hidden'>
			<Image
				src={item.image.url}
				alt={item.image.alt}
				fill
				sizes='(min-width: 1380px) 306px, (min-width: 1060px) calc(18.33vw + 57px), (min-width: 800px) calc(33.33vw - 16px), (min-width: 540px) calc(50vw - 20px), calc(100vw - 32px)'
				className='object-cover hover:scale-110 transition-transform'
			/>
		</figure>
	);
}
