import React, { useState } from 'react'
import { FaTag } from 'react-icons/fa'
import Left from './OffersLeft'
import Right from './Right'

export default function Offers() {

    const [id, setId] = useState(9)

  return (
    <main>
        <div className='flex items-center mb-5 pl-6'>
            <div className='text-white bg-[rgb(214,35,0)] w-9 h-9 rounded-full flex items-center justify-center'><FaTag /></div>

            <p className='font-black text-lg'>Have a Promo Code?</p>
        </div>

        <div className='flex'>
            <Left setId={setId}/>
            <Right id={id}/>
        </div>
    </main>
  )
}
