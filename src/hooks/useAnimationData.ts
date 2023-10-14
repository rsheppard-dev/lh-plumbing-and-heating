import { useEffect, useState } from 'react';

export function useAnimationData(jsonUrl: string) {
	const [animationData, setAnimationData] = useState(null);

	useEffect(() => {
		// Use the fetch API to retrieve the JSON data
		fetch(jsonUrl)
			.then(response => {
				if (!response.ok) {
					throw new Error('Network response was not ok');
				}
				return response.json();
			})
			.then(data => {
				// Store the JSON data in the state variable
				setAnimationData(data);
			})
			.catch(error => {
				console.error('Error fetching JSON data:', error);
			});
	}, [jsonUrl]);

	return [animationData];
}
