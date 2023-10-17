import React from 'react'

const Navbar = () => {
  return(
    <nav>
      <h1>Logo</h1>
      <div>
        <a href="/about" className="">
          About Us
        </a>
        <a href="/owner" className="">
          Owner Services
        </a>
        <a href="/tenant" className="">
          Tenant Services
        </a>
        <a href="/rentals" className="">
          Available Rentals
        </a>
        <a href="/contact" className="">
          Contact Us
        </a>
      </div>
    </nav>
  )
}

export default Navbar