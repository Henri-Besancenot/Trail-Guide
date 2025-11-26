import React from 'react';
import { Link } from 'react-router-dom';

const TrailPreviewSquare = ({ id, title = "Mountain Loop", distance = "12 km", difficulty = "Hard" }) => {
    return (
        <div className="flex-none w-64 bg-white rounded-lg shadow-md overflow-hidden border border-stone-200 hover:shadow-lg transition-shadow duration-300">
            <div className="h-32 bg-stone-300 w-full object-cover"></div>
            <div className="p-4">
                <h3 className="text-lg font-semibold text-stone-800">{title} {id}</h3>
                <p className="text-sm text-stone-600 mt-1">{distance} • {difficulty}</p>
                <Link to={`/hike/${id}`} className="mt-3 block text-emerald-600 hover:text-emerald-800 text-sm font-medium">
                    View Details &rarr;
                </Link>
            </div>
        </div>
    );
};

export default TrailPreviewSquare;