// src/pages/Advertisements/Advertisements.js
import React, { useEffect, useState } from 'react';
import './Advertisements.css';
import { fetchAdvertisements } from '../../api/apiService';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const Advertisements = () => {
    const [ads, setAds] = useState([]);

    useEffect(() => {
        fetchAdvertisements()
            .then(response => {
                let fetchedAds = response.data.banners;
                if (fetchedAds.length < 6) {
                    const dummyAds = Array(6 - fetchedAds.length).fill({
                        title: 'Dummy Ad',
                        description: 'This is a dummy advertisement.',
                        image: 'https://via.placeholder.com/300x150',
                        url: '#'
                    });
                    fetchedAds = [...fetchedAds, ...dummyAds];
                }
                setAds(fetchedAds);
            })
            .catch(error => {
                console.error('Error fetching advertisements:', error);
            });
    }, []);

    return (
        <div className="advertisements">
            <Header />
            <h2 className="section-title">Advertisements</h2>
            <div className="ads-container">
                {ads.map((ad, index) => (
                    <div key={index} className="ad-card">
                        <a href={ad.url} target="_blank" rel="noopener noreferrer">
                            <img src={ad.banner_image} alt={ad.title} />
                            <p>{ad.title}</p>
                            <p>{ad.description}</p>
                            <button className="visit-website-button">Visit Website</button>
                        </a>
                    </div>
                ))}
            </div>
            <Footer />
        </div>
    );
};

export default Advertisements;
