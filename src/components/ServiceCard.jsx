import React from 'react'


const ServiceCard = ({logo,tittle,description}) => {
  return (
    <div className='w-121 h-38 bg-white shadow-md flex flex-row justify-center items-center gap-4 rounded-xl cursor-pointer hover:border '>
        <div className='w-20 h-19 border-10  border-gray-100 rounded-full  flex items-center justify-center'>
            <img src={logo} alt="" className='w-8 h-8' />
        </div>
        <div>
           <div className='text-base  font-bold leading-10'>{tittle}</div>
           <div className='text-[14px] font-medium leading-5 w-73.5 h-11.5'>{description}</div>
        </div>
    </div>
  )
}

export default ServiceCard