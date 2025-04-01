import React, { useState, useEffect } from "react";
import { fetchPopularTVShows } from "../Api";
import MovieCard from "./MovieCard"; // Reusing MovieCard for TV shows
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";

const TVShows = () => {
  const [tvShows, setTVShows] = useState([]);
  const [showAll, setShowAll] = useState(false); // Toggle between slider & full list

  useEffect(() => {
    const getTVShows = async () => {
      const data = await fetchPopularTVShows();
      setTVShows(data);
    };
    getTVShows();
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
        <h1 className="title">TV SHOWS</h1>
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
            {tvShows.map((show) => (
              <MovieCard key={show.id} movie={show} />
            ))}
          </Slider>
        </div>
      ) : (
        <div className="movie-list">
          {tvShows.map((show) => (
            <MovieCard key={show.id} movie={show} />
          ))}
        </div>
      )}
    </div>
  );
};

export default TVShows;
