import React from 'react'
import banner from '../assets/profile.jpg'
const Profile = () => {
  return (
    <div className=''>
      <div className='h-28 w-full bg-blue-600 '>
      </div>
      <div className='  pt-4 pb-12  border-gray-800 border-t-2 border-b-2 flex flex-row justify-start items-center px-3 md:px-8 gap-2'>
        <div className='border h-32 w-32 md:h-40 md:w-40 shadow-lg shadow-gray-900 overflow-hidden rounded-full'>
          <img className='w-full h-full object-cover' src={banner} alt="profile" />
        </div>
        <div>
          <h1 className='font-briem font-bold text-lg'>Hi, <span className='text-green-600'>Binaya Limbu</span></h1>
          <p>9876789098767</p>
          <p>binayalimbu@gmail.com</p>
          <button className='w-full bg-red-600 text-white font-semibold font-briem my-2 p-1 rounded-md hover:bg-red-500'>Log out</button>
        </div>

      </div>
    </div>
  )
}

export default Profile