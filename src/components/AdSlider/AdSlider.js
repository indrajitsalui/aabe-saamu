// src/components/AdSlider/AdSlider.js
import React from 'react';
import Slider from 'react-slick';
import './AdSlider.css';

const AdSlider = ({ ads }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true, // Remove arrows
    };

    return (
        <div className="ad-slider">
            <Slider {...settings}>
                {ads.map((ad, index) => (
                    <div key={index} className="ad-slide">
                        <img src={ad.banner_image} alt={ad.title} className="ad-image" />
                        <div className="ad-description">{ad.title}</div>
                        <button className="visit-btn">Visit Website</button>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default AdSlider;
