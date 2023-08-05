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

  const groupedCartItems = cartItems.reduce((groups, item) => {
    if (!groups[item.id]) {
      groups[item.id] = [];
    }
    groups[item.id].push(item);
    return groups;
  }, {});

  const calculateTotal = (items) => {
    return items.reduce((total, item) => total + item.price, 0);
  };

  return (
    <div>
      <Header />
      <MainPageLayout>
        <div className='w-full mb-[4rem]'>
          <div className='flex justify-between mb-[1rem] w-full'>
            <h1 className='md:text-4xl text-plate-white md:mb-[1rem] text-2xl md:my-0'>Your cart</h1>
            <Link to='/products' onClick={scrollToTop}>
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
          {Object.keys(groupedCartItems).map((itemId, index) => {
            const items = groupedCartItems[itemId];
            return (
              <div className="flex justify-between w-full text-plate-greyish" key={index}>
                <div className="p-4 text-[1rem] text-plate-white w-[50%] uppercase">{items[0].name}</div>
                <div className="p-4 text-[1rem] md:block hidden text-plate-white uppercase">{items.length}</div>
                <div className="p-4 text-[1rem] text-plate-white uppercase">
                  € {calculateTotal(items)}
                </div>
              </div>
            );
          })}
          <div>
            <div className="p-4 mt-[4rem] text-[.6rem] flex justify-between text-plate-greyish uppercase">
              <span className='w-1'></span>
              <span className='self-end'>Subtotal</span>
            </div>
            <div className="p-4 text-[2rem] flex justify-between text-plate-white uppercase">
              <span className='w-1'></span>
              <span className='self-end'>
                € {Object.values(groupedCartItems).reduce(
                  (total, items) => total + calculateTotal(items),
                  0
                )}
              </span>
            </div>
          </div>
        </div>
      </MainPageLayout>
      <Footer />
    </div>
  );
};

export default Cart;
