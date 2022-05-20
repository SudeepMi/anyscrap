import React from 'react'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Slider1 from "../../assets/slider1.png";
import Slider2 from "../../assets/slider2.png";
import "./style.css"
function Heroslider() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
      };

  return (
   <div className='slider_wrapper'>
        <Slider {...settings}>
          <div className='slider_item'>
            <img src={Slider1} alt="slider1" width="99%" />
          </div>
          <div className='slider_item'>
            <img src={Slider2} alt="slider2" width="99%" />
          </div>
        </Slider>
      </div>
  )
}

export default Heroslider