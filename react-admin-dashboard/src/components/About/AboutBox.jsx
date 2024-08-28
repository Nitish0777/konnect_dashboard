import React, { useState } from "react";
import "./about.css"; // Import your CSS file here

const AboutBox = ({ heading, imageSrc, description }) => {
  const [expanded, setExpanded] = useState(false);

  const handleReadMoreClick = (event) => {
    event.preventDefault(); // Prevent the default behavior of the anchor tag
    setExpanded(!expanded);
  };

  return (
    <div className={`about-box ${expanded ? "expanded" : ""}`}>
      <h3>
        <b>{heading}</b>
      </h3>
      <div className="detail">
        <img className="heroimg" src={imageSrc} alt="Hero" />
        <p>{description}</p>
      </div>
      <a href="#" onClick={handleReadMoreClick}>
        {expanded ? "READ LESS" : "READ MORE"}
      </a>
    </div>
  );
};

export default AboutBox;
