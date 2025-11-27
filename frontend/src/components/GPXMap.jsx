import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Polyline, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

// Fix for default marker icon issues in React-Leaflet
let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41]
});
L.Marker.prototype.options.icon = DefaultIcon;

// Custom icon for interesting spots (waypoints) - Square shape
const WaypointIcon = L.divIcon({
    className: 'custom-square-icon',
    html: '<div style="background-color: #e74c3c; width: 12px; height: 12px; border: 2px solid white; border-radius: 2px; box-shadow: 0 0 4px rgba(0,0,0,0.4);"></div>',
    iconSize: [16, 16],
    iconAnchor: [8, 8]
});

// Component to automatically fit map bounds to the route
function FitBounds({ points }) {
    const map = useMap();
    useEffect(() => {
        if (points && points.length > 0) {
            const bounds = L.latLngBounds(points);
            map.fitBounds(bounds, { padding: [50, 50] });
        }
    }, [map, points]);
    return null;
}

const GPXMap = ({ gpxUrl }) => {
    const [positions, setPositions] = useState([]);
    const [waypoints, setWaypoints] = useState([]);
    const [startPoint, setStartPoint] = useState(null);
    const [endPoint, setEndPoint] = useState(null);

    useEffect(() => {
        async function fetchGPX() {
            if (!gpxUrl) return;
            try {
                const res = await fetch(gpxUrl);
                const text = await res.text();
                const parser = new DOMParser();
                const xml = parser.parseFromString(text, "application/xml");
                
                // Parse Track Points
                const points = Array.from(xml.querySelectorAll("trkpt")).map(pt => [
                    parseFloat(pt.getAttribute("lat")),
                    parseFloat(pt.getAttribute("lon"))
                ]);

                // Parse Waypoints (Interesting spots)
                const wpts = Array.from(xml.querySelectorAll("wpt")).map(pt => {
                    const nameElement = pt.querySelector("name");
                    return {
                        pos: [parseFloat(pt.getAttribute("lat")), parseFloat(pt.getAttribute("lon"))],
                        name: nameElement ? nameElement.textContent : "Waypoint"
                    };
                });

                if (points.length > 0) {
                    setPositions(points);
                    setStartPoint(points[0]);
                    setEndPoint(points[points.length - 1]);
                }
                
                if (wpts.length > 0) {
                    setWaypoints(wpts);
                }

            } catch (err) {
                console.error("Error fetching GPX:", err);
            }
        }
        fetchGPX();
    }, [gpxUrl]);

    // Default center (France) if no data yet
    const defaultCenter = [46.5, 2.6];
    const defaultZoom = 5;

    return (
        <div style={{ height: '500px', width: '100%' }}>
            <MapContainer 
                center={defaultCenter} 
                zoom={defaultZoom} 
                style={{ height: "100%", width: "100%" }}
            >
                <TileLayer 
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="http://www.osm.org">OpenStreetMap</a>'
                />
                
                {positions.length > 0 && (
                    <>
                        <Polyline positions={positions} color="blue" />
                        <FitBounds points={positions} />
                        
                        {startPoint && (
                            <Marker position={startPoint}>
                                <Popup>Start</Popup>
                            </Marker>
                        )}
                        
                        {endPoint && (
                            <Marker position={endPoint}>
                                <Popup>End</Popup>
                            </Marker>
                        )}
                    </>
                )}

                {waypoints.map((wp, idx) => (
                    <Marker key={idx} position={wp.pos} icon={WaypointIcon}>
                        <Popup>{wp.name}</Popup>
                    </Marker>
                ))}
            </MapContainer>
        </div>
    );
};

export default GPXMap;
