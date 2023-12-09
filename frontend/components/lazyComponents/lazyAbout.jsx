import React from 'react';
import aboutPhoto from "../assets/aboutPhoto.webp";

const LazyAbout = () => {
    return (
        <img src={aboutPhoto} width="600" height="317" alt="housesPhoto" className="about__img" decoding="async"/>
    )
}

export default LazyAbout;