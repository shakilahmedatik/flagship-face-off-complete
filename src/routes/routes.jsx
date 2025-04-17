import { createBrowserRouter } from 'react-router'
import MainLayout from '../layouts/MainLayout'
import About from '../pages/About'
import Favorites from '../pages/Favorites'
import Home from '../pages/Home'
import ErrorPage from '../pages/ErrorPage'
import PhoneDetails from '../pages/PhoneDetails'

export const router = createBrowserRouter([
  {
    path: '/',
    Component: MainLayout,
    errorElement: <ErrorPage></ErrorPage>,

    children: [
      {
        index: true,
        path: '/',
        Component: Home,
        loader: () => fetch('../phones.json'),
        hydrateFallbackElement: <p>Loading, Please Wait....</p>,
      },
      {
        path: '/phone-details/:id',
        Component: PhoneDetails,
        loader: () => fetch('../phones.json'),
        hydrateFallbackElement: <p>Loading, Please Wait....</p>,
      },
      {
        path: '/favorites',
        Component: Favorites,
      },

      {
        path: '/about',
        Component: About,
      },
    ],
  },
])
