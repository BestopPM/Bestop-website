import React from "react";
import Navbar from "./Navbar";
import { Route, Routes } from "react-router-dom";
import "./App.scss"

//import pages
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Owner from "./Pages/Owner";
import Tenant from "./Pages/Tenant";
import Rentals from "./Pages/Rentals";
import Submit from "./Pages/Submit";
import RentalsNone from "./Pages/RentalsNone";


const App = () => {
  return (
    <>
      <div className="site">
        <div className="site__content">
          <Navbar />
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/about" element={<About />} />
            <Route path="/owner" element={<Owner />} />
            <Route path="/tenant" element={<Tenant />} />
            <Route path="/rentals" element={<RentalsNone />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/submitted" element={<Submit />} />
          </Routes>
        </div>
        <footer>
          <p>BRE License #01238854&nbsp;&nbsp;|&nbsp;&nbsp;NMLS License #208625
          </p>
        </footer>
      </div>
    </>
  );
};

export default App;
