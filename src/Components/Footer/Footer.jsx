import React from 'react'
import './Footer.css'
import footerlogo from '../../assets/logo.png'
const Footer = () => {
  return (
    <>
      <div className="footContainer">
        <div className="footlinks">
        <div className="logo overview">
          <img src={footerlogo} alt="" />
        </div>
        <div className="explore overview">
          <h3>Explore</h3>
          <ul>
            <li>About Us</li>
            <li>Blog</li>
            <li>Gallery</li>
            <li>Projects</li>
            
          </ul>
        </div>
        <div className="socials overview">
        <h3>Follow</h3>
          <ul>
            <li>About Us</li>
            <li>Blog</li>
            <li>Gallery</li>
            <li>Projects</li>
            
          </ul>
        </div>
        <div className="store overview">
        <h3>Store</h3>
          <ul>
            <li>About Us</li>
            
            
          </ul>
        </div>
        </div>
  
      </div>
    </>
  )
}

export default Footer
