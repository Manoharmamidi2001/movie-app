import React from "react";
import DramaMovies from "../Components/DramaMovies";
import HeroCarousel from "../Components/HeroCarousel"; // Import HeroCarousel
import Header from "../Components/Header";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ComedyMovies from "../Components/ComedyMovies";
import LanguageSlider from "../Components/LanguageSlider";
import TVShows from "../Components/TVShows";
import HorrorMovies from "../Components/HorrorMovies";
import ActionMovies from '../Components/ActionMovies'
import TeluguMovies from "../Components/TeluguMovies";
import HindiMovies from "../Components/HindiMovies";
import EnglishMovies from "../Components/EnglishMovies";
import TamilMovies from "../Components/TamilMovies";
import MalayalamMovies from "../Components/MalayalamMovies";
import KannadaMovies from "../Components/KannadaMovies";
import PopularMovies from "../Components/PopularMovies";
import Footer from "../Components/Footer";

const Dashboard = () => {
  return (
    <div className="dashboard" style={{background: 'linear-gradient(0deg, rgb(0, 140, 255) 18%, rgb(249, 119, 119) 50%, rgb(63, 49, 255) 80%)'}}>
      <Header />

      {/* Hero Carousel Component */}
      <HeroCarousel/>

      <PopularMovies/>
      <DramaMovies />
      <ComedyMovies/>
      <HorrorMovies/>
      <ActionMovies/>
      <LanguageSlider/>
      <TeluguMovies/>
      <HindiMovies/>
      <EnglishMovies/>
      <TamilMovies/>
      <MalayalamMovies/>
      <KannadaMovies/>
      <TVShows/>
      <Footer/>
    </div>
  );
};

export default Dashboard;