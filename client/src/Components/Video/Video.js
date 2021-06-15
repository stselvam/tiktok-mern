import React, { useRef, useState } from 'react'
import "./videos.css";

import VideoFooter from "../VideoFooter/VideoFooter";
import VideoSidebar from "../VideoSidebar/VideoSidebar";

function Video({posterurl, vidurl, likes, shares, comments, channel, detail, tickertext}) {
    const [playing, setPlaying] = useState(false);
    const videoRef = useRef(null);
    const handleVideoPress = () => {
        if(playing) {
            videoRef.current.pause();
            setPlaying(false);
        } else{
            videoRef.current.play();
            setPlaying(true);
        }

    };

    return (
        <div className="video___element">
            <video ref={videoRef} onClick={handleVideoPress} className="video___player" poster={posterurl} loop>
                <source src={vidurl} type="video/mp4" />
            </video>
            <VideoFooter channel={channel} detail={detail} tickertext={tickertext}/>
            <VideoSidebar likes={likes} comments={comments} shares={shares}/>
        </div>
    )
}

export default Video
