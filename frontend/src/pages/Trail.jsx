import { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import Template from '../components/Template';
import ModalImage from "react-modal-image";

// Leaflet for maps
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Import assets
import hiking from '../assets/hiking.png';
import increase from '../assets/increase2.svg';
import clock from '../assets/clock.svg';

function Trail() {
  const { id } = useParams();
  const [trail, setTrail] = useState(null);
  const mapRef = useRef(null);
  const mapInstance = useRef(null);

  useEffect(() => {
    const fetchTrail = async () => {
      try {
        const response = await fetch(`/api/trails/all/${id}`, {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        });
  
        const data = await response.json();
  
        if (!response.ok) {
          console.error(data.message || "Error while fetching trail");
          return;
        }
  
        if (data.status && data.data) {
          setTrail(data.data);
        }
  
      } catch (error) {
        console.error("Server error:", error);
      }
    };
  
    fetchTrail();
  }, [id]);  

  // Initialize map when trail data is loaded
  useEffect(() => {
    if (!trail) return;
    if (!mapRef.current) return;
    if (mapInstance.current) return; // prevent double init

    const lat = trail.latitude || 46.5;   // default values
    const lng = trail.longitude || 2.6;

    mapInstance.current = L.map(mapRef.current).setView([lat, lng], 13);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 18,
      attribution: "&copy; OpenStreetMap contributors"
    }).addTo(mapInstance.current);

    L.marker([lat, lng]).addTo(mapInstance.current);
  }, [trail]);

  if (!trail) return <p className="text-center mt-10">Loading trail...</p>;

  const { title, difficulty, distance, duration, elevation_gain, description, images, gpx_file } = trail;

  return (
    <Template bannerTitle={title} bannerSubtitle={`Difficulty: ${difficulty}`}>
      <div className="w-full px-4 py-6">
        <div className="bg-[#E4DEDE] w-full min-h-64 p-6 rounded-xl">

          <div className="grid grid-cols-3">
            {/* Your existing details… */}
            <div className= "col-span-2 pr-6">
              <h2 className="text-2xl font-bold mb-4 py-2">{title}</h2>
              <p className="text-gray-700 mb-4 text-lg py-2">{description}</p>

              {/* Information and data */}
              <div className="bg-[#ECEDE0] w-full min-h-10 rounded-xl mx-auto">
                <h3 className="text-xl font-semibold mb-4 mt-4 py-2 px-4">Details</h3>
                <div className= "grid grid-cols-2 gap-4 px-4 pb-4">

                  <div className="flex items-center">
                    <img src={hiking} alt="distance" className="w-10 h-10 bg-white p-2 rounded-full" /> 
                    <p className="ml-2">{distance / 1000} km</p>
                  </div>

                  <div className="flex items-center">
                    <img src={clock} alt="duration" className="w-10 h-10 bg-white p-2 rounded-full" />
                    <p className="ml-2">{Math.floor(trail.duration / 60)}h{duration % 60}min</p>
                  </div>

                  <div className="flex items-center">
                    <img src={increase} alt="elevation" className="w-10 h-10 bg-white p-2 rounded-full" />
                    <p className="ml-2">{elevation_gain} m</p>
                  </div>

                  {/* <p><strong>Difficulty:</strong> {trail.difficulty}</p> */}
                </div>
              </div>

              {/* Images */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-6">
                {images && images.map((img, idx) => (
                  <ModalImage
                    key={idx}
                    small={img}
                    large={img}
                    alt={`Trail Image ${idx + 1}`}
                    className="w-full h-64 object-cover rounded-lg shadow transform hover:scale-105 transition-transform duration-300 cursor-pointer"
                  />
                ))}
              </div>
            </div>
            

            {/* Maps here */}
            
            <div className="mt-6 flex flex-col items-center col-span-1">
              <div
                id="map"
                ref={mapRef}
                className="rounded-lg shadow"
                style={{ height: "90%", width: "100%" }}
              >  
              </div>

              {/* Download */}
              <div className="mt-4">
                {gpx_file && (
                  <a
                    href={gpx_file}
                    download
                    className="inline-block bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
                  >
                    Download GPX File
                  </a>
                )}
              </div>
            </div>
          </div>

        </div>
      </div>
    </Template>
  );
}

export default Trail;
