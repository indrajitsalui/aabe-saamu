// src/pages/Player/Player.js
import React, { useEffect, useState } from 'react';
import './Player.css';
import { useParams } from 'react-router-dom';
import { fetchVideoDetails } from '../../api/apiService';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import ReactPlayer from 'react-player';

const Player = () => {
    const { videoId } = useParams();
    const [videoData, setVideoData] = useState(null);
    const [quality, setQuality] = useState('HD 1080p');
    const [videoUrl, setVideoUrl] = useState('');

    useEffect(() => {
        const getVideoDetails = async () => {
            try {
                const data = await fetchVideoDetails(videoId);
                setVideoData(data.data);
                setVideoUrl(data.data.url); // Default video URL
            } catch (error) {
                console.error('Error fetching video details:', error);
            }
        };

        getVideoDetails();
    }, [videoId]);

    const qualityOptions = ['HD 1080p', 'HD 720p', '480p'];

    const handleQualityChange = (event) => {
        setQuality(event.target.value);
        // Update video URL based on quality selection
        // This logic should be updated based on how quality changes are handled in your backend
        // For demo purposes, it's shown as a switch case
        switch (event.target.value) {
            case 'HD 720p':
                setVideoUrl(videoData.url.replace('1080p', '720p')); // Example: Replace 1080p with 720p in the URL
                break;
            case '480p':
                setVideoUrl(videoData.url.replace('1080p', '480p')); // Example: Replace 1080p with 480p in the URL
                break;
            default:
                setVideoUrl(videoData.url);
        }
    };

    return (
        <div className="player-page">
            <Header />
            <div className="player-content">
                {videoData && (
                    <>
                        <div className="video-wrapper">
                            <ReactPlayer
                                url={videoUrl}
                                controls={true}
                                width="800px"
                                height="450px"
                                playing
                                config={{
                                    youtube: {
                                        playerVars: { controls: 1 }
                                    }
                                }}
                            />
                        </div>
                        <div className="video-details">
                            <h2>{videoData.title}</h2>
                            <p>{videoData.description}</p>
                            <div className="video-actions">
                                <div className="video-quality">
                                    <label htmlFor="quality-select">Quality: </label>
                                    <select id="quality-select" value={quality} onChange={handleQualityChange}>
                                        {qualityOptions.map((option) => (
                                            <option key={option} value={option}>
                                                {option}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <button className="like-button">👍 Like</button>
                            </div>
                            <div className="video-schedule">
                                <h3>Schedule</h3>
                                <ul>
                                    <li>9:30 AM - Description is any type</li>
                                    <li>10:30 AM - Communication that</li>
                                    <li>11:30 AM - Place, object, person</li>
                                    <li>12:30 PM - Communication that</li>
                                    <li>1:30 PM - Minuciation that</li>
                                    <li>3:30 PM - Any type of communication</li>
                                </ul>
                            </div>
                        </div>
                    </>
                )}
            </div>
            <Footer />
        </div>
    );
};

export default Player;
