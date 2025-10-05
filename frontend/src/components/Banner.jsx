import React from 'react';

function Banner({ title = "Title", subtitle = "Example of banner" }) {
    return (
        <div className="w-full bg-[#8C9C7C] flex items-center py-8 px-4">
            <div className="container mx-auto">
                <div className="flex flex-col text-[#E8EACC]">
                    <h1 className="text-5xl font-bold mb-4">
                        {title}
                    </h1>
                    <p className="text-2xl">
                        {subtitle}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Banner;