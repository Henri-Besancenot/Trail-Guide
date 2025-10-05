import { FileX } from 'lucide-react';
import React from 'react';

function Footer() {
    return (
        <footer className="bg-[#8C9C7C]">
            <div className="container mx-auto px-0 py-2">
                <div className="flex flex-row justify-between items-start"> 
                    {/* Logo and Brand Section */}
                    <div className="flex flex-col items-center pt-4">
                        <img 
                            src="assets/logo.png"
                            alt="Trail Guide Logo"
                            className="w-12 h-12 mb-2"
                        />
                        <h3 className="text-xl font-bold">Trail Guide</h3>
                    </div>

                    {/* Right side content */}
                    <div className="flex flex-row justify-between space-x-12">
                        {/* Navigation Links Section */}
                        <div className="flex flex-col items-start pt-4">
                            <h4 className="font-semibold text-base mb-4">Fast Link</h4>
                            <nav className="flex flex-col space-y-2">
                                <a href="#" className="text-sm text-black font-normal hover:text-gray-700 transition-colors">HomePage</a>
                                <a href="#" className="text-sm text-black font-normal hover:text-gray-700 transition-colors">Trails List</a>
                                <a href="#" className="text-sm text-black font-normal hover:text-gray-700 transition-colors">About Us</a>
                            </nav>
                        </div>

                        {/* Contact Section */}
                        <div className="flex flex-col  pt-4">
                            <h4 className="font-semibold text-base mb-4">Contact Us</h4>
                            <p className="text-sm mb-2">Email: contact@trailguide.com</p>
                            <p className="text-sm mb-2">Phone: +XX X XX XX XX XX</p>
                        </div>
                    </div>
                </div>
            </div>            
        </footer>
    );
}

export default Footer;
