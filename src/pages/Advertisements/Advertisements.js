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
                // Filter out dummy or invalid ads
                const realAds = response.data.filter(ad =>
                    ad.ad_image &&
                    !ad.ad_image.includes('placeholder') &&
                    ad.ad_link &&
                    ad.description &&
                    ad.description.length > 3
                );
                setAds(realAds);
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

                {ads.length > 0 ? (
                    <div className="grid grid-cols-2 gap-x-8 gap-y-16">
                        {ads.map((ad, index) => (
                            <div key={index}>
                                <a href={ad.ad_link} target="_blank" rel="noopener noreferrer">
                                    <img
                                        src={ad.ad_image}
                                        alt={ad.description}
                                        className="rounded-2xl w-full h-64 object-cover"
                                    />
                                    <div className="flex items-center justify-between mt-4">
                                        <p className="text-white text-sm">{ad.description}</p>
                                        <button className="text-white bg-[#D21F1D] py-2 px-3 rounded-lg">
                                            Visit Website
                                        </button>
                                    </div>
                                </a>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="flex flex-col items-center justify-center min-h-[400px]">
                        <img
                            src="/no-ads.svg"
                            alt="No advertisements available"
                            className="w-60 opacity-70 mb-6"
                        />
                        <p className="text-center text-[#C3C3C3] text-lg">
                            🛍️ No advertisements to show at the moment.
                        </p>
                    </div>
                )}
            </div>
            <Footer />
        </>
    );
};

export default Advertisements;
