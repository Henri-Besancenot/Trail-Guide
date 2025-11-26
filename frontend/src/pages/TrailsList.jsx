
import Template from '../components/Template'
import { useParams, useSearchParams, useNavigate } from 'react-router-dom';
import React, { useState, useEffect, useContext } from 'react';

import { useAuthStore } from "../store/authStore";
import TrailPreview from '../components/TrailPreview';
import TrailFilters from '../components/TrailFilters';

function TrailsList() {
  const [searchParams] = useSearchParams();
  const [trails, setTrails] = useState([]);
  const [filters, setFilters] = useState({
    query: searchParams.get('query') || '',
    difficulty: '',
    minDistance: '',
    maxDistance: '',
    duration: '',
    elevation_gain: ''
  });
  const user = useAuthStore((state) => state.user);
  const navigate = useNavigate();

  useEffect(() => {
    setFilters(prev => ({
      ...prev,
      query: searchParams.get('query') || ''
    }));
  }, [searchParams]);

  useEffect(() => {
    const fetchTrails = async () => {
      const params = new URLSearchParams();
  
      Object.entries(filters).forEach(([key, value]) => {
        if (value !== '' && value !== null && value !== undefined) {
          params.append(key, value);
        }
      });
  
      try {
        const res = await fetch(`/api/trails/all?${params.toString()}`, {
          method: "GET",
          headers: { "Content-Type": "application/json" },
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
  }, [filters]);
  

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  const handleCreateTrail = () => {
    navigate("/trails/new");
  };

  return (
    <Template bannerTitle="All trails" bannerSubtitle="Explore our curated list of hiking trails" >
      <div className="flex-1 bg-[#F3F3EB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex items-center mb-6">
          <h2 className="text-3xl font-bold text-gray-900">
            All Trails
          </h2>
            {user && (
            <button onClick={handleCreateTrail} className="ml-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              Create Trail
            </button>
            )}
        </div>
        <p className="text-lg text-gray-700 mb-4">
        Here you can explore a variety of hiking trails categorized under "All Trails". Whether you're looking for popular spots, nearby adventures, or just want to see all available trails, we've got you covered. Start your journey and discover the beauty of nature!
        </p>

        <TrailFilters filters={filters} onChange={handleFilterChange} />

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