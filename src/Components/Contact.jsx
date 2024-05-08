import React from 'react'

const Contact = () => {
  return (
    <div className=''>
        <div className=' grid grid-cols-1 md:grid-cols-2'>
        <div className='bg-green-50 shadow-md'>
            <div>
                    <h1 className='text-center text-green-600 font-bold md:text-xl font-briem my-2 md:my20'>Let's connected and talk</h1>
            </div>
            <div><p className='text-center my-3'>Feel free to message us</p></div>
            <div className='flex flex-col justify-center items-center gap-2 md:gap-4'>
                <input className='border rounded-lg w-full py-2 md:w-2/4' type="text" placeholder='Enter your name'/>
                <input className='border rounded-lg w-full py-2 md:w-2/4'  type="text" placeholder='Enter your email'/>
                <input className='border rounded-lg w-full py-2 h-20 md:w-2/4'  type="textarea" placeholder='Enter your message here'/>
                <button className='font-briem font-semibold  w-1/4 p-3 rounded-lg bg-green-600 hover:bg-green-500 text-white cursor-pointer'>Send</button>
            </div>
        </div>
        <div><img src="https://freepngimg.com/download/web_design/44625-5-calling-picture-free-png-hq.png" alt="image" /></div>
        </div>
    </div>
  )
}

export default Contact