import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import MainPageLayout from '../components/UIcomponents/MainPageLayout'
import ContactForm from '../components/ContactForm'

const Contacts = () => {
  return (
    <>
      <Header />
      <MainPageLayout>
        <div className='w-full flex-col justify-center'>
          <div className='w-full'>
            <h1 className='md:text-6xl text-plate-white md:mb-[2rem] text-4xl my-[2rem] mb-[1rem] md:my-0'>
              Get in touch with us
            </h1>
            <h2 className='text-plate-greyish font-medium md:text-lg'>
              Please let us know your requirements and we will be in touch.
            </h2>
          </div>
          <div>
            <ContactForm />
          </div>
        </div>
      </MainPageLayout>
      <Footer/>
    </>
  )
}

export default Contacts