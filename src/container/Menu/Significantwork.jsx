import React from 'react';

import { SubHeading, MenuItem } from '../../components';
import { data, images } from '../../constants';
import './SpecialMenu.css';

const Significantwork = () => (
  <div className="app__specialMenu flex__center section__padding" id="menu">
  <div className="app__specialMenu-title">
    <SubHeading title="Menu that fits your palatte" />
    <h1 className="headtext__cormorant">Our Services</h1>
  </div>

  <div className="app__specialMenu-menu">
    <div className="app__specialMenu-menu_wine  flex__center">
      <p className="app__specialMenu-menu_heading">Services</p>
      <div className="app__specialMenu_menu_items">
        <ul>
          <li><h2>Legal Compliance & Auditing</h2></li>
          <li><h2>Industrial & Labour Compliance</h2></li>
          <li><h2>Industrial Training</h2></li>
          <li><h2>Policy Drafting</h2></li>
        </ul>
      </div>
    </div>

    <div className="app__specialMenu-menu_img">
      <img src={images.bb} alt="menu__img" />
    </div>

    <div className="app__specialMenu-menu_cocktails  flex__center">
      <p className="app__specialMenu-menu_heading">Services</p>
      <div className="app__specialMenu_menu_items">
        <ul>
          <li><h2>Incorporation & Registration</h2></li>
          <li><h2>Intellectual Property Rights</h2></li>
          <li><h2>Contract Management</h2></li>
          <li><h2>Corporate Litigation</h2></li>
        </ul>
      </div>
    </div>
  </div>

  <div style={{ marginTop: 15 }}>
    <button type="button" className="custom__button">View More</button>
  </div>
</div>
);

export default Significantwork;
