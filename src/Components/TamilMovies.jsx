import React, { useState, useEffect } from "react";
import { fetchTamilMovies } from "../Api";
import MovieCard from "./MovieCard";
import Slider from "react-slick";
import { FaArrowDown, FaArrowUp } from "react-icons/fa"; // Updated icons
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TamilMovies = () => {
  const [tamilMovies, setTamilMovies] = useState([]);
  const [showAll, setShowAll] = useState(false); // Toggle between slider & full list

  useEffect(() => {
    const getMovies = async () => {
      const data = await fetchTamilMovies();
      setTamilMovies(data);
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
      <div className="title-container">
        <h1 className="title">TAMIL MOVIES</h1>
        <button className="view-all-btn" onClick={handleViewAllClick}>
          {showAll ? (
            <>
              Hide All <FaArrowUp /> {/* Up arrow when expanded */}
            </>
          ) : (
            <>
              View All <FaArrowDown /> {/* Down arrow when collapsed */}
            </>
          )}
        </button>
      </div>

      {!showAll ? (
        <div className="movies-slider">
          <Slider {...settings}>
            {tamilMovies.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </Slider>
        </div>
      ) : (
        <div className="movie-list">
          {tamilMovies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      )}
    </div>
  );
};

export default TamilMovies;
