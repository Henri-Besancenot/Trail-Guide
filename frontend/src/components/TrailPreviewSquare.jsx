import React from 'react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const TrailPreviewSquare = ({ trailId }) => {
    const [trail, setTrail] = useState(null);

    useEffect(() => {
        const fetchTrail = async () => {
          try {
            const response = await fetch(`/api/trails/all/${trailId}`, {
                method: "GET",
                headers: { "Content-Type": "application/json" },
              });

            const data = await response.json();

            if (data.status && data.data) {
              setTrail(data.data);
            }
          } catch (err) {
            console.error("Failed to fetch trail:", err);
          }
        };
        fetchTrail();
      }, [trailId]);
    
    if (!trail) return <p className="text-center mt-10">Loading trail...</p>;
    
    return (
        <div className="flex-none w-64 bg-white rounded-lg shadow-md overflow-hidden border border-stone-200 hover:shadow-lg transition-shadow duration-300">
            <div className="h-32 bg-stone-300 w-full object-cover"></div>
            <div className="p-4">
                <h3 className="text-lg font-semibold text-stone-800">{trail.title}</h3>
                <p className="text-sm text-stone-600 mt-1">{trail.distance} • {trail.difficulty}</p>
                <Link to={`/trails/all/${trailId}`} className="mt-3 block text-emerald-600 hover:text-emerald-800 text-sm font-medium">
                    View Details &rarr;
                </Link>
            </div>
        </div>
    );
};

export default TrailPreviewSquare;