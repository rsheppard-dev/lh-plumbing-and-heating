import { useState, useRef, useEffect, useCallback } from 'react';
import { useSwipeable } from 'react-swipeable';

type SliderOptions = {
	timer?: number;
	alternate?: boolean;
};

const defaultOptions: SliderOptions = {
	alternate: true,
};
export default function useSlider<T>(
	slides: T[],
	options: SliderOptions = defaultOptions
) {
	const timerRef = useRef<ReturnType<typeof setTimeout>>();
	const [slideIndex, setSlideIndex] = useState(0);
	const [direction, setDirection] = useState(1);

	const isFirstSlide = slideIndex === 0;
	const isLastSlide = slideIndex === slides.length - 1;

	const swipeable = useSwipeable({
		onSwipedLeft: () => !isLastSlide && nextSlide(),
		onSwipedRight: () => !isFirstSlide && previousSlide(),
		preventScrollOnSwipe: true,
		trackMouse: true,
		swipeDuration: 500,
	});

	const nextSlide = useCallback(
		function () {
			setDirection(1);
			const newSlideIndex = isLastSlide ? 0 : slideIndex + 1;
			setSlideIndex(newSlideIndex);
		},
		[isLastSlide, slideIndex]
	);

	const previousSlide = useCallback(
		function () {
			setDirection(-1);
			const newSlideIndex = isFirstSlide ? slides.length - 1 : slideIndex - 1;
			setSlideIndex(newSlideIndex);
		},
		[isFirstSlide, slideIndex, slides.length]
	);

	function goToSlide(index: number) {
		setSlideIndex(index);
	}

	useEffect(() => {
		if (!options?.timer) return;

		if (isFirstSlide) setDirection(1);
		if (isLastSlide) setDirection(-1);

		clearTimeout(timerRef.current);

		timerRef.current = setTimeout(() => {
			direction > 0 && !options.alternate ? nextSlide() : previousSlide();
		}, options.timer * 1000);

		return () => clearTimeout(timerRef.current);
	}, [
		direction,
		isFirstSlide,
		isLastSlide,
		nextSlide,
		options.alternate,
		options.timer,
		previousSlide,
	]);

	return {
		slideIndex,
		isFirstSlide,
		isLastSlide,
		nextSlide,
		previousSlide,
		goToSlide,
		swipeable,
	};
}
