'use client';

import { useLottie, useLottieInteractivity } from 'lottie-react';
import animationData from '../assets/plumbing-icon.json';

const style = {
	height: 300,
	border: 3,
	borderStyle: 'solid',
	borderRadius: 7,
};

const options = {
	animationData,
};

const PlaySegmentsOnHover = () => {
	const lottieObj = useLottie(options, style);
	const Animation = useLottieInteractivity({
		lottieObj,
		mode: 'cursor',
		actions: [
			{
				position: { x: [0, 1], y: [0, 1] },
				type: 'loop',
				frames: [45, 60],
			},
			{
				position: { x: -1, y: -1 },
				type: 'stop',
				frames: [45],
			},
		],
	});

	return Animation;
};

export default function ServicesCard() {
	return (
		<div className='col-span-4 bg-white shadow h-full space-y-4 px-6 py-3'>
			<h3 className='font-bold font-montserrat text-zinc-900'>Plumbing</h3>
			{PlaySegmentsOnHover()}
			<div className='font-sourceSans text-zinc-600'>
				Bathrooms, shower rooms, wet rooms, water softeners, water filters,
				waste disposers, drains, and general maintenance.
			</div>
		</div>
	);
}
