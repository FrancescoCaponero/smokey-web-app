import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import MainPageLayout from '../../components/UIcomponents/MainPageLayout'
import LoginForm from '../../components/LoginForm'

const Login = () => {
  return (
    <div>
      <Header />
      <MainPageLayout>
        <div className='flex flex-col justify-center items-center w-full'>
          <h1 className='md:text-4xl text-plate-white md:mb-[1rem] text-2xl  md:my-0'>Login</h1>
          <LoginForm />
        </div>
      </MainPageLayout>
      <Footer />
    </div>
  )
}

export default Login