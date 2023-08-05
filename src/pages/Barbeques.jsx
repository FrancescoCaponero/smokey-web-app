import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import MainPageLayout from '../components/UIcomponents/MainPageLayout'
import Image from '../assets/barbeque.png'

const Barbeques = () => {
  return (
    <>      
      <Header />
      <MainPageLayout>
      <div className='w-full'>
            <h1 className='md:text-7xl text-plate-white md:mb-[10rem] text-5xl my-[4rem] md:my-0'>Barbeques</h1>
            <div className='flex flex-col justify-center items-center'>
              <div className='overflow-hidden h-[30rem] w-[calc(100vw-8rem)] md:w-[40rem] md:h-[40rem]'>
                <img src={Image} className='w-full h-full object-cover object-center hover:scale-105 transition-all'/>
              </div>
              <p className='md:text-xl text-plate-greyish md:mb-[10rem] mb-[4rem] mt-[4rem] md:mt-[10rem] md:w-[50rem] font-medium'>Experience authentic American barbecues that bring smoky, flavorful grilling to your backyard. Our precision-crafted grills ensure tender, juicy goodness in every bite. From classic burgers to succulent ribs.</p>
              <p className='md:text-xl text-plate-greyish md:mb-[10rem] mb-[4rem] md:w-[50rem] font-medium'>Elevate your outdoor cooking with consistent heat distribution. Whether you're a seasoned pitmaster or a novice, create unforgettable gatherings and savor the true taste of American barbecue.</p>
            </div>
          </div>
      </MainPageLayout>
      <Footer/>
    </>
  )
}

export default Barbeques