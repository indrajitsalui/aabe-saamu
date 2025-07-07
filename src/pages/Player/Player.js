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

    return (
        <div className="player-page">
            <Header />
            <div className="player-content mt-28">
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
                                        playerVars: { 
                                            controls: 1, 
                                            rel: 0,
                                            showinfo: 0  
                                        }
                                    }
                                }}
                            />
                        </div>
                        <div className="video-details mt-4">
                            <h2 className="text-2xl font-semibold">{videoData.title}</h2>
                            <p className="mt-2 text-gray-300">{videoData.description}</p>
                        </div>
                    </>
                )}
            </div>
            <Footer />
        </div>
    );
};

export default Player;
