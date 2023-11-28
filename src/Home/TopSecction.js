import React from 'react'
import { Link } from 'react-router-dom'
import { homeImg } from './Data'

export default function TopSecction() {
  return (
    <section>
        <div className='bg-[rgb(80,35,20)] flex justify-between items-center text-white'>
            <div>
                <img src='https://cdn.sanity.io/images/czqk28jt/prod_bk_gb/0cf1af0a0daab9d078b561f98d55a73aec3bcb61-1250x200.png?w=320&q=40&fit=max&auto=format' alt='burgerking' />
                <p>Welcome! You can earn points with every purchase and use them to redeem rewards.</p>
            </div>

            <Link to='/menu'><button className='flex rounded-[20px] border bg-transparent hover:bg-[rgb(245,235,220)] px-3 py-1 items-center'>
                <img src='https://cdn.sanity.io/images/czqk28jt/prod_bk_gb/8044204b423e85ae195d35eb5d342da17bc99a4e-197x197.svg' alt='icon' className='w-5 mr-2' /> <span>Learn More</span></button>
            </Link>
        </div>

        <div className='flex flex-wrap justify-between px-10 lg:px-[70px] py-28'>
          {
            homeImg.map((img, index) => (
              <div className='w-[49%] rounded-[15px] overflow-hidden mb-5' key={index}>
                <img src={img.imgSrc} alt='img' className='block w-full h-[260px]'/>

                <div className='bg-white px-3 py-2 justify-center flex flex-col text-[rgb(80,35,20)] h-[calc(100%-260px)]'>

                  <div className='flex items-center justify-between'>
                    <div className='w-5/12 lg:w-7/12'>
                      <h3 className='font-semibold'>{img.h3}</h3>
                      <p className='text-[12px]'>{img.description}</p>
                    </div>
                    <button className='bg-[rgb(214,35,0)] text-[rgb(245,235,220)] h-fit px-6 py-3 font-semibold rounded-[25px]'>{img.button}</button>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
    </section>
  )
}
