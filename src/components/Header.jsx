import React, { useState, useEffect } from 'react'
import mainLogo from '../assets/main-logo.png'
import cartIcon from '../assets/log-icon.svg'
import userIcon from '../assets/user-icon.svg'
import hamCloseIcon from '../assets/ham-x-icon.svg'
import hamOpenIcon from '../assets/ham-icon.svg'
import { Link, NavLink } from 'react-router-dom'

const Header = () => {
const [isNavOpen, setIsNavOpen] = useState(false);

const handleMobileMenuToggle = () => {
    setIsNavOpen(!isNavOpen);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const itemsCounter = JSON.parse(localStorage.getItem('cart')).length;
  
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
                    <Link 
                    onClick={scrollToTop} 
                    to="/"
                    >
                        <img src={mainLogo} className="cursor-pointer"/>
                    </Link>
                </div>
                <div className='flex'>
                    <div className='md:flex hidden gap-8 text-sm text-dark '>
                        <NavLink 
                        onClick={scrollToTop} 
                        style={({ isActive }) => {
                            return {
                              textDecorationLine: isActive ? "underline" : "",
                            };
                          }}
                        to="/" 
                        className={`link-style-desktop`}>Home</NavLink>
                        <NavLink 
                        onClick={scrollToTop} 
                        style={({ isActive }) => {
                            return {
                              textDecorationLine: isActive ? "underline" : "",
                            };
                          }}
                        to="/about-us" 
                        className='
                        link-style-desktop
                        '>About Us</NavLink>
                        <NavLink 
                        onClick={scrollToTop} 
                        style={({ isActive }) => {
                            return {
                              textDecorationLine: isActive ? "underline" : "",
                            };
                          }}
                        to="/contacts" 
                        className='
                        link-style-desktop
                        '>Contacts</NavLink>
                        <NavLink 
                        onClick={scrollToTop} 
                        style={({ isActive }) => {
                            return {
                              textDecorationLine: isActive ? "underline" : "",
                            };
                          }}
                        to="/products" 
                        className='
                        link-style-desktop
                        '>Products</NavLink>
                        <NavLink 
                        onClick={scrollToTop} 
                        style={({ isActive }) => {
                            return {
                              textDecorationLine: isActive ? "underline" : "",
                            };
                          }}
                        to="/barbeques" 
                        className='
                        link-style-desktop
                        '>Barbeques</NavLink>
                    </div>
                    <div className='flex ml-8 mr-10 md:mr-0'>
                        <Link 
                        to="/log"
                        onClick={scrollToTop} >
                            <img src={userIcon} className='w-5 md:w-4 cursor-pointer  hover:scale-110 transition-all'/>
                        </Link>
                        <Link 
                        to="/cart"
                        onClick={scrollToTop}
                        className='relative' >
                            <img src={cartIcon} className='w-5 md:w-4 ml-8 cursor-pointer  hover:scale-110 transition-all'/>
                              { 
                              itemsCounter ? ( 
                                <div className='overflow-hidden absolute -right-[.5rem] top-[.45rem] text-[.8rem] p-2 rounded-full bg-darkgrey text-plate-white'>
                                  <span className='h-3 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 absolute text-[.6rem]'>{itemsCounter}</span>
                                </div>
                              ) : '' 
                              }
                        </Link>
                    </div>
                    <div onClick={handleMobileMenuToggle} className='flex items-center justify-center md:hidden cursor-pointer'>
                        <img src={hamOpenIcon} className={`absolute ${!isNavOpen ? 'block' : 'hidden'}`}/>
                        <img src={hamCloseIcon} className={`absolute ${isNavOpen ? 'block' : 'hidden'}`}/>
                    </div>
                </div>
            </div>
            <div className={`fixed overflow-hidden ${isNavOpen ? 'w-[calc(100%-2rem)] ' : 'w-0'} bg-orange h-[calc(100%-8.5rem)] left-0 bottom-0 transition-all`}>
            <div className={`px-[2rem]  relative py-20 flex-col gap-8 text-sm text-dark transition-all ${isNavOpen ? 'flex' : 'hidden'}`}>
                    <NavLink to="/"
                    onClick={scrollToTop} 
                    style={({ isActive }) => {
                        return {
                          textDecorationLine: isActive ? "underline" : "",
                        };
                      }}
                    className='
                    link-style
                    '>Home</NavLink>
                    <NavLink to="/about-us"
                    onClick={scrollToTop} 
                    style={({ isActive }) => {
                        return {
                          textDecorationLine: isActive ? "underline" : "",
                        };
                      }}
                    className='
                    link-style
                    '>About Us</NavLink>
                    <NavLink to="/contacts"
                    onClick={scrollToTop} 
                    style={({ isActive }) => {
                        return {
                          textDecorationLine: isActive ? "underline" : "",
                        };
                      }}
                    className='
                    link-style
                    '>Contacts</NavLink>
                    <NavLink to="/products"
                    onClick={scrollToTop} 
                    style={({ isActive }) => {
                        return {
                          textDecorationLine: isActive ? "underline" : "",
                        };
                      }}
                    className='
                    link-style 
                    '>Products</NavLink>
                    <NavLink to="/barbeques"
                    onClick={scrollToTop}
                    
                    className='
                    link-style
                    '>Barbeques</NavLink>
                    <div>
                        <Link to="/log"
                        onClick={scrollToTop}
                        className='
                        link-style
                        cursor-pointer 
                        w-screen
                        flex items-center
                        absolute
                        bottom-[-10rem]
                        z-9999
                        left-0
                        pl-[2rem]
                        bg-lil-dark
                        py-[1rem]
                        '>
                            <img src={userIcon} className='w-4 md:w-4 -translate-y-0.5	 md:hidden hover:scale-110 transition-all'/>
                            <p className='ml-3'>Log in</p>
                        </Link>
                      </div>
                </div>
            </div>
        </div>
        <div className='h-[8rem] bg-orange'></div>
    </>
  )
}

export default Header