import React from 'react';
import './Cover.css';
import coverVideo from '../media/coverVideo.mp4';

const Cover = () => {
    return (
        <div className="cover-container">
            <video className="video" src={coverVideo} autoPlay loop muted/>
            <h1>Alejandro Bagnat</h1>
            <p>Programador</p>
        </div>
    )
}

export default Cover
