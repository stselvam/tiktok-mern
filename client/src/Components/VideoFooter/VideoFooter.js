import React from 'react'
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import Ticker from "react-ticker";
import "./VideoFooter.css";

function VideoFooter({channel, detail, tickertext}) {
    return (
        <div className="video___footer">
            <div className="text">
                <h3>@{channel}</h3>
                <p>{detail}</p>
                <div className="ticker">
                    <MusicNoteIcon className="icon"/>
                    <Ticker mode="smooth">
                        {({index}) => (
                            <>
                                <p>{tickertext}</p>
                            </>
                        )}
                    </Ticker>
                </div>
            </div>
            <img src="/images/disc.png" alt="" />
        </div>
    )
}

export default VideoFooter
