import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import { fetchGenres, fetchHeroMovies } from "../Api"; // Import the fetch function
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

const HeroCarousel = () => {
  const [heroMovies, setHeroMovies] = useState([]); // State for storing fetched movies
  const [genres, setGenres] = useState([]); // State for storing genres

  // Fetch Hero Movies on Component Mount
  useEffect(() => {
    const getHeroMovies = async () => {
      const data = await fetchHeroMovies(); // Fetch carousel movies
      setHeroMovies(data); // Set the data in the state
    };
    getHeroMovies();
  }, []);

  // Fetch Genres on Component Mount
  useEffect(() => {
    const getGenres = async () => {
      const genre = await fetchGenres(); // Fetch genres
      setGenres(genre); // Set genres in the state
    };
    getGenres();
  }, []);

  // Function to get genre names from genre IDs
  const getGenreNames = (genreIds) => {
    if (!genres || genres.length === 0) {
      return "Loading genres..."; // Fallback text while genres are loading
    }

    return genreIds
      .map((id) => {
        const genre = genres.find((genre) => genre.id === id);
        return genre ? genre.name : null; // Return genre name or null if not found
      })
      .filter(Boolean) // Filter out null values
      .join(", "); // Join genre names with commas
  };

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
            <img
              src={`${IMAGE_BASE_URL}${movie.backdrop_path}`}
              alt={movie.title}
              className="hero-image"
            />
            <div className="hero-overlay">
              <h2 className="hero-title">{movie.title}</h2>
              <p className="hero-description">{movie.overview}</p>

              {/* Movie Details */}
              <div className="hero-details">
                <div className="hero-detail">
                  <strong>⭐ Rating:</strong> {movie.vote_average.toFixed(1)} / 10
                </div>
                <div className="hero-detail">
                  <strong>🎭 Genres:</strong> {getGenreNames(movie.genre_ids)} {/* Displaying genres */}
                </div>
                <div className="hero-detail">
                  <strong>🌍 Languages:</strong>{" "}
                  {movie.spoken_languages?.map((lang) => lang.english_name).join(", ")}
                </div>
                <div className="hero-detail">
                  <strong>📅 Release Date:</strong> {movie.release_date}
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HeroCarousel;
