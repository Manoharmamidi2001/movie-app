import React, { useState, useEffect } from "react";
import { fetchPopularMovies } from "../Api";
import MovieCard from "../Components/MovieCard";
import DramaMovies from "../Components/DramaMovies";
import HeroCarousel from "../Components/HeroCarousel"; // Import HeroCarousel
import Header from "../Components/Header";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ComedyMovies from "../Components/ComedyMovies";
import LanguageSlider from "../Components/LanguageSlider";
import TVShows from "../Components/TVShows";
import HorrorMovies from "../Components/HorrorMovies";
import ActionMovies from '../Components/ActionMovies'
import TeluguMovies from "../Components/TeluguMovies";
import { FaArrowRight } from "react-icons/fa";
import HindiMovies from "../Components/HindiMovies";
import EnglishMovies from "../Components/EnglishMovies";
import TamilMovies from "../Components/TamilMovies";
import MalayalamMovies from "../Components/MalayalamMovies";
import KannadaMovies from "../Components/KannadaMovies";

const Dashboard = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [heroMovies, setHeroMovies] = useState([]); // Top banner movies
  const [selectedLanguage, setSelectedLanguage] = useState("en"); // Default language

  useEffect(() => {
    const getMovies = async () => {
      const data = await fetchPopularMovies();
      setPopularMovies(data);
      setHeroMovies(data.slice(0, 5)); // Pick first 5 movies for hero section
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
    arrows: false, // Remove left and right arrows
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 4 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="dashboard" style={{background: 'linear-gradient(0deg, rgba(64,210,222,1) 18%, rgba(255,149,149,1) 50%, rgba(246,87,79,1) 80%)'}}>
      <Header />

      {/* Hero Carousel Component */}
      <HeroCarousel heroMovies={heroMovies} />

      {/* Popular Movies Section */}
      <div className="title-container">
              <h1 className="title">POPULAR MOVIES</h1>
              <button className="view-all-btn">
                View All <FaArrowRight />
              </button>
            </div>
      <div className="movies-slider">
        <Slider {...settings}>
          {popularMovies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </Slider>
      </div>

      {/* Drama Movies Section */}
      <DramaMovies />
      <ComedyMovies/>
      <HorrorMovies/>
      <ActionMovies/>
      <LanguageSlider onSelectLanguage={setSelectedLanguage} />
      <TeluguMovies/>
      <HindiMovies/>
      <EnglishMovies/>
      <TamilMovies/>
      <MalayalamMovies/>
      <KannadaMovies/>
      <TVShows/>
    </div>
  );
};

export default Dashboard;