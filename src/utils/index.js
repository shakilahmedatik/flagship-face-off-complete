import toast from 'react-hot-toast'

export const getFavorites = () => {
  let favorites = []
  const storedFavorites = localStorage.getItem('favorites')
  if (storedFavorites) {
    favorites = JSON.parse(storedFavorites)
  }
  return favorites
}
export const addFavorite = phone => {
  let favorites = getFavorites()
  const isExist = favorites.find(b => b.id === phone.id)
  if (isExist) return toast.error('Already Added!')

  favorites.push(phone)
  localStorage.setItem('favorites', JSON.stringify(favorites))
  toast.success('Phone added Successfully!')
}

export const removeFavorite = id => {
  let favorites = getFavorites()
  const remaining = favorites.filter(b => b.id !== id)
  localStorage.setItem('favorites', JSON.stringify(remaining))
  toast.success('Phone Removed from Favorite List!')
}

export const getCart = () => {
  let cart = []
  const storedCart = localStorage.getItem('cart')
  if (storedCart) {
    cart = JSON.parse(storedCart)
  }
  return cart
}
export const addToCart = phone => {
  let cart = getCart()
  const isExist = cart.find(b => b.id === phone.id)
  if (isExist) return toast.error('Already Added!')

  cart.push(phone)
  localStorage.setItem('cart', JSON.stringify(cart))
  toast.success('Cart Updated!')
}
