// src/components/AdSlider/AdSlider.js
import React from 'react';
import Slider from 'react-slick';
import './AdSlider.css';

const AdSlider = ({ ads }) => {
    const settings = {
        infinite: true,
        lazyLoad: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: true,
        pauseOnHover: true,
    };

    return (
        <div >
            <Slider {...settings}>
                {ads.map((ad, index) => (
                    <div key={index}  className="px-4">
                        <img src={ad.banner_image} alt={ad.title} className="rounded-2xl"/>
                        <div className="flex items-center gap-x-4 justify-between py-6">
                        <p className="capitalize">{ad.title}</p>
                        <button className="text-white bg-[#D21F1D] py-2 px-3 rounded-lg text-right">Visit Website</button>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default AdSlider;
