import React from 'react'
import ServiceCard from './ServiceCard'
import {ads_icon,content_icon,markting_icon,social_icon} from "../assets/card/card.js"


const Services = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
        <div className='text-[20px] md:text-[36px] font-light md:font-semibold leading-12 md:leading-22'>
            How can we help?
        </div>
        <div className='text-[10px] md:text-[16px] font-light md:font-medium leading-none w-90 md:w-127.25 h-10 md:h-24.5 text-center '>
           From strategy to execution, we craft digital solutions that move your business forward.
        </div >
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
           <ServiceCard logo={ads_icon} tittle="Advertising" description="We turn bold ideas into powerful digital solutions that connect, engage..."/>
           <ServiceCard logo={markting_icon} tittle="Content marketing" description="We turn bold ideas into powerful digital solutions that connect, engage and..."/>
           <ServiceCard logo={content_icon} tittle="Content writing" description="We turn bold ideas into powerful digital solutions that connect, engage..."/>
           <ServiceCard logo={social_icon} tittle="Social media" description="We turn bold ideas into powerful digital solutions that connect, engage..."/>
        </div>        
    </div>
  )
}

export default Services