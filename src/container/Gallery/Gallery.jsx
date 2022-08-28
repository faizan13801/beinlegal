import React from 'react';
import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Gallery.css';

const Gallery = () => {
  const scrollRef = React.useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;

    if (direction === 'left') {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  };

  return (
    <div className="app__gallery flex__center">
      <div className="app__gallery-content">
        <SubHeading title="" />
        <h1 className="headtext__cormorant">Gallery Overview</h1>
        <p className="p__opensans" style={{ color: '#AAAAAA', marginTop: '2rem' }}>Here is an overview of our office and our beloved team members who have been an integrated part of our organisation and have contributed alot to it.</p>
        <a href="https://www.google.com/maps/place/BeIN+Legal+LLP/@22.7174632,75.8780779,3a,75y,90t/data=!3m8!1e2!3m6!1sAF1QipOc5KMpk4ZZ22cvXS__Q91x2JZgFoPK7P_EhvNP!2e10!3e12!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipOc5KMpk4ZZ22cvXS__Q91x2JZgFoPK7P_EhvNP%3Dw114-h86-k-no!7i1160!8i868!4m14!1m8!3m7!1s0x3962fdecfc8571d1:0xc49def6dacfdb81a!2sBeIN+Legal+LLP!8m2!3d22.7176828!4d75.8780402!14m1!1BCgIYEg!3m4!1s0x3962fdecfc8571d1:0xc49def6dacfdb81a!8m2!3d22.7176828!4d75.8780402#"><button type="button" className="custom__button">View more</button></a>
      </div>
      <div className="app__gallery-images">
        <div className="app__gallery-images_container" ref={scrollRef}>
          {[images.g1, images.g2, images.g3, images.g4, images.g5, images.g6].map((image, index) => (
            <div className="app__gallery-images_card flex__center" key={`gallery_image-${index+1}`}>
              <img src={image} alt="gallery_image" />
            </div>
          ))}
        </div>
        <div className="app__gallery-images_arrows">
          <BsArrowLeftShort className="gallery__arrow-icon" onClick={() => scroll('left')} />
          <BsArrowRightShort className="gallery__arrow-icon" onClick={() => scroll('right')} />
        </div>
      </div>
    </div>
  );
};

export default Gallery;