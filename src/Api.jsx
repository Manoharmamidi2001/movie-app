import axios from "axios";

const API_KEY = "f593c93464978e5aa75c9d034b9519ce";
const BASE_URL = "http://api.themoviedb.org/3";


// Fetch Popular Movies
export const fetchPopularMovies = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/movie/popular`, {
      params: { api_key: API_KEY }
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

// Fetch Telugu Movies
export const fetchTeluguMovies = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/discover/movie`, {
      params: {
        api_key: API_KEY,
        with_original_language: "te", // Telugu language code
      },
    });
    return response.data.results;
  } catch (error) {
    console.error("Error fetching Telugu movies:", error);
    return [];
  }
};

// Fetch Hindi Movies
export const fetchHindiMovies = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/discover/movie`, {
      params: {
        api_key: API_KEY,
        with_original_language: "hi", // Hindi language code
      },
    });
    return response.data.results;
  } catch (error) {
    console.error("Error fetching Hindi movies:", error);
    return [];
  }
};

// Fetch English Movies
export const fetchEnglishMovies = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/discover/movie`, {
      params: {
        api_key: API_KEY,
        with_original_language: "en", // English language code
      },
    });
    return response.data.results;
  } catch (error) {
    console.error("Error fetching English movies:", error);
    return [];
  }
};

// Fetch Tamil Movies
export const fetchTamilMovies = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/discover/movie`, {
      params: {
        api_key: API_KEY,
        with_original_language: "ta", // Tamil language code
      },
    });
    return response.data.results;
  } catch (error) {
    console.error("Error fetching Tamil movies:", error);
    return [];
  }
};

// Fetch Malayalam Movies
export const fetchMalayalamMovies = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/discover/movie`, {
      params: {
        api_key: API_KEY,
        with_original_language: "ml", // Malayalam language code
      },
    });
    return response.data.results;
  } catch (error) {
    console.error("Error fetching Malayalam movies:", error);
    return [];
  }
};

// Fetch Kannada Movies
export const fetchKannadaMovies = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/discover/movie`, {
      params: {
        api_key: API_KEY,
        with_original_language: "kn", // Kannada language code
      },
    });
    return response.data.results;
  } catch (error) {
    console.error("Error fetching Kannada movies:", error);
    return [];
  }
};

export const fetchHeroMovies = async () => {
  try {
    const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US`);
    const data = await response.json();

    // Fetch additional details for each movie
    const detailedMovies = await Promise.all(
      data.results.map(async (movie) => {
        const detailsResponse = await fetch(`${BASE_URL}/movie/${movie.id}?api_key=${API_KEY}&language=en-US`);
        const details = await detailsResponse.json();
        return { ...movie, ...details };
      })
    );

    return detailedMovies;
  } catch (error) {
    console.error("Error fetching hero movies:", error);
    return [];
  }
};

export const fetchGenres = async () => {
  const response = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`);
  const data = await response.json();
  return data.genres; // This returns the genre list [{ id, name }, { id, name }, ...]
};


export const fetchMovies = async () => {
  const response = await fetch("https://api.example.com/movies"); // Replace with actual API URL
  const data = await response.json();
  return data.map((movie) => ({
    id: movie.id,
    title: movie.title,
    poster: movie.poster,
    trailer: movie.trailer, // Ensure trailer URL is fetched
    genre: movie.genre,
  }));
};
