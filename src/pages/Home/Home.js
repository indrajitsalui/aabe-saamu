// src/pages/Home/Home.js
import React, { useEffect, useState } from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import BannerSlider from '../../components/BannerSlider/BannerSlider';
import VideoSlider from '../../components/VideoSlider/VideoSlider';
import AdSlider from '../../components/AdSlider/AdSlider';
import { fetchHomeData, fetchLiveTVList } from '../../api/apiService';
// import './Home.css';
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
    navigate('/livetv');
};

    return (
        <div>
            <Header />
            <div className="mt-28 w-8/12 mx-auto">
                {error && <div className="error-message">{error}</div>}
                <BannerSlider banners={banners} />
                {liveTV && (
                    <div className="bg-[#1F1F1F] rounded-2xl h-20 flex justify-between items-center my-10" onClick={handleLiveTVClick}>
                        <div className="flex items-center gap-x-6 pl-10">
                        <img src="/live.svg" alt="Live_now Icon" className='w-16' />
                        <div>
                            <p className="text-lg mb-1.5">Watch live TV</p>
                            <p className="text-sm font-light text-[#C3C3C3]">Get to see all the live shows</p>
                        </div>
                        </div>
                        <div className="bg-white bg-opacity-5 w-1/2 text-right h-20 rounded-e-2xl items-center flex justify-end pr-10 gap-x-2">
                        <div className="flex items-start gap-x-2">
                        <p className="text-sm text-center">Click here<br/>to watch now</p>
                        <img src="/click-arrow.svg" alt="click here to watch now arrow" className="w-12" />
                        </div>
                            <button className="text-white bg-[#D21F1D] py-2 px-3 rounded-lg">Watch Now</button>
                        </div>
                    </div>
                )}
                <p className="text-xl font-semibold text-center my-10">A1 Productions Videos</p>
                <VideoSlider videos={videos} onVideoClick={handleVideoClick}/>
                <p className="text-xl font-semibold text-center my-10">Advertisements</p>
                <AdSlider ads={ads} />
            </div>
            <Footer />
        </div>
    );
};

export default Home;
