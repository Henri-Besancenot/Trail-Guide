import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ModalImage from "react-modal-image";

import Template from '../components/Template';
import GPXMap from '../components/GPXMap';
import { useAuthStore } from "../store/authStore"

import hiking from '../assets/hiking.png';
import increase from '../assets/increase2.svg';
import clock from '../assets/clock.svg';

function Trail() {
  const { id } = useParams();
  const [trail, setTrail] = useState(null);
  const user = useAuthStore((state) => state.user);
  const setUser = useAuthStore((state) => state.setUser);
  const navigate = useNavigate();

  const handleFavorite = async (toAdd) => {
    try {
      const response = await fetch(`/api/users/trailsSet`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          _id: user._id,
          set: 'favorite',
          trail: trail._id,
          toAdd: toAdd
        })
      });
  
      const data = await response.json();

      if (response.ok) {
        setUser(data.data);
      } else {
        console.error(data.message || "Failed to update favorites");
      }
    } catch (err) {
      console.error("Error updating favorites:", err);
    }
  };

  const handleDelete = async () => {
    try {
      // Delete the trail from the created one of the user
      const updatedUser = await fetch(`/api/users/trailsSet`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          _id: user._id,
          set: 'created',
          trail: trail._id,
          toAdd: false
        })
      });
  
      const updatedUserData = await updatedUser.json();

      if (updatedUser.ok) {
        setUser(updatedUserData.data);
      } else {
        console.error(updatedUserData.message || "Failed to update created trails");
      }

      // Delete the trail itself
      const response = await fetch(`/api/trails/all/${trail._id}`, {
        method: "DELETE"
      });
  
      const data = await response.json();

      if (response.ok) {
        navigate("/trails/all");
      } else {
        console.error(data.message || "Failed to delete trail");
      }
    } catch (err) {
      console.error("Error deleting trail:", err);
    }
  };

  useEffect(() => {
    const fetchTrail = async () => {
      try {
        const response = await fetch(`/api/trails/all/${id}`, {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        });
  
        const data = await response.json();

        if (!response.ok) {
          console.error(data.message || "Error while fetching trail");
          return;
        }
  
        if (data.status && data.data) {
          setTrail(data.data);
        }
      } catch (error) {
        console.error("Server error:", error);
      }
    };
  
    fetchTrail();
  }, [id]);  

  if (!trail) return <p className="text-center mt-10">Loading trail...</p>;

  const { title, difficulty, distance, duration, elevation_gain, description, images, gpx_file } = trail;
  return (
    <Template bannerTitle={title} bannerSubtitle={`Difficulty: ${difficulty}`}>
      <div className="w-full px-4 py-6">
        <div className="bg-[#E4DEDE] w-full min-h-64 p-6 rounded-xl">

          <div className="grid grid-cols-3">
          {/* /* Your existing details… */}
            <div className= "col-span-2 pr-6">
              <div className="flex items-center mb-4">
              <h2 className="text-2xl font-bold">{title}</h2>
              { user && 
              <div className="cursor-pointer" onClick={ () => { handleFavorite(!user.favorite.includes(trail._id));}}>
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  fill= {user.favorite.includes(trail._id) ? "currentColor" : "none"} 
                  viewBox="0 0 24 24" 
                  strokeWidth={1.5} 
                  stroke="currentColor" 
                  className="w-8 h-8 ml-2  text-yellow-500 hover:fill-yellow-500 transition-colors duration-200">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.545.044.77.77.326 1.163l-4.304 3.86a.562.562 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.304-3.86a.562.562 0 01.326-1.163l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                </svg>
              </div> }
              {user && user?.created?.includes(trail._id) && <button onClick={handleDelete} className="block mx-auto mt-6 bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                Delete Trail
              </button>}
              </div>
              <h2 className="text-gray-500 italic text-mg mt-0 mb-4">Trail uploaded by {trail.user.name}</h2>
              
              <p className="text-gray-700 mb-4 text-lg py-2">{description}</p>

                  {/* Information and data */}
              <div className="bg-[#ECEDE0] w-full min-h-10 rounded-xl mx-auto">
                <h3 className="text-xl font-semibold mb-4 mt-4 py-2 px-4">Details</h3>
                <div className= "grid grid-cols-2 gap-4 px-4 pb-4">

                  <div className="flex items-center">
                    <img src={hiking} alt="distance" className="w-10 h-10 bg-white p-2 rounded-full" /> 
                    <p className="ml-2">{distance / 1000} km</p>
                  </div>

                  <div className="flex items-center">
                    <img src={clock} alt="duration" className="w-10 h-10 bg-white p-2 rounded-full" />
                    <p className="ml-2">{Math.floor(trail.duration / 60)}h{duration % 60}min</p>
                  </div>

                  <div className="flex items-center">
                    <img src={increase} alt="elevation" className="w-10 h-10 bg-white p-2 rounded-full" />
                    <p className="ml-2">{elevation_gain} m</p>
                  </div>

                  {/* <p><strong>Difficulty:</strong> {trail.difficulty}</p> */}
                </div>
              </div>

              {/* Images */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-6">
                {images && images.map((img, idx) => (
                  <ModalImage
                    key={idx}
                    small={img}
                    large={img}
                    alt={`Trail Image ${idx + 1}`}
                    className="w-full h-64 object-cover rounded-lg shadow transform hover:scale-105 transition-transform duration-300 cursor-pointer"
                  />
                ))}
              </div>
            </div>
            

            {/* Maps here */}
            
            <div className="mt-6 flex flex-col items-center col-span-1">

              <GPXMap gpxUrl={gpx_file} />

              {/* Download */}
              <div className="mt-4">
                {gpx_file && (
                  <a
                    href={gpx_file}
                    download
                    className="inline-block bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
                  >
                    Download GPX File
                  </a>
                )}
              </div>
            </div>
          </div>

        </div>
      </div>
    </Template>
  );
}

export default Trail;
