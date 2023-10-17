import React from 'react'
import { Link } from "react-router-dom"

const Navbar = () => {
  return(
    <nav>
      <h1>Logo</h1>
      <div>
        <Link to="/about">
          About Us
        </Link>
        <Link to="/owner">
          Owner Services
        </Link>
        <Link to="/tenant">
          Tenant Services
        </Link>
        <Link to="/rentals">
          Available Rentals
        </Link>
        <Link to="/contact">
          Contact Us
        </Link>
      </div>
    </nav>
  )
}

export default Navbar