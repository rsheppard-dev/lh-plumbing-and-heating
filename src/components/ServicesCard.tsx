'use client';

import { useAnimationData } from '@/hooks/useAnimationData';
import { PortableText } from '@portabletext/react';
import Lottie, { LottieRefCurrentProps } from 'lottie-react';
import { useRef } from 'react';
import { PortableTextBlock } from 'sanity';

type Props = {
	title: string;
	icon: string;
	body: PortableTextBlock[];
};

export default function ServicesCard({ title, icon, body }: Props) {
	const lottieRef = useRef<LottieRefCurrentProps>(null);

	const [animationData] = useAnimationData(icon);

	function playAnimation() {
		lottieRef.current && lottieRef.current.play();
	}

	function stopAnimation() {
		lottieRef.current && lottieRef.current.stop();
	}
	return (
		<div
			onMouseEnter={playAnimation}
			onMouseLeave={stopAnimation}
			className='bg-white shadow-md h-full space-y-4 px-6 py-3'
		>
			<h3 className='font-bold font-montserrat text-zinc-900'>{title}</h3>
			<Lottie
				lottieRef={lottieRef}
				animationData={animationData}
				autoplay={false}
				className='w-20'
			/>
			<div className='font-sourceSans text-zinc-600 prose'>
				<PortableText value={body} />
			</div>
		</div>
	);
}
