import React from 'react'

const Button = ({text}) => {

  return (
    <div 
    className='
    bg-orange 
    text-dark 
    font-medium
    hover:scale-105
    transition-all
    p-4 
    md:w-[12rem] 
    w-[10rem]
    flex 
    justify-center 
    items-center
    cursor-pointer
    my-[4rem]
    md:my-0'>
      {text}
    </div>
  )
}

export default Button