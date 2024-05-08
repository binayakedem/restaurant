import React from 'react'
import { Link } from 'react-router-dom'
import { FaYoutube , FaInstagram ,FaFacebook } from "react-icons/fa";
const Footer = () => {
  return (
    <div className=' p-4 md:p-8 bg-white text-gray-900 '>
      <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
        <div className='flex flex-col justify-center'>
          <div>
            <h1  className=' font-briem text-green-600 font-bold text-lg mb-2'>Links</h1>
          </div>
          <div className='font-briem'>
            <p className='hover:font-briem hover:text-green-600'><Link to="/">Home</Link></p>
            <p className='hover:text-green-600'><Link to="/contact">Contact</Link></p>
            <p className='hover:text-green-600'><Link to="/about">About</Link></p>
            <p className='hover:text-green-600'><Link to="/help">Help</Link></p>
          </div>
        </div>

        <div>
          <div  className=' font-briem text-green-600 font-bold text-lg mb-2'>
            <h1>Get Help </h1>
          </div>
          <div  className='font-briem'>
            <p>FAQ ?</p>
            <a href="https://www.youtube.com/" target="_blank">
            <div className='flex flex-row justify-start items-center gap-2'>
            <FaYoutube color='red'/>
            <p>KakuzKitchen</p>
            </div>
            </a>
            <a href="https://www.instagram.com/" target="_blank">
              
            <div className='flex flex-row justify-start items-center gap-2'>
            <FaInstagram color='red'/>
            <p>KakuzKitchen</p>
            </div>
            </a>
            <a href="https://www.facebook.com/" target="_blank">

            <div className='flex flex-row justify-start items-center gap-2'>
            <FaFacebook color='blue'/>
            <p>KakuzKitchen</p>
            </div>
            </a>
          </div>
        </div>

        <div className='my-3'> 
          <div className=' font-briem text-green-600 font-bold text-lg mb-2'>
            <h1>Contacts</h1>
          </div>
          <div className='font-semibold '>
            <p><span className='font-briem text-green-600 mr-2'>Phone:</span><span>9843555471</span></p>
            <p><span className='font-briem text-green-600 mr-2' >Phone:</span><span>9803588079</span></p>
            <p ><span className='font-briem text-green-600 mr-2'>Email:</span><span>iambinayalimbu@gmail.com</span></p>
            <p ><span className='font-briem text-green-600 mr-2'>Email:</span><span>binayalimbu300@gmail.com</span></p>
          </div>

        </div>

      </div>
      <div className='flex flex-row justify-center items-center mt-3 mb-8 md:mb-0'>
        <p >All right reserved.</p> <span>Created by Binaya Limbu</span>
      </div>
    </div>
  )
}

export default Footer