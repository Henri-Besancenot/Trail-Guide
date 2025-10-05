import React, { useState } from 'react';

const Searchbar = ({ onSearch }) => {
    const [query, setQuery] = useState('');

    const handleInputChange = (e) => {
        setQuery(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (onSearch) {
            onSearch(query);
        }
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="flex items-center w-[33vw] max-w-full bg-white rounded-full p-[2px] px-2"
        >
            <input
                type="text"
                value={query}
                onChange={handleInputChange}
                placeholder="Search..."
                className="flex-1 px-3 py-1 text-sm h-7 border-none outline-none rounded-full bg-transparent"
            />
            <button
                type="submit"
                className="h-7 w-7 rounded-full border-none bg-gray-100 flex items-center justify-center cursor-pointer ml-1"
                aria-label="Search"
            >
                <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
                    <circle cx="9" cy="9" r="7" stroke="#555" strokeWidth="2"/>
                    <line x1="15" y1="15" x2="19" y2="19" stroke="#555" strokeWidth="2" strokeLinecap="round"/>
                </svg>
            </button>
        </form>
    );
};

export default Searchbar;