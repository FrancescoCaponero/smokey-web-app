import React from 'react'

const Button = ({text, width, onClick}) => {

  return (
    <button 
    className={
    `${width}    
    bg-orange 
    text-dark 
    font-medium
    text-sm
    md:text-md
    hover:scale-105
    transition-all
    p-4 
    md:w-[12rem] 
    w-[7rem]
    h-[3rem]
    md:h-auto
    w-full
    flex 
    justify-center 
    items-center
    cursor-pointer
    my-[.8rem]
    mt-[2rem]
    md:my-2`}
    onClick={onClick}>
      {text}
    </button>
  )
}

export default Button