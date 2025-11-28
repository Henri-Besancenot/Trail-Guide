import "leaflet/dist/leaflet.css";
import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap, useMapEvent } from 'react-leaflet';
import { Polyline } from 'react-leaflet';
import { useNavigate } from 'react-router-dom';

import Template from '../components/Template'

function ChangeView({ coords, zoom }) {
  const map = useMap();

  useEffect(() => {
    map.setView(coords, zoom);
  }, [map, coords, zoom]);

  return null;
}

function MapBoundsUpdater({ onBoundsChange }) {
  const map = useMapEvent('moveend', () => {
    onBoundsChange(map.getBounds());
  });

  useEffect(() => {
    onBoundsChange(map.getBounds());
  }, [map, onBoundsChange]);

  return null;
}


function NearbyTrails() {
    const defaultCoords = [60.1699, 24.9384]; //Helsinki
    const [coords, setCoords] = useState(defaultCoords);
    const [zoom, setZoom] = useState(13); 
    const [trails, setTrails] = useState([]);
    const [visibleTrails, setVisibleTrails] = useState([]);
    const [gpxRoutes, setGpxRoutes] = useState({});
    const navigate = useNavigate();
  
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

    useEffect(() => {
      async function fetchTrails() {
          try {
            const response = await fetch(`/api/trails/all`, {
              method: "GET",
              headers: { "Content-Type": "application/json" },
            });
            const data = await response.json();
            setTrails(data.data)
          } catch (err) {
              console.error("Error fetching trails:", err);
          }
      }
      fetchTrails();
  }, []);

  useEffect(() => {
    async function fetchGPX(trail) {
      if (!trail.gpx_file) return;
      try {
        const res = await fetch(trail.gpx_file);
        const text = await res.text();
        const parser = new DOMParser();
        const xml = parser.parseFromString(text, "application/xml");
        const points = Array.from(xml.querySelectorAll("trkpt")).map(pt => [
          parseFloat(pt.getAttribute("lat")),
          parseFloat(pt.getAttribute("lon"))
        ]);
        setGpxRoutes(prev => ({ ...prev, [trail._id]: points }));
      } catch (err) {
        console.error("Error fetching GPX for", trail.title, err);
      }
    }

    visibleTrails.forEach(trail => {
      if (!gpxRoutes[trail._id]) fetchGPX(trail);
    });
  }, [visibleTrails, gpxRoutes])

    const handleBoundsChange = React.useCallback((bounds) => {
      setVisibleTrails(trails.filter(trail => {
        if (!trail.start_coords || trail.start_coords.length < 2) return false;
        const [lat, lon] = trail.start_coords;
        return bounds.contains([lat, lon]);
      }));
    }, [trails]);

  return (
    <Template bannerTitle="Nearby Trails" bannerSubtitle="Discover trails near your home">
      <div className="flex-1 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Nearby Trails</h2>
          <MapContainer center={coords} zoom={zoom} style={{ height: "500px", width: "100%" }}>
            <ChangeView coords={coords} zoom={zoom} />
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <MapBoundsUpdater onBoundsChange={handleBoundsChange} />
            
            {visibleTrails.map(trail => (
              <Marker key={trail._id} position={trail.start_coords}>
                <Popup>
                  <div onClick={() => navigate(`/trails/all/${trail._id}`)} style={{ cursor: "pointer" }}>
                    {trail.title}
                  </div>
                </Popup>
              </Marker>
            ))}

            {Object.entries(gpxRoutes).map(([id, points]) => (
              <Polyline key={id} positions={points} color="blue" />
            ))}
          </MapContainer>
        </div>
      </div>
    </Template>
  );
}

export default NearbyTrails;