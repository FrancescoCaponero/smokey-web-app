import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../../components/UIcomponents/Button'

const OtherProducts = ({data, onClick, product}) => {
  return (
      <>
    <h1 className='mt-[5rem] md:text-6xl text-plate-white md:mb-[4rem] text-3xl my-[2rem] md:my-0'>You may also like</h1>
          {
            data.map((otherProduct) => {
              if (otherProduct.id !== product?.id) {
                  return (
                  <div className={`
                  border-b-2
                  mb-8 
                  py-8 
                  border-plate-greyish 
                  md:border-none
                  product-details 
                  `} key={otherProduct.id}>
                    <div className='md:mt-[4rem] md:flex md:gap-[4rem] mb-[2rem]'>
                      <div className={`md:min-w-[25rem] w-full h-[8rem] md:h-[35rem] overflow-hidden`}>
                        <img src={otherProduct?.img} className='w-full h-full object-cover object-center hover:scale-105 transition-all'/>
                      </div>
                      <div className='md:flex flex-col justify-center '>
                        <h1 className='md:text-3xl text-plate-white md:mb-[4rem] text-2xl my-[2rem] md:my-0'>{otherProduct.name}</h1>
                        <h3 className='md:text-lg text-plate-greyish md:mb-[4rem] font-medium'>{otherProduct.summary}</h3>
                        <Link to={`/products/${otherProduct.id}`} onClick={onClick}>
                          <Button text={"More Info"}/>
                        </Link>
                      </div>
                    </div>
                  </div>
                  )
                }
            })
          }
        </>
  )
}

export default OtherProducts