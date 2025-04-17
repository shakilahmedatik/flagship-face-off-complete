import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import { router } from './routes/routes.jsx'
import { Toaster } from 'react-hot-toast'
import CartProvider from './providers/CartProvider.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CartProvider>
      <RouterProvider router={router} />
      <Toaster position='bottom-right' />
    </CartProvider>
  </StrictMode>
)
