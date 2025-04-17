import React, { useEffect, useState } from 'react'
import { CartContext } from './Contexts'
import { getCart } from '../utils'

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([])
  useEffect(() => {
    const savedCart = getCart()
    setCart(savedCart)
  }, [])
  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider
