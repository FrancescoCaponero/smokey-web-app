import React from 'react'
import Header from '../components/Header'
import MainPageLayout from '../components/UIcomponents/MainPageLayout'
import Footer from '../components/Footer'
import Image from '../assets/aboutus.png'
const AboutUs = () => {
  return (
    <div>
        <Header></Header>
        <MainPageLayout>
          <div className='w-full'>
            <h1 className='md:text-7xl text-plate-white md:mb-[10rem] text-5xl my-[4rem] md:my-0'>About Us</h1>
            <div className='flex flex-col justify-center items-center'>
              <p className='md:text-xl text-plate-greyish md:mb-[10rem] mb-[4rem] md:w-[60rem] font-medium'>Welcome to Smokey, your ultimate destination for a tantalizing burger experience like no other. We take immense pride in being the go-to company for burger aficionados who crave the smoky, flavorful essence of grilled perfection.</p>
              <div className='overflow-hidden h-[30rem] w-[calc(100vw-8rem)] md:w-[40rem] md:h-[40rem]'>
                <img src={Image} className='w-full h-full object-cover object-center hover:scale-105 transition-all'/>
              </div>
              <p className='md:text-xl text-plate-greyish md:mb-[10rem] mb-[4rem] mt-[4rem] md:mt-[10rem] md:w-[50rem] font-medium'>At Smokey, we elevate burger crafting to an art form. Our secret lies in using only the finest ingredients and premium beef, meticulously seasoned and cooked to tender succulence over open flames. Each bite is a symphony of tastes that will leave your taste buds dancing with delight.</p>
              <p className='md:text-xl text-plate-greyish md:mb-[10rem] mb-[4rem] md:w-[50rem] font-medium'>Our passion for grilling extends beyond just burgers; it's about creating moments of pure joy and satisfaction. Whether you're savoring one of our classic favorites or exploring our innovative creations, every Smokey burger is a celebration of the true spirit of grilling.</p>
              <p className='md:text-xl text-plate-greyish md:mb-[10rem] mb-[10rem] md:w-[50rem] font-medium'>Unite with us and embark on a flavor-filled journey at Smokey, where exceptional burgers and cherished memories converge to make your dining experience truly extraordinary.</p>
            </div>
          </div>
        </MainPageLayout>
        <Footer></Footer>
    </div>
  )
}

export default AboutUs