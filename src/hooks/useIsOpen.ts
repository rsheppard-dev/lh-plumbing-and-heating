import { IAvailibleTimes } from '@/interfaces/ISettings';
import { useCallback, useEffect, useState } from 'react';

export default function useIsOpen(times: IAvailibleTimes[]) {
	const isCurrentlyOpen = useCallback(() => {
		const now = new Date();
		const currentDay = now.toLocaleDateString('en-GB', { weekday: 'long' });
		const currentTime = now.getHours() * 100 + now.getMinutes(); // Convert to 24-hour format

		const todayOpeningTimes = times.find(time => time.day === currentDay);

		if (todayOpeningTimes) {
			for (const openingTime of todayOpeningTimes.availableTimes) {
				const from = openingTime.from.replace(':', '');
				const to = openingTime.to.replace(':', '');

				if (currentTime >= parseInt(from) && currentTime <= parseInt(to)) {
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
		}, 60000); // Check every minute

		return () => clearInterval(interval);
	}, [isCurrentlyOpen]);

	return {
		isOpen,
	};
}
