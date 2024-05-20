// src/pages/A1Productions/A1Productions.js
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './A1Productions.css';
import { fetchA1ProdHome } from '../../api/apiService';
import Slider from 'react-slick';
import BannerSlider from '../../components/BannerSlider/BannerSlider';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const A1Productions = () => {
    const [a1ProdVideos, setA1ProdVideos] = useState([]);
    const [banners, setBanners] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        fetchA1ProdHome()
            .then(response => {
                const data = response.data;
                setBanners(data.banners || []);
                setA1ProdVideos(data.a1_prod_videos || []);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching A1 Productions videos:', error);
                setError('Failed to load A1 Productions videos');
                setLoading(false);
            });
    }, []);

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

    const handleVideoClick = (videoId) => {
        navigate(`/player/${videoId}`);
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    // Add dummy data if there are fewer than 6 videos
    const totalVideos = a1ProdVideos.length;
    const dummyVideos = Array.from({ length: 6 - totalVideos }, (_, index) => ({
        id: `dummy-${index}`,
        title: `Dummy Video ${index + 1}`,
        video_image: 'https://via.placeholder.com/150',
        url: '#'
    }));

    const videos = [...a1ProdVideos, ...dummyVideos];

    return (
        <div className="a1-productions">
            <Header />
            <BannerSlider banners={banners} />
            <h2 className="section-title">A1 Productions Videos</h2>
            <div className="video-slider-container">
                {videos.slice(0, 3).length > 0 && (
                    <Slider {...settings}>
                        {videos.slice(0, 3).map((video, index) => (
                            <div key={index} className="video-card" onClick={() => handleVideoClick(video.id)}>
                                <img src={video.video_image} alt={video.title} />
                                <p>{video.title}</p>
                            </div>
                        ))}
                    </Slider>
                )}
                {videos.slice(3, 6).length > 0 && (
                    <Slider {...settings}>
                        {videos.slice(3, 6).map((video, index) => (
                            <div key={index} className="video-card" onClick={() => handleVideoClick(video.id)}>
                                <img src={video.video_image} alt={video.title} />
                                <p>{video.title}</p>
                            </div>
                        ))}
                    </Slider>
                )}
            </div>
            <Footer />
        </div>
    );
};

export default A1Productions;
