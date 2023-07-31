import React from 'react'
import Button from "./Button"
import { Link } from "react-router-dom"
import mainBurger from '../../assets/main-burger.png'
import MainPageLayout from './MainPageLayout'

const ContentVariant1 = () => {
  return (
    <MainPageLayout>
        <div className='max-w-[45rem]'>
          <h1 className='md:text-7xl text-plate-white md:mb-[8rem] text-5xl my-[4rem] md:my-0'>Smokey in da<br/> house</h1>
          <p className='md:text-xl text-plate-greyish md:mb-[8rem] md:w-[40rem] font-medium'>
            Introducing the Ultimate Burger Destination: Where Flavor Meets Perfection. Nestled in the heart of America.<br/><br/>Nestled in the heart of America, our passion for crafting the finest burgers is unmatched. Carefully seasoned and grilled to succulent perfection.<br/><br/>At our burger haven, quality reigns supreme. With years of culinary expertise. Don't miss this chance to take your burger game to the next level. 
          </p>
          <Link to={'contacts'}>
            <Button text={'Contact Us'}/>
          </Link>
        </div>
        <div className='
        md:order-last
        order-first
        md:max-w-[19rem]
        overflow-hidden
        h-[50rem]
        '>
          <img src={mainBurger}  className="object-none object-top h-[200rem] "/>
        </div>
    </MainPageLayout>
  )
}

export default ContentVariant1