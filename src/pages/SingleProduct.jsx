import React, {useState} from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import MainPageLayout from '../components/UIcomponents/MainPageLayout';
import data from '../data.json';
import AddToCartBtn from '../components/UIcomponents/AddToCartBtn';
import PaypalBtn from '../components/UIcomponents/PaypalBtn';
import OtherProducts from './shop/OtherProducts';
import PopProducts from './shop/PopProducts';



const SingleProduct = () => {
  const { id } = useParams();
  const product = data?.find((product) => product?.id === Number(id));
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [miniCartData, setMiniCartData] = useState(() => {
    const storedData = localStorage.getItem('cart');
    return storedData ? JSON.parse(storedData) : [];
  });

  const handleAddToCart = () => {
    const updatedMiniCart = [...miniCartData, product];
    setMiniCartData(updatedMiniCart);
    localStorage.setItem('cart', JSON.stringify(updatedMiniCart));
    setIsCartOpen(true);
  }
  
  const handleRemoveFromCart = (index) => {
    const updatedMiniCart = miniCartData.filter((_, i) => i !== index);
    setMiniCartData(updatedMiniCart);
    localStorage.setItem('cart', JSON.stringify(updatedMiniCart));
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 50, behavior: 'auto' });
  };


  if (!product) {
    return (
      <>
        <Header/>
        <MainPageLayout>
          <div className='md:h-[40rem] h-[20rem] flex justify-center items-start'>
            <h1 className='md:text-6xl text-3xl'>Ops we didn't your Product 😞</h1>
          </div>
        </MainPageLayout>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <MainPageLayout>
        <div className='flex flex-col w-full relative'>
          <div className='md:flex md:gap-[4rem] mb-[12rem]'>
            <div className='overflow-hidden h-[30rem] md:w-[40rem] md:h-[40rem]'>
              <img src={`${product?.img}`} className='w-full h-full object-cover aspect-video object-center hover:scale-105 transition-all'/>
            </div>
            <div className='md:flex flex-col justify-center '>
              <h1 className='md:text-3xl text-plate-white md:mb-[1rem] text-3xl my-[1rem] md:my-0'>{product.name}</h1>
              <p className='md:text-3xl text-plate-white md:mb-[1rem] text-xl mb-[1rem] md:my-0'>€ {product.price}</p>
              <p className='md:text-sm text-[.8rem] text-plate-greyish md:mb-[4rem] md:max-w-[40rem] mb-[1rem] font-medium'>Tax included. <span className='text-orange'>Shipping</span> calculated at checkout.</p>
              <p className='md:text-xl text-md text-plate-white md:mb-[2rem] md:max-w-[40rem] mb-[1rem] font-light'>{product.description}</p>
              <AddToCartBtn 
              text='Add to cart' 
              width="md:w-full" 
              onClick={handleAddToCart} />
              <PaypalBtn text="Add to cart" width="md:w-full" ></PaypalBtn>
            </div>
          </div>
          <OtherProducts data={data} onClick={scrollToTop} product={product}/>
        </div>
        <PopProducts isCartOpen={isCartOpen} miniCartData={miniCartData} setIsCartOpen={setIsCartOpen} removeFromCart={handleRemoveFromCart}/>
      </MainPageLayout>
      <Footer />
    </>
  );
};

export default SingleProduct;
