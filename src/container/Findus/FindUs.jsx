import React from 'react';

// import { SubHeading } from '../../components';
import { images } from '../../constants';

const FindUs = () => (
  <div className="app__bg app__wrapper section__padding" id="contact">
    <div className="app__wrapper_info">
      <h1 className="headtext__cormorant" style={{ marginBottom: '3rem' }}>Find Us</h1>
      <div className="app__wrapper-content">
        <p className="p__opensans">Indore: <br /> 3rd floor, Trade House, 301, 14/3, near Hans Travels, South Tukoganj, Indore, Madhya Pradesh 452001</p>
        <br />
        <p className="p__opensans">Hyderabad: <br /> 5th floor, Burfi Ghar Building, Seshadri Marg, near Kun Hyundai, Raja Rajeshwara Nagar, Kondapur, Telangana 500084</p>
        <p className="p__cormorant" style={{ color: '#DCCA87', margin: '2rem 0' }}>Opening Hours</p>
        <p className="p__opensans">Mon - Fri: 10:00 am - 07:00 pm</p>
      </div>
      <a href="https://g.page/bein-legal-llp?share"><button type="button" className="custom__button" style={{ marginTop: '2rem' }}>Visit Us</button></a>
    </div>

    <div className="app__wrapper_img">
      <img src={images.k} alt="finus_img" />
    </div>
  </div>
);

export default FindUs;