import React, { useState } from 'react';
import Button from './UIcomponents/Button'
const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    contact: '',
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
    // Add your form submission logic here
    console.log(formData);
    // Reset the form after submission
    setFormData({
      name: '',
      email: '',
      phoneNumber: '',
      contact: '',
    });
  };

  return (
    <form onSubmit={handleSubmit} className="md:max-w-[1000px] mx-auto md:my-[8rem] my-[4rem]">
        <div className='md:flex justify-between md:gap-5'>
            <div className="mb-4 md:w-full">
                <input
                type="text"
                id="name"
                name="name"
                placeholder='Name'
                value={formData.name}
                onChange={handleChange}
                className="link-style-contact-input"
                required
                />
            </div>
            <div className="mb-4 md:w-full">
                <input
                type="email"
                id="email"
                name="email"
                placeholder='Email *'
                value={formData.email}
                onChange={handleChange}
                className="link-style-contact-input"
                required
                />
            </div>
        </div>
      <div className="mb-4">
        <input
          type="tel"
          id="phoneNumber"
          name="phoneNumber"
          placeholder='Phone Number'
          value={formData.phoneNumber}
          onChange={handleChange}
          className="link-style-contact-input"
          required
        />
      </div>
      <div className="">
        <textarea
          id="contact"
          name="contact"
          value={formData.contact}
          onChange={handleChange}
          placeholder='Comment'
          className="link-style-contact-input resize-none"
          rows="4"
          required
        ></textarea>
      </div>
      <Button text="Send">
        <button
            type="submit"
        >
            Send
        </button>
      </Button>
    </form>
  );
};

export default ContactForm;
