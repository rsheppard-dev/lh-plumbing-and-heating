import { ILocation } from '@/interfaces/ISettings';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import { memo, useCallback, useMemo, useState } from 'react';

type Props = {
	location: ILocation;
};

function Map({ location }: Props) {
	const containerStyle = {
		width: '100%',
		height: '400px',
	};

	const center = useMemo(
		() => ({
			lat: location.lat,
			lng: location.lng,
		}),
		[location.lat, location.lng]
	);

	const { isLoaded } = useJsApiLoader({
		id: 'google-map-script',
		googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API as string,
	});

	const [map, setMap] = useState(null);

	const onLoad = useCallback(function callback(map: any) {
		setMap(map);
	}, []);

	const onUnmount = useCallback(function callback(map: any) {
		setMap(null);
	}, []);

	return isLoaded ? (
		<GoogleMap
			mapContainerStyle={containerStyle}
			center={center}
			zoom={19}
			onLoad={onLoad}
			onUnmount={onUnmount}
		>
			<Marker position={center} />
		</GoogleMap>
	) : (
		<></>
	);
}

export default memo(Map);
