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
    <div className="dashboard" style={{background:'linear-gradient(90deg, rgba(73,73,72,1) 0%, rgba(94,89,80,1) 50%, rgba(89,88,86,1) 100%)'}}>
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