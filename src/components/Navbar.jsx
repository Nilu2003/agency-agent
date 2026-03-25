import React from 'react'
import darkphoto from "../assets/moon_icon.svg"
import logo from "../assets/logo.svg"


const Navbar = () => {
  return (
    <div className='flex justify-around  fixed top-0 left-0 w-full z-50  bg-white/50 p-5'>
        <div className='text-2xl font-bold text-blue-700 '>
          <img src={logo} alt="" />
        </div>
        <div className='flex flex-row gap-5'>
            <p className='cursor-pointer hover:underline decoration-blue-600'>Home</p>
            <p className='cursor-pointer hover:underline decoration-blue-600'>Services</p>
            <p className='cursor-pointer hover:underline decoration-blue-600'>Our work</p>
            <p className='cursor-pointer hover:underline decoration-blue-600'>testimonial</p>
        </div>
        <div className='flex flex-row gap-4'>
            <button className='border border-black w-10 h-10 rounded-full flex justify-center items-center'>
            <img className=' w-4.25 h-4.25  ' src={darkphoto} alt="" />
            </button>
            <button className='border border-blue-700 rounded-full bg-blue-700 w-25 text-white'>Connect</button>
        </div>
    </div>
  )
}

export default Navbar