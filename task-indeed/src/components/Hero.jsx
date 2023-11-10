import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../App.css'
const HeroCarousel = () => {
  const carouselStyle = {
    margin: '10px',
    width: 'calc(100% - 20px)',
  };

  return (
    <Carousel autoPlay interval={60000} infiniteLoop showStatus={false} showThumbs={false} style={carouselStyle}>
      <div className='hero'>
        <img src={require('./img/image.png')} alt="Slide 1" />
      </div>
      <div className='hero'>
        <img src={require('./img/image.png')} alt="Slide 2" />
      </div>
      <div className='hero'>
        <img src={require('./img/image.png')} alt="Slide 3" />
      </div>
    </Carousel>
  );
};

export default HeroCarousel;
