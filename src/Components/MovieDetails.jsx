import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; // Import useParams for URL params
import { fetchMovieDetails } from "../Api"; // Fetch movie details from your API

const MovieDetails = () => {
  const { id } = useParams(); // Get the movie ID from the URL
  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    const getMovieDetails = async () => {
      const data = await fetchMovieDetails(id); // Fetch movie details
      setMovieDetails(data);
    };
    getMovieDetails();
  }, [id]);

  if (!movieDetails) {
    return <div>Loading...</div>;
  }

  const { title, genre, rating, cast, description, imageUrl } = movieDetails;

  return (
    <div className="movie-details" style={{ backgroundImage: `url(${imageUrl})` }}>
      <div className="movie-details-overlay">
        <h1>{title}</h1>
        <p><strong>Genre:</strong> {genre}</p>
        <p><strong>Rating:</strong> {rating}</p>
        <p><strong>Cast:</strong> {cast.join(", ")}</p>
        <p><strong>Description:</strong> {description}</p>
      </div>
    </div>
  );
};

export default MovieDetails;
