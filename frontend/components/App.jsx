import React from "react";
import Navbar from "./Navbar";
import { Route, Routes } from "react-router-dom";

//import pages
import About from "./pages/About";
import Contact from "./pages/Contact";
import Owner from "./pages/Owner";
import Tenant from "./pages/Tenant";
import Rentals from "./pages/Rentals";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
      <Route path="/" element={<About />} />
        <Route path="/about" element={<About />} />
        <Route path="/owner" element={<Owner />} />
        <Route path="/tenant" element={<Tenant />} />
        <Route path="/rentals" element={<Rentals />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
};

export default App;
