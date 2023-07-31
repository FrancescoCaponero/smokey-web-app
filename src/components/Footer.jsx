import React from 'react'
import { Link } from 'react-router-dom'
import facebook from '../assets/facebook.svg'
import instagram from '../assets/instagram.svg'

const Footer = () => {
  return (
    <div className='
    min-w-screen
    bg-darkgrey
    text-plate-white
    justify-center
    items-center
    flex
    relative
    z-0'>
      <div className='bg-plate-greyish h-[.25rem] w-full absolute top-[-.5rem]'></div>
      <div className='
      flex
      flex-col
      justify-center 
      items-center
      w-[1200px]
      px-[2rem]
      gap-[5rem]'>
        <h1 className='uppercase self-start text-4xl mt-[10rem] font-bold'>About Us</h1>
        <div className='text-plate-greyish self-start flex flex-col text-md gap-4 font-medium'>
          <Link 
              to="/contacts" 
              className='
              hover:underline 
              transition-all
              decoration-plate-greyish
              underline-offset-2
            '>
              Contact Us
          </Link>
          <Link 
            to="/barbeques" 
            className='
            hover:underline 
            transition-all
            decoration-plate-greyish
            underline-offset-2
          '>
            Barbeques
          </Link>
          <Link 
            to="/about-us" 
            className='
            hover:underline 
            transition-all
            decoration-plate-greyish
            underline-offset-2
          '>
            About
          </Link>
        </div>
        <div className='self-center flex gap-5'>
          <img src={facebook} className='w-5 cursor-pointer hover:scale-105 transition-all'/>
          <img src={instagram} className='w-5 cursor-pointer hover:scale-105 transition-all'/>
        </div>
        <div className='
        self-center 
        text-center
        text-plate-greyish
        text-[12px]
        '>
          © 2023, Smokey website by Francesco Caponero
        </div>
      </div>
    </div>
  )
}

export default Footer