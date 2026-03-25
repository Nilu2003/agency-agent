import React, { useState } from 'react'
import darkphoto from "../assets/moon_icon.svg"
import logo from "../assets/logo.svg"



const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <div className='flex justify-around  fixed top-0 left-0 w-full z-50  bg-white/50 p-5'>
      <div className='text-2xl font-bold text-blue-700 '>
        <img src={logo} alt="logo" className='w-28 md:w-32' />
      </div>
      <div className='hidden md:flex flex-row gap-5'>
        <p className='cursor-pointer hover:underline decoration-blue-600'>Home</p>
        <p className='cursor-pointer hover:underline decoration-blue-600'>Services</p>
        <p className='cursor-pointer hover:underline decoration-blue-600'>Our work</p>
        <p className='cursor-pointer hover:underline decoration-blue-600'>testimonial</p>
      </div>
      <div className='hidden md:flex flex-row gap-4'>
        <button className='border border-black w-10 h-10 rounded-full flex justify-center items-center'>
          <img className=' w-4.25 h-4.25  ' src={darkphoto} alt="" />
        </button>
        <button className='border border-blue-700 rounded-full bg-blue-700 w-25 text-white'>Connect</button>
      </div>
      <div className='md:hidden'>
        <button onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </button>
      </div>

      {menuOpen && (
        <div className='fixed top-0 right-0 h-full w-1/3 bg-white shadow-lg flex flex-col gap-6 p-6 md:hidden '>
          <button
            className='self-end text-2xl'
            onClick={() => setMenuOpen(false)}
          >
            ✕
          </button>

          <p>Home</p>
          <p>Services</p>
          <p>Our Work</p>
          <p>Testimonial</p>

          <button className='mt-4 border border-blue-700 rounded-full bg-blue-700 px-6 py-2 text-white'>
            Connect
          </button>
        </div>
      )}

    </div>
  )
}

export default Navbar