import { Button } from 'bootstrap';
import React from 'react';

const TrailFilters = ({ filters, onChange }) => {
  const [localQuery, setLocalQuery] = React.useState(filters.query || '');
  const [localDifficulty, setLocalDifficulty] = React.useState(filters.difficulty || '');
  const [localMinDistance, setLocalMinDistance] = React.useState(filters.minDistance || '');
  const [localMaxDistance, setLocalMaxDistance] = React.useState(filters.maxDistance || '');
  const [localDuration, setLocalDuration] = React.useState(filters.duration || '');
  const [localElevationGain, setLocalElevationGain] = React.useState(filters.elevation_gain || '');

  React.useEffect(() => {
    // keep local controls in sync when parent filters change externally
    setLocalDifficulty(filters.difficulty || '');
    setLocalMinDistance(filters.minDistance || '');
    setLocalMaxDistance(filters.maxDistance || '');
    setLocalDuration(filters.duration || '');
    setLocalElevationGain(filters.elevation_gain || '');
  }, [
    filters.difficulty,
    filters.minDistance,
    filters.maxDistance,
    filters.duration,
    filters.elevation_gain,
  ]);

  const handleSearchClick = () => {
    // propagate all local values to parent only when Search is clicked
    onChange({ target: { name: 'query', value: localQuery } });
    onChange({ target: { name: 'difficulty', value: localDifficulty } });
    onChange({ target: { name: 'minDistance', value: localMinDistance } });
    onChange({ target: { name: 'maxDistance', value: localMaxDistance } });
    onChange({ target: { name: 'duration', value: localDuration } });
    onChange({ target: { name: 'elevation_gain', value: localElevationGain } });
  };

  return (
    <div className="bg-[#3C564C] p-6 rounded-lg shadow mb-8 space-y-4">
      <h3 className="text-xl font-semibold mb-2 text-white ">Filters</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 ">

        {/* Search word (local until Search clicked) */}
        <input
          type="text"
          name="query"
          placeholder="Search by title or description"
          value={localQuery}
          onChange={(e) => setLocalQuery(e.target.value)}
          className="p-2 border rounded w-full bg-white text-black"
        />

        {/* Difficulty */}
        <select
          name="difficulty"
          value={localDifficulty}
          onChange={(e) => setLocalDifficulty(e.target.value)}
          className="p-2 border rounded w-full bg-white text-black"
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
          value={localMinDistance}
          onChange={(e) => setLocalMinDistance(e.target.value)}
          className="p-2 border rounded w-full bg-white text-black"
        />

        {/* Max Distance */}
        <input
          type="number"
          name="maxDistance"
          placeholder="Max distance (km)"
          value={localMaxDistance}
          onChange={(e) => setLocalMaxDistance(e.target.value)}
          className="p-2 border rounded w-full bg-white text-black"
        />

        {/* Duration */}
        <input
          type="number"
          name="duration"
          placeholder="Max duration (minutes)"
          value={localDuration}
          onChange={(e) => setLocalDuration(e.target.value)}
          className="p-2 border rounded w-full bg-white text-black"
        />

        {/* Elevation Gain */}
        <input
          type="number"
          name="elevation_gain"
          placeholder="Max elevation gain (m)"
          value={localElevationGain}
          onChange={(e) => setLocalElevationGain(e.target.value)}
          className="p-2 border rounded w-full bg-white text-black"
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
