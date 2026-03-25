import React from 'react'
import workCard from "../assets/workCard/work_ads_analysis.png"

const WorkCard = () => {
  return (
    <div className='flex flex-col '>
        <div className='w-[320px] h-54.25 '>
            <img src={workCard} alt="" />
        </div>
        <div className='text-[16px] font-bold leading-10'>
          Mobile app marketing
        </div>
        <div className='text-[12px] leading-none font-medium w-60 h-11.5'>
            We turn bold ideas into powerful digital solutions that connect...
        </div>
    </div>
  )
}

export default WorkCard