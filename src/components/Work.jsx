import React from 'react'
import WorkCard from './WorkCard'

const Work = () => {
  return (
    <div className='flex flex-col justify-center items-center mt-3 gap-5 leading-14 md:leading-17 lg:leading-22'>
        <div className=' text-[25px] md:text-[28px] lg:text-[36px] font-semibold '>
            Our latest work
        </div>
        <div className='text-8px md:text-[10px] lg:text-[16px] font-light md:font-medium leading-none w-127.25 h-15.75 text-center'>
            Browse our portfolio of innovative digital projects that showcase creativity, performance, and results.
        </div>
        <div className='flex flex-row gap-6'>
            <WorkCard/>
            <WorkCard/>
            <WorkCard/>
        </div>
    </div>
  )
}

export default Work