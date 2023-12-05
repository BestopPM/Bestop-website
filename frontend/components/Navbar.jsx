import React, {lazy, Suspense} from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";

const LazyLogo = lazy(() => import(
  './lazyComponents/lazyLogo'
));

const Navbar = () => {
  return (
    <>
      <div className="pageHeader__container">
        <div className="pageHeader__container--left">
          <Link to="/about">
            <Suspense fallback = 
              {<div>Logo loading please wait...</div>}>
              <LazyLogo />
          </Suspense>
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
