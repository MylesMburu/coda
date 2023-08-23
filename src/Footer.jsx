import React,{useState, useEffect} from 'react'
import { RxTwitterLogo } from 'react-icons/rx'
import { SlSocialFacebook } from 'react-icons/sl'
import { FaInstagram } from 'react-icons/fa'


export const Footer = () => {

  const [currentYear, setCurrentYear] = useState('');

  useEffect(() => {
    const year = new Date().getFullYear();
    setCurrentYear(year.toString());
  }, []);

  return (
    <div className='bg-gradient-linear text-white md:h-48 pt-1'>
    <div className='flex flex-row justify-center items-center pt-8 gap-2 md:gap-6'>
        <a href="https://twitter.com/CODANorge" target='_blank' rel='noopener noreferrer' ><RxTwitterLogo/></a>
        <a href="https://www.facebook.com/profile.php?id=100091150794754" target="_blank" rel="noopener noreferrer"><SlSocialFacebook/></a>
        <a href="https://www.instagram.com/codanorge/" target="_blank" rel="noopener noreferrer"><FaInstagram/></a>
    </div>

    <div class="relative flex flex-col py-8 justify-center items-center">
      <div class="border-t-2 border-blue-600 w-3/4 md:w-1/2 lg:w-1/3 py-4"></div>
      <span class="text-center mt-2">
        Copyright © {currentYear} CUSH ORGNISATION FOR DEVELOPMENT ADVOCACY (CODA), NORGE
      </span>
    </div>

    </div>

    
  )
}

