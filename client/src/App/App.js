import React, { useEffect, useState } from 'react';
import SkeletonLoader from "tiny-skeleton-loader-react";
import './App.css';
import Video from "../Components/Video/Video"
import Axios from '../Services/Axios';

function App() {
  const [videos, setVideos]= useState([]);
  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await Axios.get("/v2/posts");
        setVideos(response.data);
        return response;
      } catch (error) {
        console.warn("Not connected to the internet!");
        alert("Not connected to the internet!");
      }
    }
    fetchPosts();
  }, []);
  return (
    <div className="app">
      {videos.length?
        <div className="app___videos">
          {videos.map(({posterurl, vidurl, likes, comments, shares, channel, detail, tickertext}, index) => (
            <Video key={index} posterurl={posterurl} vidurl={vidurl} likes={likes} comments={comments} shares={shares} channel={channel} detail={detail} tickertext={tickertext} />
          ))}
        </div>
        :
        <div className="skeleton___loader">
          <div className="loader___animation"></div>
          <div className="loader___sidebar">
            <SkeletonLoader circle/>
            <SkeletonLoader circle/>
            <SkeletonLoader circle/>
          </div>
          <div className="loader___footer">
            <SkeletonLoader/>
            <SkeletonLoader/>
          </div>
        </div>
      }
    </div>
  );
}

export default App;
