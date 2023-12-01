import React, { useState, useEffect, useRef } from "react";
import ShowingModal from "../ShowingModal/ShowingModal";
// import "../../stylesheet/styles.css";

const Rentals = () => {
  const [isShowingModalOpen, setShowingModalOpen] = useState(false);

  const handleOpenShowingModal = () => {
    setShowingModalOpen(true);
  };

  const handleCloseShowingModal = () => {
    setShowingModalOpen(false);
  };

  const handleFormSubmit = () => {
    handleCloseShowingModal();
  };

  return (
    <>
      <header className="header">Available Rentals</header>
      <div id="contact">
        <div id="rental">
          <div id="rentalImage">
            <img src=""></img>
          </div>
          <div id="rentalInfo">
            <p>Rental Price: </p>
            <p>Property Address: </p>
            <a href="https://www.zillow.com/">Additional Details</a>
            <button id="showingButton" onClick={handleOpenShowingModal}>
              Request a Showing
            </button>
            <ShowingModal
              isOpen={isShowingModalOpen}
              onSubmit={handleFormSubmit}
              onClose={handleCloseShowingModal}
            />
          </div>
        </div>
      </div>
      <a id="rentalApp" href="/rentalApp">
        Rental Application
      </a>
    </>
  );
};

export default Rentals;
