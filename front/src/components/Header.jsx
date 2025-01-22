import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <div className="header-container align-element">
        {/* USER */}
        {/* LINKS */}
        <div className="links-container">
          <Link to="/login" className="link link-hover text-sm sm:text-base">
            Sign in / Guest
          </Link>
          <Link to="/register" className="link link-hover text-sm sm:text-base">
            Create Account
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
