import React from 'react';
import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Explore.css';

const Explore = () => (
  <div className="app__newsletter">
    <div className="app__newsletter-heading">
      <SubHeading title="Newsletter" />
      <h1 className="headtext__cormorant">Explore Us</h1>
      <p className="p__opensans">Get Connected!</p>
    </div>
    <div className="app__newsletter-input flex__center">
    <input type="email" placeholder="Enter your Name" />
    <br/>
    <input type="email" placeholder="Enter your Phonenumber"/>
      <input type="email" placeholder="Enter your email address" />
      <button type="button" className="custom__button">Submit</button>
    </div>
  </div>
);

export default Explore;