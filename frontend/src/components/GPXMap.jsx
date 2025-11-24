import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-gpx';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

// Fix for default marker icon issues in React-Leaflet/Leaflet

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41]
});

L.Marker.prototype.options.icon = DefaultIcon;

const GPXMap = ({ gpxUrl }) => {
    gpxUrl = "https://mpetazzoni.github.io/leaflet-gpx/demo.gpx"
    const mapRef = useRef(null);
    const mapInstanceRef = useRef(null);
    const gpxLayerRef = useRef(null);

    useEffect(() => {
        if (!mapRef.current) return;

        // Initialize map only once
        if (!mapInstanceRef.current) {
            mapInstanceRef.current = L.map(mapRef.current);

            L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: 'Map data &copy; <a href="http://www.osm.org">OpenStreetMap</a>'
            }).addTo(mapInstanceRef.current);
        }

        // If there is an existing GPX layer, remove it before adding a new one
        if (gpxLayerRef.current) {
            mapInstanceRef.current.removeLayer(gpxLayerRef.current);
        }

        if (gpxUrl) {
            const options = {
                async: true,
                polyline_options: { color: 'red' },
                marker_options: {
                    startIconUrl: 'https://mpetazzoni.github.io/leaflet-gpx/pin-icon-start.png',
                    endIconUrl: 'https://mpetazzoni.github.io/leaflet-gpx/pin-icon-end.png',
                    shadowUrl: 'https://mpetazzoni.github.io/leaflet-gpx/pin-shadow.png',
                },
            };

            gpxLayerRef.current = new L.GPX(gpxUrl, options).on('loaded', (e) => {
                mapInstanceRef.current.fitBounds(e.target.getBounds());
            }).addTo(mapInstanceRef.current);
        }
        else{
            // If no GPX URL is provided, set view to a default location
            mapInstanceRef.current.setView([46.5, 2.6], 5); // Center of France
            console.log("No GPX URL provided:", gpxUrl);
        }
        

        // Cleanup function to remove map on unmount
        return () => {
            // We don't destroy the map instance here to allow prop updates, 
            // but we should clean up if the component is completely unmounted.
            // However, React 18 strict mode might trigger this twice.
            // For simple prop updates, we rely on the logic above to clear layers.
        };
    }, [gpxUrl]); // Re-run effect when gpxUrl changes

    // Separate cleanup for unmounting the component entirely
    useEffect(() => {
        return () => {
            if (mapInstanceRef.current) {
                mapInstanceRef.current.remove();
                mapInstanceRef.current = null;
            }
        };
    }, []);

    return (
        <div 
            id="map" 
            ref={mapRef} 
            style={{ height: '500px', width: '100%' }} 
        />
    );
};

export default GPXMap;