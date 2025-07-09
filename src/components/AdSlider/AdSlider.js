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
    pauseOnHover: false,
  };

  return (
    <div className="mb-8">
      <Slider {...settings}>
        {ads.map((ad, index) => (
          <div key={index} className="px-4">
            <img
              src={ad.ad_image}
              alt={ad.description}
              className="rounded-2xl w-full h-64 object-cover"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = '/fallback.jpg'; // Optional fallback image
              }}
            />
            <div className="flex items-center justify-between mt-4">
              <p className="text-white text-sm">{ad.description}</p>
              <a
                href={ad.ad_link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white bg-[#D21F1D] py-2 px-3 rounded-lg"
              >
                Visit Website
              </a>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default AdSlider;
