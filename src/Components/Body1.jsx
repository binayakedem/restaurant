import React from 'react';
import bodyimg from '../assets/chef.png'
import leftpic from '../assets/order.png'
const Body1 = () => {
  return (
    <div  className=''>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 bg-[#FEFBF6] overflow-hidden p-3 md:p-8 '>
            <div  >
                <div className='text-lg lg:text-3xl font-bold text-green-600 font-briem mb-4' >
                    <h1 data-aos="fade-right">Nature Your Passion For Food And Life. </h1>
                </div>
                <div className='overflow-hidden ' data-aos="zoom-in" >
                    <img className='object-cover h-full w-auto rounded-lg' src={leftpic} alt="" />
                </div>
                </div> 
            <div className='overflow-hidden'  data-aos="fade-left" >
                <img  className='object-cover h-auto ' src={bodyimg} alt="bodyImg" />
            </div>
        </div>
    </div>


  )
}

export default Body1