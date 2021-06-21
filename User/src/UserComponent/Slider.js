import React from "react";
import Slider from "react-slick";
import "D:/project/react_project/logindemo/node_modules/slick-carousel/slick/slick.css";
import "D:/project/react_project/logindemo/node_modules/slick-carousel/slick/slick-theme.css";
import Woman from "../Assets/image/media-desktop-gift-a-celebrity-wish-0-2020-12-4-t-10-31-2.jpg";
import S1 from "../Assets/image/s1.jpg";
import S2 from "../Assets/image/s2.jpg";
import S3 from "../Assets/image/s3.jpg";
import S4 from "../Assets/image/s4.jpg";

import "../css/Slider.css";

const slider = () => {
      var settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 2,
    speed: 2000,
    dots: false,
    adaptiveHeight: true,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    pauseOnHover: true,
  };
  return (
    <div className="div_slider">
      {/* <h2>Movie Masti </h2> */}
      <Slider {...settings}>
        <div className="app_slider">
        <img src={S4} alt="wonder woman" className="slider__img" />
        <div className="overlay" >Tenet</div>
        </div>
        <div className="app_slider">
        <img src={S1} alt="wonder woman" className="slider__img" />
        <div className="overlay" >Wonder Woman</div>
        </div>
        <div className="app_slider">
        <img src={S2} alt="wonder woman" className="slider__img" />
        <div className="overlay" >Tom And Jerry</div>
        </div>
        <div className="app_slider">
        <img src={S3} alt="wonder woman" className="slider__img" />
        <div className="overlay" >Raya and The Last Dragon</div>
        </div>
        <div className="app_slider">
        <img src={Woman} alt="wonder woman" className="slider__img" />
        <div className="overlay" >Guru Randhawa</div>
        </div>
        
      </Slider>
    </div>
  );
};

export default slider;
