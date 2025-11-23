import {useState, useEffect} from 'react';

const TrailFilters = ({ filters, onChange }) => {
  const [localFilters, setLocalFilters] = useState(filters);

  useEffect(() => {
    setLocalFilters(filters);
  }, [filters]);

  const handleInputChange = (e) => {
    setLocalFilters({ ...localFilters, [e.target.name]: e.target.value })
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSearchClick();
    }
  }

  const handleSearchClick = () => {
    onChange(localFilters);
  };

  return (
    <div className="bg-[#3C564C] p-6 rounded-2xl shadow mb-8 space-y-4">
      <h3 className="text-xl font-semibold mb-2 text-white">Filters</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">

        {/* Search Title or Description*/}
        <input
          type="text"
          name="query"
          placeholder="Search by title or description"
          value={localFilters.query || ''}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          className="p-2 border rounded-lg w-full bg-white text-black"
        />

        {/* Difficulty */}
        <select
          name="difficulty"
          value={localFilters.difficulty || ''}
          onChange={handleInputChange}
          className="p-2 border rounded-lg w-full bg-white text-black"
        >
          <option value="">All difficulties</option>
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
          <option value="expert">Expert</option>
        </select>

        {/* Min Distance */}
        <input
          type="number"
          name="minDistance"
          placeholder="Min distance (km)"
          value={localFilters.minDistance || ''}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          className="p-2 border rounded-lg w-full bg-white text-black"

        />

        {/* Max Distance */}
        <input
          type="number"
          name="maxDistance"
          placeholder="Max distance (km)"
          value={localFilters.maxDistance}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          className="p-2 border rounded-lg w-full bg-white text-black"
        />

        {/* Duration */}
        <input
          type="number"
          name="duration"
          placeholder="Max duration (minutes)"
          value={localFilters.duration}
          onChange={handleInputChange}
          className="p-2 border rounded-lg w-full bg-white text-black"
          onKeyDown={handleKeyDown}
        />

        {/* Elevation Gain */}
        <input
          type="number"
          name="elevation_gain"
          placeholder="Max elevation gain (m)"
          value={localFilters.elevation_gain}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          className="p-2 border rounded-lg w-full bg-white text-black"
        /> 

      </div>
      <div className="flex justify-end">
        <button 
          type="button"
          name="search"
          onClick={handleSearchClick}
          className="bg-[#6DAE8B] w-1/5 text-white p-2 rounded hover:bg-[#5C9A76] transition"
        >
          Search
        </button>
      
        <select
            name="OrderBy"
            className="p-2 border rounded bg-white text-black px-4 ml-4"
        >
          <option value="o_proximity">Proximity</option>
          <option value="o_diff">Difficulty</option>
          <option value="o_dist">Distance</option>
          <option value="o_duration">Duration</option>
          <option value="o_elevation_gain">Elevation Gain</option>
        </select>
      </div>
    </div>
  );
};

export default TrailFilters;
