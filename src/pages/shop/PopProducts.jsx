import React from 'react'
import hamXIcon from '../../assets/ham-x-icon.svg'
import ViewCartBtn from '../../components/UIcomponents/ViewCartBtn'
import CheckOutBtn from '../../components/UIcomponents/CheckOutBtn'

const PopProducts = ({isCartOpen, miniCartData, setIsCartOpen, removeFromCart}) => {
  return (
    <>
     <div className={`
            ${isCartOpen ? 'transform-y-0' : '-transform-y-full'}
            transform-y-0
            z-50
            border-lil-dark 
            border-t-[.1rem] 
            bg-orange 
            w-full 
            md:w-[25rem] 
            top-[8rem] 
            md:right-[2rem] 
            fixed 
            flex 
            flex-col 
            justify-center 
            items-center 
            transition-all
            `}
            style={{
              transform: isCartOpen ? 'translateY(0)' : 'translateY(-100%)',
            }}>
              <div className='w-full h-[4rem] relative border-b-[.1rem] border-lil-dark justify-between flex items-center px-[1rem] md:px-[2rem]'>
                <h4 className='text-darkgrey md:text-[.8rem] text-sm font-medium'><span className='mr-[.5rem]'>&#10003;</span>Item added to your cart</h4>
                <img 
                src={hamXIcon}
                className='w-[1rem] cursor-pointer'
                onClick={() => setIsCartOpen(false)}
                />
              </div>
              <div className={`transform ${isCartOpen ? 'translate-y-0' : '-translate-y-full'} transition-all w-[95%] flex flex-col justify-center items-center`}>
              {miniCartData.length > 0 && (
                <div>
                  {miniCartData.slice(0, 3).map((miniProduct, index) => (
                    <div className='flex w-full justify-between items-center px-[2rem] my-[1rem] max-h-[3rem]' key={index}>
                      <div>
                        <h1 className='md:text-md text-darkgrey md:text-lg my-[.5rem] md:my-0'>{miniProduct.name}</h1>
                      </div>
                      <div className='md:w-[3rem] w-[5rem] ml-4 overflow-hidden'>
                        <img src={miniProduct.img} className='object-cover' alt={miniProduct.name} />
                      </div>
                      <div onClick={() => removeFromCart(index)} className='cursor-pointer text-darkgrey ml-4 font-bold'>x</div>
                    </div>
                  ))}
                  {miniCartData.length > 3 && (
                    <div className='text-darkgrey md:text-[.8rem] text-sm'>
                      {`...and ${miniCartData.length - 3} more items`}
                    </div>
                  )}
                </div>
              )}
              <ViewCartBtn text='View my cart' numberOfItems={miniCartData.length} width='w-[calc(100%-2rem)] md:w-[calc(100%-2rem)]' />
              <CheckOutBtn width='w-[calc(100%-2rem)] md:w-[calc(100%-2rem)]' text='Check Out' />
            </div>
          </div>
    </>
  )
}

export default PopProducts