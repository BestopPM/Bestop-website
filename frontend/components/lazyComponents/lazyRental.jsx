import React, { useState } from "react";
import { ArrowBigLeft, ArrowBigRight, Circle, CircleDot } from "lucide-react";
import img1 from "../assets/prop1.png";
import img2 from "../assets/prop2.JPEG";
import "./lazyRental.scss";

const IMAGES = [
  { url: img1, alt: "front of house" },
  { url: img2, alt: "kitchen" },
];

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
    <section
      aria-label="Image Slider"
      style={{ width: "100%", height: "100%", position: "relative" }}
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          overflow: "hidden",
        }}
      >
        {IMAGES.map(({ url, alt }, index) => (
          <img
            key={url}
            src={url}
            width="450"
            height="300"
            alt={alt}
            aria-hidden={imageIndex !== index}
            className="img-slider-img"
            decoding="async"
            style={{ translate: `${-100 * imageIndex}%` }}
          />
        ))}
      </div>
      <button
        onClick={showPrevImage}
        className="img-slider-btn"
        style={{ left: 0 }}
        aria-label="View Previous Image"
      >
        <ArrowBigLeft aria-hidden />
      </button>
      <button
        onClick={showNextImage}
        className="img-slider-btn"
        style={{ right: 0 }}
        aria-label="View Next Image"
      >
        <ArrowBigRight aria-hidden />
      </button>
      <div
        style={{
          position: "absolute",
          bottom: ".5rem",
          left: "50%",
          translate: "-50%",
          bottom: "10%",
          display: "flex",
          gap: ".25rem",
        }}
      >
        {IMAGES.map((_, index) => (
          <button
            key={index}
            className="img-slider-dot-btn"
            onClick={() => setImageIndex(index)}
            aria-label={`View Image ${index + 1}`}
          >
            {index === imageIndex ? <CircleDot aria-hidden /> : <Circle />}
          </button>
        ))}
      </div>
    </section>
  );
};

export default LazyRental;
