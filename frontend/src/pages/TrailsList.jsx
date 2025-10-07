
import Template from '../components/Template'
import { useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

import TrailPreview from '../components/TrailPreview';

function TrailsList() {
  const { category } = useParams();
  const [trails, setTrails] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/api/trails/all')
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.status && data.data) {
          setTrails(data.data);
        }
      })
      .catch(err => console.error('Error fetching trails:', err));
  }, []);

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

        <div className="mt-8 space-y-8">
            {trails.length === 0 ? (
              <p>Loading trails...</p>
            ) : (
              trails.map((trail) => (
                <TrailPreview key={trail._id} trail={trail} />
              ))
            )}
          </div>

      </div>
      </div>
    </Template>
    );
}

export default TrailsList;