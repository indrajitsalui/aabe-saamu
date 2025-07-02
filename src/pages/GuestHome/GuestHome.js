import React, { useEffect, useState } from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import BannerSlider from '../../components/BannerSlider/BannerSlider';
import VideoSlider from '../../components/VideoSlider/VideoSlider';
import AdSlider from '../../components/AdSlider/AdSlider';
import { fetchGuestHomeData } from '../../api/apiService';
import { useNavigate } from 'react-router-dom';



const GuestHome = () => {

    const [banners, setBanners] = useState([]);
    const [videos, setVideos] = useState([]);
    const [error, setError] = useState(null);
    const [loginMessage, setLoginMessage] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('authToken');
        if (token) {
            navigate('/home');
        }
    }, [navigate]);
    useEffect(() => {
        fetchGuestHomeData()
            .then(response => {
                setBanners(response.data.banners);
                setVideos(response.data.a1_prod_videos);
            })
            .catch(error => {
                console.error('Error fetching guest home data:', error);
                setError(error.message);
            });
    }, []);

    const handleVideoClick = (videoId) => {
        setLoginMessage('Please login to watch videos.');

        setTimeout(() => {
            setLoginMessage('');
        }, 3000);
    };

    return (
        <div>
            <Header />
            {loginMessage && (
    <div className="bg-yellow-200 text-yellow-900 p-3 rounded-md text-center my-4">
        {loginMessage}
    </div>
)}
            <div className="mt-28 w-8/12 mx-auto">
                {error && <div className="error-message">{error}</div>}
                <BannerSlider banners={banners} />
                <p className="text-xl font-semibold text-center my-10">A1 Productions Videos</p>
                <VideoSlider videos={videos} onVideoClick={handleVideoClick} />
                <p className="text-xl font-semibold text-center my-10">Advertisements</p>
                <AdSlider ads={banners} />
            </div>
            <Footer />
        </div>
    );
};

export default GuestHome;
