import React from 'react';
import { assets } from '../assets/mafiaso_assets/assets';

const Hero = () => {
  return (
    <div className="flex flex-col sm:flex-row border border-gray-400 bg-gray-50">
      {/* Hero Left Side */}
      <div className="w-full sm:w-1/2 flex flex-col items-center justify-center py-10 sm:py-0 px-6 sm:px-12">
        <div className="text-center sm:text-left">
          <div className="flex items-center justify-center sm:justify-start gap-2 mb-4">
            <div className="w-12 h-[2px] bg-[#414141]"></div>
            <p className="font-medium text-sm sm:text-base text-[#414141]">OUR BESTSELLERS</p>
          </div>
          <h1 className="prata-regular text-3xl sm:text-4xl font-semibold text-[#333333] mb-4">Latest Arrivals</h1>
          <p className="text-sm sm:text-base text-[#555555]">Shop Now</p>
        </div>
      </div>
      
      {/* Hero Right Side */}
      <div className="w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0 bg-gray-200 sm:bg-white px-6 sm:px-12">
        {/* Add Image or Call to Action */}
        <div className="flex justify-center items-center max-w-[320px] sm:max-w-[400px]">
          <img src={assets.hero_img} alt="Bestsellers" className="w-full h-auto object-cover rounded-lg shadow-lg" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
