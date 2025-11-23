import Template from '../components/Template'
import "leaflet/dist/leaflet.css";
import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';

function ChangeView({ coords, zoom }) {
    const map = useMap();
    map.setView(coords, zoom);
    return null;
} 

function NearbyTrails() {
    const defaultCoords = [60.1699, 24.9384]; //Helsinki
    const [coords, setCoords] = useState(defaultCoords);
    const [zoom, setZoom] = useState(13); 
  
    useEffect(() => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            setCoords([position.coords.latitude, position.coords.longitude]);
          },
          (error) => {
            console.warn("Geolocation failed, using default:", error.message);
            setCoords(defaultCoords);
          }
        );
      }
    }, []);

  return (
    <Template bannerTitle="Nearby Trails" bannerSubtitle="Discover trails near your home">
      <div className="flex-1 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Nearby Trails</h2>
          <MapContainer center={coords} zoom={zoom} style={{ height: '500px', width: '100%' }}>
            <ChangeView coords={coords} zoom={zoom} />
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution="&copy; OpenStreetMap contributors"
            />
          </MapContainer>
        </div>
      </div>
    </Template>
  );
}

export default NearbyTrails;