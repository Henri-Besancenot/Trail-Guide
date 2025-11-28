import Template from '../components/Template'
import React, { useState, useEffect } from 'react';

import TrailPreview from '../components/TrailPreview';

function PopularTrails() {
  const [trails, setTrails] = useState([]);

  useEffect(() => {
    const fetchTrails = async () => {
      try {
        const res = await fetch(`/api/trails/all?sort=o_popularity`, {
          method: "GET"
        });

        const data = await res.json();
        if (data.status && data.data) {
          setTrails(data.data);
        }
      } catch (err) {
        console.error('Error fetching trails:', err);
      }
    };

    fetchTrails();
  }, []);

  return (
    <Template bannerTitle="Popular trails" bannerSubtitle="Discover the most liked trails right now" >
      <div className="flex-1 bg-[#F3F3EB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex items-center mb-6">
          <h2 className="text-3xl font-bold text-gray-900">
            Popular trails
          </h2>
        </div>
        <div className="mt-8 space-y-8">
            {trails.length === 0 ? (
              <p></p>
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

export default PopularTrails;