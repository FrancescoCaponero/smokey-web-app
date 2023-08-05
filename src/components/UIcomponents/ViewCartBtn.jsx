import React from 'react';

const ViewCartBtn = ({ text, width, onClick, numberOfItems }) => {
  return (
    <button
      className={`
        ${width}
        bg-transparent
        border-darkgrey
        border-2
        font-medium
        text-sm
        md:text-md
        hover:scale-105
        transition-all
        p-3 
        w-[7rem]
        text-dark
        h-[2.6rem]
        md:h-auto
        flex 
        justify-center 
        items-center
        cursor-pointer
        my-[.8rem]
        mt-[2rem]
        md:my-2`}
      onClick={onClick}
    >
      {text} ({numberOfItems})
    </button>
  );
};

export default ViewCartBtn;
