import React from 'react';
import Slider from 'react-slick';

import './Carousel.scss';
import 'slick-carousel/slick/slick.scss';
import 'slick-carousel/slick/slick-theme.scss';

const Carousel = ({ images }) => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3000,
    cssEase: 'linear',
    arrows: false,
  };

  return (
    <div className="project-container">
      <Slider {...settings}>
        {images.map((pr, id) => (
          <div key={id} className="carousel-img">
            <img src={`http://localhost:8000/image/${pr}`} alt="rocket" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
