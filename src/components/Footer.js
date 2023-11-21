import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className='bg-[rgb(80,35,20)]'>
        <div className='flex'>
            <div className='w-1/2'>
                <h1>BKINFO</h1>
                <a className='block' href=''>ABOUT BK</a>
                <a className='block' href=''>FAQs</a>
                <a className='block' href=''>Policies</a>
                <a className='block' href=''>Get in touch</a>
                <a className='block' href=''>Terms & Conditions</a>
                <a className='block' href=''>Guest Trac</a>
                <a className='block' href=''>Trademarks</a>
            </div>
            <div className='w-1/2'>
                <h1>BK AND YOU</h1>
                <a className='block' href=''>Careers</a>
                <a className='block' href=''>Privacy Policy</a>
                <a className='block' href=''>Modern Slavery Statement</a>
                <a className='block' href=''>Tax Strategy</a>
            </div>
        </div>
    </footer>
  )
}
