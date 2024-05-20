// src/pages/Home/Home.js
import React, { useEffect, useState } from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import BannerSlider from '../../components/BannerSlider/BannerSlider';
import VideoSlider from '../../components/VideoSlider/VideoSlider';
import AdSlider from '../../components/AdSlider/AdSlider';
import { fetchHomeData, fetchLiveTVList } from '../../api/apiService';
import './Home.css';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const [banners, setBanners] = useState([]);
    const [videos, setVideos] = useState([]);
    const [ads, setAds] = useState([]);
    const [liveTV, setLiveTV] = useState(null);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        fetchHomeData()
            .then(response => {
                setBanners(response.data.banners);
                setVideos(response.data.a1_prod_videos);
                setAds(response.data.banners); // Assuming ads are same as banners
            })
            .catch(error => {
                console.error('Error fetching home data:', error);
                setError(error.message);
            });

        const currentDate = new Date();
        const day = String(currentDate.getDate()).padStart(2, '0');
        const month = currentDate.toLocaleString('default', { month: 'short' });
        const year = currentDate.getFullYear();
        const formattedDate = `${day}${month}${year}`;

        fetchLiveTVList(formattedDate)
            .then(response => {
                setLiveTV(response.data);
                console.log("data",formattedDate);
            })
            .catch(error => {
                console.error('Error fetching live TV data:', error);
                setError(error.message);
            });
    }, []);

    const handleVideoClick = (videoId) => {
        navigate(`/player/${videoId}`);
    };

    const handleLiveTVClick = () => {
        if (liveTV && liveTV.id) {
            navigate(`/player/${liveTV.id}`);
        }
    };

    return (
        <div className="home">
            <Header />
            <div className="content">
                {error && <div className="error-message">{error}</div>}
                <BannerSlider banners={banners} />
                {liveTV && (
                    <div className="live-tv-section" onClick={handleLiveTVClick}>
                        <div className="live-tv-text">
                            <h2>Live TV</h2>
                            <p>Watch live TV</p>
                            <span>Get to see all the live shows</span>
                        </div>
                        <div className="live-tv-button">
                            <button>Watch Now</button>
                        </div>
                    </div>
                )}
                <div className="section-title">A1 Productions Videos</div>
                <VideoSlider videos={videos} onVideoClick={handleVideoClick} />
                <div className="section-title">Advertisements</div>
                <AdSlider ads={ads} />
            </div>
            <Footer />
        </div>
    );
};

export default Home;
