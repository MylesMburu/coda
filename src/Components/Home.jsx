import React from 'react';
import cush from '../assets/cush.jpg';
import { Link } from 'react-router-dom';
import { About } from './About';
import { IoRocketSharp } from 'react-icons/io5';
import { TbTargetArrow } from 'react-icons/tb';
import { GiStrongMan } from 'react-icons/gi';

export const Home = () => {
  return (
    <div className='bg-white0'>
      <div className='relative'>
        <img 
          src={cush}
          alt="Image of happy Cushite children"
          className='w-full h-screen object-cover opacity-50'
        />
        <div className='absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50 gap-5 p-4 md:p-0'>
          <h1 className='text-4xl text-white font-bold text-center md:text-left'>
            CUSH ORGANISATION FOR DEVELOPMENT ADVOCACY (CODA), NORGE
          </h1> 
          <button className='bg-yellow-400 text-xl px-3 py-2 rounded-md'>
            <Link to='/about' element={<About />}>Know More</Link>
          </button>
        </div>
      </div>



      {/* Short description of the organization */}
      <div className='flex flex-col px-4 py-12 md:flex-row md:py-24'>
        <div className='border-b-2 border-blue-600 md:border-l-4 md:border-t-0 md:border-b-0 w-full md:w-3/4 md:rounded-tl-md md:rounded-bl-md md:ml-16'></div>
        <div data-aos="fade-left">
          <p className='text-center text-lg'>
            Cush Organization for Development Advocacy (CODA), Norge, is a purely indigenous and international nonprofit organization dedicated to promoting access to quality education, health, good governance, transitional justice, peace, and unity in war-torn communities. It also empowers vulnerable communities through modern agriculture.
          </p>
        </div>
        <div className='border-t-2 border-blue-600 md:border-r-4 md:border-t-0 md:border-b-0 w-full md:w-3/4 md:rounded-tr-md md:rounded-br-md md:mr-16'></div>
      </div>


      {/* Mission, vision, and motto */}
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:gap-4 h-auto sm:h-96 pb-6 px-4'>
        <div className='flex justify-center items-center card'>
          <IoRocketSharp className='text-2xl'/>
          <h2 className='font-bold'>Mission</h2>
          <p>
            Empower all individuals to achieve a standard of living in both Norway and internationally.
          </p>
        </div>

        <div className='flex justify-center items-center card'>
          <TbTargetArrow className='text-2xl'/>
          <h2 className='font-bold'>Vision</h2>
          <p>
            Support the target group to make a positive impact on their lives. Build trust in the services provided to the people, enabling them to lead independent, integrated lives in Norway. Extend support to brothers and sisters internationally.
          </p>
        </div>

        <div className='flex justify-center items-center card'>
          <GiStrongMan className='text-2xl'/>
          <h2 className='font-bold'>Motto</h2>
          <p>
            "Development is a resource for peace and stability."
          </p>
        </div>
      </div>
    </div>
  );
};
