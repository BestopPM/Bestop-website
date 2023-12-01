import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <>
      <div className="pageHeader">
        <div className="logo">
          <Link to="/about" className="logo__link">
            <h1>Logo</h1>
          </Link>
        </div>
        <nav className="navbar">
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
