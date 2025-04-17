import React, { useEffect, useState } from 'react'
import PhoneCard from '../components/PhoneCard'
import EmptyState from '../components/shared/EmptyState'
import { getFavorites, removeFavorite } from '../utils'
const Favorites = () => {
  const [displayPhones, setDisplayPhones] = useState([])
  useEffect(() => {
    const favorites = getFavorites()
    setDisplayPhones(favorites)
  }, [])
  const handleRemove = id => {
    removeFavorite(id)
    const favorites = getFavorites()
    setDisplayPhones(favorites)
  }
  if (displayPhones.length < 1) {
    return <EmptyState />
  }
  return (
    <div className='py-12'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8'>
        {displayPhones.map(phone => (
          <PhoneCard
            deletable={true}
            handleRemove={handleRemove}
            key={phone.id}
            phone={phone}
          />
        ))}
      </div>
    </div>
  )
}

export default Favorites
