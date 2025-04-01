import React, { useState, useEffect } from "react";
import { fetchEnglishMovies } from "../Api";
import MovieCard from "./MovieCard";
import Slider from "react-slick";
import { FaArrowDown, FaArrowUp } from "react-icons/fa"; // Added FaArrowUp for "Hide All" arrow
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const EnglishMovies = () => {
  const [englishMovies, setEnglishMovies] = useState([]);
  const [showAll, setShowAll] = useState(false); // State to toggle between showing all or slider

  useEffect(() => {
    const getMovies = async () => {
      const data = await fetchEnglishMovies();
      setEnglishMovies(data);
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

  const handleViewAllClick = () => {
    setShowAll(!showAll);
  };

  return (
    <div>
      {/* English Movies Section */}
      <div className="title-container">
        <h1 className="title">ENGLISH MOVIES</h1>
        <button className="view-all-btn" onClick={handleViewAllClick}>
          {showAll ? (
            <>
              Hide All <FaArrowUp /> {/* Arrow pointing up when showing all movies */}
            </>
          ) : (
            <>
              View All <FaArrowDown /> {/* Arrow pointing DownFaArrowDown initially */}
            </>
          )}
        </button>
      </div>

      {/* Show slider or all movies based on showAll state */}
      {!showAll ? (
        <div className="movies-slider">
          <Slider {...settings}>
            {englishMovies.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </Slider>
        </div>
      ) : (
        <div className="movie-list">
          {englishMovies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      )}
    </div>
  );
};

export default EnglishMovies;