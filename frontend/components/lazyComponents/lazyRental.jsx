import React, { useState } from "react";
import { ArrowBigLeft, ArrowBigRight } from "lucide-react";
import img1 from "../assets/prop1.png";
import img2 from "../assets/prop2.JPEG";
import "./lazyRental.scss";

const IMAGES = [img1, img2];

const LazyRental = () => {
  const [imageIndex, setImageIndex] = useState(0);

  const showPrevImage = () => {
    setImageIndex((index) => {
      if (index === 0) return IMAGES.length - 1;
      return index - 1;
    });
  };

  const showNextImage = () => {
    setImageIndex((index) => {
      if (index === IMAGES.length - 1) return 0;
      return index + 1;
    });
  };

  return (
    <div style={{ width: "100%", height: "100%", position: "relative" }}>
      <img
        src={IMAGES[imageIndex]}
        width="450"
        height="300"
        alt="propertyImage"
        className="img-slider-img"
        decoding="async"
      />
      <button
        onClick={showPrevImage}
        className="img-slider-btn"
        style={{ left: 0 }}
      >
        <ArrowBigLeft />
      </button>
      <button
        onClick={showNextImage}
        className="img-slider-btn"
        style={{ right: 0 }}
      >
        <ArrowBigRight />
      </button>
    </div>
  );
};

export default LazyRental;
