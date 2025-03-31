import React from "react";
import { FaUserCircle } from "react-icons/fa"; // Profile icon

const Header = () => {
  return (
    <div className="header">
      <div className="categories">
        <button>Home</button>
        <button>Movies</button>
        <button>Tv Shows</button>
        <button>Live</button>
        <button>News</button>
        <button>Sports</button>
      </div>
      <FaUserCircle className="profile-icon" />
    </div>
  );
};

export default Header;
