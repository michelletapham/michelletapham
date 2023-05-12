import React from "react";

const Photo = ({ image, subtitle, altText, isVertical }) => {
    return (
        <div className="photo">
            <img className={isVertical ? "vertical" : "horizontal"} src={image} alt={altText}/>
            <p>{subtitle}</p>
        </div>
    );
};

export default Photo;