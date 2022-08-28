import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram,FiYoutube } from 'react-icons/fi';

import { FooterOverlay, Newsletter } from '../../components';
import { images } from '../../constants/images.js';
import './Footer.css';

const Footer = () => (
  <div className="app__footer section__padding" id="login">
    <FooterOverlay />
    <Newsletter />
    <div className="app__footer-links" id="footer">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contact Us</h1>
        <p className="p__opensans">Delhi & NCR || Hyderabad <br /> Indore || Varanasi</p>
        <p className="p__opensans">+91-9125224455</p>
        <p className="p__opensans">Mail ID:</p>
        <p className="p__opensans">info@beinlegalllp.com</p>
      </div>

      <div className="app__footer-links_logo">
        <p className="p__opensans">&quot;The best way to find yourself is to lose yourself in the service of others.&quot;</p>
        <div className="app__footer-links_icons">
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
          <FiYoutube/>
        </div>
      </div>

      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Working Hours</h1>
        <p className="p__opensans">Mon - Fri: 10:00 am - 07:00 pm</p>
        <p className="p__opensans">Sat - Sun: Closed</p>
      </div>
    </div>

    <div className="footer__copyright">
      <p className="p__opensans">2022 &#169; All Rights reserved @ BeIN Legal LLP </p>
    </div>

  </div>
);

export default Footer;