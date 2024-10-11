// src/components/BannerSlider/BannerSlider.js
import React from 'react';
import Slider from 'react-slick';
import './BannerSlider.css';

const BannerSlider = ({ banners }) => {
    const settings = {
        dots: true,
        infinite: true,
        lazyLoad: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: false, // Remove arrows
        pauseOnHover: true,
        appendDots: dots => (
            <div
              style={{
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                position: "absolute",
                bottom: "6px",
                borderBottomLeftRadius: "16px",
                borderBottomRightRadius: "16px",
                padding: "20px 16px"
              }}
            >
                <ul style={{ display: 'flex', justifyContent: 'center' }}>
                {React.Children.map(dots, (dot) =>
                  React.cloneElement(dot, {
                    style: { color: 'white' } // Change dot color to white
                  })
                )}
              </ul>
            </div>
          ),
    };

    return (
      
            <Slider {...settings} className="rounded-2xl">
                {banners.map((banner, index) => (
                    <div key={index} className="rounded-2xl">
                        <img src={banner.banner_image} alt={banner.title} className="w-full rounded-2xl" />
                        {/* <p>{banner.title}</p> */}
                    </div>
                ))}
            </Slider>
       
    );
};

export default BannerSlider;
