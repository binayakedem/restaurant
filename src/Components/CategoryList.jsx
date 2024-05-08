import React from 'react'
import category from '../assets/body.png'
const CategoryList = () => {
  const data = [
    {
      "category": "Recommended",
      "image": category
    },
    {
      "category": "Popular",
      "image": category
    },
    {
      "category": "Desserts",
      "image": category
    },
    {
      "category": "Drinks",
      "image": category
    },
    {
      "category": "Salads",
      "image": category
    },
    {
      "category": "Soups",
      "image": category
    },
    {
      "category": "Sandwiches",
      "image": category
    },
    {
      "category": "Pasta",
      "image": category
    },
    {
      "category": "Seafood",
      "image":category
    },
    {
      "category": "Vegetarian",
      "image":category
    },
    {
      "category": "Steaks",
      "image": category
    }
  ];
  
  return (
    <div>
      <div className='flex flex-row flex-wrap p-8 bg-gray-300 '>
        <div>
          <div className='text-lg lg:text-3xl font-bold text-green-600 font-briem mb-4'>
        <h1 data-aos="fade-in" data-aos-duration="2000">Our Menus</h1>
          </div>
          <div className='overflow-x-auto'>
          <div className="flex justify-between items-center gap-8 w-[80vw] ">
      {data.map((d, index) => (
        <div key={index} className="flex flex-col justify-center items-center w-full " >  {/* Added min-width for content */}
          <div className="h-16 lg:h-20 overflow-hidden">
            <img className="h-full w-auto object-cover" src={d.image} alt="category" />
          </div>
          <div className="bg-green-600 text-white p-2 rounded-lg cursor-pointer">
            <p>{d.category}</p>
          </div>
        </div>
      ))}
    </div>
      </div>
        </div>
      </div>
    </div>
  )
}

export default CategoryList