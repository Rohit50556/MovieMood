import React from "react";
import Slider from "react-slick";
import "D:/project/react_project/logindemo/node_modules/slick-carousel/slick/slick.css";
import "D:/project/react_project/logindemo/node_modules/slick-carousel/slick/slick-theme.css";
import Woman from "../Assets/image/media-desktop-gift-a-celebrity-wish-0-2020-12-4-t-10-31-2.jpg";
import "../css/Slider.css";
// import "../../node_modules/slick-carousel/slick/slick.css"
// import "../../node_modules/slick-carousel/slick/slick-theme.css"
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
        {/* <div className="app_slider"> */}
        <img src={Woman} alt="wonder woman" className="slider__img" />
        {/* </div> */}
        {/* <div className="app_slider"> */}
        <img src={Woman} alt="wonder woman" className="slider__img"></img>
        {/* </div> */}
        {/* <div className="app_slider"> */}
        <img src={Woman} alt="wonder woman" className="slider__img"></img>
        {/* </div> */}
        {/* <div className="app_slider"> */}
        <img src={Woman} alt="wonder woman" className="slider__img"></img>
        {/* </div> */}
        {/* <div className="app_slider"> */}
        <img src={Woman} alt="wonder woman" className="slider__img"></img>
        {/* </div> */}
        {/* <div className="app_slider"> */}
        <img src={Woman} alt="wonder woman" className="slider__img"></img>
        {/* </div> */}
      </Slider>
    </div>
  );
};

export default slider;
