import React, { useState } from 'react'
import Hero from '../components/Hero'
import PhonesContainer from '../components/PhonesContainer'
import { useLoaderData } from 'react-router'

const Home = () => {
  const phonesData = useLoaderData()
  const [phones, setPhones] = useState(phonesData)
  const handleSearch = (e, text) => {
    console.log(text)
    e.preventDefault()
    const searchedPhones = phonesData.filter(
      phone =>
        phone.name.toLowerCase().includes(text) ||
        phone.brand.toLowerCase().includes(text)
    )
    setPhones(searchedPhones)
  }
  return (
    <div>
      <Hero handleSearch={handleSearch} />
      <PhonesContainer phones={phones} />
    </div>
  )
}

export default Home
