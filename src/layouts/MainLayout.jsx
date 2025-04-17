import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router'
import Footer from '../components/Footer'
import Container from '../components/shared/Container'

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Container>
        <div className='min-h-[calc(100vh-117px)] py-8'>
          <Outlet />
        </div>
      </Container>
      <Footer />
    </>
  )
}

export default MainLayout
