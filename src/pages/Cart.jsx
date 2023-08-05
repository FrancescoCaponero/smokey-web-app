import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import MainPageLayout from '../components/UIcomponents/MainPageLayout';
import { Link } from 'react-router-dom';

const Cart = () => {

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const cartItems = JSON.parse(localStorage.getItem('cart'));
  console.log(cartItems);

  return (
    <div>
      <Header />
      <MainPageLayout>
        <div className='w-full mb-[4rem]'>
          <div className='flex flex justify-between mb-[1rem] w-full'>
            <h1 className='md:text-4xl text-plate-white md:mb-[1rem] text-2xl md:my-0'>Your cart</h1>
            <Link to={"/products"} onClick={scrollToTop}>
              <h4 className='text-[.8rem] underline text-orange cursor-pointer'>
                Continue Shopping
              </h4>
            </Link>
          </div>
          <div className="flex justify-between w-full border-b-2 text-plate-greyish">
            <div className="p-4 text-[.6rem] text-plate-greyish w-[50%] uppercase">Product</div>
            <div className="p-4 text-[.6rem] md:block hidden text-plate-greyish uppercase">Quantity</div>
            <div className="p-4 text-[.6rem] text-plate-greyish uppercase">Total</div>
          </div>
            {cartItems.map((items) => {
              return (
                <div   className="flex justify-between w-full text-plate-greyish">
                  <div className="p-4 text-[1rem] text-plate-white w-[50%] uppercase">{items.name}</div>
                  <div className="p-4 text-[1rem] md:block hidden text-plate-white uppercase">{items.quantity}</div>
                  <div className="p-4 text-[1rem] text-plate-white uppercase">€ {items.price}</div>
                </div>
              )
            })}
          <div>
            <div className="p-4 mt-[4rem] text-[.6rem] flex justify-between text-plate-greyish uppercase">
              <span className='w-1'></span>
              <span className='self-end'>Subtotal</span>
            </div>
            <div className="p-4 text-[2rem] flex justify-between text-plate-white uppercase">
              <span className='w-1'></span><span className='self-end'> € {cartItems.reduce((total, item) => total + item.price, 0)}</span>
            </div>
          </div>
        </div>
      </MainPageLayout>
      <Footer />
    </div>
  );
};

export default Cart;
