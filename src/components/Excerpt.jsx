import React from 'react'
import MainPageLayout from './UIcomponents/MainPageLayout'
import data from '../data.json'
import Button from './UIcomponents/Button'

const Excerpt = ({title}) => {

  console.log(data);

  return (
    <MainPageLayout flexcol="md:flex-col">
        <div>
            <h1 className='md:text-7xl text-plate-white md:mb-[16rem] mb-[10rem] text-5xl my-[4rem] md:my-[8rem]'>{title}</h1>
        </div>
          {
            data.map((products) => {
              return (
                <div key={products.id} 
                className={`
                flex 
                gap-[4rem] 
                mt-[10rem] 
                justify-between 
                items-center 
                md:flex-row
                flex-col
                w-full 
                ${(products.id >= data.length) ? 'mb-[10rem]' : ''}
                ${(products.id === 1) ? 'md:mt-[0]' : ''} `}>
                  <div className='md:mt-[4rem]'>
                    <h1 className='md:text-3xl text-plate-white md:mb-[4rem] text-2xl my-[2rem] md:my-0'>{products.name}</h1>
                    <h3 className='md:text-lg text-plate-greyish md:mb-[4rem] font-medium'>{products.summary}</h3>
                    <Button text={"More Info"}/>
                  </div>
                  <div className={`md:min-w-[25rem] h-[8rem] md:h-[35rem] overflow-hidden ${(products.id === 2) ? 'md:order-first order-first' : 'md:order-last order-first'} `}>
                    <img src={products.img} className='w-full h-full object-cover object-center hover:scale-105 transition-all'/>
                  </div>
                </div>
              )
            })
          }
    </MainPageLayout>
  )
}

export default Excerpt