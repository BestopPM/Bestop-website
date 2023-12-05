import React, { useState, useEffect, useRef, lazy, Suspense } from "react";
import ShowingModal from "../ShowingModal/ShowingModal";
import propertyPhoto from "../assets/property-photo.jpeg";
import "./Rentals.scss";

const LazyRental = lazy(() => import(
  '../lazyComponents/lazyRental'
))

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
      <main>
        <h3 className="title">Property Information</h3>
        <section className="rentalContent__container">
          <div className="rentalContent__container--left">
            <h4 style={{ fontWeight: "500"}}>
              123 Happy Lane, Happyville, CA 80085
            </h4>
            {/* <img
              src={propertyPhoto}
              alt="propertyImage"
              className="property__img"
            ></img> */}
             <Suspense fallback = 
              {<div>Photo loading please wait...</div>}>
              <LazyRental />
              </Suspense>
          </div>

          <div className="rentalContent__container--right">
            <div>
              <p>
                <span style={{ fontWeight: "700", fontSize: "1.5rem" }}>
                  $2750
                </span>{" "}
                per month
              </p>
              <p>
                2 BR &nbsp;&nbsp; <span style={{ color: "#999999" }}>|</span>
                &nbsp;&nbsp; 2 BA &nbsp;&nbsp;{" "}
                <span style={{ color: "#999999" }}>|</span>&nbsp;&nbsp; 341 SF
              </p>
            </div>

            <div>
                <button
                  className="showingRequest__button"
                  onClick={handleOpenShowingModal}
                >
                  Request Showing
                </button>
                <ShowingModal
                  isOpen={isShowingModalOpen}
                  onSubmit={handleFormSubmit}
                  onClose={handleCloseShowingModal}
                />
            </div>

            <div>
              <a id="rentalApp" href="/rentalApp">
                Rental Application
              </a>
            </div>

            <div>
              <p>Bright home with tons of storage near Woodside Road!</p>
              <p style={{ color: "green" }}>
                <strong>Available now</strong>
              </p>
              <p>No pets allowed</p>
            </div>

            <div>
              <a href="https://www.zillow.com/">Full Details on Zillow</a>
            </div>

          </div>
        </section>
      </main>
    </>
  );
};

export default Rentals;
