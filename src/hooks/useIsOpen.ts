import { IAvailibleTimes } from '@/interfaces/ISettings';
import { useCallback, useEffect, useState } from 'react';

export default function useIsOpen(times: IAvailibleTimes[]) {
	function convertTo24HourFormat(timeString: string) {
		let time = parseInt(timeString, 10);

		if (timeString.includes('PM') && time < 1200) {
			time += 1200;
		}

		return time.toString().padStart(4, '0'); // ensure the result is a 4-digit string.
	}

	const isCurrentlyOpen = useCallback(() => {
		const now = new Date();
		const currentDay = now.toLocaleDateString('en-GB', { weekday: 'long' });
		const currentTime = now.getHours() * 100 + now.getMinutes(); // convert to 24-hour format

		const todayOpeningTimes = times.find(time => time.day === currentDay);

		if (todayOpeningTimes) {
			for (const openingTime of todayOpeningTimes.availableTimes) {
				const from = openingTime.from.replace(':', '');
				const to = openingTime.to.replace(':', '');

				if (
					currentTime >= parseInt(convertTo24HourFormat(from)) &&
					currentTime <= parseInt(convertTo24HourFormat(to))
				) {
					return true;
				}
			}
		}

		return false;
	}, [times]);

	const [isOpen, setIsOpen] = useState(isCurrentlyOpen());

	useEffect(() => {
		const interval = setInterval(() => {
			setIsOpen(isCurrentlyOpen());
		}, 60000); // check every minute

		return () => clearInterval(interval);
	}, [isCurrentlyOpen]);

	return {
		isOpen,
	};
}
