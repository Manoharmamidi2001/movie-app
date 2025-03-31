import axios from "axios";

const API_KEY = "f593c93464978e5aa75c9d034b9519ce";
const BASE_URL = "https://api.themoviedb.org/3";

// Fetch Popular Movies
export const fetchPopularMovies = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/movie/popular`, {
      params: { api_key: API_KEY },
    });
    return response.data.results;
  } catch (error) {
    console.error("Error fetching popular movies:", error);
    return [];
  }
};

// Fetch Drama Movies
export const fetchDramaMovies = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/discover/movie`, {
      params: {
        api_key: API_KEY,
        with_genres: 18, // Drama genre ID
      },
    });
    return response.data.results;
  } catch (error) {
    console.error("Error fetching Drama movies:", error);
    return [];
  }
};

// Fetch Comedy Movies
export const fetchComedyMovies = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/discover/movie`, {
      params: {
        api_key: API_KEY,
        with_genres: 35, // Comedy genre ID
      },
    });
    return response.data.results;
  } catch (error) {
    console.error("Error fetching comedy movies:", error);
    return [];
  }
};

// Fetch Popular TV Shows
export const fetchPopularTVShows = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/tv/popular`, {
      params: { api_key: API_KEY },
    });
    return response.data.results;
  } catch (error) {
    console.error("Error fetching TV shows:", error);
    return [];
  }
};

// Fetch Horror Movies
export const fetchHorrorMovies = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/discover/movie`, {
      params: {
        api_key: API_KEY,
        with_genres: 27, // Horror genre ID
      },
    });
    return response.data.results;
  } catch (error) {
    console.error("Error fetching Horror movies:", error);
    return [];
  }
};

// Fetch Action Movies
export const fetchActionMovies = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/discover/movie`, {
      params: {
        api_key: API_KEY,
        with_genres: 28, // Action genre ID
      },
    });
    return response.data.results;
  } catch (error) {
    console.error("Error fetching Action movies:", error);
    return [];
  }
};
