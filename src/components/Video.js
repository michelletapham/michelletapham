import React from "react";

const Video = ({ video, subtitle, isVertical }) => {
    return (
        <div className="video">
            <video className={isVertical ? "vertical" : "horizontal"} src={video} controls/>
            <p>{subtitle}</p>
        </div>
    );
};

export default Video;