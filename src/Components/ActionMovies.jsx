import React, { useState, useEffect } from "react";
import { fetchActionMovies } from "../Api";
import MovieCard from "./MovieCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import AllActionMovies from "./AllActionMovies"; // Import the AllActionMovies component

const ActionMovies = () => {
  const [actionMovies, setActionMovies] = useState([]);
  const [viewAll, setViewAll] = useState(false); // State to toggle view all movies

  useEffect(() => {
    const getMovies = async () => {
      const data = await fetchActionMovies();
      setActionMovies(data);
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
    arrows: false, // Removed left and right arrows
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 4 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div>
      <div className="title-container">
        <h1 className="title">ACTION MOVIES</h1>
        {!viewAll && (
          <button className="view-all-btn" onClick={() => setViewAll(true)}>
            View All <FaArrowDown />
          </button>
        )}

        {viewAll && (
          <button className="view-all-btn" onClick={() => setViewAll(false)}>
            <FaArrowUp /> Hide
          </button>
        )}
      </div>

      {viewAll ? (
        <AllActionMovies /> // Show all movies when View All is clicked
      ) : (
        <div className="movies-slider">
          <Slider {...settings}>
            {actionMovies.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </Slider>
        </div>
      )}
    </div>
  );
};

export default ActionMovies;
