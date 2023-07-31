import React from 'react'
import MainPageLayout from './MainPageLayout'
import GrillImage from '../../assets/grill-1.png'

const ContentVariant2 = () => {
  return (
    <MainPageLayout>
        <div className='md:max-w-[30rem] pb-[8rem] md:ml-[6rem] flex flex-col justify-center'>
          <h1 className='md:text-7xl text-plate-white md:mb-[8rem] text-5xl my-[4rem] md:my-0'>Consistency</h1>
          <p className='md:text-xl text-plate-greyish font-medium'>
          We have applied our years of experience cooking with fire and smoke on offsets to make an easy to use, maintain and manage barbecue. <br/><br/><br/>Consistent temperatures across the grates gives you consistent results with your food. The small details we put in shine through and we are sure you will love it. Ask anyone that owns one, they'll verify it!</p>
        </div>
        <div className="order-first md:min-w-[8rem] overflow-hidden h-[65rem] md:block hidden">
          <img src={GrillImage} className="w-full h-full object-cover object-center hover:scale-105 transition-all" />
        </div>
    </MainPageLayout>
  )
}

export default ContentVariant2