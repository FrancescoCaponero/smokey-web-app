import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import MainPageLayout from '../components/UIcomponents/MainPageLayout'

const ErrorPage = () => {
  return (
    <div>        
        <Header></Header>
        <MainPageLayout>
            <div className='md:h-[40rem] h-[20rem] flex justify-center items-start'>
                <h1 className='md:text-6xl text-3xl'>Ops we didn't found that page 😞</h1>
            </div>
        </MainPageLayout>
        <Footer></Footer>
    </div>
  )
}

export default ErrorPage