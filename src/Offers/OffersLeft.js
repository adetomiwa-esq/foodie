import React from 'react'
import { OfferList } from './OfferList'

export default function Left({setId}) {
  
    function changeId(x){
      setId(x)
    }
  return (
    <section className='w-[35%] h-screen overflow-y-scroll px-5'>
      {
        OfferList.map((x, index) => (
            <div key={index} className='flex cursor-pointer' onClick={() => changeId(x.id)}>
                <div className={`w-[160px]  border border-red-500`}><img src={x.imgSrc} alt='' /></div>

                <div className='w-[calc(100%-160px)] border border-red-500'>
                    <h1>{x.h1}</h1>
                    <p>{x.p.length > 65 ? x.p.slice(0, 65) + '...' : x.p }</p>
                </div>
            </div>
        ))
      }
    </section>
  )
}
