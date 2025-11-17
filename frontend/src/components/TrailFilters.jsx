import React from 'react';

const TrailFilters = ({ filters, onChange }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow mb-8 space-y-4">
      <h3 className="text-xl font-semibold mb-2">Filters</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">

        {/* Search word */}
        <input
          type="text"
          name="query"
          placeholder="Search by title or description"
          value={filters.query}
          onChange={onChange}
          className="p-2 border rounded w-full"
        />

        {/* Difficulty */}
        <select
          name="difficulty"
          value={filters.difficulty}
          onChange={onChange}
          className="p-2 border rounded w-full"
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
          placeholder="Min distance (m)"
          value={filters.minDistance}
          onChange={onChange}
          className="p-2 border rounded w-full"
        />

        {/* Max Distance */}
        <input
          type="number"
          name="maxDistance"
          placeholder="Max distance (m)"
          value={filters.maxDistance}
          onChange={onChange}
          className="p-2 border rounded w-full"
        />

        {/* Duration */}
        <input
          type="number"
          name="duration"
          placeholder="Max duration (minutes)"
          value={filters.duration}
          onChange={onChange}
          className="p-2 border rounded w-full"
        />

        {/* Elevation Gain */}
        <input
          type="number"
          name="elevation_gain"
          placeholder="Max elevation gain (m)"
          value={filters.elevation_gain}
          onChange={onChange}
          className="p-2 border rounded w-full"
        />

      </div>
    </div>
  );
};

export default TrailFilters;
