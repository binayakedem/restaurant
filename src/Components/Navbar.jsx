import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { FaUser } from "react-icons/fa";
import { IoReorderThree } from "react-icons/io5";
import { FaCartShopping } from "react-icons/fa6";
import logo from '../assets/body.png'
const Navbar = () => {
    const[toggle, setToggle]=useState(false)
  return (
<>
    <div className='sticky top-0 shadow-md shadow-gray-500 z-50 px-10 py-2 bg-[#e3dfde] '>
        <div className='flex flex-col md:flex-row justify-between md:justify-between lg:justify-between  font-briem text-green-600'> 
            <div className='flex flex-row justify-between items-center  '>
                <div className='h-10 w-auto overflow-hidden'>
                <img className='w-full h-full object-cover cursor-grab hover:scale-110 duration-300 ease-in-out ' src={logo} alt="mylogo" />
                </div>
                <div>
                <p className='md:hidden'><IoReorderThree  onClick={()=>setToggle(!toggle)}/></p>
                </div>
            </div>
            <div className={`flex font-semibold flex-col md:flex-row justify-between items-start gap-2 md:gap-6 ${toggle?'hidden':''} `}>
                <p className='cursor-pointer hover:text-green-500'><Link to="/">Home</Link></p>
                <p className='cursor-pointer hover:text-green-500'><Link to="/contact">Contact</Link></p>
                <p className='cursor-pointer hover:text-green-500'><Link to="/about">About</Link></p>
                <p className='cursor-pointer hover:text-green-500'><Link to="/help">Help</Link></p>
                <p className='cursor-pointer hover:text-green-500' ><Link to="/myorders">My Orders</Link></p>
            </div>
            <div className='flex flex-col md:flex-row  gap-4 mt-4 md:gap-20 items-start text-lg'>
                <Link to="/cart">
            <FaCartShopping className='cursor-pointer hover:text-green-500'/>
                </Link>
                {
                    !toggle?<Link to="/profile"><FaUser className='cursor-pointer hover:text-green-500'/></Link>:''
                }
            </div>
        </div>
      

    </div>   
</>
  )
}

export default Navbar