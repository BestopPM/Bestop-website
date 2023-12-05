import React from 'react';
import aboutPhoto from "../assets/aboutPhoto.webp";

const LazyImage = () => {
    return (
        <img src={aboutPhoto} alt="housesPhoto" className="about__img"/>
    )
}

export default LazyImage