import React from 'react'
import grupProfile from "../assets/group_profile.png"
import HeroPhoto from "../assets/hero_img.png"
import { coinbase, google, rakuten, microsoft, airbnb, zoom } from '../assets/logo'

const Hero = () => {
    return (

        <div className='flex flex-col justify-center items-center m-10 p-20'>
            <div className="">
                <button className='flex flex-row border rounded-full w-40 md:w-57.5 h-7 md:h-9.5 text-[8px] md:text-[12px] justify-center items-center' >
                    <img src={grupProfile} className='w-10 md:w-20 h-4 md:h-5.75 m-1 ' />
                    Trusted by 10k+ people
                </button>
            </div>
            <div className=' text-3xl md:text-5xl lg:text-7xl  w-90 md:w-100 lg:w-232.5 h-25 md:h-35 lg:h-45 m-5'>
                <p>Turning imagination into</p>
                <p className='flex md:justify-center gap-2 md:gap-5'><span className='text-[#5044E5]'>digital</span> impact.</p>
            </div>

            <div className='w-50 md:w-80 lg:w-118.5 h-14 md:h-17 lg:h-24.5 '>
                <p className='text-[10px] md:text-[14px] lg:text-[18px] text-center'>Creating meaningful connections and turning big ideas into interactive digital experiences.</p>
            </div>

            <div className='w-150 md:w-200 lg:w-271.25 h-70 md:h-100 lg:h-149.25'>
                <img src={HeroPhoto} className='radius' />
            </div>
            <div className='mt-10 md:mt-20'>
                tursting leading compnies
            </div>
            <div className='flex flex-col md:flex-row h-3 md:h-6.25 gap-5 md:gap-20 mt-4 md:mt-10'>
                <img src={coinbase} alt="" className=''/>
                <img src={google} alt="" />
                <img src={rakuten} alt="" />
                <img src={microsoft} alt="" />
                <img src={airbnb} alt="" />
                <img src={zoom} alt="" />
            </div>
        </div>



    )
}

export default Hero