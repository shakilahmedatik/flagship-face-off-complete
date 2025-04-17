import React, { useState } from 'react'
import Button from './shared/Button'
import bannerImg from '../assets/banner.png'
const Hero = ({ handleSearch }) => {
  const [searchText, setSearchText] = useState('')
  return (
    <div className='py-12'>
      <img
        src={bannerImg}
        className='w-full mx-auto md:w-auto md:max-w-md '
        alt=''
      />
      <div className='text-center space-y-4'>
        <h1 className='text-7xl font-thin text-gray-900'>
          Browse, Search, View, Buy
        </h1>
        <p className=' text-gray-500'>
          Best place to browse, search, view details and purchase of top
          flagship phones <br /> of the current time - FlagshipFaceOff
        </p>
        <form
          onSubmit={e => {
            handleSearch(e, searchText)
            setSearchText('')
          }}
          className='flex flex-col justify-center items-center w-full mb-4 md:flex-row md:px-24'
        >
          <input
            value={searchText}
            onChange={e => setSearchText(e.target.value)}
            placeholder='Search Phone by Name'
            type='text'
            className='w-2/3 h-12 px-4 mb-3  bg-white border border-gray-300 rounded shadow-sm appearance-none md:mr-2 md:mb-0 focus:outline-none focus:shadow-outline'
          />
          <Button type='submit' label='Search' />
        </form>
      </div>
    </div>
  )
}

export default Hero
