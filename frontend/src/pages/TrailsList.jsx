
import Template from '../components/Template'
import { useParams } from 'react-router-dom';

import hiking from '../assets/hiking.png';
import increase from '../assets/increase2.svg';
import clock from '../assets/clock.svg';

import moutain from '../assets/mountain-bg.jpg';

function TrailsList() {
  const { category } = useParams();

  const getCategoryTitle = (category) => {
    switch (category) {
      case 'all':
        return 'All Trails';
      case 'popular':
        return 'Popular Trails';
      case 'nearby':
        return 'Nearby Trails';
      default:
        return 'Trails';
    }
  };

  return (
    <Template bannerTitle={getCategoryTitle(category)} bannerSubtitle="Explore our curated list of hiking trails" >
      <div className="flex-1 bg-[#F3F3EB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">{getCategoryTitle(category)}</h2>
        <p className="text-lg text-gray-700 mb-4">
        Here you can explore a variety of hiking trails categorized under "{getCategoryTitle(category)}". Whether you're looking for popular spots, nearby adventures, or just want to see all available trails, we've got you covered. Start your journey and discover the beauty of nature!
        </p>


        {/* Actual Trail list */}

        <div className="mt-8">
        {/* Example trail item */}
        <div className="border-2 bg-[#DADACC] border-solid rounded-4xl py-4">

          {/* Trail name & Difficulty */}
          <div className=" flex px-6">
            <h3 className="text-black font-semibold text-black">Nuuksio Park hike 1</h3>
            
            {/* Difficulty */}
            <span className="text-sm text-white text-center ml-4 mr-4 px-2 py-0 bg-blue-500 rounded-lg">Easy</span>
          </div>

          {/* Trails quick details */}

          <div className="grid grid-rows-1 md:grid-cols-3 gap-6 mt-4">
            {/* General Info */}
            <div className="px-6 mt-2 grid grid-cols-2 gap-x-2 gap-y-3 items-start justify-items-start">
            {/* Distance */}
              <div className="flex items-center">
                <img src={hiking} alt="distance" className="w-10 h-10 bg-white p-2 rounded-full" />
                <p className="text-sm text-gray-600 ml-2"> 12km</p>
              </div>

              {/* Time of completion */}
              <div className="flex items-center">
                <img src={clock} alt="time" className="w-10 h-10 bg-white p-2 rounded-full" />
                <p className="text-sm text-gray-600 ml-2"> 3h 45m</p>
              </div>

              {/* Elevation difference */}
              <div className="flex items-center">
                <img src={increase} alt="elevation" className="w-10 h-10 bg-white p-1 rounded-full" />
                <p className="text-sm text-gray-600 ml-2"> +800m</p>
            </div>

            {/* <span className="text-sm text-gray-600">Length: 5 miles</span> */}
            </div>

            {/* Description */}
            <div className="px-6 mt-4 mb-2">
              <p className="text-sm text-gray-700">
                This trail offers a scenic route through diverse landscapes, including forests, hills, and lakes. Perfect for all skill levels, it provides ample opportunities for wildlife spotting and photography. Remember to carry water and wear appropriate footwear.
              </p>
            </div>

            {/* Images */}
            <div className="px-6 mt-4 mb-2">
              <img src={moutain} alt="trail" className="w-full h-64 object-cover rounded-lg" />
            </div>
          </div>
        </div>
        </div>

      </div>
      </div>
    </Template>
    );
}

export default TrailsList;