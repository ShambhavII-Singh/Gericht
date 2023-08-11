import React from 'react';

import './Header.css';
import { SubHeading } from '../../components'; 
import { images } from '../../constants';

const Header = () => (
  <div className='app__header app__wrapper section__padding' id='#home'>
    <div className='app__wrapper_info'>
      <SubHeading title="Chase The New Flavour" />
      <h1 className='app__header-h1'>The key to fine dining</h1>
      <p className='app__header-p'>Commodo est veniam consectetur duis.<br />Non nulla pariatur labore in.<br />Ut mollit laboris pariatur enim nisi laborum veniam.</p>
      <button type="button" className="custom__button">Know More</button>
    </div>
    <div className='app__wrapper_img'>
      <img src={images.welcome} alt="welcome" />
    </div>
  </div>
);

export default Header;
