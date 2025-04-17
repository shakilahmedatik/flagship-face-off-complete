import React from 'react'
import Button from '../components/shared/Button'

const About = () => {
  return (
    <div className='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
      <div className='grid gap-5 mb-8 md:grid-cols-2 lg:grid-cols-3'>
        <div className='p-5 duration-300 transform bg-white border rounded shadow-sm hover:-translate-y-2'>
          <div className='flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50'>
            <svg
              className='w-10 h-10 text-deep-purple-accent-400'
              stroke='currentColor'
              viewBox='0 0 52 52'
            >
              <polygon
                strokeWidth='3'
                strokeLinecap='round'
                strokeLinejoin='round'
                fill='none'
                points='29 13 14 29 25 29 23 39 38 23 27 23'
              />
            </svg>
          </div>
          <h6 className='mb-2 font-semibold leading-5'>The doctor said</h6>
          <p className='text-sm text-gray-900'>
            Baseball ipsum dolor sit amet cellar rubber win hack tossed.
            Slugging catcher slide bench league, left fielder nubber.
          </p>
        </div>
        <div className='p-5 duration-300 transform bg-white border rounded shadow-sm hover:-translate-y-2'>
          <div className='flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50'>
            <svg
              className='w-10 h-10 text-deep-purple-accent-400'
              stroke='currentColor'
              viewBox='0 0 52 52'
            >
              <polygon
                strokeWidth='3'
                strokeLinecap='round'
                strokeLinejoin='round'
                fill='none'
                points='29 13 14 29 25 29 23 39 38 23 27 23'
              />
            </svg>
          </div>
          <h6 className='mb-2 font-semibold leading-5'>That is the true</h6>
          <p className='text-sm text-gray-900'>
            We meet at one of those defining moments - a moment when our nation
            is at war, our economy is in turmoil, and the American promise has
            been threatened once more.
          </p>
        </div>
        <div className='p-5 duration-300 transform bg-white border rounded shadow-sm hover:-translate-y-2'>
          <div className='flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50'>
            <svg
              className='w-10 h-10 text-deep-purple-accent-400'
              stroke='currentColor'
              viewBox='0 0 52 52'
            >
              <polygon
                strokeWidth='3'
                strokeLinecap='round'
                strokeLinejoin='round'
                fill='none'
                points='29 13 14 29 25 29 23 39 38 23 27 23'
              />
            </svg>
          </div>
          <h6 className='mb-2 font-semibold leading-5'>Those options</h6>
          <p className='text-sm text-gray-900'>
            Strategic high-level 30,000 ft view. Drill down re-inventing the
            wheel at the end of the day but curate imagineer, or to be inspired
            is to become creative.
          </p>
        </div>
        <div className='p-5 duration-300 transform bg-white border rounded shadow-sm hover:-translate-y-2'>
          <div className='flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50'>
            <svg
              className='w-10 h-10 text-deep-purple-accent-400'
              stroke='currentColor'
              viewBox='0 0 52 52'
            >
              <polygon
                strokeWidth='3'
                strokeLinecap='round'
                strokeLinejoin='round'
                fill='none'
                points='29 13 14 29 25 29 23 39 38 23 27 23'
              />
            </svg>
          </div>
          <h6 className='mb-2 font-semibold leading-5'>Swearem ipsum</h6>
          <p className='text-sm text-gray-900'>
            Aliquam scelerisque accumsan nisl, a mattis eros vestibulum et.
            Vestibulum placerat purus ut nibh aliquam fringilla. Aenean et
            tortor diam, id tempor elit.
          </p>
        </div>
        <div className='p-5 duration-300 transform bg-white border rounded shadow-sm hover:-translate-y-2'>
          <div className='flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50'>
            <svg
              className='w-10 h-10 text-deep-purple-accent-400'
              stroke='currentColor'
              viewBox='0 0 52 52'
            >
              <polygon
                strokeWidth='3'
                strokeLinecap='round'
                strokeLinejoin='round'
                fill='none'
                points='29 13 14 29 25 29 23 39 38 23 27 23'
              />
            </svg>
          </div>
          <h6 className='mb-2 font-semibold leading-5'>Webtwo ipsum</h6>
          <p className='text-sm text-gray-900'>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque rem aperiam, eaque ipsa quae. Sed ut
            perspiciatis unde omnis.
          </p>
        </div>
        <div className='p-5 duration-300 transform bg-white border rounded shadow-sm hover:-translate-y-2'>
          <div className='flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50'>
            <svg
              className='w-10 h-10 text-deep-purple-accent-400'
              stroke='currentColor'
              viewBox='0 0 52 52'
            >
              <polygon
                strokeWidth='3'
                strokeLinecap='round'
                strokeLinejoin='round'
                fill='none'
                points='29 13 14 29 25 29 23 39 38 23 27 23'
              />
            </svg>
          </div>
          <h6 className='mb-2 font-semibold leading-5'>Lookout flogging</h6>
          <p className='text-sm text-gray-900'>
            Flatland! Hypatia. Galaxies Orion's sword globular star cluster?
            Light years quasar as a patch of light gathered by gravity Vangelis
            radio telescope.
          </p>
        </div>
      </div>
      <div className='text-center'>
        <Button label='Learn More' />
      </div>
    </div>
  )
}

export default About
