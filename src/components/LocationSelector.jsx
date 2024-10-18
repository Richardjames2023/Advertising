import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

const LocationSelector = ({ onLocationSelect }) => {
  const [selectedLocation, setSelectedLocation] = useState(null);

  const handleMapClick = (event) => {
    const { lat, lng } = event.latlng;
    setSelectedLocation({ lat, lng });
    onLocationSelect({ lat, lng }); // Pass the selected location to the parent
  };

  return (
    <MapContainer 
      center={[51.505, -0.09]} 
      zoom={13} 
      style={{ height: '400px', width: '100%' }} 
      onClick={handleMapClick}
    >
      <TileLayer 
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" 
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' 
      />
      {selectedLocation && <Marker position={selectedLocation} />}
    </MapContainer>
  );
};

export default LocationSelector;