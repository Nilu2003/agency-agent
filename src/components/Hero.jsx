import React from 'react'
import grupProfile from "../assets/group_profile.png"
import HeroPhoto from "../assets/hero_img.png"
import { coinbase, google, rakuten, microsoft, airbnb, zoom } from '../assets/logo'

const Hero = () => {
    return (

        <div className='flex flex-col justify-center items-center m-10 p-20'>
            <div className="">
                <button className='flex flex-row border rounded-full  w-57.5 h-9.5 text-[12px] justify-center items-center' >
                    <img src={grupProfile} className='w-20 h-5.75 m-1 ' />
                    Trusted by 10k+ people
                </button>
            </div>
            <div className='text-7xl w-232.5 h-45 m-5'>
                <p>Turning imagination into</p>
                <p className='flex justify-center gap-5'><span className='text-[#5044E5]'>digital</span> impact.</p>
            </div>

            <div className='w-118.5 h-24.5 '>
                <p className='text-[18px]'>Creating meaningful connections and turning big ideas into interactive digital experiences.</p>
            </div>

            <div className='w-271.25 h-149.25'>
                <img src={HeroPhoto} className='radius' />
            </div>
            <div className='mt-20'>
                tursting leading compnies
            </div>
            <div className='flex flex-row  h-6.25 gap-20 mt-10'>
                <img src={coinbase} alt="" />
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