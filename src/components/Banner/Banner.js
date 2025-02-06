// src/components/Banner/Banner.js
import React from 'react';
import './Banner.css';

const Banner = ({ title, image }) => {
    return (
        <div className="banner">
            <img src={image} alt={title} className="banner-image" />
            <p className="banner-title">{title}</p>
        </div>
    );
};

export default Banner;
