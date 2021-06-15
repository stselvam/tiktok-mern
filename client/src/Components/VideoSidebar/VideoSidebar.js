import React, { useState } from 'react'
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import MessageIcon from '@material-ui/icons/Message';
import ShareIcon from '@material-ui/icons/Share';
import "./VideoSidebar.css";

function VideoSidebar({likes, shares, comments}) {
    const [liked, setLiked] = useState(false);

    return (
        <div className="video___sidebar">
            <div className="button">
                {liked? (
                    <FavoriteIcon onClick={(e) => setLiked(false)} fontSize="large"/>
                ): (
                    <FavoriteBorderIcon onClick={(e) => setLiked(true)} fontSize="large"/>
                )}
                <p>{liked? (parseInt(likes)+1) : (likes)}</p>
            </div>
            <div className="button">
                <MessageIcon fontSize="large"/>
                <p>{comments}</p>
            </div>
            <div className="button">
                <ShareIcon fontSize="large"/>
                <p>{shares}</p>
            </div>
        </div>
    )
}

export default VideoSidebar
