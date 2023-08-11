import React from 'react';

import './MenuItem.css';

const MenuItem = ({ title, price, tags }) => (
  <div className='app__menuItem'>
    <div className='menuItem__heading'>
      <div className='menuItem__heading-title'>
        <p className='p__cormorant' style={{ color: '#DCCA87' }}>
          { title }
        </p>
      </div>
      <div className='menuItem__heading-dash' />
      <div className='menuItem__heading-price'>
        <p className='p__cormorant' style={{ color: '#DCCA87' }}>
          { price }
        </p>
      </div>
    </div>
    <div className='menuItem__subtitle'>
      <p className="p__opensans" style={{ color: '#AAAAAA' }}>
        { tags }
      </p>
    </div>
  </div>
);

export default MenuItem;
