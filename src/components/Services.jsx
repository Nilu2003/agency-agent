import React from 'react'
import ServiceCard from './ServiceCard'
import {ads_icon,content_icon,markting_icon,social_icon} from "../assets/card/card.js"


const Services = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
        <div className='text-[36px] font-semibold leading-22'>
            How can we help?
        </div>
        <div className='text-[16px] font-medium leading-none w-127.25 h-24.5 '>
           <p>From strategy to execution, we craft digital solutions that move </p>
           <p className='flex justify-center'>your business forward.</p>
        </div >
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
           <ServiceCard logo={ads_icon} tittle="Advertising" description="We turn bold ideas into powerful digital solutions that connect, engage..."/>
           <ServiceCard logo={markting_icon} tittle="Content marketing" description="We turn bold ideas into powerful digital solutions that connect, engage and..."/>
           <ServiceCard logo={content_icon} tittle="Content writing" description="We turn bold ideas into powerful digital solutions that connect, engage..."/>
           <ServiceCard logo={social_icon} tittle="Social media" description="We turn bold ideas into powerful digital solutions that connect, engage..."/>
        </div>        
    </div>
  )
}

export default Services