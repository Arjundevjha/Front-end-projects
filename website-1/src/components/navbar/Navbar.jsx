import React from 'react'
import { RiMenu3Line, RiClosein } from "react-icons/ri";
import './Navbar.css'

// BEM --> Block Element Modifier

const Navbar = () => {
  return (
    <div className='gpt4_navbar'>
      <div className='gpt4_navbar-links'>
        <div className='gpt4_navbar-links_logo'>
          <img src={logo} alt='logo' />
        </div>
      </div>
    </div>
  )
}

export default Navbar