import React, { useState } from 'react'
import './Navbar.css'
import menu from '../../assets/menu.png'
import remove from '../../assets/close.png'
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'


const Navbar = () => {
const[collapse, setCollapse ] = useState(false)

  return (
   <>
   <div className={collapse===false?"navContainer" :"showNavContainer"}>
  
<div className="navLinks">
<div className="logo">
  <img src={logo} alt="" />
</div>
<div className="pageLinks">
  <ul>
    <li><Link to="/"  onClick={() =>{setCollapse(false)}}>Home</Link></li>
    <li><Link to="/about"  onClick={() =>{setCollapse(false)}}>About Us</Link></li>
    <li><Link to="/projects"  onClick={() =>{setCollapse(false)}}>Projects</Link></li>
    <li><Link to="/gallery"  onClick={() =>{setCollapse(false)}}>Gallery</Link></li>
  <img src={remove} alt="" className='removeIcon' onClick={() =>{setCollapse(false)}}/>
  </ul>
</div>
    </div>
    <div className="navMenuImg">
      <img src={menu} alt="" onClick={() =>{setCollapse(true)}} className='menuIcon' />
    
    </div>
   </div>
   </>
  )
}

export default Navbar
