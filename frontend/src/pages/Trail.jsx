import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Template from '../components/Template';
import hiking from '../assets/hiking.png';
import increase from '../assets/increase2.svg';
import clock from '../assets/clock.svg';

function Trail() {
  const { id } = useParams();
  const [trail, setTrail] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3000/api/trails/all/${id}`)
      .then(res => res.json())
      .then(data => {
        if (data.status && data.data) {
          setTrail(data.data);
        }
      })
      .catch(err => console.error(err));
  }, [id]);

  if (!trail) return <p className="text-center mt-10">Loading trail...</p>;

  const { title, difficulty, distance, duration, elevation_gain, description, images, gpx_file } = trail;

  const DifficultyColors = {
    Easy: 'bg-green-500',
    Medium: 'bg-yellow-500',
    Hard: 'bg-red-500',
    Expert: 'bg-purple-500',
  };

  return (
    <Template bannerTitle={title} bannerSubtitle={`Difficulty: ${difficulty}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
        
        {/* Trail Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-[#F3F3EB] p-6 rounded-2xl shadow">
          <div className="flex items-center">
            <img src={hiking} alt="distance" className="w-10 h-10 bg-white p-2 rounded-full" />
            <p className="ml-2">{distance / 1000} km</p>
          </div>

          <div className="flex items-center">
            <img src={clock} alt="duration" className="w-10 h-10 bg-white p-2 rounded-full" />
            <p className="ml-2">{Math.floor(duration / 60)}h{duration % 60}min</p>
          </div>

          <div className="flex items-center">
            <img src={increase} alt="elevation" className="w-10 h-10 bg-white p-2 rounded-full" />
            <p className="ml-2">{elevation_gain} m</p>
          </div>
        </div>

        {/* Description */}
        <div className="bg-white p-6 rounded-2xl shadow">
          <h2 className="text-2xl font-bold mb-4">About this Trail</h2>
          <p className="text-gray-700">{description}</p>
        </div>

        {/* Images */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {images && images.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`Trail Image ${idx + 1}`}
              className="w-full h-64 object-cover rounded-lg shadow"
            />
          ))}
        </div>

        {/* GPX / Map download (optional) */}
        {gpx_file && (
          <div className="mt-6">
            <a
              href={gpx_file}
              download
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              Download GPX File
            </a>
          </div>
        )}

      </div>
    </Template>
  );
}

export default Trail;