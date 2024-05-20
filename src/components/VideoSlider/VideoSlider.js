// src/components/VideoSlider/VideoSlider.js
import React from 'react';
import Slider from 'react-slick';
import './VideoSlider.css';

const VideoSlider = ({ videos, onVideoClick }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            }
        ]
    };

    return (
        <Slider {...settings}>
            {videos.map((video, index) => (
                <div key={index} className="video-card" onClick={() => onVideoClick(video.id)}>
                    <img src={video.video_image} alt={video.title} />
                    <p>{video.title}</p>
                </div>
            ))}
        </Slider>
    );
};

export default VideoSlider;
