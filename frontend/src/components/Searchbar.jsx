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
            style={{
                display: 'flex',
                alignItems: 'center',
                width: '33vw',
                maxWidth: '100%',
                background: '#fff',
                borderRadius: '20px',
                padding: '2px 8px'
            }}
        >
            <input
                type="text"
                value={query}
                onChange={handleInputChange}
                placeholder="Search..."
                style={{
                    flex: 1,
                    padding: '4px 12px',
                    fontSize: '14px',
                    height: '28px',
                    border: 'none',
                    outline: 'none',
                    borderRadius: '20px',
                    background: 'transparent',
                }}
            />
            <button
                type="submit"
                style={{
                    height: '28px',
                    borderRadius: '50%',
                    border: 'none',
                    background: '#eee',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    marginLeft: '4px',
                }}
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