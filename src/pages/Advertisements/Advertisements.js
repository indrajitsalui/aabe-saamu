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
        <>
            <Header />
                <div className="mt-28 w-8/12 mx-auto">
                <p className="text-xl font-semibold text-center mb-10">Advertisements</p>
                <div className="grid grid-cols-2 gap-x-8 gap-y-16">
                    {ads.map((ad, index) => (
                        <div key={index}>
                            <a href={ad.url} target="_blank" rel="noopener noreferrer">
                                <img src={ad.banner_image} alt={ad.title} className=" rounded-2xl"/>
                                <div className="flex items-center justify-between mt-4">
                                <p>{ad.title}</p>
                                <p>{ad.description}</p>
                                <button className="text-white bg-[#D21F1D] py-2 px-3 rounded-lg">Visit Website</button>
                                </div>
                            </a>
                        </div>
                    ))}
                </div>
                </div>
            <Footer />
        </>
    );
};

export default Advertisements;
