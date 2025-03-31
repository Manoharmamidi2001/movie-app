import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { languages } from "../Data/Languages";

const LanguageSlider = ({ onSelectLanguage }) => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false, // Remove left and right arrows
        responsive: [
          { breakpoint: 1024, settings: { slidesToShow: 4 } },
          { breakpoint: 768, settings: { slidesToShow: 2 } },
          { breakpoint: 480, settings: { slidesToShow: 1 } },
        ],
      };      
  return (
    <div className="language-slider">
      <Slider {...settings}>
        {languages.map((lang) => (
          <div
            key={lang.code}
            className="language-card"
            style={{ background: lang.gradient }}
            onClick={() => onSelectLanguage(lang.code)}
          ><br />
            <h2 style={{color:'white', display:'flex', justifyContent:'center'}}>{lang.name}</h2>
          </div>
        ))}
      </Slider>
    </div>
  );
}
export default LanguageSlider;
