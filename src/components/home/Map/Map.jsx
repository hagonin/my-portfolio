import { MapContainer, Marker, TileLayer, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';
import { useEffect, useRef } from 'react';





delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
	iconRetinaUrl:
		'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
	iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
	shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
});



export default function Map({ mapRef }) {
	useEffect(() => {
		if (typeof window === 'undefined') return;
	}, []);

	return (
		<MapContainer
			ref={mapRef}
			center={[-6.2088, 106.8456]}
			zoom={13}
			className="h-75 w-50 mx-auto"
		>
			<TileLayer
				url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
				attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
			/>

			<Marker position={[43.6100709, 3.8329698]}>
				<Popup>A sample location on the map.</Popup>
			</Marker>
		</MapContainer>
	);
}
