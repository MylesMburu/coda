import React from 'react'
import norway from '../assets/norway_flag.svg'
import world from '../assets/world.svg'
import cush from '../assets/nile.png'

export const About = () => {
  return (
    <div>

      <div class="bg-gray-100 p-8 rounded-lg shadow-md grid grid-cols-1 md:grid-cols-2">
        <div>
          <h2 class="text-2xl font-semibold mb-4">CODA Norge</h2>
          <p class="text-gray-700 mb-6">
            <span class="font-semibold">CUSH/KUSH</span> refers to the tall and black people living along the White and Blue Nile Rivers in Eastern Africa. 
          </p>
          <p class="text-gray-700 mb-6">
            <span class="font-semibold">Organisation</span> aims to bring people together for social interaction and recreation.
          </p>
          <p class="text-gray-700 mb-6">
            <span class="font-semibold">Development</span> involves improving or transforming from lower standards to better ones.
          </p>
          <p class="text-gray-700 mb-6">
            <span class="font-semibold">Advocacy</span> means supporting and recommending ideas, plans, and actions publicly, internally, and internationally.
          </p>
          <p class="text-gray-700">
            <span class="font-semibold">Abbriviation:</span> (CODA), Norge
          </p>
        </div>

        <div className='flex justify-center items-center'>
          <img src={cush} alt="map of cush area" />
        </div>
        
      </div>


      {/* what do we do */}
      <div className='grid grid-cols-1 md:grid-cols-2 py-8 px-6' data-aos="fade-left" data-aos-offset="0" data-aos-easing="ease-in-sine">
        <div className='flex justify-center items-center'>
          <img src={norway} alt="norway flag" className='h-48 w-48' />
        </div>

        <div>
          <h2 className='font-bold'>WHAT WE DO IN NORWAY?</h2>
          <ul className='list-disc list-inside'>
            <li className='mb-1'>Enviromental Safety, such as cleaning the areas for better health.</li>
            <li className='mb-1'>Sports activities for young boys and girls such as Netball and Football.</li>
            <li className='mb-1'>Support the elderly advocate for home help to practice things.</li>
            <li className='mb-1'>Children and women rights.</li>
            <li className='mb-1'>Learning inclusive and diverse culture in Norway.</li>
            <li className='mb-1'>Give both Boys and Girls eqaul opportunities in formal and informal education.</li>
            <li className='mb-1'>Support integration activities for new Arrival in Norway.</li>
          </ul>
        </div>
      </div>

      {/* international activities */}
      <div className='bg-gray-100 shadow-md grid grid-cols-1 md:grid-cols-2 py-8 px-6' data-aos="fade-right" data-aos-offset="100" data-aos-easing="ease-in-sine">
        <div>
          <h2 className='font-bold'>INTERNATIONAL ACTIVITIES</h2>
          <ul className='list-disc list-inside'>
            <li className='mb-1'>Promoting access to education for refugee students who have dropped out from schools in Eastern Africa.</li>
            <li className='mb-1'>Promoting agriculture.</li>
            <li className='mb-1'>Advocating for good governance.</li>
            <li className='mb-1'>Enhancing capacity building and peacebuilding through training, conferences, seminars, workshops, etc.</li>
            <li className='mb-1'>Promoting peace and unity among conflicting parties in East Africa and other parts of the world.</li>
            <li className='mb-1'>Enhancing dialogue and advocacy within conflict-affected communities in East Africa and other parts of the world.</li>
            <li className='mb-1'>Promoting transitional justice mechanisms.</li>
          </ul>
        </div>


        <div className='flex justify-center items-center'>
          <img src={world} alt="norway flag" className='h-48 w-48' />
        </div>


      </div>
      

      <div>

      </div>
    </div>
  )
}
