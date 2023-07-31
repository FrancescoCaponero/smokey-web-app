import React, { useState } from 'react'
import mainLogo from '../assets/main-logo.png'
import logIcon from '../assets/log-icon.svg'
import userIcon from '../assets/user-icon.svg'
import hamCloseIcon from '../assets/ham-x-icon.svg'
import hamOpenIcon from '../assets/ham-icon.svg'
import { Link } from 'react-router-dom'

const Header = () => {
const [isNavOpen, setIsNavOpen] = useState(false);

const handleMobileMenuToggle = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <>
        <div className='
            bg-orange 
            h-[8rem] 
            w-[calc(100vw-10px)] 
            flex
            justify-center 
            items-center
            fixed
            inset-0
            z-50
            mb-50'>
            <div className='
                w-[1200px] 
                flex 
                justify-between 
                items-center
                px-[2rem]
                xl:px-0'>
                <div className='w-[3.25rem] hover:scale-105 transition-all'>
                    <Link to="/">
                        <img src={mainLogo} className="cursor-pointer"/>
                    </Link>
                </div>
                <div className='flex'>
                    <div className='md:flex hidden gap-8 text-sm text-dark '>
                        <Link to="/" className='
                        link-style-desktop
                        '>Home</Link>
                        <Link to="/about-us" className='
                        link-style-desktop
                        '>About Us</Link>
                        <Link to="/contacts" className='
                        link-style-desktop
                        '>Contacts</Link>
                        <Link to="/products" className='
                        link-style-desktop
                        '>Products</Link>
                        <Link to="/barbeques" className='
                        link-style-desktop
                        '>Barbeques</Link>
                    </div>
                    <div className='flex ml-8 mr-10 md:mr-0'>
                        <Link to="/log">
                            <img src={userIcon} className='w-5 md:w-4 cursor-pointer  hover:scale-110 transition-all'/>
                        </Link>
                        <Link to="/cart">
                            <img src={logIcon} className='w-5 md:w-4 ml-8 cursor-pointer  hover:scale-110 transition-all'/>
                        </Link>
                    </div>
                    <div onClick={handleMobileMenuToggle} className='flex items-center justify-center md:hidden cursor-pointer'>
                        <img src={hamOpenIcon} className={`absolute ${!isNavOpen ? 'block' : 'hidden'}`}/>
                        <img src={hamCloseIcon} className={`absolute ${isNavOpen ? 'block' : 'hidden'}`}/>
                    </div>
                </div>
            </div>
            <div className={`fixed ${isNavOpen ? 'w-[calc(100%-2rem)] ' : 'w-0'} bg-orange h-[calc(100%-8.5rem)] left-0 bottom-0 transition-all`}>
            <div className={`px-[2rem] py-20 flex-col gap-8 text-sm text-dark transition-all ${isNavOpen ? 'flex' : 'hidden'}`}>
                    <Link to="/" 
                    className='
                    link-style
                    '>Home</Link>
                    <Link to="/about-us" 
                    className='
                    link-style
                    '>About Us</Link>
                    <Link to="/contacts" 
                    className='
                    link-style
                    '>Contacts</Link>
                    <Link to="/products" 
                    className='
                    link-style 
                    '>Products</Link>
                    <Link to="/barbeques"
                    className='
                    link-style
                    '>Barbeques</Link>
                </div>
            </div>
        </div>
        <div className='h-[8rem] bg-orange'></div>
    </>
  )
}

export default Header