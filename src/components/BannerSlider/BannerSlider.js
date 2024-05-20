// src/components/BannerSlider/BannerSlider.js
import React from 'react';
import Slider from 'react-slick';
import './BannerSlider.css';

const BannerSlider = ({ banners }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false, // Remove arrows
    };

    return (
        <div className="banner-slider">
            <Slider {...settings}>
                {banners.map((banner, index) => (
                    <div key={index} className="banner-slide">
                        <img src={banner.banner_image} alt={banner.title} className="banner-image" />
                        <p className="banner-title">{banner.title}</p>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default BannerSlider;
