import hiking from '../assets/hiking.png';
import increase from '../assets/increase2.svg';
import clock from '../assets/clock.svg';
import { useNavigate } from 'react-router-dom';

function TrailPreview({ trail }) {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/trails/all/${trail._id}`);
    };

    const {
        title,
        difficulty,
        distance,
        duration,
        elevation_gain,
        description,
        images,
        gpx_file
      } = trail;
    
    const DifficultyColors = {
        Easy: 'bg-green-500',
        Medium: 'bg-yellow-500',
        Hard: 'bg-red-500',
        Expert: 'bg-purple-500',
    };

    function normalizeDifficulty(diff) {
        if (!diff) return "Easy";
        return diff.charAt(0).toUpperCase() + diff.slice(1).toLowerCase();
    }
    const normalizedDifficulty = normalizeDifficulty(difficulty);

    const shortDescription = description.length > 200 ? description.substring(0, 197) + '...' : description;

    return (
        <div onClick={handleClick} className="bg-[#DADACC] border-solid rounded-4xl py-4 transform transition duration-200 hover:scale-105 hover:shadow-xl">
            {/* Trail name & Difficulty */}
            <div className="flex px-6">
                <h2 className="text-black text-xl font-semibold"> {title}</h2>
                <span className={`text-sm text-white text-center ml-4 mr-4 px-2 py-1 ${DifficultyColors[normalizedDifficulty]} rounded-lg`}>
                    {normalizedDifficulty}
                </span>
            </div>

            {/* Trails quick details */}
            <div className="grid grid-rows-1 md:grid-cols-3 gap-6 w-full">
                {/* General Info */}
                <div className="px-6 mt-2 grid grid-cols-2 gap-x-2 gap-y-3 mt-8 items-start justify-items-start w-2xs h-20 mx-auto">
                    <div className="flex items-center">
                        <img src={hiking} alt="distance" className="w-10 h-10 bg-white p-2 rounded-full" />
                        <p className="text-sm text-gray-600 ml-2"> {distance/1000}km</p>
                    </div>

                    <div className="flex items-center">
                        <img src={clock} alt="time" className="w-10 h-10 bg-white p-2 rounded-full" />
                        <p className="text-sm text-gray-600 ml-2"> {Math.floor(duration/60)}h{duration%60}</p>
                    </div>

                    <div className="flex items-center">
                        <img src={increase} alt="elevation" className="w-10 h-10 bg-white p-1 rounded-full" />
                        <p className="text-sm text-gray-600 ml-2"> {elevation_gain}m</p>
                    </div>
                </div>

                {/* Description */}
                <div className="px-6 mb-2 mt-10">
                    <p className="text-sm text-gray-700">
                        {shortDescription}
                    </p>
                </div>

                {/* Images */}
                <div className="grid grid-cols-2 md:grid-cols-2 gap-4 w-3xs mx-auto">
                    {/* Photo */}
                    {trail.images.filter(img => img).map((img, index) => (
                        <div key={index} className="overflow-hidden rounded-lg">
                        <img
                            src={img}
                            alt={`${trail.title} ${index + 1}`}
                            className="w-full h-auto object-cover rounded-lg transform hover:scale-105 transition-transform duration-300 cursor-pointer"
                        />
                        </div>
                    ))}
                </div>
                
            </div>
        </div>
    );
}

export default TrailPreview;
