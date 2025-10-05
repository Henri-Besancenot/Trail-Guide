import React from 'react';

function Banner({ title = "Welcome to Trail Guide", subtitle = "Discover the best hiking trails for your next adventure" }) {
    return (
        <div className="w-full bg-green-600 py-8 px-4">
            <div className="container mx-auto">
                <div className="flex flex-col items-center justify-center text-center">
                    <h1 className="text-4xl font-bold text-white mb-4">
                        {title}
                    </h1>
                    <p className="text-xl text-white">
                        {subtitle}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Banner;