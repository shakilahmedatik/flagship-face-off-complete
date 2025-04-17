import React from 'react'
import Container from './shared/Container'

const Footer = () => {
  return (
    <footer className='footer sm:footer-horizontal footer-center bg-base-200 shadow-sm text-base-content py-4'>
      <Container>
        <aside>
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved by
            FlagshipFaceOff Ltd
          </p>
        </aside>
      </Container>
    </footer>
  )
}

export default Footer
