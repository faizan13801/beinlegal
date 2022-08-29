/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-undef */
import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Header.css';

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="DIGIFIC SOLUTION" />
      <h1 className="app__header-h1">The Ultimate Solution To Your Problem</h1>
      <button type="button" className="custom__button">Explore Us</button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.p} alt="header_img" />
    </div>  
  </div>
);

export default Header;
