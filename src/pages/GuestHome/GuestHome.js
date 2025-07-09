import React, { useEffect, useState } from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import BannerSlider from '../../components/BannerSlider/BannerSlider';
import VideoSlider from '../../components/VideoSlider/VideoSlider';
import AdSlider from '../../components/AdSlider/AdSlider';
import { fetchGuestHomeData } from '../../api/apiService';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const GuestHome = () => {
  const [banners, setBanners] = useState([]);
  const [videos, setVideos] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  // Redirect if already logged in
  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (token) {
      navigate('/home');
    }
  }, [navigate]);

  // Fetch banners + videos
  useEffect(() => {
    fetchGuestHomeData()
      .then((response) => {
        setBanners(response.data.banners);
        setVideos(response.data.a1_prod_videos);
      })
      .catch((error) => {
        console.error('Error fetching guest home data:', error);
        setError(error.message);
      });
  }, []);

  // Show toast when guest clicks any protected content
  const handleProtectedClick = (e) => {
    if (e && typeof e.preventDefault === 'function') {
      e.preventDefault();
    }

    toast.info('Please login to access this feature.', {
      position: 'top-center',
      autoClose: 2500,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      theme: 'dark',
    });
  };

  // Intercept header nav clicks (Live TV, etc.) using DOM
  useEffect(() => {
    const links = document.querySelectorAll('header nav a, header a[href="/"]');
    links.forEach(link => link.addEventListener('click', handleProtectedClick));

    return () => {
      links.forEach(link => link.removeEventListener('click', handleProtectedClick));
    };
  }, []);

  return (
    <div>
      <Header />
      <ToastContainer />

      <div className="mt-28 w-8/12 mx-auto">
        {error && <div className="error-message">{error}</div>}

        {/* Block banner clicks */}
        <div onClick={handleProtectedClick}>
          <BannerSlider banners={banners} />
        </div>

        <p className="text-xl font-semibold text-center my-10">A1 Productions Videos</p>
        <VideoSlider videos={videos} onVideoClick={handleProtectedClick} />

      </div>

      <Footer />
    </div>
  );
};

export default GuestHome;
