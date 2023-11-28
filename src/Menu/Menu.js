import React from 'react'
import { Link } from 'react-router-dom'
import { MenuList } from '../components/MenuList'

export default function Menu() {
  return (
    <div>
       <div className='bg-[#f5ebdc]'>
     <div className='bg-[rgb(80,35,20)] text-[rgb(245,235,220)] font-black text-6xl text-center py-12'>
       Our Menu
    </div>

       <div className='flex flex-wrap  md:w-9/12 mx-auto justify-between py-8'>
       {
          MenuList.map((item, index) => (
            <div key={index} className='w-[32%] mb-4 rounded-lg overflow-hidden shadow-2xl bg-white delay-500 duration-500 ease-in-out sm:'>
              <img className='w-full h-60' src={item.imgSrc} alt={item.title} />
              <div className='text-center py-5 uppercase'>{item.title}</div>
            </div>
          ))
        }
      </div>
    </div>
    </div>
  )
}
