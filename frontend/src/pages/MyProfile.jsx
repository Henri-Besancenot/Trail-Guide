import { useState } from "react";
import Carousel from '@/components/Carousel';
import { useNavigate } from "react-router-dom";

import { useAuthStore } from "../store/authStore"
import Template from '../components/Template'

function MyProfile() {
  const user = useAuthStore((state) => state.user);
  const setUser = useAuthStore((state) => state.setUser);
  const logout = useAuthStore((state) => state.logout);
  const navigate = useNavigate();
  const [editing, setEditing] = useState(false);
  const [tempUsername, setTempUsername] = useState(user.name);
  const [tempEmail, setTempEmail] = useState(user.email);
  const [message, setMessage] = useState("");

  const handleSave = async () => {
    const response = await fetch(`/api/users/${user._id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        _id: user._id,
        name: tempUsername,
        email: tempEmail
      })
    });

    const data = await response.json();

    if (response.ok) {
      setEditing(false);
      setMessage("");
      setUser(data.data);
    } else {
      setMessage(data.message || "Error updating user");
    }
  };

  const handleDiscard = () => {
    setTempUsername(user.name);
    setTempEmail(user.email);
    setEditing(false);
    setMessage("");
  };

  const handleDelete = async () => {
    const response = await fetch(`/api/users/${user._id}`, {
      method: "DELETE"
    });

    if (response.ok) {
      logout();
      navigate("/");
    }
  };

  return (
    <Template bannerTitle={""} bannerSubtitle="Member of Trail Guide">
      <div className="flex-1 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          {/* Information section about the user */}
          <div className="bg-gray-50 shadow overflow-hidden sm:rounded-lg mb-10">
            <div className="px-4 py-5 sm:px-6 flex justify-between items-center">
              <div>
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  Profile Information
                </h3>
                <p className="mt-1 max-w-2xl text-sm text-gray-500">
                  Personal details and application.
                </p>
              </div>
              <button onClick={() => setEditing(true)} className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded">
                Edit Profile
              </button>
            </div>
            <div className="border-t border-gray-200">
              <dl>
                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">
                    Full name
                  </dt>
                  {!editing ? (
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {user?.name || "Guest User"}
                  </dd>
                  ) : (
                    <input
                      type="text"
                      value={tempUsername}
                      onChange={(e) => setTempUsername(e.target.value)}
                      className="w-full border rounded px-3 py-2"
                    />
                  )}
                </div>
                <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">
                    Email address
                  </dt>
                  {!editing ? (
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {user?.email || "guest@example.com"}
                  </dd>
                  ) : (
                    <input
                      type="email"
                      value={tempEmail}
                      onChange={(e) => setTempEmail(e.target.value)}
                      className="w-full border rounded px-3 py-2"
                    />
                  )}
                </div>
                {editing? (<div className="flex justify-end gap-2">
                    <button onClick={handleDiscard} className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400">
                      Discard
                    </button>
                    <button onClick={handleSave} className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
                      Save
                    </button>
                  </div>) : (null)}
              </dl>
            </div>
            {message && <p className="mt-3 text-center text-sm text-red-700">{message}</p>}
          </div>

          {/* Section about the hike that the user has completed or is interested in */}
          <Carousel title="Favorite Hikes" hikeIds= {user.favorite} />


          {/* Section about the hikes that the user created */}
          <Carousel title="Created Hikes" hikeIds= {user.created} addButton={true} />
          
          <button onClick={handleDelete} className="block mx-auto mt-6 bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
              Delete Profile
          </button>
        </div>
      </div>
    </Template>
  );
}

export default MyProfile;