// src/components/VideoCard/VideoCard.js
import React from 'react';
import './VideoCard.css';

const VideoCard = ({ title, thumbnail }) => {
    return (
        <div className="video-card">
            <img src={thumbnail} alt={title} className="video-thumbnail" />
            <div className="video-title">{title}</div>
        </div>
    );
};

export default VideoCard;
