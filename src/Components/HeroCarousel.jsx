import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

const HeroCarousel = ({ heroMovies }) => {
  const heroSettings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <div className="hero-slider">
      <Slider {...heroSettings}>
        {heroMovies.map((movie) => (
          <div key={movie.id} className="hero-slide">
            <img src={`${IMAGE_BASE_URL}${movie.backdrop_path}`} alt={movie.title} />
            <div className="hero-overlay">
              <h2>{movie.title}</h2>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HeroCarousel;
