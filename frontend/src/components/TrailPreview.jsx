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
        duration = "5h30m";
        elevation = "+1200m";
        description = "An iconic hike offering spectacular views of the Mont Blanc massif. The trail crosses glaciers, alpine meadows and high mountain forests. A physical challenge rewarded with breathtaking panoramas.";
        imageUrl = moutain; // Use the imported image
    }
    else if(id == SAMPLE_2){
        title = "Alpine Lakes Trail";
        difficulty = "Easy";
        distance = "8km";
        duration = "3h15m";
        elevation = "+400m";
        description = "A picturesque trail that winds through green meadows and pine forests, leading to a series of crystal-clear alpine lakes. Perfect for a relaxing day in nature, with opportunities for picnicking and wildlife watching.";
        imageUrl = "https://www.chamonix.fr/wp-content/uploads/2024/06/7088963-scaled.jpg"; // Replace with actual URL
    }

    else if(id == SAMPLE_3){
        title = "Ridge Circuit";
        difficulty = "Hard";
        distance = "20km";
        duration = "7h45m";
        elevation = "+1500m";
        description = "A challenging circuit following steep mountain ridges, offering 360-degree panoramic views. The route includes technical passages and exposed sections, ideal for experienced hikers looking for an exciting adventure.";
        imageUrl = "https://www.verdontourisme.com/wp-content/uploads/2023/08/parapet-route-des-cretes-du-verdon-644x470.jpeg"; // Replace with actual URL
    }

    else {
        // IMPLEMENTER LE FETCH ICI
        throw new Error(`Trail with ID ${id} not found`);
    }

    description = description.length > 20 ? description.substring(0, 197) + '...' : description;
    imageUrl = `${imageUrl}?w=800&h=600&fit=crop`;

    return (
        <div className="border-2 bg-[#DADACC] border-solid rounded-4xl py-4">
            {/* Trail name & Difficulty */}
            <div className="flex px-6">
                <h2 className="text-black text-xl font-semibold"> {title}</h2>
                <span className={`text-sm text-white text-center ml-4 mr-4 px-2 py-1 ${DifficultyColors[difficulty]} rounded-lg`}>{difficulty}</span>
            </div>

            {/* Trails quick details */}
            <div className="grid grid-rows-1 md:grid-cols-3 gap-6 w-full">
                {/* General Info */}
                <div className="px-6 mt-2 grid grid-cols-2 gap-x-2 gap-y-3 mt-8 items-start justify-items-start w-2xs h-20 mx-auto">
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
                <div className="px-6 mb-2 mt-10">
                    <p className="text-sm text-gray-700">
                        {description}
                    </p>
                </div>

                {/* Images */}
                <div className="grid grid-cols-2 md:grid-cols-2 gap-4 w-3xs mx-auto">
                    {/* First big photo */}
                    <div className="">
                        <img src={imageUrl} alt="trail" className="max-h-20 h-auto w-auto rounded-lg" />
                    </div>

                    {/* Second small photo */}
                    <div className="">
                        <img src={imageUrl} alt="trail" className="max-h-20 h-auto w-auto rounded-lg" />
                    </div>

                    {/* Third small photo */}
                    {/* Will later be a map */}
                    <div className="">
                        <img src={imageUrl} alt="trail" className="max-h-20 h-auto w-auto rounded-lg" />
                    </div>
                </div>
                
            </div>
        </div>
    );
}

export default TrailPreview;
