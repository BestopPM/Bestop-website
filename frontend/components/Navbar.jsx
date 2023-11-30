import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="navbar__container">
          <Link to="/" className="navbar__item">
            Logo
          </Link>
          <Link to="/about" className="navbar__item">
            About Us
          </Link>
          <Link to="/owner" className="navbar__item">
            Owner Services
          </Link>
          <Link to="/tenant" className="navbar__item">
            Tenant Services
          </Link>
          <Link to="/rentals" className="navbar__item">
            Available Rentals
          </Link>
          <Link to="/contact" className="navbar__item">
            Contact Us
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
