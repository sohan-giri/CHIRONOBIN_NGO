import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import styled from 'styled-components';

const ImgSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
    };
  
    return (
      <Slider {...settings}>
        <div>
        
          <img src="/images/s2.jpg" alt="Image 1" />
        </div>
        <div>
          <img src="/images/s4.jpg" alt="Image 2" />
        </div>
        <div>
          <img src="/images/s5.jpg" alt="Image 3" />
        </div>
        <div>
          <img src="/images/s6.jpg" alt="Image 3" />
        </div>
        
        {/* Add more images as needed */}
      </Slider>
    );
  }
  
  export default ImgSlider;
