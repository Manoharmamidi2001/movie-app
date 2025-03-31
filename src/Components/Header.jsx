import React from "react";
import { FaUserCircle } from "react-icons/fa"; // Profile icon

const Header = () => {
  return (
    <div className="header">
      <div className="categories">
        <button>Telugu</button>
        <button>Hindi</button>
        <button>English</button>
      </div>
      <FaUserCircle className="profile-icon" />
    </div>
  );
};

export default Header;
