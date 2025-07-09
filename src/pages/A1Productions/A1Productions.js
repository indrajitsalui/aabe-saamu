// src/pages/A1Productions/A1Productions.js
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import './A1Productions.css';
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
         const token = localStorage.getItem('authToken');
         if (!token) return; // Wait until token is set
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
        infinite: true,
        lazyLoad: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: true,
        pauseOnHover: false,
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
     <>
        <Header />
        <div className="mt-28 w-8/12 mx-auto">
            <BannerSlider banners={banners} />
            <p className="text-xl font-semibold text-center my-10">A1 Productions Videos</p>
            <div>
                {videos.slice(0, 3).length > 0 && (
                    <Slider {...settings} className="mb-6">
                        {videos.slice(0, 3).map((video, index) => (
                            <div key={index}  className="px-4 h-full flex flex-col" onClick={() => handleVideoClick(video.id)}>
                                <div className="relative w-full" style={{ paddingBottom: '115%' }}>
                                <img src={video.video_image} alt={video.title} className="absolute inset-0 w-full h-full object-cover rounded-2xl" />
                                <div className="absolute bottom-0 left-0 right-0 text-white text-center z-10 bg-black bg-opacity-50 py-2 px-6 min-h-20 items-center justify-center flex font-medium text-base">
                                <p>{video.title}</p>
                                 </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                )}
                
                {videos.slice(3, 6).length > 0 && (

                    <Slider {...settings} className="mb-12">
                        {videos.slice(3, 6).map((video, index) => (
                            <div key={index}  className="px-4 h-full flex flex-col" onClick={() => handleVideoClick(video.id)}>
                                <div className="relative w-full" style={{ paddingBottom: '115%' }}>
                                <img src={video.video_image} alt={video.title} className="absolute inset-0 w-full h-full object-cover rounded-2xl" />
                                <div className="absolute bottom-0 left-0 right-0 text-white text-center z-10 bg-black bg-opacity-50 py-2 px-6 min-h-20 items-center justify-center flex font-medium text-base">
                        <p>{video.title}</p>
                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                )}
            </div>
        </div>
         <Footer />
         </>

    );
};

export default A1Productions;
