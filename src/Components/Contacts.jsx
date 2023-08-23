import React,{useRef} from 'react'
import { FiPhoneCall } from 'react-icons/fi'
import { HiOutlineMail } from 'react-icons/hi'
import { RxTwitterLogo } from 'react-icons/rx'
import { SlSocialFacebook } from 'react-icons/sl'
import { FaInstagram } from 'react-icons/fa'
import { VscLocation } from 'react-icons/vsc'

export const Contacts = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    try {
      emailjs.sendForm('service_b4yrlg9', 'template_8qnuo6d', form.current, '123123123');
    } catch (error) {
      console.log(error);
    }
    e.target.reset();
    window.alert('Message sent');
  };

  return (
    <div className='bg-gray-100 p-8 md:p-16 min-h-screen'>
    <div className='grid grid-cols-1 md:grid-cols-2 gap-4 px-2 md:px-6 pt-8'>
      <div className='text-black'>
        <h2 className='border-b-2 border-black pb-1 mb-4 font-bold'>Contact Us</h2>
        <div className='px-2 mb-8 md:mb-16'>
          <p>We would love to hear from you!</p>
          <p>
            Reach out for any suggestions or enquiries. We'll get back to you as soon as possible.
          </p>
        </div>
        <div className='flex flex-col md:flex-row gap-4 bg-yellow-300 text-text1 p-3 rounded mb-4'>
          <VscLocation className='mt-1' />
          <h3>Kong Oscars Gate 62, 5017 BERGEN</h3>
        </div>
        <div className='flex flex-col md:flex-row gap-4 bg-yellow-300 text-text1 p-3 rounded mb-4'>
          <HiOutlineMail className='mt-1' />
          <h3 className='text-sm md:text-base'>codanorge2023@outlook.com</h3>
        </div>

        <div className='flex flex-row p-4 gap-2 md:gap-6'>
          <a href="https://twitter.com/CODANorge" target='_blank' rel='noopener noreferrer' ><RxTwitterLogo/></a>
          <a href="https://www.facebook.com/profile.php?id=100091150794754" target="_blank" rel="noopener noreferrer"><SlSocialFacebook/></a>
          <a href="https://www.instagram.com/codanorge/" target="_blank" rel="noopener noreferrer"><FaInstagram/></a>
        </div>
      </div>
      <div>
        <form className='flex flex-col p-4 md:p-8 w-full md:w-96 text-black' ref={form} onSubmit={sendEmail}>
          <input type='text' name='name' placeholder='Your full name' required className='p-2 rounded-md mb-4' />
          <input type='email' name='email' placeholder='Your email' required className='p-2 rounded-md mb-4' />
          <textarea
            name='message'
            rows='8'
            placeholder='Your message'
            required
            className='p-2 rounded-md mb-4'
          ></textarea>
          <button type='submit' className='py-2 px-4 bg-black bg-opacity-70 text-white0 w-max rounded-md hover:border hover:border-black hover:bg-opacity-60'>
            Send Message
          </button>
        </form>
      </div>
    </div>
  </div>
  )
}
