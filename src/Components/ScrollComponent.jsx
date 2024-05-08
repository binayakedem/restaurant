import React, { useState, useEffect } from 'react';
import { FaArrowCircleUp } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
const ScrollComponent = () => {
    const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsVisible(scrollY > window.innerHeight / 2); 
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Smooth scrolling
  };
  return (
    <div>
         <button
      className={`fixed bottom-0 right-4 z-50 p-2  text-white bg-green-500 hover:bg-green-600 rounded-full opacity-0 transition duration-300 ease-in-out ${
        isVisible ? 'opacity-100' : ''
      }`}
      onClick={handleClick}
    >
      <FaArrowCircleUp />
    </button>
    <button
      className={`fixed bottom-0 right-20 z-50 p-2  text-white bg-green-500 hover:bg-green-600 rounded-full opacity-0 transition duration-300 ease-in-out ${
        isVisible ? 'opacity-100' : ''
      }`}
    >
    <a href="/cart">
<FaCartShopping/>
    </a>
    </button>
    <button
      className={`fixed bottom-0 left-4 z-50 p-2  text-white bg-green-500 hover:bg-green-600 rounded-full opacity-0 transition duration-300 ease-in-out ${
        isVisible ? 'opacity-100' : ''
      }`}
    >
    <a href="/myorders">My Orders

    </a>
    </button>
    

    </div>
  )
}

export default ScrollComponent