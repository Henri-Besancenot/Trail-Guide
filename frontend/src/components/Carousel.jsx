import React from 'react';
import { Link } from 'react-router-dom';
import TrailPreviewSquare from './TrailPreviewSquare';

const Carousel = ({ title, hikeIds, addButton=false }) => {
    return (
        <div className="mb-10">
            <div className="flex items-center mb-4">
                <h2 className="text-2xl font-bold text-stone-800">{title}</h2>
                {addButton && (
                    <button className="ml-4 bg-[#7A8B65] hover:bg-[#6B7A52] text-white font-bold py-2 px-4 rounded">
                        Add New Hike
                    </button>
                )}
            </div>
            <div className="flex overflow-x-auto space-x-4 pb-4 scrollbar-hide items-center">
                {hikeIds.map((id) => (
                    <TrailPreviewSquare key={id} trailId={id} />
                ))}

                {addButton && (
                    <Link to="/trails/new" className="w-16 h-16 rounded-full bg-[#7A8B65] flex items-center justify-center transform transition duration-100 hover:scale-110 hover:bg-[#6B7A52] ml-4">
                        <span className="text-4xl text-white font-bold pb-2">+</span>
                    </Link>
                )}
            </div>
        </div>
    );
};

export default Carousel;