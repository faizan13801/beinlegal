import React,{useState} from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import images from '../../constants/images';
import './Navbar.css';

const Navbar = () => {
  //usestate hook
  const [toggleMenu, setToggleMenu] =useState(false);
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img  src={images.B} alt="app__logo" />
      </div>
      <ul className="app__navbar-links">
        <li className="p__opensans"><a href="#home">Home</a></li>
        <li className="p__opensans"><a href="#about">Our Company </a></li>
        <li className="p__opensans"><a href="#menu">Services</a></li>
        <li className="p__opensans"><a href="#awards">Article & Updates</a></li>
        <li className="p__opensans"><a href="#contact">Career</a></li>
        <li className="p__opensans"><a href="#connect">Contact</a></li>
      </ul>
      
      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu color="black" fontSize={27} onClick={() => setToggleMenu(true)} />
        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <MdOutlineRestaurantMenu fontSize={27} className="overlay__close" onClick={() => setToggleMenu(false)} />
            <ul className="app__navbar-smallscreen_links">
              <li className="p__opensans"><a href="#home">Home</a></li>
              <li className="p__opensans"><a href="#about">Our Company </a></li>
              <li className="p__opensans"><a href="#menu">Services</a></li>
              <li className="p__opensans"><a href="#awards">Articles & Updates</a></li>
              <li className="p__opensans"><a href="#contact">Career</a></li>
              <li className="p__opensans"><a href="#connect">Contact</a></li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
