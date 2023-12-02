import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";
import logo from "./assets/logo.webp";

const Navbar = () => {
  return (
    <>
      <div className="pageHeader__container">
        <div className="pageHeader__container--left">
          <Link to="/about">
            <img src={logo} alt="BesTop Logo" className="logo__img"/>
          </Link>
        </div>
        <nav className="pageHeader__container--right">
          <ul className="navbar__container">
            <li className="navbar__item">
              <Link to="/about" className="navbar__link">
                About Us
              </Link>
            </li>
            <li className="navbar__item">
              <Link to="/owner" className="navbar__link">
                Owner Services
              </Link>
            </li>
            <li className="navbar__item">
              <Link to="/tenant" className="navbar__link">
                Tenant Services
              </Link>
            </li>
            <li className="navbar__item">
              <Link to="/rentals" className="navbar__link">
                Available Rentals
              </Link>
            </li>
            <li className="navbar__item">
              <Link to="/contact" className="navbar__link">
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
