import { useState } from "react";

import Template from '../components/Template'
import { useAuthStore } from "../store/authStore"

const CreateTrail = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [distance, setDistance] = useState("");
  const [elevationGain, setElevationGain] = useState("");
  const [difficulty, setDifficulty] = useState("easy");
  const [duration, setDuration] = useState("");
  const [images, setImages] = useState("");
  const [gpxFile, setGpxFile] = useState(null);
  const [message, setMessage] = useState("");
  const user = useAuthStore((state) => state.user);
  const setUser = useAuthStore((state) => state.setUser);

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("description", description);
      formData.append("user", user._id);
      formData.append("distance", distance);
      formData.append("elevation_gain", elevationGain);
      formData.append("difficulty", difficulty);
      formData.append("duration", duration);
      formData.append("images", JSON.stringify(images.split(",").map(img => img.trim())));
  
      if (gpxFile) {
        formData.append("gpx_file", gpxFile);
      }
  
      // Create trail
      const response = await fetch("/api/trails/all", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (response.ok) {
        setMessage("Trail successfully created!");
        setTitle("");
        setDescription("");
        setDistance("");
        setElevationGain("");
        setDifficulty("easy");
        setDuration("");
        setImages("");
        setGpxFile(null);
      } else {
        setMessage(data.message || "Error creating trail");
        return;
      }
  
      // Add trail into created set
      const updatedUser = await fetch('/api/users/trailsSet', {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          _id: user._id,
          trail: data.data._id,
          set: 'created',
          toAdd: true
        })
      });
  
      const updatedUserData = await updatedUser.json();
      if (updatedUser.ok) {
        setUser(updatedUserData.data);
      } else {
        console.error(updatedUserData.message || "Failed to update created trails");
      }
  
    } catch (error) {
      console.error(error);
      setMessage("Server error");
    }
  };
  

  return (
    <Template bannerTitle="New Trail" bannerSubtitle="Create your own trail">
      <div className="flex-1 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">New trail</h2>
            <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-4 border rounded">
            <h2 className="text-xl font-bold mb-4">Create a Trail</h2>

            <div className="mb-3">
                <label className="block mb-1">Title</label>
                <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full border px-2 py-1 rounded"
                required
                />
            </div>

            <div className="mb-3">
                <label className="block mb-1">Description</label>
                <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full border px-2 py-1 rounded"
                required
                />
            </div>

            <div className="mb-3">
                <label className="block mb-1">Distance (meters)</label>
                <input
                type="number"
                value={distance}
                onChange={(e) => setDistance(e.target.value)}
                className="w-full border px-2 py-1 rounded"
                required
                />
            </div>

            <div className="mb-3">
                <label className="block mb-1">Elevation Gain (meters)</label>
                <input
                type="number"
                value={elevationGain}
                onChange={(e) => setElevationGain(e.target.value)}
                className="w-full border px-2 py-1 rounded"
                required
                />
            </div>

            <div className="mb-3">
                <label className="block mb-1">Difficulty</label>
                <select
                value={difficulty}
                onChange={(e) => setDifficulty(e.target.value)}
                className="w-full border px-2 py-1 rounded"
                >
                <option value="easy">Easy</option>
                <option value="medium">Medium</option>
                <option value="hard">Hard</option>
                <option value="expert">Expert</option>
                </select>
            </div>

            <div className="mb-3">
                <label className="block mb-1">Duration (minutes)</label>
                <input
                type="number"
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
                className="w-full border px-2 py-1 rounded"
                required
                />
            </div>

            <div className="mb-3">
                <label className="block mb-1">Images (comma-separated URLs)</label>
                <input
                type="text"
                value={images}
                onChange={(e) => setImages(e.target.value)}
                className="w-full border px-2 py-1 rounded"
                />
            </div>

            <div className="mb-3">
                <label className="block mb-1">GPX File</label>
                <input
                type="file"
                accept=".gpx"
                onChange={(e) => setGpxFile(e.target.files[0])}
                className="w-full border px-2 py-1 rounded"
                />
            </div>

            <button
                type="submit"
                className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600"
            >
                Create Trail
            </button>

            {message && <p className="mt-3 text-center text-sm text-gray-700">{message}</p>}
            </form>
        </div>
      </div>
    </Template>
  );
};

export default CreateTrail;
