import React from 'react';
import logo from "../assets/logo.webp";

const LazyLogo = () => {
    return (
        <img src={logo} alt="BesTop Logo" className="logo__img"/>
    )
}

export default LazyLogo;