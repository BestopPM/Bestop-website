import React from 'react';
import logo from "../assets/logo.webp";

const LazyLogo = () => {
    return (
        <img src={logo} width="180" height="82" alt="BesTop Logo" className="logo__img" decoding="async"/>
    )
}

export default LazyLogo;