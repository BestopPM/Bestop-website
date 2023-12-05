import React from 'react';
import propertyPhoto from "../assets/property-photo.webp";

const LazyRental = () => {
    return (
        <img src={propertyPhoto} width="450" height="300" alt="propertyImage" className="property__img" decoding="async"></img>
    )
}

export default LazyRental;