import React from "react";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card">
      <img src={`${IMAGE_BASE_URL}${movie.poster_path}`} alt={movie.title} />
      <div className="movie-title">
        <h3>{movie.title || movie.name}</h3>
        <div className="movie-rating">
          <strong>⭐</strong>{movie.vote_average.toFixed(1)} / 10
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
