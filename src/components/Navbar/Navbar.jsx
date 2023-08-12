import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';

import images from '../../constants/images';
import './Navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <nav className='app__navbar'>
      <div className='app__navbar-logo'>
        <img src={images.gericht} alt="logo" />
      </div>
      <ul className='app__navbar-links'>
        <li className='p__opensans'>
          <a href="#home">
            Home
          </a>
        </li>
        <li className='p__opensans'>
          <a href="#pages">
            Pages
          </a>
        </li>
        <li className='p__opensans'>
          <a href="#contact">
            Contact Us
          </a>
        </li>
        <li className='p__opensans'>
          <a href="https://github.com/ShambhavII-Singh">
            Blog
          </a>
        </li>
        <li className='p__opensans'>
          <a href="#landing">
            Landing
          </a>
        </li>
      </ul>
      <div className='app__navbar-login'>
        <a href='#login' className='p__opensans'>LogIn / Registration</a>
      <div />
        <a href='/' className='p__opensans'>Book Table</a>
      </div>
      <div className='app__navbar-smallscreen'>
        <GiHamburgerMenu color='#fff' fontSize={27} onClick={()=>{setToggleMenu(true);}} />
        {toggleMenu &&(
          <>
            <div className='app__navbar-smallscreen_overlay flex__center slide-bottom'>
              <MdOutlineRestaurantMenu  color='#DCCA87' fontSize={27} className='overlay__close' onClick={()=>{setToggleMenu(false);}} />
              <ul className='app__navbar-smallscreen-links'>
            <li className='p__opensans'>
              <a href="#home">
                Home
              </a>
            </li>
            <li className='p__opensans'>
              <a href="#pages">
                Pages
              </a>
            </li>
            <li className='p__opensans'>
              <a href="#contact-us">
                Contact Us
              </a>
            </li>
            <li className='p__opensans'>
              <a href="#blog">
                Blog
              </a>
            </li>
            <li className='p__opensans'>
              <a href="#Landing">
                Landing
              </a>
            </li>
              </ul>
            </div>
          </>
        )}
      </div>
    </nav>
  )
};

export default Navbar;
