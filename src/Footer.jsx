import React,{useState, useEffect} from 'react'


export const Footer = () => {

  const [currentYear, setCurrentYear] = useState('');

  useEffect(() => {
    const year = new Date().getFullYear();
    setCurrentYear(year.toString());
  }, []);

  return (
    <div className='bg-gradient-linear text-white md:h-48 pt-1'>
    <div>
        CODA
    </div>
    <div className='relative flex flex-col pr-16 justify-center items-center'>
        <div className='border-t-2 border-blue-600 w-3/4'></div>
        <span>Copyright © {currentYear} CUSH ORGNISATION FOR DEVELOPMENT ADVOCACY (CODA), NORGE</span>
      </div>
    </div>
  )
}

