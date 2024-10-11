// src/components/VideoSlider/VideoSlider.js
import React from 'react';
import Slider from 'react-slick';
import './VideoSlider.css';

const VideoSlider = ({ videos, onVideoClick }) => {
    const settings = {
        infinite: true,
        lazyLoad: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: true,
        pauseOnHover: true,
    };

    return (
        <Slider {...settings}>
            {videos.map((video, index) => (

                // <div key={index} className="px-4 h-full" onClick={() => onVideoClick(video.id)}>
                //     <img src={video.video_image} alt={video.title} className="rounded-2xl object-fit w-full"/>
                //     <p>{video.title}</p>
                // </div>

                <div key={index} className="px-4 h-full flex flex-col" onClick={() => onVideoClick(video.id)}>
                <div className="relative w-full" style={{ paddingBottom: '115%' }}>
                    <img
                        src={video.video_image}
                        alt={video.title}
                        className="absolute inset-0 w-full h-full object-cover rounded-2xl"
                    />
                    <div className="absolute bottom-0 left-0 right-0 text-white text-center z-10 bg-black bg-opacity-50 py-2 px-6 min-h-20 items-center justify-center flex font-medium text-base">
                        <p>{video.title}</p>
                    </div>
                </div>
            </div>
            

            ))}
        </Slider>
    );
};

export default VideoSlider;
