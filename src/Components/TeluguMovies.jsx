import React, { useState, useEffect } from "react";
import { fetchTeluguMovies } from "../Api";
import MovieCard from "./MovieCard";
import Slider from "react-slick";
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TeluguMovies = () => {
  const [teluguMovies, setTeluguMovies] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getMovies = async () => {
      const data = await fetchTeluguMovies();
      setTeluguMovies(data);
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
    arrows: false,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 4 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div>
      {/* Title & View All Button in a flex row */}
      <div className="title-container">
        <h1 className="title">TELUGU MOVIES</h1>
        <button className="view-all-btn">
          View All <FaArrowRight />
        </button>
      </div>

      <div className="movies-slider">
        <Slider {...settings}>
          {teluguMovies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </Slider>
      </div>      
    </div>
  );
};

export default TeluguMovies;