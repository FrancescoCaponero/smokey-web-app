import React from 'react'

const CheckOutBtn = ({text, width}) => {

  return (
    <button 
    className={
    `${width}    
    bg-dark 
    text-orange 
    font-medium
    text-sm
    md:text-md
    hover:scale-105
    transition-all
    p-4 
    w-[7rem]
    h-[3rem]
    md:h-auto
    flex 
    justify-center 
    items-center
    cursor-pointer
    mb-[.8rem]
    md:mb-[.8rem]
    md:my-[.2rem]`}>
      {text}
    </button>
  )
}

export default CheckOutBtn