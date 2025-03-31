import React, { useState, useEffect } from "react";
import { fetchDramaMovies } from "../Api";
import MovieCard from "./MovieCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowRight } from "react-icons/fa";

const DramaMovies = () => {
  const [dramaMovies, setDramaMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      const data = await fetchDramaMovies();
      setDramaMovies(data);
    };
    getMovies();
  }, []);

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
    <div>
    <div className="title-container">
            <h1 className="title">DRAMA MOVIES</h1>
            <button className="view-all-btn">
              View All <FaArrowRight />
            </button>
    </div>
      <div className="movies-slider">
        <Slider {...settings}>
          {dramaMovies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default DramaMovies;
