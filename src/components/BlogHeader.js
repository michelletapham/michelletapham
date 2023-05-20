import React from "react";


const BlogHeader = ({ date, title, subtitle, image, altText }) => {
    return (
        <div className="header">
            <p className="date">{date}</p>
            <h1 className="title">{title}</h1>
            <h2 className="subtitle">{subtitle}</h2>
            <img className="cover-photo" src={image} alt={altText}/>
      </div>
    );
};

export default BlogHeader;