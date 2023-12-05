import React from 'react';
import propertyPhoto from "../assets/property-photo.jpeg";

const LazyRental = () => {
    return (
        <img src={propertyPhoto} alt="propertyImage" className="property__img"></img>
    )
}

export default LazyRental;