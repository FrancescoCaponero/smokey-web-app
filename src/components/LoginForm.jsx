import React, { useState } from 'react';
import Button from './UIcomponents/Button'
import { Link } from 'react-router-dom';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData({
      email: '',
      password: '',
    });
  };

  return (
    <form onSubmit={handleSubmit} className="md:max-w-[400px] w-full mx-auto md:my-[4rem] my-[2rem]">
        <div className='md:flex flex-col justify-between md:gap-2'>
            <div className="md:w-full md:min-w-[20rem]">
                <input
                type="text"
                id="email"
                name="email"
                placeholder='email *'
                value={formData.email}
                onChange={handleChange}
                className="link-style-contact-input my-2"
                required
                />
            </div>
            <div className="mb-4 md:w-full">
                <input
                type="password"
                id="password"
                name="password"
                placeholder='password *'
                value={formData.password}
                onChange={handleChange}
                className="link-style-contact-input"
                required
                />
            </div>
            <Link className='mb-[5rem]'>
                <p className='text-[.8rem] underline text-orange'>Forgot your password?</p>
            </Link>
            <Button text="Sign In" width="min-w-full"/>
            <Link className=' mb-[5rem] self-center '>
              <p className='text-[.8rem] underline text-orange cursor-pointer'>Create account</p>
            </Link>
        </div>
    </form>
  );
};

export default ContactForm;
