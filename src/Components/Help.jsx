import React, { useRef } from "react";
import video from '../assets/videos.mp4'
import insta from '../assets/insta.mp4'
import tea from '../assets/tea.mp4'
const Help = () => {
    const videoRef = useRef(null);

    const playVideo = () => {
      if (videoRef.current) {
        videoRef.current.play();
      }
    };
  return (
    <div className=' my-2 mx-2 md:mx-10'>
        <div className='font-briem  my-2 md:my-4 lg:my-10'>
                <h1 className='font-bold text-lg underline text-green-600'>By instruction</h1>
                <p>1.Open Browser</p>
                <p>2.Search Kakuz Kitchen</p>
                <p>3.Click on the kakuzkitchen domain website</p>
                <p>4.See the categoriwise food items</p>
                <p>5.Search Food or select through category</p>
                <p>6.Click on Add to cart</p>
                <p>7.Confirm  the your order on cart</p>
                <p>8.Enjoy</p>
            </div>
            <h1 className=" text-center font-briem font-bold my-1 text-green-600 underline">Or just click facebook , instagram or youtube</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-4'>
            <a href="https://www.youtube.com/" target="_blank">
            <div className='shadow-md shadow-gray-800 p-2 rounded-md'>
                <div className='relative cursor-pointer'>
                    <div className='overflow-hidden'><video  autoPlay muted loop >
          <source src={tea} type="video/mp4" />
        </video></div>
                    <div className='absolute inset-0 text-center text-white bg-gray-800/70 opacity-0 hover:opacity-100 duration-500 ease-in-out'>
                        <p className='font-briem font-bold'>BY Watching Youtube Video</p>
                    </div>

                </div>
            </div>
            </a>
            <a href="https://www.facebook.com/" target="_blank">
            <div className='shadow-md shadow-gray-800 p-2 rounded-md'>
                <div className='relative cursor-pointer'>
                    <div className='overflow-hidden'><video  autoPlay muted loop >
          <source src={insta} type="video/mp4" />
        </video></div>
                    <div className='absolute inset-0 text-center text-white bg-gray-800/70 opacity-0 hover:opacity-100 duration-500 ease-in-out'>
                        <p className='font-briem font-bold'>BY Watching Facebook Video</p>
                    </div>

                </div>
           
            </div>
            </a>
            <a href="https://www.instagram.com/" target="_blank">
            <div className='shadow-md shadow-gray-800 p-2 rounded-md'>
                <div className='relative cursor-pointer'>
                    <div className='overflow-hidden'> <video  autoPlay muted loop >
          <source src={video} type="video/mp4" />
        </video></div>
                    <div className='absolute inset-0 text-center text-white bg-gray-800/70 opacity-0 hover:opacity-100 duration-500 ease-in-out'>
                        <p className='font-briem font-bold'>BY Watching Instagram Video</p>
                    </div>
                </div>
        </div>
        </a>
        </div>
    </div>
  )
}

export default Help