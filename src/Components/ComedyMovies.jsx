import React, { useState, useEffect } from "react";
import { fetchComedyMovies } from "../Api";
import MovieCard from "./MovieCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowDown, FaArrowUp } from "react-icons/fa"; // For up arrow

const ComedyMovies = () => {
  const [comedyMovies, setComedyMovies] = useState([]);
  const [showAll, setShowAll] = useState(false); // Track if View All is clicked

  useEffect(() => {
    const getMovies = async () => {
      const data = await fetchComedyMovies();
      setComedyMovies(data);
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
    arrows: false, // Remove left and DownFaArrowDown arrows
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 4 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  const handleViewAllClick = () => {
    setShowAll(!showAll); // Toggle the View All state
  };

  return (
    <div>
      <div className="title-container">
        <h1 className="title">COMEDY MOVIES</h1>
        <button className="view-all-btn" onClick={handleViewAllClick}>
          {showAll ? (
            <>Hide All<FaArrowUp /></> // Show up arrow when movies are expanded
          ) : (
            <>View All <FaArrowDown /></> // Show DownFaArrowDown arrow when movies are collapsed
          )}
        </button>
      </div>

      {/* Show slider if "View All" is not clicked */}
      {!showAll ? (
        <div className="movies-slider">
          <Slider {...settings}>
            {comedyMovies.slice(0, 5).map((movie) => ( // Display only top 5 movies
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </Slider>
        </div>
      ) : (
        // Show all comedy movies if "View All" is clicked
        <div className="movie-list">
          {comedyMovies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ComedyMovies;
