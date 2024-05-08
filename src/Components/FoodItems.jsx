import React from 'react';
import myjson from './myjson.json';
import { FaPlus } from "react-icons/fa6";
import { MdFavoriteBorder } from "react-icons/md";
const FoodItems = () => {
  const foodData=myjson.foodData
  return (
    <div className="p-3 md:p-8 bg-gray-300 overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {foodData.map((data, index) => (
          <div
            key={index}
            className="flex flex-col p-2 bg-white rounded-lg shadow-lg shadow-black gap-1" data-aos="fade-out" data-aos-duration="2000" 
          >
            <div className="overflow-hidden flex items-center justify-center">
              <img
                className="h-full w-auto object-cover hover:scale-125 animate-all duration-500 ease-in-out cursor-grab"
                src={data.image}
                alt={data.name} // Descriptive alt text for accessibility
              />
            </div>
            <div className="font-briem text-green-600">
              <h2>{data.name}</h2>
            </div>
            <div>
              <p>{data.description}</p>
            </div>
            <div className='font-briem text-green-600 font-semibold'>
                <p> Rs.{data.price}</p>
            </div>
            <div className="flex flex-row justify-between items-center md:px-4 py-1">
            <MdFavoriteBorder className='cursor-pointer hover:scale-125  duration-500'/>
              <FaPlus className='cursor-pointer hover:scale-125 animate-shake-x duration-500 '/>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FoodItems;

