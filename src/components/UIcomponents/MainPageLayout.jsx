import React from 'react'

const MainPageLayout = ({children, flexcol}) => {
  return (
    <div className='  
    min-w-screen
    bg-darkgrey
    text-plate-white
    justify-center
    items-center
    flex
    z-0
    md:pt-[8rem]
    pt-[4rem]
    '>
        <main className={`
        w-[1200px] 
        flex 
        md:flex-row
        flex-col
        justify-between 
        items-center
        px-[1rem]
        ${flexcol}
        xl:px-0`}>
        {children}
        </main>
    </div>
  )
}

export default MainPageLayout