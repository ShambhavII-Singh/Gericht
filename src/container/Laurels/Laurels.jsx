import React from 'react';
import { SubHeading } from '../../components';
import { images } from '../../constants';

import './Laurels.css';

const Laurels = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_info">
      <SubHeading title="Awards & Recognitions" />
      <h1 className="headtext__cormorant">Our Laurels</h1>
      <div className="app__laurel-content">
        <div className="app__laurel-content_column1">
          <ul>
            <li className='laurel-content_award'>
              <img src={ images.award02 } alt="award2" />
              <p className="p__opensans">
                <span className="p__cormorant" style={{ color: '#DCCA87' }}>Bib Gourmond</span>
                <br/>Voluptate occaecat reprehenderit aute commodo eiusmod.
              </p>
            </li>
            <li className='laurel-content_award'>
              <img src={ images.award05 } alt="award5" />
              <p className="p__opensans">
                <span className="p__cormorant" style={{ color: '#DCCA87' }}>AA Hospitality</span>
                <br/>Minim veniam culpa enim mollit anim minim cillum quis eu dolore.
              </p>
            </li>
          </ul>
        </div>
        <div className="app__laurel-content_column2">
          <ul>
            <li className='laurel-content_award'>
              <img src={ images.award01 } alt="award1" />
              <p className="p__opensans">
                <span className="p__cormorant" style={{ color: '#DCCA87' }}>Rising Star</span>
                <br/>Minim aliquip sint quis cillum cillum ut Lorem duis anim.
              </p>
            </li>
            <li  className='laurel-content_award'>
              <img src={ images.award03 } alt="award3" />
              <p className="p__opensans">
                <span className="p__cormorant" style={{ color: '#DCCA87' }}>Outstanding Chef</span>
                <br/>Ipsum quis laboris mollit voluptate ex veniam do nulla.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div className="app__wrapper_img">
      <img src={images.laurels} alt="chef_image" />
    </div>
  </div>
);

export default Laurels;
