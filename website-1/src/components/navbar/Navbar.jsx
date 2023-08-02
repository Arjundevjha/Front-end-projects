import React, { useState } from 'react'
import { RiMenu3Line, RiClosein } from "react-icons/ri";
import logo from '../../assets/logo.svg';
import './Navbar.css';

// BEM --> Block Element Modifier

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className='gpt3_navbar'>
      <div className='gpt3_navbar-links'>
        <div className='gpt3_navbar-links_logo'>
          <img src={logo} alt='logo' />
        </div>
        <div className='gpt3_navbar-links_container'>
          <p><a href="#home">Home</a></p>
          <p><a href="#wgpt3">What is GPT3</a></p>
          <p><a href="#possibility">Open AI</a></p>
          <p><a href="#features">Case Studies</a></p>
          <p><a href="#blog">Library</a></p>
        </div>
      </div>
      <div className='gpt3_navbar-sign'>
        <p>Sign in</p>
        <button type='button'>Sign up</button>
      </div>
      <div className='gpt_navbar-menu'>
        {toggleMenu 
          ? <RiClosein color='#fff' size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color='#fff' size={27} onClick={() => setToggleMenu(true)} />
      }
      {toggleMenu && (
        <div className='gpt3_navbar-menu_container scale-up-center'>
          <div className='gpt3_navbar-menu_container-links'></div>
        </div>
      )}
      </div>
    </div>
  )
}

export default Navbar