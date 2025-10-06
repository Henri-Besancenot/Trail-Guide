import hiking from '../assets/hiking.png';
import increase from '../assets/increase2.svg';
import clock from '../assets/clock.svg';
import moutain from '../assets/mountain-bg.jpg'; // Add this import

const SAMPLE_1 = -1
const SAMPLE_2 = -2
const SAMPLE_3 = -3

const DifficultyColors = {
    Easy: 'bg-green-500',
    Medium: 'bg-yellow-500',
    Hard: 'bg-red-500',
    Expert: 'bg-purple-500',
};

function TrailPreview({ id }) {
    let title, difficulty, distance, duration, elevation, description, imageUrl;

    if(id == SAMPLE_1){
        title = "Mont Blanc Hike";
        difficulty = "Medium";
        distance = "15km";
        duration = "5h 30m";
        elevation = "+1200m";
        description = "An iconic hike offering spectacular views of the Mont Blanc massif. The trail crosses glaciers, alpine meadows and high mountain forests. A physical challenge rewarded with breathtaking panoramas.";
        imageUrl = moutain; // Use the imported image
    }
    else if(id == SAMPLE_2){
        title = "Alpine Lakes Trail";
        difficulty = "Easy";
        distance = "8km";
        duration = "3h 15m";
        elevation = "+400m";
        description = "A picturesque trail that winds through green meadows and pine forests, leading to a series of crystal-clear alpine lakes. Perfect for a relaxing day in nature, with opportunities for picnicking and wildlife watching.";
        imageUrl = "https://www.chamonix.fr/wp-content/uploads/2024/06/7088963-scaled.jpg"; // Replace with actual URL
    }

    else if(id == SAMPLE_3){
        title = "Ridge Circuit";
        difficulty = "Hard";
        distance = "20km";
        duration = "7h 45m";
        elevation = "+1500m";
        description = "A challenging circuit following steep mountain ridges, offering 360-degree panoramic views. The route includes technical passages and exposed sections, ideal for experienced hikers looking for an exciting adventure.";
        imageUrl = "https://www.verdontourisme.com/wp-content/uploads/2023/08/parapet-route-des-cretes-du-verdon-644x470.jpeg"; // Replace with actual URL
    }

    else {
        // IMPLEMENTER LE FETCH ICI
        throw new Error(`Trail with ID ${id} not found`);
    }

    description = description.length > 200 ? description.substring(0, 197) + '...' : description;
    imageUrl = `${imageUrl}?w=800&h=600&fit=crop`;

    return (
        <div className="border-2 bg-[#DADACC] border-solid rounded-4xl py-4">
            {/* Trail name & Difficulty */}
            <div className="flex px-6">
                <h3 className="text-black font-semibold text-black"> {title}</h3>
                <span className={`text-sm text-white text-center ml-4 mr-4 px-2 py-0 ${DifficultyColors[difficulty]} rounded-lg`}>{difficulty}</span>
            </div>

            {/* Trails quick details */}
            <div className="grid grid-rows-1 md:grid-cols-3 gap-6 mt-4">
                {/* General Info */}
                <div className="px-6 mt-2 grid grid-cols-2 gap-x-2 gap-y-3 items-start justify-items-start">
                    <div className="flex items-center">
                        <img src={hiking} alt="distance" className="w-10 h-10 bg-white p-2 rounded-full" />
                        <p className="text-sm text-gray-600 ml-2"> {distance}</p>
                    </div>

                    <div className="flex items-center">
                        <img src={clock} alt="time" className="w-10 h-10 bg-white p-2 rounded-full" />
                        <p className="text-sm text-gray-600 ml-2"> {duration}</p>
                    </div>

                    <div className="flex items-center">
                        <img src={increase} alt="elevation" className="w-10 h-10 bg-white p-1 rounded-full" />
                        <p className="text-sm text-gray-600 ml-2"> {elevation}</p>
                    </div>
                </div>

                {/* Description */}
                <div className="px-6 mt-4 mb-2">
                    <p className="text-sm text-gray-700">
                        {description}
                    </p>
                </div>

                {/* Images */}
                <div className="grid grid-rows-2 md:grid-cols-2 gap-4">
                    {/* First big photo */}
                    <div className="px-6 mt-4 mb-2 row-span-2">
                        <img src={imageUrl} alt="trail" className="w-40 h-40 object-cover rounded-lg" />
                    </div>

                    {/* Second small photo */}
                    <div className="px-6 mt-4 mb-2 hidden md:block">
                        <img src={imageUrl} alt="trail" className="w-20 h-20 object-cover rounded-lg" />
                    </div>

                    {/* Third small photo */}
                    {/* Will later be a map */}
                    <div className="px-6 mt-4 mb-2 hidden md:block">
                        <img src={imageUrl} alt="trail" className="w-20 h-20 object-cover rounded-lg" />
                    </div>


                </div>
            </div>
        </div>
    );
}

export default TrailPreview;
