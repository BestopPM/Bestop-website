import React from 'react';
import aboutPhoto from "../assets/aboutPhoto.webp";

const LazyAbout = () => {
    return (
        <img src={aboutPhoto} alt="housesPhoto" className="about__img"/>
    )
}

export default LazyAbout;