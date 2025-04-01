import React, { useState, useEffect } from "react";
import { fetchActionMovies } from "../Api";
import MovieCard from "./MovieCard";

const AllActionMovies = () => {
  const [actionMovies, setActionMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      const data = await fetchActionMovies();
      setActionMovies(data);
    };
    getMovies();
  }, []);

  return (
    <div>
      <div className="movie-list">
        {actionMovies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default AllActionMovies;
