import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer-container'>
      <hr />
        <p>&copy; {new Date().getFullYear()} Umba Create, All rights reserved </p>
        
    </div>
  )
}

export default Footer
